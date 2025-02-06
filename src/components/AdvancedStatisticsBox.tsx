interface Props {
  header: string;
  icon: string;
  content: string;
}

const AdvancedStatisticsBox: React.FC<Props> = ({ header, icon, content }) => {
  return (
    <div className="relative bg-white min-h-[300px] rounded-lg shadow-lg p-8 flex flex-col space-y-6 text-center hover:shadow-2xl transition-shadow duration-300">
      <div className="bg-very-dark-violet rounded-full w-20 h-20 flex items-center justify-center mx-auto -mt-14 shadow-md">
        <img src={icon} className="w-10 h-10" alt={header} />
      </div>
      <h3 className="text-2xl font-bold text-very-dark-blue">{header}</h3>
      <p className="text-grayish-violet leading-relaxed text-lg">{content}</p>
    </div>
  );
};

export default AdvancedStatisticsBox;