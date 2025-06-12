import bgImage from "../assets/6189863_3185097.jpg";

function Home() {
  return (
    <div
      className="h-screen grid grid-col-1 bg-cover bg-center pt-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-12 md:gap-x-20 lg:gap-x-32 landscape:pt-4 landscape:scale-90 landscape:sm:scale-100">
        <div
          className="
            w-[140px] h-[140px]
            xs:w-[110px] xs:h-[110px]
            sm:w-[130px] sm:h-[130px]
            md:w-[200px] md:h-[200px]
            lg:w-[288px] lg:h-[288px]
            rounded-full bg-sky-500/100 flex items-start justify-center bg-cover bg-center
            landscape:w-[70px] landscape:h-[70px] landscape:sm:w-[288px] landscape:sm:h-[288px]
          "
          style={{ backgroundImage: "url('/profile.png')" }}
        ></div>
        <div
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="sm:text-left landscape:scale-90 landscape:sm:scale-100"
        >
          <h1 className="
            font-semibold text-[#26201D]
            text-[25px] xs:text-[22px] sm:text-[26px] md:text-[40px] lg:text-[40px]
            landscape:text-[14px] sm:landscape:text-[40px]
          ">
            Hi, I'm Jorence Mendoza
          </h1>
          <p className="text-[14px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] landscape:text-[12px] sm:landscape:text-[16px]">
            A Front-End Developer
          </p>
          <p className="text-[14px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] landscape:text-[12px] sm:landscape:text-[16px]">
            & UI Designer
          </p>
          <button className="
            bg-[#26201D] mt-2 text-white
            px-4 py-2 text-[12px]
            xs:px-3 xs:py-1 xs:text-[12px]
            sm:px-4 sm:py-2 sm:text-[14px]
            md:px-5 md:py-2 md:text-[15px]
            rounded-[10px] font
            landscape:text-[10px] landscape:px-2 landscape:py-1 sm:landscape:text-[15px] sm:landscape:px-5 sm:landscape:py-2
          ">
            Download CV
          </button>
        </div>
      </div>
      <div
        className="
          flex flex-row gap-10 p-4
          xs:grid-cols-2 xs:p-6
          sm:flex sm:flex-row sm:gap-x-8 sm:p-8
          md:gap-x-12 md:p-10
          lg:gap-x-40 lg:p-12
          items-start justify-center
          landscape:scale-90 landscape:sm:scale-100
        "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="
          w-[90px] xs:w-[110px] sm:w-[140px] md:w-[160px] lg:w-[167px]
          xs:ml-4 sm:ml-0
          landscape:w-[70px] landscape:ml-2 sm:landscape:w-[167px] sm:landscape:ml-0
        ">
          <div className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M9 10v11H5a2 2 0 0 1-1.995-1.85L3 19v-9zm12 0v9a2 2 0 0 1-1.85 1.995L19 21h-8V10zm-2-7a2 2 0 0 1 2 2v3H3V5a2 2 0 0 1 2-2z"
                />
              </g>
            </svg>
          </div>
          <p className="font-semibold text-[14px] xs:text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] landscape:text-[10px] sm:landscape:text-[18px]">
            UI/UX
          </p>
          <p className="text-justify font-medium text-[11px] xs:text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] landscape:text-[8px] sm:landscape:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
        <div className="
          w-[90px] xs:w-[110px] sm:w-[140px] md:w-[160px] lg:w-[167px]
          ml-2 xs:ml-4 sm:ml-0
          landscape:w-[70px] landscape:ml-2 sm:landscape:w-[167px] sm:landscape:ml-0
        ">
          <div className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M7.75 2.977a1 1 0 0 0-1.638-.747C4.393 3.657 3.35 4.837 2.744 5.94C2.12 7.077 2.001 8.064 2.001 9a4 4 0 0 0 8 0c0-1.28-.626-2.23-1.116-2.974l-.144-.22c-.52-.806-.962-1.59-.99-2.829m-5.749 14.03c0-1.116.088-2.528.584-3.696A5.48 5.48 0 0 0 6.001 14.5c1.292 0 2.48-.446 3.418-1.191c.495 1.17.582 2.582.582 3.697c0 1.844-.288 4.908-.815 7.523c-.263 1.303-.595 2.55-1.006 3.494c-.203.468-.45.919-.76 1.269c-.304.344-.777.708-1.416.708c-.64 0-1.113-.364-1.417-.708c-.309-.35-.556-.8-.76-1.269c-.411-.943-.745-2.19-1.008-3.494c-.528-2.614-.818-5.679-.818-7.523M10.986 6.68A7 7 0 0 1 20.929 12H17.5a4.5 4.5 0 0 0-4.5 4.5v3.43a7 7 0 0 1-1.613-.434a49 49 0 0 1-.209 2.053a9 9 0 0 0 1.822.396V24.5a4.5 4.5 0 0 0 4.5 4.5h8a4.5 4.5 0 0 0 4.5-4.5v-8a4.5 4.5 0 0 0-4.5-4.5h-2.555A9 9 0 0 0 9.973 4.95l.027.042l.136.205c.236.353.57.855.85 1.483M25.5 14a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-8a2.5 2.5 0 0 1-2.5-2.5v-2.555A9.004 9.004 0 0 0 22.945 14zM15 19.93V16.5a2.5 2.5 0 0 1 2.5-2.5h3.43A7 7 0 0 1 15 19.93"
              />
            </svg>
          </div>
          <p className="font-semibold text-[14px] xs:text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] landscape:text-[10px] sm:landscape:text-[18px]">
            Product Design
          </p>
          <p className="text-justify font-medium text-[11px] xs:text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] landscape:text-[8px] sm:landscape:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
        <div className="
          w-[90px] xs:w-[110px] sm:w-[140px] md:w-[160px] lg:w-[167px]
          ml-2 xs:ml-4 sm:ml-0
          landscape:w-[70px] landscape:ml-2 sm:landscape:w-[167px] sm:landscape:ml-0
        ">
          <div className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 20"
            >
              <g fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M14.725 13.334c.97-3.623-1.336-7.377-5.135-8.395C5.323 3.795-.725 6.762.544 10.35c.383 1.084 1.134 1.341 2.682 1.363l.108.002c1.1.013 1.471.1 1.678.436c.214.348.216.756.054 1.788c-.067.422-.088.569-.113.794c-.145 1.3.067 2.274.89 3.16c2.584 2.784 7.788-.48 8.882-4.56M1.486 10.017c-.908-2.57 4.217-5.084 7.845-4.112c3.277.878 5.252 4.093 4.428 7.17c-.924 3.446-5.287 6.182-7.183 4.14c-.594-.64-.745-1.333-.63-2.37c.024-.205.044-.344.108-.75c.2-1.275.197-1.836-.19-2.467c-.465-.756-1.059-.894-2.517-.912l-.107-.002c-1.159-.016-1.562-.154-1.754-.697"
                  clipRule="evenodd"
                />
                <path d="M4.75 9.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m4 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2.5 3a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M9.75 16a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m3.62-12.395a1 1 0 0 1 1.371.443l4.093 8.4a.652.652 0 0 1-1.149.611l-4.708-8.07a1 1 0 0 1 .394-1.384" />
                <path
                  fillRule="evenodd"
                  d="M11.538 3.484c.486.915 1.305 1.171 2.097.75c.791-.42 1.038-1.243.551-2.158C13.63 1.028 12.438.078 11.648.497s-.668 1.939-.11 2.987m.882-.47a3.2 3.2 0 0 1-.32-1.137a2 2 0 0 1 .018-.496l.018.009c.05.024.205.096.403.254c.302.241.602.596.764.901c.229.43.164.646-.138.807c-.3.16-.516.092-.745-.337"
                  clipRule="evenodd"
                />
              </g>
            </svg>
          </div>
          <p className="font-semibold text-[14px] xs:text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] landscape:text-[10px] sm:landscape:text-[18px]">
            Portrait Artist
          </p>
          <p className="text-justify font-medium text-[11px] xs:text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] landscape:text-[8px] sm:landscape:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
