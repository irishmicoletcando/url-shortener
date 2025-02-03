import AdvancedStatisticsBox from "./AdvancedStatisticsBox";
import brandRecognition from "../assets/icon-brand-recognition.svg";
import detailedRecords from "../assets/icon-detailed-records.svg";
import fullyCustomizable from "../assets/icon-fully-customizable.svg";

const AdvancedStatistics = () => {
  const boxData = [
    {
      header: "Brand Recognition",
      icon: brandRecognition,
      content:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      header: "Detailed Records",
      icon: detailedRecords,
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      header: "Fully Customizable",
      icon: fullyCustomizable,
      content:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <div className="bg-gray/10 py-20 relative">
      <div className="max-w-5xl mx-auto space-y-12 mb-20">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-very-dark-blue">
            Advanced Statistics
          </h2>
          <p className="text-grayish-violet font-semibold">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boxData.map((box, index) => (
            <div
              key={index}
              className={`relative ${
                index === 0
                  ? "transform -translate-x-12"
                  : index === 1
                  ? "transform translate-y-12"
                  : "transform translate-x-12 translate-y-20"
              }`}
            >
              <AdvancedStatisticsBox
                header={box.header}
                icon={box.icon}
                content={box.content}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-lg absolute inset-x-0 top-1/2 transform translate-y-18 bg-cyan h-2 z-[-1] mx-auto"></div>
    </div>
  );
};

export default AdvancedStatistics;