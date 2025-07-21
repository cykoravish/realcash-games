"use client";

import { Link } from "react-router-dom";

export default function GameCard({ game, detailed = false }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group cursor-pointer">
      {/* Game Image */}
      <div className="relative h-60 w-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-xl">
        <img
          src={game.image || "/game-placeholder.png"}
          alt={game.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <span className="text-yellow-400">⭐</span>
          <span className="text-white text-sm font-semibold">
            {game.rating}
          </span>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
          {game.name}
        </h3>

        {detailed ? (
          <div className="space-y-3">
            <p className="text-gray-300 text-sm">{game.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Entry Fee:</span>
                <div className="text-green-400 font-semibold">
                  {game.entryFee}
                </div>
              </div>
            </div>

            <div className="text-sm">
              <span className="text-gray-400">Prize Pool:</span>
              <div className="flex items-center space-x-1 text-yellow-400">
                <span>🏆</span>
                <span className="font-semibold">{game.prizePool}</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>▶</span>
              <Link to="/wallet">Play Now</Link>
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="text-gray-300 text-sm">
              {/* {game.players} players */}
            </div>
            <div className="flex items-center space-x-1 text-yellow-400">
              <span>⭐</span>
              <span className="text-sm">{game.rating}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
