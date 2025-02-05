import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-10 p-4' id='contact'>
            <h1 className='text-6xl text-lime-400'>CONTACT</h1>
            <a href="mailto:pranitbhandari2019@gmail.com" className='flex flex-col items-center justify-center gap-2'>
                <h3 className='text-lg text-lime-400'>pranitbhandari2019@gmail.com</h3>
                <button className='text-white btn btn-outline btn-primary'>email me</button>
            </a>
            <h1 className='text-4xl text-lime-400'>Developed by Pranit Bhandari.</h1>
        </div>
    )
}

export default Contact
