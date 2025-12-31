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

const deskFaqs = [
  {
    Question: 'What is desk management and hot-desking?',
    Answer: 'Desk management allows employees to book workspaces in advance. Hot-desking is a flexible arrangement where employees don’t have assigned desks but can choose any available spot when they come to the office.',
  },
  {
    Question: 'How do employees book a desk?',
    Answer: 'Employees can book a desk through the Onfra mobile app or web dashboard by selecting their preferred spot on an interactive floor plan.',
  },
  {
    Question: 'Can I set desk booking limits?',
    Answer: 'Yes. Admins can set rules for how many desks a person can book, how far in advance they can book, and restrict specific neighborhoods to certain teams.',
  },
  {
    Question: 'Does the system support safe distancing?',
    Answer: 'Absolutely. The platform can automatically block adjacent desks when a booking is made to ensure social distancing and compliance with health protocols.',
  },
  {
    Question: 'Can I see real-time desk occupancy?',
    Answer: 'Yes. The live dashboard shows which desks are currently occupied, booked, or available, giving you immediate visibility into office usage.',
  },
  {
    Question: 'How does desk booking help reduce costs?',
    Answer: 'By analyzing occupancy data, you can identify underutilized areas and optimize your real estate footprint, potentially reducing rent and utility expenses.',
  },
];

export default function DeskPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": deskFaqs.map((faq) => ({
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
        tagline="Desk Management"
        title="Manage desk reservations for a flexible workspace"
        description="Empower your hybrid workforce with intuitive desk booking. Optimize office space utilization, facilitate collaboration, and provide employees with a seamless workspace experience through our desk management platform."
        imageUrl="/uploads/svg_image/product/visitor.webp"
      />
      <Features
        tagline="Core Features"
        title="Smart Desk Booking Capabilities"
        features={[
          {
            icon: <span className="icon-visitdesk_icons_0140" />,
            title: "Interactive Floor Plans",
            description: "Visualize your office layout and see desk availability in real-time. Allow employees to pick their preferred spot with a few clicks.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0125" />,
            title: "Flexible Scheduling",
            description: "Support hot-desking, desk hoteling, and permanent assignments. Set booking limits and recurring reservations to fit your office policy.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0091" />,
            title: "Neighborhood Planning",
            description: "Group desks by department or team to foster collaboration. Ensure teams can easily sit together in the hybrid office.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0085" />,
            title: "Safe Workplace Tools",
            description: "Maintain social distancing with automated desk spacing. Integrate cleaning schedules based on desk usage for a healthier environment.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0045" />,
            title: "Usage Insights",
            description: "Monitor desk occupancy and peak usage trends. Use data to optimize your real estate footprint and reduce unnecessary overhead.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0148" />,
            title: "Mobile App Access",
            description: "Allow employees to book and check-in to desks on the go using our user-friendly mobile application.",
          },
        ]}
      />
      <ProcessSteps
        tagline="How It Works"
        title="Booking a Desk. Simple and Fast."
        steps={[
          {
            title: "Find a Desk",
            description: "Open the floor plan and select an available desk",
          },
          {
            title: "Reserve",
            description: "Choose your date and time to confirm the booking",
          },
          {
            title: "Check-In",
            description: "Scan the QR code at the desk upon arrival to check-in",
          },
          {
            title: "Work Seamlessly",
            description: "Enjoy your productive day in the office",
          },
        ]}
      />
      <Integrations />
      <RelatedCaseStudies />
      <TestimonialSectionServer />
      <FaqAccordion faqs={deskFaqs} />
      <CtaSection/>
      <Footer />
    </main>
  )
}
