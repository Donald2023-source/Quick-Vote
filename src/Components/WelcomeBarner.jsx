

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Vote, ChevronRight } from "lucide-react"



export default function WelcomeBanner({ name }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-purple-600 px-8 py-10 shadow-xl"
    >
      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Vote className="h-6 w-6 text-indigo-200" />
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Welcome <span className="text-indigo-200">{name.toUpperCase()}</span>
            </h2>
          </div>

          <p className="max-w-md text-lg text-indigo-100">
            Your voice matters. Make it count with Ivote - the secure and simple way to participate in elections.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            {["Secure", "Transparent", "Accessible"].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="flex items-center space-x-1 rounded-full bg-white/10 px-3 py-1 text-sm text-white"
              >
                <CheckCircle className="mr-1 h-3.5 w-3.5" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:block"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 p-2">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white/30">
              <Vote className="h-12 w-12 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="relative z-10 mt-6"
      >
        <button className="group flex items-center space-x-1 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20">
          <span>View Results</span>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </motion.div>
    </motion.div>
  )
}

