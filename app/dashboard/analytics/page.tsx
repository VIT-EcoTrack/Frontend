import DashboardLayout from "../../dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Treemap,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts"
import { Download, Calendar, Filter, BarChart3, MapPin, Lightbulb } from "lucide-react"

// Sample data for analytics
const wasteByRegionData = [
  { name: "Downtown", value: 1200, fill: "#0088FE" },
  { name: "North District", value: 900, fill: "#00C49F" },
  { name: "East District", value: 800, fill: "#FFBB28" },
  { name: "South District", value: 1100, fill: "#FF8042" },
  { name: "West District", value: 700, fill: "#8884d8" },
]

// Sample heat map data (simplified)
const heatMapData = [
  { x: 10, y: 30, z: 200, name: "Downtown" },
  { x: 30, y: 70, z: 150, name: "North District" },
  { x: 50, y: 50, z: 120, name: "East District" },
  { x: 70, y: 30, z: 180, name: "South District" },
  { x: 90, y: 60, z: 100, name: "West District" },
  { x: 20, y: 80, z: 90, name: "Northwest Area" },
  { x: 40, y: 40, z: 170, name: "Northeast Area" },
  { x: 60, y: 20, z: 110, name: "Southeast Area" },
  { x: 80, y: 80, z: 130, name: "Southwest Area" },
]

// Sample waste type data
const wasteTypeData = [
  { name: "Plastic", value: 35 },
  { name: "Paper", value: 25 },
  { name: "Organic", value: 30 },
  { name: "Metal", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

// Sample insights data
const insightsData = [
  {
    title: "High Plastic Usage in Downtown",
    description:
      "Downtown area shows 25% higher plastic waste compared to other regions. Consider targeted awareness campaigns.",
    icon: MapPin,
  },
  {
    title: "Organic Waste Reduction",
    description: "Organic waste has decreased by 15% in the last month, likely due to the new composting initiative.",
    icon: BarChart3,
  },
  {
    title: "Recycling Opportunity",
    description: "East District has the lowest recycling rate. A new collection point could improve participation.",
    icon: Lightbulb,
  },
]

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Analytics & Heat Map</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <Card className="flex-1">
            <CardHeader className="pb-3">
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium">Time Range</label>
                  <Select defaultValue="month">
                    <SelectTrigger>
                      <Calendar className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Last Week</SelectItem>
                      <SelectItem value="month">Last Month</SelectItem>
                      <SelectItem value="quarter">Last Quarter</SelectItem>
                      <SelectItem value="year">Last Year</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium">Waste Category</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Select waste category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="plastic">Plastic</SelectItem>
                      <SelectItem value="paper">Paper</SelectItem>
                      <SelectItem value="organic">Organic</SelectItem>
                      <SelectItem value="metal">Metal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium">Region</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <MapPin className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="downtown">Downtown</SelectItem>
                      <SelectItem value="north">North District</SelectItem>
                      <SelectItem value="east">East District</SelectItem>
                      <SelectItem value="south">South District</SelectItem>
                      <SelectItem value="west">West District</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="heatmap" className="space-y-4">
          <TabsList>
            <TabsTrigger value="heatmap">Heat Map</TabsTrigger>
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="heatmap" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Waste Generation Heat Map</CardTitle>
                <CardDescription>Geographic visualization of waste generation by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[16/9] overflow-hidden rounded-md border">
                  <div className="h-full w-full">
                    <ChartContainer
                      config={{
                        waste: {
                          label: "Waste Volume",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="h-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart
                          margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                          }}
                        >
                          <CartesianGrid />
                          <XAxis type="number" dataKey="x" name="longitude" />
                          <YAxis type="number" dataKey="y" name="latitude" />
                          <ZAxis type="number" dataKey="z" range={[60, 400]} name="volume" />
                          <ChartTooltip
                            cursor={{ strokeDasharray: "3 3" }}
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                                    <div className="grid grid-cols-2 gap-2">
                                      <div className="flex flex-col">
                                        <span className="text-xs font-medium text-muted-foreground">Region</span>
                                        <span className="font-medium">{payload[0].payload.name}</span>
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="text-xs font-medium text-muted-foreground">Waste Volume</span>
                                        <span className="font-medium">{payload[0].payload.z} kg</span>
                                      </div>
                                    </div>
                                  </div>
                                )
                              }
                              return null
                            }}
                          />
                          <Scatter name="Waste Volume" data={heatMapData} fill="var(--color-waste)" />
                        </ScatterChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  Hover over data points to see detailed information for each region
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="charts" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Waste by Region</CardTitle>
                  <CardDescription>Distribution of waste collection across different regions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={wasteByRegionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" name="Waste (kg)" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Waste Type Distribution</CardTitle>
                  <CardDescription>Breakdown of waste by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={wasteTypeData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {wasteTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Waste Distribution by Region and Type</CardTitle>
                  <CardDescription>Hierarchical view of waste distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <Treemap
                        data={[
                          {
                            name: "Downtown",
                            children: [
                              { name: "Plastic", size: 420 },
                              { name: "Paper", size: 300 },
                              { name: "Organic", size: 360 },
                              { name: "Metal", size: 120 },
                            ],
                          },
                          {
                            name: "North District",
                            children: [
                              { name: "Plastic", size: 315 },
                              { name: "Paper", size: 225 },
                              { name: "Organic", size: 270 },
                              { name: "Metal", size: 90 },
                            ],
                          },
                          {
                            name: "East District",
                            children: [
                              { name: "Plastic", size: 280 },
                              { name: "Paper", size: 200 },
                              { name: "Organic", size: 240 },
                              { name: "Metal", size: 80 },
                            ],
                          },
                          {
                            name: "South District",
                            children: [
                              { name: "Plastic", size: 385 },
                              { name: "Paper", size: 275 },
                              { name: "Organic", size: 330 },
                              { name: "Metal", size: 110 },
                            ],
                          },
                          {
                            name: "West District",
                            children: [
                              { name: "Plastic", size: 245 },
                              { name: "Paper", size: 175 },
                              { name: "Organic", size: 210 },
                              { name: "Metal", size: 70 },
                            ],
                          },
                        ]}
                        dataKey="size"
                        ratio={4 / 3}
                        stroke="#fff"
                        fill="#8884d8"
                      >
                        <Tooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload
                              return (
                                <div className="rounded-lg border bg-background p-2 shadow-sm">
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="flex flex-col">
                                      <span className="text-xs font-medium text-muted-foreground">Category</span>
                                      <span className="font-medium">{data.name}</span>
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-xs font-medium text-muted-foreground">Volume</span>
                                      <span className="font-medium">{data.value} kg</span>
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                            return null
                          }}
                        />
                      </Treemap>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>AI-Driven Insights</CardTitle>
                <CardDescription>Smart analysis and recommendations based on your waste data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {insightsData.map((insight, index) => (
                    <Card key={index}>
                      <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <insight.icon className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-base">{insight.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{insight.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

