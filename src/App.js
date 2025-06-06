import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './Catalog.js';
import About from './About.js';
import Contact from './Contact.js';
import './exhibition.css';
import image from './img/img1.jpg';
import image2 from './img/img2.jpg';
import image3 from './img/img3.jpg';
import image4 from './img/img4.jpg';
import image5 from './img/sultanbellini.jpg';
import image6 from './img/img6.png';
import Site_footer from './footer.js';
import Navbar from './navvbar.js';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { title } from 'framer-motion/client';

const paintings_list = [
  {
    title: "Man in Oriental Costume (The Noble Slav or Man in a Turban)",
    artist: "Rembrandt",
    date: "1632",
    medium: "Oil on canvas",
    catalog_entry: "<p>As you move through this exhibition, we invite you to engage deeply with the art and to consider the questions it raises about cultural encounter, representation, and power. What does it mean to depict another culture? How do fascination and fantasy intertwine in these images? And what can these centuries-old works tell us about the ongoing conversations between East and West in our world today?</p>",
    collection: "The Metropolitan Museum of Art",
    imageUrl: image
  },
  {
    title: "The Abduction of Europa",
    artist: "David Teniers the Younger",
    date: "1654-1656",
    medium: "Oil on Canvas",
    catalog_entry: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
    collection: "Art Institute of Chicago",
    imageUrl: image2
  },
  {
    title: "The Descent from the Cross by Torchlight",
    artist: "Rembrandt van Rijn - Ferdandad Bol",
    date: "1654",
    medium: "Etching and drypoint on ivory Japanese paper",
    catalog_entry: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
    collection: "Art Institute of Chicago",
    imageUrl: image3
  },
  {
    title: "The Music Lesson",
    artist: "Jacob Ochtervelt",
    date: "1671",
    medium: "Oil on canvas",
    catalog_entry: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
    collection: "Art Institute of Chicago",
    imageUrl: image4
  },
  {
    title: "The Sultan Mehmet II",
    artist: "Gentile Bellini",
    date: "1480",
    medium: "Oil on Canvas",
    catalog_entry: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
    collection: "National Gallery (UK)",
    imageUrl: image5
  },
  {
    title: "Christ Washing the Disciples’ Feet",
    artist: "Rembrandt van Rijn",
    date: "1640 - 1650",
    medium: "Oil on Canvas",
    catalog_entry: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
    collection: "Rijksmuseum (Amsterdam)",
    imageUrl: image6
  }
];

function Exhibition() {
  const [index, setIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const painting = paintings_list[index];
  const prev = () => {
    setIndex((index - 1 + paintings_list.length) % paintings_list.length);
    setFadeKey(fadeKey + 1);
  };
  const next = () => {
    setIndex((index + 1) % paintings_list.length);
    setFadeKey(fadeKey + 1);
  };

  return (
    <div className="exhibit">
      <motion.div
        className='hero'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className='hero-title'>Final Exhibition</h1>
        <p className='hero-subtitle'>From Amsterdam to Istanbul: Kernels of Orientalism in Early Modern European Art</p>
      </motion.div>

      <div key={fadeKey} className='painting-container'>
        <img src={painting.imageUrl} alt={painting.title} className='painting_img' />
        <div className='painting-info'>
          <h2>{painting.title}</h2>
          <p><strong>Artist:</strong> {painting.artist}</p>
          <p><strong>Medium:</strong> {painting.medium}</p>
          <p><strong>Date:</strong> {painting.date}</p>
          <p><strong>Collection:</strong> {painting.collection}</p>
        </div>
        <div>
          <p>{painting.catalog_entry}</p>
        </div>
      </div>

      <div className='nav'>
        <button onClick={prev}><FaArrowLeft /> Back</button>
        <button onClick={next}>Next <FaArrowRight /></button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="exhibit box">
        <Navbar />
        <Routes>
          <Route path="" element={<Exhibition />} />
          <Route path="/" element={<Exhibition />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Site_footer />
      </div>
    </Router>
  );
}

export default App;
