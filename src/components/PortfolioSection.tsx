import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

const projects = [
  {
    title: "Портретная съёмка",
    category: "Студийный портрет",
    image: "https://cdn.poehali.dev/projects/0c1b95ab-35a5-45ea-8d23-476f9039f0fa/files/f68da661-ec05-4445-af92-b9924d67bb94.jpg",
    description:
      "Атмосферные портреты с драматическим студийным светом. Идеально для личного бренда, актёрского портфолио или просто красивых снимков для себя.",
    tags: ["Портрет", "Студийный свет", "Ретушь"],
  },
  {
    title: "Предметная съёмка",
    category: "Коммерческая фотография",
    image: "https://cdn.poehali.dev/projects/0c1b95ab-35a5-45ea-8d23-476f9039f0fa/files/6a02485f-9972-44b7-955c-f721bf870552.jpg",
    description:
      "Фото товаров для маркетплейсов, каталогов и рекламных материалов. Белый фон, детальная съёмка, чёткая передача цвета и фактуры.",
    tags: ["Товары", "Белый фон", "Маркетплейс"],
  },
  {
    title: "Love Story",
    category: "Романтическая фотосессия",
    image: "https://cdn.poehali.dev/projects/0c1b95ab-35a5-45ea-8d23-476f9039f0fa/files/be479f57-b565-4669-b200-692116ca3119.jpg",
    description:
      "Тёплые и живые снимки для пар. Уютная атмосфера студии помогает расслабиться и получить искренние, эмоциональные фотографии.",
    tags: ["Пара", "Love story", "Уютная атмосфера"],
  },
  {
    title: "Бизнес-портрет",
    category: "Корпоративная фотосъёмка",
    image: "https://cdn.poehali.dev/projects/0c1b95ab-35a5-45ea-8d23-476f9039f0fa/files/92ab1bba-0f3f-4f9a-8dee-077a218119ac.jpg",
    description:
      "Профессиональные деловые портреты для LinkedIn, корпоративных сайтов и пресс-релизов. Строгий стиль, идеальный свет, уверенный образ.",
    tags: ["Бизнес", "LinkedIn", "Корпоративный"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Каждая фотосессия — это история. Посмотрите, что получается у нас в студии.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Записаться на съёмку <Camera className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
