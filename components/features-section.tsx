import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Wrench } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Certified Excellence",
    description:
      "Every vehicle undergoes rigorous inspection and certification to ensure the highest quality standards.",
  },
  {
    icon: Award,
    title: "Premium Service",
    description: "Our dedicated team provides personalized service throughout your entire automotive journey.",
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Work with our automotive specialists to find the perfect vehicle that matches your lifestyle.",
  },
  {
    icon: Wrench,
    title: "Comprehensive Support",
    description: "From financing to maintenance, we provide complete support for your automotive investment.",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">Our Commitment</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine innovation, expertise, and dedication to deliver an unparalleled automotive experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
