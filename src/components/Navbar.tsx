"use client"

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-200 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span 
              className="text-2xl font-bold text-primary cursor-pointer" 
              onClick={() => onNavigate('home')}
            >
              CSA
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-foreground">
                    About <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onSelect={() => onNavigate('why')}>Why us?</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => onNavigate('about')}>About CSA</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" onClick={() => onNavigate('program')} className="text-foreground">
                Program details
              </Button>
              <Button variant="ghost" onClick={() => onNavigate('club')} className="text-foreground">
                CSA Club
              </Button>
              <Button variant="default" onClick={() => onNavigate('login')}>
                Sign in
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Button variant="ghost" className="w-full justify-start" onClick={() => { onNavigate('why'); setIsOpen(false); }}>
              Why us?
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => { onNavigate('about'); setIsOpen(false); }}>
              About CSA
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => { onNavigate('program'); setIsOpen(false); }}>
              Program details
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => { onNavigate('club'); setIsOpen(false); }}>
              CSA Club
            </Button>
            <Button variant="default" className="w-full" onClick={() => { onNavigate('login'); setIsOpen(false); }}>
              Sign in
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
