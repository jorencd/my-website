function About() {
  return (
    <div className="h-screen flex items-center justify-center p-20 md:px-40 gap-x-32 ">
      <div className="md:flex hidden items-center justify-center">
        <div
          className="rounded-full bg-gray-300 md:h-64 md:w-64 h-48 w-48 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/profile.png')" }}
        ></div>
      </div>
      <div
        className="flex flex-col gap-4 md:w-full"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="flex flex-col gap-4">
          <h2 className="md:text-[30px] text-[22px] font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>About Me</h2>
          <p className="md:text-[15px] text-[12px] text-justify">
            Hi, I'm Jorence Mendoza, a BS Information Technology Major in Web &
            Game Development at Pamantasan ng Lungsod ng San Pablo. I’m
            passionate about creativity and innovation, especially in how
            technology can solve real-world problems. As a hardworking and
            goal-driven individual, I value strong work ethics and always strive
            to deliver quality results in everything I do.
          </p>
        </div>
        <div className="mt-8 mb-4">
          <h2 className="font-medium text-[20px] md:text-[25px]">Skills</h2>
        </div>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-3 md:gap-8">
          <div className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="#e65100"
                d="m4 4l2 22l10 2l10-2l2-22Zm19.72 7H11.28l.29 3h11.86l-.802 9.335L15.99 25l-6.635-1.646L8.93 19h3.02l.19 2l3.86.77l3.84-.77l.29-4H8.84L8 8h16Z"
              />
            </svg>
            <span className="text-[12px] font-semibold">HTML</span>
          </div>
          <div className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 128 128"
            >
              <path
                fill="#1572b6"
                d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"
              />
              <path
                fill="#33a9dc"
                d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"
              />
              <path
                fill="#fff"
                d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"
              />
              <path
                fill="#ebebeb"
                d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"
              />
              <path
                fill="#fff"
                d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"
              />
              <path
                fill="#ebebeb"
                d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"
              />
            </svg>
            <span className="text-[12px] font-semibold">CSS</span>
          </div>
          <div className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path fill="#f5de19" d="M2 2h28v28H2z" />
              <path d="M20.809 23.875a2.87 2.87 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.89 3.89 0 0 1 3.742 2.107L25 18.128A1.79 1.79 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.06 5.06 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z" />
            </svg>
            <span className="text-[12px] font-semibold">JavaScript</span>
          </div>
          <div className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <g fill="none">
                <rect width="256" height="256" fill="#242938" rx="60" />
                <path
                  fill="#00d8ff"
                  d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"
                />
                <path
                  stroke="#00d8ff"
                  stroke-width="8.911"
                  d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z"
                  clip-rule="evenodd"
                />
                <path
                  stroke="#00d8ff"
                  stroke-width="8.911"
                  d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z"
                  clip-rule="evenodd"
                />
                <path
                  stroke="#00d8ff"
                  stroke-width="8.911"
                  d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
                  clip-rule="evenodd"
                />
              </g>
            </svg>
            <span className="text-[12px] font-semibold">React</span>
          </div>
          <div className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 128 128"
            >
              <linearGradient
                id="deviconAngular0"
                x1="14.704"
                x2="110.985"
                y1="46.27"
                y2="92.024"
                gradientTransform="matrix(1 0 0 -1 0 130)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#e40035" />
                <stop offset=".24" stop-color="#f60a48" />
                <stop offset=".352" stop-color="#f20755" />
                <stop offset=".494" stop-color="#dc087d" />
                <stop offset=".745" stop-color="#9717e7" />
                <stop offset="1" stop-color="#6c00f5" />
              </linearGradient>
              <path
                fill="url(#deviconAngular0)"
                d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"
              />
              <linearGradient
                id="deviconAngular1"
                x1="28.733"
                x2="91.742"
                y1="117.071"
                y2="45.195"
                gradientTransform="matrix(1 0 0 -1 0 130)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#ff31d9" />
                <stop offset="1" stop-color="#ff5be1" stop-opacity="0" />
              </linearGradient>
              <path
                fill="url(#deviconAngular1)"
                d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"
              />
            </svg>
            <span className="text-[12px] font-semibold">Angular</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
