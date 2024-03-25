import AboutApp from "@partials/AboutApp";
import QrCodeForm from "@partials/QRCodeForm";

export default function Home() {
  return (
    <main className='flex min-h-[calc(100vh-68.8px)] sm:min-h-[calc(100vh-108.8px)] flex-col py-10 bg-gray-900'>
      <AboutApp />
      <QrCodeForm />
    </main>
  );
}
