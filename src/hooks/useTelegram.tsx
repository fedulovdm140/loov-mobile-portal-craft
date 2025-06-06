
import { useEffect, useState } from 'react';
import { telegramService } from '@/lib/telegram';
import { enhancedTelegramService } from '@/lib/telegram-validation';

export const useTelegram = () => {
  const [isInTelegram, setIsInTelegram] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [themeParams, setThemeParams] = useState<any>({});
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    const inTelegram = telegramService.isInTelegram();
    setIsInTelegram(inTelegram);
    
    if (inTelegram) {
      // Get bot token from environment (in production, this should be validated server-side)
      const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      
      // In development, skip validation or use mock data
      const isDevelopment = import.meta.env.DEV;
      
      if (isDevelopment) {
        // Use basic user data without validation in development
        setUser(telegramService.getUserData());
        setIsValidated(true);
        console.log('Development mode: skipping Telegram validation');
      } else if (botToken) {
        // Validate in production
        const validatedUser = enhancedTelegramService.getValidatedUserData(botToken);
        const isSecure = enhancedTelegramService.isSecureTelegramEnvironment(botToken);
        
        setUser(validatedUser);
        setIsValidated(isSecure);
        
        if (!isSecure) {
          console.warn('Telegram environment validation failed');
        }
      } else {
        console.warn('Bot token not configured for Telegram validation');
        setUser(telegramService.getUserData());
        setIsValidated(false);
      }
      
      setThemeParams(telegramService.getThemeParams());
    }
  }, []);

  const showMainButton = (text: string, onClick: () => void) => {
    telegramService.setMainButton(text, onClick);
  };

  const hideMainButton = () => {
    telegramService.hideMainButton();
  };

  const showBackButton = (onClick: () => void) => {
    telegramService.setBackButton(onClick);
  };

  const hideBackButton = () => {
    telegramService.hideBackButton();
  };

  const hapticFeedback = (type: 'impact' | 'notification' | 'selection', style?: string) => {
    telegramService.hapticFeedback(type, style);
  };

  const showAlert = (message: string) => {
    telegramService.showAlert(message);
  };

  const showConfirm = (message: string) => {
    return telegramService.showConfirm(message);
  };

  const expand = () => {
    telegramService.expand();
  };

  const close = () => {
    telegramService.close();
  };

  return {
    isInTelegram,
    user,
    themeParams,
    isValidated, // New: indicates if Telegram data is validated
    showMainButton,
    hideMainButton,
    showBackButton,
    hideBackButton,
    hapticFeedback,
    showAlert,
    showConfirm,
    expand,
    close,
    viewportHeight: telegramService.getViewportHeight(),
  };
};
