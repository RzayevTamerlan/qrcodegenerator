'use client';

import {useQRType} from "@state/qrType";
import Image from "next/image";

const qrTypesList = [
  {
    id: 1,
    label: 'URL',
    value: 'url',
    icon: '/assets/icons/url.svg'
  }
]

const QRSelect = () => {
  const changeQRType = useQRType((state) => state.setQRType);

  const handleQRType = (type) => {
    changeQRType(type);
  }

  return (
    <div className='flex justify-center items-center gap-3'>
      <ul className='max-w-[642px] w-full'>
        {qrTypesList.map((type) => (
          <li onClick={() => handleQRType(type.value)} className='cursor-pointer rounded-[30px] w-fit px-5 py-4 border border-1 transition-all duration-300 border-gray-600 hover:border-white' key={type.id}>
            <button className='flex text-white font-semibold items-center gap-3'>
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