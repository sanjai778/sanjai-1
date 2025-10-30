"use client"

import React, { useState } from "react"
import Image from "next/image"

const integrationsData = [
  {
    title: 'Google',
    logo: '/uploads/svg_image/integration/Google.svg',
    description: 'Automatically sync Google Workspace users into the onfra employee directory.',
    categories: ['authentication'],
  },
  {
    title: 'Whatsapp',
    logo: '/uploads/svg_image/integration/whatsapp.svg',
    description: 'When an employee checks in using the host app, information is sent to the main user via WhatsApp notification.',
    categories: ['authentication', 'visitors'],
  },
  {
    title: 'Slack',
    logo: '/uploads/svg_image/integration/Slack.svg',
    description: 'Schedule to come into the office, book desks, and invite visitors through Onfra without leaving Slack.',
    categories: ['authentication', 'employees'],
  },
  {
    title: 'Microsoft Teams',
    logo: '/uploads/svg_image/integration/Microsoft-teams.svg',
    description: 'Automatically notify employees through a Teams message for every Onfra update.',
    categories: ['authentication', 'rooms'],
  },
  {
    title: 'Google Calendar',
    logo: '/uploads/svg_image/integration/googlecalender.svg',
    description: 'Invite visitors and book desks for employees in Onfra without leaving Google Calendar.',
    categories: ['authentication', 'rooms'],
  },
  {
    title: 'ERP Next',
    logo: '/uploads/svg_image/integration/Erpnext_logo.png',
    description: 'When a user checks in using the Onfra host app, their attendance is automatically marked in ERP Next.',
    categories: ['authentication', 'visitors'],
  },
  {
    title: 'Zoom',
    logo: '/uploads/svg_image/integration/Zoom.svg',
    description: 'Automatically send employees a private notification for every Onfra update.',
    categories: ['authentication', 'rooms'],
  },
  {
    title: 'Microsoft Outlook',
    logo: '/uploads/svg_image/integration/msoutlook.svg',
    description: 'Invite visitors in Onfra without leaving Outlook.',
    categories: ['authentication'],
  },
  {
    title: 'Google Meet',
    logo: '/uploads/svg_image/integration/Google_Meet.png',
    description: 'After scheduling a meeting in Google Calendar with a room assignment, a prompt asks if you want to share a Google Meet link with attendees.',
    categories: ['authentication', 'rooms'],
  },
];

export default function Integrations() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredIntegrations = integrationsData.filter(
    (integration) =>
      (selectedCategory === 'all' || integration.categories.includes(selectedCategory))
  );

  return (
    <section id="cool-features">
      <div className="container">
        <div className="section_header">
          <h2 className="section_tagline">INTEGRATIONS</h2>
          <h3 className="section_title">Seamlessly Connect with Your Workspace Tools</h3>
        </div>
        <div className="filterContainer">
          <ul>
            <li className="intList"><button className={`categoryBtn ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => handleCategoryClick('all')}>All Categories</button></li>
            <li className="intList"><button className={`categoryBtn ${selectedCategory === 'visitors' ? 'active' : ''}`} onClick={() => handleCategoryClick('visitors')}>Visitors</button></li>
            <li className="intList"><button className={`categoryBtn ${selectedCategory === 'desks' ? 'active' : ''}`} onClick={() => handleCategoryClick('desks')}>Desks</button></li>
            <li className="intList"><button className={`categoryBtn ${selectedCategory === 'rooms' ? 'active' : ''}`} onClick={() => handleCategoryClick('rooms')}>Rooms</button></li>
            <li className="intList"><button className={`categoryBtn ${selectedCategory === 'deliveries' ? 'active' : ''}`} onClick={() => handleCategoryClick('deliveries')}>Deliveries</button></li>
            <li className="intList"><button className={`categoryBtn ${selectedCategory === 'employees' ? 'active' : ''}`} onClick={() => handleCategoryClick('employees')}>Employees</button></li>
            <li className="intList"><button className={`categoryBtn ${selectedCategory === 'flexipass' ? 'active' : ''}`} onClick={() => handleCategoryClick('flexipass')}>Flexi pass</button></li>
          </ul>
        </div>
        <div className="integrationsContent">
          <div className="intContainer">
            {filteredIntegrations.map((integration, index) => (
              <div key={index} className="intCard">
                <Image className="intLogo" src={integration.logo} alt={integration.title} width={50} height={50} />
                <div className="title">{integration.title}</div>
                <p className="paragraph">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
