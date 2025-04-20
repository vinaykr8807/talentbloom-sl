import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function TemplatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            TalentBloom
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/templates" className="text-sm font-medium text-primary transition-colors">
              Templates
            </Link>
            <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-8 flex-1">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Resume Templates</h1>
          <p className="text-muted-foreground mb-8">
            Choose from our professionally designed templates to make your resume stand out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Professional",
                description: "Clean and traditional design perfect for corporate roles",
                image: "/placeholder.svg?height=400&width=300",
                popular: true,
              },
              {
                name: "Modern",
                description: "Contemporary layout with a creative touch",
                image: "/placeholder.svg?height=400&width=300",
                popular: false,
              },
              {
                name: "Minimalist",
                description: "Simple and elegant design that focuses on content",
                image: "/placeholder.svg?height=400&width=300",
                popular: false,
              },
              {
                name: "Creative",
                description: "Bold design for creative industries and positions",
                image: "/placeholder.svg?height=400&width=300",
                popular: false,
              },
              {
                name: "Executive",
                description: "Sophisticated design for senior positions",
                image: "/placeholder.svg?height=400&width=300",
                popular: false,
              },
              {
                name: "Technical",
                description: "Optimized for technical roles with skills emphasis",
                image: "/placeholder.svg?height=400&width=300",
                popular: true,
              },
            ].map((template, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={`${template.name} Template`}
                    className="w-full h-[300px] object-cover"
                  />
                  {template.popular && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/templates/${template.name.toLowerCase()}`}>Preview</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/resume-builder">Use Template</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 bg-muted">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold mb-4">TalentBloom</h3>
              <p className="text-sm text-muted-foreground">
                Helping professionals bloom their careers with stunning, effective resumes.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2025 TalentBloom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
