import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Users, ShoppingBag, Building2, Heart, Sparkles } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Аренда студии",
    description:
      "Просторная фотостудия с несколькими зонами, профессиональным светом и реквизитом. Аренда по часам — приходите со своим фотографом или снимайте сами.",
  },
  {
    icon: Users,
    title: "Портретная съёмка",
    description:
      "Индивидуальные и групповые портреты: деловые фото, для резюме, личные. Опытный фотограф поможет раскрепоститься и сделает атмосферные снимки.",
  },
  {
    icon: ShoppingBag,
    title: "Предметная съёмка",
    description:
      "Фото товаров для интернет-магазинов, маркетплейсов и каталогов. Чистый белый фон, детальная съёмка — ваши товары будут выглядеть идеально.",
  },
  {
    icon: Heart,
    title: "Love story и семейные",
    description:
      "Романтические фотосессии для пар, семейные снимки с детьми. Уютная атмосфера студии и опытный фотограф создадут незабываемые кадры.",
  },
  {
    icon: Camera,
    title: "Бизнес-портреты",
    description:
      "Профессиональные фото для LinkedIn, корпоративных сайтов и пресс-релизов. Строгий деловой стиль или живые рабочие снимки — под ваши задачи.",
  },
  {
    icon: Sparkles,
    title: "Ретушь и обработка",
    description:
      "Профессиональная цветокоррекция и ретушь снимков. Готовые фото в оговорённые сроки в форматах для печати и соцсетей.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для <span className="text-primary">идеальной съёмки</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Аренда студии с оборудованием или полный цикл с фотографом — выбирайте формат, который подходит именно вам.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
