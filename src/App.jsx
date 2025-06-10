import { ChevronDownCircleIcon } from "lucide-react";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white h-[11%]">
        <div className="w-[90%] mx-auto flex justify-between items-center p-4">
          <div>
            <h1 className="text-3xl font-bold font-roboto pl-6 text-primary">
              Portfolio
            </h1>
          </div>

          <nav className="py-2">
            <ul className="flex gap-8 list-none">
              <li className="pb-2 border-b-2 border-transparent hover:font-bold hover:text-highlightedColor hover:border-highlightedColor transition-all duration-300 text-lg">
                <a href="#about">About</a>
              </li>
              <li className="pb-2 border-b-2 border-transparent hover:font-bold hover:text-highlightedColor hover:border-highlightedColor transition-all duration-300 text-lg">
                <a href="#experience">Experience</a>
              </li>
              <li className="pb-2 border-b-2 border-transparent hover:font-bold hover:text-highlightedColor hover:border-highlightedColor transition-all duration-300 text-lg">
                <a href="#project">Project</a>
              </li>
              <li className="pb-2 border-b-2 border-transparent hover:font-bold hover:text-highlightedColor hover:border-highlightedColor transition-all duration-300 text-lg">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-2">
            <button className="px-6 py-2 bg-white text-black rounded-lg border border-gray-300 hover:bg-highlightedColor hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
              Resume
            </button>

            <button className="px-6 py-2 bg-white text-black rounded-lg border border-gray-300 hover:bg-highlightedColor hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
              Hire Me
            </button>
          </div>
        </div>
      </header>

      <section className="bg-lightbg h-[89%] flex flex-col justify-center items-center">
        <div className="w-[50%] text-center">
          <h2 className="text-3xl font-bold mb-2 text-blue-950">
            Hi, I am Akash Saha
          </h2>
          <h3 className="text-lg">
            Frontend Developer passionate about creating beautiful,
            user-friendly web experiences with React and modern CSS.
          </h3>
        </div>
        <div className="p-4 font-bold text-highlightedColor text-3xl">
          <ChevronDownCircleIcon />
        </div>
      </section>
    </div>
  );
}

export default App;
