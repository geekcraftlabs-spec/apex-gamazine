import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from './ui/Container'

export default function CTASection() {
  return (
    <section className="section-padding bg-apex-slate relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #B8944A 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-lg text-white mb-4">
            Ready to <span className="gradient-text">Transform</span> Your Space?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free quote and see how our premium coatings can transform your walls or floors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/calculator" className="btn-primary">
              Get Your Free Quote
            </Link>
            <Link href="/portfolio" className="btn-outline border-white/30 text-white hover:bg-white/10">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}