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

const vehicleFaqs = [
  {
    Question: 'What is Vehicle Pass & Tracking?',
    Answer: 'A digital system that manages vehicle access and tracks vehicle movement across your site with automated passes and logs — eliminating manual tracking.',
  },
  {
    Question: 'How does vehicle verification work?',
    Answer: 'Vehicles can be verified using RFID tags, QR codes, or manual checks at entry/exit points, and all movements are logged in the system.',
  },
  {
    Question: 'Can I restrict access for certain vehicles?',
    Answer: 'Yes — you can define access rules based on vehicle type, purpose, time window, visitor vs. employee vehicles, and more.',
  },
  {
    Question: 'Are reports available for compliance or security audits?',
    Answer: 'Absolutely — Onfra provides exportable reports on vehicle logs, movement history, peak hours, and traffic patterns.',
  },
  {
    Question: 'Does it work with existing gate hardware?',
    Answer: 'Yes — the platform can integrate with gate barriers, RFID readers, CCTV, and other systems to automate access control.',
  },
  {
    Question: 'Who benefits most from this module?',
    Answer: 'Facilities with high vehicle traffic — such as corporate campuses, factories, warehouses, logistics hubs, residential complexes, and educational campuses.',
  },
];

export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero
        tagline="Vehicle Pass & Tracking"
        title="Secure & Automated Vehicle Access Control"
        description="Manage vehicle entries, exits, and movement logs with a digital vehicle pass system — eliminating manual registers, reducing gate congestion, and improving security across your facility."
        imageUrl="/uploads/svg_image/product/visitor.webp"
      />
      <Features
        tagline="Core Features"
        title="Simplify Vehicle Movement Tracking Across Your Premises"
        features={[
          {
            icon: <span className="icon-visitdesk_icons_0140" />,
            title: "Digital Vehicle Pass Issuance",
            description: "Generate secure, digital passes with vehicle number, driver details, purpose of visit, and scheduled times — completely paperless.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0125" />,
            title: "Automated Entry & Exit Logging",
            description: "Capture vehicle entry and exit times automatically — no manual registers or logbooks.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0091" />,
            title: "Real-Time Vehicle Status",
            description: "View live details of vehicles that are inside, entering, exiting, or awaiting approval — all from a centralized dashboard.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0085" />,
            title: "RFID & QR Integration",
            description: "Enable fast, contactless identification with RFID tags or QR codes at gate checkpoints for seamless traffic flow.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0045" />,
            title: "Access Control Rules",
            description: "Set policies to control which vehicles are allowed, restricted, or require special approval based on type, purpose, or time.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0148" />,
            title: "Integrations with Gate Systems",
            description: "Connect with physical gates, barrier systems, CCTV, or RFID readers to automate both digital and physical access control.",
          },
        ]}
      />
      <ProcessSteps
        tagline="How It Works"
        title="Vehicle Pass & Tracking — Simple 3-Step Flow"
        steps={[
          {
            title: "Request Pass",
            description: "Users submit a vehicle pass request with details like registration number, driver info, and purpose.",
          },
          {
            title: "Approve & Issue",
            description: "Security or admin reviews and approves the request, then issues a secure digital vehicle pass.",
          },
          {
            title: "Verify & Log",
            description: "On arrival, the vehicle is verified at the gate with RFID or QR scan, and entry/exit times are logged automatically.",
          },
        ]}
      />
      <Integrations />
      <RelatedCaseStudies />
      <TestimonialSectionServer />
      <FaqAccordion faqs={vehicleFaqs} />
      <CtaSection/>
      <Footer />
    </main>
  )
}
