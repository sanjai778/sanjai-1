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

const roomsFaqs = [
  {
    Question: 'What is Onfra’s Rooms Booking feature?',
    Answer: 'It’s a smart room scheduling system that lets teams view real-time room availability, book spaces, manage meeting schedules, and avoid conflicts — all from one dashboard.',
  },
  {
    Question: 'Can I invite people outside my company?',
    Answer: 'Yes — internal and external participants can be invited via email, SMS, or push notifications.',
  },
  {
    Question: 'How does it prevent double bookings?',
    Answer: 'The system shows real-time occupancy and blocks conflicts automatically so no two meetings overlap.',
  },
  {
    Question: 'Can I edit or cancel a meeting?',
    Answer: 'Definitely — Onfra lets you update or remove meetings with simple controls.',
  },
  {
    Question: 'Are reminders sent to attendees?',
    Answer: 'Yes — automated reminders ensure participants are notified before meetings begin.',
  },
  {
    Question: 'Is this good for hybrid teams?',
    Answer: 'Absolutely — real-time availability and cloud access make it ideal for both in-office and remote scheduling.',
  },
];

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero
        tagline="Meeting Rooms & Space Booking"
        title="Optimize Meetings, Eliminate Double-Bookings, Boost Team Productivity"
        description="Simplify how your team finds, reserves, and manages meeting spaces — with real-time availability, conflict-free scheduling, and automated notifications — all in one intuitive platform."
        imageUrl="/uploads/svg_image/product/visitor.webp"
      />
      <Features
        tagline="Core Features"
        title="Efficient Room Management for Modern Workplaces"
        features={[
          {
            icon: <span className="icon-visitdesk_icons_0140" />,
            title: "Real-Time Room Availability",
            description: "See which meeting rooms are free or booked instantly so teams make confident decisions and avoid overlap.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0125" />,
            title: "Simple Booking & Scheduling",
            description: "Create, update, reschedule, or cancel meetings with just a few clicks — whether it’s a planned session or a quick huddle.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0091" />,
            title: "Meeting Creation & Management",
            description: "Add new rooms, edit details, and manage existing spaces — keeping your workspace inventory current.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0085" />,
            title: "Invite Internal & External Participants",
            description: "Send meeting invites via email, SMS, or push notifications so everyone stays informed.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0045" />,
            title: "Automated Reminders",
            description: "Avoid late starts and no-shows — Onfra sends reminders to attendees before meetings begin.",
          },
          {
            icon: <span className="icon-visitdesk_icons_0148" />,
            title: "Conflict Prevention & Insight",
            description: "Smart scheduling prevents double bookings and provides usage insights for smarter space decisions.",
          },
        ]}
      />
      <ProcessSteps
        tagline="How It Works"
        title="Meeting Rooms — Simple 3-Step Flow"
        steps={[
          {
            title: "Check Availability",
            description: "See open meeting rooms and available time slots across all spaces instantly.",
          },
          {
            title: "Book & Confirm",
            description: "Reserve the room you need with a few clicks and send invites to attendees.",
          },
          {
            title: "Receive Updates",
            description: "Get real-time notifications, reminders, and meeting updates — keeping schedules on track.",
          },
        ]}
      />
      <Integrations activeCategory="rooms" />
      <RelatedCaseStudies />
      <TestimonialSectionServer />
      <FaqAccordion faqs={roomsFaqs} />
      <CtaSection/>
      <Footer />
    </main>
  )
}
