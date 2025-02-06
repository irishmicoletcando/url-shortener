import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { useConvertedUrl } from '../context/ConvertedUrlContext';
import { useEffect } from 'react';

interface urlType {
  url: string;
  inputtedUrl: string;
}

const ShortenLink = () => {
  const {register, handleSubmit, reset, formState: {errors}, control} = useForm<urlType>();
  const { setConvertedUrl } = useConvertedUrl();
  
  const inputtedUrl = useWatch<urlType>({
    control, 
    name: "url"
  });

  useEffect(() => {
    if (inputtedUrl) {
      localStorage.setItem("inputtedUrl", inputtedUrl)
    }
  }, [inputtedUrl])

  const onSubmit: SubmitHandler<urlType> = data => {
    const postData = async () => {

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
        // console.log("Full response: ", responseData);
        setConvertedUrl(responseData.result_url);
        console.log("Converted URL: ", responseData.result_url);
        reset();
      } catch (error) {
        console.log("Error: ", error)
      }
    } 

    postData();
  }

  return (
    <div className='mx-24 z-50 p-10 h-36 bg-shorten-desktop bg-cover bg-very-dark-violet bg-no-repeat bg-center rounded-lg'>
      <form className="flex gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-1">
            <input
              type="text"
              placeholder="Shorten a link here..."
              {...register("url", {
                required: "Please add a link"
              })}
              className={`w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 ${
                errors.url 
                  ? 'focus:ring-red' 
                  : 'focus:ring-cyan'
              }`}
            />
            {errors.url && <p className='text-sm italic text-red mt-2 outline-red'>{errors.url.message}</p>}
        </div>

        <button type="submit" className="self-start whitespace-nowrap text-white bg-cyan px-7 py-4 rounded-lg font-semibold hover:bg-light-cyan transition-colors">
          Shorten it!
        </button>

      </form>
    </div>
  )
}

export default ShortenLink;