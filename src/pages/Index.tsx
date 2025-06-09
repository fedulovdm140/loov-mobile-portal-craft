
import { useState } from "react";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { DesktopNavigation, CollapsedSidebarTrigger } from "@/components/navigation/DesktopNavigation";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { StandardsSection } from "@/components/sections/StandardsSection";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const isMobile = useIsMobile();

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSection />;
      case "dashboard":
        return <DashboardSection />;
      case "standards":
        return <StandardsSection />;
      default:
        return <DashboardSection />;
    }
  };

  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          {!isMobile && (
            <DesktopNavigation 
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          )}
          
          <main className="flex-1 flex flex-col relative">
            {!isMobile && <CollapsedSidebarTrigger />}
            <div className="flex-1 p-4 pb-20 md:pb-4">
              {renderSection()}
            </div>
          </main>

          {isMobile && (
            <MobileNavigation
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          )}
        </div>
      </SidebarProvider>
    </AuthGuard>
  );
};

export default Index;
