"use client"
import React from 'react'

export default function ImageForm() {
    const [images, setImage] = React.useState([]);
    const handleSelect = e => {
        let files = [...e.target.files];
        let newfiles = files.filter(file => file.size <= 1025 * 1025);
        setImage(prev => [...prev, ...newfiles]);
    }

    return (
        <form className='flex flex-col gap-1 items-center justify-center rounded-md p-2 bg-red-300'>
            <input type="file" accept="image/*" className="w-fit py8 max-fit h-fit text-red-950 text-center text-xs font-bold outline-none p-4" placeholder="" onChange={handleSelect} multiple required />


        </form>
    )
}
