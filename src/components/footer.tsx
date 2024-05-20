import Link from 'next/link';
import { FaCopyright, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
export default function Footer() {

    const date = new Date().getFullYear();
    return (
        
        <footer className="w-full">
        <div className="flex flex-row items-center justify-between p-6">

          <div className="items-center justify-between grow">
        
          <p className="text-sm break-all">
          <FaCopyright className="inline-block" /> Copyright {date}, Joshua Connor | <Link href="/privacy">Privacy Policy</Link> <br />
          Preferred contact method is through <Link href="https://www.linkedin.com/in/connorjoshua/">linked in</Link> app.
          </p>

          </div>

          <div className="items-center justify-between text-right">

            <a 
              href="https://www.linkedin.com/in/connorjoshua/"
              className="pl-3 inline-block"
              target="_blank"
              rel="opener"
              >
                <FaLinkedin className="text-3xl" />
              </a>

              <a 
              href="https://github.com/focus9345/"
              className="pl-3 inline-block"
              target="_blank"
              rel="opener"
              >
                <FaGithub className="text-3xl" />
              </a>

              <a 
              href="https://www.instagram.com/joshuaconnor8345/"
              className="pl-3 inline-block"
              target="_blank"
              rel="opener"
              >
                <FaInstagram className="text-3xl" />
              </a>


          </div>
        
{/*
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
    */}
      </div>
        </footer>
    )
}