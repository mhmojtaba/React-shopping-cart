import { NavLink, Outlet } from "react-router-dom";

import { useCart } from "../Providers/CartProvider";
import "./Navigation.css";
import { useAuth } from "../Providers/AuthProvider";
import { useState } from "react";

const Navigation = () => {
  // const Auth = useAuth();
  // const { cart } = useCart();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <header className=" h-20 sticky top-0">
        <nav className=" bg-indigo-50 h-full w-full max-w-7xl mx-auto">
          {/* <ul className="flex items-center justify-between h-full">
            <div className="flex items-center justify-between">
              <div>Logo shopping</div>
              <li className="">
                <NavLink
                  className={(c) =>
                    c.isActive
                      ? "bg-sky-300 block md:inline-block text-xl px-4 py-2 rounded-md"
                      : "block md:inline-block text-xl px-4 py-2 rounded-md"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="block mx-6">
                <NavLink
                  className={(c) =>
                    c.isActive
                      ? "bg-sky-300 block md:inline-block text-xl px-4 py-2 rounded-md"
                      : "block md:inline-block  text-xl px-4 py-2 rounded-md"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </div>
            <div className="flex items-center justify-between">
              <li className="block mx-6">
                <NavLink
                  className={(c) =>
                    c.isActive
                      ? "bg-sky-300 block md:inline-block  text-xl px-4 py-2 rounded-md relative"
                      : "block md:inline-block  text-xl px-4 py-2 rounded-md relative"
                  }
                  to="/carts"
                >
                  Cart
                  <span className="absolute flex justify-center items-center text-slate-100 w-7 -top-2 -right-2 rounded-full bg-indigo-500">
                    {cart.length}
                  </span>
                </NavLink>
              </li>
              <li className="block mx-6">
                <NavLink
                  className={(c) =>
                    c.isActive
                      ? "bg-sky-300 block md:inline-block  text-xl px-4 py-2 rounded-md relative"
                      : "block md:inline-block  text-xl px-4 py-2 rounded-md relative"
                  }
                  to={Auth ? "/profile" : "/login"}
                >
                  {Auth ? `${Auth.name}` : "Login/Signup"}
                </NavLink>
              </li>
            </div>
          </ul> */}
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
            <div className="flex-shrink-0 font-bold tracking-wider">LOGO</div>
            <div className="hidden md:block ">
              <Menu />
            </div>
            <button
              type="button"
              className="md:hidden bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 focus:text-white transition duration-150 ease-in-out"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="md:hidden ">
            {showMobileMenu && <Menu showMobileMenu={showMobileMenu} />}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;

const Menu = ({ showMobileMenu }) => {
  const Auth = useAuth();
  const { cart } = useCart();
  return (
    <ul
      className={
        showMobileMenu
          ? "bg-indigo-50 h-max md:flex md:items-center min-h-max md:justify-between px-2 py-3 space-y-2 md:space-y-0 md:space-x-2"
          : " md:flex md:items-center min-h-max md:justify-between px-2 py-3 space-y-2 md:space-y-0 md:space-x-2"
      }
    >
      <li className="block mx-6">
        <NavLink
          className={(c) =>
            c.isActive
              ? "bg-sky-300 block md:inline-block text-xl px-4 py-2 rounded-md"
              : "block md:inline-block text-xl px-4 py-2 rounded-md"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li className="block mx-6">
        <NavLink
          className={(c) =>
            c.isActive
              ? "bg-sky-300 block md:inline-block text-xl px-4 py-2 rounded-md"
              : "block md:inline-block  text-xl px-4 py-2 rounded-md"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>

      <li className="block mx-6">
        <NavLink
          className={(c) =>
            c.isActive
              ? "bg-sky-300 block md:inline-block  text-xl px-4 py-2 rounded-md relative"
              : "block md:inline-block  text-xl px-4 py-2 rounded-md relative"
          }
          to="/carts"
        >
          Cart
          <span className="absolute flex justify-center items-center text-slate-100 w-7 left-12 -top-2 md:-right-2 rounded-full bg-indigo-500">
            {cart.length}
          </span>
        </NavLink>
      </li>
      <li className="block mx-6">
        <NavLink
          className={(c) =>
            c.isActive
              ? "bg-sky-300 block md:inline-block  text-xl px-4 py-2 rounded-md relative"
              : "block md:inline-block  text-xl px-4 py-2 rounded-md relative"
          }
          to={Auth ? "/profile" : "/login"}
        >
          {Auth ? `${Auth.name}` : "Login/Signup"}
        </NavLink>
      </li>
    </ul>
  );
};

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <nav className="bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <img
//                   className="h-8 w-8"
//                   src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                   alt="Workflow"
//                 />
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <a
//                     href="#"
//                     className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Dashboard
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Team
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Projects
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Calendar
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Reports
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <Transition
//           show={isOpen}
//           enter="transition ease-out duration-100 transform"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-75 transform"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           {(ref) => (
//             <div className="md:hidden" id="mobile-menu">
//               <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <a
//                   href="#"
//                   className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Dashboard
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Team
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Projects
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Calendar
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Reports
//                 </a>
//               </div>
//             </div>
//           )}
//         </Transition>
//       </nav>

//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//         </div>
//       </header>
//       <main>
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//           {/* <!-- Replace with your content --> */}
//           <div className="px-4 py-6 sm:px-0">
//             <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
//           </div>
//           {/* <!-- /End replace --> */}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Nav;
