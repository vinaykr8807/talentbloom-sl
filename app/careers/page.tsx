import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Filter, MapPin, Search } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-green-400 flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">TalentBloom</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link href="/careers" className="text-sm font-medium text-teal-600 transition-colors">
              Careers
            </Link>
            <Link href="/courses" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Courses
            </Link>
            <Link href="/mentors" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Mentors
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-teal-600 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Dream Career</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore thousands of career opportunities tailored to your skills and interests.
              </p>

              <div className="w-full max-w-3xl mt-6">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input placeholder="Search for jobs, skills, or companies" className="pl-10 h-12 rounded-lg" />
                  </div>
                  <Button className="h-12 bg-teal-600 hover:bg-teal-700">Search</Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Job Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Experience Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Featured Career Opportunities</h2>
                <p className="text-gray-500 mt-2">Discover top opportunities across various industries</p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0">
                <Filter className="mr-2 h-4 w-4" />
                Filter Results
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Senior Software Engineer",
                  company: "TechInnovate",
                  location: "Remote",
                  type: "Full-time",
                  salary: "$120,000 - $150,000",
                  posted: "2 days ago",
                },
                {
                  title: "UX/UI Designer",
                  company: "DesignHub",
                  location: "New York, NY",
                  type: "Full-time",
                  salary: "$90,000 - $110,000",
                  posted: "1 week ago",
                },
                {
                  title: "Marketing Manager",
                  company: "GrowthPartners",
                  location: "Hybrid",
                  type: "Full-time",
                  salary: "$85,000 - $105,000",
                  posted: "3 days ago",
                },
                {
                  title: "Data Scientist",
                  company: "AnalyticsPro",
                  location: "Remote",
                  type: "Full-time",
                  salary: "$110,000 - $140,000",
                  posted: "5 days ago",
                },
                {
                  title: "Product Manager",
                  company: "InnovateCorp",
                  location: "San Francisco, CA",
                  type: "Full-time",
                  salary: "$130,000 - $160,000",
                  posted: "1 day ago",
                },
                {
                  title: "Financial Analyst",
                  company: "CapitalGrowth",
                  location: "Chicago, IL",
                  type: "Full-time",
                  salary: "$75,000 - $95,000",
                  posted: "1 week ago",
                },
              ].map((job, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <div className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">{job.type}</div>
                    </div>
                    <div className="text-sm text-gray-500">{job.company}</div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="text-sm font-medium">{job.salary}</div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t pt-4">
                    <div className="text-xs text-gray-500">Posted {job.posted}</div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-auto">
                Load More Opportunities
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-green-400 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold">TalentBloom</span>
              </div>
              <p className="text-sm text-gray-500">Nurturing Your Career Journey</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/careers" className="hover:text-teal-600 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-teal-600 transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/mentors" className="hover:text-teal-600 transition-colors">
                    Mentors
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-teal-600 transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-teal-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-teal-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-teal-600 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-teal-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-teal-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-teal-600 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-teal-600 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">© 2025 TalentBloom. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 hover:text-teal-600">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-teal-600">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-teal-600">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
