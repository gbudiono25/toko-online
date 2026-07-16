export default function Hero() {
  return (
    <section className="relative px-gutter max-w-container-max mx-auto mt-sm">
      <div className="hero-gradient rounded-xl overflow-hidden min-h-[400px] flex items-center relative">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="A sophisticated abstract technological pattern with glowing fiber optic lines and circuit paths in deep blues and vibrant electric blues, creating a sense of high-speed enterprise connectivity and modern professional aesthetics."
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2C9jN-wOq5yTOlTTmn9mYSyAmjhjChK7A5VXCRDBMclccPhoJoDA2cZtafoqQOSZ0tLEvgsqKHOGCDMToIiAkcR0S7s2CUA_K1UAYqDIzHFCFrBG5EwjEpHWxJtR64oAhhxh7BZ415YdnRmkxcHpsVUND5PciuCK_MIF6HoGuqCvATJwHJ3BSN3IPPAFZjZZ2qiiQq8az2WYpNAZTWP4sP1y3r0-Z715xLTqajjrUgao0oBRX1S3R-fxtxkTqbUgsPpGwESIoI0Ur')" }}
          ></div>
        </div>
        <div className="relative z-10 px-xl max-w-2xl py-xl">
          <span className="inline-block bg-secondary text-on-secondary px-sm py-1 rounded-full text-label-sm font-label-md mb-sm">PROMO TERBATAS</span>
          <h1 className="text-on-primary font-headline-md text-[40px] leading-tight mb-md">Upgrade Performa Kerja dengan Gadget Terbaru.</h1>
          <p className="text-on-primary-container font-body-lg mb-lg">Diskon hingga 45% untuk kategori laptop profesional dan aksesoris kantor pilihan. Stok terbatas.</p>
          <div className="flex gap-sm">
            <button className="bg-secondary-container text-on-secondary-container px-md py-sm rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all">Belanja Sekarang</button>
            <button className="border border-on-primary text-on-primary px-md py-sm rounded-lg font-label-md hover:bg-white/10 transition-all">Lihat Katalog</button>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 bottom-0 w-1/2 h-full">
          <img
            className="w-full h-full object-contain object-bottom p-md"
            data-alt="A high-end, sleek professional workstation setup featuring a modern silver laptop, minimalist wireless peripherals, and a high-resolution ultra-wide monitor, illuminated by soft atmospheric desk lighting in a clean corporate office environment."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASp4nzvx6AUQykQug6wgxLDkcD_PPLABcWAAeB7ahZj-v7mTZb3xbA7_XjkO77XnhBpQV3BilOAXE7eIiKxY13OMQh00V1cCaQuXiP5I8DtFvqfBvASxtVHk5NnPxVUr2kxKCCXJarsvTu1C1evFVuaGooxjcFwqVJ4PVNwqf5pcZxul8GE9RvNNm3ekOLDEPQqLq261jMUlhfzXGIy7nsZqj-yLnPWhT_gXK2ZFlGdsc9BxT0iqc33huU5ztJ39Wv8VYrzvqdj07S"
          />
        </div>
      </div>
    </section>
  )
}
