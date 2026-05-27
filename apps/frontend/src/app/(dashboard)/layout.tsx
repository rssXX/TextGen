"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
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
  Sparkles,
  LogOut,
  ChevronDown,
  PanelLeft,
} from "lucide-react"
import { authClient } from "@/lib"

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
  const router = useRouter()
  const { data: session } = authClient.useSession()

  const userName = session?.user?.name ?? "Аккаунт"
  const userInitial = userName.charAt(0).toUpperCase() || "?"

  const handleSignOut = async () => {
    await authClient.signOut()
    router.push("/login")
  }

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
                      {userInitial}
                    </div>
                    <span className="flex-1 text-left truncate">{userName}</span>
                    <ChevronDown className="h-4 w-4" />
                  </AtomSidebarMenuButton>
                </AtomDropdownMenuTrigger>
                <AtomDropdownMenuContent align="start" className="w-56">
                  <div className="px-2 py-1.5 text-xs text-muted-foreground truncate">
                    {session?.user?.email ?? "—"}
                  </div>
                  <AtomDropdownMenuSeparator />
                  <AtomDropdownMenuItem
                    onSelect={handleSignOut}
                    className="flex items-center gap-2 text-destructive"
                  >
                    <LogOut className="h-4 w-4" />
                    Выйти
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
        </header>
        <main className="flex-1 p-6">{children}</main>
      </AtomSidebarInset>
    </AtomSidebarProvider>
  )
}
