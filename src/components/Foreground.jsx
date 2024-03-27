import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: "6mb",
            close: false,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: ".75mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Upload Now", tagColor: "green"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: ".15mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: ".50mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: ".5mb",
            close: false,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: "1mb",
            close: true,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: ".5mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: ".8mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: "2mb",
            close: false,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: "400kb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: ".5mb",
            close: true,
            tag: {isOpen: false, tagTitle: "Upload Now", tagColor: "green"},
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odit.",
            fileSize: "100mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Upload Now", tagColor: "blue"},
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
