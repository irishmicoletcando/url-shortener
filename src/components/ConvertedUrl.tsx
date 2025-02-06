import { useState } from "react";
import { useConvertedUrl } from "../context/ConvertedUrlContext";

const ConvertedUrl = () => {
  const { urls } = useConvertedUrl();
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    });
  };

  if (!urls || urls.length === 0) {
    return <div className="text-center py-5">No URLs found.</div>;
  }

  return (
    <div className="mx-4 md:mx-24 mt-4 md:mt-6">
      <ul className="space-y-4">
        {urls.map((urlPair, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <p className="text-very-dark-violet font-semibold break-words md:truncate w-full md:w-auto">
                {urlPair.originalUrl}
              </p>

              <hr className="border-t border-gray w-full mx-auto md:hidden" />

              <div className="flex flex-col md:flex-row items-center gap-4">
                <a
                  href={urlPair.shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan font-semibold hover:underline break-words md:truncate w-full md:w-auto"
                >
                  {urlPair.shortenedUrl}
                </a>

                <button
                  onClick={() => copyToClipboard(urlPair.shortenedUrl)}
                  className={`px-4 py-2 text-white w-full md:w-36 rounded-md text-center transition-all duration-200 ${
                    copiedUrl === urlPair.shortenedUrl ? "bg-very-dark-violet" : "bg-cyan hover:bg-light-cyan"
                  }`}
                >
                  {copiedUrl === urlPair.shortenedUrl ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConvertedUrl;