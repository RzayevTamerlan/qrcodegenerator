'use client';

import {useEffect, useState} from "react";

const useCryptoQr = () => {
  const [qrAddress, setQrAddress] = useState('1FfmbHfnpaZjKFvyi1okTjJJusN455paPH');
  const [qrAmount, setQrAmount] = useState('0.01');
  const [qrCryptoType, setQrCryptoType] = useState('bitcoin');
  const [realCryptoType, setRealCryptoType] = useState('WPA');
  const [qrCodeSize, setQrCodeSize] = useState(256);

  const handleQRCreate = (data) => {
    setQrAddress(data.address);
    setQrAmount(data.amount);
    setRealCryptoType(qrCryptoType);
    setQrCodeSize(data.size);
  }

  const handleDownload = () => {
    const canvas = document.querySelector('#react-qrcode-logo');
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    link.href = image;
    link.download = `${qrAddress}-qrcode.png`;
    link.click();
  }

  return [qrAddress, qrAmount, setQrCryptoType, qrCryptoType, realCryptoType, qrCodeSize, handleQRCreate, handleDownload]

};

export default useCryptoQr;