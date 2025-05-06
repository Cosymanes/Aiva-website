import Link from "next/link"
import { Brain, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
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
            <Input type="search" placeholder="Search projects..." className="w-64 rounded-lg bg-background pl-8" />
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
              <h1 className="text-3xl font-bold">Projects</h1>
              <p className="text-muted-foreground">Manage and track all your AI implementation projects</p>
            </div>
            <Button className="w-full md:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <Input placeholder="Search projects..." className="w-full md:w-64" />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          <Card>
            <CardHeader>
              <CardTitle>Project Statistics</CardTitle>
              <CardDescription>Overview of your project portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex flex-col gap-1 rounded-lg border p-3">
                  <div className="text-sm font-medium text-muted-foreground">Total Projects</div>
                  <div className="text-2xl font-bold">24</div>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border p-3">
                  <div className="text-sm font-medium text-muted-foreground">On Schedule</div>
                  <div className="text-2xl font-bold">18</div>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border p-3">
                  <div className="text-sm font-medium text-muted-foreground">At Risk</div>
                  <div className="text-2xl font-bold text-amber-500">6</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Analytics
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

const projectsData = [
  {
    id: 1,
    name: "Predictive Analytics Implementation",
    client: "TechCorp Inc.",
    deadline: "Due in 2 weeks",
    status: "active",
    progress: 65,
    tags: ["Analytics", "Machine Learning"],
  },
  {
    id: 2,
    name: "Customer Service AI Chatbot",
    client: "Retail Solutions Ltd.",
    deadline: "Due in 1 month",
    status: "active",
    progress: 30,
    tags: ["NLP", "Chatbot"],
  },
  {
    id: 3,
    name: "Supply Chain Optimization",
    client: "Global Logistics",
    deadline: "Due in 3 weeks",
    status: "active",
    progress: 45,
    tags: ["Optimization", "Forecasting"],
  },
  {
    id: 4,
    name: "Healthcare Data Analysis",
    client: "MediCare Systems",
    deadline: "Due in 2 days",
    status: "at-risk",
    progress: 85,
    tags: ["Healthcare", "Data Analysis"],
  },
  {
    id: 5,
    name: "Financial Fraud Detection",
    client: "SecureBank",
    deadline: "Due in 1 week",
    status: "active",
    progress: 70,
    tags: ["Security", "Anomaly Detection"],
  },
  {
    id: 6,
    name: "Retail Inventory Management",
    client: "ShopSmart",
    deadline: "Due in 3 weeks",
    status: "pending",
    progress: 10,
    tags: ["Retail", "Inventory"],
  },
]
