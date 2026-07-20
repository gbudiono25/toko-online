import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, removeItem, updateQty, totalItems } = useCart()
  const [shipping, setShipping] = useState(25000)

  const subtotal = items.reduce((sum, i) => sum + i.qty * Number(i.price.replace(/[^\d]/g, '')), 0)
  const discount = 50000
  const service = 2000
  const total = Math.max(subtotal + shipping + service - discount, 0)

  const shippingOptions = [
    { id: 'reg', name: 'J&T Express (Regular)', eta: 'Estimasi 2-3 hari kerja', price: 25000 },
    { id: 'ons', name: 'SiCepat BEST (Overnight)', eta: 'Estimasi besok sampai', price: 45000 },
    { id: 'inst', name: 'Gojek/Grab Instant', eta: 'Estimasi 2-4 jam', price: 85000 },
    { id: 'cargo', name: 'JNE Trucking (Cargo)', eta: 'Estimasi 5-7 hari kerja', price: 12000 },
  ]

  return (
    <>
      <nav className="w-full top-0 sticky z-50 bg-surface border-b border-outline-variant shadow-sm h-20">
        <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto h-full">
          <div className="flex items-center gap-md">
            <span className="font-headline-sm text-headline-sm font-bold text-primary">ProMarket</span>
            <div className="hidden md:flex gap-md ml-lg">
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" to="/">Categories</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" to="/">New Arrivals</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" to="/">Deals</Link>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <div className="hidden sm:flex items-center bg-surface-container-low px-sm py-xs rounded-xl border border-outline-variant">
              <span className="material-symbols-outlined text-outline">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-body-sm w-48" placeholder="Cari produk..." type="text" />
            </div>
            <div className="flex gap-sm">
              <button className="active:scale-95 duration-150"><span className="material-symbols-outlined text-secondary">favorite</span></button>
              <Link to="/cart" className="active:scale-95 duration-150 relative">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{items.length}</span>
                )}
              </Link>
              <button className="active:scale-95 duration-150"><span className="material-symbols-outlined text-secondary">account_circle</span></button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-container-max mx-auto px-gutter py-lg min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Left Column: Cart & Shipping */}
          <div className="lg:col-span-8 space-y-md">
            <h1 className="font-headline-sm text-headline-sm text-primary mb-md">Keranjang Belanja</h1>

            {items.length === 0 ? (
              <div className="bg-white rounded-xl border border-outline-variant p-xl text-center">
                <span className="material-symbols-outlined text-6xl text-outline-variant">shopping_cart</span>
                <p className="mt-sm text-on-surface-variant">Keranjang belanja Anda kosong.</p>
                <Link to="/" className="inline-block mt-md bg-secondary text-white px-md py-sm rounded-lg font-bold hover:bg-secondary-container transition-colors">
                  Belanja Sekarang
                </Link>
              </div>
            ) : (
              <>
                <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
                  {items.map(item => (
                    <div key={item.id} className="p-md flex flex-col sm:flex-row gap-md border-b border-outline-variant items-center sm:items-start">
                      <div className="w-32 h-32 flex-shrink-0 bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant">
                        <img className="w-full h-full object-cover" data-alt={item.alt || item.title} src={item.image} />
                      </div>
                      <div className="flex-grow space-y-xs text-center sm:text-left">
                        <div className="flex justify-between items-start">
                          <h3 className="font-headline-sm text-lg text-primary">{item.title}</h3>
                          <button onClick={() => removeItem(item.id)} className="text-error hover:opacity-80 transition-opacity">
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </div>
                        <p className="text-body-sm text-on-surface-variant">Varian: {item.tag || 'Default'}</p>
                        <p className="text-primary font-bold text-lg">{item.price}</p>
                        <div className="flex items-center justify-center sm:justify-start gap-md pt-sm">
                          <div className="flex items-center border border-outline rounded-lg bg-surface-container-lowest">
                            <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-sm py-base hover:bg-surface-variant transition-colors">-</button>
                            <input className="w-12 text-center border-none bg-transparent focus:ring-0 font-bold" readOnly type="number" value={item.qty} />
                            <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-sm py-base hover:bg-surface-variant transition-colors">+</button>
                          </div>
                          <span className="text-on-surface-variant text-body-sm">
                            Subtotal: Rp {(item.qty * Number(item.price.replace(/[^\d]/g, ''))).toLocaleString('id-ID')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping Options */}
                <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm space-y-md">
                  <h2 className="font-headline-sm text-lg text-primary flex items-center gap-xs">
                    <span className="material-symbols-outlined text-secondary">local_shipping</span>
                    Pilih Ekspedisi Pengiriman
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                    {shippingOptions.map(opt => (
                      <label key={opt.id} className="relative flex cursor-pointer rounded-lg border border-outline-variant p-md focus:outline-none hover:bg-surface-container-low transition-colors group">
                        <input checked={shipping === opt.price} className="hidden peer" name="shipping" type="radio" value={opt.price} onChange={() => setShipping(opt.price)} />
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <p className="font-bold text-primary">{opt.name}</p>
                              <p className="text-on-surface-variant">{opt.eta}</p>
                            </div>
                          </div>
                          <p className="text-secondary font-bold">Rp {opt.price.toLocaleString('id-ID')}</p>
                        </div>
                        <div className="absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-secondary pointer-events-none"></div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm space-y-md">
                  <h2 className="font-headline-sm text-lg text-primary flex items-center gap-xs">
                    <span className="material-symbols-outlined text-secondary">account_balance_wallet</span>
                    Metode Pembayaran
                  </h2>
                  <div className="space-y-sm">
                    <div className="border border-outline-variant rounded-lg overflow-hidden">
                      <button className="w-full flex items-center justify-between p-md bg-surface-container-low hover:bg-surface-variant transition-colors" onClick={() => document.getElementById('va-options')?.classList.toggle('hidden')}>
                        <span className="font-bold text-primary">Virtual Account (VA)</span>
                        <span className="material-symbols-outlined">expand_more</span>
                      </button>
                      <div className="hidden p-md grid grid-cols-2 sm:grid-cols-4 gap-md border-t border-outline-variant" id="va-options">
                        {['BCA', 'Mandiri', 'BNI', 'BRI'].map(bank => (
                          <div key={bank} className="flex flex-col items-center gap-xs cursor-pointer grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                            <div className="h-10 w-16 bg-surface-container-high rounded flex items-center justify-center font-black text-blue-800 italic">{bank}</div>
                            <span className="text-[10px] font-bold uppercase">{bank} VA</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                      <label className="flex items-center gap-md border border-outline-variant p-md rounded-lg cursor-pointer hover:bg-surface-container-low peer-checked:border-secondary transition-all">
                        <input className="w-4 h-4 text-secondary focus:ring-secondary" name="payment" type="radio" />
                        <div className="flex items-center gap-sm">
                          <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center"><span className="material-symbols-outlined text-sm">qr_code_2</span></div>
                          <span className="font-bold text-primary">QRIS</span>
                        </div>
                      </label>
                      <label className="flex items-center gap-md border border-outline-variant p-md rounded-lg cursor-pointer hover:bg-surface-container-low transition-all">
                        <input className="w-4 h-4 text-secondary focus:ring-secondary" name="payment" type="radio" />
                        <div className="flex items-center gap-sm">
                          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center"><span className="material-symbols-outlined text-sm">account_balance_wallet</span></div>
                          <span className="font-bold text-primary">E-Wallet (GoPay/OVO/Dana)</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Column: Summary */}
          {items.length > 0 && (
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-md">
                <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm space-y-sm">
                  <label className="font-bold text-primary text-sm">Kupon & Diskon</label>
                  <div className="flex gap-xs">
                    <input className="flex-grow border border-outline rounded-lg px-sm focus:ring-2 focus:ring-secondary focus:border-secondary transition-all" placeholder="Masukkan kode promo" type="text" />
                    <button className="bg-primary text-white px-md py-sm rounded-lg font-bold hover:bg-primary-container transition-colors">Terapkan</button>
                  </div>
                  <div className="flex items-center gap-xs p-xs bg-surface-container border border-dashed border-secondary rounded-lg">
                    <span className="material-symbols-outlined text-secondary text-sm">confirmation_number</span>
                    <span className="text-xs text-on-surface-variant font-medium">Hemat Rp 50.000 dengan "PROMONTHLY"</span>
                  </div>
                </div>

                <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm space-y-md">
                  <h2 className="font-headline-sm text-lg text-primary">Ringkasan Belanja</h2>
                  <div className="space-y-sm">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Total Harga ({totalItems} barang)</span>
                    <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Total Ongkos Kirim</span>
                      <span>Rp {shipping.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between text-error font-medium">
                      <span>Diskon Promo</span>
                      <span>- Rp {discount.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Biaya Layanan</span>
                      <span>Rp {service.toLocaleString('id-ID')}</span>
                    </div>
                    <hr className="border-outline-variant" />
                    <div className="flex justify-between items-center pt-xs">
                      <span className="font-bold text-primary text-lg">Total Tagihan</span>
                      <span className="font-bold text-secondary text-xl">Rp {total.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                  <button className="w-full bg-secondary text-white py-md rounded-xl font-bold text-lg hover:bg-secondary-container hover:shadow-lg transition-all active:scale-[0.98]">
                    Bayar Sekarang
                  </button>
                  <div className="flex items-center justify-center gap-xs text-[10px] text-outline uppercase tracking-widest font-bold pt-sm">
                    <span className="material-symbols-outlined text-xs">verified_user</span>
                    Pembayaran Aman & Terenkripsi
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-xl bg-primary border-t border-outline">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-md px-gutter py-xl max-w-container-max mx-auto">
          <div className="space-y-md">
            <span className="font-headline-sm text-headline-sm text-on-primary">ProMarket</span>
            <p className="text-on-primary-container text-body-sm leading-relaxed">Penyedia solusi perangkat kerja profesional terbaik untuk meningkatkan produktivitas enterprise Anda.</p>
          </div>
          <div className="space-y-sm">
            <h4 className="text-on-primary font-bold">Layanan Pelanggan</h4>
            <ul className="space-y-xs">
              <li><a className="text-on-primary-container text-body-sm hover:text-on-primary transition-opacity" href="#">Contact Us</a></li>
              <li><a className="text-on-primary-container text-body-sm hover:text-on-primary transition-opacity" href="#">Shipping Policy</a></li>
              <li><a className="text-on-primary-container text-body-sm hover:text-on-primary transition-opacity" href="#">Payment Methods</a></li>
            </ul>
          </div>
          <div className="space-y-sm">
            <h4 className="text-on-primary font-bold">Tentang Kami</h4>
            <ul className="space-y-xs">
              <li><a className="text-on-primary-container text-body-sm hover:text-on-primary transition-opacity" href="#">Karir</a></li>
              <li><a className="text-on-primary-container text-body-sm hover:text-on-primary transition-opacity" href="#">Privacy</a></li>
              <li><a className="text-on-primary-container text-body-sm hover:text-on-primary transition-opacity" href="#">Terms</a></li>
            </ul>
          </div>
          <div className="space-y-sm">
            <h4 className="text-on-primary font-bold">Berlangganan</h4>
            <p className="text-on-primary-container text-body-sm">Dapatkan info promo terbaru.</p>
            <div className="flex bg-tertiary-container rounded-lg p-xs">
              <input className="bg-transparent border-none focus:ring-0 text-white text-xs flex-grow" placeholder="Email Anda" type="email" />
              <button className="bg-secondary text-white px-md py-xs rounded-lg text-xs font-bold">Ikuti</button>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-container py-md text-center">
          <p className="text-on-tertiary-fixed-variant text-[12px] font-body-sm">© 2024 ProMarket Enterprise. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
