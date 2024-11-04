"use client"

import { useState } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Login from './components/Login'
import QuestionForm from './components/QuestionForm'
import ProgramDetails from './components/ProgramDetails'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login />
      case 'question':
        return <QuestionForm />
      case 'program':
        return <ProgramDetails />
      default:
        return (
          <>
            <Hero />
            <Features />
            <ProgramDetails />
            <FAQ onNavigate={setCurrentPage} />
            <Newsletter />
          </>
        )
    }
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background min-h-screen">
        <Navbar onNavigate={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
