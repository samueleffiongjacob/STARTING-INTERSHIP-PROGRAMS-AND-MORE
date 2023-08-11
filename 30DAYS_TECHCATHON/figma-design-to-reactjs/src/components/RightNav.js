import todoIcon from '../images/icon-todo.svg'
import calendarIcon from '../images/icon-calendar.svg'
import reminderIcon from '../images/icon-reminders.svg'
import planIcon from '../images/icon-planning.svg'
import upIcon from '../images/icon-arrow-up.svg'
import downIcon from '../images/icon-arrow-down.svg'
import { useState } from 'react'

const RightNav = ({ open }) =>{
    const [iconShown, setIconShown] = useState(false)
    const [iconShown1, setIconShown1] = useState(false)
    
    return(
        <ul className={open ? 'main-ul' : 'main-ul-sm'}>
                <li className='main-list' 
                    onMouseEnter={() => setIconShown(true)}
                    onMouseLeave={() => setIconShown(false)}
                >
                <a href='#'>
                    Features 
                    {iconShown && <img src={upIcon} alt='drop-down-icon' className='dd-icon'/>}
                    {iconShown===false && <img src={downIcon} alt='drop-down-icon' className='dd-icon'/>}
                </a>
                    <ul className='sub-list'>
                        <li><img src={todoIcon}></img><a href='#'>Todo List</a></li>
                        <li><img src={calendarIcon}></img><a href='#'>Calendar</a></li>
                        <li><img src={reminderIcon}></img><a href='#'>Reminder</a></li>
                        <li><img src={planIcon}></img><a href='#'>Planning</a></li>
                    </ul>
                </li>
                <li className='main-list'
                    onMouseEnter={() => setIconShown1(true)}
                    onMouseLeave={() => setIconShown1(false)}
                >
                    <a href='#'>
                        Company
                        {iconShown1 && <img src={upIcon} alt='drop-down-icon' className='dd-icon'/>}
                        {iconShown1===false && <img src={downIcon} alt='drop-down-icon' className='dd-icon'/>}
                    </a>

                    <ul className='sub-list'>
                        <li><a href='#'>History</a></li>
                        <li><a href='#'>Our Team</a></li>
                        <li><a href='#'>Blog</a></li>
                    </ul>
                </li>
                <li className='main-list'><a href='#'>Careers</a></li>
                <li className='main-list'><a href='#'>About</a></li>
                
            </ul>          
    )
}

export default RightNav