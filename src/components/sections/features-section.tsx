import { motion } from "framer-motion"



export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Наши преимущества
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* No Paint Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1 flex items-center justify-center">
              <motion.span
                className="font-serif text-6xl md:text-7xl text-foreground"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦
              </motion.span>
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Без покраски</h3>
              <p className="text-muted-foreground text-sm mt-1">Заводское покрытие остаётся нетронутым. Никакой перекраски и потери стоимости авто.</p>
            </div>
          </motion.div>

          {/* Speed Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <span className="text-3xl md:text-4xl font-sans font-medium text-foreground">1–3 ч</span>
              <span className="text-sm text-muted-foreground">Время ремонта</span>
              <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Быстро</h3>
              <p className="text-muted-foreground text-sm mt-1">Большинство вмятин устраняется за 1–3 часа. Забираете машину в тот же день.</p>
            </div>
          </motion.div>

          {/* Price Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex items-center justify-center h-full">
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="text-5xl font-serif text-foreground">до 70%</span>
                <span className="text-sm text-muted-foreground">дешевле кузовного ремонта</span>
              </motion.div>
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Выгодно</h3>
              <p className="text-muted-foreground text-sm mt-1">PDR в разы дешевле традиционного кузовного ремонта с покраской.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}