"use client"

import React from "react"
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ")
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props}
  />
))
Card.displayName = "Card"

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-12 md:p-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join the thousands of companies that rely on Ontra
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            to keep their work running smoothly, so everyone can safely connect, meet & work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 inline-flex items-center justify-center">
              Start Free Trial
            </a>
            <a
              href="#"
              className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary/5 bg-transparent border inline-flex items-center justify-center"
            >
              Schedule Demo
            </a>
          </div>
        </Card>
      </div>
    </section>
  )
}
