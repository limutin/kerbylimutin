import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Facebook, ExternalLink, CheckCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open mailto with form data
    const mailtoLink = `mailto:limutinkerby@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Kerby,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`)}`
    window.open(mailtoLink)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'limutinkerby@gmail.com', href: 'mailto:limutinkerby@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Oroquieta City, Misamis Occidental', href: '#' },
    { icon: Phone, label: 'Phone', value: 'Available upon request', href: '#' },
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/limutin', handle: '@limutin' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/kerby-limutin', handle: 'Kerby Limutin' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com', handle: 'Kerby Limutin' },
  ]

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(193,123,232,0.06), transparent 60%)', filter: 'blur(80px)' }}
      />
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-index">008 — Contact</span>
          <h2 className="section-title">
            Let's <span className="italic-gradient">connect.</span>
          </h2>
          <p className="section-subtitle mt-4">
            Have a project in mind, job opportunity, or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all"
                  style={{ background: 'rgba(15,15,28,0.6)', border: '0.5px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(24px)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(193,123,232,0.25)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ background: 'rgba(193,123,232,0.1)' }}
                  >
                    <item.icon size={18} style={{ color: '#C17BE8' }} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-0.5" style={{ color: '#606078' }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: '#e8e8f0' }}>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl" style={{ background: 'rgba(15,15,28,0.6)', border: '0.5px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(24px)' }}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: '#606078' }}>Connect on Social</h3>
              <div className="space-y-3">
                {socialLinks.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between group py-2"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={16} style={{ color: '#606078' }} className="group-hover:text-purple-300 transition-colors" />
                      <div>
                        <p className="text-sm font-medium transition-colors" style={{ color: '#e8e8f0' }}>{item.label}</p>
                        <p className="text-xs" style={{ color: '#606078' }}>{item.handle}</p>
                      </div>
                    </div>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#C17BE8' }} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: 'rgba(94,255,170,0.04)',
                border: '0.5px solid rgba(94,255,170,0.15)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="signal-dot"><span className="signal-dot-inner" /></span>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: '#5EFFAA' }}>Available for Hire</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#a0a0b8' }}>
                I'm currently open to full-time positions, freelance projects, and collaboration opportunities.
                Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div
              className="p-8 rounded-2xl"
              style={{ background: 'rgba(15,15,28,0.6)', border: '0.5px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(24px)', position: 'relative' }}
            >
              <div className="top-accent-line" style={{ position: 'absolute', inset: '0 0 auto 0', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(193,123,232,0.5) 30%, rgba(96,128,255,0.5) 70%, transparent)' }} />
              <h3 className="font-medium text-lg mb-1" style={{ color: '#e8e8f0' }}>Send a Message</h3>
              <p className="text-sm mb-7" style={{ color: '#a0a0b8' }}>Fill out the form and I'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: '#606078' }}>Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block font-mono text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: '#606078' }}>Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block font-mono text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: '#606078' }}>Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                    placeholder="Project inquiry, job offer, etc."
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-mono text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: '#606078' }}>Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={submitted}
                >
                  {submitted ? (
                    <><CheckCircle size={18} /> Message Sent!</>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
