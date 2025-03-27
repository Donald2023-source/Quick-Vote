
import { motion } from "framer-motion"

export default function VotingLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-32 h-32">
          {/* Ballot box */}
          <motion.div
            className="absolute bottom-0 w-24 h-20 bg-blue-800 rounded-md left-4"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />

          {/* Slot on top of box */}
          <motion.div
            className="absolute bottom-20 w-16 h-2 bg-blue-900 left-8"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.2 }}
          />

          {/* Ballot paper animation */}
          <motion.div
            className="absolute w-12 h-16 bg-white rounded-sm shadow-md"
            initial={{ y: -50, x: 10, rotate: 5 }}
            animate={{ y: 5, x: 10, rotate: 0 }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 0.5,
              repeatType: "loop",
            }}
          >
            {/* Checkmark on ballot */}
            <motion.div
              className="absolute top-3 left-2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1.2,
              }}
            >
              <svg width="30" height="30" viewBox="0 0 30 30">
                <motion.path
                  d="M 5 15 L 12 22 L 25 8"
                  fill="transparent"
                  strokeWidth="3"
                  stroke="#1e40af"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1.2,
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          className="text-blue-800 font-medium text-lg"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          Casting Your Vote...
        </motion.p>
      </div>
    </div>
  )
}

