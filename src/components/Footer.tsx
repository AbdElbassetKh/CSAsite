import { Github, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-foreground font-bold mb-4">About CSA</h4>
            <ul className="space-y-2">
              <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">Why us?</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">About</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">Program details</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">CSA Club</Button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-foreground font-bold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">Sign in</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">Questions</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">Contact Us</Button></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Github">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-muted-foreground mt-4">
              © 2024 CSA. All rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
