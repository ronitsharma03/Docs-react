import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: ".5mb",
            close: false,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: ".5mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Upload", tagColor: "green"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: ".5mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
    ];

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen flex gap-10 flex-wrap p-7'>
        {
            data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))
        }
    </div>
  )
}

export default Foreground
