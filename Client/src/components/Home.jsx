import React from 'react'

const Home = () => {
  return (
    <>
    <nav className='w-full h-20 bg-white border-b-2 border-b-gray-200'>

    </nav>
    <div className="grid grid-cols-3 gap-4 ">
      {/* SlideBar */}
      <div class="py-16 text-center ">
        <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-950 focus:outline-none focus:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-example" aria-label="Toggle navigation" data-hs-overlay="#hs-offcanvas-example">
          Open
        </button>
      </div>

      <div id="hs-offcanvas-example" class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-r-2 border-r-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-white dark:border-neutral-700" role="dialog" tabindex="-1" aria-label="Sidebar">

        <div class="px-6">
          <a class="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-primary-500" href="#" aria-label="Brand">Takeey</a>
        </div>
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
              <button type="button" class="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none  hs-accordion-toggle hs-accordion-active:bg-primary-400 hs-accordion-active:text-white hs-accordion-active:hover:bg-primary-400 text-gray-700 dark:text-black-400dark:hover:text-neutral-800 dark:hover:bg-gray-200   dark:hs-accordion-active:bg-primary-400 dark:hs-accordion-active:text-white" aria-expanded="true" aria-controls="projects-accordion">
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

      <div className='' id='contents'>
        dsdsjdsjdd
      </div>

      <div className='w-72 h-screen border-l-2 border-l-gray-200 bg-white  mx-20' id='righthand-bar'>righthand bar</div>


      <script src="../scripts/js/open-modals-on-init.js"></script>
    </div>

    </>
  )
}

export default Home