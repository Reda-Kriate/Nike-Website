import {navLinks} from './data.js'
import { headerLogo } from '../assets/images/index.js'
import { hamburger } from '../assets/icons/index.js'

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
        <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(((items,index) =>(
            <li key={index}>
              <a href={items.href} className="font-montserrat text-lg leading-normal text-slate-gray hover:text-slate-900">
              {items.label}
              </a>
            </li>
          ) 
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="humberger" width={25} height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav