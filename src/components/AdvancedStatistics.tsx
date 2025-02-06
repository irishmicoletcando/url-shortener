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
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
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
    <div className="bg-gray-100 py-20 relative px-6 md:px-24">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-very-dark-blue">Advanced Statistics</h2>
        <p className="text-grayish-violet font-medium mt-4 text-lg">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>
      <div className="relative grid gap-16 lg:grid-cols-3 items-start">
        {boxData.map((box, index) => (
          <div key={index} className="relative flex justify-center">
            <AdvancedStatisticsBox header={box.header} icon={box.icon} content={box.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedStatistics;
