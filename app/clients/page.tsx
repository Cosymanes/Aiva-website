import Link from "next/link"
import { Brain, Building, Filter, MoreHorizontal, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"

export default function ClientsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Brain className="h-6 w-6 text-primary" />
          <span>AI Solutions Hub</span>
        </Link>
        <MainNav className="hidden md:flex" />
        <div className="ml-auto flex items-center gap-4">
          <form className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search clients..." className="w-64 rounded-lg bg-background pl-8" />
          </form>
          <Button variant="outline" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              alt="Avatar"
              className="rounded-full"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Clients</h1>
              <p className="text-muted-foreground">Manage your client relationships and contacts</p>
            </div>
            <Button className="w-full md:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Add Client
            </Button>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <Input placeholder="Search clients..." className="w-full md:w-64" />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm">
                Industry
              </Button>
              <Button variant="outline" size="sm">
                Region
              </Button>
              <Button variant="outline" size="sm">
                Status
              </Button>
            </div>
          </div>
          <div className="grid gap-6">
            {clientsData.map((client) => (
              <Card key={client.id}>
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <Building className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>{client.name}</CardTitle>
                      <CardDescription>{client.industry}</CardDescription>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit client</DropdownMenuItem>
                      <DropdownMenuItem>View projects</DropdownMenuItem>
                      <DropdownMenuItem>Contact information</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-3">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Contact</div>
                      <div className="text-sm">{client.contact}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Active Projects</div>
                      <div className="text-sm">{client.activeProjects}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Status</div>
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(client.status)}`}
                      >
                        {client.status}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Projects
                  </Button>
                  <Button variant="outline" size="sm">
                    Contact
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

const clientsData = [
  {
    id: 1,
    name: "TechCorp Inc.",
    industry: "Technology",
    contact: "john.doe@techcorp.com",
    activeProjects: 3,
    status: "Active",
  },
  {
    id: 2,
    name: "Retail Solutions Ltd.",
    industry: "Retail",
    contact: "sarah.smith@retailsolutions.com",
    activeProjects: 1,
    status: "Active",
  },
  {
    id: 3,
    name: "Global Logistics",
    industry: "Transportation",
    contact: "mike.johnson@globallogistics.com",
    activeProjects: 2,
    status: "Active",
  },
  {
    id: 4,
    name: "MediCare Systems",
    industry: "Healthcare",
    contact: "lisa.wong@medicare.com",
    activeProjects: 1,
    status: "At Risk",
  },
  {
    id: 5,
    name: "SecureBank",
    industry: "Finance",
    contact: "robert.chen@securebank.com",
    activeProjects: 1,
    status: "Active",
  },
]

function getStatusColor(status: string): string {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
    case "Inactive":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
    case "At Risk":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
    case "Potential":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
  }
}
