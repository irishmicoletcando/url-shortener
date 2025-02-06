import illustrationWorking from "../assets/illustration-working.svg";
import GetStartedButton from "./GetStartedButton";

const Heading = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center mx-6 md:mx-24 sm:my-20 text-center md:text-left">
      {/* Left Section (Text) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 mb-10 sm:mb-0">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="font-extrabold text-4xl md:text-6xl leading-tight text-very-dark-blue mb-5">
            More than just shorter links
          </h1>
          <p className="text-grayish-violet font-medium mb-5">
            Build your brand's recognition and get detailed insights on how your links are performing.
          </p>
          <GetStartedButton />
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center md:justify-end w-full md:w-[50%] lg:w-[45%] xl:w-[40%] md:mb-0">
        <img
          src={illustrationWorking}
          alt="Person working"
          className="w-[80%] sm:w-[90%] md:w-full lg:w-[110%] xl:w-[120%] transform sm:translate-x-40"
        />
      </div>
    </div>
  );
};

export default Heading;
