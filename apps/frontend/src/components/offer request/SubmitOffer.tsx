import { useState } from "react";
import offer_img from "../../assets/submit-offer.svg";

export default function SubmitOffer(): JSX.Element {
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
    console.log({ description, location, file });
  };

  return (
    <main className="w-full min-h-[110vh] flex flex-col bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] dark:bg-slate-900 bg-cover">
      <h1 className="text-4xl mt-20 mb-4 ml-auto mr-auto font-bold dark:text-white text-center">
        Submit Your <span className="text-blue-600">Offer</span>
      </h1>
      <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl lg:text-base xl:text-xl dark:text-white mb-1 text-center">
        Provide a detailed description of your proposed solution.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto sm:max-w-[800px] rounded-2xl dark:bg-slate-700 p-4">
        <div className="w-full h-[250px] md:h-[300px] hidden md:block">
          <img className="mt-8 max-w-full h-auto" src={offer_img} alt="Submit offer illustration" />
        </div>
        <div className="flex flex-col justify-around w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="description" className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">
                Description
              </label>
              <textarea
                id="description"
                className="border border-black px-3 py-2 w-full rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 mt-2 dark:border-slate-600"
                placeholder="Enter offer details"
                value={description}
                onChange={handleDescriptionChange}
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">
                Location
              </label>
              <input
                id="location"
                className="border border-black px-3 py-2 w-full rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 mt-2 dark:border-slate-600"
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={handleLocationChange}
                required
              />
            </div>
            <div>
              <label htmlFor="file" className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">
                Upload File
              </label>
              <input
                id="file"
                className="border border-black px-3 py-2 w-full rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 dark:bg-slate-600 mt-2 dark:border-slate-600"
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-[200px] mx-auto mt-4 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold"
            >
              Submit Offer
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
