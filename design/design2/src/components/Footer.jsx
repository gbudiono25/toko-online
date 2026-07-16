export default function Footer() {
  return (
    <footer className="w-full mt-xl bg-primary dark:bg-tertiary-container text-on-primary border-t border-outline">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md px-gutter py-xl max-w-container-max mx-auto">
        <div className="space-y-sm">
          <span className="font-headline-sm text-headline-sm text-on-primary font-bold">ProMarket</span>
          <p className="text-body-sm opacity-80">Platform e-commerce terpercaya untuk kebutuhan profesional dan personal Anda. Menghadirkan kualitas terbaik sejak 2024.</p>
          <div className="flex gap-sm">
            <a className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all" href="#">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
            </a>
            <a className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all" href="#">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-label-md text-on-primary mb-md">Perusahaan</h4>
          <ul className="space-y-sm text-body-sm opacity-80">
            <li><a className="hover:opacity-100 hover:translate-x-1 transition-all inline-block" href="#">Tentang Kami</a></li>
            <li><a className="hover:opacity-100 hover:translate-x-1 transition-all inline-block" href="#">Karir</a></li>
            <li><a className="hover:opacity-100 hover:translate-x-1 transition-all inline-block" href="#">Blog Berita</a></li>
            <li><a className="hover:opacity-100 hover:translate-x-1 transition-all inline-block" href="#">Lokasi Toko</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-on-primary mb-md">Bantuan</h4>
          <ul className="space-y-sm text-body-sm opacity-80">
            <li><a className="hover:opacity-100 hover:translate-x-1 transition-all inline-block" href="#">Contact Us</a></li>
            <li><a className="hover:opacity-100 hover:translate-x-1 transition-all inline-block" href="#">Shipping Policy</a></li>
            <li><a className="hover:opacity-100 hover:translate-x-1 transition-all inline-block" href="#">Payment Methods</a></li>
            <li><a className="hover:opacity-100 hover:translate-x-1 transition-all inline-block" href="#">Status Pesanan</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-on-primary mb-md">Newsletter</h4>
          <p className="text-[12px] opacity-80 mb-sm">Dapatkan info produk terbaru dan diskon eksklusif.</p>
          <div className="flex">
            <input className="w-full bg-white/10 border border-white/20 rounded-l-lg px-sm py-xs text-xs outline-none focus:bg-white/20 transition-all" placeholder="Email Anda" type="email" />
            <button className="bg-secondary px-sm rounded-r-lg hover:bg-secondary-container transition-colors">
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-md px-gutter">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-sm">
          <p className="text-body-sm opacity-60">© 2024 ProMarket Enterprise. All rights reserved.</p>
          <div className="flex gap-md text-[12px] opacity-60">
            <a className="hover:opacity-100" href="#">Privacy</a>
            <a className="hover:opacity-100" href="#">Terms</a>
            <a className="hover:opacity-100" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
