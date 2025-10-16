"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Fuel, Gauge, Calendar, Heart } from "lucide-react"
import Link from "next/link"

const cars = [
  {
    id: 1,
    name: "Porsche 911 Turbo S",
    year: 2024,
    price: "R3,740,000",
    image: "/porsche-911-turbo-s-luxury-sports-car.jpg",
    category: "Sports Car",
    specs: {
      engine: "3.8L Twin-Turbo H6",
      horsepower: "640 HP",
      acceleration: "2.6s 0-60mph",
      topSpeed: "205 mph",
      transmission: "8-Speed PDK",
      drivetrain: "AWD",
    },
    features: ["Premium Sound System", "Carbon Fiber Package", "Sport Chrono Package", "Ceramic Brakes"],
  },
  {
    id: 2,
    name: "Mercedes-AMG GT 63 S",
    year: 2024,
    price: "R2,870,000",
    image: "/mercedes-amg-gt-63-s-luxury-coupe.jpg",
    category: "Luxury Coupe",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: "630 HP",
      acceleration: "3.1s 0-60mph",
      topSpeed: "196 mph",
      transmission: "9-Speed AMG",
      drivetrain: "AWD",
    },
    features: ["AMG Performance Seats", "Burmester Sound", "AMG Track Pace", "Dynamic Plus Package"],
  },
  {
    id: 3,
    name: "BMW M8 Competition",
    year: 2024,
    price: "R2,490,000",
    image: "/bmw-m8-competition-luxury-grand-tourer.jpg",
    category: "Grand Tourer",
    specs: {
      engine: "4.4L Twin-Turbo V8",
      horsepower: "617 HP",
      acceleration: "3.0s 0-60mph",
      topSpeed: "190 mph",
      transmission: "8-Speed M Steptronic",
      drivetrain: "AWD",
    },
    features: ["M Carbon Package", "Harman Kardon Audio", "M Driver Package", "Competition Package"],
  },
  {
    id: 4,
    name: "Audi RS e-tron GT",
    year: 2024,
    price: "R2,560,000",
    image: "/audi-rs-e-tron-gt-electric-luxury-sedan.jpg",
    category: "Electric Luxury",
    specs: {
      engine: "Dual Electric Motors",
      horsepower: "637 HP",
      acceleration: "3.1s 0-60mph",
      topSpeed: "155 mph",
      transmission: "2-Speed Automatic",
      drivetrain: "AWD",
    },
    features: ["Air Suspension", "Bang & Olufsen Audio", "Matrix LED Headlights", "Carbon Fiber Roof"],
  },
  {
    id: 5,
    name: "Lamborghini Huracán EVO",
    year: 2024,
    price: "R4,480,000",
    image: "/lamborghini-huracan-evo-supercar.jpg",
    category: "Supercar",
    specs: {
      engine: "5.2L V10",
      horsepower: "631 HP",
      acceleration: "2.9s 0-60mph",
      topSpeed: "202 mph",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "AWD",
    },
    features: ["LDVI System", "Carbon Fiber Package", "Alcantara Interior", "Performance Traction Control"],
  },
  {
    id: 6,
    name: "Ferrari F8 Tributo",
    year: 2024,
    price: "R5,060,000",
    image: "/ferrari-f8-tributo-red-supercar.jpg",
    category: "Supercar",
    specs: {
      engine: "3.9L Twin-Turbo V8",
      horsepower: "710 HP",
      acceleration: "2.9s 0-60mph",
      topSpeed: "211 mph",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "RWD",
    },
    features: ["Side Slip Control", "Ferrari Dynamic Enhancer", "Carbon Fiber Steering Wheel", "Racing Seats"],
  },
]

export function CarShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCar, setSelectedCar] = useState(cars[0])

  const nextCar = () => {
    const newIndex = (currentIndex + 1) % cars.length
    setCurrentIndex(newIndex)
    setSelectedCar(cars[newIndex])
  }

  const prevCar = () => {
    const newIndex = currentIndex === 0 ? cars.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedCar(cars[newIndex])
  }

  const selectCar = (index: number) => {
    setCurrentIndex(index)
    setSelectedCar(cars[index])
  }

  return (
    <section id="inventory" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">Curated Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Each vehicle in our collection represents the pinnacle of automotive engineering and design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Car Image and Navigation */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg bg-card">
              <img
                src={selectedCar.image || "/placeholder.svg"}
                alt={selectedCar.name}
                className="w-full h-96 object-cover transition-all duration-500"
              />
              <div className="absolute top-4 right-4">
                <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <Button variant="outline" size="icon" onClick={prevCar} className="rounded-full bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Car Thumbnails */}
              <div className="flex space-x-2 overflow-x-auto">
                {cars.map((car, index) => (
                  <button
                    key={car.id}
                    onClick={() => selectCar(index)}
                    className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                      index === currentIndex ? "border-accent" : "border-transparent"
                    }`}
                  >
                    <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextCar} className="rounded-full bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {selectedCar.category}
              </Badge>
              <h3 className="text-3xl font-light mb-2">{selectedCar.name}</h3>
              <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedCar.year}</span>
                </div>
                <span className="text-2xl font-semibold text-accent">{selectedCar.price}</span>
              </div>
            </div>

            {/* Specifications */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Specifications</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Fuel className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Engine</span>
                    </div>
                    <p className="font-medium">{selectedCar.specs.engine}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Gauge className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Power</span>
                    </div>
                    <p className="font-medium">{selectedCar.specs.horsepower}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">0-60 mph</span>
                    <p className="font-medium">{selectedCar.specs.acceleration}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Top Speed</span>
                    <p className="font-medium">{selectedCar.specs.topSpeed}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Transmission</span>
                    <p className="font-medium">{selectedCar.specs.transmission}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Drivetrain</span>
                    <p className="font-medium">{selectedCar.specs.drivetrain}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div>
              <h4 className="font-semibold mb-3">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCar.features.map((feature, index) => (
                  <Badge key={index} variant="outline">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <Link href="#contact" className="flex-1">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Schedule Test Drive
                </Button>
              </Link>
              <Link href="#contact" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
