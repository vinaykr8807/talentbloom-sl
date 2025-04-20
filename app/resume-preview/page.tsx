"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Edit, Share2 } from "lucide-react"

export default function ResumePreview() {
  // In a real app, you would fetch this data from your state management or API
  const [resumeData] = useState({
    personal: {
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "(123) 456-7890",
      location: "New York, NY",
      title: "Senior Software Engineer",
      summary:
        "Experienced software engineer with 8+ years of experience in full-stack development. Specialized in React, Node.js, and cloud architecture. Passionate about creating scalable and maintainable solutions.",
    },
    experience: [
      {
        company: "Tech Innovations Inc.",
        position: "Senior Software Engineer",
        startDate: "2020-01",
        endDate: "",
        current: true,
        description:
          "• Led a team of 5 developers to build a microservices architecture\n• Reduced API response time by 40% through optimization\n• Implemented CI/CD pipeline reducing deployment time by 60%",
      },
      {
        company: "Digital Solutions LLC",
        position: "Software Developer",
        startDate: "2016-03",
        endDate: "2019-12",
        current: false,
        description:
          "• Developed and maintained multiple web applications using React and Node.js\n• Collaborated with UX designers to implement responsive designs\n• Mentored junior developers and conducted code reviews",
      },
    ],
    education: [
      {
        institution: "University of Technology",
        degree: "Master's",
        field: "Computer Science",
        startDate: "2014-09",
        endDate: "2016-05",
        description: "Specialized in Software Engineering. GPA: 3.8/4.0",
      },
      {
        institution: "State University",
        degree: "Bachelor's",
        field: "Computer Science",
        startDate: "2010-09",
        endDate: "2014-05",
        description: "Minor in Mathematics. Dean's List for 6 semesters.",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "AWS", "Docker", "GraphQL", "TypeScript", "Agile Methodologies"],
  })

  const formatDate = (dateString) => {
    if (!dateString) return "Present"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            TalentBloom
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/resume-builder">
                <Edit className="mr-2 h-4 w-4" />
                Edit Resume
              </Link>
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Resume Preview</h1>

          <Card className="p-8 shadow-lg bg-white">
            {/* Resume Header */}
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800">{resumeData.personal.fullName}</h2>
              <p className="text-lg text-gray-600 mt-1">{resumeData.personal.title}</p>
              <div className="flex flex-wrap justify-center gap-x-4 mt-2 text-sm text-gray-600">
                <span>{resumeData.personal.email}</span>
                <span>{resumeData.personal.phone}</span>
                <span>{resumeData.personal.location}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold border-b pb-1 mb-2">Professional Summary</h3>
              <p className="text-gray-700">{resumeData.personal.summary}</p>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold border-b pb-1 mb-3">Work Experience</h3>
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-800">{exp.position}</h4>
                        <p className="text-gray-600">{exp.company}</p>
                      </div>
                      <p className="text-sm text-gray-600">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </p>
                    </div>
                    <div className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold border-b pb-1 mb-3">Education</h3>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {edu.degree} in {edu.field}
                        </h4>
                        <p className="text-gray-600">{edu.institution}</p>
                      </div>
                      <p className="text-sm text-gray-600">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </p>
                    </div>
                    {edu.description && <p className="mt-1 text-gray-700">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold border-b pb-1 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          <div className="mt-8 flex justify-center gap-4">
            <Button asChild>
              <Link href="/templates">Try Different Template</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resume-builder">Edit Content</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
