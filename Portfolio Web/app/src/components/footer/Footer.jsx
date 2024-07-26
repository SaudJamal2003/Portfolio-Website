import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
       <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Saud.</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href='https://www.instagram.com/saudjamal1020?igsh=Y3ZpcXU3M2tobmtv' className='footer__social-link' target='_blank'>
                        <i className='bx bxl-instagram'></i>
                    </a> 

                    <a href='https://www.linkedin.com/in/saud-jamal/' className='footer__social-link' target='_blank'>
                        <i class='bx bxl-linkedin'></i>
                    </a>  
                    
                    <a href='https://github.com/SaudJamal3964' className='footer__social-link' target='_blank'>
                        <i className='bx bxl-github'></i>
                    </a>  
   
                </div>
            </div>
       </footer> 
    </>
  )
}

export default Footer