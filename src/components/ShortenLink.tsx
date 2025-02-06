import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { useConvertedUrl } from "../context/ConvertedUrlContext";
import { useEffect } from "react";

interface UrlType {
  url: string;
  inputtedUrl: string;
  originalUrl: string;
}

const ShortenLink = () => {
  const { register, handleSubmit, reset, formState: { errors }, control } = useForm<UrlType>();
  const { setConvertedUrl } = useConvertedUrl();
  
  const inputtedUrl = useWatch<UrlType>({
    control,
    name: "url"
  });

  useEffect(() => {
    if (inputtedUrl) {
      const savedUrls = localStorage.getItem("inputtedUrl");
      const urls = savedUrls ? JSON.parse(savedUrls) : [];

      // Store both the original and the shortened URL
      const urlPair = { originalUrl: inputtedUrl, shortenedUrl: "" };

      // Add the new URL pair to the array
      urls.push(urlPair);

      // Save the updated array of URL pairs to localStorage
      localStorage.setItem("inputtedUrl", JSON.stringify(urls));
    }
  }, [inputtedUrl]);

  const onSubmit: SubmitHandler<UrlType> = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: data.url }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const responseData = await response.json();
      const shortenedUrl = responseData.result_url;
      setConvertedUrl(shortenedUrl);

      // Get the current list of URLs from localStorage
      const savedUrls = localStorage.getItem("inputtedUrl");
      const urls = savedUrls ? JSON.parse(savedUrls) : [];

      // Find the URL pair that was just added and update its shortened URL
      const lastUrlPair = urls.find(
        (pair: { originalUrl: string; shortenedUrl: string }) => pair.originalUrl === data.url
      );

      // Update the shortened URL
      if (lastUrlPair) {
        lastUrlPair.shortenedUrl = shortenedUrl;

        // Save the updated list of URL pairs
        localStorage.setItem("inputtedUrl", JSON.stringify(urls));
      } else {
        console.log("URL pair not found.");
      }

      console.log("Converted URL: ", shortenedUrl);
      reset();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="mx-4 md:mx-24 z-50 p-6 md:p-10 h-auto md:h-36 bg-shorten-desktop bg-cover bg-very-dark-violet bg-no-repeat bg-center rounded-lg">
      <form 
        className="flex flex-col md:flex-row items-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-1 w-full">
          <input
            type="text"
            placeholder="Shorten a link here..."
            {...register("url", {
              required: "Please add a link"
            })}
            className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 ${
              errors.url ? "focus:ring-red" : "focus:ring-cyan"
            }`}
          />
          {errors.url && (
            <p className="text-sm italic text-red mt-2">{errors.url.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full md:w-auto text-white bg-cyan px-6 md:px-7 py-3 md:py-4 rounded-lg font-semibold hover:bg-light-cyan transition-colors"
        >
          Shorten it!
        </button>
      </form>
    </div>
  );
};

export default ShortenLink;
