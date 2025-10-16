export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-light tracking-wide">Noor's prestige.</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Curating exceptional automotive experiences through luxury, performance, and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Inventory</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sports Cars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Luxury Sedans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  SUVs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Electric Vehicles
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Financing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Trade-In
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Service Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Extended Warranty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Noor's Prestige Motors.</p>
        </div>
      </div>
    </footer>
  )
}
