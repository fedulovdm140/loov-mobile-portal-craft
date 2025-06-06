import CryptoJS from 'crypto-js';

// Telegram data validation utilities
export interface TelegramUserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

export interface TelegramInitData {
  user?: TelegramUserData;
  start_param?: string;
  auth_date: number;
  hash: string;
}

// Validate Telegram WebApp init data
export function validateTelegramData(initData: string, botToken: string): boolean {
  try {
    const urlParams = new URLSearchParams(initData);
    const hash = urlParams.get('hash');
    
    if (!hash) {
      console.warn('No hash found in Telegram init data');
      return false;
    }

    // Remove hash from data
    urlParams.delete('hash');
    
    // Sort parameters and create data check string
    const dataCheckArr: string[] = [];
    urlParams.forEach((value, key) => {
      dataCheckArr.push(`${key}=${value}`);
    });
    dataCheckArr.sort();
    const dataCheckString = dataCheckArr.join('\n');

    // Create secret key using crypto-js
    const secretKey = CryptoJS.HmacSHA256('WebAppData', botToken);
    
    // Calculate hash
    const calculatedHash = CryptoJS.HmacSHA256(dataCheckString, secretKey).toString();

    const isValid = calculatedHash === hash;
    
    if (!isValid) {
      console.warn('Telegram data validation failed');
    }

    return isValid;
  } catch (error) {
    console.error('Error validating Telegram data:', error);
    return false;
  }
}

// Parse Telegram init data
export function parseTelegramInitData(initData: string): TelegramInitData | null {
  try {
    const urlParams = new URLSearchParams(initData);
    const userParam = urlParams.get('user');
    const hash = urlParams.get('hash');
    const authDate = urlParams.get('auth_date');
    const startParam = urlParams.get('start_param');

    if (!hash || !authDate) {
      return null;
    }

    const result: TelegramInitData = {
      auth_date: parseInt(authDate),
      hash,
    };

    if (userParam) {
      try {
        result.user = JSON.parse(decodeURIComponent(userParam));
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }

    if (startParam) {
      result.start_param = startParam;
    }

    return result;
  } catch (error) {
    console.error('Error parsing Telegram init data:', error);
    return null;
  }
}

// Check if data is fresh (not older than 24 hours)
export function isTelegramDataFresh(authDate: number): boolean {
  const now = Math.floor(Date.now() / 1000);
  const maxAge = 24 * 60 * 60; // 24 hours in seconds
  
  return (now - authDate) <= maxAge;
}

// Enhanced Telegram service with validation
export const enhancedTelegramService = {
  // Validate current session
  validateSession(botToken?: string): boolean {
    const webApp = window.Telegram?.WebApp;
    if (!webApp?.initData || !botToken) {
      return false;
    }

    const isValid = validateTelegramData(webApp.initData, botToken);
    const parsedData = parseTelegramInitData(webApp.initData);
    
    if (parsedData && !isTelegramDataFresh(parsedData.auth_date)) {
      console.warn('Telegram session is too old');
      return false;
    }

    return isValid;
  },

  // Get validated user data
  getValidatedUserData(botToken?: string): TelegramUserData | null {
    const webApp = window.Telegram?.WebApp;
    if (!webApp?.initData || !botToken) {
      return null;
    }

    if (!this.validateSession(botToken)) {
      return null;
    }

    const parsedData = parseTelegramInitData(webApp.initData);
    return parsedData?.user || null;
  },

  // Check if running in secure Telegram environment
  isSecureTelegramEnvironment(botToken?: string): boolean {
    return !!window.Telegram?.WebApp && 
           (process.env.NODE_ENV === 'development' || this.validateSession(botToken));
  }
};
