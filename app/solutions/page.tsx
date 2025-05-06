import Link from "next/link"
import { Brain, Filter, Layers, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"

export default function SolutionsPage() {
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
            <Input type="search" placeholder="Search solutions..." className="w-64 rounded-lg bg-background pl-8" />
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
              <h1 className="text-3xl font-bold">AI Solutions</h1>
              <p className="text-muted-foreground">Browse and manage your AI models and solutions</p>
            </div>
            <Button className="w-full md:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Add Solution
            </Button>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <Input placeholder="Search solutions..." className="w-full md:w-64" />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="nlp">NLP</TabsTrigger>
                <TabsTrigger value="cv">Computer Vision</TabsTrigger>
                <TabsTrigger value="ml">Machine Learning</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionsData.map((solution) => (
              <Card key={solution.id} className="overflow-hidden">
                <CardHeader className="relative pb-0">
                  <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {solution.category}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{solution.name}</CardTitle>
                  <CardDescription>{solution.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t bg-muted/50 p-6">
                  <div className="text-sm text-muted-foreground">{solution.deployments} active deployments</div>
                  <Button variant="outline" size="sm">
                    View Details
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

const solutionsData = [
  {
    id: 1,
    name: "Predictive Analytics Engine",
    shortDescription: "Advanced forecasting and trend analysis",
    description:
      "Our predictive analytics engine uses machine learning algorithms to analyze historical data and predict future trends with high accuracy.",
    category: "Business Intelligence",
    deployments: 12,
  },
  {
    id: 2,
    name: "Natural Language Processor",
    shortDescription: "Text analysis and sentiment detection",
    description:
      "Process and analyze text data to extract meaning, sentiment, and insights from customer feedback, social media, and other text sources.",
    category: "NLP",
    deployments: 8,
  },
  {
    id: 3,
    name: "Computer Vision System",
    shortDescription: "Image recognition and processing",
    description:
      "Advanced computer vision algorithms for object detection, facial recognition, and quality control in manufacturing and security applications.",
    category: "Computer Vision",
    deployments: 5,
  },
  {
    id: 4,
    name: "Recommendation Engine",
    shortDescription: "Personalized content and product recommendations",
    description:
      "Increase engagement and conversion with personalized recommendations based on user behavior, preferences, and similar user patterns.",
    category: "Machine Learning",
    deployments: 15,
  },
  {
    id: 5,
    name: "Anomaly Detection",
    shortDescription: "Identify unusual patterns in data",
    description:
      "Detect anomalies and outliers in real-time data streams for fraud prevention, system monitoring, and security applications.",
    category: "Security",
    deployments: 7,
  },
  {
    id: 6,
    name: "Conversational AI",
    shortDescription: "Advanced chatbots and virtual assistants",
    description:
      "Create natural, context-aware conversational experiences for customer service, support, and engagement applications.",
    category: "NLP",
    deployments: 10,
  },
]
