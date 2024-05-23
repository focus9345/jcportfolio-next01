import Link from 'next/link';
import { FaCopyright, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
export default function Footer() {

    const date = new Date().getFullYear();
    return (
        
        <footer className="w-full">
        <div className="flex flex-row items-center justify-between p-6">

          <div className="items-center justify-between grow">
        
          <p className="text-sm text-balance">
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
      </div>
        </footer>
    )
}