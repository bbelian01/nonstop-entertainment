"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-9 w-9 rounded-full border border-[#E6D3B3]/30 hover:border-[#E6D3B3] bg-transparent hover:bg-[#E6D3B3]/10"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-[#E6D3B3] dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-[#E6D3B3] dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#0B132B] border border-[#E6D3B3]/30">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="text-white hover:text-[#E6D3B3] hover:bg-[#E6D3B3]/10 cursor-pointer"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="text-white hover:text-[#E6D3B3] hover:bg-[#E6D3B3]/10 cursor-pointer"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="text-white hover:text-[#E6D3B3] hover:bg-[#E6D3B3]/10 cursor-pointer"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 