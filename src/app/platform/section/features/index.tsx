"use client"

import React from "react"
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Feature {
  icon: ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

interface FeaturesProps {
  tagline: string;
  title: string;
  features: Feature[];
}

export default function Features({ tagline, title, features }: FeaturesProps) {
  return (
    <section id="overview_section" className="prototype_service_info">
      <div className="container">
        <div className="section_header">
          <h2 className="section_tagline">{tagline}</h2>
          <h3 className="section_title">{title}</h3>
        </div>
        <div className="row p_service_info">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="col-md-4 col-sm-6">
                <div className="p_service_item">
                  <div className="icon icon_one"><Icon className="features_icon" /></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
