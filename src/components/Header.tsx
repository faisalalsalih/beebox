import facebook from "../assets/svg/Facebook.svg"
import twitter from "../assets/svg/Twitter.svg"
import instagram from "../assets/svg/Instagram.svg"
import linkedin from "../assets/svg/Linkedin.svg"
import { useTheme } from '@/context/ThemeContext'
import sun from "../assets/svg/Sun.svg"
import moon from "../assets/svg/moon.svg"

const Header = () => {


  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-[#121212] w-full h-8 flex items-center justify-center">

      <nav className="w-3xl h-full flex items-center justify-between">

        <ul className="flex items-center gap-2">

          <li>
            <a href="#facebook">
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>
          </li>

          <li>
            <a href="#twitter">
              <img src={twitter} alt="Twitter" className="w-6 h-6" />
            </a>
          </li>


          <li>
            <a href="#linkedin">
              <img src={linkedin} alt="Linkedin" className="w-6 h-6" />
            </a>
          </li>


          <li>
            <a href="#instagram">
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </a>
          </li>

        </ul>


        <button onClick={toggleTheme} className="cursor-pointer">
          {
            theme === 'light' ? (
              <img src={moon} alt="Moon" className="w-6 h-6" />
            ) : (
              <img src={sun} alt="Sun" className="w-6 h-6" />
            )
          }
        </button>

      </nav>

    </header>
  );

}

export default Header
