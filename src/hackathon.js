// HackathonPage.js

import React, { useState } from 'react';
import './hackathon.css';

const HackathonPage = () => {
    // Example of using React state for interactive features
    const [registrationOpen, setRegistrationOpen] = useState(false);

    const toggleRegistration = () => {
        setRegistrationOpen(!registrationOpen);
    };

    return (
        <div className="hackathon-page">
            <header>
                <h1>Awesome Hackathon</h1>
                <p>Date: February 15-16, 2024</p>
                <p>Location: Virtual</p>
            </header>

            <section className="hackathon-description">
                <h2>About the Hackathon</h2>
                <p>
                    Join us for an exciting hackathon and showcase your skills!
                    Collaborate with other participants, learn new technologies, and build innovative projects.
                </p>
            </section>

            <section className="hackathon-details">
                <h2>Details</h2>
                <p>
                    The hackathon will consist of various events, including registration, opening ceremony, hacking sessions, and a closing ceremony.
                </p>
                <button onClick={toggleRegistration}>
                    {registrationOpen ? 'Close Registration' : 'Open Registration'}
                </button>
                {registrationOpen && <p>Registration is now open. Sign up and join the event!</p>}
            </section>

            <section className="hackathon-schedule">
                <h2>Schedule</h2>
                <ul>
                    <li><strong>9:00 AM</strong> - Registration</li>
                    <li><strong>10:00 AM</strong> - Opening Ceremony</li>
                    <li><strong>12:00 PM</strong> - Hacking Begins</li>
                    {/* Add more schedule items */}
                </ul>
            </section>

            <section className="hackathon-teams">
                <h2>Teams</h2>
                <ul>
                    <li><strong>Team 1:</strong> John, Jane, Bob</li>
                    <li><strong>Team 2:</strong> Alice, Charlie, Dave</li>
                    {/* Add more teams */}
                </ul>
            </section>
        </div>
    );
};

export default HackathonPage;
