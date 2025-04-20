import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-teal-100 p-4">
      <Card className="max-w-md w-full p-6 shadow-lg bg-white/90 backdrop-blur">
        <div className="text-center space-y-6">
          <div className="relative mx-auto w-32 h-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-7xl font-bold text-teal-600">404</div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-full h-full rounded-full bg-teal-500 animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1>
            <p className="text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="default" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/careers">
                <Search className="mr-2 h-4 w-4" />
                Browse Careers
              </Link>
            </Button>
          </div>
        </div>
      </Card>

      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-teal-800">TalentBloom</h2>
        <p className="text-teal-700 text-sm">Nurturing Your Career</p>
      </div>
    </div>
  )
}
