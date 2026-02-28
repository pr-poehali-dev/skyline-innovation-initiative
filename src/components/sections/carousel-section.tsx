import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/7c91798c-5f1d-4082-a9b0-dc576276bf37/files/03d9535b-012a-44ec-80ce-8c7dfea6c69a.jpg",
  "https://cdn.poehali.dev/projects/7c91798c-5f1d-4082-a9b0-dc576276bf37/files/7bea35fa-4ee7-4ca5-a31c-22ed1549bcd1.jpg",
  "https://cdn.poehali.dev/projects/7c91798c-5f1d-4082-a9b0-dc576276bf37/files/ff27f98f-daaa-40ac-9145-758e9fdf14b0.jpg",
  "https://cdn.poehali.dev/projects/7c91798c-5f1d-4082-a9b0-dc576276bf37/files/b380b074-7108-4470-ad86-d2b5e81f6ac4.jpg",
  "https://cdn.poehali.dev/projects/7c91798c-5f1d-4082-a9b0-dc576276bf37/files/03d9535b-012a-44ec-80ce-8c7dfea6c69a.jpg",
  "https://cdn.poehali.dev/projects/7c91798c-5f1d-4082-a9b0-dc576276bf37/files/7bea35fa-4ee7-4ca5-a31c-22ed1549bcd1.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Возвращаем вашему авто идеальный вид.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}