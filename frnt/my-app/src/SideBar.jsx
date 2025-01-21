import { useState } from 'react';

const NavbarSidebar = () => {
  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Navbar */}
      <header className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-semibold">Brand</a>
          <nav>
            <ul className="hidden lg:flex space-x-4">
              <li>
                <a href="#" className="text-sm hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">Services</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </nav>
          {/* Mobile Sidebar Toggle Button */}
          <div className="lg:hidden py-16 text-center">
            <button
              type="button"
              onClick={toggleSidebar}
              className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-950 focus:outline-none focus:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200"
              aria-label="Toggle navigation"
            >
              Open
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        id="hs-sidebar-offcanvas"
        className={`hs-overlay ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-all duration-300 transform fixed top-0 left-0 bottom-0 z-[60] bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700`}
        role="dialog"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          {/* Sidebar Header */}
          <header className="p-4 flex justify-between items-center gap-x-2">
            <a
              className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>

            {/* Close button */}
            <div className="lg:hidden -me-2">
              <button
                type="button"
                onClick={toggleSidebar}
                className="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
          </header>

          {/* Sidebar Body */}
          <nav className="h-full overflow-y-auto">
            <ul className="space-y-1 px-2">
              {/* Example menu item */}
              <li>
                <a
                  className="flex items-center gap-x-3 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                  href="#"
                >
                  Dashboard
                </a>
              </li>

              {/* More menu items */}
              <li>
                <a
                  className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700"
                  href="#"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarSidebar;


