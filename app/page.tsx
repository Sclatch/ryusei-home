import { FaGithub, FaServer } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center bg-stone-300">
      <div className="flex min-w-screen bg-stone-500 flex-col py-16 pl-32">
        <div className="text-stone-900">
          <h1 className="font-bodoni-moda text-7xl font-bold" >Ryusei Homepage</h1>
          <p className="font-neuton text-2xl"> Sclatch's personal website landing page</p>
        </div>
        <div className="mt-4 flex flex-row gap-3">
          <button className="rounded-3xl bg-stone-900 px-6 py-3 text-stone-300 hover:bg-stone-700">
            <div className="flex flex-row items-center gap-2">
              <FaServer className="w-4.5 h-4.5" />
              <p>Services</p>
            </div>
          </button>
          <a 
          href="https://github.com/sclatch"
          className="rounded-3xl bg-stone-900 px-6 py-3 text-stone-300 hover:bg-stone-700">
            <div className="flex flex-row items-center gap-2">
              <FaGithub className="w-4.5 h-4.5" />
              <p>Github</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
