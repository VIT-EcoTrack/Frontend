import DashboardLayout from "../../dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import {
  Download,
  Users,
  Trash2,
  Zap,
  Shield,
  FileText,
  Settings,
  CheckCircle,
  XCircle,
  AlertCircle,
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample users data
const users = [
  {
    id: 1,
    name: "Anish Maniyar",
    email: "anish.maniyar@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AM",
  },
  {
    id: 2,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    role: "User",
    status: "Active",
    lastActive: "1 day ago",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "VS",
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    role: "Moderator",
    status: "Active",
    lastActive: "3 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "PS",
  },
  {
    id: 4,
    name: "Arjun Reddy",
    email: "arjun.reddy@example.com",
    role: "User",
    status: "Inactive",
    lastActive: "2 weeks ago",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AR",
  },
  {
    id: 5,
    name: "Neha Gupta",
    email: "neha.gupta@example.com",
    role: "User",
    status: "Active",
    lastActive: "5 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "NG",
  },
]

// Sample system health data
const systemHealth = [
  { name: "API Server", status: "Operational", uptime: "99.9%" },
  { name: "Database", status: "Operational", uptime: "99.8%" },
  { name: "Authentication Service", status: "Operational", uptime: "99.9%" },
  { name: "Storage Service", status: "Degraded", uptime: "98.5%" },
  { name: "Notification Service", status: "Operational", uptime: "99.7%" },
]

// Sample audit logs
const auditLogs = [
  {
    id: 1,
    action: "User Login",
    user: "Anish Maniyar",
    timestamp: "2023-07-15 14:32:45",
    details: "Successful login from 192.168.1.1",
    status: "Success",
  },
  {
    id: 2,
    action: "Waste Entry Added",
    user: "Vikram Singh",
    timestamp: "2023-07-15 13:45:22",
    details: "Added 5.2kg of plastic waste",
    status: "Success",
  },
  {
    id: 3,
    action: "Token Redemption",
    user: "Priya Sharma",
    timestamp: "2023-07-15 12:18:05",
    details: "Redeemed 500 tokens for discount",
    status: "Success",
  },
  {
    id: 4,
    action: "User Settings Update",
    user: "Arjun Reddy",
    timestamp: "2023-07-15 11:05:33",
    details: "Changed notification preferences",
    status: "Success",
  },
  {
    id: 5,
    action: "Failed Login Attempt",
    user: "Unknown",
    timestamp: "2023-07-15 10:22:17",
    details: "Failed login attempt from 203.0.113.1",
    status: "Failed",
  },
]

export default function AdminPanel() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Reports
            </Button>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Waste Processed</CardTitle>
              <Trash2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24,560 kg</div>
              <p className="text-xs text-muted-foreground">+8.2% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Energy Generated</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9,824 kWh</div>
              <p className="text-xs text-muted-foreground">+6.7% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.5%</div>
              <p className="text-xs text-muted-foreground">-0.3% from last week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-4">
          <TabsList>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="system">System Health</TabsTrigger>
            <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>User Management</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search users..." className="w-[200px] pl-8 md:w-[260px]" />
                    </div>
                    <Button>Add User</Button>
                  </div>
                </div>
                <CardDescription>Manage user accounts, roles, and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              user.role === "Admin"
                                ? "bg-blue-50 text-blue-700 hover:bg-blue-50 border-blue-200"
                                : user.role === "Moderator"
                                  ? "bg-purple-50 text-purple-700 hover:bg-purple-50 border-purple-200"
                                  : "bg-gray-50 text-gray-700 hover:bg-gray-50 border-gray-200"
                            }
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              user.status === "Active"
                                ? "bg-green-50 text-green-700 hover:bg-green-50 border-green-200"
                                : "bg-red-50 text-red-700 hover:bg-red-50 border-red-200"
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.lastActive}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit User</DropdownMenuItem>
                              <DropdownMenuItem>Change Role</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Deactivate User</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t p-4">
                <div className="text-sm text-muted-foreground">Showing 5 of 1,248 users</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>Monitor the health and performance of system components</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Uptime</TableHead>
                      <TableHead>Load</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {systemHealth.map((service) => (
                      <TableRow key={service.name}>
                        <TableCell className="font-medium">{service.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {service.status === "Operational" ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : service.status === "Degraded" ? (
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-500" />
                            )}
                            <span
                              className={
                                service.status === "Operational"
                                  ? "text-green-600"
                                  : service.status === "Degraded"
                                    ? "text-yellow-600"
                                    : "text-red-600"
                              }
                            >
                              {service.status}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{service.uptime}</TableCell>
                        <TableCell>
                          <div className="w-full">
                            <Progress value={Number.parseInt(service.uptime)} className="h-2" />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="border-t p-4">
                <Button variant="outline" className="w-full">
                  View Detailed System Metrics
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="audit" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Blockchain Audit Logs</CardTitle>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export Logs
                  </Button>
                </div>
                <CardDescription>Secure, tamper-proof record of all system activities</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Action</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {auditLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-medium">{log.action}</TableCell>
                        <TableCell>{log.user}</TableCell>
                        <TableCell>{log.timestamp}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              log.status === "Success"
                                ? "bg-green-50 text-green-700 hover:bg-green-50 border-green-200"
                                : "bg-red-50 text-red-700 hover:bg-red-50 border-red-200"
                            }
                          >
                            {log.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-[300px] truncate">{log.details}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t p-4">
                <div className="text-sm text-muted-foreground">Showing 5 of 1,248 logs</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

