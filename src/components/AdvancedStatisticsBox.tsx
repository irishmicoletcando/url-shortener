interface Props {
  header: string;
  icon: string;
  content: string;
}

const AdvancedStatisticsBox: React.FC<Props> = ({ header, icon, content }) => {
  return (
    <div className="relative bg-white rounded-md shadow-md p-6 flex flex-col space-y-6">
      <div className="bg-very-dark-violet rounded-full w-20 h-20 flex items-center justify-center -mt-16">
        <img src={icon} className="w-9 h-9" alt={header} />
      </div>
      <h3 className="text-xl font-bold text-very-dark-blue">{header}</h3>
      <p className="text-grayish-violet">{content}</p>
    </div>
  );
};

export default AdvancedStatisticsBox;