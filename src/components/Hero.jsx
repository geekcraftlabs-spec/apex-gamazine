import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from './ui/Container'
import Badge from './ui/Badge'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1E293B] pt-20 md:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #B8944A 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B]/0 via-[#1E293B]/50 to-[#1E293B]" />
      
      {/* ✅ "Since 2004" Badge - Desktop: top-24 (pushed 2 lines down) */}
      <div className="absolute top-20 md:top-24 right-4 md:right-8 lg:right-16 z-30 floating-badge">
        <div className="bg-[#B8944A] text-white px-3 py-1.5 md:px-6 md:py-3 rounded-xl shadow-xl">
          <p className="font-bold text-xs md:text-lg whitespace-nowrap">Since 2004</p>
          <p className="text-[10px] md:text-xs opacity-90 whitespace-nowrap">20+ Years Experience</p>
        </div>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // ✅ Mobile: mt-16 (4 lines down) | Desktop: md:mt-8 (2 lines down)
          className="max-w-3xl mx-auto md:mx-0 text-center md:text-left mt-16 md:mt-8"
        >
          {/* ✅ "Premium Wall Coatings" Badge - Gets pushed down with the container */}
          <Badge className="mb-4">Premium Wall Coatings</Badge>
          <h1 className="heading-xl text-white mb-6">
            Textures That <span className="gradient-text">Transform</span>
          </h1>
          <p className="text-body text-white/70 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
            Premium gamazine, glamour coat, and epoxy floor coatings — 
            transforming homes and businesses across South Africa since 2004.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/calculator" className="btn-primary">
              Estimate Your Cost
            </Link>
            <Link href="/portfolio" className="btn-outline border-white/30 text-white hover:bg-white/10">
              View Our Work
            </Link>
          </div>

          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10 justify-center md:justify-start">
            <div>
              <p className="text-white font-bold text-2xl">20+</p>
              <p className="text-white/50 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">10+</p>
              <p className="text-white/50 text-sm">Years No Maintenance</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">Nationwide</p>
              <p className="text-white/50 text-sm">Across South Africa</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}