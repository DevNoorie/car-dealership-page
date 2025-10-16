import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/luxury-car-showroom-with-premium-vehicles-in-elega.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Premium Automotive Excellence
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-light mb-6 text-balance leading-tight">
          Prestige is a gateway to
          <span className="block text-accent font-normal">automotive perfection</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
          We curate exceptional vehicles that embody luxury, performance, and innovation. Discover your next automotive
          masterpiece in our exclusive collection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#inventory">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
