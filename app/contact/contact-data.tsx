"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    const encodedMessage = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );

    // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/234?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Navigation />
      <Breadcrumb />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Have questions about our products? We&apos;re here to help.
                Contact us via WhatsApp for instant response.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Contact Info */}
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Fastest way to reach us. Send us a message and get instant
                    response.
                  </p>
                  <a
                    href="https://wa.me/234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-2 group/link"
                  >
                    Send Message
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>

                {/* Phone */}
                <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Call us during business hours for immediate assistance.
                  </p>
                  <a
                    href="tel:+234"
                    className="text-primary hover:text-primary/80 font-medium text-sm"
                  >
                    +234...
                  </a>
                </div>

                {/* Location */}
                <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">
                    Kubwa
                    <br />
                    Abuja, Nigeria
                  </p>
                </div>

                {/* Hours */}
                <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                  <p className="text-muted-foreground text-sm space-y-1">
                    <span className="block">Mon - Sat: 8:00 AM - 8:00 PM</span>
                    <span className="block">Sunday: 10:00 AM - 6:00 PM</span>
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="p-8 bg-card rounded-xl border border-border/50">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234..."
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your product needs or inquiries..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center gap-2 group"
                    >
                      <MessageCircle size={20} />
                      {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, your message will be sent to us
                      via WhatsApp for faster response.
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="font-semibold text-lg mb-3">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We accept cash, bank transfers, and mobile money payments.
                    Contact us for more details on payment options.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="font-semibold text-lg mb-3">
                    Do you deliver outside Abuja?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! We can arrange delivery to other parts of Nigeria.
                    Kindly contact us via WhatsApp for delivery rates.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="font-semibold text-lg mb-3">
                    Do you offer warranties?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    All our products come with the manufacturer&apos;s warranty.
                    Specific warranty terms vary by product.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="font-semibold text-lg mb-3">
                    How long does delivery take?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    In Abuja, we offer same-day delivery for orders placed
                    early. Other locations may take 2-5 business days.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="font-semibold text-lg mb-3">
                    Can I return or exchange products?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, we have a return policy for unopened products. Contact
                    us to discuss your specific situation.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="font-semibold text-lg mb-3">
                    How do I know if a part fits my vehicle?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Send us your vehicle details and the part you need via
                    WhatsApp. Our experts will confirm compatibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Click the button below to chat with us on WhatsApp. We&apos;re
              available 24/7 to answer your questions.
            </p>
            <a
              href="https://wa.me/234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg font-semibold text-lg group"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.906 1.235l-.344.214-3.558-.93.949 3.434.276.44a9.86 9.86 0 001.518 5.594c.944 1.595 2.278 3.007 3.822 4.089 1.544.996 3.33 1.702 5.142 1.971.714.116 1.432.17 2.151.168 5.415 0 9.843-4.428 9.843-9.843 0-.011 0-.021 0-.032 0-2.627-.973-5.144-2.748-7.112-1.775-1.968-4.31-3.076-6.933-3.081z" />
              </svg>
              Chat on WhatsApp
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
