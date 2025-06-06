
import { useEffect } from 'react';
import { useTelegram } from '@/hooks/useTelegram';

interface TelegramAdapterProps {
  children: React.ReactNode;
}

export const TelegramAdapter = ({ children }: TelegramAdapterProps) => {
  const { isInTelegram, themeParams, expand, user } = useTelegram();

  useEffect(() => {
    if (isInTelegram) {
      // Расширяем приложение на весь экран
      expand();
      
      // Применяем тему Telegram
      if (themeParams.bg_color) {
        document.documentElement.style.setProperty('--background', themeParams.bg_color);
      }
      if (themeParams.text_color) {
        document.documentElement.style.setProperty('--foreground', themeParams.text_color);
      }
      
      console.log('LoovIS запущен в Telegram Mini App', user);
    }
  }, [isInTelegram, themeParams, expand, user]);

  return (
    <div className={`min-h-screen ${isInTelegram ? 'telegram-mini-app' : ''}`}>
      {children}
    </div>
  );
};
