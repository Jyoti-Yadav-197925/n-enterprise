// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { 
//   Menu, X, ChevronRight, Phone, Home, Briefcase, Car, 
//   Building2, Landmark, Shield, Hammer, Store, Factory, 
//   Calculator, Percent, FileText, Scale, TrendingUp,
//   Users, Award, CheckCircle, Clock, IndianRupee, ChevronDown
// } from 'lucide-react'
// import Link from 'next/link'
// import Button from '@/components/common/Button'

// const navItems = [
//   { 
//     name: 'Home', 
//     href: '/' 
//   },
//   { 
//     name: 'Loans', 
//     href: '#loans',
//     dropdown: [
//       { 
//         title: '🏦 Loan Products', 
//         items: [
//           { 
//             icon: Home, 
//             name: 'Home Loan', 
//             href: '#loans', 
//             description: 'Purchase, construction, renovation',
//           },
//           { 
//             icon: Building2, 
//             name: 'Mortgage Loan', 
//             href: '#loans', 
//             description: 'Against existing property',
//           },
//           { 
//             icon: Landmark, 
//             name: 'Loan Against Property', 
//             href: '#loans', 
//             description: 'Unlock property value',
//           },
//           { 
//             icon: Briefcase, 
//             name: 'Personal Loan', 
//             href: '#loans', 
//             description: 'Unsecured instant loans',
//           },
//           { 
//             icon: Car, 
//             name: 'Vehicle Loan', 
//             href: '#loans', 
//             description: 'Car, bike, commercial',
//           },
//         ]
//       },
//       {
//         title: '📋 Document Checklist',
//         items: [
//           { 
//             name: 'Salaried Person', 
//             href: '#salaried-docs',
//             icon: Users,
//           },
//           { 
//             name: 'Self Employed', 
//             href: '#business-docs',
//             icon: Briefcase,
//           },
//           { 
//             name: 'Business Owner', 
//             href: '#business-docs',
//             icon: Building2,
//           },
//           { 
//             name: 'Property Documents', 
//             href: '#property-docs',
//             icon: Landmark,
//           },
//         ]
//       },
//       {
//         title: '🎯 Eligibility Criteria',
//         items: [
//           { 
//             name: 'CIBIL Score Guide', 
//             href: '#cibil-guide',
//             icon: TrendingUp
//           },
//           { 
//             name: 'Income Criteria', 
//             href: '#income-criteria',
//             icon: IndianRupee
//           },
//           { 
//             name: 'Age Criteria', 
//             href: '#age-criteria',
//             icon: Clock
//           },
//           { 
//             name: 'Check Eligibility', 
//             href: '#tools',
//             icon: Scale
//           },
//         ]
//       }
//     ]
//   },
//   { 
//     name: 'Property', 
//     href: '#property',
//     dropdown: [
//       {
//         title: '🏠 Buy Property',
//         items: [
//           { 
//             name: 'Residential Flats', 
//             href: '#property-buy',
//             icon: Home
//           },
//           { 
//             name: 'Commercial Shops', 
//             href: '#property-buy',
//             icon: Store
//           },
//           { 
//             name: 'Land & Plots', 
//             href: '#property-buy',
//             icon: Factory
//           },
//         ]
//       },
//       {
//         title: '💰 Sell Property',
//         items: [
//           { 
//             name: 'Free Valuation', 
//             href: '#tools',
//             icon: Scale
//           },
//           { 
//             name: 'List Your Property', 
//             href: '#contact',
//             icon: Users
//           },
//           { 
//             name: 'Legal Assistance', 
//             href: '#contact',
//             icon: Shield
//           },
//         ]
//       },
//       {
//         title: '🔑 Rent/Lease',
//         items: [
//           { 
//             name: 'Flats on Rent', 
//             href: '#property-rent',
//             icon: Home
//           },
//           { 
//             name: 'Shops on Lease', 
//             href: '#property-rent',
//             icon: Store
//           },
//           { 
//             name: 'Godowns/Warehouse', 
//             href: '#property-rent',
//             icon: Factory
//           },
//         ]
//       }
//     ]
//   },
//   { 
//     name: 'Construction', 
//     href: '#construction',
//     dropdown: [
//       {
//         title: '🏗️ Services',
//         items: [
//           { 
//             name: 'Redevelopment', 
//             href: '#construction',
//             icon: Building2
//           },
//           { 
//             name: 'Stalled Projects', 
//             href: '#construction',
//             icon: Hammer
//           },
//           { 
//             name: 'New Construction', 
//             href: '#construction',
//             icon: Home
//           },
//           { 
//             name: 'Renovation', 
//             href: '#construction',
//             icon: Hammer
//           },
//         ]
//       },
//       {
//         title: '✅ Completed Projects',
//         items: [
//           { 
//             name: 'Lotus Tower - Boisar', 
//             href: '#construction',
//             icon: Award
//           },
//           { 
//             name: 'Sai Residency - Vasai', 
//             href: '#construction',
//             icon: Building2
//           },
//           { 
//             name: 'Green Valley - Palghar', 
//             href: '#construction',
//             icon: Home
//           },
//         ]
//       }
//     ]
//   },
//   { 
//     name: 'Tools', 
//     href: '#tools',
//     dropdown: [
//       {
//         title: '🧮 Calculators',
//         items: [
//           { 
//             icon: Calculator, 
//             name: 'EMI Calculator', 
//             href: '#emi-calculator',
//           },
//           { 
//             icon: Percent, 
//             name: 'Interest Rate Compare', 
//             href: '#rate-compare',
//           },
//           { 
//             icon: Scale, 
//             name: 'Loan Eligibility', 
//             href: '#loan-eligibility',
//           },
//         ]
//       },
//       {
//         title: '📋 Checkers',
//         items: [
//           { 
//             icon: FileText, 
//             name: 'Document Checklist', 
//             href: '#document-checklist',
//           },
//           { 
//             icon: TrendingUp, 
//             name: 'CIBIL Score Guide', 
//             href: '#cibil-guide',
//           },
//           { 
//             icon: Shield, 
//             name: 'Property Valuation', 
//             href: '#property-valuation',
//           },
//         ]
//       }
//     ]
//   },
//   { 
//     name: 'Contact', 
//     href: '#contact' 
//   },
// ]

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
//   const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
//   const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault()
//     setIsOpen(false)
//     setActiveDropdown(null)
//     setMobileExpanded(null)
//     setMobileSubExpanded(null)
    
//     if (href === '/') {
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//     } else {
//       const element = document.querySelector(href)
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' })
//       }
//     }
//   }

//   const toggleMobileExpand = (itemName: string) => {
//     if (mobileExpanded === itemName) {
//       setMobileExpanded(null)
//       setMobileSubExpanded(null)
//     } else {
//       setMobileExpanded(itemName)
//       setMobileSubExpanded(null)
//     }
//   }

//   const toggleMobileSubExpand = (subTitle: string) => {
//     if (mobileSubExpanded === subTitle) {
//       setMobileSubExpanded(null)
//     } else {
//       setMobileSubExpanded(subTitle)
//     }
//   }

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-[#F6F3E8]/95 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-3'
//       }`}
//     >
//       <div className="container-custom">
//         <div className="flex items-center justify-between">
//           {/* ORIGINAL N LOGO */}
//           <Link href="/" className="relative group shrink-0" onClick={(e) => handleSmoothScroll(e, '/')}>
//             <div className="flex items-center gap-2">
//               <div className="relative">
//                 <div className="w-10 h-10 bg-[#2F4F3E] rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
//                   <span className="text-xl font-bold text-[#C9A44C] group-hover:scale-110 transition-transform">N</span>
//                 </div>
//                 <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A44C] to-[#8FAF95] rounded-lg opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
//                 <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#C9A44C] rounded-full animate-pulse" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-sm font-bold text-[#2F4F3E] leading-tight">N ENTERPRISE</span>
//                 <span className="text-[8px] tracking-wider text-[#4F6F52]/70 uppercase">Since 2008</span>
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Navigation - FIXED CLICKABLE DROPDOWNS */}
//           <div className="hidden lg:flex items-center justify-center flex-1 px-4">
//             <div className="flex items-center gap-0.5 bg-white/20 backdrop-blur-sm rounded-xl px-1 py-0.5">
//               {navItems.map((item) => (
//                 <div
//                   key={item.name}
//                   className="relative"
//                   onMouseEnter={() => setActiveDropdown(item.name)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   {item.dropdown ? (
//                     <>
//                       <button 
//                         className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1 transition-all duration-200 ${
//                           activeDropdown === item.name 
//                             ? 'text-[#C9A44C] bg-[#8FAF95]/20' 
//                             : 'text-[#2F4F3E] hover:text-[#C9A44C] hover:bg-[#8FAF95]/10'
//                         }`}
//                       >
//                         {item.name}
//                         <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
//                       </button>
                      
//                       {/* DROPDOWN - FIXED CLICKABLE */}
//                       {activeDropdown === item.name && (
//                         <div 
//                           className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <div className="grid grid-cols-3 gap-4 p-4">
//                             {item.dropdown.map((section, idx) => (
//                               <div key={idx}>
//                                 {section.href ? (
//                                   <Link
//                                     href={section.href}
//                                     onClick={(e) => handleSmoothScroll(e, section.href)}
//                                     className="inline-flex items-center gap-1 font-semibold text-[#2F4F3E] mb-2 text-xs hover:text-[#C9A44C] transition-colors cursor-pointer"
//                                   >
//                                     {section.title}
//                                     <ChevronRight size={10} />
//                                   </Link>
//                                 ) : (
//                                   <h3 className="font-semibold text-[#2F4F3E] mb-2 text-xs border-b border-[#8FAF95]/20 pb-1">
//                                     {section.title}
//                                   </h3>
//                                 )}
//                                 <ul className="space-y-1">
//                                   {section.items.map((subItem, subIdx) => (
//                                     <li key={subIdx}>
//                                       <Link
//                                         href={subItem.href}
//                                         onClick={(e) => handleSmoothScroll(e, subItem.href)}
//                                         className="block text-xs text-gray-600 hover:text-[#C9A44C] transition-colors p-1.5 rounded-md hover:bg-[#F6F3E8]/50 cursor-pointer"
//                                       >
//                                         <div className="flex items-start gap-2">
//                                           {'icon' in subItem && subItem.icon && (
//                                             <subItem.icon size={12} className="text-[#C9A44C] mt-0.5" />
//                                           )}
//                                           <div>
//                                             <span className="font-medium text-[#2F4F3E] text-xs">
//                                               {subItem.name}
//                                             </span>
//                                             {'description' in subItem && subItem.description && (
//                                               <p className="text-[10px] text-gray-500 mt-0.5">{subItem.description}</p>
//                                             )}
//                                           </div>
//                                         </div>
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             ))}
//                           </div>
                          
//                           {item.name === 'Loans' && (
//                             <div className="bg-gradient-to-r from-[#2F4F3E] to-[#4F6F52] px-4 py-2">
//                               <div className="flex items-center justify-between text-white text-[10px]">
//                                 <span className="flex items-center gap-1">
//                                   <CheckCircle size={10} />
//                                   Lowest Rates
//                                 </span>
//                                 <span className="flex items-center gap-1">
//                                   <Clock size={10} />
//                                   24hr Approval
//                                 </span>
//                                 <span className="flex items-center gap-1">
//                                   <Users size={10} />
//                                   250+ Clients
//                                 </span>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       onClick={(e) => handleSmoothScroll(e, item.href)}
//                       className="px-3 py-1.5 text-xs font-medium rounded-lg text-[#2F4F3E] hover:text-[#C9A44C] hover:bg-[#8FAF95]/10 inline-block transition-all duration-200 cursor-pointer"
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact Button */}
//           <div className="hidden lg:flex items-center gap-2 shrink-0">
//             <motion.a
//               href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="flex items-center gap-1 text-[#2F4F3E] hover:text-[#C9A44C] transition-colors relative cursor-pointer"
//             >
//               <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
//               <Phone size={14} />
//               <span className="text-xs font-semibold">24/7</span>
//             </motion.a>
//             <Button href="#contact" variant="primary" size="sm" className="text-xs px-4 py-1.5 cursor-pointer">
//               Free Consultation
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden relative z-50 w-8 h-8 flex items-center justify-center cursor-pointer"
//             aria-label="Toggle menu"
//           >
//             <motion.div
//               animate={{ rotate: isOpen ? 90 : 0 }}
//               transition={{ duration: 0.2 }}
//             >
//               {isOpen ? <X size={20} className="text-[#2F4F3E]" /> : <Menu size={20} className="text-[#2F4F3E]" />}
//             </motion.div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu - IMPROVED NESTED DROPDOWNS */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-[#F6F3E8] overflow-y-auto z-40"
//           >
//             <div className="container-custom py-4">
//               <div className="flex flex-col gap-1">
//                 {navItems.map((item) => (
//                   <div key={item.name} className="border-b border-[#8FAF95]/20 last:border-0">
//                     {item.dropdown ? (
//                       <div className="py-2">
//                         <button
//                           onClick={() => toggleMobileExpand(item.name)}
//                           className="w-full flex items-center justify-between text-[#2F4F3E] font-medium py-2 text-base"
//                         >
//                           <span>{item.name}</span>
//                           <ChevronDown 
//                             size={18} 
//                             className={`text-[#C9A44C] transition-transform duration-300 ${
//                               mobileExpanded === item.name ? 'rotate-180' : ''
//                             }`}
//                           />
//                         </button>
                        
//                         <AnimatePresence>
//                           {mobileExpanded === item.name && (
//                             <motion.div
//                               initial={{ opacity: 0, height: 0 }}
//                               animate={{ opacity: 1, height: 'auto' }}
//                               exit={{ opacity: 0, height: 0 }}
//                               transition={{ duration: 0.2 }}
//                               className="pl-4 mt-2 space-y-3"
//                             >
//                               {item.dropdown.map((section) => (
//                                 <div key={section.title} className="border-l-2 border-[#C9A44C]/30 pl-3">
//                                   <button
//                                     onClick={() => toggleMobileSubExpand(section.title)}
//                                     className="w-full flex items-center justify-between text-[#4F6F52] font-semibold text-sm py-2"
//                                   >
//                                     <span>{section.title}</span>
//                                     <ChevronRight 
//                                       size={14} 
//                                       className={`text-[#C9A44C] transition-transform duration-300 ${
//                                         mobileSubExpanded === section.title ? 'rotate-90' : ''
//                                       }`}
//                                     />
//                                   </button>
                                  
//                                   <AnimatePresence>
//                                     {mobileSubExpanded === section.title && (
//                                       <motion.div
//                                         initial={{ opacity: 0, height: 0 }}
//                                         animate={{ opacity: 1, height: 'auto' }}
//                                         exit={{ opacity: 0, height: 0 }}
//                                         transition={{ duration: 0.2 }}
//                                         className="pl-3 mt-1 space-y-2"
//                                       >
//                                         {section.items.map((subItem) => (
//                                           <Link
//                                             key={subItem.name}
//                                             href={subItem.href}
//                                             onClick={(e) => handleSmoothScroll(e, subItem.href)}
//                                             className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-[#C9A44C]"
//                                           >
//                                             {'icon' in subItem && subItem.icon && (
//                                               <subItem.icon size={14} className="text-[#C9A44C]" />
//                                             )}
//                                             {subItem.name}
//                                           </Link>
//                                         ))}
//                                       </motion.div>
//                                     )}
//                                   </AnimatePresence>
//                                 </div>
//                               ))}
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     ) : (
//                       <Link
//                         href={item.href}
//                         onClick={(e) => handleSmoothScroll(e, item.href)}
//                         className="block py-3 text-[#2F4F3E] font-medium hover:text-[#C9A44C] text-base"
//                       >
//                         {item.name}
//                       </Link>
//                     )}
//                   </div>
//                 ))}

//                 {/* Mobile Contact Section */}
//                 <div className="mt-6 pt-4 border-t border-[#8FAF95]/20 space-y-3">
//                   <a
//                     href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
//                     className="flex items-center justify-center gap-2 bg-[#8FAF95]/20 text-[#2F4F3E] px-4 py-3 rounded-full text-sm font-medium hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-colors"
//                   >
//                     <Phone size={16} />
//                     Call: +91 {process.env.NEXT_PUBLIC_PHONE}
//                   </a>
//                   <Button 
//                     href="#contact" 
//                     variant="primary" 
//                     fullWidth 
//                     onClick={() => {
//                       setIsOpen(false)
//                       setTimeout(() => {
//                         const element = document.querySelector('#contact')
//                         if (element) element.scrollIntoView({ behavior: 'smooth' })
//                       }, 100)
//                     }}
//                   >
//                     Free Consultation
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ChevronRight, Phone, Home, Briefcase, Car, 
  Building2, Landmark, Shield, Hammer, Store, Factory, 
  Calculator, Percent, FileText, Scale, TrendingUp,
  Users, Award, CheckCircle, Clock, IndianRupee, ChevronDown
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/common/Button'

const navItems = [
  { 
    name: 'Home', 
    href: '/' 
  },
  { 
    name: 'Loans', 
    href: '#loans',
    dropdown: [
      { 
        title: '🏦 Loan Products', 
        items: [
          { 
            icon: Home, 
            name: 'Home Loan', 
            href: '#loans', 
            description: 'Purchase, construction, renovation',
          },
          { 
            icon: Building2, 
            name: 'Mortgage Loan', 
            href: '#loans', 
            description: 'Against existing property',
          },
          { 
            icon: Landmark, 
            name: 'Loan Against Property', 
            href: '#loans', 
            description: 'Unlock property value',
          },
          { 
            icon: Briefcase, 
            name: 'Personal Loan', 
            href: '#loans', 
            description: 'Unsecured instant loans',
          },
          { 
            icon: Car, 
            name: 'Vehicle Loan', 
            href: '#loans', 
            description: 'Car, bike, commercial',
          },
        ]
      },
      {
        title: '📋 Document Checklist',
        items: [
          { 
            name: 'Salaried Person', 
            href: '#salaried-docs',
            icon: Users,
          },
          { 
            name: 'Self Employed', 
            href: '#business-docs',
            icon: Briefcase,
          },
          { 
            name: 'Business Owner', 
            href: '#business-docs',
            icon: Building2,
          },
          { 
            name: 'Property Documents', 
            href: '#property-docs',
            icon: Landmark,
          },
        ]
      },
      {
        title: '🎯 Eligibility Criteria',
        items: [
          { 
            name: 'CIBIL Score Guide', 
            href: '#cibil-guide',
            icon: TrendingUp
          },
          { 
            name: 'Income Criteria', 
            href: '#income-criteria',
            icon: IndianRupee
          },
          { 
            name: 'Age Criteria', 
            href: '#age-criteria',
            icon: Clock
          },
          { 
            name: 'Check Eligibility', 
            href: '#tools',
            icon: Scale
          },
        ]
      }
    ]
  },
  { 
    name: 'Property', 
    href: '#property',
    dropdown: [
      {
        title: '🏠 Buy Property',
        items: [
          { 
            name: 'Residential Flats', 
            href: '#property-buy',
            icon: Home
          },
          { 
            name: 'Commercial Shops', 
            href: '#property-buy',
            icon: Store
          },
          { 
            name: 'Land & Plots', 
            href: '#property-buy',
            icon: Factory
          },
        ]
      },
      {
        title: '💰 Sell Property',
        items: [
          { 
            name: 'Free Valuation', 
            href: '#tools',
            icon: Scale
          },
          { 
            name: 'List Your Property', 
            href: '#contact',
            icon: Users
          },
          { 
            name: 'Legal Assistance', 
            href: '#contact',
            icon: Shield
          },
        ]
      },
      {
        title: '🔑 Rent/Lease',
        items: [
          { 
            name: 'Flats on Rent', 
            href: '#property-rent',
            icon: Home
          },
          { 
            name: 'Shops on Lease', 
            href: '#property-rent',
            icon: Store
          },
          { 
            name: 'Godowns/Warehouse', 
            href: '#property-rent',
            icon: Factory
          },
        ]
      }
    ]
  },
  { 
    name: 'Construction', 
    href: '#construction',
    dropdown: [
      {
        title: '🏗️ Services',
        items: [
          { 
            name: 'Redevelopment', 
            href: '#construction',
            icon: Building2
          },
          { 
            name: 'Stalled Projects', 
            href: '#construction',
            icon: Hammer
          },
          { 
            name: 'New Construction', 
            href: '#construction',
            icon: Home
          },
          { 
            name: 'Renovation', 
            href: '#construction',
            icon: Hammer
          },
        ]
      },
      {
        title: '✅ Completed Projects',
        items: [
          { 
            name: 'Lotus Tower - Boisar', 
            href: '#construction',
            icon: Award
          },
          { 
            name: 'Sai Residency - Vasai', 
            href: '#construction',
            icon: Building2
          },
          { 
            name: 'Green Valley - Palghar', 
            href: '#construction',
            icon: Home
          },
        ]
      }
    ]
  },
  { 
    name: 'Tools', 
    href: '#tools',
    dropdown: [
      {
        title: '🧮 Calculators',
        items: [
          { 
            icon: Calculator, 
            name: 'EMI Calculator', 
            href: '#emi-calculator',
          },
          { 
            icon: Percent, 
            name: 'Interest Rate Compare', 
            href: '#rate-compare',
          },
          { 
            icon: Scale, 
            name: 'Loan Eligibility', 
            href: '#loan-eligibility',
          },
        ]
      },
      {
        title: '📋 Checkers',
        items: [
          { 
            icon: FileText, 
            name: 'Document Checklist', 
            href: '#document-checklist',
          },
          { 
            icon: TrendingUp, 
            name: 'CIBIL Score Guide', 
            href: '#cibil-guide',
          },
          { 
            icon: Shield, 
            name: 'Property Valuation', 
            href: '#property-valuation',
          },
        ]
      }
    ]
  },
  { 
    name: 'Contact', 
    href: '#contact' 
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    setActiveDropdown(null)
    
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        // If element doesn't exist, just navigate to home with hash
        window.location.href = href
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F6F3E8]/95 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group shrink-0" onClick={(e) => handleSmoothScroll(e, '/')}>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 bg-[#2F4F3E] rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                  <span className="text-xl font-bold text-[#C9A44C] group-hover:scale-110 transition-transform">N</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A44C] to-[#8FAF95] rounded-lg opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#C9A44C] rounded-full animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#2F4F3E] leading-tight">N ENTERPRISE</span>
                <span className="text-[8px] tracking-wider text-[#4F6F52]/70 uppercase">Since 2008</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <div className="flex items-center gap-0.5 bg-white/20 backdrop-blur-sm rounded-xl px-1 py-0.5">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button 
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1 transition-all duration-200 ${
                          activeDropdown === item.name 
                            ? 'text-[#C9A44C] bg-[#8FAF95]/20' 
                            : 'text-[#2F4F3E] hover:text-[#C9A44C] hover:bg-[#8FAF95]/10'
                        }`}
                      >
                        {item.name}
                        <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown */}
                      {activeDropdown === item.name && (
                        <div 
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="grid grid-cols-3 gap-4 p-4">
                            {item.dropdown.map((section, idx) => (
                              <div key={idx}>
                                <h3 className="font-semibold text-[#2F4F3E] mb-2 text-xs border-b border-[#8FAF95]/20 pb-1">
                                  {section.title}
                                </h3>
                                <ul className="space-y-1">
                                  {section.items.map((subItem, subIdx) => (
                                    <li key={subIdx}>
                                      <Link
                                        href={subItem.href}
                                        onClick={(e) => handleSmoothScroll(e, subItem.href)}
                                        className="block text-xs text-gray-600 hover:text-[#C9A44C] transition-colors p-1.5 rounded-md hover:bg-[#F6F3E8]/50 cursor-pointer"
                                      >
                                        <div className="flex items-start gap-2">
                                          {'icon' in subItem && subItem.icon && (
                                            <subItem.icon size={12} className="text-[#C9A44C] mt-0.5" />
                                          )}
                                          <div>
                                            <span className="font-medium text-[#2F4F3E] text-xs">
                                              {subItem.name}
                                            </span>
                                          </div>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg text-[#2F4F3E] hover:text-[#C9A44C] hover:bg-[#8FAF95]/10 inline-block transition-all duration-200 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <motion.a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-1 text-[#2F4F3E] hover:text-[#C9A44C] transition-colors relative cursor-pointer"
            >
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <Phone size={14} />
              <span className="text-xs font-semibold">24/7</span>
            </motion.a>
            <Button href="#contact" variant="primary" size="sm" className="text-xs px-4 py-1.5 cursor-pointer">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={20} className="text-[#2F4F3E]" /> : <Menu size={20} className="text-[#2F4F3E]" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-[#F6F3E8] overflow-y-auto z-40"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-[#8FAF95]/20 py-2">
                    {item.dropdown ? (
                      <details className="group">
                        <summary className="flex items-center justify-between text-[#2F4F3E] font-medium py-2 text-base cursor-pointer list-none">
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4 text-[#C9A44C] group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="mt-2 pl-4 space-y-3">
                          {item.dropdown.map((section) => (
                            <div key={section.title}>
                              <h3 className="text-xs font-semibold text-[#4F6F52] mb-1">{section.title}</h3>
                              <div className="pl-2 space-y-2">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={(e) => handleSmoothScroll(e, subItem.href)}
                                    className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-[#C9A44C]"
                                  >
                                    {'icon' in subItem && subItem.icon && (
                                      <subItem.icon size={14} className="text-[#C9A44C]" />
                                    )}
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className="block py-3 text-[#2F4F3E] font-medium hover:text-[#C9A44C] text-base"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Contact */}
                <div className="mt-6 pt-4 border-t border-[#8FAF95]/20 space-y-3">
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                    className="flex items-center justify-center gap-2 bg-[#8FAF95]/20 text-[#2F4F3E] px-4 py-3 rounded-full text-sm font-medium hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-colors"
                  >
                    <Phone size={16} />
                    Call: +91 {process.env.NEXT_PUBLIC_PHONE}
                  </a>
                  <Button 
                    href="#contact" 
                    variant="primary" 
                    fullWidth 
                    onClick={() => {
                      setIsOpen(false)
                      setTimeout(() => {
                        const element = document.querySelector('#contact')
                        if (element) element.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                  >
                    Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}