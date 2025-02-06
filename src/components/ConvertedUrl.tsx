import { useState, useEffect } from "react";

const ConvertedUrl = () => {
  const [urls, setUrls] = useState<{ originalUrl: string; shortenedUrl: string }[] | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadUrls = () => {
      const savedUrls = localStorage.getItem("inputtedUrl");
      if (savedUrls) {
        try {
          const parsedUrls = JSON.parse(savedUrls);
          if (Array.isArray(parsedUrls)) {
            setUrls(parsedUrls);
          } else {
            setUrls([]); // Reset if not an array
          }
        } catch (error) {
          console.error("Error parsing localStorage data:", error);
          setUrls([]);
        }
      } else {
        setUrls([]);
      }
    };

    loadUrls();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "inputtedUrl") {
        loadUrls();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (urls === null) {
    return <div className="text-center py-5">Loading...</div>;
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    });
  };

  return (
    <div className="mx-4 md:mx-24 mt-4 md:mt-6">
      {urls.length > 0 ? (
        <ul className="space-y-4">
          {urls.map((urlPair, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                
                {/* Original URL */}
                <p className="text-very-dark-violet font-semibold break-words md:truncate w-full md:w-auto">
                  {urlPair.originalUrl}
                </p>

                <hr className="border-t border-gray w-full mx-auto md:hidden" />

                <div className="flex flex-col md:flex-row items-center gap-4">
                  
                  {/* Shortened URL */}
                  <a
                    href={urlPair.shortenedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan font-semibold hover:underline break-words md:truncate w-full md:w-auto"
                  >
                    {urlPair.shortenedUrl}
                  </a>

                  {/* Copy Button */}
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
      ) : (
        <p className="text-center py-5">No URLs found.</p>
      )}
    </div>
  );
};

export default ConvertedUrl;
