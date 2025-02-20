"use client"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react" // 🎨 For smooth animations
import { FaCloud, FaLock, FaBolt, FaTerminal } from "react-icons/fa" // 🚀 Cool icons

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Hero Section 🦸‍♂️ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">
            Rise Drive
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-zinc-400">
            The simple cloud drive for nerds who love clean interfaces
          </p>
          <div className="mt-10">
            <Button className="bg-violet-600 hover:bg-violet-700 text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Features Section 🎯 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaCloud className="w-8 h-8" />,
              title: "Cloud Native",
              description: "Built for the modern web with instant syncing",
            },
            {
              icon: <FaLock className="w-8 h-8" />,
              title: "Secure by Default",
              description: "End-to-end encryption for your peace of mind",
            },
            {
              icon: <FaBolt className="w-8 h-8" />,
              title: "Lightning Fast",
              description: "Optimized for speed and performance",
            },
            {
              icon: <FaTerminal className="w-8 h-8" />,
              title: "Developer Friendly",
              description: "API-first approach with excellent documentation",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50"
            >
              <div className="text-violet-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section 🎬 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-violet-900/50 to-violet-600/50 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to level up your storage game?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Join thousands of developers who trust Rise Drive
          </p>
          <Button className="bg-white text-violet-900 hover:bg-zinc-100 text-lg px-8 py-6">
            Start Free Trial
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
