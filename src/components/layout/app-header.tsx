"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react"; // Placeholder for app logo/icon
import Link from "next/link";

export function AppHeader() {
  const { isMobile } = useSidebar();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-md md:px-6">
      {isMobile && <SidebarTrigger />}
      <Link href="/" className="flex items-center gap-2">
        <Dumbbell className="h-6 w-6 text-primary" />
        <span className="text-xl font-semibold font-headline">FitTrack</span>
      </Link>
      <div className="ml-auto">
        {/* Placeholder for User Profile / Settings Dropdown */}
        {/* <Button variant="ghost" size="icon">
          <UserCircle className="h-6 w-6" />
        </Button> */}
      </div>
    </header>
  );
}
