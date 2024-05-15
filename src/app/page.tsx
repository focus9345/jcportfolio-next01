
import Image from "next/image";
import DevImage from '../../public/pexels-pixabay-265152.jpg';
import TeamImage from '../../public/pexels-fauxels-3183150.jpg';
import SolveImage from '../../public/pexels-hillaryfox-1595385.jpg';

export default function Home() {
  return (
    <>

      <div className="flex flex-col md:flex-row w-full">
        <div className="basis-1/2 md:min-h-full p-4 md:p-10">
          <div className="flex flex-col w-full mb-10">
            <div className=" mb-5">
              <Image
                src={DevImage}
                className="shadow-xl h-auto max-w-full rounded-xl"
                alt="Placeholder"
              />
            </div>
            <div className="">
              <h1 className="mb-4">Hi, Im Joshua Connor</h1>
              <p>I am a Front-End / Full-Stack Developer. Im currently looking for my next opportunity to learn, grow, share my knowledge, and make something great.</p>
              <button className="my-3 px-5 py-3 bg-sky-500 hover:bg-sky-700 text-zinc-100 transition duration-150 rounded ease-out hover:ease-in float-right"> Visit Portfolio </button>

            </div>
          </div>

        </div>
        <div className=" basis-1/2 md:min-h-full p-4 md:p-10
    ">

          <div className="flex flex-col md:flex-row w-full mb-10">
            <div className=" mr-10 md:basis-1/3 hidden md:block">
              <Image
                src={TeamImage}
                className="shadow-xl rounded-xl object-cover h-52 w-full"
                alt="Placeholder"
              />
            </div>
            <div className=" md:basis-2/3">
              <h2>Software Development Teams</h2>
              <p>Trust is at the heart of teamwork quality and preformance. Its earned with communication, cohesion, mutual support, and value sharing. </p>
              <button className="my-3 px-5 py-3 bg-sky-500 hover:bg-sky-700 text-zinc-100 transition duration-150 rounded ease-out hover:ease-in float-right"> More On Me </button>

            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full mb-10">
            <div className="mr-10 md:basis-1/3 hidden md:block">
              <Image
                src={SolveImage}
                className="shadow-xl object-cover h-52 w-full rounded-xl"
                alt="Placeholder"
              />
            </div>
            <div className=" md:basis-2/3">
              <h2>Listen Before Solving</h2>
              <p>One thing experience has taught me is when software attempts to solve business problems its best to truly understand the users and their goals, aiming making their process easier.</p>
              <button className="my-3 px-5 py-3 bg-sky-500 hover:bg-sky-700 text-zinc-100 transition duration-150 rounded ease-out hover:ease-in float-right"> Contact Me </button>

            </div>
          </div>


        </div>
      </div>
    </>
  );
}
