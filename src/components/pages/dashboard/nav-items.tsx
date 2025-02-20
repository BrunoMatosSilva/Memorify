"use client"

import { Book, HelpCircleIcon, SquareUser } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import path from "path"
import { Button } from "../../ui/button"
import { cn } from "@/src/lib/utils"

export const NavItems = () => {
  const pathname = usePathname()
  const navItems = [
  {
    label: "Sua Biblioteca",
    icon: Book,
    path: "/dashboard/resumes"
  },
  {
    label: "Configuração da Conta",
    icon: SquareUser,
    path: "/dashboard/account"
  },
  {
    label: "Reportar Problema",
    icon: HelpCircleIcon,
    path: "/dashboard/contact"
  },
  ]

  return(
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {
        navItems.map((item) => {
          const isActive = pathname.startsWith(item.path)

          return (
            <Link key={item.path} href={item.path}>
              <Button
              variant="ghost"
              className={cn(
                "w-full gap-2 justify-start",
                isActive && "bg-accent"
              )}
              >
                <item.icon size={16} />
                {item.label}
              </Button>
            </Link>
          )
        })
      }
    </nav>
  )
}