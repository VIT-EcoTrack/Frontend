import DashboardLayout from "../dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ArrowUpRight, Leaf, Coins, Zap, Recycle } from "lucide-react"

// Sample data for charts
const wasteData = [
  { month: "Jan", plastic: 40, paper: 24, organic: 35, metal: 15 },
  { month: "Feb", plastic: 30, paper: 20, organic: 38, metal: 18 },
  { month: "Mar", plastic: 20, paper: 27, organic: 40, metal: 20 },
  { month: "Apr", plastic: 27, paper: 30, organic: 42, metal: 22 },
  { month: "May", plastic: 18, paper: 28, organic: 45, metal: 25 },
  { month: "Jun", plastic: 23, paper: 34, organic: 48, metal: 28 },
  { month: "Jul", plastic: 34, paper: 36, organic: 50, metal: 30 },
]

const energyData = [
  { month: "Jan", energy: 240 },
  { month: "Feb", energy: 300 },
  { month: "Mar", energy: 320 },
  { month: "Apr", energy: 380 },
  { month: "May", energy: 420 },
  { month: "Jun", energy: 450 },
  { month: "Jul", energy: 480 },
]

const tokenData = [
  { month: "Jan", tokens: 120 },
  { month: "Feb", tokens: 150 },
  { month: "Mar", tokens: 180 },
  { month: "Apr", tokens: 220 },
  { month: "May", tokens: 250 },
  { month: "Jun", tokens: 280 },
  { month: "Jul", tokens: 310 },
]

const carbonData = [
  { name: "Plastic", value: 30 },
  { name: "Paper", value: 25 },
  { name: "Organic", value: 35 },
  { name: "Metal", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">Download Report</Button>
            <Button>
              <Recycle className="mr-2 h-4 w-4" />
              New Recycling
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Waste Processed</CardTitle>
              <Leaf className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248 kg</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              <div className="mt-4 h-1 w-full bg-secondary">
                <div className="h-1 w-3/4 bg-primary" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">75% of monthly goal</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tokens Earned</CardTitle>
              <Coins className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,310</div>
              <p className="text-xs text-muted-foreground">+10.5% from last month</p>
              <div className="mt-4 h-1 w-full bg-secondary">
                <div className="h-1 w-4/5 bg-primary" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">80% of monthly goal</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Energy Generated</CardTitle>
              <Zap className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">480 kWh</div>
              <p className="text-xs text-muted-foreground">+6.7% from last month</p>
              <div className="mt-4 h-1 w-full bg-secondary">
                <div className="h-1 w-2/3 bg-primary" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">67% of monthly goal</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Carbon Footprint Reduction</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">320 kg</div>
              <p className="text-xs text-muted-foreground">+14.2% from last month</p>
              <div className="mt-4 h-1 w-full bg-secondary">
                <div className="h-1 w-4/5 bg-primary" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">80% of monthly goal</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="waste">Waste</TabsTrigger>
            <TabsTrigger value="energy">Energy</TabsTrigger>
            <TabsTrigger value="tokens">Tokens</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Waste Processed</CardTitle>
                  <CardDescription>Monthly breakdown of waste processed by category</CardDescription>
                </CardHeader>
                <CardContent className="px-2">
                  <ChartContainer
                    config={{
                      plastic: {
                        label: "Plastic",
                        color: "hsl(var(--chart-1))",
                      },
                      paper: {
                        label: "Paper",
                        color: "hsl(var(--chart-2))",
                      },
                      organic: {
                        label: "Organic",
                        color: "hsl(var(--chart-3))",
                      },
                      metal: {
                        label: "Metal",
                        color: "hsl(var(--chart-4))",
                      },
                    }}
                    className="aspect-[4/3]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={wasteData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="plastic" fill="var(--color-plastic)" />
                        <Bar dataKey="paper" fill="var(--color-paper)" />
                        <Bar dataKey="organic" fill="var(--color-organic)" />
                        <Bar dataKey="metal" fill="var(--color-metal)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Waste Distribution</CardTitle>
                  <CardDescription>Breakdown by waste category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={carbonData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {carbonData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="waste" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Waste Processed</CardTitle>
                <CardDescription>Monthly breakdown of waste processed by category</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <ChartContainer
                  config={{
                    plastic: {
                      label: "Plastic",
                      color: "hsl(var(--chart-1))",
                    },
                    paper: {
                      label: "Paper",
                      color: "hsl(var(--chart-2))",
                    },
                    organic: {
                      label: "Organic",
                      color: "hsl(var(--chart-3))",
                    },
                    metal: {
                      label: "Metal",
                      color: "hsl(var(--chart-4))",
                    },
                  }}
                  className="aspect-[4/3]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={wasteData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="plastic" fill="var(--color-plastic)" />
                      <Bar dataKey="paper" fill="var(--color-paper)" />
                      <Bar dataKey="organic" fill="var(--color-organic)" />
                      <Bar dataKey="metal" fill="var(--color-metal)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="energy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Energy Generated</CardTitle>
                <CardDescription>Monthly energy generation in kWh</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <ChartContainer
                  config={{
                    energy: {
                      label: "Energy (kWh)",
                      color: "hsl(var(--chart-8))",
                    },
                  }}
                  className="aspect-[4/3]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={energyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="energy"
                        stroke="var(--color-energy)"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tokens" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Tokens Earned</CardTitle>
                <CardDescription>Monthly token earnings</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <ChartContainer
                  config={{
                    tokens: {
                      label: "Tokens",
                      color: "hsl(var(--chart-9))",
                    },
                  }}
                  className="aspect-[4/3]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={tokenData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="tokens"
                        stroke="var(--color-tokens)"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

