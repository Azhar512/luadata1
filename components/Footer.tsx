import type React from "react"
import Link from "next/link"
import { Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer id="about" className="bg-[#0a0f1c] text-white pt-16 pb-6 relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-2">
              <span className="text-2xl font-bold text-primary">LuaData</span>
            </div>
            <div className="text-primary font-medium tracking-wider text-sm mb-4">AI • ML • Data Science</div>
            <p className="opacity-80 mb-6 leading-relaxed">
              Transforming businesses through intelligent AI, machine learning, and data science solutions that drive
              real results and sustainable growth.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://www.linkedin.com/company/luadata/" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="https://www.facebook.com/share/18vSNmE9Gc/" icon={<Facebook />} label="Facebook" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#services">Machine Learning</FooterLink>
              <FooterLink href="#services">AI Integration</FooterLink>
              <FooterLink href="#services">Data Science</FooterLink>
              <FooterLink href="#services">Smart Apps</FooterLink>
              <FooterLink href="#solutions">MLOps</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#solutions">Our Solutions</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <ContactInfo
                icon={<Mail className="w-4 h-4 text-primary" />}
                content={
                  <Link href="mailto:sales@luadata.net" className="opacity-80 hover:text-primary transition-colors">
                    sales@luadata.net
                  </Link>
                }
              />
              <ContactInfo
                icon={<Phone className="w-4 h-4 text-primary" />}
                content={
                  <Link href="tel:+16076087411" className="opacity-80 hover:text-primary transition-colors">
                    +1 (607) 608-7411
                  </Link>
                }
              />
              <ContactInfo
                icon={<MapPin className="w-4 h-4 text-primary" />}
                content={<span className="opacity-80">WorkVille 39 St. Midtown Manhattan, New York</span>}
              />
            </div>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-white/10 opacity-60">
          <p>&copy; {new Date().getFullYear()} LuaData. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <Link
      href={href}
      className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center text-white hover:bg-gradient-to-r from-primary to-accent hover:-translate-y-1 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className="opacity-80 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block py-1"
      >
        {children}
      </Link>
    </li>
  )
}

interface ContactInfoProps {
  icon: React.ReactNode
  content: React.ReactNode
}

const ContactInfo = ({ icon, content }: ContactInfoProps) => {
  return (
    <div className="flex items-center gap-3">
      {icon}
      {content}
    </div>
  )
}

export default Footer
