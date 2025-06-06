
import { useEffect, useState } from 'react';
import { telegramService } from '@/lib/telegram';

export const useTelegram = () => {
  const [isInTelegram, setIsInTelegram] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [themeParams, setThemeParams] = useState<any>({});

  useEffect(() => {
    setIsInTelegram(telegramService.isInTelegram());
    setUser(telegramService.getUserData());
    setThemeParams(telegramService.getThemeParams());
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
