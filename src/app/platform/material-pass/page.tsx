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

const materialPassFaqs = [
  {
    Question: 'What is the Material Pass feature?',
    Answer: 'Material Pass is a digital gate pass system that tracks the movement of materials into and out of a facility, replacing manual pass slips with automated, auditable workflows.',
  },
  {
    Question: 'Can I customize approval workflows?',
    Answer: 'Yes — you can configure multi-level approval flows, conditional rules, and reviewer hierarchies based on material type, quantity, or department.',
  },
  {
    Question: 'How does returnable material tracking work?',
    Answer: 'The system distinguishes between returnable and non-returnable materials and sends automated reminders for returns, with escalation options if due dates are missed.',
  },
  {
    Question: 'Can this integrate with my ERP or inventory system?',
    Answer: 'Yes — Material Pass supports integrations with existing inventory, ERP, or security systems to streamline data exchange and operational consistency.',
  },
  {
    Question: 'Is real-time tracking available?',
    Answer: 'Absolutely — you get live visibility into material movements and approval statuses via dashboards and exportable reports.',
  },
  {
    Question: 'Who benefits most from Material Pass?',
    Answer: 'This module is ideal for manufacturing plants, warehouses, construction sites, logistics centers, and any facility where material control, security, and compliance are critical.',
  },
];

export default function MaterialPassPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero
        tagline="Material Pass Management"
        title="Control Material Movement — Digitally, Securely, in Real-Time"
        description="Manage inbound, outbound, and returnable materials with automated gate pass workflows, complete tracking, and robust compliance — all from one centralized platform."
        imageUrl="/uploads/svg_image/product/visitor.webp"
      />
      <Features
        tagline="Core Features"
        title="Everything you need to control material flow and ensure compliance."
        features={[
          {
            icon: <span className="icon-visitdesk_icons_0140" />,
            title: "Automated Gate Pass Creation",
            description: "Submit gate pass requests for materials entering or leaving premises with detailed item information — no manual logs required.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0125" />,
            title: "Multi-Level Approval Workflows",
            description: "Set up hierarchical approval steps so material pass requests flow through the right reviewers before issuance.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0091" />,
            title: "Returnable Material Management",
            description: "Track returnable assets and materials with automated reminders, due dates, and escalation notifications.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0085" />,
            title: "Real-Time Visibility & Dashboards",
            description: "Get a complete operational overview with real-time dashboards showing active passes, pending approvals, and material status.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0045" />,
            title: "Custom Fields & Conditional Rules",
            description: "Configure pass fields and approval conditions based on material type, quantity, department, or purpose.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0148" />,
            title: "Reports & Analytics",
            description: "Generate exportable reports on material flow, gate pass activity, and compliance logs to support audits.",
          },
        ]}
      />
      <ProcessSteps
        tagline="How Material Pass Works"
        title="Material Movement. Streamlined in 3 steps."
        steps={[
          {
            title: "Request Submission",
            description: "A user submits a material pass request with item details, purpose, and destination.",
          },
          {
            title: "Approvals & Validation",
            description: "The request is routed through defined approval levels; once authorized, a secure digital pass is issued.",
          },
          {
            title: "Gate Verification & Tracking",
            description: "Security verifies the pass at entry/exit points and updates the status with real-time tracking.",
          },
        ]}
      />
      <Integrations activeCategory="visitors" />
      <RelatedCaseStudies />
      <TestimonialSectionServer />
      <FaqAccordion faqs={materialPassFaqs} />
      <CtaSection/>
      <Footer />
    </main>
  )
}
