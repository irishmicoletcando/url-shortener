import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UrlPair {
  originalUrl: string;
  shortenedUrl: string;
}

interface ConvertedUrlContextType {
  urls: UrlPair[];
  setUrls: (urls: UrlPair[]) => void;
}

const ConvertedUrlContext = createContext<ConvertedUrlContextType | undefined>(undefined);

export const useConvertedUrl = () => {
  const context = useContext(ConvertedUrlContext);
  if (!context) {
    throw new Error('useConvertedUrl must be used within a ConvertedUrlProvider');
  }
  return context;
};

interface ConvertedUrlProviderProps {
  children: ReactNode;
}

export const ConvertedUrlProvider: React.FC<ConvertedUrlProviderProps> = ({ children }) => {
  const [urls, setUrls] = useState<{ originalUrl: string; shortenedUrl: string }[]>(() => {
    // Initialize state from localStorage
    const savedUrls = localStorage.getItem("inputtedUrl");
    return savedUrls ? JSON.parse(savedUrls) : [];
  });

  useEffect(() => {
    // Sync the state with localStorage
    localStorage.setItem("inputtedUrl", JSON.stringify(urls));
  }, [urls]);

  return (
    <ConvertedUrlContext.Provider value={{ urls, setUrls }}>
      {children}
    </ConvertedUrlContext.Provider>
  );
};
