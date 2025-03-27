import DashboardLayout from "../../dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Plus, Search, ThumbsUp, MessageCircle, Calendar, Tag, Filter } from "lucide-react"

// Sample forum data
const forumPosts = [
  {
    id: 1,
    title: "Tips for reducing plastic waste at home",
    author: {
      name: "Priya Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PS",
    },
    category: "Recycling Tips",
    date: "2 days ago",
    likes: 24,
    comments: 8,
    excerpt:
      "I've been trying to reduce plastic waste in my home and wanted to share some effective strategies that have worked for me...",
  },
  {
    id: 2,
    title: "Community cleanup event this weekend",
    author: {
      name: "Anish Maniyar",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AM",
    },
    category: "Local Events",
    date: "3 days ago",
    likes: 42,
    comments: 15,
    excerpt:
      "We're organizing a community cleanup event this Saturday at Green Park. Everyone is welcome to join! We'll provide gloves and bags...",
  },
  {
    id: 3,
    title: "New study on waste-to-energy efficiency",
    author: {
      name: "Divya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DP",
    },
    category: "Sustainability News",
    date: "5 days ago",
    likes: 18,
    comments: 6,
    excerpt:
      "A recent study published in Environmental Science Journal shows promising results for new waste-to-energy conversion technologies...",
  },
  {
    id: 4,
    title: "DIY composting bin tutorial",
    author: {
      name: "Rajesh Kumar",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "RK",
    },
    category: "Recycling Tips",
    date: "1 week ago",
    likes: 36,
    comments: 12,
    excerpt:
      "I built a composting bin using recycled materials and it's been working great! Here's a step-by-step guide on how to make your own...",
  },
  {
    id: 5,
    title: "Question about electronic waste recycling",
    author: {
      name: "Meera Iyer",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MI",
    },
    category: "Questions",
    date: "1 week ago",
    likes: 8,
    comments: 10,
    excerpt:
      "I have some old electronics that I want to dispose of properly. Does anyone know where I can recycle them in the downtown area?",
  },
]

// Sample categories
const categories = [
  { name: "Recycling Tips", count: 42 },
  { name: "Local Events", count: 28 },
  { name: "Sustainability News", count: 35 },
  { name: "Questions", count: 19 },
  { name: "Success Stories", count: 24 },
]

export default function CommunityForum() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Community Forum</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Discussion
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Discussions</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search discussions..."
                        className="w-[200px] pl-8 md:w-[260px]"
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="all">
                  <div className="border-b px-4">
                    <TabsList className="w-full justify-start rounded-none border-b-0 p-0">
                      <TabsTrigger
                        value="all"
                        className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger
                        value="popular"
                        className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                      >
                        Popular
                      </TabsTrigger>
                      <TabsTrigger
                        value="recent"
                        className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                      >
                        Recent
                      </TabsTrigger>
                      <TabsTrigger
                        value="unanswered"
                        className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                      >
                        Unanswered
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="all" className="m-0">
                    <div className="divide-y">
                      {forumPosts.map((post) => (
                        <div key={post.id} className="p-4 hover:bg-muted/50">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={post.author.avatar} alt={post.author.name} />
                              <AvatarFallback>{post.author.initials}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                                  {post.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">{post.date}</span>
                              </div>
                              <h3 className="font-semibold hover:text-primary">
                                <a href="#">{post.title}</a>
                              </h3>
                              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                              <div className="flex items-center gap-4 pt-2">
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <ThumbsUp className="h-4 w-4" />
                                  <span>{post.likes}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <MessageCircle className="h-4 w-4" />
                                  <span>{post.comments}</span>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <span>Posted by </span>
                                  <a href="#" className="ml-1 font-medium text-foreground hover:text-primary">
                                    {post.author.name}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="popular" className="m-0">
                    <div className="flex items-center justify-center p-8 text-center text-muted-foreground">
                      <div>
                        <MessageSquare className="mx-auto h-10 w-10 opacity-20" />
                        <p className="mt-2">Popular discussions will appear here</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="recent" className="m-0">
                    <div className="flex items-center justify-center p-8 text-center text-muted-foreground">
                      <div>
                        <MessageSquare className="mx-auto h-10 w-10 opacity-20" />
                        <p className="mt-2">Recent discussions will appear here</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="unanswered" className="m-0">
                    <div className="flex items-center justify-center p-8 text-center text-muted-foreground">
                      <div>
                        <MessageSquare className="mx-auto h-10 w-10 opacity-20" />
                        <p className="mt-2">Unanswered discussions will appear here</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="border-t p-4">
                <Button variant="outline" className="w-full">
                  Load More
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted"
                    >
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-primary" />
                        <span>{category.name}</span>
                      </div>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Community Cleanup</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Saturday, July 15 at 10:00 AM</p>
                    <p className="mt-1 text-xs">Green Park, Downtown</p>
                  </div>

                  <div className="rounded-md border p-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Recycling Workshop</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Tuesday, July 18 at 6:00 PM</p>
                    <p className="mt-1 text-xs">Community Center</p>
                  </div>

                  <div className="rounded-md border p-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Sustainability Talk</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Friday, July 21 at 7:00 PM</p>
                    <p className="mt-1 text-xs">Public Library</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Events
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

