interface Props {
  convertedUrl: string;
}

const ConvertedUrl: React.FC<Props> = ( { convertedUrl }) => {
  return (
    <div>
      <p className="mt-4 text-white">
          Converted URL: <a href={convertedUrl} target="_blank" className="text-cyan underline">{convertedUrl}</a>
        </p>
    </div>
  )
}

export default ConvertedUrl