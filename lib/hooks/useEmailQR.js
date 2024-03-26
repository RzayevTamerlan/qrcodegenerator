'use client';

import {useState} from "react";

const useEmailQR = () => {
  const [qrEmail, setQrEmail] = useState('tamerlan.rzev@gmail.com');
  const [qrSubject, setQrSubject] = useState('QR Code');
  const [qrMessage, setQrMessage] = useState('QR Code');
  const [qrCodeSize, setQrCodeSize] = useState(256);

  const handleQRCreate = (data) => {
    setQrEmail(data.email);
    setQrSubject(data.subject);
    setQrMessage(data.message);
    setQrCodeSize(data.size);
  }

  const handleDownload = () => {
    const canvas = document.querySelector('#react-qrcode-logo');
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    link.href = image;
    link.download = `${qrEmail}-qrcode.png`;
    link.click();
  }

  return [qrEmail, qrSubject, qrMessage, qrCodeSize, handleQRCreate, handleDownload]
};

export default useEmailQR;