import { useCart } from '../context/CartContext'

const products = [
  {
    id: 1,
    tag: 'GADGET',
    tagClass: 'bg-surface-container-highest text-primary',
    title: 'EliteSound Wireless Headset Pro - Noise Cancelling',
    rating: 4,
    reviews: 128,
    price: 'Rp 1.999.200',
    originalPrice: 'Rp 2.499.000',
    sale: 'SALE 20%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyV1n-4egGtvgzrSU4OjwAxdiOY-P2ZpuNu9GINy1YhE4E0yT_-CMPZkU7_5LZjfsDZOo4eV2h-eN0kUGQa4OqTmRnh3D51w7_W4MenlqbBIO8LCzx26h-bDr6IcVFeBKp5T01dWAxqh5FdaUwYTfgnZeDP7FLAPbjSPCv2TfX6JyTAIWr7PmzaLNuh3cjziUsqzfhX3WbyIVLoXAsSPgU_tcGZARCHORAqnDJQoqUJlXYmPAs3vKIxCHJsMW_cuEzov8-5qWNx01s',
    alt: 'A premium wireless noise-canceling headphone in matte charcoal grey finish, displayed with dramatic side lighting that highlights its ergonomic curves and metallic accents, set against a minimal light grey studio background.'
  },
  {
    id: 2,
    tag: 'COMPUTER',
    tagClass: 'bg-surface-container-highest text-primary',
    title: 'KeyMaster K890 Mechanical Keyboard Blue Switch',
    rating: 5,
    reviews: 45,
    price: 'Rp 850.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgdUua6MROCE6ZYlJCs1W-jFtxkIz1-FWLwkQ4wLbbByo7crglPsFhKJ19Iv-qv5jtjWag9gz5pR2hjM7jyw67x9dRoCc4QWEQuDvTjc8HK1ONeHrcCJ9551IIMf-4nm_yKQ3WFuLHdI3xQayzelP3GJ_jT31w5tgwq_nCChF-jg9LXwgxGFeW45nDRaMIymJYyUzi_vbwxF5kGs5yway-8sO86Z31eSdqpzvwle01JOga72w7XOg1xHkOqxeSWZbL0T9yYnhbPuTH',
    alt: 'A modern mechanical ergonomic keyboard with RGB backlighting, featuring high-quality PBT keycaps and a brushed aluminum base, photographed in a low-angle professional product shot with soft blue ambient glow in a professional gaming office setup.'
  },
  {
    id: 3,
    tag: 'OFFICE',
    tagClass: 'bg-surface-container-highest text-primary',
    title: 'ErgoForm Mesh Office Chair v2.0 - Grey Chrome',
    rating: 4.5,
    reviews: 312,
    price: 'Rp 3.450.000',
    sale: 'BEST SELLER',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYnN0lVtdXWD730V2YBpARqQG5TEKAUB08zdgNhMTvJd3ZYMXUJu5psAo6TggrHGufXYEU3rmicbTcUoxHImymqHlFShFWfBs-BQU3B_IyVLBSLIpuQmPF-oe4PEa1h7uhkbMJNXTSQQu6wKW9yw25ozTla9U2P9pe0110Fwj21cHjBAkPdpCTj_AEQYLbVuBNaA2UndyoSVWFapBonM4VvVMGLSczHzMiOKoOJ50EWNO10ikYUs0t1kZbzu9-_Z0AHyOVXWW--0xO',
    alt: 'A minimalist professional office chair in breathable black mesh and polished chrome accents, designed with ergonomic lumbar support, captured in a bright airy studio with soft shadows to emphasize its structural design and premium material texture.'
  }
]

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
  return (
    <div className="bg-white border border-outline-variant rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-surface-container-low">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt={product.alt} src={product.image} />
        {product.sale && (
          <div className={`absolute top-2 right-2 text-[10px] px-2 py-1 rounded-full font-bold ${product.sale === 'SALE 20%' ? 'bg-error text-on-error' : 'bg-secondary text-on-secondary'}`}>
            {product.sale}
          </div>
        )}
      </div>
      <div className="p-sm flex flex-col flex-1">
        <div className="flex items-center gap-xs mb-1">
          <span className={`text-[10px] px-2 py-0.5 ${product.tagClass} font-bold rounded`}>{product.tag}</span>
        </div>
        <h4 className="font-label-md text-on-surface line-clamp-2 mb-xs group-hover:text-secondary transition-colors">{product.title}</h4>
        <div className="flex items-center gap-xs mb-sm">
          <Stars rating={product.rating} />
          <span className="text-[10px] text-on-surface-variant">({product.reviews} Ulasan)</span>
        </div>
        <div className="mt-auto">
          <div className="flex flex-col mb-sm">
            {product.originalPrice && <span className="text-outline-variant text-[12px] line-through">{product.originalPrice}</span>}
            <span className="text-primary font-bold text-lg">{product.price}</span>
          </div>
          <button onClick={() => addItem(product)} className="w-full border border-primary text-primary py-xs rounded-lg font-label-md hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-xs active:scale-95">
            <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
            Tambah
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
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
            <p className="text-body-sm text-on-surface-variant">Menampilkan <span className="font-bold text-on-surface">24 Produk</span> Terbaik</p>
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
