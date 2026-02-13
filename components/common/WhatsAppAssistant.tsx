// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { 
//   MessageCircle, X, Send, Bot, User, Sparkles, ChevronRight,
//   Smartphone, Phone 
// } from 'lucide-react'

// interface Message {
//   id: string
//   text: string
//   sender: 'bot' | 'user'
//   timestamp: Date
// }

// const quickReplies = [
//   { text: '💰 Loan Options', query: 'What loan options do you have?' },
//   { text: '🏠 Property in Mumbai', query: 'Properties available in Andheri/Bandra?' },
//   { text: '🏗️ Construction', query: 'Can you help with redevelopment in Vasai?' },
//   { text: '📍 Service Areas', query: 'Do you serve PAN India?' },
//   { text: '📞 Talk to Expert', query: 'I want to talk to an expert' },
// ]

// const botResponses = {
//   greeting: '👋 Namaste! I\'m Nia, your virtual assistant at N Enterprise.\n\nHow can I help you today?',
  
//   loan: '🏦 **Loan Services (PAN India)**\n\n• Home Loan\n• Mortgage Loan\n• Loan Against Property\n• Personal Loan\n• Vehicle Loan\n\n✅ Best rates\n✅ Quick processing\n✅ PAN India support\n\nWould you like to check eligibility?',
  
//   property: '🏠 **Properties in Mumbai & Palghar**\n\n📍 **Available in:**\nAndheri, Bandra, Oshiwara, Mira Road, Borivali,\nBhayandar, Naigaon, Vasai, Virar, Nalasopara, Boisar, Palghar\n\n🏢 **Types:** Flats, Shops, Galas, Land\n🔄 **Purpose:** Buy, Rent, Sell\n\nInterested in any specific location?',
  
//   construction: '🏗️ **Construction & Redevelopment**\n\n✅ Building Redevelopment (70:30, 65:35, 60:40)\n✅ Stalled Project Completion\n✅ New Construction\n✅ Renovation\n\n📍 Active in: Mumbai, Vasai, Virar, Boisar, Palghar\n\nWant to discuss your project?',
  
//   areas: '📍 **Our Service Areas**\n\n💰 **Loans:** PAN India\n🏠 **Property:** Mumbai to Palghar (All areas you mentioned)\n🏗️ **Construction:** Mumbai, Vasai, Virar, Boisar, Palghar\n\nDon\'t see your location? We still help with loans PAN India!',
  
//   expert: '🤝 I\'ll connect you with our expert immediately.\n\nPlease wait while I transfer your chat...',
  
//   default: 'I can help you with:\n\n💰 **Loans** - PAN India\n🏠 **Property** - Mumbai to Palghar\n🏗️ **Construction** - Redevelopment & Stalled Projects\n📍 **Locations** - Check service areas\n\nWhat would you like to know?',
// }

// export default function WhatsAppAssistant() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: '1',
//       text: botResponses.greeting,
//       sender: 'bot',
//       timestamp: new Date(),
//     },
//   ])
//   const [inputText, setInputText] = useState('')
//   const [isTyping, setIsTyping] = useState(false)
//   const messagesEndRef = useRef<HTMLDivElement>(null)
//   const inputRef = useRef<HTMLInputElement>(null)

//   useEffect(() => {
//     scrollToBottom()
//   }, [messages])

//   useEffect(() => {
//     if (isOpen && inputRef.current) {
//       inputRef.current.focus()
//     }
//   }, [isOpen])

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const getBotResponse = (userMessage: string): string => {
//     const msg = userMessage.toLowerCase()
    
//     if (msg.includes('loan') || msg.includes('home') || msg.includes('personal') || msg.includes('mortgage')) {
//       return botResponses.loan
//     }
//     if (msg.includes('property') || msg.includes('flat') || msg.includes('shop') || msg.includes('land') || 
//         msg.includes('andheri') || msg.includes('bandra') || msg.includes('vasai') || msg.includes('boisar')) {
//       return botResponses.property
//     }
//     if (msg.includes('construct') || msg.includes('redevelop') || msg.includes('building') || msg.includes('stall')) {
//       return botResponses.construction
//     }
//     if (msg.includes('area') || msg.includes('location') || msg.includes('service') || msg.includes('pan india')) {
//       return botResponses.areas
//     }
//     if (msg.includes('expert') || msg.includes('human') || msg.includes('agent') || msg.includes('talk')) {
//       return botResponses.expert
//     }
    
//     return botResponses.default
//   }

//   const handleSendMessage = async (text: string) => {
//     if (!text.trim()) return

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       text: text,
//       sender: 'user',
//       timestamp: new Date(),
//     }
//     setMessages(prev => [...prev, userMessage])
//     setInputText('')
//     setIsTyping(true)

//     if (text.toLowerCase().includes('expert') || text.toLowerCase().includes('human') || text.toLowerCase().includes('agent')) {
//       setTimeout(() => {
//         const botMessage: Message = {
//           id: (Date.now() + 1).toString(),
//           text: botResponses.expert,
//           sender: 'bot',
//           timestamp: new Date(),
//         }
//         setMessages(prev => [...prev, botMessage])
//         setIsTyping(false)
        
//         setTimeout(() => {
//           const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=${encodeURIComponent(
//             `Hi, I need expert assistance regarding: ${text}`
//           )}`
//           window.open(whatsappUrl, '_blank')
//         }, 2000)
//       }, 1500)
//     } else {
//       setTimeout(() => {
//         const botResponse = getBotResponse(text)
//         const botMessage: Message = {
//           id: (Date.now() + 1).toString(),
//           text: botResponse,
//           sender: 'bot',
//           timestamp: new Date(),
//         }
//         setMessages(prev => [...prev, botMessage])
//         setIsTyping(false)
//       }, 1500)
//     }
//   }

//   const handleQuickReply = (query: string) => {
//     handleSendMessage(query)
//   }

//   return (
//     <>
//       <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
//         <motion.a
//           href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           whileHover={{ scale: 1.1 }}
//           className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center"
//           title="Chat on WhatsApp"
//         >
//           <Smartphone size={24} />
//         </motion.a>

//         <motion.button
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           whileHover={{ scale: 1.1 }}
//           onClick={() => setIsOpen(!isOpen)}
//           className={`p-4 rounded-full shadow-2xl transition-all duration-300 ${
//             isOpen 
//               ? 'bg-primary-dark text-white rotate-90' 
//               : 'bg-accent text-primary-dark'
//           }`}
//         >
//           {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
//         </motion.button>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             className="fixed bottom-24 right-6 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50 border border-gray-200"
//           >
//             <div className="bg-gradient-to-r from-primary-dark to-primary p-5 text-white">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
//                       <Bot size={24} className="text-primary-dark" />
//                     </div>
//                     <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">Nia - N Assistant</h3>
//                     <div className="flex items-center gap-2 text-xs text-cream/80">
//                       <Sparkles size={12} />
//                       <span>AI Assistant</span>
//                       <span className="w-1 h-1 bg-accent rounded-full" />
//                       <span>Human Handover</span>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>
//             </div>

//             <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F6F3E8]/30">
//               {messages.map((message) => (
//                 <motion.div
//                   key={message.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   {message.sender === 'bot' && (
//                     <div className="w-8 h-8 bg-primary-dark rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
//                       <Bot size={16} className="text-accent" />
//                     </div>
//                   )}
//                   <div
//                     className={`max-w-[85%] rounded-2xl p-4 ${
//                       message.sender === 'user'
//                         ? 'bg-primary-dark text-white rounded-tr-none'
//                         : 'bg-white text-gray-800 rounded-tl-none shadow-md'
//                     }`}
//                   >
//                     <p className="text-sm whitespace-pre-line leading-relaxed">
//                       {message.text}
//                     </p>
//                     <span className="text-[10px] opacity-70 mt-2 block">
//                       {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                     </span>
//                   </div>
//                   {message.sender === 'user' && (
//                     <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center ml-2 flex-shrink-0">
//                       <User size={16} className="text-primary-dark" />
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
              
//               {isTyping && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="flex justify-start"
//                 >
//                   <div className="w-8 h-8 bg-primary-dark rounded-lg flex items-center justify-center mr-2">
//                     <Bot size={16} className="text-accent" />
//                   </div>
//                   <div className="bg-white rounded-2xl p-4 shadow-md">
//                     <div className="flex gap-1">
//                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
//                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
//                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             <div className="p-4 bg-white border-t border-gray-200">
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {quickReplies.map((reply, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleQuickReply(reply.query)}
//                     className="bg-[#F6F3E8] hover:bg-primary-dark hover:text-white px-4 py-2 rounded-full text-xs font-medium transition-colors flex items-center gap-1"
//                   >
//                     {reply.text}
//                     <ChevronRight size={12} />
//                   </button>
//                 ))}
//               </div>

//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault()
//                   handleSendMessage(inputText)
//                 }}
//                 className="flex items-center gap-2"
//               >
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   value={inputText}
//                   onChange={(e) => setInputText(e.target.value)}
//                   placeholder="Type your message..."
//                   className="flex-1 border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-sm"
//                 />
//                 <button
//                   type="submit"
//                   disabled={!inputText.trim()}
//                   className="bg-primary-dark text-white p-3 rounded-full hover:bg-accent hover:text-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <Send size={18} />
//                 </button>
//               </form>

//               <p className="text-xs text-gray-500 mt-3 text-center">
//                 🤝 Type "expert" to chat with our team directly
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }



'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, X, Send, Bot, User, Sparkles, ChevronRight,
  Smartphone, Phone, Mail, MapPin, Home, Briefcase, Building2,
  CheckCircle, ArrowRight, Clock
} from 'lucide-react'
import Button from './Button'

interface Message {
  id: string
  text: string
  sender: 'bot' | 'user'
  timestamp: Date
  options?: string[]
}

interface UserData {
  name: string
  location: string
  service: string
  purpose?: string
  propertyType?: string
  budget?: string
}

export default function WhatsAppAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [userData, setUserData] = useState<UserData>({
    name: '',
    location: '',
    service: '',
  })
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '👋 **Namaste! I\'m Nia** - Your Personal Assistant at N Enterprise.\n\nWith 15+ years of experience, we help you with:\n\n💰 **PAN India Loans** - Home, Business, Personal\n🏠 **Property** - Buy, Sell, Rent (Mumbai to Palghar)\n🏗️ **Construction** - Redevelopment, Stalled Projects\n\nMay I know your **name** please?',
      sender: 'bot',
      timestamp: new Date(),
      options: []
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleUserResponse = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Conversation Flow
    setTimeout(() => {
      let botResponse = ''
      let options: string[] = []

      if (currentStep === 0) {
        // Save name and ask for location
        setUserData(prev => ({ ...prev, name: text }))
        botResponse = `✨ **Nice to meet you, ${text}!**\n\n📍 **Where are you located?**\n\nThis helps us understand if you're in our service area or need PAN India loan support.`
        setCurrentStep(1)
      } 
      else if (currentStep === 1) {
        // Save location and ask for service
        setUserData(prev => ({ ...prev, location: text }))
        botResponse = `📍 **${text}** - Got it!\n\n🔍 **What brings you here today?**\n\nPlease select an option:`
        options = ['💰 Loan Assistance', '🏠 Buy Property', '🏢 Sell Property', '🔑 Rent Property', '🏗️ Construction/Redevelopment']
        setCurrentStep(2)
      }
      else if (currentStep === 2) {
        // Save service and ask for details
        setUserData(prev => ({ ...prev, service: text }))
        
        if (text.includes('Loan')) {
          botResponse = `💰 **Loan Assistance**\n\nGreat choice! We offer PAN India loan services.\n\n**What type of loan do you need?**`
          options = ['🏡 Home Loan', '💼 Business Loan', '🏢 Loan Against Property', '💳 Personal Loan', '🚗 Vehicle Loan', '📋 Not sure - Suggest me']
        }
        else if (text.includes('Buy')) {
          botResponse = `🏠 **Buy Property**\n\nExcellent! We have properties across Mumbai to Palghar.\n\n**Which type of property are you looking for?**`
          options = ['🏢 Flat/Apartment', '🏬 Commercial Shop', '🏭 Gala/Godown', '🌄 Land/Plot']
        }
        else if (text.includes('Sell')) {
          botResponse = `🏢 **Sell Property**\n\nWe'll help you get the best price!\n\n**What type of property do you want to sell?**`
          options = ['🏢 Flat', '🏬 Shop', '🏭 Gala', '🌄 Land']
        }
        else if (text.includes('Rent')) {
          botResponse = `🔑 **Rent Property**\n\nWe have verified rental properties.\n\n**What are you looking for?**`
          options = ['🏢 Flat on Rent', '🏬 Shop on Rent', '🏭 Godown on Rent']
        }
        else if (text.includes('Construction')) {
          botResponse = `🏗️ **Construction & Redevelopment**\n\nWe specialize in:\n✅ Building Redevelopment (70:30, 65:35, 60:40)\n✅ Stalled Project Completion\n✅ New Construction\n\n**What type of service do you need?**`
          options = ['🔄 Building Redevelopment', '⚠️ Complete Stalled Project', '🏗️ New Construction', '🔨 Renovation']
        }
        
        setCurrentStep(3)
      }
      else if (currentStep === 3) {
        if (userData.service.includes('Loan')) {
          botResponse = `💰 **${text}**\n\n📋 **Required Documents:**\n\n**For Salaried:**\n✅ Aadhaar + PAN Card\n✅ Last 3 months Salary Slips\n✅ 6 months Bank Statement\n✅ 2 years Form 16\n\n**For Business/Self-Employed:**\n✅ Aadhaar + PAN + GST\n✅ 2-3 years ITR\n✅ 1 year Bank Statement\n\n**🎯 Your Eligibility:**\n✅ CIBIL 750+ - Best Rates\n✅ Age: 21-60 years\n✅ Min Income: ₹20,000/month\n\n**Want to check exact eligibility?**`
          options = ['✅ Yes, check my eligibility', '📞 Talk to Loan Expert', '💰 Calculate EMI']
        }
        else if (userData.service.includes('Buy')) {
          botResponse = `🏠 **Great choice!**\n\n📍 **Preferred Locations:**\nAndheri • Bandra • Borivali • Vasai • Virar • Boisar • Palghar\n\n**Where would you like to see properties?**`
          options = ['📍 Andheri/Bandra', '📍 Borivali/Mira Road', '📍 Vasai/Virar', '📍 Boisar/Palghar', '📋 Show all areas']
        }
        else if (userData.service.includes('Sell')) {
          botResponse = `🏢 **Property Valuation**\n\nWe'll help you get the best market price!\n\n📊 **Free Valuation Includes:**\n✅ Current Market Analysis\n✅ Comparable Sales\n✅ Best Time to Sell\n\n**Ready for free valuation?**`
          options = ['✅ Yes, value my property', '📞 Talk to Property Expert']
        }
        else if (userData.service.includes('Rent')) {
          botResponse = `🔑 **Rental Properties**\n\n📍 **Available Locations:**\nVasai • Virar • Nalasopara • Boisar • Palghar\n\n**Which area do you prefer?**`
          options = ['📍 Vasai', '📍 Virar', '📍 Boisar', '📍 Palghar', '📋 Show all']
        }
        else if (userData.service.includes('Construction')) {
          botResponse = `🏗️ **Project Consultation**\n\n📋 **We need few details:**\n1️⃣ Project Location\n2️⃣ Current Status\n3️⃣ Built-up Area\n\n**Ready to discuss your project?**`
          options = ['✅ Yes, connect with expert', '📞 Schedule Site Visit']
        }
        
        setCurrentStep(4)
      }
      else {
        botResponse = `🤝 **Thank you for sharing the details!**\n\n📞 **Our expert will connect with you within 15 minutes.**\n\nIn the meantime, you can:\n💰 Check Loan Eligibility\n📋 View Document Checklist\n🏠 Browse Available Properties\n\n**Or simply type your question!**`
        options = ['💰 Check Eligibility', '📋 Document Checklist', '🏠 View Properties', '📞 Call Me Now']
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        options: options.length > 0 ? options : undefined
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleOptionClick = (option: string) => {
    handleUserResponse(option)
  }

  const handleConnectToExpert = () => {
    const message = encodeURIComponent(
      `Hi, I'm ${userData.name || 'a customer'} from ${userData.location || 'my location'}. I need assistance with: ${userData.service || 'your services'}`
    )
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=${message}`, '_blank')
  }

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <motion.a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <Smartphone size={24} />
        </motion.a>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full shadow-2xl transition-all duration-300 ${
            isOpen ? 'bg-primary-dark text-white rotate-90' : 'bg-accent text-primary-dark'
          }`}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50 border border-gray-200 whatsapp-chat ${
              typeof window !== 'undefined' && window.innerWidth <= 640
                ? 'inset-0 w-full h-full rounded-none'
                : 'bottom-24 right-6 w-[400px] h-[600px]'
            }`}
          >
            {/* Header */}
            <div className="chat-header bg-gradient-to-r from-primary-dark to-primary p-5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Bot size={24} className="text-primary-dark" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Nia - N Assistant</h3>
                    <div className="flex items-center gap-2 text-xs text-cream/80">
                      <Sparkles size={12} />
                      <span>AI Assistant</span>
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                    className="text-white/80 hover:text-white transition-colors p-1"
                  >
                    <Phone size={18} />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors p-1"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Company Info Bar */}
              <div className="mt-3 pt-3 border-t border-white/20 text-xs text-cream/90 flex items-center justify-between">
                <span>🏢 Since 2008</span>
                <span>⭐ 4.9/5 (500+ reviews)</span>
                <span>📍 PAN India</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F6F3E8]/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 bg-primary-dark rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                      <Bot size={16} className="text-accent" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 ${
                      message.sender === 'user'
                        ? 'bg-primary-dark text-white rounded-tr-none'
                        : 'bg-white text-gray-800 rounded-tl-none shadow-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">
                      {message.text}
                    </p>
                    
                    {/* Options Buttons */}
                    {message.options && message.options.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {message.options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOptionClick(option)}
                            className="bg-[#F6F3E8] hover:bg-accent hover:text-primary-dark text-primary-dark px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1"
                          >
                            {option}
                            <ChevronRight size={12} />
                          </button>
                        ))}
                      </div>
                    )}
                    
                    <span className="text-[10px] opacity-70 mt-2 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center ml-2 flex-shrink-0">
                      <User size={16} className="text-primary-dark" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="w-8 h-8 bg-primary-dark rounded-lg flex items-center justify-center mr-2">
                    <Bot size={16} className="text-accent" />
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (inputText.trim()) {
                    handleUserResponse(inputText)
                  }
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="bg-primary-dark text-white p-3 rounded-full hover:bg-accent hover:text-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </form>
              
              {/* Quick Connect */}
              <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <button
                  onClick={handleConnectToExpert}
                  className="flex items-center gap-1 hover:text-accent transition-colors"
                >
                  <Phone size={12} />
                  Talk to Expert
                </button>
                <span className="text-primary/30">|</span>
               <span className="flex items-center gap-1">
  <Clock size={12} />
  Response in 2 min
</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}