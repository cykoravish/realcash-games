"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function WalletPage() {
  const [addAmount, setAddAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [currentBalance] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const quickAddAmounts = [100, 500, 1000, 2000, 5000];

  const transactions = [
    // Empty for now - "No transactions yet"
  ];

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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                My Wallet
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Manage your gaming funds securely
            </p>
          </div>

          {/* Current Balance */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💳</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-300">
              Current Balance
            </h2>
            <div className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ₹{currentBalance}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <span>📈</span>
              <span>Available for gaming</span>
            </div>
          </div>

          {/* Add Money & Withdraw Money */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Add Money */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">+</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Add Money</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={addAmount}
                      onChange={(e) => setAddAmount(e.target.value)}
                      placeholder="Enter amount to add"
                      className="w-full pl-8 pr-4 py-3 bg-white/10 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white/10 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-white/10 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>💰</span>
                  <span>Add Money</span>
                </button>
              </div>
            </div>

            {/* Withdraw Money */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">-</span>
                </div>
                <h3 className="text-2xl font-bold">Withdraw Money</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Enter Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="Enter amount to withdraw"
                      className="w-full pl-8 pr-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-300 text-sm">
                    <span className="font-semibold">Note:</span> Withdrawals are
                    processed instantly. Minimum withdrawal amount is ₹100.
                  </p>
                </div>

                <button className="w-full bg-gradient-to-r from-red-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>💸</span>
                  <span>Withdraw Money</span>
                </button>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white">🕒</span>
              </div>
              <h3 className="text-2xl font-bold">Transaction History</h3>
            </div>

            {transactions.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💳</div>
                <h4 className="text-xl font-bold mb-2">No transactions yet</h4>
                <p className="text-gray-400">
                  Your transaction history will appear here
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {transactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          transaction.type === "add"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        <span className="text-white text-sm">
                          {transaction.type === "add" ? "+" : "-"}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">
                          {transaction.description}
                        </div>
                        <div className="text-sm text-gray-400">
                          {transaction.date}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`font-bold ${
                        transaction.type === "add"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {transaction.type === "add" ? "+" : "-"}₹
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
