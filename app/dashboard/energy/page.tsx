import DashboardLayout from "../../dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, AreaChart, Area } from "recharts"
import { Zap, Leaf, ArrowUpRight, Info, Download } from "lucide-react"

// Sample energy data
const monthlyEnergyData = [
  { month: "Jan", energy: 240, waste: 950 },
  { month: "Feb", energy: 300, waste: 1050 },
  { month: "Mar", energy: 320, waste: 1100 },
  { month: "Apr", energy: 380, waste: 1200 },
  { month: "May", energy: 420, waste: 1300 },
  { month: "Jun", energy: 450, waste: 1400 },
  { month: "Jul", energy: 480, waste: 1500 },
]

const dailyEnergyData = [
  { day: "Mon", energy: 65, waste: 210 },
  { day: "Tue", energy: 72, waste: 230 },
  { day: "Wed", energy: 68, waste: 215 },
  { day: "Thu", energy: 75, waste: 240 },
  { day: "Fri", energy: 80, waste: 250 },
  { day: "Sat", energy: 70, waste: 220 },
  { day: "Sun", energy: 60, waste: 200 },
]

const recipientData = [
  { name: "Community Center", percentage: 35, energy: 168 },
  { name: "Public Schools", percentage: 25, energy: 120 },
  { name: "Local Hospital", percentage: 20, energy: 96 },
  { name: "Homeless Shelter", percentage: 15, energy: 72 },
  { name: "Public Parks", percentage: 5, energy: 24 },
]

export default function EnergyConversion() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Energy Conversion</h1>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Energy Generated</CardTitle>
              <Zap className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">480 kWh</div>
              <p className="text-xs text-muted-foreground">+6.7% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Waste Converted</CardTitle>
              <Leaf className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,500 kg</div>
              <p className="text-xs text-muted-foreground">+7.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Efficiency</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32%</div>
              <p className="text-xs text-muted-foreground">+2.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CO₂ Emissions Avoided</CardTitle>
              <Info className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">320 kg</div>
              <p className="text-xs text-muted-foreground">+6.7% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Real-Time Energy Conversion</CardTitle>
            <CardDescription>Live tracking of waste-to-energy conversion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="text-sm font-medium">Current Power Output</h4>
                  <div className="text-sm text-muted-foreground">2.1 kW</div>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "70%" }} />
                </div>
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <div>0 kW</div>
                  <div>3 kW</div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="text-sm font-medium">Waste Processing Rate</h4>
                  <div className="text-sm text-muted-foreground">6.5 kg/hour</div>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "65%" }} />
                </div>
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <div>0 kg/hour</div>
                  <div>10 kg/hour</div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="text-sm font-medium">System Efficiency</h4>
                  <div className="text-sm text-muted-foreground">85%</div>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "85%" }} />
                </div>
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <div>0%</div>
                  <div>100%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="monthly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="recipients">Recipients</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Energy Generation</CardTitle>
                <CardDescription>Energy generated from waste conversion over the past months</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <ChartContainer
                  config={{
                    energy: {
                      label: "Energy (kWh)",
                      color: "hsl(var(--chart-8))",
                    },
                    waste: {
                      label: "Waste (kg)",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="aspect-[4/3]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyEnergyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="energy"
                        fill="var(--color-energy)"
                        stroke="var(--color-energy)"
                        fillOpacity={0.3}
                      />
                      <Area
                        yAxisId="right"
                        type="monotone"
                        dataKey="waste"
                        fill="var(--color-waste)"
                        stroke="var(--color-waste)"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="daily" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Daily Energy Generation</CardTitle>
                <CardDescription>Energy generated from waste conversion over the past week</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <ChartContainer
                  config={{
                    energy: {
                      label: "Energy (kWh)",
                      color: "hsl(var(--chart-8))",
                    },
                    waste: {
                      label: "Waste (kg)",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="aspect-[4/3]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyEnergyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar yAxisId="left" dataKey="energy" fill="var(--color-energy)" />
                      <Bar yAxisId="right" dataKey="waste" fill="var(--color-waste)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recipients" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Energy Recipients</CardTitle>
                <CardDescription>Distribution of generated energy to community recipients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recipientData.map((recipient) => (
                    <div key={recipient.name}>
                      <div className="mb-1 flex items-center justify-between">
                        <h4 className="text-sm font-medium">{recipient.name}</h4>
                        <div className="text-sm">
                          <span className="font-medium">{recipient.energy} kWh</span>
                          <span className="text-muted-foreground"> ({recipient.percentage}%)</span>
                        </div>
                      </div>
                      <Progress value={recipient.percentage} className="h-2" />
                    </div>
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

