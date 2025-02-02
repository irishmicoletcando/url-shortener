import illustrationWorking from "../assets/illustration-working.svg"

const Heading = () => {
  return (
    <div className="flex flex-row mx-24">
      <div className="w-1/2 min-h-[600px] flex flex-col justify-center space-y-4">
          <div className="flex flex-col justify-center">
            <h1 className="font-extrabold text-7xl leading-tight text-very-dark-blue">
              More than just shorter links
            </h1>
            <p className="text-grayish-violet font-medium mb-5">
              Build your brand's recognition and get detailed insights on how your links are performing.
            </p>
          </div>
          <button className="bg-cyan text-white font-bold rounded-full px-8 py-3 hover:bg-light-cyan mt-4 w-fit">
            Get Started
          </button>
      </div>

      <div className="flex items-center">
        <img 
          src={illustrationWorking} 
          alt="Person working"
          className="transform translate-x-16 w-[120%] max-w-none"
        />
      </div>

    </div>
  )
}

export default Heading