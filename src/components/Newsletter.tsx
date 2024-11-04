"use client"

import { Mail, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Newsletter() {
  return (
    <div className="bg-gradient-to-b from-background to-background/80 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-6 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CardHeader className="p-0">
                  <CardTitle className="text-3xl font-bold mb-4">
                    Join our <span className="text-primary">Newsletter</span>
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Stay updated with the latest news about CSA and automation technology.
                    Get exclusive insights and updates delivered to your inbox.
                  </CardDescription>
                </CardHeader>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <form className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                    aria-label="Email address"
                  />
                  <Button type="submit" size="lg" className="group">
                    <Mail className="mr-2 h-4 w-4" />
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
