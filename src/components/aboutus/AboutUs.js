import React from 'react';
import './aboutus.css';
const AboutUs = () => {
    // Dummy data for team members
    const teamMembers = [
        { id: 1, name: 'Yuvraj Lolage', role: 'Project Manager', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',color:"#669C8F" },
        { id: 2, name: 'Sara Lonare', role: 'Frontend Developer', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',color:"#72BE2C" },
        { id: 3, name: 'Aditi Londhe', role: 'Frontend Developer', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', color:"#FF5733" },
        { id: 4, name: 'Mayuresh More', role: 'Frontend Developer', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', color:"#3377FF" }
    ];

    return (
        <div className="container my-5">
            <h1 className='text-center mb-2'>Importance of E-waste Disposal</h1>
            <p>An effective E-Waste Management System plays a pivotal role in addressing the pressing issue of electronic waste disposal. By implementing proper management practices, it ensures the responsible handling, recycling, and disposal of electronic devices, reducing environmental pollution and health risks associated with toxic materials. Additionally, it promotes resource conservation by recovering valuable materials from discarded electronics, contributing to a more sustainable and circular economy. Moreover, E-Waste Management Systems help to mitigate the growing problem of electronic waste accumulation, fostering a cleaner and healthier environment for present and future generations. Overall, their significance lies in their ability to foster eco-friendly practices while safeguarding human health and natural resources.</p>
            <h1 className="text-center mb-4">About Us</h1>
            <div className="row">
                {teamMembers.map(member => (
                    <div key={member.id} className="col-md-6 col-lg-3 mb-4">
                        <div className="card" style={{ backgroundColor: member.color }}>
                            <div className="card-body">
                                <h5 className="card-title">{member.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                                <p className="card-text">{member.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
