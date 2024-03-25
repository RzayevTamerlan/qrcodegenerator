'use client';

import Button from "@components/Button";

const BtnGroup = ({handleDownload}) => {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-5'>
      <Button type='submit' label='Generate QR Code' isLight={true} text='Generate QR Code'/>
      <Button onClick={handleDownload} type='button' label='Download QR Code' isLight={false} text='Download QR Code'/>
    </div>
  );
};

export default BtnGroup;