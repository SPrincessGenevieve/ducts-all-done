"use client"

import { useEffect, useRef, useState } from "react"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import ServiceDetailSection from "@/components/ServiceDetailSection"
import ProcessSection from "@/components/ProcessSection"
import TestimoniesSection from "@/components/TestimoniesSection"
import ChooseUsSection from "@/components/ChooseUsSection"
import ServiceAreaSection from "@/components/ServiceAreaSection"
import QuestionSection from "@/components/QuestionSection"
import MessageSection from "@/components/MessageSection"
import ContactUsSection from "@/components/ContactUsSection"
import FooterSection from "@/components/FooterSection"

export default function Page() {
  const [height, setHeight] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 8 // HeroSection + 4 colored pages
  const [isScrolling, setIsScrolling] = useState(false)
  const isManualScrolling = useRef(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const pageRef = useRef(0)

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="h-screen bg-white">
        <HeroSection />
      </div>
      <ServicesSection></ServicesSection>
      <ProcessSection></ProcessSection>
      <TestimoniesSection></TestimoniesSection>
      <ChooseUsSection></ChooseUsSection>
      <ServiceAreaSection></ServiceAreaSection>
      <QuestionSection></QuestionSection>
      <MessageSection></MessageSection>
      <div>
        <ContactUsSection></ContactUsSection>
        <FooterSection></FooterSection>
      </div>
    </div>
  )
}
