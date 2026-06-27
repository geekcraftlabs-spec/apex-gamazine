import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CalculatorSection from '../components/CalculatorSection'
import ServicesSection from '../components/ServicesSection'
import CTASection from '../components/CTASection'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      <section className="section-padding bg-apex-limestone">
        <Container>
          <SectionHeading 
            badge="Estimate Your Project"
            title="Know Your Cost in <span class='gradient-text'>Seconds</span>"
            subtitle="Enter your space size and choose your coating — we'll calculate exactly what you need."
          />
          <CalculatorSection />
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <SectionHeading 
            badge="What We Do"
            title="Premium <span class='gradient-text'>Coating Solutions</span>"
            subtitle="From gamazine to glamour coat and epoxy floors — we have the perfect coating for your space."
          />
          <ServicesSection />
        </Container>
      </section>

      <CTASection />
    </Layout>
  )
} 
