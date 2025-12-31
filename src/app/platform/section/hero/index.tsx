"use client"

import React from "react"
import Image from "next/image"

interface HeroProps {
  tagline: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Hero({ tagline, title, description, imageUrl }: HeroProps) {
  return (
    <section id="sub_page_hero_banner">
      <div className="container">
        <div className="row banner-top-margin">
          <div className="col-lg-6">
            <div className="banner-text">
              <h2 className="section_tagline">{tagline}</h2>
              <h1 className="section_title">{title}</h1>
              <p>{description}</p>
              <div className="button_col">
                <a href="#" className="btn btn-primary">Book Demo</a>
                <a href="#" className="btn btn-outline-primary">Talk to Expert</a>
              </div>
              <div className="notices">
                <span><Image src="/images/icons/check-circle.svg" width={20} height={20} alt="free trial checkmark" style={{ marginRight: '8px' }}/>Free 14-day Demo</span>
                <span><Image src="/images/icons/check-circle.svg" width={20} height={20} alt="no credit card checkmark" style={{ marginRight: '8px' }}/>No credit card needed</span>
                <span><Image src="/images/icons/check-circle.svg" width={20} height={20} alt="quick setup checkmark" style={{ marginRight: '8px' }}/>Quick Setup</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Image src={imageUrl} alt={`${title} Illustration`} width={550} height={500} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
