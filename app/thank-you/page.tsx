import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Thank You - LuaData",
  description:
    "Thank you for contacting LuaData. We'll be in touch soon to discuss your AI and machine learning project.",
}

export default function ThankYou() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-primary via-purple-600 to-accent-dark text-white">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-10 animate-scale-in">
          <div className="text-6xl">✓</div>
        </div>

        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl opacity-90 mb-8">
            We appreciate your interest in LuaData. Our team will get in touch with you shortly to explore your AI, ML,
            or data science needs.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Return to Homepage
          </Link>
        </div>
      </div>

      {/* Google Analytics & Conversion Tracking */}
      <Script id="thank-you-tracking" strategy="afterInteractive">
        {`
          if (typeof gtag === 'function') {
            // Google Analytics
            gtag('event', 'page_view', {
              'page_title': 'Thank You Page',
              'page_location': window.location.href
            });

            // Conversion Event on Page Load
            gtag('event', 'conversion', {
              'send_to': 'AW-17153791006/5c18CMjFoNcaEJ6oyPM_',
              'value': 50.0,
              'currency': 'USD',
              'transaction_id': Date.now().toString()
            });

            // Additional Lead Events
            gtag('event', 'form_submit_success',  {
              'event_category': 'Lead Generation',
              'event_label': 'Contact Form Completed',
              'value': 50
            });

            gtag('event', 'generate_lead', {
              'currency': 'USD',
              'value': 50
            });
          }
        `}
      </Script>
    </>
  )
}
