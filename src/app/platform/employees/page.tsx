import React from "react"
import "../visitors/visitors.css"
import "../platform.css";
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Hero from "@/app/platform/section/hero"
import Features from "@/app/platform/section/features"
import ProcessSteps from "@/app/platform/section/process-steps"
import Integrations from "@/app/platform/section/integrations"
import FaqAccordion from "@/app/components/FaqAccordion"
import CtaSection from "@/app/components/sections/CtaSection"
import TestimonialSectionServer from "@/app/components/sections/TestimonialSection.server"
import RelatedCaseStudies from "@/app/components/RelatedCaseStudies"

const attendanceFaqs = [
  {
    Question: 'How does the attendance system record check-ins and check-outs?',
    Answer: 'The system automatically logs attendance when users check in or out using Face ID, RFID cards, or mobile QR codes. All data is synced in real time to the central dashboard.',
  },
  {
    Question: 'Can it track both employees and contractors?',
    Answer: 'Yes. The platform supports multiple user types — including employees, contractors, and temporary staff — each with customizable access rules and attendance policies.',
  },
  {
    Question: 'Does it calculate total working hours automatically?',
    Answer: 'Absolutely. The system automatically calculates total work hours, late arrivals, breaks, and overtime based on check-in and check-out times.',
  },
  {
    Question: 'What if someone forgets to check out?',
    Answer: 'Admins can manually edit attendance records or configure an automatic check-out after a set time, ensuring accuracy and consistency.',
  },
  {
    Question: 'Is the attendance data available in real time?',
    Answer: 'Yes. Attendance data is synced instantly and visible on the dashboard in real time, allowing admins to see who’s present, absent, or late at any moment.',
  },
  {
    Question: 'Can I export attendance reports for payroll or HR?',
    Answer: 'Definitely. Reports can be filtered by date, department, or user and exported in Excel or PDF format for payroll processing and compliance.',
  },
  {
    Question: 'Does it support multiple office locations?',
    Answer: 'Yes. Attendance and time tracking work seamlessly across multiple branches or workplaces, with all data unified in one dashboard.',
  },
  {
    Question: 'How secure is the attendance data?',
    Answer: 'All data is encrypted and stored securely in the cloud, accessible only to authorized personnel with defined roles and permissions.',
  },
];

export default function EmployeesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": attendanceFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.Question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.Answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Hero
        tagline="Attendance & Time Tracking"
        title="Simplify employee time management"
        description="Monitor employee attendance with precision and ease. Automate check-ins, track working hours, and generate real-time attendance reports — all from a single, distribute platform."
        imageUrl="/uploads/svg_image/product/visitor.webp"
      />
      <Features
        tagline="Core Features"
        title="Everything you need to track attendance, manage shifts, and automate workforce operations."
        features={[
          {
            icon: <span className="icon-visitdesk_icons_0140" />,
            title: "Smart Check-In & Check-Out",
            description: "Mark attendance via mobile, web, or biometric devices with real-time validation and geolocation tracking.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0125" />,
            title: "Shift & Schedule Management",
            description: "Easily manage fixed, flexible, or rotational shifts, with automatic updates for breaks and overtime.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0091" />,
            title: "Leave & Absence Tracking",
            description: "Simplify leave requests, approvals, and balance tracking with built-in policy automation.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0085" />,
            title: "Real-Time Attendance Dashboard",
            description: "View who’s present, late, or absent across all branches instantly with smart filters and insights.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0045" />,
            title: "Automated Time Calculation",
            description: "Track total working hours, late entries, and early exits automatically — no manual input required.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0148" />,
            title: "Payroll & HR Integration",
            description: "Sync attendance data directly with HRMS or payroll systems to ensure accurate and timely payouts.",
          },
        ]}
      />
      <ProcessSteps
        tagline="How It Works"
        title="Tracking Time. Automated and Accurate."
        steps={[
          {
            title: "Check-in",
            description: "Employee or staff checks in using Face ID, RFID card, or QR code at the entry point.",
          },
          {
            title: "Real-time Logging",
            description: "System automatically records and syncs check-in time to the dashboard.",
          },
          {
            title: "Check-out",
            description: "At exit, the user checks out through the same device or app.",
          },
          {
            title: "Auto Calculation",
            description: "Platform calculates total working hours, breaks, and overtime automatically.",
          },
        ]}
      />
      <Integrations activeCategory="employees" />
      <RelatedCaseStudies />
      <TestimonialSectionServer />
      <FaqAccordion faqs={attendanceFaqs} />
      <CtaSection/>
      <Footer />
    </main>
  )
}
