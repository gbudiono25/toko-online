import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeDrawer, removeItem, updateQty, totalItems, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[200]">
      <div className="absolute inset-0 bg-black/40" onClick={closeDrawer} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-md border-b border-outline-variant">
          <h3 className="font-label-md text-primary text-lg font-bold">Keranjang ({totalItems})</h3>
          <button onClick={closeDrawer} className="p-xs text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-sm space-y-sm">
          {items.length === 0 ? (
            <p className="text-center text-on-surface-variant py-xl">Keranjang belanja Anda kosong.</p>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-sm border border-outline-variant rounded-xl p-sm">
                <img src={item.image} alt={item.alt || item.title} className="w-20 h-20 object-cover rounded-lg bg-surface-container-low" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-label-md text-on-surface line-clamp-2 text-sm">{item.title}</h4>
                    <p className="text-primary font-bold text-sm mt-1">{item.price}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-xs border border-outline-variant rounded-lg overflow-hidden">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-xs py-xs text-on-surface-variant hover:text-primary">-</button>
                      <span className="text-xs font-bold px-xs">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-xs py-xs text-on-surface-variant hover:text-primary">+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-error text-xs hover:underline">Hapus</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-outline-variant p-md space-y-sm">
            <div className="flex justify-between font-label-md text-primary">
              <span>Total</span>
              <span className="font-bold">Rp {totalPrice.toLocaleString('id-ID')}</span>
            </div>
            <button className="w-full bg-secondary text-on-secondary py-sm rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
