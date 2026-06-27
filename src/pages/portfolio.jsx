import Layout from '../components/Layout'
import GallerySection from '../components/GallerySection'
import Container from '../components/ui/Container'
import { motion } from 'framer-motion'

export default function Portfolio() {
  return (
    <Layout>
      <div className="pt-24">
        {/* Hero with spacing: py-8 md:py-16 */}
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
                Our Portfolio
              </span>
              <h1 className="heading-xl text-white mt-4 mb-6">
                <span className="gradient-text">Dreams Realised</span> in Every Space
              </h1>
              <p className="text-body text-white/70 max-w-2xl mx-auto md:mx-0">
                Explore our portfolio of stunning gamazine and glamour coat transformations across South Africa.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-[#F5F0E8]">
          <Container>
            <GallerySection />
          </Container>
        </section>
      </div>
    </Layout>
  )
}