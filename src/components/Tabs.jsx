import React from 'react'

const Tabs = () => {
    return (
        <div className='navbar bg-base-100 shadow-sm w-full'>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role='button' className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className='group text-2xl text-lime-400 transition duration-300' href="#projects">Projects
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                            </a>
                        </li>
                        <li>
                            <a className='group text-2xl text-lime-400 transition duration-300' href="#skills">Skills
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                            </a>
                        </li>
                        <li>
                            <a className='group text-2xl text-lime-400 transition duration-300' href="#contact">Contact
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <h1 className='text-4xl text-lime-400 cursor-pointer'>PB.</h1>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="#projects" className="group text-2xl text-lime-400 transition duration-300">
                            Projects
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="group text-2xl text-lime-400 transition duration-300">
                            Skills
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="group text-2xl text-lime-400 transition duration-300">
                            Contact
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Tabs
