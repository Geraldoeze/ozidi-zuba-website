import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo-bg.png" 
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="font-bold text-primary">OZIDI ZUBA</h3>
                <p className="text-xs text-muted-foreground">Auto Parts Center</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Authentic motor spare parts shopping center serving Abuja since years of trusted service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Motor Spare Parts</li>
              <li className="text-muted-foreground">Car Maintenance Products</li>
              <li className="text-muted-foreground">Auto Accessories</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Kubwa, Abuja, Nigeria</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+234..." className="text-muted-foreground hover:text-primary transition-colors">
                  +234...
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="https://wa.me/234..." className="text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ozidi Zuba in Kubwa. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/zubainkubwa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/zuba_in_kubwa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/234..."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
              aria-label="WhatsApp"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.906 1.235l-.344.214-3.558-.93.949 3.434.276.44a9.86 9.86 0 001.518 5.594c.944 1.595 2.278 3.007 3.822 4.089 1.544.996 3.33 1.702 5.142 1.971.714.116 1.432.17 2.151.168 5.415 0 9.843-4.428 9.843-9.843 0-.011 0-.021 0-.032 0-2.627-.973-5.144-2.748-7.112-1.775-1.968-4.31-3.076-6.933-3.081z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
