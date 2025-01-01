import React, { useState, useEffect } from "react";

const RightBar = () => {
    const [activeSection, setActiveSection] = useState("analytics"); // Default active section
    const [quote, setQuote] = useState("Loading...");
    const [isPaused, setIsPaused] = useState(true); // Initial state for the Play/Pause button

    const toggleState = () => {
        setIsPaused((prevState) => !prevState); // Toggle between Pause and Play
    };

    useEffect(() => {
        // Fetching a random quote from Quotable API
        const fetchQuote = async () => {
            try {
                const response = await fetch("https://api.quotable.io/random");
                const data = await response.json();
                setQuote(data.content); // Set the fetched quote
            } catch (error) {
                console.error("Failed to fetch the quote:", error);
                setQuote("Error fetching quote. Please try again later.");
            }
        };

        fetchQuote();
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                <div className="flex space-x-8">
                    <button
                        onClick={() => setActiveSection("analytics")}
                        className={`text-gray-600 hover:text-blue-600 ${activeSection === "analytics" ? "font-bold" : ""
                            }`}
                    >
                        Live Analytics
                    </button>
                    <button
                        onClick={() => setActiveSection("actions")}
                        className={`text-gray-600 hover:text-blue-600 ${activeSection === "actions" ? "font-bold" : ""
                            }`}
                    >
                        Quick Actions
                    </button>
                    <button
                        onClick={() => setActiveSection("topics")}
                        className={`text-gray-600 hover:text-blue-600 ${activeSection === "topics" ? "font-bold" : ""
                            }`}
                    >
                        Suggested Topics
                    </button>
                </div>
            </nav>

            <div
                className="hidden lg:block lg:w-full p-6"
                style={{ height: "calc(100vh - 5rem)" }}
            >
                {/* Conditional Rendering for Sections */}
                {activeSection === "analytics" && (
                    <div id="analytics" className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Live Analytics</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>
                                Time Elapsed: <span className="font-bold">10 min</span>
                            </li>
                            <li>
                                Words Transcribed: <span className="font-bold">500</span>
                            </li>
                            <li>
                                Key Points Identified: <span className="font-bold">8</span>
                            </li>
                        </ul>
                    </div>
                )}

                {activeSection === "actions" && (
                    <div id="actions" className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Quick Actions</h3>
                        <div className="flex flex-col gap-4">
                            {/* Export Notes Button */}
                            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 text-white font-medium rounded dark:hover:bg-gray-300 dark:hover:text-neutral-800">
                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="12" y1="11" x2="12" y2="17" />
                                    <polyline points="9 14 12 11 15 14" />
                                </svg>
                                Export Notes
                            </button>

                            {/* Pause/Play Button */}
                            <button
                                onClick={toggleState}
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 text-white font-medium rounded dark:hover:bg-gray-300 dark:hover:text-neutral-800"
                            >
                                {isPaused ? (
                                    // Pause Icon and Text
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.5 3.75H7.875a.75.75 0 00-.75.75v15a.75.75 0 00.75.75H10.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75zm5.625 0H14.25a.75.75 0 00-.75.75v15a.75.75 0 00.75.75h1.875a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75z"
                                            />
                                        </svg>
                                        Pause
                                    </>
                                ) : (
                                    // Play Icon and Text
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5.25 4.686v14.628c0 .567.618.922 1.102.641l12.469-7.314c.463-.272.463-1.01 0-1.282L6.352 4.045c-.484-.281-1.102.074-1.102.641z"
                                            />
                                        </svg>
                                        Play
                                    </>
                                )}
                            </button>

                            {/* Bookmark Button */}
                            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 text-white font-medium rounded dark:hover:bg-gray-300 dark:hover:text-neutral-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 3.75H6.75a.75.75 0 00-.75.75v16.5a.375.375 0 00.608.286L12 16.875l5.392 4.411a.375.375 0 00.608-.286V4.5a.75.75 0 00-.75-.75z"
                                    />
                                </svg>
                                Bookmark
                            </button>
                        </div>
                    </div>
                )}

                {activeSection === "topics" && (
                    <div id="topics" className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Suggested Topics</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>AI in Education</li>
                            <li>Effective Note-Taking Strategies</li>
                            <li>Speech Recognition Insights</li>
                        </ul>
                        {/* Quote of the Day */}
                        <div className="mt-4">
                            <h4 className="text-lg font-semibold">Quote of the Day</h4>
                            <p className="italic text-gray-600">"{quote}"</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RightBar;
