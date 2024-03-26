'use client';

import useUrlQR from "@hooks/useUrlQR";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {QRURLFormSchema} from "@/lib/schema/QRURLFormSchema";
import {QRCode} from "react-qrcode-logo";
import Input from "@components/Input";
import BtnGroup from "@components/BtnGroup";
import {useQRColor} from "@state/qrColor";
import {useQRImage} from "@state/qrImage";
import {Button} from "antd";
import {toast} from "react-toastify";

const URLForm = () => {
  const [qrCodeValue, qrCodeSize, handleQRCreate, handleDownload] = useUrlQR();
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
    resolver: yupResolver(QRURLFormSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      url: qrCodeValue,
      size: qrCodeSize,
    }
  });

  const copyImageFromCanvas = async () => {
    const canvas = document.querySelector('#react-qrcode-logo');

    if (canvas) {
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      const item = new ClipboardItem({ 'image/png': blob });

      navigator.clipboard.write([item])
        .then(() => {
          toast.success('Image copied to clipboard!🙌')
        })
        .catch(() => {
          toast.error('Failed to copy image to clipboard!??😡')
        });
    }
  };

  return (
    <div className='flex flex-col-reverse sm:flex-row gap-5 items-center sm:items-start justify-center'>
      <form onSubmit={handleSubmit(handleQRCreate)} className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <Input type='text' errors={errors} name='url' register={register} placeholder='Enter URL or Text'
                 label='Enter URL or Text*'/>
          <Input type='number' errors={errors} name='size' placeholder='Enter Size' register={register} label='Size*'/>
          {qrCodeSize > 512 &&
            <span className='text-yellow-400 font-semibold'>QR size is too large for full preview, but you are still able to download it.</span>}
        </div>
        <BtnGroup handleDownload={handleDownload}/>
      </form>
      <div className='hidden'>
        <QRCode qrStyle={qrDesign} ecLevel={"H"} id='react-qrcode-logo' logoPadding={1} logoImage={qrImage} logoHeight={qrImageSize}
                logoWidth={qrImageSize} eyeColor={[qrLeftTopEyeColor, qrRightTopEyeColor, qrLeftBottomEyeColor]}
                bgColor={qrBgColor} fgColor={qrFgColor} size={qrCodeSize} value={qrCodeValue}/>
      </div>
      <div className='flex flex-col gap-4'>
        <QRCode qrStyle={qrDesign} ecLevel={"H"} id='react-qr' logoPadding={1} logoImage={qrImage}
                logoHeight={qrImageSize > 175 ? 175 : qrImageSize} logoWidth={qrImageSize > 175 ? 175 : qrImageSize}
                eyeColor={[qrLeftTopEyeColor, qrRightTopEyeColor, qrLeftBottomEyeColor]} bgColor={qrBgColor}
                fgColor={qrFgColor} size={qrCodeSize > 512 ? 512 : qrCodeSize} value={qrCodeValue}/>
        <Button onClick={copyImageFromCanvas} className='text-white font-medium text-center text-xxs py-4 h-fit'>
          Copy to Clipboard
        </Button>
      </div>
    </div>
  );
};

export default URLForm;