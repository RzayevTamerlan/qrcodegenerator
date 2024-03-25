import {Collapse} from "antd";
import Image from "next/image";
import QRColorSelect from "@partials/QRColorSelect";

const items = [
  {
    key: '1',
    label: <span className='text-white font-semibold'>Change QR Code Color</span>,
    children: <QRColorSelect />,
  },
];

const QRPropSelect = () => {
  return (
    <div className='mt-10'>
      <Collapse expandIcon={({ isActive }) => <div className={`flex h-full items-center justify-center transition-all duration-300 transform ${isActive && 'rotate-[90deg]'}`}><Image width='20' height='20' src='/assets/icons/arrow-right.svg' alt='Arrow' /></div>} items={items} />
    </div>
  );
};

export default QRPropSelect;