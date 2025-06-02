import React from 'react';
import Pdfviewer from './pdfview';
import path from './docs/essay.pdf';
import { Button } from '@react-pdf-viewer/core';
import './navbar.css'
export default function Catalog() {
  return (
    <div className="catalog">
      <h1 className='hero-title'>Exhibition Essay</h1>
      <Pdfviewer/>
      <a href={path} download={path} target='_blank'><Button>Download Essay</Button></a>
    </div>
  );
}