
// Telegram WebApp types and utilities
export interface TelegramWebApp {
  initData: string;
  initDataUnsafe: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code?: string;
    };
    start_param?: string;
  };
  version: string;
  platform: string;
  colorScheme: 'light' | 'dark';
  themeParams: {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
  };
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  headerColor: string;
  backgroundColor: string;
  BackButton: {
    isVisible: boolean;
    show(): void;
    hide(): void;
    onClick(callback: () => void): void;
    offClick(callback: () => void): void;
  };
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText(text: string): void;
    onClick(callback: () => void): void;
    offClick(callback: () => void): void;
    show(): void;
    hide(): void;
    enable(): void;
    disable(): void;
    showProgress(leaveActive?: boolean): void;
    hideProgress(): void;
  };
  HapticFeedback: {
    impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): void;
    notificationOccurred(type: 'error' | 'success' | 'warning'): void;
    selectionChanged(): void;
  };
  ready(): void;
  expand(): void;
  close(): void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

export const getTelegramWebApp = (): TelegramWebApp | undefined => {
  return window.Telegram?.WebApp;
};

export const isTelegramWebApp = (): boolean => {
  return !!window.Telegram?.WebApp;
};

// Telegram service object that provides all the methods needed by useTelegram hook
export const telegramService = {
  isInTelegram(): boolean {
    return isTelegramWebApp();
  },

  getUserData() {
    const webApp = getTelegramWebApp();
    return webApp?.initDataUnsafe?.user || null;
  },

  getThemeParams() {
    const webApp = getTelegramWebApp();
    return webApp?.themeParams || {};
  },

  setMainButton(text: string, onClick: () => void) {
    const webApp = getTelegramWebApp();
    if (webApp) {
      webApp.MainButton.setText(text);
      webApp.MainButton.onClick(onClick);
      webApp.MainButton.show();
    }
  },

  hideMainButton() {
    const webApp = getTelegramWebApp();
    if (webApp) {
      webApp.MainButton.hide();
    }
  },

  setBackButton(onClick: () => void) {
    const webApp = getTelegramWebApp();
    if (webApp) {
      webApp.BackButton.onClick(onClick);
      webApp.BackButton.show();
    }
  },

  hideBackButton() {
    const webApp = getTelegramWebApp();
    if (webApp) {
      webApp.BackButton.hide();
    }
  },

  hapticFeedback(type: 'impact' | 'notification' | 'selection', style?: string) {
    const webApp = getTelegramWebApp();
    if (webApp) {
      if (type === 'impact') {
        webApp.HapticFeedback.impactOccurred(style as any || 'light');
      } else if (type === 'notification') {
        webApp.HapticFeedback.notificationOccurred(style as any || 'success');
      } else if (type === 'selection') {
        webApp.HapticFeedback.selectionChanged();
      }
    }
  },

  showAlert(message: string) {
    alert(message);
  },

  showConfirm(message: string): boolean {
    return confirm(message);
  },

  expand() {
    const webApp = getTelegramWebApp();
    if (webApp) {
      webApp.expand();
    }
  },

  close() {
    const webApp = getTelegramWebApp();
    if (webApp) {
      webApp.close();
    }
  },

  getViewportHeight(): number {
    const webApp = getTelegramWebApp();
    return webApp?.viewportHeight || window.innerHeight;
  }
};
