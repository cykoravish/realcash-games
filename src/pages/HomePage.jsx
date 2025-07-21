"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const popularGames = [
    { id: 1, name: "Ludo Supreme", players: "2.5M+", rating: "4.8", image:"/ludop.png" },
    { id: 2, name: "Rummy Circle", players: "1.8M+", rating: "4.8", image:"/rummyp.png" },
  ];

  const features = [
    {
      icon: "🛡️",
      title: "100% Legal & Safe",
      description: "All games comply with Indian gaming laws and regulations",
    },
    {
      icon: "⚡",
      title: "Instant Withdrawals",
      description: "Get your winnings transferred to your account instantly",
    },
    {
      icon: "👥",
      title: "Millions of Players",
      description: "Join India's largest legal gaming community",
    },
    {
      icon: "⭐",
      title: "Skill-Based Games",
      description: "Win based on your skills, not just luck",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-40 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center mt-8">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Play Legal Games
            </span>
            <br />
            <span className="text-white">Win Real Money</span>
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 text-gray-300 transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Join millions of players on India's most trusted gaming platform.
            Play skill-based games and win real cash prizes legally!
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2">
              <Link to="/wallet">Start Playing Now</Link>
              <span>→</span>
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              <Link to="/games">Browse Games</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Popular Games
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Join millions of players in these exciting skill-based games
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {popularGames.map((game, index) => (
              <div
                key={game.id}
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                <GameCard game={game} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-black/30 backdrop-blur-lg border border-purple-500/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <Link to="/games">View All Games</Link>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                GameZone India?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Experience the best in legal gaming with our secure platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 group cursor-pointer text-center"
                style={{
                  animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
