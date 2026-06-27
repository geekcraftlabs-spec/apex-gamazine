import Link from 'next/link'
import Container from './ui/Container'

export default function Footer() {
  return (
    <footer className="bg-apex-slate border-t border-apex-brass/20">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="w-16 h-16 rounded-full border-2 border-apex-brass overflow-hidden bg-white">
                <img 
                  src="/images/Logo.jpg" 
                  alt="Apex Gamazine Co." 
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <p className="text-white/50 text-sm max-w-sm">
              Premium gamazine, glamour coat, and epoxy floor coatings — 
              transforming spaces across South Africa since 2004.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/50 hover:text-apex-brass transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-white/50 hover:text-apex-brass transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-white/50 hover:text-apex-brass transition-colors">Services</Link></li>
              <li><Link href="/calculator" className="text-white/50 hover:text-apex-brass transition-colors">Estimator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+27845958064" className="text-white/50 hover:text-apex-brass transition-colors">
                  +27 84 595 8064
                </a>
              </li>
              <li>
                <a href="mailto:info@apexgamazine.co.za" className="text-white/50 hover:text-apex-brass transition-colors">
                  info@apexgamazine.co.za
                </a>
              </li>
              <li className="text-white/50">South Africa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/30">
          <p>© {new Date().getFullYear()} Apex Gamazine Co.</p>
          <p className="mt-2 sm:mt-0">Built by Geek Craft Labs</p>
        </div>
      </Container>
    </footer>
  )
}
