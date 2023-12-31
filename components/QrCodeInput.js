import { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import styles from './QRCodeGenerator.css';
import { toPng } from 'svg-to-image'; 

export default function QRCodeGenerator() {
  const [text, setText] = useState('');
  const qrCodeRef = useRef(null); 

  const clearTextAndQRCode = () => {
    setText('');
  };

  return (
    <div className='container'>
      <textarea
        placeholder="Enter text for QR code"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div>
        <button onClick={clearTextAndQRCode}>Clear Text</button>
      </div>

      {text && (
        <div className='qrCodeWrapper' ref={qrCodeRef}>
          <QRCode value={text} size={200} />
        </div>
      )}
    </div>
  );
}

