export const formatPhoneNumber = (phone: string) => {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{5})(\d{5})$/)
  if (match) {
    return `${match[1]} ${match[2]}`
  }
  return phone
}

export const generateWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=${encodedMessage}`
}

export const getServiceAreasText = () => {
  const areas = [
    'Andheri', 'Bandra', 'Oshiwara', 'Mira Road', 'Borivali',
    'Bhayandar', 'Naigaon', 'Vasai', 'Virar', 'Nalasopara', 'Boisar', 'Palghar'
  ]
  return areas.join(', ')
}

export const getCurrentYear = () => {
  return new Date().getFullYear()
}