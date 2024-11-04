"use client"

import { useState } from 'react'
import { Plus, Minus, Send } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface FAQProps {
  onNavigate: (page: string) => void
}

export default function FAQ({ onNavigate }: FAQProps) {
  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Requirements include a high school diploma with strong mathematics and science backgrounds."
    },
    {
      question: "How long is the program?",
      answer: "The program is a double diplomation that typically takes 3 years to complete."
    },
    {
      question: "Is there a possibility to complete the master's degree?",
      answer: "Yes, there is a possibility to complete the master's degree in one of the two specializations, or both when the dual master's degree becomes available soon."
    },
    {
      question: "What career paths can I pursue?",
      answer: "Graduates can pursue careers in software development, automation engineering, AI, and more."
    },
    {
      question: "Is financial aid available?",
      answer: "Yes, various financial aid options and scholarships are available for eligible students."
    }
  ]

  return (
    <div className="bg-background py-20" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <Button
            onClick={() => onNavigate('question')}
            size="lg"
            className="group"
          >
            Ask your question
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  )
}
