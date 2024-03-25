'use client';

import {QRCode} from 'react-qrcode-logo';
import useQR from "@hooks/useQR";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {QRFormSchema} from "@/lib/schema/QRFormSchema";

const QrCodeForm = () => {
  const [qrCodeValue, qrCodeSize, handleQRCreate, handleDownload] = useQR();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(QRFormSchema),
    mode: 'all',
    reValidateMode: 'onChange'
  });

  return (
    <section className='mt-10'>
      <div className="custom-container">
        <div className='flex flex-col gap-5 items-center justify-center'>
          <QRCode size={qrCodeSize} value={qrCodeValue}/>
          <form onSubmit={handleSubmit(handleQRCreate)} className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
              <input {...register('url')} name='url' id='url' type="text" placeholder='Enter URL or text' className='bg-gray-800 text-white p-2 rounded-md'/>
              {errors.url && <p className='text-red-500 text-3xs font-semibold'>{errors.url.message}</p>}
              <input {...register('size')} name='size' id='size' type="number" placeholder='Enter Size' className='bg-gray-800 text-white p-2 rounded-md'/>
              {errors.size && <p className='text-red-500 text-3xs font-semibold'>{errors.size.message}</p>}
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-5'>
              <button aria-label='Generate QR code.' className='w-full sm:w-auto bg-blue-500 text-white p-2 rounded-md'>Generate QR Code</button>
              <button aria-label='Download QR code' onClick={handleDownload} type='button'
                      className='w-full sm:w-auto bg-blue-700 text-white p-2 rounded-md'>Download QR Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QrCodeForm;