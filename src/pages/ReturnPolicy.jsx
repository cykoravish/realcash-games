"use client"

import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function ReturnRefundPolicyPage() {
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
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Return and Refund Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300">Last Updated: July 21, 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-300 leading-relaxed">
                Thank you for using our platform at Regenta International. Please read this policy carefully before
                making any payments on our website www.regentainternational.in.
              </p>
            </section>

            {/* No Return or Refund Policy */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-red-300">1. No Return or Refund Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Due to the nature of our services—digital gaming, competitions, and real-time participation—all payments
                made on our platform are final and non-refundable. This includes but is not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>Game entry fees</li>
                <li>Tournament participation fees</li>
                <li>Subscription packages</li>
                <li>In-game purchases</li>
                <li>Add-on services or virtual credits</li>
              </ul>
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-semibold">
                  Once a payment is processed, no refund, cancellation, or reversal will be issued, regardless of the
                  outcome of the game, match, or tournament.
                </p>
              </div>
            </section>

            {/* Eligibility for Participation */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-300">2. Eligibility for Participation</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Before making any payment, users are advised to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>Read the game rules and terms of use carefully</li>
                <li>Ensure they meet eligibility criteria for playing (e.g., age, region)</li>
                <li>Confirm the accuracy of personal and payment details</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                We are not responsible for failed participation due to ineligibility, technical issues on your end, or
                violation of our Terms & Conditions.
              </p>
            </section>

            {/* Exceptions */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">3. Exceptions</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may only consider a refund in extremely limited circumstances, such as:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>Duplicate payment due to technical error (proof required)</li>
                <li>Unauthorized transaction due to payment system error (subject to investigation)</li>
              </ul>
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-300">
                  <span className="font-semibold">Important:</span> In such rare cases, users must report the issue
                  within 24 hours of the transaction by emailing regenta.international@gmail.com along with proof of
                  payment.
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please note that refund requests are reviewed case-by-case and are not guaranteed.
              </p>
            </section>

            {/* Disqualification or Violation */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-300">4. Disqualification or Violation</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                No refunds will be issued if a user is disqualified from a game or tournament due to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Cheating or use of unfair means</li>
                <li>Violation of game rules or community guidelines</li>
                <li>Providing false information during registration</li>
              </ul>
            </section>

            {/* Contact Us */}
            <section className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-orange-300">5. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Return and Refund Policy or believe a payment error has occurred,
                please contact us:
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
