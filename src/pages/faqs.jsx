import { useState } from 'react'
import Layout from '../components/Layout'
import Container from '../components/ui/Container'
import { motion } from 'framer-motion'
import Link from 'next/link'

const faqs = [
  {
    question: 'What are gamazine and epoxy floors made of?',
    answer: 'Our gamazine coatings blend premium marble, quartz, and stone chips for vibrant, textured walls that hide cracks and last years. Our epoxy floors use high-grade resins for seamless, glossy finishes that resist wear and add stunning style.'
  },
  {
    question: 'Do you supply and apply gamazine and epoxy across South Africa?',
    answer: 'Yes, Apex Gamazine Co. supplies and applies both gamazine coatings and epoxy floors nationwide, from Cape Town to Limpopo. We ensure professional installation tailored to your space.'
  },
  {
    question: 'Can I choose custom colors for my gamazine or epoxy floors?',
    answer: 'Absolutely! We offer standard and glamour gamazine coats plus epoxy floors in any color — from Charcoal Grey to Sunset Coral — to match your vision.'
  },
  {
    question: 'How long does a gamazine or epoxy project take?',
    answer: 'Project timelines depend on size and complexity. Standard gamazine or epoxy applications typically take 3-7 days, while larger or custom projects may need 1-2 weeks.'
  },
  {
    question: 'What is your payment and satisfaction policy?',
    answer: 'We require an initial payment for resources to start your project, with full payment only due once your gamazine or epoxy floor is completed to your complete satisfaction.'
  },
  {
    question: 'How much area does one bucket cover?',
    answer: 'One bucket covers approximately 5 square meters. Our calculator tool can give you a precise estimate based on your space size.'
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
                FAQs
              </span>
              <h1 className="heading-xl text-white mt-4 mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-body text-white/70 max-w-2xl mx-auto md:mx-0">
                Everything you need to know about our premium coatings, process, and services.
              </p>
            </motion.div>
          </Container>
        </section>

        <section className="section-padding bg-[#F5F0E8]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-[#B8944A]/10"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#F5F0E8]/50 transition-colors"
                    >
                      <span className="font-semibold text-[#1E293B]">{faq.question}</span>
                      <span className={`text-[#B8944A] text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                      <p className="text-[#4A4A4A] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-body mb-4">Still have questions? We&apos;re here to help!</p>
                <Link href="/contact" className="btn-primary">Contact Us</Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </Layout>
  )
}