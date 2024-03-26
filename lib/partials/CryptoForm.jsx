'use client';

import {useQRColor} from "@state/qrColor";
import {useQRImage} from "@state/qrImage";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Input from "@components/Input";
import {Button, Dropdown, Space} from "antd";
import DropdownList from "@components/DropdownList";
import BtnGroup from "@components/BtnGroup";
import {QRCode} from "react-qrcode-logo";
import useCryptoQr from "@hooks/useCryptoQR";
import {QRCryptoSchema} from "@/lib/schema/QRCryptoSchema";

const cryptoTypes = {
  bitcoin: 'Bitcoin',
  ethereum: 'Ethereum',
  binancecoin: 'Binance Coin(BNB)',
  tron: 'TRON',
  litecoin: 'Litecoin',
  bitcoincash: 'Bitcoin Cash',
}

const CryptoForm = () => {
  const [qrAddress, qrAmount, setQrCryptoType, qrCryptoType, realCryptoType, qrCodeSize, handleQRCreate, handleDownload] = useCryptoQr();
  const qrBgColor = useQRColor((state) => state.qrBgColor);
  const qrFgColor = useQRColor((state) => state.qrFgColor);
  const qrLeftTopEyeColor = useQRColor((state) => state.qrEye1Color);
  const qrRightTopEyeColor = useQRColor((state) => state.qrEye2Color);
  const qrLeftBottomEyeColor = useQRColor((state) => state.qrEye3Color);
  const qrImage = useQRImage((state) => state.image);
  const qrImageSize = useQRImage((state) => state.size);
  const qrDesign = useQRColor((state) => state.qrDesign);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(QRCryptoSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      address: qrAddress,
      amount: qrAmount,
      size: qrCodeSize,
    }
  });

  const items = [
    {key: '1', label: 'Bitcoin', prop: 'bitcoin'},
    {key: '2', label: 'Ethereum', prop: 'ethereum'},
    {key: '3', label: 'Binance Coin(BNB)', prop: 'binancecoin'},
    {key: '4', label: 'TRON', prop: 'tron'},
    {key: '5', label: 'Litecoin', prop: 'litecoin'},
    {key: '6', label: 'Bitcoin Cash', prop: 'bitcoincash'},
  ]
  const handleCryptoChange = (crypto) => {
    setQrCryptoType(crypto);
  }

  const qrCodeValue = `${realCryptoType}:${qrAddress}${qrAmount && `?amount=${qrAmount}`}`;

  return (
    <div className='flex flex-col-reverse sm:flex-row gap-5 items-center sm:items-start justify-center'>
      <form onSubmit={handleSubmit(handleQRCreate)} className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <Input type='text' errors={errors} name='address' register={register} placeholder='Enter Wallet Address'
                 label='Enter Your Wallet Address*'/>
          <Input type='number' errors={errors} name='amount' register={register} placeholder='Enter Amount'
                 label='Enter Amount'/>
          <span className='text-white'>Cryptocurrency type*</span>
          <Dropdown overlay={
            <DropdownList items={items} handler={handleCryptoChange}/>
          }>
            <Button>
              <Space>
                <span
                  className='text-white font-medium'>{`${cryptoTypes[qrCryptoType]}`}</span>
              </Space>
            </Button>
          </Dropdown>
          <Input type='number' errors={errors} name='size' placeholder='Enter Size' register={register} label='Size*'/>
          {qrCodeSize > 512 &&
            <span className='text-yellow-400 font-semibold'>QR size is too large for full preview, but you are still able to download it.</span>}
        </div>
        <BtnGroup handleDownload={handleDownload}/>
      </form>
      <div className='hidden'>
        <QRCode qrStyle={qrDesign} ecLevel={"H"} id='react-qrcode-logo' logoPadding={1} logoImage={qrImage}
                logoHeight={qrImageSize}
                logoWidth={qrImageSize} eyeColor={[qrLeftTopEyeColor, qrRightTopEyeColor, qrLeftBottomEyeColor]}
                bgColor={qrBgColor} fgColor={qrFgColor} size={qrCodeSize} value={qrCodeValue}/>
      </div>
      <QRCode qrStyle={qrDesign} ecLevel={"H"} id='react-qr' logoPadding={1} logoImage={qrImage}
              logoHeight={qrImageSize > 175 ? 175 : qrImageSize} logoWidth={qrImageSize > 175 ? 175 : qrImageSize}
              eyeColor={[qrLeftTopEyeColor, qrRightTopEyeColor, qrLeftBottomEyeColor]} bgColor={qrBgColor}
              fgColor={qrFgColor} size={qrCodeSize > 512 ? 512 : qrCodeSize} value={qrCodeValue}/>
    </div>
  );
};

export default CryptoForm;