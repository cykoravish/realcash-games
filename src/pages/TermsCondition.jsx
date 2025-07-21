"use client"

import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function TermsConditionsPage() {
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
                Terms and Conditions
              </span>
            </h1>
            <p className="text-xl text-gray-300">Last Updated: July 21, 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to Regenta International. These Terms and Conditions govern your use of our website and services
                at www.regentainternational.in (referred to as the "Website").
              </p>
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300 font-semibold">
                  By accessing or using our platform, you agree to abide by these Terms. If you do not agree, you must
                  not use the Service.
                </p>
              </div>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-300">1. Eligibility</h2>
              <p className="text-gray-300 leading-relaxed mb-4">By using our gaming services, you confirm that:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  You are at least 18 years of age, or the legal age required to participate in such games in your
                  jurisdiction.
                </li>
                <li>You are legally capable of entering into binding agreements.</li>
                <li>
                  You are not located in a region where online skill-based games or competitions are prohibited by law.
                </li>
              </ul>
            </section>

            {/* Account Registration */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-300">2. Account Registration</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To access certain features, you may need to create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Keep your login credentials confidential</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to suspend or terminate accounts that are suspected of fraud or misuse.
              </p>
            </section>

            {/* Payments and No Refunds */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-red-300">3. Payments and No Refunds</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>
                  All payments made for game entry, tournaments, or in-app purchases are final and non-refundable.
                </li>
                <li>You agree that you are paying to participate, and winning is not guaranteed.</li>
                <li>
                  No refunds will be issued for disqualification, ineligibility, system issues on your end, or
                  dissatisfaction with game outcomes.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">For more details, refer to our Return and Refund Policy.</p>
            </section>

            {/* Fair Play and Code of Conduct */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">4. Fair Play and Code of Conduct</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>Use cheats, hacks, bots, or unauthorized third-party tools</li>
                <li>Create multiple accounts for fraud or manipulation</li>
                <li>Abuse, harass, or threaten other users or admins</li>
                <li>Share misleading or false information</li>
              </ul>
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-semibold">
                  Violation may result in disqualification, account suspension, and permanent ban without refund.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">5. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All content on the Website—including game content, logos, graphics, and design—is the property of
                Regenta International or its licensors. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Reproduce, copy, or redistribute any part of the Service</li>
                <li>Use our content for commercial purposes without written consent</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-300">6. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do our best to provide a smooth and secure gaming experience. However, we are not liable for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>Losses incurred due to game outcomes or errors</li>
                <li>Technical issues, downtimes, or service interruptions</li>
                <li>Unauthorized access to your account</li>
              </ul>
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-300 font-semibold">You use the Service at your own risk.</p>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-pink-300">7. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">We reserve the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Terminate or suspend your access at any time for violating these Terms</li>
                <li>Remove any content or accounts at our discretion</li>
              </ul>
            </section>

            {/* Modifications to the Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-indigo-300">8. Modifications to the Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update these Terms and Conditions from time to time. Changes will be effective once posted on
                this page. You are responsible for checking this page periodically.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Continued use of the Website after updates means you agree to the revised Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-teal-300">9. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by the laws of India, and any disputes shall be resolved under the jurisdiction
                of Delhi courts.
              </p>
            </section>

            {/* Contact Us */}
            <section className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">10. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions or concerns about these Terms, please contact:
              </p>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>Email: regenta.international@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>Phone: +91 72480 74661</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🌐</span>
                  <span>Website: www.regentainternational.in</span>
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
