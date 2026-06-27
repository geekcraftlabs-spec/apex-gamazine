import Layout from '../components/Layout'
import Container from '../components/ui/Container'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <div className="pt-24">
        <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-[#1E293B] py-8 md:py-16">
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
                About Us
              </span>
              <h1 className="heading-xl text-white mt-4 mb-6">
                Crafting <span className="gradient-text">Exceptional Spaces</span> Since 2004
              </h1>
              <p className="text-body text-white/70 max-w-2xl mx-auto md:mx-0">
                Apex Gamazine Co. specializes in premium gamazine, glamour coat, and epoxy floor coatings — 
                transforming homes and businesses across South Africa with textures that last.
              </p>
            </motion.div>
          </Container>
        </section>

        <section className="section-padding bg-[#F5F0E8]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-lg text-[#1E293B] mb-4">Our Mission</h2>
                <p className="text-body mb-8">
                  At Apex Gamazine Co., our mission is to transform every space with premium coatings 
                  that blend durability, beauty, and personal style. We turn houses into homes and 
                  businesses into showpieces with textures that inspire.
                </p>

                <h2 className="heading-lg text-[#1E293B] mb-4">Our Story</h2>
                <p className="text-body mb-8">
                  Since 2004, Apex Gamazine Co. has been redefining spaces across South Africa with 
                  one bold belief: surfaces should captivate, not just stand. From our small workshop 
                  roots, we&apos;ve grown into a trusted name, coating walls with gamazine—standard and 
                  glamour in every hue—and floors with seamless, durable epoxy that shine for years.
                </p>

                <h2 className="heading-lg text-[#1E293B] mb-4">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card p-6">
                    <h3 className="heading-md text-[#1E293B] mb-2">Quality</h3>
                    <p className="text-body text-sm">Uncompromising craftsmanship in every project.</p>
                  </div>
                  <div className="card p-6">
                    <h3 className="heading-md text-[#1E293B] mb-2">Innovation</h3>
                    <p className="text-body text-sm">Bold colors and trend-setting finishes.</p>
                  </div>
                  <div className="card p-6">
                    <h3 className="heading-md text-[#1E293B] mb-2">Trust</h3>
                    <p className="text-body text-sm">Honest quotes and reliable service.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </div>
    </Layout>
  )
}