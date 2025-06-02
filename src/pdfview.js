
import path from './docs/essay.pdf';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './pdfview.css'


export default function Pdfviewer() {
    
    return (
      <div className="wrapper-div" >
        <div className="container-pdf">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
            <Viewer fileUrl={path} defaultScale={1.2}  />
        </div>
      </div>
    );
}