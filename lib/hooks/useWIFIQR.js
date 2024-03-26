'use client';

import {useEffect, useState} from "react";

const useWIFIQR = () => {
  const [qrSSID, setQrSSID] = useState('Hello World!');
  const [qrPassword, setQrPassword] = useState('Hello World!');
  const [qrSecurity, setQrSecurity] = useState('WPA');
  const [realSecurity, setRealSecurity] = useState('WPA');
  const [qrCodeSize, setQrCodeSize] = useState(256);

  useEffect(() => {
    if(realSecurity === 'nopass') {
      setQrPassword('');
    }
  }, [realSecurity]);

  const handleQRCreate = (data) => {
    setQrSSID(data['ssid']);
    setQrPassword(data.password);
    setRealSecurity(qrSecurity);
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

  return [qrSSID, qrPassword, setQrSecurity, qrSecurity, realSecurity, qrCodeSize, handleQRCreate, handleDownload]

};

export default useWIFIQR;