'use client';

import {useQRType} from "@state/qrType";
import Image from "next/image";

const qrTypesList = [
  {
    id: 1,
    label: 'URL',
    value: 'url',
    icon: '/assets/icons/url.svg'
  },
  {
    id: 2,
    label: 'WiFi',
    value: 'wifi',
    icon: '/assets/icons/wifi.svg'
  },
  {
    id: 3,
    label: 'WhatsApp',
    value: 'whatsapp',
    icon: '/assets/icons/whatsapp.svg'
  },
  {
    id: 4,
    label: 'Email',
    value: 'email',
    icon: '/assets/icons/email.svg'
  },
  {
    id: 5,
    label: 'Cryptocurrency',
    value: 'cryptocurrency',
    icon: '/assets/icons/crypto.svg'
  },
]

const QRSelect = () => {
  const changeQRType = useQRType((state) => state.setQRType);
  const qrType = useQRType((state) => state.qrType);

  const handleQRType = (type) => {
    changeQRType(type);
  }

  return (
    <div className='flex justify-center items-center gap-3 mb-10'>
      <ul className='flex bg-gray-800 px-10 py-7 rounded-[40px] flex-col md:flex-row items-center gap-5'>
        {qrTypesList.map((type) => (
          <li onClick={() => handleQRType(type.value)}
              className={`cursor-pointer rounded-[30px] w-full md:w-fit px-5 py-4 border border-1 transition-all duration-300 ${qrType === type.value ? 'border-white' : 'border-gray-600'} border-gray-600 hover:border-white`}
              key={type.id}>
            <button className='flex justify-between w-full md:justify-stretch text-white font-semibold items-center gap-3'>
              {type.label}
              <Image width='30' height='30' alt={type.label} src={type.icon}/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QRSelect;