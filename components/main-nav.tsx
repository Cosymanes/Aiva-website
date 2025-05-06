import Link from "next/link"
import { BarChart3, Briefcase, Building, Layers, LayoutDashboard, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"

export function MainNav({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center gap-4", className)}>
      <Link
        href="/"
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <LayoutDashboard className="h-4 w-4" />
        Dashboard
      </Link>
      <Link
        href="/projects"
        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
      >
        <Briefcase className="h-4 w-4" />
        Projects
      </Link>
      <Link
        href="/clients"
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Building className="h-4 w-4" />
        Clients
      </Link>
      <Link
        href="/solutions"
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Layers className="h-4 w-4" />
        AI Solutions
      </Link>
      <Link
        href="/team"
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Users className="h-4 w-4" />
        Team
      </Link>
      <Link
        href="/analytics"
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <BarChart3 className="h-4 w-4" />
        Analytics
      </Link>
      <Link
        href="/settings"
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Settings className="h-4 w-4" />
        Settings
      </Link>
    </nav>
  )
}
