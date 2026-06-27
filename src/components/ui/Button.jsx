export default function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const baseStyles = 'inline-block px-6 py-3 font-semibold rounded-lg transition-all duration-300 cursor-pointer text-center'
  
  const variants = {
    primary: 'bg-[#B8944A] text-white hover:bg-[#A66B4A] shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    outline: 'border-2 border-[#B8944A] text-[#B8944A] hover:bg-[#B8944A] hover:text-white',
    ghost: 'text-[#B8944A] hover:text-[#A66B4A] hover:bg-[#F5F0E8]',
  }

  const classNameString = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classNameString} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classNameString} {...props}>
      {children}
    </button>
  )
}