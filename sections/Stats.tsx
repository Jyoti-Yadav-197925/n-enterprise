'use client'

import Container from '@/components/common/Container'
import StatCard from '@/components/ui/StatCard'

const stats = [
  { number: '15+', label: 'Years of Excellence', suffix: 'Since 2008', icon: 'award' },
  { number: '500+', label: 'Happy Clients', suffix: 'Trusted', icon: 'users' },
  { number: '₹250Cr+', label: 'Loans Sanctioned', suffix: 'Value', icon: 'trending' },
  { number: '120+', label: 'Projects Completed', suffix: 'Success', icon: 'map' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-primary-dark text-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              icon={stat.icon as any}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
