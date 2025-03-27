import DashboardLayout from "../../dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Clock, ArrowRight, Bookmark, ThumbsUp } from "lucide-react"

// Sample guides data
const guides = [
  {
    id: 1,
    title: "Beginner's Guide to Recycling",
    description: "Learn the basics of recycling and how to sort your waste properly.",
    category: "Recycling",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=300",
    likes: 124,
    bookmarks: 45,
  },
  {
    id: 2,
    title: "Composting at Home",
    description: "A step-by-step guide to starting your own compost bin and reducing organic waste.",
    category: "Organic Waste",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=300",
    likes: 98,
    bookmarks: 36,
  },
  {
    id: 3,
    title: "Reducing Plastic Consumption",
    description: "Practical tips to minimize plastic usage in your daily life.",
    category: "Plastic Reduction",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=300",
    likes: 156,
    bookmarks: 62,
  },
  {
    id: 4,
    title: "Understanding Waste-to-Energy",
    description: "How waste is converted into usable energy and its environmental impact.",
    category: "Energy",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=300",
    likes: 87,
    bookmarks: 29,
  },
  {
    id: 5,
    title: "Zero Waste Living",
    description: "Strategies for minimizing your waste footprint and living more sustainably.",
    category: "Lifestyle",
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=300",
    likes: 203,
    bookmarks: 78,
  },
  {
    id: 6,
    title: "Recycling Electronics Safely",
    description: "How to properly dispose of electronic waste to minimize environmental harm.",
    category: "E-Waste",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=300",
    likes: 76,
    bookmarks: 31,
  },
]

// Sample categories
const categories = ["All", "Recycling", "Organic Waste", "Plastic Reduction", "Energy", "Lifestyle", "E-Waste"]

export default function Guides() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Educational Guides</h1>
          <Button variant="outline">
            <BookOpen className="mr-2 h-4 w-4" />
            My Bookmarks
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Find Guides</CardTitle>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search guides..." className="w-[200px] pl-8 md:w-[260px]" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="All">
              <TabsList className="flex flex-wrap">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Card key={guide.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={guide.image || "/placeholder.svg"}
                  alt={guide.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {guide.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {guide.readTime}
                  </div>
                </div>
                <CardTitle className="mt-2 line-clamp-2 text-xl">{guide.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="line-clamp-2">{guide.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t p-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{guide.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Bookmark className="h-4 w-4" />
                    <span>{guide.bookmarks}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1">
                  Read Guide
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="mt-4">
            Load More Guides
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}

