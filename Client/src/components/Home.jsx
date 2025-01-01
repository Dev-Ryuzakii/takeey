import React, { useState } from "react";
import "../index.css";
import RightBar from "./UI/RightBar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full h-20 bg-white border-b-2 border-b-gray-200 flex items-center px-4 lg:justify-between">
        {/* Brand Name */}
        <h1
          className={`text-xl font-bold text-primary-500 ${
            isSidebarOpen ? "hidden" : "block"
          } lg:block`}
        >
          Takeey
        </h1>
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 bg-gray-100 rounded-full shadow hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      <div className="flex w-full">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white border-r-2 border-gray-200 pt-7 pb-10 overflow-y-auto z-[60] transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0 lg:block`}
        >
          {/* Brand Name Inside Sidebar */}
          <div className="px-6">
            <h1 className="text-xl text-primary-500 font-bold lg:hidden mb-4">Takeey</h1>
          </div>

          {/* Sidebar Navigation */}
          <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul class="space-y-1.5">
            <li>
              <a class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-400 dark:bg-primary-400 dark:text-white" href="#">
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                Home
              </a>
            </li>

            <li class="hs-accordion" id="users-accordion">
              <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="users-accordion">
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                Transcription

                <svg class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-black-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>

                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-black-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </button>

              <div id="users-accordion" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="users-accordion">
                <ul class="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                  <li class="hs-accordion" id="users-accordion-sub-1">
                    <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="users-accordion-sub-1">
                      Real-Time Transcription


                    </button>


                  </li>
                  <li class="hs-accordion" id="users-accordion-sub-2">
                    <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="users-accordion-sub-2">
                      Saved Transcriptions


                    </button>


                  </li>
                </ul>
              </div>
            </li>

            <li class="hs-accordion" id="account-accordion">
              <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="account-accordion">
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                  <line x1="8" y1="9" x2="16" y2="9" />
                  <line x1="8" y1="13" x2="14" y2="13" />
                  <line x1="8" y1="17" x2="12" y2="17" />
                </svg>
                Summarize

                <svg class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-black-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6" />
                </svg>

                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-black-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>


              <div id="users-accordion" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="users-accordion">
                <ul class="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                  <li class="hs-accordion" id="users-accordion-sub-1">
                    <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white">
                      All Summaries
                    </button>
                  </li>
                  <li class="hs-accordion" id="users-accordion-sub-2">
                    <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="users-accordion-sub-2">
                      Generate Custom Summary
                    </button>
                  </li>
                </ul>
              </div>

            </li>

            <li class="hs-accordion" id="projects-accordion">
              <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none  hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400 dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="projects-accordion">
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="11" x2="12" y2="17" />
                  <polyline points="9 14 12 11 15 14" />
                </svg>
                Export

                <svg class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-black-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6" />
                </svg>

                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-black-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>


              <div id="users-accordion" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="users-accordion">
                <ul class="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                  <li class="hs-accordion" id="users-accordion-sub-1">
                    <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400 dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="users-accordion-sub-1">
                      PDF
                    </button>
                  </li>
                  <li class="hs-accordion" id="users-accordion-sub-2">
                    <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="users-accordion-sub-2">
                      Word Document
                    </button>
                  </li>
                  <li class="hs-accordion" id="users-accordion-sub-2">
                    <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="users-accordion-sub-2">
                      Plain Text
                    </button>
                  </li>
                </ul>
              </div>
            </li>

            <li class="hs-accordion" >
              <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="projects-accordion">
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="8" cy="15" r="4"></circle>
                  <circle cx="16" cy="15" r="4"></circle>
                  <line x1="12" y1="5" x2="12" y2="15"></line>
                </svg>
                Collaboration

                <svg class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-black-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m18 15-6-6-6 6" />
                </svg>

                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-black-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>



              <div id="users-accordion" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="users-accordion">
                <ul class="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                  <li class="hs-accordion" id="users-accordion-sub-1">
                    <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="users-accordion-sub-1">
                      Shared Notes
                    </button>


                  </li>
                  <li class="hs-accordion" id="users-accordion-sub-2">
                    <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="users-accordion-sub-2">
                      Collaborate
                    </button>


                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none  hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" href="#">
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
                Analytics
              </a>
            </li>

            <li>
              <a class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none  hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" href="#">
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V20a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15 1.65 1.65 0 0 0 3.09 14H3a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 7.91 5.6H8a1.65 1.65 0 0 0 1.51-1V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.51 1 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                Setting
              </a>
            </li>

          </ul>
        </nav>
        </div>

        {/* Main Content */}
        <main
          className={`flex-1 p-6 transition-all duration-300  ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <h2 className="text-2xl font-bold">Main Content</h2>
          <p>This is the main content area. Add your content here.</p>
        </main>

        {/* Right Bar */}
        <div
  className="hidden lg:block lg:w-1/3 p-6 bg-gray-50 shadow-lg border-l-2 border-gray-300 "
  style={{
    height: "calc(100vh - 5rem)",
    overflowY: "auto", // Enable scrolling if the content overflows
  }}
>
  <RightBar />
</div>

      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-[50] lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Home;
