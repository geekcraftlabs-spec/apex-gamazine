import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Container from './ui/Container'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/calculator', label: 'Estimator' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  
  // Check if we're on the home page
  const isHome = router.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Determine header background
  const getHeaderBg = () => {
    if (isHome) {
      return scrolled ? 'bg-[#FDF9F2]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }
    // On other pages, always show the solid header with cream background
    return 'bg-[#FDF9F2] shadow-sm'
  }

  // Determine text color
  const getTextColor = () => {
    if (isHome) {
      return scrolled ? 'text-[#1E293B]' : 'text-white'
    }
    // On other pages, always dark text
    return 'text-[#1E293B]'
  }

  const getNavTextColor = (isActive) => {
    if (isHome) {
      if (isActive) return 'text-[#B8944A]'
      return scrolled ? 'text-[#1E293B]' : 'text-white/90'
    }
    // On other pages, always dark text
    if (isActive) return 'text-[#B8944A]'
    return 'text-[#1E293B]'
  }

  const getHamburgerColor = () => {
    if (isHome) {
      return scrolled ? 'bg-[#1E293B]' : 'bg-white'
    }
    return 'bg-[#1E293B]'
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderBg()}`}>
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-[#B8944A] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
<img 
  src="/images/Logo.jpg" 
  alt="Apex Gamazine Co." 
  className="w-full h-full object-cover"
/>
            </div>
            <span className={`font-display text-base md:text-xl lg:text-2xl font-bold tracking-wide transition-colors ${getTextColor()}`}>
              Apex Gamazine
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#B8944A] ${getNavTextColor(router.pathname === link.href)}`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/calculator" 
              className="bg-[#B8944A] text-white px-8 py-2.5 rounded-full font-semibold text-sm hover:bg-[#A66B4A] transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Estimate Cost
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-0.5 transition-all duration-300 ${getHamburgerColor()} ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-7 h-0.5 transition-all duration-300 ${getHamburgerColor()} ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 transition-all duration-300 ${getHamburgerColor()} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-[#FDF9F2] rounded-2xl shadow-xl mt-2"
        >
          <nav className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors hover:text-[#B8944A] ${router.pathname === link.href ? 'text-[#B8944A]' : 'text-[#1E293B]'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/calculator" 
              onClick={() => setIsOpen(false)} 
              className="bg-[#B8944A] text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 mt-2"
            >
              Estimate Cost
            </Link>
          </nav>
        </motion.div>
      </Container>
    </header>
  )
}