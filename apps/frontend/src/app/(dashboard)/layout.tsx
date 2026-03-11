"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AtomSidebarProvider,
  AtomSidebar,
  AtomSidebarHeader,
  AtomSidebarContent,
  AtomSidebarFooter,
  AtomSidebarMenu,
  AtomSidebarMenuItem,
  AtomSidebarMenuButton,
  AtomSidebarGroup,
  AtomSidebarGroupLabel,
  AtomSidebarGroupContent,
  AtomSidebarInset,
  AtomSidebarTrigger,
  AtomSeparator,
  AtomDropdownMenu,
  AtomDropdownMenuContent,
  AtomDropdownMenuItem,
  AtomDropdownMenuSeparator,
  AtomDropdownMenuTrigger,
  AtomButton,
  useAtomSidebar,
} from "@/components/shared"
import {
  FileText,
  BarChart3,
  History,
  CreditCard,
  Sparkles,
  Settings,
  LogOut,
  User,
  ChevronDown,
  PanelLeft,
} from "lucide-react"

const navItems = [
  {
    title: "Генерация",
    url: "/dashboard/generate",
    icon: Sparkles,
  },
  {
    title: "Статистика",
    url: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "История",
    url: "/dashboard/history",
    icon: History,
  },
  {
    title: "Оплата",
    url: "/dashboard/billing",
    icon: CreditCard,
  },
]

function useMobileNavClose() {
  const pathname = usePathname()
  const { setOpenMobile } = useAtomSidebar()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setOpenMobile(false)
      prevPathname.current = pathname
    }
  }, [pathname, setOpenMobile])
}

function MobileSidebarHeader() {
  const { setOpenMobile } = useAtomSidebar()
  useMobileNavClose()

  return (
    <div className="flex md:hidden h-14 items-center justify-between border-b px-4">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <FileText className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-bold">TextGen</span>
      </Link>
      <AtomButton
        variant="ghost"
        size="icon"
        className="h-7 w-7"
        onClick={() => setOpenMobile(false)}
      >
        <PanelLeft />
        <span className="sr-only">Закрыть меню</span>
      </AtomButton>
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <AtomSidebarProvider>
      <AtomSidebar>
        <MobileSidebarHeader />
        <AtomSidebarHeader className="hidden md:flex p-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">TextGen</span>
          </Link>
        </AtomSidebarHeader>
        <AtomSidebarContent>
          <AtomSidebarGroup>
            <AtomSidebarGroupLabel>Меню</AtomSidebarGroupLabel>
            <AtomSidebarGroupContent>
              <AtomSidebarMenu>
                {navItems.map((item) => (
                  <AtomSidebarMenuItem key={item.title}>
                    <AtomSidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      tooltip={item.title}
                    >
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </AtomSidebarMenuButton>
                  </AtomSidebarMenuItem>
                ))}
              </AtomSidebarMenu>
            </AtomSidebarGroupContent>
          </AtomSidebarGroup>
        </AtomSidebarContent>
        <AtomSidebarFooter className="p-2">
          <AtomSidebarMenu>
            <AtomSidebarMenuItem>
              <AtomDropdownMenu>
                <AtomDropdownMenuTrigger asChild>
                  <AtomSidebarMenuButton className="w-full">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      И
                    </div>
                    <span className="flex-1 text-left">Иван Петров</span>
                    <ChevronDown className="h-4 w-4" />
                  </AtomSidebarMenuButton>
                </AtomDropdownMenuTrigger>
                <AtomDropdownMenuContent align="start" className="w-56">
                  <AtomDropdownMenuItem asChild>
                    <Link href="/dashboard/settings" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Профиль
                    </Link>
                  </AtomDropdownMenuItem>
                  <AtomDropdownMenuItem asChild>
                    <Link href="/dashboard/settings" className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Настройки
                    </Link>
                  </AtomDropdownMenuItem>
                  <AtomDropdownMenuSeparator />
                  <AtomDropdownMenuItem asChild>
                    <Link href="/login" className="flex items-center gap-2 text-destructive">
                      <LogOut className="h-4 w-4" />
                      Выйти
                    </Link>
                  </AtomDropdownMenuItem>
                </AtomDropdownMenuContent>
              </AtomDropdownMenu>
            </AtomSidebarMenuItem>
          </AtomSidebarMenu>
        </AtomSidebarFooter>
      </AtomSidebar>
      <AtomSidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-4">
          <AtomSidebarTrigger />
          <AtomSeparator orientation="vertical" className="h-6" />
          <div className="flex-1">
            <h1 className="text-lg font-semibold">
              {navItems.find((item) => item.url === pathname)?.title || "Дашборд"}
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Баланс:</span>
            <span className="font-medium text-foreground">5,000 токенов</span>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </AtomSidebarInset>
    </AtomSidebarProvider>
  )
}
