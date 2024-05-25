import React from 'react'
import "./homepage.css";

import ctaimage from "../../assets/cta-image.png";
import ewaste from "../../assets/ewaste.png";
import importance from "../../assets/importance.png"
const Homepage = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                {/* Call to action */}
                <section className='cta'>
                    <section className="cta-text">
                        <h1 id='reduce'>Reduce</h1>
                        <h1 id='recycle'>Recycle</h1>
                        <h1 id='reuse'>Reuse</h1>
                        <section>
                        <h3 className='text-justify' id='tagline'>Join the Green Revolution, Recycle Your E-Waste</h3>
                        </section>
                        <button className='btn cta-btn'>Learn More</button>
                    </section>'
                    <section className='cta-img'>
                        <br />
                        <br />
                        <br />
                        <img className="img-fluid" src={ctaimage} />
                    </section>
                </section>
            </div>
            {/* what is E waste */}
            <section className='e-waste'>
                <section>
                    <img className='img-fluid ewaste-img' src={ewaste} />
                </section>
                <section className='e-waste-text'>
                    <h2>What is <span>E-Waste?</span></h2>
                    <p className='paragraph'>E-waste, or electronic waste, refers to discarded electronic devices like computers, smartphones, and televisions. When these devices are no longer in use, they can pose environmental and health hazards if not disposed of properly. Recycling e-waste helps recover valuable materials and prevents harmful substances from contaminating our soil and water. By responsibly recycling your old electronics, you contribute to a cleaner and more sustainable future.</p>
                    <button className='btn e-waste-btn'>
                        DisvoverMore
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 32 32">
                            <path fill="#e3ff97" d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z" />
                            <path fill="none" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z" />
                        </svg></button>
                </section>
            </section>
            {/* Graph Section */}
            <section className='graph'>
                <div className='px-2' style={{ position: 'relative', width: '100%', height: 0, paddingTop: '75.0000%', paddingBottom: 0, marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                    <iframe title="E-Waste Management" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }} src="https://www.canva.com/design/DAGC-4yICCw/ESCaeokmrjXFY8jXXbimUw/view?embed" allowFullScreen="allowfullscreen" allow="fullscreen"></iframe>
                </div>
            </section>

            {/* Importance of E waste */}
            <section className='importance'>
                <section className='description'>
                <h2>Delve Into Why Selling <span>E-Waste</span><br/>Is Important ?</h2>
                    <p className='paragraph'>E-waste, or electronic waste, refers to discarded electronic devices like computers, smartphones, and televisions. When these devices are no longer in use, they can pose environmental and health hazards if not disposed of properly. Recycling e-waste helps recover valuable materials and prevents harmful substances from contaminating our soil and water. By responsibly recycling your old electronics, you contribute to a cleaner and more sustainable future.</p>
                </section>
                <section className='image'>
                    <img className='img-fluid importance-img' src={ importance } />
                </section>
            </section>
        </>
    )
}

export default Homepage;
