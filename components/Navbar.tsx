'use client'

import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  repoUrl: string;
  downloadUrl: string;
}

export default function Navbar({ repoUrl, downloadUrl }: NavbarProps) {
  return (
    <nav className="flex justify-between items-center px-6 py-3 border-b bg-black sticky top-0 z-50">

        <div className="flex">
            <Image
            src="/pr-bot-review-logo1.jpeg"   
            alt="PR Bot Logo"
            width={30}
            height={30}
            className="rounded-lg"
            />

            <h2 className="text-xl ml-5 font-semibold">
                PR Review Bot
            </h2>
        </div>


      

      <div className="flex items-center gap-4">

        <a
          href={downloadUrl}
          className="px-4 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-900 transition"
        >
          Download
        </a>

        <Link href={repoUrl} target="_blank">
          <Image
            src="/git-logo.png"
            alt="GitHub Repo"            
            width={30}
            height={30}
            className="cursor-pointer rounded-lg"
          />
        </Link>

      </div>
    </nav>
  );
}
