import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CalculatorSection() {
  const [sqm, setSqm] = useState(50)
  const [coatingType, setCoatingType] = useState('gamazine')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const COVERAGE_PER_BUCKET = 5
  const LABOR_RATE = 150
  const GAMAZINE_RATE = 230
  const GLAMOUR_RATE = 330

  const bucketsNeeded = Math.ceil(sqm / COVERAGE_PER_BUCKET)
  const materialRate = coatingType === 'gamazine' ? GAMAZINE_RATE : GLAMOUR_RATE
  const materialCost = bucketsNeeded * materialRate
  const laborCost = bucketsNeeded * LABOR_RATE
  const totalCost = materialCost + laborCost

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('email', email)
    formData.append('sqm', sqm)
    formData.append('coating', coatingType)
    formData.append('buckets', bucketsNeeded)
    formData.append('total', totalCost)

    try {
      const response = await fetch('https://formspree.io/f/xdargjlj', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })
      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-[#B8944A]/20">
      <div className="p-6 md:p-8 lg:p-10">
        <div className="mb-8">
          <label className="block text-sm font-medium text-[#1E293B] mb-2">
            Floor Area (m²)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="10"
              max="500"
              step="5"
              value={sqm}
              onChange={(e) => setSqm(Number(e.target.value))}
              className="flex-1 h-2 bg-[#F5F0E8] rounded-lg appearance-none cursor-pointer accent-[#B8944A]"
            />
            <input
              type="number"
              value={sqm}
              onChange={(e) => setSqm(Math.max(10, Number(e.target.value) || 0))}
              className="w-24 px-3 py-2 border border-[#E8E0D8] rounded-lg text-center font-body text-lg font-semibold text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#B8944A]"
            />
          </div>
          <div className="flex justify-between text-xs text-[#4A4A4A] mt-1">
            <span>10 m²</span>
            <span>500 m²</span>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-[#1E293B] mb-2">
            Select Coating Type
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setCoatingType('gamazine')}
              className={`px-6 py-3 rounded-lg font-body font-medium transition-all duration-200 ${
                coatingType === 'gamazine'
                  ? 'bg-[#B8944A] text-white shadow-md'
                  : 'bg-[#F5F0E8] text-[#1E293B] hover:bg-[#E8E0D8]'
              }`}
            >
              <span className="block font-display text-xl">Gamazine</span>
              <span className="text-sm opacity-75">R230 / bucket</span>
            </button>
            <button
              onClick={() => setCoatingType('glamour')}
              className={`px-6 py-3 rounded-lg font-body font-medium transition-all duration-200 ${
                coatingType === 'glamour'
                  ? 'bg-[#B8944A] text-white shadow-md'
                  : 'bg-[#F5F0E8] text-[#1E293B] hover:bg-[#E8E0D8]'
              }`}
            >
              <span className="block font-display text-xl">Glamour Coat</span>
              <span className="text-sm opacity-75">R330 / bucket</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${sqm}-${coatingType}`}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F5F0E8] rounded-xl p-6 md:p-8 mb-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-[#4A4A4A]">Buckets</p>
                <p className="font-display text-2xl md:text-3xl text-[#1E293B] font-bold">
                  {bucketsNeeded}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-[#4A4A4A]">Labor</p>
                <p className="font-display text-2xl md:text-3xl text-[#1E293B] font-bold">
                  {formatCurrency(laborCost)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-[#4A4A4A]">Materials</p>
                <p className="font-display text-2xl md:text-3xl text-[#1E293B] font-bold">
                  {formatCurrency(materialCost)}
                </p>
              </div>
              <div className="text-center border-l-2 border-[#B8944A]/30 pl-4">
                <p className="text-sm text-[#4A4A4A]">Total</p>
                <p className="font-display text-2xl md:text-3xl text-[#B8944A] font-bold">
                  {formatCurrency(totalCost)}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for a 5% discount"
            required
            className="flex-1 px-4 py-3 border border-[#E8E0D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8944A] font-body"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#B8944A] text-white font-body font-semibold rounded-lg hover:bg-[#A66B4A] transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Get My Quote
          </button>
        </form>
        {isSubmitted && (
          <p className="text-green-600 text-sm mt-3 text-center font-body">
            ✅ Quote sent! Check your email.
          </p>
        )}
      </div>

      <div className="px-6 md:px-8 lg:px-10 pb-6">
        <p className="text-xs text-[#4A4A4A] opacity-70 text-center">
          * Estimates based on 5m² per bucket. Labor included at R150 per bucket.
        </p>
      </div>
    </div>
  )
}