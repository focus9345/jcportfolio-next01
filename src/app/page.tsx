
import Image from "next/image";
import Ratio from '../../public/Ratio-1024x648.png';

export default function Home() {
  return (
    <div className="flex flex-col p-6 w-full justify-evenly">
      
      <div className="flex flex-row mt-2 mb-4 md:mx-15 rounded-md border-zinc-500 border-dotted border-2 min-h-40 w-fix">

        <div className="flex-1 w-64">
          <Image
            src={Ratio}
            className="shadow-xl h-auto max-w-full rounded-lg"
            alt="Placeholder"
            width={200}
            height={200}
            />
        </div>
        <div className="flex-auto">
        <h1>Hi, Im Joshua Connor</h1>
        <p>I am a Front-End / Full-Stack Developer. Im currently looking for my next opportunity to learn, grow, share my knowledge, and make something great.</p>
        <button> Visit Portfolio </button>
        </div>
        
      </div>
      <div className="mt-2 mb-4 md:mx-15 rounded-md border-zinc-500 border-dotted border-2 min-h-40 w-fix">
        <h2>Software development teams</h2>
        <p>Trust is at the heart of teamwork quality and preformance. Its earned with communication, cohesion, mutual support, and value sharing. </p>
        <button> More On Me </button>
      </div>
      <div className="mt-2 mb-4 md:mx-15 rounded-md border-zinc-500 border-dotted border-2 min-h-40 w-fix">
        <h2>Listen before solving</h2>
        <p>One thing experience has taught me is that software that attempts to solve business problems is best solved when we truly understand the users process.</p>
        <button> Contact Me </button>
      </div>
     </div>
  );
}
