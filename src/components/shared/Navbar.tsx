import { NavLink } from "react-router-dom"
import { Menu, ShoppingCart } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/shop", label: "SHOP" },
  { path: "/men", label: "MEN" },
  { path: "/boys", label: "BOYS" },
  { path: "/ourstory", label: "OUR STORY" }
]

const Navbar = () => {

  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? "text-gray-400" : "text-foreground"} hover:text-gray-400 transition-all font-medium`

  return (
    <nav className="w-full h-12 flex items-center justify-center">

      <section className="h-full w-full max-w-width flex items-center justify-between flex-1 px-10">
        <h1 className="logo text-xl font-bold">BEEBOX</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={linkStyles}>
                {item.label}
              </NavLink>
            </li>
          ))}
          {/* Cart */}
          <li>
            <NavLink to={"/cart"} className={({ isActive }) => `${isActive ? "bg-foreground text-background" : "bg-background text-foreground"} relative w-8 h-8 overflow-visible flex items-center justify-center rounded-sm`}>

                <ShoppingCart className="w-6 h-6" />

                <div className="absolute top-0 right-0 text-[10px] font-bold flex items-center justify-center bg-foreground text-background w-4 h-4 rounded-full">
                  2
                </div>

            </NavLink>
          </li>


        </ul>

        {/* Mobile Navigation (Shadcn Sheet Trigger) */}
        <div className="md:hidden">

          <Sheet>

            <SheetTrigger>
              <button
                aria-label="Open navigation menu"
                className="p-2 rounded-md hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </SheetTrigger>

            {/* Right Side Drawer */}
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">

              <SheetHeader>
                <SheetTitle className="text-left font-bold text-lg">
                  RAWBLOX
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-4 mt-8 ml-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={linkStyles}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>

          </Sheet>

        </div>

      </section>

    </nav>
  )
}

export default Navbar


