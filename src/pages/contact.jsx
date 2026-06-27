import { useState } from 'react'
import Layout from '../components/Layout'
import Container from '../components/ui/Container'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData()
    Object.keys(formData).forEach(key => form.append(key, formData[key]))
    
    try {
      const response = await fetch('https://formspree.io/f/xdargjlj', {
        method: 'POST',
        body: form,
        headers: { 'Accept': 'application/json' },
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const contactMethods = [
    { icon: '/images/whatsapp.png', title: 'WhatsApp', value: '+27 84 595 8064', href: 'https://wa.me/27845958064' },
    { icon: '/images/email.png', title: 'Email', value: 'info@apexgamazine.co.za', href: 'mailto:info@apexgamazine.co.za' },
    { icon: '/images/phone.png', title: 'Phone', value: '+27 84 595 8064', href: 'tel:+27845958064' },
    { icon: '/images/instagram.png', title: 'Instagram', value: '@apexgamazine', href: 'https://instagram.com' },
    { icon: '/images/facebook.png', title: 'Facebook', value: 'Apex Gamazine Co.', href: 'https://facebook.com' },
  ]

  return (
    <Layout>
      <div className="pt-24">
        {/* Hero */}
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
                Contact Us
              </span>
              <h1 className="heading-xl text-white mt-4 mb-6">
                Let&apos;s <span className="gradient-text">Transform</span> Your Space
              </h1>
              <p className="text-body text-white/70 max-w-2xl mx-auto md:mx-0">
                Ready to give your walls or floors the texture they deserve? Get in touch with us today.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-[#F5F0E8]">
          <Container>
            {/* Contact Methods */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.title === 'WhatsApp' || method.title === 'Instagram' || method.title === 'Facebook' ? '_blank' : undefined}
                  rel={method.title === 'WhatsApp' || method.title === 'Instagram' || method.title === 'Facebook' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-[#B8944A]/10 hover:shadow-md hover:border-[#B8944A]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={method.icon} 
                    alt={method.title} 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-semibold text-[#1E293B]">{method.title}</span>
                  <span className="text-xs text-[#4A4A4A] text-center mt-1">{method.value}</span>
                </motion.a>
              ))}
            </div>

            {/* Form + Map */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-[#B8944A]/10 p-6 md:p-8"
              >
                <h2 className="heading-md text-[#1E293B] mb-4">Send a Message</h2>
                {submitted ? (
                  <p className="text-green-600 text-center py-8">✅ Message sent! We&apos;ll get back to you soon.</p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-[#E8E0D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8944A]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-[#E8E0D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8944A]"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-[#E8E0D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8944A]"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-[#E8E0D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8944A]"
                    />
                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-[#B8944A]/10 overflow-hidden"
              >
                <div className="p-6 pb-2 text-center">
                  <h2 className="heading-md text-[#1E293B]">Find Us</h2>
                  <p className="text-[#4A4A4A] text-sm">31 Cowley Rd, Kleve Hill Park, Sandton</p>
                </div>
                <div className="h-[300px] md:h-[400px] w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14339.356678753345!2d28.03581453518144!3d-26.0388178138456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573ef4db4a797%3A0x7166420db986e99a!2s31%20Cowley%20Rd%2C%20Kleve%20Hill%20Park%2C%20Sandton%2C%202191!5e0!3m2!1sen!2sza!4v1780616432383!5m2!1sen!2sza" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    className="hover:grayscale-0 transition-all duration-500"
                    title="Apex Gamazine Office - 31 Cowley Rd, Sandton"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </div>
    </Layout>
  )
}