
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface DesktopNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const DesktopNavigation = ({ activeSection, setActiveSection }: DesktopNavigationProps) => {
  const navItems = [
    { id: "profile", label: "Мой профиль", icon: "👤" },
    { id: "dashboard", label: "Дашборд", icon: "📊" },
    { id: "standards", label: "Стандарты", icon: "📋" },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h1 className="font-bold text-lg text-primary">Loov Portal</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activeSection === item.id}
                    onClick={() => setActiveSection(item.id)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

// Компонент для отображения кнопки возврата меню в основной области
export const CollapsedSidebarTrigger = () => {
  const { state } = useSidebar();
  
  if (state !== "collapsed") {
    return null;
  }

  return (
    <div className="absolute top-6 right-6 z-50">
      <SidebarTrigger />
    </div>
  );
};
