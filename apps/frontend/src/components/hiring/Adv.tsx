
import AdvCard from "./card" 


const AdvC: React.FC = () => {
  const cardsData = [
    {
      title: 'Carpenter',
      description: 'a skilled carpenter in your area , offering expert craftmanship for future making, repairs and custom woodwork, ensuring quality and durability in every project'
    },
    {
      title: 'Electrician',
      description: 'An experienced electrician in your area, providing reliable services for wiring,repairs, and installations, ensuring safety and efficiency in all electrical work'
    },
    {
      title: 'Plumber',
      description: 'A dependable plumber in your area, specializing in repairs, installations, and maintenance of pipes, fixtures, and drainage, systems for a hassle-free experience'
    },
    {
      title: 'Painter',
      description: 'A professional painter in your area, offering high-quality interior and exterior painting services to refresh and beautify your spaces with precision and care'
    },
    {
      title: 'Mechanic',
      description: 'A skilled mechanic in your area, providing expert vehicle repair and maintenance services, ensuring your car runs smoothly and reliably.'
    }
  ];

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto mt-[20vh]">
      <h1 className="text-5xl text-slate-900 font-bold dark:text-white">Expert <span className="text-blue-600">Members</span> Nationwide</h1>
      <p className="text-gray-600 mt-10 dark:text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa fuga aperiam laboriosam maxime a maiores sapiente nostrum cumque sit voluptas illum, quis deleniti nobis, ducimus cum tempore quasi repellendus.</p>
        <div className="max-w-screen-xl flex flex-row gap-7 justify-between  mt-[10vh] ">
          {cardsData.map((card, index) => (
            <AdvCard key={index} title={card.title} description={card.description} />
          ))}
        </div>
      
    </div>
  );
}

export default AdvC;
