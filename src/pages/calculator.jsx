import Layout from '../components/Layout'
import CalculatorSection from '../components/CalculatorSection'
import Container from '../components/ui/Container'
import { motion } from 'framer-motion'

export default function Calculator() {
  return (
    <Layout>
      <div className="pt-24">
        <section className="relative min-h-[30vh] flex items-center overflow-hidden bg-[#1E293B] py-8 md:py-16">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, #B8944A 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <span className="text-[#B8944A] font-semibold text-sm tracking-widest uppercase border-l-4 border-[#B8944A] pl-4">
                Cost Estimator
              </span>
              <h1 className="heading-xl text-white mt-4 mb-6">
                Know Your <span className="gradient-text">Project Cost</span>
              </h1>
              <p className="text-body text-white/70 max-w-2xl mx-auto md:mx-0">
                Enter your space size below and get an instant estimate for gamazine or glamour coat — 
                with labor included. No hidden fees, no surprises.
              </p>
            </motion.div>
          </Container>
        </section>

        <section className="section-padding bg-[#F5F0E8]">
          <Container>
            <CalculatorSection />
          </Container>
        </section>
      </div>
    </Layout>
  )
}