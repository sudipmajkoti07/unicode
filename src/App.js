// App.js
import React from 'react';
import Header from './header'; // Assuming you have a Header component
import About from './about';
import Contact from './contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SkillsComponent from './project';
import Footer from './footer';
import HackathonPage from './hackathon';

const skillsData = [
  { title: 'AR ', description: 'Meta open source', progress: 85, barWidth: 1 },
  { title: 'ZenML', description: 'ML framework', progress: 75, barWidth: 2 },
  { title: 'PowerBI', description: 'Dashboard', progress: 85, barWidth: 3 },
  { title: 'CodeBasic', description: 'module manipulation', progress: 90, barWidth: 4 },
  { title: 'TikTok algorithm', description: 'Dimension reduction', progress: 80, barWidth: 4 },
  { title: 'Battery', description: 'Lithinium research', progress: 70, barWidth: 4 },
  { title: 'ETL framework', description: 'Airflow', progress: 50, barWidth: 4 },
  { title: 'cloud ', description: 'AWS', progress: 50, barWidth: 4 },
];


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/hackathon' element={<HackathonPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<SkillsComponent skills={skillsData} />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
