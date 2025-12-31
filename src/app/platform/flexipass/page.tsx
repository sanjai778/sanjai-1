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

const flexiPassFaqs = [
  {
    Question: 'What is Onfra FlexiPass?',
    Answer: 'FlexiPass is Onfra’s smart access management system that lets users unlock doors, desks, and spaces using mobile devices, QR codes, or NFC — eliminating the need for physical keys or cards.',
  },
  {
    Question: 'How does FlexiPass improve workplace security?',
    Answer: 'It provides role-based and time-bound access control, ensuring that only authorized people can enter specific areas during approved time windows.',
  },
  {
    Question: 'Can I manage multiple locations from one dashboard?',
    Answer: 'Yes. FlexiPass allows centralized access management for all sites, so admins can control permissions and monitor activity in real time.',
  },
  {
    Question: 'What happens if someone loses their phone or access device?',
    Answer: 'Access can be instantly revoked or reassigned through the admin dashboard, ensuring complete control and preventing unauthorized entry.',
  },
  {
    Question: 'Does FlexiPass integrate with Visitor Management and Employee Modules?',
    Answer: 'Yes. It works seamlessly with Onfra’s other modules, allowing automatic access for approved visitors or employees without manual intervention.',
  },
  {
    Question: 'Can I view detailed access logs and analytics?',
    Answer: 'Absolutely. FlexiPass records every entry and exit, providing reports and analytics to track occupancy, usage trends, and compliance data.',
  },
];

export default function FlexipassPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": flexiPassFaqs.map((faq) => ({
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
        tagline="FlexiPass"
        title="Smart, Secure, and Seamless Access"
        description="Digitize your workplace access with mobile-based entry, instant pass control, and real-time visibility — all managed effortlessly from one platform."
        imageUrl="/uploads/svg_image/product/visitor.webp"
      />
      <Features
        tagline="Core Features"
        title="Effortless Access, Smart Control, and Seamless Experience"
        features={[
          {
            icon: <span className="icon-visitdesk_icons_0140" />,
            title: "Digital Access & Mobile Unlock",
            description: "Use smartphones, QR codes, or NFC badges to unlock doors and gates — no physical keys needed.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0125" />,
            title: "Role-Based & Time-Bound Permissions",
            description: "Grant access by role, department, or schedule for total security and flexibility.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0091" />,
            title: "Instant Pass Control",
            description: "Issue or revoke digital passes instantly for visitors, employees, or contractors.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0085" />,
            title: "Unified with Visitor & Employee Modules",
            description: "Integrates seamlessly with Onfra’s Visitor and Employee Management for a connected experience.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0045" />,
            title: "Real-Time Access Logs & Analytics",
            description: "Track every entry and exit, monitor trends, and ensure compliance with ease.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0148" />,
            title: "Emergency Override & Safety Mode",
            description: "Enable instant lockdowns or access overrides during emergencies for complete safety control.",
          },
        ]}
      />
      <ProcessSteps
        tagline="How It Works"
        title="From Request to Access. Simplified and Secure."
        steps={[
          {
            title: "Access Request",
            description: "Users or admins initiate an access request through the Onfra app or dashboard.",
          },
          {
            title: "Approval & Pass Generation",
            description: "Authorized personnel approve the request and issue a digital pass instantly — customized by role, time, or area.",
          },
          {
            title: "Smart Unlock",
            description: "Users unlock doors, gates, or workspaces using their phone, QR code, or NFC badge — no physical keys required.",
          },
          {
            title: "Real-Time Tracking & Control",
            description: "Every entry and exit is logged instantly, giving admins full visibility, analytics, and control across all locations.",
          },
        ]}
      />
      <Integrations activeCategory="authentication" />
      <RelatedCaseStudies />
      <TestimonialSectionServer />
      <FaqAccordion faqs={flexiPassFaqs} />
      <CtaSection/>
      <Footer />
    </main>
  )
}
