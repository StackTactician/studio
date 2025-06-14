"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Dumbbell, LineChart, Sparkles, ListChecks, Settings, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Log Workout", icon: Dumbbell },
  { href: "/progress", label: "Progress", icon: LineChart },
  { href: "/analysis", label: "AI Analysis", icon: Sparkles },
  { href: "/workouts", label: "Saved Workouts", icon: ListChecks },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4 items-center justify-center hidden md:flex group-data-[collapsible=icon]:hidden">
         <Link href="/" className="flex items-center gap-2">
            <Dumbbell className="h-7 w-7 text-primary" />
            <span className="text-2xl font-semibold font-headline text-primary">FitTrack</span>
          </Link>
      </SidebarHeader>
       <SidebarHeader className="p-4 items-center justify-center flex md:hidden group-data-[collapsible=icon]:flex">
         <Link href="/" className="flex items-center gap-2">
            <Dumbbell className="h-7 w-7 text-primary" />
          </Link>
      </SidebarHeader>


      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href && "bg-primary/10 text-primary hover:bg-primary/20"
                  )}
                  isActive={pathname === item.href}
                  tooltip={{children: item.label, className: "font-body"}}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-body">{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="mt-auto p-2">
        {/* Placeholder for settings or user profile link in footer */}
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full justify-start" tooltip={{children: "Settings", className: "font-body"}}>
              <Settings className="h-5 w-5" />
              <span className="font-body">Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu> */}
      </SidebarFooter>
    </Sidebar>
  );
}
