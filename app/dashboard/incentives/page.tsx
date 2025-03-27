import DashboardLayout from "../../dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coins, Gift, Trophy, Award, ArrowRight } from "lucide-react"

// Sample leaderboard data
const leaderboardData = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "PS",
    tokens: 2450,
    badge: "Eco Champion",
  },
  {
    id: 2,
    name: "Anish Maniyar",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AM",
    tokens: 2180,
    badge: "Recycling Master",
  },
  {
    id: 3,
    name: "Divya Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DP",
    tokens: 1950,
    badge: "Green Warrior",
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "RK",
    tokens: 1820,
    badge: "Sustainability Pro",
  },
  {
    id: 5,
    name: "Meera Iyer",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MI",
    tokens: 1760,
    badge: "Eco Enthusiast",
  },
]

// Sample rewards data
const rewardsData = [
  {
    id: 1,
    title: "10% Discount at EcoStore",
    description: "Get 10% off your next purchase at EcoStore",
    tokens: 500,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Free Reusable Water Bottle",
    description: "Claim a high-quality stainless steel water bottle",
    tokens: 750,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Community Garden Donation",
    description: "Donate to local community garden projects",
    tokens: 1000,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "Solar Phone Charger",
    description: "Eco-friendly solar powered phone charger",
    tokens: 1500,
    image: "/placeholder.svg?height=100&width=100",
  },
]

// Sample badges data
const badgesData = [
  {
    id: 1,
    title: "Recycling Rookie",
    description: "Recycle your first 10 items",
    progress: 100,
    completed: true,
    icon: Award,
  },
  {
    id: 2,
    title: "Plastic Preventer",
    description: "Recycle 50kg of plastic waste",
    progress: 80,
    completed: false,
    icon: Award,
  },
  {
    id: 3,
    title: "Paper Protector",
    description: "Recycle 100kg of paper waste",
    progress: 65,
    completed: false,
    icon: Award,
  },
  {
    id: 4,
    title: "Organic Oracle",
    description: "Recycle 200kg of organic waste",
    progress: 45,
    completed: false,
    icon: Award,
  },
  {
    id: 5,
    title: "Metal Master",
    description: "Recycle 30kg of metal waste",
    progress: 90,
    completed: false,
    icon: Award,
  },
  {
    id: 6,
    title: "Consistency King",
    description: "Recycle for 30 consecutive days",
    progress: 70,
    completed: false,
    icon: Award,
  },
]

export default function Incentives() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Incentive System</h1>
          <Button>
            <Gift className="mr-2 h-4 w-4" />
            Redeem Tokens
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Token Balance</CardTitle>
              <Coins className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,310</div>
              <div className="mt-4 flex items-center text-sm text-muted-foreground">
                <div className="flex items-center">
                  <span className="font-medium text-foreground">310</span>
                  <span className="ml-1">tokens earned this month</span>
                </div>
              </div>
              <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                View transaction history
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Rank</CardTitle>
              <Trophy className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">#42</div>
              <div className="mt-4 flex items-center text-sm text-muted-foreground">
                <div className="flex items-center">
                  <span className="font-medium text-foreground">Top 5%</span>
                  <span className="ml-1">of all contributors</span>
                </div>
              </div>
              <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                View full leaderboard
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Badge</CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">Metal Master</div>
              <Progress value={90} className="mt-2" />
              <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                <span>27/30 kg</span>
                <span>90% Complete</span>
              </div>
              <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                View all badges
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="leaderboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
          </TabsList>

          <TabsContent value="leaderboard" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Community Leaderboard</CardTitle>
                <CardDescription>Top contributors in your community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {leaderboardData.map((user, index) => (
                    <div key={user.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          {index + 1}
                        </div>
                        <Avatar>
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium leading-none">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.badge}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Coins className="h-4 w-4 text-primary" />
                        <span className="font-medium">{user.tokens}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Full Leaderboard
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {rewardsData.map((reward) => (
                <Card key={reward.id}>
                  <CardHeader className="pb-2">
                    <img
                      src={reward.image || "/placeholder.svg"}
                      alt={reward.title}
                      className="mx-auto h-24 w-24 object-contain"
                    />
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold">{reward.title}</h3>
                    <p className="text-sm text-muted-foreground">{reward.description}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Coins className="mr-1 h-4 w-4 text-primary" />
                      <span className="font-medium">{reward.tokens}</span>
                    </div>
                    <Button size="sm">Redeem</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="badges" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {badgesData.map((badge) => (
                <Card key={badge.id} className={badge.completed ? "border-primary" : ""}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-center">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-full ${
                          badge.completed ? "bg-primary" : "bg-muted"
                        }`}
                      >
                        <badge.icon
                          className={`h-8 w-8 ${badge.completed ? "text-primary-foreground" : "text-muted-foreground"}`}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-semibold">{badge.title}</h3>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                    {!badge.completed && (
                      <>
                        <Progress value={badge.progress} className="mt-2" />
                        <p className="mt-1 text-xs text-muted-foreground">{badge.progress}% Complete</p>
                      </>
                    )}
                    {badge.completed && <Badge className="mt-2 bg-primary text-primary-foreground">Completed</Badge>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

