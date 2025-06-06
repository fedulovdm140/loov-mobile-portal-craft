
// Telegram WebApp API wrapper service
declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        initData: string;
        initDataUnsafe: any;
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
          secondary_bg_color?: string;
        };
        isExpanded: boolean;
        viewportHeight: number;
        viewportStableHeight: number;
        MainButton: {
          text: string;
          color: string;
          textColor: string;
          isVisible: boolean;
          isProgressVisible: boolean;
          isActive: boolean;
          setText: (text: string) => void;
          onClick: (callback: () => void) => void;
          offClick: (callback: () => void) => void;
          show: () => void;
          hide: () => void;
          enable: () => void;
          disable: () => void;
          showProgress: (leaveActive?: boolean) => void;
          hideProgress: () => void;
        };
        BackButton: {
          isVisible: boolean;
          onClick: (callback: () => void) => void;
          offClick: (callback: () => void) => void;
          show: () => void;
          hide: () => void;
        };
        HapticFeedback: {
          impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
          notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
          selectionChanged: () => void;
        };
        expand: () => void;
        close: () => void;
        showAlert: (message: string, callback?: () => void) => void;
        showConfirm: (message: string, callback?: (confirmed: boolean) => void) => void;
        ready: () => void;
      };
    };
  }
}

class TelegramService {
  private get webApp() {
    return window.Telegram?.WebApp;
  }

  isInTelegram(): boolean {
    return !!this.webApp && !!this.webApp.initData;
  }

  getUserData() {
    if (!this.webApp) return null;
    return this.webApp.initDataUnsafe?.user || null;
  }

  getThemeParams() {
    if (!this.webApp) return {};
    return this.webApp.themeParams || {};
  }

  setMainButton(text: string, onClick: () => void) {
    if (!this.webApp?.MainButton) return;
    
    this.webApp.MainButton.setText(text);
    this.webApp.MainButton.onClick(onClick);
    this.webApp.MainButton.show();
  }

  hideMainButton() {
    if (!this.webApp?.MainButton) return;
    this.webApp.MainButton.hide();
  }

  setBackButton(onClick: () => void) {
    if (!this.webApp?.BackButton) return;
    
    this.webApp.BackButton.onClick(onClick);
    this.webApp.BackButton.show();
  }

  hideBackButton() {
    if (!this.webApp?.BackButton) return;
    this.webApp.BackButton.hide();
  }

  hapticFeedback(type: 'impact' | 'notification' | 'selection', style?: string) {
    if (!this.webApp?.HapticFeedback) return;
    
    switch (type) {
      case 'impact':
        this.webApp.HapticFeedback.impactOccurred(style as any || 'medium');
        break;
      case 'notification':
        this.webApp.HapticFeedback.notificationOccurred(style as any || 'success');
        break;
      case 'selection':
        this.webApp.HapticFeedback.selectionChanged();
        break;
    }
  }

  showAlert(message: string) {
    if (!this.webApp) {
      alert(message);
      return;
    }
    this.webApp.showAlert(message);
  }

  showConfirm(message: string): Promise<boolean> {
    return new Promise((resolve) => {
      if (!this.webApp) {
        resolve(confirm(message));
        return;
      }
      
      this.webApp.showConfirm(message, (confirmed) => {
        resolve(confirmed);
      });
    });
  }

  expand() {
    if (!this.webApp) return;
    this.webApp.expand();
  }

  close() {
    if (!this.webApp) return;
    this.webApp.close();
  }

  getViewportHeight(): number {
    if (!this.webApp) return window.innerHeight;
    return this.webApp.viewportHeight || window.innerHeight;
  }

  ready() {
    if (!this.webApp) return;
    this.webApp.ready();
  }
}

export const telegramService = new TelegramService();
