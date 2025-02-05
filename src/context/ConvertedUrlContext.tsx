import { createContext, useContext, useState, ReactNode } from 'react';

interface ConvertedUrlContextType {
  convertedUrl: string | null;
  setConvertedUrl: (url: string | null) => void;
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
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);

  return (
    <ConvertedUrlContext.Provider value={{ convertedUrl, setConvertedUrl }}>
      {children}
    </ConvertedUrlContext.Provider>
  );
};
