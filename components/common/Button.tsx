'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  fullWidth?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary: 'bg-primary-dark text-cream hover:bg-accent hover:text-primary-dark shadow-lg hover:shadow-xl',
    secondary: 'bg-accent text-primary-dark hover:bg-primary-dark hover:text-cream shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-cream',
    ghost: 'text-primary-dark hover:bg-primary-dark/10',
  }

  const buttonContent = (
    <>
      {children}
      <ArrowRight size={size === 'lg' ? 20 : 16} className="group-hover:translate-x-1 transition-transform" />
    </>
  )

  const buttonClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={`${buttonClasses} group`}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClasses} group`}
    >
      {buttonContent}
    </motion.button>
  )
}
