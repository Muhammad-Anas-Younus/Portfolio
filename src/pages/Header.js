import React, {useState, useEffect} from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Header() {

    const [header, setHeader] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 10){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={header ? 'header scrolled' : 'header'}>
            <div className="logo">
                <a>MA</a>
            </div>       
            <div className="nav-links">
                <a target='_blank' href="https://www.linkedin.com/in/muhammad-anas-0780591b8/"><LinkedInIcon style={{position: 'relative'}} /></a>
                <a  target='_blank' href="https://github.com/Muhammad-Anas-Younus"><GitHubIcon style={{position: 'relative'}} /></a>
            </div>
        </div>
    )
}

export default Header
