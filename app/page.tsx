'use client'
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="text-green-900 font-f ">
      <div className="flex flex-col items-center gap-10 text-center">
          <div className="mt-24 text-9xl ">
            Siteify
          </div>

          <div className="mt-20 text-4xl ">
            Beautiful, AI-Enhanced portfolio websites in <span className="p-1 bg-green-400 rounded-sm">seconds</span>
          </div>

          <div>
            <button onClick={() => signIn()} className="p-2 text-white duration-200 bg-green-900 rounded-sm hover:scale-110 active:scale-90">
              <Link href={'/auth'}>
              Get Started
              </Link>
              
            </button>
          </div>

          <div className="flex self-start w-full mt-24 bg-green-900 h-64">
            <div className="flex flex-col justify-center w-1/6 h-full text-green-900 bg-yellow-50">
              <p className="m-6 text-5xl ">
                How does it work?
              </p>
            </div>
            <div className="flex flex-col justify-center w-5/6 h-full p-20 text-3xl text-white bg-green-900">
              Siteify allows users to create beautiful ai-enhanced portfolio websites, automatically integrated with their projects, all with a few simple clicks! 
            </div>

          </div>
      </div>
    </div>
  )
}
