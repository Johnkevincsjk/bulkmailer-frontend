import { Link, useNavigate } from 'react-router-dom'
import '../NavBar/Nav.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBars, FaCompressArrowsAlt } from 'react-icons/fa'


export default function Nav() {

    const [isMobile, setisMobile] = useState(false)

    return (
        <div className='container-fluid Nav_body'>
            <div className="mass_mailer">
                <motion.h3 initial={{ y: -300 }} transition={{ duration: 0.5, type: "spring", stiffness: 100 }} animate={{ y: 0 }}>Bulk Email Tool
                </motion.h3>
            </div>
            <div className={isMobile ? 'nov_listOpen' : "nav_list"}>

                <ul>
                    <Link className='navoption' to={'/FirstPage'} ><motion.li initial={{ y: -300 }} transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.4 }} animate={{ y: 0 }}>Home</motion.li></Link>

                    <Link className='navoption' to={'/Feedback'}><motion.li initial={{ y: -300 }} transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.6 }} animate={{ y: 0 }}>Feeback</motion.li></Link>


                    <a className='navoption' href="#contacts"><motion.li initial={{ y: -300 }} transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.2 }} animate={{ y: 0 }}>Contact</motion.li></a>


                    <Link className='navoption' id='Log_out_btn' to={'/'}><motion.li initial={{ y: -300 }} transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.6 }} animate={{ y: 0 }}>Log Out</motion.li></Link>


                </ul>
            </div>
            <button className='burger_menu' onClick={() => setisMobile(!isMobile)}>{isMobile ? <FaCompressArrowsAlt /> : <FaBars />}</button>

        </div>

    )
}
