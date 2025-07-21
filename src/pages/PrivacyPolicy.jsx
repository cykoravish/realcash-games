"use client"

import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300">Last updated: July 21, 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-300 leading-relaxed mb-4">
                This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your
                information when you use our gaming website or related services (the "Service"), and it tells you about
                your privacy rights and how the law protects you.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By using the Service, you agree to the collection and use of information in accordance with this Privacy
                Policy.
              </p>
            </section>

            {/* Interpretation and Definitions */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Interpretation and Definitions</h2>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">Interpretation</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Words with capitalized initials have meanings defined under the conditions below.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">Definitions</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="bg-white/5 rounded-lg p-4">
                  <strong className="text-white">Account:</strong> A user profile created to access our gaming platform.
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <strong className="text-white">Company:</strong> Refers to Regenta International, 1st Floor, 160, Plot
                  No. 2, Shahdara, Delhi 110095.
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <strong className="text-white">Cookies:</strong> Small files placed on your device to store session or
                  tracking information.
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <strong className="text-white">Country:</strong> Refers to India.
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <strong className="text-white">Device:</strong> Any internet-connected device such as a phone, tablet,
                  or computer.
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <strong className="text-white">Personal Data:</strong> Information that identifies an individual.
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <strong className="text-white">Service:</strong> The website, games, or services provided by us at
                  www.regentainternational.in.
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <strong className="text-white">Service Provider:</strong> Third-party vendors working with us to
                  support our Service.
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <strong className="text-white">Usage Data:</strong> Automatically collected data like IP address,
                  device info, browser type, session duration, etc.
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <strong className="text-white">You:</strong> The individual using the Service or a company you
                  represent.
                </div>
              </div>
            </section>

            {/* Collecting and Using Your Personal Data */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Collecting and Using Your Personal Data</h2>

              <h3 className="text-xl font-semibold mb-3 text-blue-300">Types of Data Collected</h3>

              <h4 className="text-lg font-semibold mb-2 text-green-300">Personal Data</h4>
              <p className="text-gray-300 leading-relaxed mb-4">We may collect personal details such as:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing address</li>
                <li>Device and usage data</li>
              </ul>

              <h4 className="text-lg font-semibold mb-2 text-green-300">Usage Data</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Includes your IP address, browser version, visited pages, time spent, and diagnostic information
                collected automatically when using the Service.
              </p>
            </section>

            {/* Tracking Technologies and Cookies */}
            <section>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Tracking Technologies and Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar technologies to analyze traffic, enhance performance, and remember your
                preferences.
              </p>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-semibold text-yellow-300 mb-2">Session Cookies</h5>
                  <p className="text-sm text-gray-300">Temporarily stored for session management.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-semibold text-yellow-300 mb-2">Persistent Cookies</h5>
                  <p className="text-sm text-gray-300">Stored for remembering your preferences.</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mt-4">You can manage cookies in your browser settings.</p>
            </section>

            {/* Use of Your Personal Data */}
            <section>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Use of Your Personal Data</h3>
              <p className="text-gray-300 leading-relaxed mb-4">We use your data to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide and manage access to games and features</li>
                <li>Process payments for game entry or participation</li>
                <li>Communicate updates, offers, and support</li>
                <li>Analyze usage and improve services</li>
                <li>Prevent fraud or misuse of the platform</li>
              </ul>

              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mt-6">
                <p className="text-red-300 font-semibold">
                  <span className="font-bold">Important Note:</span> By using our gaming services, you acknowledge and
                  agree that all payments made for game participation are strictly non-refundable, including but not
                  limited to entry fees, competition charges, or bonus credits.
                </p>
              </div>
            </section>

            {/* Data Sharing and Disclosure */}
            <section>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Data Sharing and Disclosure</h3>
              <p className="text-gray-300 leading-relaxed mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Payment providers for processing transactions</li>
                <li>Service providers to support our operations</li>
                <li>Authorities when legally required (e.g., fraud investigations)</li>
                <li>Business partners for promotions or collaborations</li>
                <li>Affiliates under similar privacy protections</li>
              </ul>
              <p className="text-green-300 font-semibold mt-4">We never sell your data.</p>
            </section>

            {/* Security */}
            <section>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Security</h3>
              <p className="text-gray-300 leading-relaxed">
                We implement commercially reasonable security measures, but no system is 100% secure. You use the
                Service at your own risk.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Children's Privacy</h3>
              <p className="text-gray-300 leading-relaxed">
                We do not knowingly collect data from children under 13. If you believe a child has provided data
                without parental consent, please contact us.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Changes to This Privacy Policy</h3>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy. Revisions will be posted on this page with an updated "Last updated"
                date. Please check this page periodically.
              </p>
            </section>

            {/* Contact Us */}
            <section className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Contact Us</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or data handling:
              </p>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>Email: regenta.international@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🌐</span>
                  <span>Website: www.regentainternational.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>Phone: +91 72480 74661</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
