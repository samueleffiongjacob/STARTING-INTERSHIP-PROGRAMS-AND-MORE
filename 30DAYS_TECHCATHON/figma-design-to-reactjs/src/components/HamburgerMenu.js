import { useState } from 'react'
import {GrClose, GrMenu} from 'react-icons/gr'
import RightNav from './RightNav'

function HamburgerMenu(){
    const [open, setOpen] = useState(false)
    return(
        <>
            <div className="menu" onClick={() => setOpen(!open)}>
                {open ? <GrMenu className='burger'/> : <GrClose className='burger'/> }
            </div>
            <RightNav open={open}/>

        </>
    )
}
export default HamburgerMenu