import {useQRColor} from "@state/qrColor";
import {useQRImage} from "@state/qrImage";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Input from "@components/Input";
import BtnGroup from "@components/BtnGroup";
import {QRCode} from "react-qrcode-logo";
import useEmailQR from "@hooks/useEmailQR";
import {QREmailSchema} from "@/lib/schema/QREmailSchema";

const EmailForm = () => {
  const [qrEmail, qrSubject, qrMessage, qrCodeSize, handleQRCreate, handleDownload] = useEmailQR();
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
    resolver: yupResolver(QREmailSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      email: qrEmail,
      subject: qrSubject,
      message: qrMessage,
      size: qrCodeSize,
    }
  });

  const qrCodeValue = `mailto:${qrEmail}?subject=${qrSubject ? qrSubject : ''}&body=${qrMessage ? qrMessage : ''}`;

  return (
    <div className='flex flex-col-reverse sm:flex-row gap-5 items-center sm:items-start justify-center'>
      <form onSubmit={handleSubmit(handleQRCreate)} className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <Input type='text' errors={errors} name='email' register={register} placeholder='Enter Your Email'
                 label='Enter Your Email*'/>
          <Input type='text' errors={errors} name='subject' register={register} placeholder='Enter Your Subject'
                 label='Enter Your Subject'/>
          <Input type='text' errors={errors} name='message' register={register} placeholder='Enter Your Message'
                 label='Enter Your Message'/>
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
      <QRCode qrStyle={qrDesign} ecLevel={"H"} id='react-qr' logoPadding={1} logoImage={qrImage}
              logoHeight={qrImageSize > 175 ? 175 : qrImageSize} logoWidth={qrImageSize > 175 ? 175 : qrImageSize}
              eyeColor={[qrLeftTopEyeColor, qrRightTopEyeColor, qrLeftBottomEyeColor]} bgColor={qrBgColor}
              fgColor={qrFgColor} size={qrCodeSize > 512 ? 512 : qrCodeSize} value={qrCodeValue}/>
    </div>
  );
};

export default EmailForm;