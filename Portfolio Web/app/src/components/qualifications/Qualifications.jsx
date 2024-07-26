import React from 'react'
import './qualification.css'

const Qualifications = () => {
  return (
    <>
        <section className="qualification section">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My Academia</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">University</h3>
                                <span className="qualififcation__subtitle">Fast NUCES</span>
                                <div className="qualfication__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">College</h3>
                                <span className="qualififcation__subtitle">Intermediate</span>
                                <div className="qualfication__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2021
                                </div>
                            </div>                           
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">School</h3>
                                <span className="qualififcation__subtitle">O'Levels</span>
                                <div className="qualfication__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2007 - 2019
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className="qualification__line"></span>
                            </div>                          
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Qualifications