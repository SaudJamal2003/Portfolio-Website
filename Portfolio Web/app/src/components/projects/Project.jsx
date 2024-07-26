import React from 'react'
import './project.css'
import HelpingHands from '../../assets/helpingHands.png'
import ElegenceInteriors from '../../assets/Interior_pic.webp'
import CookieCafe from '../../assets/logo_coffe.png'

const Project = () => {
  function direct_to_helping_hands(){
    window.open('https://saudjamal-github-io-xn26.vercel.app/')
  }
  function direct_to_elegence_interiors(){
    window.open('https://helpful-pony-1ae746.netlify.app/')
  }
  function direct_to_coffee_cafe(){
    window.open('https://65ff0d66e8ba20286399cb7b--spectacular-tiramisu-5bb752.netlify.app/')
  }
  return (
    <>
        <section className="projects section" id="projects">
            <h2 className="projects__title">Projects</h2>
            <span className="project__subtitle">My recent work</span>
            <div className='main'>
              <div className='projects__row1'>
                  <div className='project__one' onClick={direct_to_helping_hands}>
                        <img src={HelpingHands} alt='helpingHands' className='helpingHands'/>
                        <div className='project__one__text'>
                          <h3>Helping Hands</h3>
                    {/* <a href='https://saudjamal-github-io-xn26.vercel.app/' className='helpingHands__link' target='_blank'> */}
                          <h4>View live project</h4>
                    {/* </a> */}
                      </div>
                  </div>
                  <div className='project__two' onClick={direct_to_elegence_interiors}>
                        <img src={ElegenceInteriors} alt='elegenceInteriors' className='elegenceInteriors'/>
                        <div className='project__two__text'>
                          <h3>Elegence Interiors</h3>
                          {/* <a href='https://helpful-pony-1ae746.netlify.app/' className='elegenceInteriors__link' target='_blank'> */}
                            <h4>View live project</h4>
                          {/* </a> */}
                        </div>
                  </div>
              </div>

              <div className='projects__row2'>
                <div className='project__three' onClick={direct_to_coffee_cafe}>
                  <img src={CookieCafe} alt='cookieCafe' className='cookieCafe'/>
                  <div className='project__three__text'>
                      <h3>Cookie Cafe</h3>
                    {/* <a href='https://65ff0d66e8ba20286399cb7b--spectacular-tiramisu-5bb752.netlify.app/' target='_blank' className='CookieCafeLink'> */}
                      <h4>View live project</h4>
                    {/* </a> */}
                    </div>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Project