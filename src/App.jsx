import {
  ChevronDownCircleIcon,
  Github,
  Component,
  Linkedin,
  Facebook,
} from "lucide-react";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white ">
        <div className="w-[90%] mx-auto flex justify-between items-center p-4 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold font-roboto text-primary">
              Portfolio
            </h1>
          </div>

          <nav className="w-full md:w-auto mt-4 md:mt-0">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
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

          <div className="w-full md:w-auto flex justify-center md:justify-end gap-2 mt-4 md:mt-0">
            <button className="px-6 py-2 bg-white text-black rounded-lg border border-gray-300 hover:bg-highlightedColor hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
              Resume
            </button>
            <button className="px-6 py-2 bg-white text-black rounded-lg border border-gray-300 hover:bg-highlightedColor hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
              Hire Me
            </button>
          </div>
        </div>
      </header>
      <section className="bg-lightbg flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl text-center pt-11 mt-11">
          <h2 className="text-2xl sm:text-3xl pt-8 font-bold mb-2 text-blue-950">
            Hi, I am Akash Saha
          </h2>
          <h3 className="text-base sm:text-lg">
            Frontend Developer passionate about creating beautiful,
            user-friendly web experiences with React and modern CSS.
          </h3>
        </div>

        <div className="text-highlightedColor text-2xl sm:text-3xl font-bold mt-6 mb-11 pb-11">
          <ChevronDownCircleIcon className="mx-auto animate-bounce" />
        </div>
      </section>

      <section className="bg-lightbg">
        <div className="flex items-center w-[75%] mx-auto my-8 py-11">
          <div className="flex-grow h-px bg-gray-400"></div>
          <h2 className="px-4 text-2xl font-bold text-highlightedColor">
            ABOUT ME
          </h2>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>
        <div className="flex items-center w-[75%] mx-auto my-8 py-11 px-2">
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
          <div className="w-[35%] p-6 flex justify-center">
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
      <section className="bg-lightbg">
        <div className="flex  flex-col items-center w-[75%] mx-auto my-8 py-11">
          <div className="flex items-center w-full">
            <div className="flex-grow h-px bg-gray-400"></div>
            <h2 className="px-4 text-2xl font-bold text-highlightedColor">
              Experience
            </h2>
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>

          <div className="flex flex-col justify-center py-8 gap-8">
            <div className="flex  pl-6">
              <div className="w-[25%] flex flex-col items-center pr-6 border-r-2 border-gray-800">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-gray-700">Ultra-X BD Ltd</p>
                <div className="w-[80%] border-b-2 border-gray-600 my-2"></div>
                <p className="text-base text-gray-800">June 2022 - June 2025</p>
              </div>

              <div className="w-[75%] pl-8 space-y-4">
                <ul className="list-disc space-y-2 text-gray-800">
                  <li>
                    Developed and maintained scalable web applications using
                    React and Node.js, ensuring high performance and
                    cross-browser compatibility.
                  </li>
                  <li>
                    Collaborated with designers and backend engineers to
                    implement responsive UI/UX across multiple devices.
                  </li>
                  <li>
                    Improved application performance by 30% by optimizing
                    components and implementing lazy loading.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex  pl-6 pt-4">
              <div className="w-[75%] pl-8 space-y-4">
                <ul className="list-disc space-y-2 text-gray-800">
                  <li>
                    Developed and maintained scalable web applications using
                    React and Node.js, ensuring high performance and
                    cross-browser compatibility.
                  </li>
                  <li>
                    Collaborated with designers and backend engineers to
                    implement responsive UI/UX across multiple devices.
                  </li>
                  <li>
                    Improved application performance by 30% by optimizing
                    components and implementing lazy loading.
                  </li>
                </ul>
              </div>
              <div className="w-[25%] flex flex-col items-center pr-6 border-l-2 border-gray-800">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-gray-700">Ultra-X BD Ltd</p>
                <div className="w-[80%] border-b-2 border-gray-600 my-2"></div>
                <p className="text-base text-gray-800">June 2022 - June 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightbg">
        <div className="flex flex-col items-center w-[75%] mx-auto my-8 py-11">
          <div className="flex items-center w-full mb-8">
            <div className="flex-grow h-px bg-gray-400"></div>
            <h2 className="px-4 text-2xl font-bold text-highlightedColor">
              Featured Project
            </h2>
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>
          <div className="w-full flex flex-col justify-center py-6 ">
            <div className="flex justify-between gap-6 p-4">
              <div className="w-[45%]">
                <img
                  src="/portfolio_ss.png"
                  className="border border-gray-500 shadow-md"
                ></img>
              </div>
              <div className="w-[45%] flex flex-col py-6">
                <div className="flex flex-col border-b-4  border-gray-800">
                  <h3 className="text-xl py-2 font-bold">Personal Portfolio</h3>
                  <h4 className="pb-4">
                    Welcome to my portfolio website built with React, styled
                    using Tailwind CSS, and enhanced with DaisyUI components.
                  </h4>
                </div>
                <div className="py-2 flex justify-start gap-4">
                  <Github />
                  <Component />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center py-6 ">
            <div className="flex justify-between gap-6 p-4">
              <div className="w-[45%] flex flex-col py-6">
                <div className="flex flex-col border-b-4  border-gray-800">
                  <h3 className="text-xl py-2 font-bold">Furnio Website</h3>
                  <h4 className="pb-4">
                    Welcome to Furnio website built with React, styled using
                    Tailwind CSS, and enhanced with DaisyUI components.
                  </h4>
                </div>
                <div className="py-2 flex justify-start gap-4">
                  <Github />
                  <Component />
                </div>
              </div>
              <div className="w-[45%]">
                <img
                  src="/furnio_ss.png"
                  className="border border-gray-500 shadow-md"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightbg">
        <div className="flex flex-col items-center w-[75%] mx-auto my-8 py-11">
          <div className="flex items-center w-full mb-8">
            <div className="flex-grow h-px bg-gray-400"></div>
            <h2 className="px-4 text-2xl font-bold text-highlightedColor">
              Other Projects
            </h2>
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>
          <div className="w-full flex justify-between mx-auto gap-2">
            <div className="w-[49%] flex justify-between ">
              <div className="w-[40%] py-8">
                <img
                  src="lawliet_ss.png"
                  className="border border-gray-500 shadow-md"
                ></img>
              </div>
              <div className="w-[55%] flex flex-col py-6">
                <div className="flex flex-col border-b-4  border-gray-800">
                  <h3 className="text-xl py-2 font-bold">Lawliet Website</h3>
                  <h4 className="pb-4">
                    Welcome to Lawliet website built with React, styled using
                    Tailwind CSS, and enhanced with DaisyUI components.
                  </h4>
                </div>
                <div className="py-2 flex justify-start gap-4">
                  <Github />
                  <Component />
                </div>
              </div>
            </div>

            <div className="w-[49%] flex justify-between ">
              <div className="w-[40%] py-10">
                <img
                  src="rinterio_ss.png"
                  className="border border-gray-500 shadow-md"
                ></img>
              </div>
              <div className="w-[55%] flex flex-col py-6">
                <div className="flex flex-col border-b-4  border-gray-800">
                  <h3 className="text-xl py-2 font-bold">Rinterio Website</h3>
                  <h4 className="pb-4">
                    Welcome to Rinterio website built with React, styled using
                    Tailwind CSS, and enhanced with DaisyUI components.
                  </h4>
                </div>
                <div className="py-2 flex justify-start gap-4">
                  <Github />
                  <Component />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between mx-auto gap-2">
            <div className="w-[49%] flex justify-between ">
              <div className="w-[40%] py-10">
                <img
                  src="banglalibrary_ss.png"
                  className="border border-gray-500 shadow-md"
                ></img>
              </div>
              <div className="w-[55%] flex flex-col py-6">
                <div className="flex flex-col border-b-4  border-gray-800">
                  <h3 className="text-xl py-2 font-bold">
                    Bangla Library Website
                  </h3>
                  <h4 className="pb-4">
                    Welcome to Bangla Library website built with React, styled
                    using Tailwind CSS, and enhanced with DaisyUI components.
                  </h4>
                </div>
                <div className="py-2 flex justify-start gap-4">
                  <Github />
                  <Component />
                </div>
              </div>
            </div>

            <div className="w-[49%] flex justify-between ">
              <div className="w-[40%] py-10">
                <img
                  src="sneakers_ss.png"
                  className="border border-gray-500 shadow-md"
                ></img>
              </div>
              <div className="w-[55%] flex flex-col py-6">
                <div className="flex flex-col border-b-4  border-gray-800">
                  <h3 className="text-xl py-2 font-bold">Sneakers Website</h3>
                  <h4 className="pb-4">
                    Welcome to Sneakers website built with React, styled using
                    Tailwind CSS, and enhanced with DaisyUI components.
                  </h4>
                </div>
                <div className="py-2 flex justify-start gap-4">
                  <Github />
                  <Component />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightbg">
        <div className="flex flex-col items-center w-[75%] mx-auto my-8 py-11">
          <div className="flex items-center w-full mb-8">
            <div className="flex-grow h-px bg-gray-400"></div>
            <h2 className="px-4 text-2xl font-bold text-highlightedColor">
              Contact
            </h2>
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>
          <div className="max-w-md mx-auto mt-10 text-center">
            <p className="mb-4 text-lg">
              I am currently seeking employment, and I would appreciate it if
              you could contact me with any available job opportunities.
            </p>

            <h2 className="text-xl font-semibold mb-6">Let's Inbox me...</h2>

            <form className="space-y-4 text-left">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full px-4 py-2 border border-gray-400 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="px-6 py-2 font-bold bg-blue-100 text-black border border-black rounded hover:bg-blue-900 hover:text-white transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section>
        <footer className="bg-gray-900 text-gray-300 px-6 py-10">
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">About</h3>
              <p>
                A passionate frontend developer creating modern web experiences
                with React and Tailwind CSS.
              </p>
            </div>

            <div className="md:pl-8">
              <h3 className="text-lg font-semibold text-white mb-2">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-white">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="pl-5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <Github />
                </a>
                <a href="#" className="hover:text-white">
                  <Linkedin />
                </a>
                <a href="#" className="hover:text-white">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-700" />
          <div className="text-center text-sm">
            © 2025 My Portfolio. All rights reserved.
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
