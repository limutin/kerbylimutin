import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative"
      style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)' }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        inset: '0 0 auto 0',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(193,123,232,0.3) 30%, rgba(96,128,255,0.3) 70%, transparent)',
      }} />

      <div className="container-custom px-6 md:px-10 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[13px] font-semibold text-white"
                style={{
                  background: 'linear-gradient(135deg, #C17BE8, #6080FF)',
                  boxShadow: '0 6px 20px rgba(127,80,220,0.4), inset 0 1px 0 rgba(255,255,255,0.25)',
                }}
              >
                KL
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[14px] font-medium tracking-tight" style={{ color: '#e8e8f0' }}>Kerby Limutin</span>
                <span className="font-mono text-[10px] tracking-wide" style={{ color: '#606078' }}>Developer · Builder</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#a0a0b8' }}>
              Engineering scalable digital solutions at the intersection of full-stack development and thoughtful design.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] mb-5" style={{ color: '#606078' }}>Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm py-1 transition-colors duration-200"
                  style={{ color: '#a0a0b8' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#e8e8f0'}
                  onMouseLeave={e => e.currentTarget.style.color = '#a0a0b8'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] mb-5" style={{ color: '#606078' }}>Connect</h4>
            <div className="space-y-2">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/limutin' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/kerby-limutin' },
                { icon: Mail, label: 'Email', href: 'mailto:limutinkerby@gmail.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-sm py-1 group transition-colors duration-200"
                  style={{ color: '#a0a0b8' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#e8e8f0'}
                  onMouseLeave={e => e.currentTarget.style.color = '#a0a0b8'}
                >
                  <Icon size={14} />
                  {label}
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Availability */}
            <div
              className="mt-5 flex items-center gap-2 px-3 py-2 rounded-full w-fit"
              style={{
                background: 'rgba(94,255,170,0.06)',
                border: '0.5px solid rgba(94,255,170,0.2)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#5EFFAA', boxShadow: '0 0 6px #5EFFAA' }}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: '#5EFFAA' }}>Available for hire</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: '#606078' }}>
              © {currentYear} Kerby Limutin
            </p>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: '#606078' }}>
              Built with React & Tailwind
            </p>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: '#606078' }}>
            <span>Stack: React · Vite · Tailwind</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span>Based in PH</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
