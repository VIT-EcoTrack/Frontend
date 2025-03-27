import DashboardLayout from "../../dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, CuboidIcon as Cube, Calendar } from "lucide-react"

// Sample waste ledger data
const wasteEntries = [
  {
    id: "WL-1001",
    date: "2023-07-15",
    location: "Recycling Center A",
    type: "Plastic",
    weight: "5.2 kg",
    tokens: 26,
    verified: true,
  },
  {
    id: "WL-1002",
    date: "2023-07-14",
    location: "Recycling Center B",
    type: "Paper",
    weight: "3.8 kg",
    tokens: 19,
    verified: true,
  },
  {
    id: "WL-1003",
    date: "2023-07-12",
    location: "Recycling Center A",
    type: "Organic",
    weight: "7.5 kg",
    tokens: 15,
    verified: true,
  },
  {
    id: "WL-1004",
    date: "2023-07-10",
    location: "Recycling Center C",
    type: "Metal",
    weight: "2.1 kg",
    tokens: 21,
    verified: true,
  },
  {
    id: "WL-1005",
    date: "2023-07-08",
    location: "Recycling Center B",
    type: "Plastic",
    weight: "4.3 kg",
    tokens: 22,
    verified: true,
  },
  {
    id: "WL-1006",
    date: "2023-07-05",
    location: "Recycling Center A",
    type: "Paper",
    weight: "6.7 kg",
    tokens: 34,
    verified: true,
  },
  {
    id: "WL-1007",
    date: "2023-07-03",
    location: "Recycling Center C",
    type: "Organic",
    weight: "8.2 kg",
    tokens: 16,
    verified: true,
  },
  {
    id: "WL-1008",
    date: "2023-07-01",
    location: "Recycling Center B",
    type: "Metal",
    weight: "1.9 kg",
    tokens: 19,
    verified: true,
  },
]

export default function WasteLedger() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Waste Tracking Ledger</h1>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filter Waste Entries</CardTitle>
            <CardDescription>Search and filter your waste drop-off records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex flex-1 items-center space-x-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by ID or location..." className="flex-1" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Waste Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="plastic">Plastic</SelectItem>
                    <SelectItem value="paper">Paper</SelectItem>
                    <SelectItem value="organic">Organic</SelectItem>
                    <SelectItem value="metal">Metal</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <Calendar className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Date Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <Cube className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="center-a">Recycling Center A</SelectItem>
                    <SelectItem value="center-b">Recycling Center B</SelectItem>
                    <SelectItem value="center-c">Recycling Center C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Waste Drop-off Records</CardTitle>
            <CardDescription>A complete record of your waste contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead>Tokens</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {wasteEntries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium">{entry.id}</TableCell>
                    <TableCell>{entry.date}</TableCell>
                    <TableCell>{entry.location}</TableCell>
                    <TableCell>{entry.type}</TableCell>
                    <TableCell>{entry.weight}</TableCell>
                    <TableCell>{entry.tokens}</TableCell>
                    <TableCell>
                      {entry.verified ? (
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 hover:bg-green-50 border-green-200"
                        >
                          Verified
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50 border-yellow-200"
                        >
                          Pending
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

