import React from 'react'

const Footer = () => {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center gap-12 bg-gray-800'>
            <h1 className='text-4xl text-lime-400'>Developed by Pranit Bhandari.</h1>
            <div className="flex items-start justify-center gap-28">
                <div className="flex flex-col items-start justify-center gap-2">
                    <h1 className='text-3xl text-lime-300 underline'>Some Links</h1>
                    <a href="#projects" className="group text-2xl text-lime-400 transition duration-300">
                        Projects
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                    </a>
                    <a href="#skills" className="group text-2xl text-lime-400 transition duration-300">
                        Skills
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                    </a>    
                    <a href="#contact" className="group text-2xl text-lime-400 transition duration-300">
                        Contact
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                    </a>
                </div>
                <h3 className='text-2xl text-lime-400'>pranitbhandari2019@gmail.com</h3>
            </div>
        </div>
    )
}

export default Footer
