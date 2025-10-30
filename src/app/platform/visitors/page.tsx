"use client"

import React from "react"
import "./visitors.css"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Hero from "@/app/platform/section/hero"
import Features from "@/app/platform/section/features"
import ProcessSteps from "@/app/platform/section/process-steps"
import Integrations from "@/app/platform/section/integrations"
import FaqAccordion from "@/app/components/FaqAccordion"
import {
  UsersIcon,
  BellIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  CheckBadgeIcon,
  BellAlertIcon,
  CameraIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import CtaSection from "@/app/components/sections/CtaSection"
import TestimonialSection from "@/app/components/sections/TestimonialSection"

export default function VisitorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero
        tagline="Visitor Management"
        title="Simplify visitor check-ins"
        description="Manage visitor check-ins and track data securely. Modernize front-desk operations with contactless check-ins, automated visitor logs, and real-time monitoring — all in one platform."
        imageUrl="/uploads/svg_image/product/visitor.webp"
      />
      <Features
        tagline="Features"
        title="Features of Material Gate Pass Management System"
        features={[
          {
            icon: WrenchScrewdriverIcon,
            title: "Add/Remove Fields",
            description: "The requirements for various gate passes vary. As a result, the data to be entered in the pass varies. Custom fields can be simply added or removed from our material gate pass management system to gather diverse data for your business's specific needs.",
          },
          {
            icon: CheckBadgeIcon,
            title: "Approver Workflow",
            description: "You have complete control over the workflow. Once a gate pass request is submitted, it must be approved by many layers of authority. For particular policy needs, our gate pass management system may simply be designed to add/remove anybody at several levels for simultaneous or sequential approvals.",
          },
          {
            icon: BellAlertIcon,
            title: "Alerts & Reminders",
            description: "To automate a gate pass procedure, you'll need alerts and notifications. Initiators, approvers, suppliers, security, or the recipient can all get mobile and email notifications and reminders.If a returnable item isn't returned on time, you can quickly escalate the situation.",
          },
          {
            icon: CameraIcon,
            title: "Capture Material Details",
            description: "Take as many pictures as you like. Track the substance at any point throughout its journey. Keep track of material quantities, a photograph of the material, the vendor's photo ID, serial numbers, and other details as needed. QR codes aid in the identification of the material.",
          },
          {
            icon: MagnifyingGlassIcon,
            title: "Identify Each Material",
            description: "Each material at each stage of the gate pass process can be easily identifiable by all parties involved in a digital material gate pass management programme. Before digitally approving a content, approvers can view it. They can be identified by barcode or QR code readers by dispatch personnel/receivers.",
          },
          {
            icon: ChartBarIcon,
            title: "Reports & Analytics",
            description: "Throughout the process, every material gate pass data is turned into different MIS reports and analytics. They can assist you in making well-informed judgments.You can quickly see how many materials are out for intra-company transfer, how many are due back by a specific date, and so on.",
          },
        ]}
      />
      <ProcessSteps
        tagline="PROCESS"
        title="From Check-In to Checkout. Streamlined Every Step."
        steps={[
          {
            title: "Visitor Arrives",
            description: "Visitors check in at the kiosk or via mobile app",
          },
          {
            title: "Instantaneous Notifications",
            description: "Hosts receive real-time notifications of visitor arrivals",
          },
          {
            title: "Host Notified",
            description: "Hosts can approve or manage visitor access instantly",
          },
          {
            title: "Message Received",
            description: "Visitors receive confirmation and directions",
          },
        ]}
      />
      <Integrations />
      <TestimonialSection />
      <FaqAccordion limit={4} />
      <CtaSection/>
      <Footer />
    </main>
  )
}
