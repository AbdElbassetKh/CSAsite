"use client"

import { Code2, Cpu, BookOpen, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      title: "Computer Science, Automation?",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      description: "Learn the fundamentals of computer science and automation engineering."
    },
    {
      title: "What subjects are taught?",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      description: "Comprehensive curriculum covering programming, AI, robotics, and more."
    },
    {
      title: "Why CSA is the best?",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      description: "Industry-aligned curriculum with hands-on practical experience."
    }
  ]

  return (
    <div className="bg-background/95 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button variant="link" className="group">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
