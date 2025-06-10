import { ChevronDownCircleIcon } from "lucide-react";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white ">
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

      <section className="bg-lightbg  flex flex-col justify-center items-center">
        <div className="w-[50%] text-center pt-11 mt-11 ">
          <h2 className="text-3xl pt-11 font-bold mb-2 mt-2 text-blue-950">
            Hi, I am Akash Saha
          </h2>
          <h3 className="text-lg">
            Frontend Developer passionate about creating beautiful,
            user-friendly web experiences with React and modern CSS.
          </h3>
        </div>
        <div className="px-4 font-bold text-highlightedColor text-3xl mb-11 pb-11 pt-7">
          <ChevronDownCircleIcon className="mb-11" />
        </div>
        <br />
      </section>
      <section className="bg-sky-50 ">
        <div className="flex items-center w-[80%] mx-auto my-8 py-11">
          <div className="flex-grow h-px bg-gray-400"></div>
          <h2 className="px-4 text-2xl font-bold text-gray-900">ABOUT ME</h2>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>
        <div className="flex items-center w-[80%] mx-auto my-8 py-11">
          <div className="flex flex-col gap-4 w-[65%]">
            <p>
              As a dedicated and ambitious Frontend Web Developer, I specialize
              in building modern, responsive, and user-centric interfaces using
              React.js, Next.js, and Tailwind CSS. While I have a solid
              background in the MERN stack and full-stack development, my true
              passion lies in frontend work—where performance, design precision,
              and user experience intersect.
            </p>
            <p>
              I hold a B.Sc. in Computer Science from East West University and
              an M.Sc. in Computer Science from Jahangirnagar University.
              Currently, I am working as a Software Engineer. My academic
              background, combined with professional experience, enables me to
              approach and solve complex problems efficiently and effectively.
            </p>
          </div>
          <div className="w-[34%] p-6 flex justify-center">
            <div className="p-[4px] rounded-full bg-gradient-to-r from-primary via-black to-primary">
              <img
                src="/imageMeProfile.jpg"
                alt="Profile"
                className="w-[220px] h-[220px] rounded-full object-cover bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
