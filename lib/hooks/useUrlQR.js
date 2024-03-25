'use client';

import {useState} from "react";

const useUrlQR = () => {
  const [qrCodeValue, setQrCodeValue] = useState('https://qrcodegenerator-theta.vercel.app/');
  const [qrCodeSize, setQrCodeSize] = useState(256);

  const handleQRCreate = (data) => {
    setQrCodeValue(data.url);
    setQrCodeSize(data.size);
  }

  const handleDownload = () => {
    const canvas = document.querySelector('#react-qrcode-logo');
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    link.href = image;
    link.download = `${qrCodeValue}-qrcode.png`;
    link.click();
  }

  return [qrCodeValue, qrCodeSize, handleQRCreate, handleDownload]

};

export default useUrlQR;