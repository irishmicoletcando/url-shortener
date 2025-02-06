import GetStartedButton from "./GetStartedButton"

const BoostLinks = () => {
  return (
    <div className="w-full py-12 flex flex-col items-center h-auto bg-boost-desktop bg-cover bg-dark-violet bg-no-repeat bg-center">
      <p className="px-3 text-white font-bold text-center text-3xl md:text-4xl mb-5">Boost your links today!</p>
      <GetStartedButton />
    </div>
  )
}

export default BoostLinks