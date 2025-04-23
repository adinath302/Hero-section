import React from 'react'
import image from '../../assets/img1.gif';
import { motion } from "framer-motion";
import { slideBottom } from '../../utility/animation';

const NavLink = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Features",
        link: "#"
    },
    {
        id: 3,
        name: "Shop",
        link: "#"
    },
    {
        id: 4,
        name: "About us",
        link: "#"
    },
    {
        id: 5,
        name: "Contact",
        link: "#"
    },
]
const Navbar = () => {
    return (
        <motion.header
            variants={slideBottom(0.2)}
            initial="initial"
            animate="animate"
            className='flex justify-center'>
            <div className='py-4 container flex justify-between items-center pbp'>
                {/* Logo section */}
                <div className='flex items-center gap-1'>
                    <img src={image} alt="" className='w-[70px]' />
                    <p className='font-bold text-2xl'> HUSTLE </p>
                </div>
                {/* Link section */}
                <div className='hidden md:block'>
                    <ul className='flex gap-3 xl:gap-7'>
                        {NavLink.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a
                                        className='hover:text-[#fdcd2d] uppercase text-sm xl:text-base'
                                        href={item.link}>{item.name}</a>
                                </li>
                            );
                        })
                        }
                    </ul>
                </div>
                {/* Button section */}
                <div>
                    <button className='primary-btn'>Request For Quotes</button>
                </div>
            </div>
        </motion.header>
    )
}

export default Navbar