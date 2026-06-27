import Link from 'next/link'

const services = [
  {
    title: 'Gamazine',
    description: 'Standard gamazine coating in any color. Durable, textured, and built to last over a decade with no maintenance required.',
    price: 'R230 / bucket',
    features: ['Covers 5m² per bucket', 'Hides cracks and imperfections', 'Available in any color', 'No maintenance needed']
  },
  {
    title: 'Glamour Coat',
    description: 'Premium glamour coat finish with a stunning shimmer effect. Perfect for high-end residential and commercial spaces.',
    price: 'R330 / bucket',
    features: ['Covers 5m² per bucket', 'Luxurious shimmer finish', 'Available in any color', 'Premium durability']
  },
  {
    title: 'Epoxy Floors',
    description: 'Seamless, glossy epoxy flooring that resists wear and adds stunning style to any space.',
    price: 'Custom Quote',
    features: ['Seamless finish', 'High durability', 'Resists wear and tear', 'Available in any color']
  }
]

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="card p-8">
          <h2 className="heading-md text-[#1E293B] mb-2">{service.title}</h2>
          <p className="text-[#B8944A] font-semibold text-lg mb-4">{service.price}</p>
          <p className="text-body text-sm mb-6">{service.description}</p>
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, i) => (
              <li key={i} className="text-sm text-[#4A4A4A] flex items-center gap-2">
                <span className="text-[#B8944A]">✓</span> {feature}
              </li>
            ))}
          </ul>
          <Link href="/calculator" className="btn-primary text-center w-full block">
            Estimate Cost
          </Link>
        </div>
      ))}
    </div>
  )
}