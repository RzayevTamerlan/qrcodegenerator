const AboutApp = () => {
  return (
    <section>
      <div className="custom-container">
        <div className='flex flex-col gap-2 items-center justify-center'>
          <div className='max-w-[500px]'>
            <h2 className='text-white text-center font-semibold text-tiny sm:text-medium'>
              Generate QR codes for free with logos and colors.
            </h2>
          </div>
          <p className='text-white font-medium text-xxs sm:text-xs text-center'>
            You can also download the QR code as a PNG image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutApp;