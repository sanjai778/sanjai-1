import React from "react"
import { Metadata } from "next"
import "../visitors/visitors.css"
import "../platform.css";
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Hero from "@/app/platform/section/hero"
import Features from "@/app/platform/section/features"
import ProcessSteps from "@/app/platform/section/process-steps"
import Integrations from "@/app/platform/section/integrations"
import dynamic from 'next/dynamic'

const FaqAccordion = dynamic(() => import("@/app/components/FaqAccordion"))
const CtaSection = dynamic(() => import("@/app/components/sections/CtaSection"))
const TestimonialSectionServer = dynamic(() => import("@/app/components/sections/TestimonialSection.server"))
const RelatedCaseStudies = dynamic(() => import("@/app/components/RelatedCaseStudies"))

export const metadata: Metadata = {
  title: 'Delivery Management System | Onfra',
  description: 'Track, manage, and deliver packages securely with Onfra’s smart delivery management system. Automate front-desk delivery operations with real-time notifications.',
}

const deliveriesFaqs = [
  {
    Question: 'What types of deliveries can be managed with Onfra?',
    Answer: 'Onfra supports all types of workplace deliveries, including documents, parcels, couriers, and internal packages.',
  },
  {
    Question: 'How are employees notified about their deliveries?',
    Answer: 'Recipients receive instant notifications via email, SMS, or in-app alerts as soon as their package is logged.',
  },
  {
    Question: 'Can I track uncollected or pending packages?',
    Answer: 'Yes. The dashboard shows pending, collected, and overdue deliveries in real time, making it easy to follow up.',
  },
  {
    Question: 'Is proof of delivery captured?',
    Answer: 'Yes. Onfra captures proof of delivery through digital signatures or OTP verification at the time of package pickup.',
  },
  {
    Question: 'Can this work across multiple office locations?',
    Answer: 'Absolutely. You can manage deliveries for multiple offices or branches from a single centralized dashboard.',
  },
  {
    Question: 'Is delivery data stored securely?',
    Answer: 'Yes. All delivery records are securely stored and accessible only to authorized users, ensuring data privacy and compliance.',
  },
  {
    Question: 'Can delivery reports be exported?',
    Answer: 'Yes. You can easily export delivery logs and reports for audits, tracking, or operational analysis.',
  },
  {
    Question: 'Is the system easy for front-desk teams to use?',
    Answer: 'Definitely. The delivery workflow is designed to be simple and intuitive, requiring minimal training for reception and security staff.',
  },
];

export default function DeliveriesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": deliveriesFaqs.map((faq) => ({
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
        tagline="Deliveries Management"
        title="Simplify package handling at your workplace"
        description="Track, manage, and deliver packages securely with a smart delivery management system. Automate front-desk delivery operations with real-time notifications, digital logs, and proof of delivery — all from a single, centralized platform."
        imageUrl="/uploads/svg_image/product/visitor.webp"
      />
      <Features
        tagline="Core Features"
        title="Everything you need to manage incoming and outgoing deliveries efficiently."
        features={[
          {
            icon: <span className="icon-visitdesk_icons_0140" />,
            title: "Smart Package Logging",
            description: "Log incoming deliveries instantly by scanning or entering package details such as courier name, sender, and recipient.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0125" />,
            title: "Real-Time Recipient Notifications",
            description: "Automatically notify employees via email, SMS, or app alerts as soon as their package arrives.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0091" />,
            title: "Secure Package Storage Tracking",
            description: "Track where each package is stored at the front desk or mailroom to prevent loss or misplacement.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0085" />,
            title: "Proof of Delivery",
            description: "Capture recipient acknowledgment through digital signatures or OTP verification at the time of pickup.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0045" />,
            title: "Pending & Collected Deliveries Dashboard",
            description: "View all pending, picked-up, and overdue packages in one real-time dashboard with smart filters.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0148" />,
            title: "Analytics & Reports",
            description: "Generate detailed delivery reports to analyze volume trends, delays, and operational efficiency.",
          },
        ]}
      />
      <ProcessSteps
        tagline="How Deliveries Work"
        title="A simple 3-step process to manage every package from arrival to pickup."
        steps={[
          {
            title: "Package Arrives & Is Logged",
            description: "When a delivery arrives, staff quickly log basic details like courier name and recipient.",
          },
          {
            title: "Recipient Is Notified Instantly",
            description: "The recipient is automatically notified via email, SMS, or app notification that their package is ready.",
          },
          {
            title: "Secure Pickup & Confirmation",
            description: "When the recipient collects the package, the system records confirmation using a digital signature or OTP.",
          },
        ]}
      />
      <Integrations />
      <RelatedCaseStudies />
      <TestimonialSectionServer />
      <FaqAccordion faqs={deliveriesFaqs} />
      <CtaSection/>
      <Footer />
    </main>
  )
}
