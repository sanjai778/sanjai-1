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

const queueFaqs = [
  {
    Question: 'How does Onfra’s Queue Management system work?',
    Answer: 'Onfra’s system allows visitors to check in digitally, get a queue ticket, and receive live updates on their waiting time. The platform automatically assigns them to the right service counter for a faster experience.',
  },
  {
    Question: 'Can customers join the queue without downloading an app?',
    Answer: 'Yes. Visitors can scan a QR code or use a kiosk tablet to register — no app or login required.',
  },
  {
    Question: 'Does the system send real-time notifications?',
    Answer: 'Absolutely. Customers get instant alerts through SMS, email, or WhatsApp when their turn is near. Staff can also track queues live on the admin dashboard.',
  },
  {
    Question: 'Can I manage multiple service queues at once?',
    Answer: 'Yes. You can create and manage multiple queues (like billing, support, delivery, etc.) in one dashboard — perfect for multi-department operations.',
  },
  {
    Question: 'Is the queue system customizable?',
    Answer: 'Completely. You can customize queue categories, forms, display screens, and notifications to match your workflow and branding.',
  },
  {
    Question: 'Does Onfra support analytics and reports?',
    Answer: 'Yes. Onfra provides a real-time analytics dashboard that shows queue length, service time, staff performance, and customer feedback for data-driven decisions.',
  },
  {
    Question: 'Can it integrate with my existing systems?',
    Answer: 'Onfra’s Queue Management supports API integrations with CRMs, HR platforms, and access control systems to keep all operations connected.',
  },
  {
    Question: 'How secure is the visitor and queue data?',
    Answer: 'All data is stored securely with end-to-end encryption and full compliance with privacy standards, ensuring customer information is always protected.',
  },
];

export default function QueueManagementPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": queueFaqs.map((faq) => ({
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
        tagline="Queue Management"
        title="Enhance customer experience with efficient queues"
        description="Streamline service flow and reduce wait times with smart, digital queue management. Allow visitors to book slots, track their turn in real time, and receive instant notifications — improving satisfaction and efficiency across your facility."
        imageUrl="/uploads/svg_image/product/visitor.webp"
      />
      <Features
        tagline="Core Features"
        title="Everything you need to streamline queues, reduce wait times, and enhance customer experience."
        features={[
          {
            icon: <span className="icon-visitdesk_icons_0140" />,
            title: "Digital Check-In & Smart Ticketing",
            description: "Seamless registration through QR codes, kiosks, or mobile devices with instant ticket generation and estimated wait time.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0125" />,
            title: "Smart Queue Allocation & Prioritization",
            description: "Automatically assign visitors to the right counter or department based on service type, priority, and staff availability.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0091" />,
            title: "Real-Time Queue Monitoring",
            description: "Track queue length, waiting time, and staff performance live from one central dashboard.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0085" />,
            title: "Multi-Counter & Multi-Location Support",
            description: "Manage multiple queues, branches, or service zones simultaneously with complete visibility and control.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0045" />,
            title: "Instant Notifications & Display Screens",
            description: "Send real-time alerts via SMS, WhatsApp, or display boards when it’s a customer’s turn — reducing confusion and crowding.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0148" />,
            title: "Feedback & Service Analytics",
            description: "Collect post-service feedback instantly and access analytics to improve team efficiency and customer satisfaction.",
          },
        ]}
      />
      <ProcessSteps
        tagline="How It Works"
        title="From Check-in to Service — Streamlined in Every Step."
        steps={[
          {
            title: "Customer Check-In",
            description: "Customers scan a QR code, use a self-service kiosk, or register via mobile to join the queue. Capture name, contact, and service type. Issue digital or printed ticket instantly.",
          },
          {
            title: "Smart Queue Allocation",
            description: "The system auto-assigns customers to the right counter or department using intelligent logic. Routes based on service type and staff load. Balances queues automatically.",
          },
          {
            title: "Real-Time Updates",
            description: "Customers get live queue status and instant alerts when it’s their turn — reducing crowding and confusion. Live status on displays and dashboards.",
          },
          {
            title: "Service & Feedback",
            description: "When their turn arrives, customers are guided to the right counter and served quickly. Service marked as completed. Digital feedback form shared instantly.",
          },
        ]}
      />
      <Integrations />
      <RelatedCaseStudies />
      <TestimonialSectionServer />
      <FaqAccordion faqs={queueFaqs} />
      <CtaSection/>
      <Footer />
    </main>
  )
}
