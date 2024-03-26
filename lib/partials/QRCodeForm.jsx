'use client';

import {useQRType} from "@/lib/state/qrType";
import QRSelect from "@partials/QRSelect";
import QRPropSelect from "@partials/QRPropSelect";
import {ConfigProvider} from "antd";
import URLForm from "@partials/URLForm";
import WifiForm from "@partials/WIFIForm";
import WhatsappForm from "@partials/QRWhatsappForm";
import EmailForm from "@partials/EmailForm";
import CryptoForm from "@partials/CryptoForm";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const qrTypes = {
  url: <URLForm />,
  wifi: <WifiForm />,
  whatsapp: <WhatsappForm />,
  email: <EmailForm />,
  cryptocurrency: <CryptoForm />,
}

const QrCodeForm = () => {
  const qrType = useQRType((state) => state.qrType);

  return (
    <>
      <ToastContainer />
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
    </>
  );
};

export default QrCodeForm;