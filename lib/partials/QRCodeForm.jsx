'use client';

import URLForm from "@partials/URLForm";
import {useQRType} from "@/lib/state/qrType";
import QRSelect from "@partials/QRSelect";

const qrTypes = {
  url: <URLForm />,
}

const QrCodeForm = () => {
  const qrType = useQRType((state) => state.qrType);

  return (
    <section className='mt-10'>
      <div className="custom-container">
        <div className='flex flex-col'>
          <QRSelect />
          {qrTypes[qrType]}
        </div>
      </div>
    </section>
  );
};

export default QrCodeForm;