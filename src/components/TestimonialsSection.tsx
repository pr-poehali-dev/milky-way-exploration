import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Брала студию на портретную съёмку — всё понравилось! Свет настроен профессионально, реквизита море, атмосфера уютная. Фотографии получились лучше, чем ожидала.",
    name: "Анна",
    role: "Портретная фотосессия",
  },
  {
    quote:
      "Снимали каталог для интернет-магазина. Предметный стол, белые фоны, хорошее освещение — всё что нужно уже есть. Сэкономили кучу времени на подготовке. Будем возвращаться.",
    name: "Михаил",
    role: "Предметная съёмка для маркетплейса",
  },
  {
    quote:
      "Заказывали съёмку с вашим фотографом для корпоративных портретов всего отдела. Работали быстро, результат отличный — теперь у всех нас приличные фото на LinkedIn.",
    name: "Екатерина",
    role: "Руководитель HR-отдела",
  },
  {
    quote:
      "Снимали love story — очень понравился подход фотографа. Не торопил, подсказывал позы, создал расслабленную обстановку. Фотографии просто прекрасные, показываем всем!",
    name: "Дмитрий и Юля",
    role: "Love story фотосессия",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Более 150 довольных клиентов доверяют нам свои важные моменты — портреты, бизнес, товары и личные истории.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
