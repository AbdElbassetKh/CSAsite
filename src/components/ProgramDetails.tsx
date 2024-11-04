"use client"

import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Subject {
  name: string
  hours: number
  credits: number
}

interface Semester {
  name: string
  subjects: Subject[]
}

interface Year {
  name: string
  semesters: Semester[]
}

const programData: Year[] = [
  {
    name: "Year 1",
    semesters: [
      {
        name: "Semester 1",
        subjects: [
          { name: "Analyse 1", hours: 90, credits: 7 },
          { name: "Algèbre 1", hours: 45, credits: 7 },
          { name: "Algorithmique et structure de données 1", hours: 67.5, credits: 7 },
          { name: "Structure machine 1", hours: 45, credits: 7 },
          { name: "Physique 1", hours: 45, credits: 7 },
          { name: "Chimie 1", hours: 45, credits: 7 },
          { name: "TP Algorithmique et structure de données 1", hours: 45, credits: 6 },
          { name: "TP Physique 1", hours: 22.5, credits: 2 },
          { name: "TP Chimie 1", hours: 22.5, credits: 2 },
          { name: "Management de projet 1", hours: 22.5, credits: 2 },
          { name: "Introduction au développement Web", hours: 22.5, credits: 2 },
          { name: "Technical English 1", hours: 22.5, credits: 2 },
          { name: "Communication professionnelle", hours: 22.5, credits: 2 },
        ]
      },
      {
        name: "Semester 2",
        subjects: [
          { name: "Analyse 2", hours: 90, credits: 6 },
          { name: "Algèbre 2", hours: 45, credits: 6 },
          { name: "Algorithmique et structure de données 2", hours: 67.5, credits: 6 },
          { name: "Structure machine 2", hours: 45, credits: 4 },
          { name: "Probabilité et statistique", hours: 45, credits: 6 },
          { name: "Physique 2", hours: 45, credits: 6 },
          { name: "Chimie 2", hours: 45, credits: 6 },
          { name: "Programmation 2", hours: 67.5, credits: 6 },
          { name: "TP Physique 2", hours: 22.5, credits: 2 },
          { name: "TP Chimie 2", hours: 22.5, credits: 2 },
          { name: "Management de projet 2", hours: 22.5, credits: 2 },
          { name: "Ethique et déontologie", hours: 22.5, credits: 2 },
          { name: "Communication Interpersonnelle", hours: 22.5, credits: 2 },
          { name: "English for Automation and Control 2", hours: 22.5, credits: 2 },
        ]
      }
    ]
  },
  {
    name: "Year 2",
    semesters: [
      {
        name: "Semester 3",
        subjects: [
          { name: "Fichiers et structure de données", hours: 90, credits: 6 },
          { name: "Algorithmique et structure de données 3", hours: 45, credits: 6 },
          { name: "Systèmes d'information", hours: 67.5, credits: 6 },
          { name: "Théorie des graphes", hours: 45, credits: 4 },
          { name: "Théorie du Signal", hours: 45, credits: 6 },
          { name: "Electricité 1", hours: 45, credits: 6 },
          { name: "Electronique générale 1", hours: 45, credits: 6 },
          { name: "Programmation 3", hours: 67.5, credits: 5 },
          { name: "TP Electronique générale 1", hours: 22.5, credits: 2 },
          { name: "Méthodes numérique", hours: 22.5, credits: 5 },
          { name: "Systèmes Automatisés Industriels", hours: 22.5, credits: 2 },
          { name: "English for Technical Communication 1", hours: 22.5, credits: 2 },
        ]
      },
      {
        name: "Semester 4",
        subjects: [
          { name: "Réseaux et télécommunications", hours: 45, credits: 4 },
          { name: "Système d'exploitation", hours: 45, credits: 4 },
          { name: "Bases de données", hours: 45, credits: 4 },
          { name: "Ingénierie du Logiciel", hours: 45, credits: 4 },
          { name: "Systèmes Asservis 1", hours: 45, credits: 4 },
          { name: "Traitement du Signal", hours: 45, credits: 4 },
          { name: "Logique combinatoire et séquentielle", hours: 67.5, credits: 5 },
          { name: "Fonctions Principales d'Electronique", hours: 67.5, credits: 6 },
          { name: "Programmation orienté objet", hours: 45, credits: 4 },
          { name: "Réseaux Informatique 1", hours: 60, credits: 6 },
          { name: "TP Systèmes Asservis 1", hours: 22.5, credits: 2 },
          { name: "TP Traitement du signal", hours: 22.5, credits: 2 },
          { name: "Installations électriques", hours: 22.5, credits: 1 },
          { name: "Introduction à l'Intelligence artificielle", hours: 22.5, credits: 1 },
          { name: "English for Technical Communication 2", hours: 22.5, credits: 1 },
        ]
      }
    ]
  },
  {
    name: "Year 3",
    semesters: [
      {
        name: "Semester 5",
        subjects: [
          { name: "Analyse de données", hours: 67.5, credits: 6 },
          { name: "Système d'aide à la décision", hours: 67.5, credits: 4 },
          { name: "Méthodes de développement DevOps, CI/CD", hours: 67.5, credits: 6 },
          { name: "Sécurité Informatique", hours: 67.5, credits: 4 },
          { name: "Systèmes Asservis 2", hours: 45, credits: 4 },
          { name: "Électronique de Puissance", hours: 60, credits: 5 },
          { name: "Capteurs et Instrumentation Industriels", hours: 45, credits: 5 },
          { name: "Administration des Bases de données", hours: 45, credits: 4 },
          { name: "Programmation Mobile et IoT", hours: 45, credits: 4 },
          { name: "Calculateur Embarqué I", hours: 67.5, credits: 6 },
          { name: "Automates Programmables Industriels I", hours: 67.5, credits: 6 },
          { name: "Machines Électriques et Entrainement", hours: 45, credits: 4 },
          { name: "Robotique", hours: 22.5, credits: 1 },
          { name: "Management de l'innovation", hours: 22.5, credits: 1 },
        ]
      },
      {
        name: "Semester 6",
        subjects: [
          { name: "Apprentissage Automatique", hours: 45, credits: 5 },
          { name: "Cloud Computing et visualisation", hours: 45, credits: 5 },
          { name: "Gestion de projet informatique", hours: 45, credits: 5 },
          { name: "Recherche Opérationnelle", hours: 67.5, credits: 5 },
          { name: "Techniques de l'IA", hours: 45, credits: 5 },
          { name: "Actionneurs Industriels", hours: 45, credits: 5 },
          { name: "Calculateur Embarqué 2", hours: 67.5, credits: 6 },
          { name: "Automates Programmables Industriels 2", hours: 67.5, credits: 6 },
          { name: "Supervision et HMI", hours: 67.5, credits: 6 },
          { name: "Projet de Fin de Cycle", hours: 0, credits: 6 },
          { name: "Normes et Sécurité Électrique", hours: 22.5, credits: 2 },
          { name: "Entreprenariat et Management d'entreprise", hours: 22.5, credits: 2 },
        ]
      }
    ]
  }
]

export default function ProgramDetails() {
  const [activeYear, setActiveYear] = useState("Year 1")

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Program Details</h2>
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Computer Science and Automation Program Structure</CardTitle>
            <CardDescription>Bachelor's Degree Curriculum</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeYear} onValueChange={setActiveYear}>
              <TabsList className="grid w-full grid-cols-3">
                {programData.map((year) => (
                  <TabsTrigger key={year.name} value={year.name}>
                    {year.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {programData.map((year) => (
                <TabsContent key={year.name} value={year.name}>
                  <Accordion type="single" collapsible className="w-full">
                    {year.semesters.map((semester, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{semester.name}</AccordionTrigger>
                        <AccordionContent>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Subject</TableHead>
                                <TableHead>Hours</TableHead>
                                <TableHead>Credits</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {semester.subjects.map((subject, subIndex) => (
                                <TableRow key={subIndex}>
                                  <TableCell>{subject.name}</TableCell>
                                  <TableCell>{subject.hours}</TableCell>
                                  <TableCell>{subject.credits}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
