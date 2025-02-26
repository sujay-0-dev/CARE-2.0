import log_img from "../../assets/calling-animate.svg";

export default function CallNow(): JSX.Element {
  return (
    <main className="mt-[4.5rem] h-screen flex flex-col items-center justify-center bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] dark:bg-slate-900 bg-cover">
      <div className="text-center">
        <h1 className="text-4xl font-medium mt-10 dark:text-white">
          Connect with <span className="text-blue-600">Phone Support</span>
        </h1>
        <p className="mt-2 font-semibold">Enter your number below, and we will call you.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[250px] sm:max-w-[800px] mb-[50vh]">
        <div className="w-full h-[300px] hidden md:block">
          <img className="" src={log_img} alt="Call Now illustration" />
        </div>
        <div className="p-5 flex flex-col justify-around">
          <form className="flex flex-col items-center justify-">
            <div className="mt-3">
              <label htmlFor="phone" className="poppins-medium font-semibold ml-1 text-slate-600 dark:text-slate-300">
                Phone Number
              </label>
              <input
                id="phone"
                className="border text-black border-black px-3 py-2 w-[350px] rounded-2xl focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 mt-3 dark:border-slate-600"
                type="number"
                placeholder="Enter your number"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-[220px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
