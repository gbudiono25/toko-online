import { useCart } from '../context/CartContext'
import { useProducts } from '../hooks/useSupabase'

function formatRupiah(value) {
  return 'Rp ' + Number(value).toLocaleString('id-ID')
}

function Stars({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  const stars = []
  for (let i = 0; i < full; i++) stars.push('star')
  if (half) stars.push('star_half')
  while (stars.length < 5) stars.push('star')

  return (
    <div className="flex items-center">
      {stars.map((s, i) => (
        <span key={i} className="material-symbols-outlined text-[14px] text-yellow-500" style={{ fontVariationSettings: s === 'star' ? "'FILL' 1" : "'FILL' 0.5" }}>{s}</span>
      ))}
    </div>
  )
}

function ProductCard({ product }) {
  const { addItem } = useCart()
  const price = formatRupiah(product.price)
  const originalPrice = product.original_price ? formatRupiah(product.original_price) : null
  const image = product.image_url
  const alt = product.alt_text || product.name
  const tag = product.tag
  const tagClass = product.tag_class || 'bg-surface-container-highest text-primary'

  return (
    <div className="bg-white border border-outline-variant rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-surface-container-low">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt={alt} src={image} />
        {tag && (
          <div className={`absolute top-2 right-2 text-[10px] px-2 py-1 rounded-full font-bold ${tagClass}`}>
            {tag}
          </div>
        )}
      </div>
      <div className="p-sm flex flex-col flex-1">
        <div className="flex items-center gap-xs mb-1">
          <span className={`text-[10px] px-2 py-0.5 ${tagClass} font-bold rounded`}>{tag}</span>
        </div>
        <h4 className="font-label-md text-on-surface line-clamp-2 mb-xs group-hover:text-secondary transition-colors">{product.name}</h4>
        <div className="flex items-center gap-xs mb-sm">
          <Stars rating={product.rating} />
          <span className="text-[10px] text-on-surface-variant">({product.reviews} Ulasan)</span>
        </div>
        <div className="mt-auto">
          <div className="flex flex-col mb-sm">
            {originalPrice && <span className="text-outline-variant text-[12px] line-through">{originalPrice}</span>}
            <span className="text-primary font-bold text-lg">{price}</span>
          </div>
          <button onClick={() => addItem({
            id: product.id,
            title: product.name,
            price: price,
            image: image,
            alt: alt,
            tag: tag,
            tagClass: tagClass,
            originalPrice: originalPrice
          })} className="w-full border border-primary text-primary py-xs rounded-lg font-label-md hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-xs active:scale-95">
            <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
            Tambah
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const { products, loading, error } = useProducts()

  if (loading) {
    return (
      <section className="px-gutter max-w-container-max mx-auto mt-xl">
        <div className="flex justify-between items-center mb-md">
          <div>
            <h2 className="font-headline-sm text-primary">Produk Terbaik</h2>
            <p className="text-on-surface-variant font-body-sm">Menampilkan produk pilihan untuk Anda</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border border-outline-variant rounded-xl overflow-hidden">
              <div className="aspect-square bg-gray-200 animate-pulse"></div>
              <div className="p-sm space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="px-gutter max-w-container-max mx-auto mt-xl">
        <div className="text-center py-xl">
          <p className="text-error font-bold">Gagal memuat produk</p>
          <p className="text-on-surface-variant text-sm mt-2">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="px-gutter max-w-container-max mx-auto mt-xl">
      <div className="flex flex-col md:flex-row gap-lg">
        {/* Sidebar Filter */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-md">
          <div className="bg-surface-container-low p-sm rounded-xl border border-outline-variant">
            <h3 className="font-label-md text-primary mb-sm flex items-center justify-between">
              Filter
              <span className="material-symbols-outlined text-[18px]">tune</span>
            </h3>
            <div className="space-y-sm">
              <div>
                <p className="text-label-sm font-semibold mb-xs">Harga</p>
                <div className="flex items-center gap-xs">
                  <input className="w-full text-xs p-xs border border-outline-variant rounded bg-white outline-none" placeholder="Min" type="text" />
                  <span className="text-outline-variant">-</span>
                  <input className="w-full text-xs p-xs border border-outline-variant rounded bg-white outline-none" placeholder="Max" type="text" />
                </div>
              </div>
              <div>
                <p className="text-label-sm font-semibold mb-xs">Rating</p>
                <div className="space-y-1">
                  <label className="flex items-center gap-xs cursor-pointer group">
                    <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                    <span className="text-body-sm flex items-center text-on-surface-variant group-hover:text-primary">
                      4.0 ke atas <span className="material-symbols-outlined text-[14px] text-yellow-500 ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </span>
                  </label>
                  <label className="flex items-center gap-xs cursor-pointer group">
                    <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                    <span className="text-body-sm flex items-center text-on-surface-variant group-hover:text-primary">
                      3.0 ke atas <span className="material-symbols-outlined text-[14px] text-yellow-500 ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <p className="text-label-sm font-semibold mb-xs">Ketersediaan</p>
                <label className="flex items-center gap-xs cursor-pointer group">
                  <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="text-body-sm text-on-surface-variant group-hover:text-primary">Stok Tersedia</span>
                </label>
              </div>
            </div>
            <button className="w-full mt-md py-xs bg-primary text-on-primary rounded font-label-md hover:bg-primary-container transition-colors">Terapkan Filter</button>
          </div>
          <div className="bg-secondary-container/10 p-sm rounded-xl border border-secondary-container/20">
            <p className="text-label-sm text-secondary font-bold mb-xs">Butuh Bantuan?</p>
            <p className="text-xs text-on-surface-variant mb-sm">CS kami siap membantu Anda memilih produk yang tepat sesuai spesifikasi.</p>
            <button className="w-full py-xs bg-secondary text-on-secondary rounded font-label-md flex items-center justify-center gap-xs">
              <span className="material-symbols-outlined text-[16px]">chat</span> Chat Sales
            </button>
          </div>
        </aside>
        {/* Product Grid Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-md">
            <p className="text-body-sm text-on-surface-variant">Menampilkan <span className="font-bold text-on-surface">{products.length} Produk</span> Terbaik</p>
            <div className="flex items-center gap-sm">
              <span className="text-body-sm text-on-surface-variant">Urutkan:</span>
              <select className="bg-white border border-outline-variant rounded px-sm py-xs text-body-sm outline-none focus:ring-1 focus:ring-secondary">
                <option>Terpopuler</option>
                <option>Terbaru</option>
                <option>Harga Terendah</option>
                <option>Harga Tertinggi</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-xl flex justify-center items-center gap-sm">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary text-on-secondary font-label-md">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:border-secondary font-label-md">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:border-secondary font-label-md">3</button>
            <span className="text-outline-variant">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}