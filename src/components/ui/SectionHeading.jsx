export default function SectionHeading({ badge, title, subtitle, className = '' }) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
      {badge && (
        <span className="text-[#B8944A] font-semibold text-sm tracking-widest uppercase">
          {badge}
        </span>
      )}
      <h2 
        className="heading-lg text-[#1E293B] mt-2"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-body mt-4 text-[#4A4A4A]">{subtitle}</p>
      )}
    </div>
  )
}