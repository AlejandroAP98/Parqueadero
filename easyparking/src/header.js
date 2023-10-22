
import 'flowbite/dist/flowbite.js';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Header(){
    const location = useLocation();
    const hideHeader = location.pathname === '/login' || location.pathname === '/nuevaCuenta';
    if (hideHeader) {
        return null; 
    }
    return (
        <header>
            <nav className="border-gray-200 w-full ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center">
                            <img src="/icono.png" id="logo" className="h-12 w-auto mx-2" alt="Easyparking logo" />
                            <h1>EasyParking</h1>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                            <li>
                                <a href="/" className="flex flex-row items-center gap-x-1 py-2 pl-3 pr-4 text-lg text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <svg className="icon icon-tabler icon-tabler-car" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                                    </svg>
                                    Vehículos
                                </a>
                            </li>
                            <li>
                            <a href="/registrovehiculo" className="flex flex-row items-center gap-x-1 py-2 pl-3 pr-4 text-lg text-white rounded hover:bg-gray-600  md:hover:bg-transparent md:border-0 md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <svg className="icon icon-tabler icon-tabler-pencil-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                    <path d="M13.5 6.5l4 4"></path>
                                    <path d="M16 19h6"></path>
                                    <path d="M19 16v6"></path>
                                </svg>
                                Registro</a>
                            </li>
                            <li>
                            <a href="/usuario" className="flex flex-row items-center gap-x-1 py-2 pl-3 pr-4 text-lg text-white rounded hover:bg-gray-600  md:hover:bg-transparent md:border-0 md:hover:text-purple-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <svg className="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                    <path d="M16 19h6"></path>
                                    <path d="M19 16v6"></path>
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                                </svg>
                                Usuario</a>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex flex-row gap-x-1 text-lg items-center justify-between  py-2 pl-3 pr-4 text-white rounded hover:bg-gray-600  md:hover:bg-transparent md:border-0 md:hover:text-purple-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    <svg className="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                                    </svg>
                                    Cuenta <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-gray-900 divide-y divide-gray-500 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-white hover:bg-gray-600  dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    </ul>
                                    <div className="py-1">
                                    <a href="/" className="flex flex-row gap-x-1 justify-between px-4 py-2  text-sm text-white hover:bg-gray-600 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                        Sign out 
                                        <svg className="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                                            <path d="M9 12h12l-3 -3"></path>
                                            <path d="M18 15l3 -3"></path>
                                        </svg>
                                    </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>    
    )
}

export default Header;