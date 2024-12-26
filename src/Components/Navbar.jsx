import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
const Navbar = () => {

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact us', href: '/contact-us' },
    { name: 'FAQs', href: '/faqs' }
  ]

  const path = useLocation()
  return (
      <nav className="bg-gradient-to-r to-blue-500 p-4 from-[#29349D]">
          <div className="flex items-center">
             <h3 className="text-white border py-4 px-2 rounded-full w-fit font-bold text-xl"><span className="text-blue-400">I</span>vote</h3>

             <div className="flex space-x-6 items-center">
                {
                  navLinks.map((link, idx) => (
                    <div> 
                        <Link className={`text-white py-2 transition duration-300 ${path.pathname === link.href ? 'border-b-2 font-semibold': 'hover:border-b-2'}`} key={idx} to={link.href}>{link.name}</Link>
                    </div>
                  ))
                }

                <button className="text-white border py-2 px-8 rounded ">Vote</button>
             </div>
          </div>
      </nav>
  )
}
export default Navbar