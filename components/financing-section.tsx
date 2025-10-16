import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Calculator, CreditCard, FileText } from "lucide-react"
import Link from "next/link"

const financingOptions = [
  {
    title: "Flexible Payment Plans",
    description: "Customized financing solutions tailored to your budget and lifestyle",
    icon: Calculator,
  },
  {
    title: "Competitive Rates",
    description: "Access to the best interest rates from our network of trusted lenders",
    icon: CreditCard,
  },
  {
    title: "Quick Approval",
    description: "Fast pre-approval process with minimal documentation required",
    icon: FileText,
  },
]

const benefits = [
  "No hidden fees or charges",
  "Flexible down payment options",
  "Trade-in assistance available",
  "Extended warranty packages",
  "Gap insurance protection",
  "Early payoff options without penalties",
]

export function FinancingSection() {
  return (
    <section id="financing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">Financing Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Drive your dream car today with our flexible financing options designed to fit your budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {financingOptions.map((option, index) => (
            <Card key={index} className="border-border/50 bg-muted/30">
              <CardHeader>
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <option.icon className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-2xl font-semibold">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-3xl font-light text-center">Financing Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link href="#contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Apply for Financing
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
