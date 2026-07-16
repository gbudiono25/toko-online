export default function Header() {
  return (
    <header className="bg-surface w-full top-0 sticky z-50 border-b border-outline-variant shadow-sm h-20 flex items-center transition-all duration-300">
      <nav className="flex justify-between items-center px-gutter max-w-container-max mx-auto w-full gap-md">
        {/* Brand */}
        <div className="flex items-center gap-sm">
          <span className="font-headline-sm text-headline-sm font-bold text-primary">ProMarket</span>
        </div>
        {/* Smart Search */}
        <div className="flex-1 max-w-xl relative group">
          <div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-outline">search</span>
          </div>
          <input
            className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-2 pl-10 pr-sm focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none font-body-sm"
            placeholder="Cari elektronik, fashion, atau perlengkapan kantor..."
            type="text"
          />
        </div>
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-md">
          <a className="font-body-md text-body-md text-secondary font-semibold border-b-2 border-secondary pb-1 transition-colors" href="#">Categories</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">New Arrivals</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Deals</a>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-sm">
          <button className="p-xs text-on-surface-variant hover:text-secondary transition-colors relative">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button className="p-xs text-on-surface-variant hover:text-secondary transition-colors relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute top-0 right-0 bg-secondary text-on-secondary text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </button>
          <button className="p-xs text-on-surface-variant hover:text-secondary transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
