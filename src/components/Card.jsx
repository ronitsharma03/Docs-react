import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
    return (
        <motion.div 
        drag 
        dragConstraints={reference} 
        whileDrag={{scale: 1.2}} 
        dragElastic={0.1} 
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10}}
        className='relative flex-shrink-0 w-60 h-[35%] bg-zinc-900/90 rounded-[45px] text-white py-10 px-5 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full left-0'>
                <div className='flex items-center justify-between mb-3 py-3 px-8'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {
                            data.close ? <IoClose size=".8em" color='#fff' /> : <LuDownload size=".8em" color='#fff' />
                        }
                    </span>
                </div>

                {
                    (data.tag.isOpen && <div className={`w-full h-14 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-4 flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>)
                }

            </div>


        </motion.div>
    );
}

export default Card
