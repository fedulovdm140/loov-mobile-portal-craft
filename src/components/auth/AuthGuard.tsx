
import { ReactNode } from "react";
import { LoginForm } from "./LoginForm";

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  // Временная заглушка для аутентификации
  // В реальном проекте здесь будет интеграция с Keycloak
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return <>{children}</>;
};
