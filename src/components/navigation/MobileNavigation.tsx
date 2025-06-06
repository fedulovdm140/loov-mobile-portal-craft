
import { Button } from "@/components/ui/button";

interface MobileNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const MobileNavigation = ({ activeSection, setActiveSection }: MobileNavigationProps) => {
  const navItems = [
    { id: "profile", label: "Мой профиль", icon: "👤" },
    { id: "dashboard", label: "Дашборд", icon: "📊" },
    { id: "standards", label: "Стандарты", icon: "📋" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            onClick={() => setActiveSection(item.id)}
            className="flex flex-col items-center gap-1 h-auto py-2 px-3 text-xs"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
};
