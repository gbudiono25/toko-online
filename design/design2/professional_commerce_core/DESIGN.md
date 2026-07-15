---
name: Professional Commerce Core
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#121617'
  on-tertiary: '#ffffff'
  tertiary-container: '#272a2c'
  on-tertiary-container: '#8e9193'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

Sistem desain ini dibangun untuk menghadirkan pengalaman berbelanja yang terpercaya, efisien, dan elegan. Target audiens utamanya adalah pengguna profesional yang menghargai kejelasan informasi dan kemudahan navigasi. 

Gaya visual yang diusung adalah **Modern Corporate**, yang menggabungkan presisi minimalisme dengan fungsionalitas tingkat tinggi. Estetika difokuskan pada:
- **Kejelasan Visual:** Penggunaan ruang putih (whitespace) yang luas untuk mengurangi beban kognitif.
- **Kualitas Premium:** Penekanan pada presentasi produk melalui bingkai yang bersih dan tipografi yang tajam.
- **Kepercayaan:** Struktur grid yang kokoh dan palet warna yang tenang untuk membangun kredibilitas merek di mata konsumen.

## Colors

Palet warna dirancang untuk menciptakan kontras yang kuat antara elemen struktural dan elemen aksi.

- **Primary (Deep Navy - #1A2B3C):** Digunakan untuk elemen fondasi seperti navigasi utama, heading, dan teks dasar. Memberikan kesan otoritas dan stabilitas.
- **Secondary (Vibrant Blue - #3B82F6):** Digunakan secara strategis untuk *Call to Action* (CTA), indikator progres, dan tautan aktif. Warna ini memberikan energi pada antarmuka yang tenang.
- **Tertiary (Surface - #F8FAFC):** Digunakan sebagai warna latar belakang sekunder atau area kontainer untuk memisahkan konten tanpa menggunakan garis yang keras.
- **Neutral (Slate - #64748B):** Digunakan untuk teks pendukung, ikon non-aktif, dan garis pembatas halus.

Sistem ini beroperasi dalam mode terang (*light mode*) untuk menjaga kesan bersih dan profesional yang maksimal.

## Typography

Sistem menggunakan **Inter** sebagai satu-satunya keluarga huruf untuk menjaga konsistensi sistematis dan keterbacaan yang luar biasa pada berbagai ukuran layar.

- **Hierarki Tinggi:** Gunakan `display-lg` hanya untuk hero section atau promosi utama.
- **Heading:** Gunakan bobot Semi-Bold (600) untuk memberikan penekanan yang cukup tanpa terlihat terlalu berat.
- **Keterbacaan:** Teks tubuh (`body-md`) menggunakan tinggi baris 1.5x dari ukuran font untuk kenyamanan membaca deskripsi produk yang panjang.
- **Labels:** Gunakan `label-md` dengan *uppercase* untuk kategori atau status kecil guna menciptakan perbedaan visual yang jelas dari teks tubuh.

## Layout & Spacing

Sistem ini menggunakan **Fluid Grid System** berbasis 12 kolom untuk desktop dan 4 kolom untuk mobile.

- **Prinsip Spasi:** Menggunakan kelipatan 8px untuk menciptakan ritme visual yang konsisten.
- **Desktop:** Lebar konten maksimal dibatasi pada 1280px dengan margin sisi 40px untuk memberikan ruang nafas pada layar besar.
- **Mobile:** Gunakan margin sisi 16px dengan gutter 16px. Elemen kartu produk biasanya disusun dalam 2 kolom.
- **Whitespace:** Gunakan spasi `lg` (40px) di antara section besar di halaman landing untuk memperkuat pemisahan visual antar kategori produk.

## Elevation & Depth

Kedalaman visual diatur melalui kombinasi garis pembatas tipis dan bayangan ambient untuk menciptakan hierarki yang halus namun jelas.

- **Borders:** Gunakan garis 1px dengan warna `#E2E8F0` untuk mendefinisikan area seperti input field dan container kartu. Ini memberikan kesan struktur yang presisi.
- **Shadows:** 
  - *Low Elevation:* Digunakan untuk kartu produk standar. Bayangan sangat halus: `0 2px 4px rgba(0,0,0,0.05)`.
  - *High Elevation:* Digunakan untuk modal, dropdown, atau tombol melayang. Bayangan lebih difus: `0 10px 25px rgba(26,43,60,0.1)`.
- **Tonal Tiers:** Gunakan warna latar belakang `#F8FAFC` untuk membedakan area konten utama dengan area navigasi samping atau footer.

## Shapes

Sistem ini menggunakan pendekatan **Soft Geometry** untuk menjaga keseimbangan antara kesan profesional dan ramah pengguna.

- **Standard Radius:** 4px (`rounded-sm`) untuk elemen kecil seperti checkbox dan tag.
- **Component Radius:** 8px (`rounded-lg`) merupakan standar utama untuk tombol, kartu produk, dan input fields. 
- **Large Radius:** 12px (`rounded-xl`) digunakan untuk container besar seperti modal atau banner promosi.

## Components

### Buttons
- **Primary:** Latar belakang Vibrant Blue (#3B82F6), teks putih, radius 8px. Gunakan untuk "Beli Sekarang" atau "Checkout".
- **Secondary:** Outline Deep Navy (#1A2B3C) dengan latar transparan. Gunakan untuk "Tambah ke Keranjang".
- **Tertiary:** Tanpa latar belakang atau bingkai. Gunakan untuk "Lihat Semua" atau "Batal".

### Cards
Kartu produk harus memiliki bingkai tipis 1px (#E2E8F0) dengan bayangan halus saat hover. Foto produk diletakkan di bagian atas dengan latar belakang putih bersih atau abu-abu pucat.

### Input Fields
Label berada di atas input. Border default berwarna `#CBD5E1`. Saat aktif (focus), border berubah menjadi Vibrant Blue dengan *ring* halus 2px.

### Chips & Badges
Gunakan untuk status stok atau diskon. Diskon menggunakan latar belakang merah pucat dengan teks merah tua, sedangkan kategori produk menggunakan latar belakang Deep Navy dengan teks putih.

### Lists
Gunakan garis pemisah horizontal tipis di antara item keranjang belanja untuk menjaga keteraturan data tanpa menambah kepadatan visual.