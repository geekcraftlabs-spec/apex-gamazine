export default function Badge({ children, className = '' }) {
  return (
    <div className={`inline-block bg-[#B8944A] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${className}`}>
      {children}
    </div>
  )
}