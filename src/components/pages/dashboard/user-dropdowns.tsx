"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"
import { Button } from "../../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar"
import Link from "next/link"
import { LogOut, SquareUser } from "lucide-react"


export const UserDropdown = () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full gap-2 justify-start px-2">
          <Avatar className="w-7 h-7 block">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>BM</AvatarFallback>
          </Avatar>
          <p>Bruno Matos Silva</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[var(--radix-dropdown-menu-trigger-width)]">
        <Link
          passHref
          href="/dashboard/account"
        >
          <DropdownMenuItem className="gap-2">
            <SquareUser size={16} />
            Configurações de Conta
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem 
        className="gap-2 text-red-500"
        onClick={() => console.log("Sair")}
        >
            <LogOut size={16} />
             Sair
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}