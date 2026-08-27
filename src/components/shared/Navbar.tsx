import { NavLink } from "react-router-dom"

const Navbar = () => {


  return (
    <>
    <nav className="w-full h-12  flex items-center justify-center">


    <section className="h-full w-full max-w-width flex items-center justify-between flex-1  px-10">

      <h1 className="logo">RAWBLOX</h1>

      <ul className="hidden md:flex items-center gap-3">
          <li>
            <NavLink to="/"
            className={({ isActive }) => 
              `${isActive ? "text-gray-400" : "text-[#121212]"} hover:text-gray-400`
            }>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/shop"
            className={({ isActive }) => 
              `${isActive ? "text-gray-400" : "text-[#121212]"} hover:text-gray-400 transition-all`
            }>SHOP</NavLink>
          </li>

          <li>
            <NavLink to="/men"
            className={({ isActive }) => 
              `${isActive ? "text-gray-400" : "text-[#121212]"} hover:text-gray-400 transition-all`
            }>MEN</NavLink>
          </li>
          <li>
            <NavLink to="/boys"
            className={({ isActive }) => 
              `${isActive ? "text-gray-400" : "text-[#121212]"} hover:text-gray-400 transition-all`
            }>WOMEN</NavLink>
          </li>
          <li>
            <NavLink to="/ourstory"
            className={({ isActive }) => 
              `${isActive ? "text-gray-400" : "text-[#121212]"} hover:text-gray-400 transition-all`
            }>OUR STORY</NavLink>
          </li>
      </ul>

      

    </section>
        
    </nav>
    </>
  )

}

export default Navbar

