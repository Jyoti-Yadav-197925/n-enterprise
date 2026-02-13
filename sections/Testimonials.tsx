'use client'

import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import TestimonialCard from '@/components/ui/TestimonialCard'

const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Home Buyer, Andheri',
    content: 'N Enterprise helped me get a home loan despite my low CIBIL score. They negotiated with the bank and got it approved. Highly professional team!',
    rating: 5,
  },
  {
    name: 'Priya Patil',
    role: 'Property Seller, Vasai',
    content: 'Sold my flat in Vasai through them. Got genuine buyers and fair price. The documentation process was very smooth.',
    rating: 5,
  },
  {
    name: 'Suresh Yadav',
    role: 'Builder, Boisar',
    content: 'They took over our stalled project in Boisar and completed it within 14 months. 64 families got their dream homes. Thank you N Enterprise!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F6F3E8]">
      <Container>
        <SectionTitle
          subtitle="Client Testimonials"
          title="What Our Clients Say"
          description="Trusted by 500+ happy clients across Mumbai, Vasai, Virar, Boisar & Palghar"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
