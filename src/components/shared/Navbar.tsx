import { NavLink } from "react-router-dom"
import { Menu } from "lucide-react"
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
  { path: "/boys", label: "WOMEN" },
  { path: "/ourstory", label: "OUR STORY" },
]

const Navbar = () => {

  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? "text-gray-400" : "text-text-color"} hover:text-gray-400 transition-all font-medium`

  return (
    <nav className="w-full h-12 flex items-center justify-center">
      <section className="h-full w-full max-w-width flex items-center justify-between flex-1 px-10">
        <h1 className="logo text-xl font-bold">RAWBLOX</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={linkStyles}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation (Shadcn Sheet Trigger) */}
        <div className="md:hidden">

          <Sheet>

            <SheetTrigger>
              <button
                aria-label="Open navigation menu"
                className="p-2 rounded-md hover:bg-text-color transition-colors cursor-pointer"
              >
                <Menu className="w-6 h-6 text-text-color" />
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

