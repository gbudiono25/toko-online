export default function Features() {
  return (
    <section className="mt-xl bg-surface-container py-lg px-gutter border-y border-outline-variant">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-md">
        <div className="flex items-center gap-sm">
          <div className="p-sm bg-white rounded-full shadow-sm text-secondary">
            <span className="material-symbols-outlined text-[32px]">local_shipping</span>
          </div>
          <div>
            <p className="font-label-md text-primary">Gratis Ongkir</p>
            <p className="text-[12px] text-on-surface-variant">Min. belanja Rp 500rb</p>
          </div>
        </div>
        <div className="flex items-center gap-sm">
          <div className="p-sm bg-white rounded-full shadow-sm text-secondary">
            <span className="material-symbols-outlined text-[32px]">verified_user</span>
          </div>
          <div>
            <p className="font-label-md text-primary">Garansi Resmi</p>
            <p className="text-[12px] text-on-surface-variant">Produk 100% Original</p>
          </div>
        </div>
        <div className="flex items-center gap-sm">
          <div className="p-sm bg-white rounded-full shadow-sm text-secondary">
            <span className="material-symbols-outlined text-[32px]">payments</span>
          </div>
          <div>
            <p className="font-label-md text-primary">Pembayaran Aman</p>
            <p className="text-[12px] text-on-surface-variant">Multi-metode bayar</p>
          </div>
        </div>
        <div className="flex items-center gap-sm">
          <div className="p-sm bg-white rounded-full shadow-sm text-secondary">
            <span className="material-symbols-outlined text-[32px]">support_agent</span>
          </div>
          <div>
            <p className="font-label-md text-primary">Dukungan 24/7</p>
            <p className="text-[12px] text-on-surface-variant">Respon cepat &amp; solutif</p>
          </div>
        </div>
      </div>
    </section>
  )
}
