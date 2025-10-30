"use client"

import React from "react"
interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  tagline: string;
  title: string;
  steps: Step[];
}

export default function ProcessSteps({ tagline, title, steps }: ProcessStepsProps) {
  return (
    <section className="process_steps_info">
      <div className="container">
        <div className="section_header">
          <h2 className="section_tagline">{tagline}</h2>
          <h3 className="section_title">{title}</h3>
        </div>
        <div className="row">
          {steps.map((step, index) => {
            return (
              <div key={index} className="col-md-3 col-sm-6">
                <div className="p_service_item">
                  <div className="icon icon_one"><span className="step_number">{index + 1}</span></div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
