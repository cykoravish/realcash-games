"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import GameCard from "../components/GameCard";
import Footer from "../components/Footer";

export default function GamesPage() {
  const [activeFilter, setActiveFilter] = useState("All Games");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    "All Games",
    "Card Games",
    "Board Games",
    "Fantasy Sports",
    "Puzzle Games",
  ];

  const games = [
    {
      id: 1,
      name: "Ludo Supreme",
      description: "Classic Indian board game with modern twist",
      players: "2.5M+",
      rating: "4.8",
      entryFee: "₹10-500",
      prizePool: "₹20-1000",
      category: "Board Games",
    },
    {
      id: 2,
      name: "Rummy Circle",
      description: "Skill-based card game loved by millions",
      players: "1.8M+",
      rating: "4.7",
      entryFee: "₹25-1000",
      prizePool: "₹50-2000",
      category: "Card Games",
    },
    {
      id: 3,
      name: "Fantasy Cricket",
      description: "Create your dream team and win big",
      players: "3.2M+",
      rating: "4.9",
      entryFee: "₹50-2000",
      prizePool: "₹100-5000",
      category: "Fantasy Sports",
    },
    {
      id: 4,
      name: "Teen Patti Gold",
      description: "India's favorite card game",
      players: "1.5M+",
      rating: "4.6",
      entryFee: "₹20-800",
      prizePool: "₹40-1600",
      category: "Card Games",
    },
    {
      id: 5,
      name: "Carrom Clash",
      description: "Digital version of classic carrom",
      players: "800K+",
      rating: "4.5",
      entryFee: "₹15-400",
      prizePool: "₹30-800",
      category: "Board Games",
    },
    {
      id: 6,
      name: "Word Master",
      description: "Test your vocabulary skills",
      players: "600K+",
      rating: "4.4",
      entryFee: "₹10-300",
      prizePool: "₹20-600",
      category: "Puzzle Games",
    },
  ];

  const filteredGames = games.filter((game) => {
    const matchesFilter =
      activeFilter === "All Games" || game.category === activeFilter;
    const matchesSearch = game.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
                Game Collection
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Choose from our exciting collection of legal skill-based games
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 w-full lg:w-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeFilter === filter
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "bg-black/30 text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    🎮 {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game, index) => (
              <div
                key={game.id}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <GameCard game={game} detailed={true} />
              </div>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-2">No games found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>

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
      `}</style>
    </div>
  );
}
