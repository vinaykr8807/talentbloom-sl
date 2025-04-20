"use client"

import { Checkbox } from "@/components/ui/checkbox"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Plus, Save, Trash2 } from "lucide-react"

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState("personal")
  const [formData, setFormData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      title: "",
      summary: "",
    },
    experience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ],
    education: [
      {
        institution: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    skills: [""],
  })

  const handlePersonalChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      personal: {
        ...formData.personal,
        [name]: value,
      },
    })
  }

  const handleExperienceChange = (index, e) => {
    const { name, value, type, checked } = e.target
    const newExperience = [...formData.experience]
    newExperience[index][name] = type === "checkbox" ? checked : value
    setFormData({
      ...formData,
      experience: newExperience,
    })
  }

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    })
  }

  const removeExperience = (index) => {
    const newExperience = [...formData.experience]
    newExperience.splice(index, 1)
    setFormData({
      ...formData,
      experience: newExperience,
    })
  }

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target
    const newEducation = [...formData.education]
    newEducation[index][name] = value
    setFormData({
      ...formData,
      education: newEducation,
    })
  }

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          institution: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    })
  }

  const removeEducation = (index) => {
    const newEducation = [...formData.education]
    newEducation.splice(index, 1)
    setFormData({
      ...formData,
      education: newEducation,
    })
  }

  const handleSkillChange = (index, value) => {
    const newSkills = [...formData.skills]
    newSkills[index] = value
    setFormData({
      ...formData,
      skills: newSkills,
    })
  }

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, ""],
    })
  }

  const removeSkill = (index) => {
    const newSkills = [...formData.skills]
    newSkills.splice(index, 1)
    setFormData({
      ...formData,
      skills: newSkills,
    })
  }

  const handleNext = () => {
    if (activeTab === "personal") setActiveTab("experience")
    else if (activeTab === "experience") setActiveTab("education")
    else if (activeTab === "education") setActiveTab("skills")
    else if (activeTab === "skills") {
      // Submit form or navigate to preview
      console.log("Form submitted:", formData)
      window.location.href = "/resume-preview"
    }
  }

  const handlePrevious = () => {
    if (activeTab === "experience") setActiveTab("personal")
    else if (activeTab === "education") setActiveTab("experience")
    else if (activeTab === "skills") setActiveTab("education")
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
              <Link href="/templates">Change Template</Link>
            </Button>
            <Button size="sm">
              <Save className="mr-2 h-4 w-4" />
              Save Progress
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Create Your Resume</h1>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <TabsContent value="personal" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.personal.fullName}
                          onChange={handlePersonalChange}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Professional Title</Label>
                        <Input
                          id="title"
                          name="title"
                          value={formData.personal.title}
                          onChange={handlePersonalChange}
                          placeholder="Software Engineer"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.personal.email}
                          onChange={handlePersonalChange}
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.personal.phone}
                          onChange={handlePersonalChange}
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.personal.location}
                          onChange={handlePersonalChange}
                          placeholder="New York, NY"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="summary">Professional Summary</Label>
                        <Textarea
                          id="summary"
                          name="summary"
                          value={formData.personal.summary}
                          onChange={handlePersonalChange}
                          placeholder="Briefly describe your professional background and key strengths"
                          rows={4}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                {formData.experience.map((exp, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Work Experience #{index + 1}</h3>
                        {formData.experience.length > 1 && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeExperience(index)}
                            className="text-destructive"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        )}
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor={`company-${index}`}>Company</Label>
                          <Input
                            id={`company-${index}`}
                            name="company"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(index, e)}
                            placeholder="Company Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`position-${index}`}>Position</Label>
                          <Input
                            id={`position-${index}`}
                            name="position"
                            value={exp.position}
                            onChange={(e) => handleExperienceChange(index, e)}
                            placeholder="Job Title"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                          <Input
                            id={`startDate-${index}`}
                            name="startDate"
                            type="month"
                            value={exp.startDate}
                            onChange={(e) => handleExperienceChange(index, e)}
                            placeholder="YYYY-MM"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`endDate-${index}`}>End Date</Label>
                          <Input
                            id={`endDate-${index}`}
                            name="endDate"
                            type="month"
                            value={exp.endDate}
                            onChange={(e) => handleExperienceChange(index, e)}
                            placeholder="YYYY-MM"
                            disabled={exp.current}
                          />
                        </div>
                        <div className="flex items-center space-x-2 md:col-span-2">
                          <Checkbox
                            id={`current-${index}`}
                            name="current"
                            checked={exp.current}
                            onCheckedChange={(checked) =>
                              handleExperienceChange(index, {
                                target: { name: "current", type: "checkbox", checked },
                              })
                            }
                          />
                          <Label htmlFor={`current-${index}`}>I currently work here</Label>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor={`description-${index}`}>Description</Label>
                          <Textarea
                            id={`description-${index}`}
                            name="description"
                            value={exp.description}
                            onChange={(e) => handleExperienceChange(index, e)}
                            placeholder="Describe your responsibilities and achievements"
                            rows={4}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="outline" onClick={addExperience} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Another Experience
                </Button>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                {formData.education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Education #{index + 1}</h3>
                        {formData.education.length > 1 && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeEducation(index)}
                            className="text-destructive"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        )}
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor={`institution-${index}`}>Institution</Label>
                          <Input
                            id={`institution-${index}`}
                            name="institution"
                            value={edu.institution}
                            onChange={(e) => handleEducationChange(index, e)}
                            placeholder="University Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`degree-${index}`}>Degree</Label>
                          <Input
                            id={`degree-${index}`}
                            name="degree"
                            value={edu.degree}
                            onChange={(e) => handleEducationChange(index, e)}
                            placeholder="Bachelor's, Master's, etc."
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`field-${index}`}>Field of Study</Label>
                          <Input
                            id={`field-${index}`}
                            name="field"
                            value={edu.field}
                            onChange={(e) => handleEducationChange(index, e)}
                            placeholder="Computer Science, Business, etc."
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`eduStartDate-${index}`}>Start Date</Label>
                            <Input
                              id={`eduStartDate-${index}`}
                              name="startDate"
                              type="month"
                              value={edu.startDate}
                              onChange={(e) => handleEducationChange(index, e)}
                              placeholder="YYYY-MM"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`eduEndDate-${index}`}>End Date</Label>
                            <Input
                              id={`eduEndDate-${index}`}
                              name="endDate"
                              type="month"
                              value={edu.endDate}
                              onChange={(e) => handleEducationChange(index, e)}
                              placeholder="YYYY-MM"
                            />
                          </div>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor={`eduDescription-${index}`}>Description</Label>
                          <Textarea
                            id={`eduDescription-${index}`}
                            name="description"
                            value={edu.description}
                            onChange={(e) => handleEducationChange(index, e)}
                            placeholder="Relevant coursework, achievements, etc."
                            rows={4}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="outline" onClick={addEducation} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Another Education
                </Button>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Skills</h3>
                      <p className="text-sm text-muted-foreground">
                        Add skills that are relevant to the position you're applying for.
                      </p>
                      {formData.skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Input
                            value={skill}
                            onChange={(e) => handleSkillChange(index, e.target.value)}
                            placeholder="e.g., JavaScript, Project Management, Customer Service"
                          />
                          {formData.skills.length > 1 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeSkill(index)}
                              className="text-destructive"
                            >
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button variant="outline" onClick={addSkill} className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Another Skill
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>

          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={handlePrevious} disabled={activeTab === "personal"}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button onClick={handleNext}>
              {activeTab === "skills" ? "Preview Resume" : "Next"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
