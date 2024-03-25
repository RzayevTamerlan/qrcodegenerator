'use client';

import useUrlQR from "@hooks/useUrlQR";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {QRFormSchema} from "@/lib/schema/QRFormSchema";
import {QRCode} from "react-qrcode-logo";
import Input from "@components/Input";
import BtnGroup from "@components/BtnGroup";

const URLForm = () => {
  const [qrCodeValue, qrCodeSize, handleQRCreate, handleDownload] = useUrlQR();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(QRFormSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      url: qrCodeValue,
      size: qrCodeSize,
    }
  });

  return (
    <div className='flex flex-col-reverse sm:flex-row gap-5 items-center justify-center'>
      <form onSubmit={handleSubmit(handleQRCreate)} className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <Input type='text' errors={errors} name='url' register={register} placeholder='Enter URL or Text'
                 label='Enter URL or Text*'/>
          <Input type='number' errors={errors} name='size' placeholder='Enter Size' register={register} label='Size*'/>
        </div>
        <BtnGroup handleDownload={handleDownload}/>
      </form>
      <QRCode size={qrCodeSize} value={qrCodeValue}/>
    </div>
  );
};

export default URLForm;