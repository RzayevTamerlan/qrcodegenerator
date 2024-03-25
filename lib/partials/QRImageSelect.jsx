import Image from "next/image";
import {useQRImage} from "@state/qrImage";

const logosList = [
  {
    id: 1,
    src: '/assets/logos/instagram.png',
    alt: 'Instagram'
  },
  {
    id: 2,
    src: '/assets/logos/facebook.png',
    alt: 'Facebook'
  },
  {
    id: 3,
    src: '/assets/logos/x.png',
    alt: 'X'
  },
  {
    id: 4,
    src: '/assets/logos/youtube.png',
    alt: 'Youtube'
  },
  {
    id: 5,
    src: '/assets/logos/linkedin.png',
    alt: 'LinkedIn'
  },
  {
    id: 5,
    src: '/assets/logos/whatsapp.png',
    alt: 'WhatsApp'
  },
  {
    id: 5,
    src: '/assets/logos/bitcoin.png',
    alt: 'Bitcoin'
  },
  {
    id: 6,
    src: '/assets/logos/eth.png',
    alt: 'Ethereum'
  },
  {
    id: 7,
    src: '/assets/logos/gmail.png',
    alt: 'Gmail'
  },
]

const QrImageSelect = () => {
  const setImage = useQRImage((state) => state.setImage);
  const image = useQRImage((state) => state.image);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setImage(URL.createObjectURL(imageFile));
  };

  const handleImageRemove = () => {
    setImage('');
  }

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-5'>
        {image && (
          <div className='w-[100px] bg-white h-[100px] border border-1 border-white'>
            <Image className='w-full h-full object-cover' width='100' height='100' src={image} alt='QR code logo' />
          </div>
        )}
        <div className='flex h-full justify-between flex-col gap-3'>
          <label className={`w-full text-center sm:w-auto cursor-pointer bg-blue-500 block text-white p-2 rounded-md`} htmlFor="qrImage">
            Select Image
          </label>
          <button aria-label='Remove logo' onClick={handleImageRemove} className={`w-full text-center sm:w-auto cursor-pointer bg-blue-800 block text-white p-2 rounded-md`}>
            Remove Image
          </button>
        </div>
        <input
          onChange={handleImageChange}
          id='qrImage'
          name='qrImage'
          className='hidden'
          type="file"
          accept="image/*"
        />
      </div>
      <div className='flex flex-col gap-5'>
        <h3 className='text-xs text-white font-semibold'>Or you can select images from this list:</h3>
        <ul className='flex gap-5 flex-wrap'>
          {logosList.map((logo) => (
            <li onClick={() => setImage(logo.src)} className='w-[50px] h-[50px]' key={logo.id}>
              <Image className='w-full h-full object-cover' width={50} height={50} alt={logo.alt} src={logo.src}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QrImageSelect;