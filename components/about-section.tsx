import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Heart, Target, Sparkles } from "lucide-react"

const values = [
  {
    icon: Trophy,
    title: "Excellence",
    description: "We maintain the highest standards in every vehicle we offer and every service we provide",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent pricing and honest communication build lasting relationships with our clients",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to detail ensures every aspect of your experience exceeds expectations",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We embrace cutting-edge technology to enhance your automotive journey",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">About Prestige Motors</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            For over two decades, we have been South Africa's premier destination for luxury and performance vehicles.
            Our passion for automotive excellence drives everything we do, from curating an exceptional collection to
            providing unparalleled customer service.
          </p>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We believe that purchasing a vehicle is more than a transaction—it's the beginning of an extraordinary
            journey. Our team of automotive specialists is dedicated to understanding your unique needs and helping you
            find the perfect vehicle that complements your lifestyle and aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-accent/5 border border-accent/20 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-light text-accent mb-2">20+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-accent mb-2">5,000+</div>
              <div className="text-muted-foreground">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
