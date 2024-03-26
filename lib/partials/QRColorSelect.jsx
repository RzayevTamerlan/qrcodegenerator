'use client';

import {useQRColor} from "@state/qrColor";
import {Button, Dropdown, Space} from "antd";
import DropdownList from "@components/DropdownList";

const QRColorSelect = () => {
  const qrBgColor = useQRColor((state) => state.qrBgColor);
  const qrFgColor = useQRColor((state) => state.qrFgColor);
  const qrLeftTopEyeColor = useQRColor((state) => state.qrEye1Color);
  const qrRightTopEyeColor = useQRColor((state) => state.qrEye2Color);
  const qrLeftBottomEyeColor = useQRColor((state) => state.qrEye3Color);
  const qrDesign = useQRColor((state) => state.qrDesign);
  const setQRBgColor = useQRColor((state) => state.setQRBgColor);
  const setQRFgColor = useQRColor((state) => state.setQRFgColor);
  const setQRLeftTopColor = useQRColor((state) => state.setQREye1Color);
  const setQRRightTopColor = useQRColor((state) => state.setQREye2Color);
  const setQRLeftBottomColor = useQRColor((state) => state.setQREye3Color);
  const setQRDesign = useQRColor((state) => state.setQRDesign);

  const handleDesignChange = (design) => {
    setQRDesign(design);
  }

  const items = [{
    key: '1',
    label: 'Squares',
    prop: 'squares'
    },
    {
      key: '2',
      label: 'Dots',
      prop: 'dots'
    }
  ]

  console.log(qrDesign)

  return (
    <>
      <div className='grid grid-rows-5 grid-cols-1 sm:grid-rows-2 sm:grid-cols-3 gap-5'>
        <div className='flex items-center sm:justify-center gap-2'>
          <label className='text-xss text-white font-semibold' htmlFor="qrBgColor">QR Background Color</label>
          <input onChange={(e) => setQRBgColor(e.target.value)} type="color" id="qrBgColor" value={qrBgColor}/>
        </div>
        <div className='flex items-center sm:justify-center gap-2'>
          <label className='text-xss text-white font-semibold' htmlFor="qrFgColor">QR Foreground Color</label>
          <input onChange={(e) => setQRFgColor(e.target.value)} type="color" id="qrFgColor" value={qrFgColor}/>
        </div>
        <div className='flex items-center sm:justify-center gap-2'>
          <label className='text-xss text-white font-semibold' htmlFor="qrLeftEyeColor">QR Left Top Eye Color</label>
          <input onChange={(e) => setQRLeftTopColor(e.target.value)} type="color" id="qrLeftEyeColor"
                 value={qrLeftTopEyeColor}/>
        </div>
        <div className='flex items-center sm:justify-center gap-2'>
          <label className='text-xss text-white font-semibold' htmlFor="qrRightTopEyeColor">QR Right Top Eye
            Color</label>
          <input onChange={(e) => setQRRightTopColor(e.target.value)} type="color" id="qrRightTopEyeColor"
                 value={qrRightTopEyeColor}/>
        </div>
        <div className='flex items-center sm:justify-center gap-2'>
          <label className='text-xss text-white font-semibold' htmlFor="qrLeftBottomEyeColor">QR Left Bottom Eye
            Color</label>
          <input onChange={(e) => setQRLeftBottomColor(e.target.value)} type="color" id="qrLeftBottomEyeColor"
                 value={qrLeftBottomEyeColor}/>
        </div>
        <div className='flex items-center sm:justify-center gap-2'>
          <label className='text-xss text-white font-semibold' htmlFor="qrDesign">QR Design</label>
          <Dropdown overlay={
            <DropdownList items={items} handler={handleDesignChange}/>
          }>
            <Button>
              <Space>
                <span
                  className='text-white font-medium'>{`${qrDesign.charAt(0).toUpperCase()}${qrDesign.slice(1).toLowerCase()}`}</span>
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default QRColorSelect;