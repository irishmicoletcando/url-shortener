import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between font-semibold text-grayish-violet text-sm mx-24">
      <div className="flex flex-row items-center">
        <img src={logo}/>

        <ul className="flex flex-row space-x-8 ml-10">
          <li className="hover:text-very-dark-blue hover:cursor-pointer">Features</li>
          <li className="hover:text-very-dark-blue hover:cursor-pointer">Pricing</li>
          <li className="hover:text-very-dark-blue hover:cursor-pointer">Resources</li>
        </ul>
      </div>

      <div className="flex flex-row space-x-8 items-center">
        <button className="hover:text-very-dark-blue hover:cursor-pointer">Login</button>
        <button className="bg-cyan text-white rounded-3xl px-4 py-2 hover:opacity-70">Sign Up</button>  
      </div>
    </div>
  )
}

export default Navbar