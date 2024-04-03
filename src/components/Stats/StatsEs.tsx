import { motion } from "framer-motion";

const stats = [
  { id: 1, name: 'Clientes satisfechos', value: '+200' },
  { id: 2, name: 'Interacciones mensuales', value: '+50.000' },
  { id: 3, name: 'Retencion de potenciales clientes', value: '80%' },
]

export default function StatsEs() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-[#a482fb]">{stat.name}</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  )
}