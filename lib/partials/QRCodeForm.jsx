'use client';

import URLForm from "@partials/URLForm";
import {useQRType} from "@/lib/state/qrType";
import QRSelect from "@partials/QRSelect";
import QRPropSelect from "@partials/QRPropSelect";
import {ConfigProvider} from "antd";

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
          <ConfigProvider
            theme={{
              components: {
                Collapse: {
                  contentBg: ''
                },
              },
            }}
          >
            <QRPropSelect />
          </ConfigProvider>
        </div>
      </div>
    </section>
  );
};

export default QrCodeForm;