"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Home, BarChart3, Leaf, Coins, Zap, Users, BookOpen, Settings, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const navigation = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Waste Ledger", href: "/dashboard/waste-ledger", icon: Leaf },
  { name: "Incentives", href: "/dashboard/incentives", icon: Coins },
  { name: "Energy Conversion", href: "/dashboard/energy", icon: Zap },
  { name: "Community Forum", href: "/dashboard/forum", icon: Users },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Guides", href: "/dashboard/guides", icon: BookOpen },
  { name: "Admin Panel", href: "/dashboard/admin", icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <SidebarTrigger className="md:hidden" />
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <Leaf className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tight">EcoTrack</span>
            </Link>
            <div className="relative ml-auto flex-1 md:grow-0">
              <div
                className={cn(
                  "absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none",
                  searchOpen ? "opacity-100" : "opacity-0 md:opacity-100",
                )}
              >
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                type="search"
                placeholder="Search..."
                className={cn(
                  "pl-8 md:w-[200px] lg:w-[300px]",
                  searchOpen ? "w-full" : "w-8 px-0 md:w-[200px] md:px-3",
                )}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setSearchOpen(false)}
              />
            </div>
            <Button variant="ghost" size="icon" className="relative ml-auto md:ml-0" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <Badge
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                variant="destructive"
              >
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </header>
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="flex h-16 items-center border-b px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">EcoTrack</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Anish Maniyar</span>
            <span className="text-xs text-muted-foreground">anish.maniyar@example.com</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

