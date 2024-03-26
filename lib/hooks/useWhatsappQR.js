'use client';

import {useState} from "react";

const useWhatsappQr = () => {
  const [qrNumber, setQrNumber] = useState('+994505554944');
  const [qrCodeSize, setQrCodeSize] = useState(256);

  const handleQRCreate = (data) => {
    setQrNumber(data['phonenumber']);
    setQrCodeSize(data.size);
  }

  const handleDownload = () => {
    const canvas = document.querySelector('#react-qrcode-logo');
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    link.href = image;
    link.download = `${qrNumber}-qrcode.png`;
    link.click();
  }

  return [qrNumber, qrCodeSize, handleQRCreate, handleDownload]

};

export default useWhatsappQr;