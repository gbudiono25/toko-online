-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  icon TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Products table
CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  price INTEGER NOT NULL,
  original_price INTEGER,
  tag TEXT,
  tag_class TEXT,
  image_url TEXT,
  alt_text TEXT,
  rating NUMERIC(2,1) DEFAULT 0,
  reviews INTEGER DEFAULT 0,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Index for faster product queries
CREATE INDEX IF NOT EXISTS idx_products_category_id ON public.products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_is_active ON public.products(is_active);
CREATE INDEX IF NOT EXISTS idx_products_created_at ON public.products(created_at DESC);

-- Insert sample categories
INSERT INTO public.categories (name, slug, icon, description) VALUES
  ('Elektronik', 'elektronik', 'laptop_mac', 'Perangkat elektronik dan gadget'),
  ('Fashion', 'fashion', 'checkroom', 'Pakaian dan aksesoris fashion'),
  ('Home Living', 'home-living', 'chair', 'Peralatan rumah dan furnitur'),
  ('Aksesoris', 'aksesoris', 'watch', 'Aksesoris berbagai macam'),
  ('Alat Kantor', 'alat-kantor', 'print', 'Peralatan dan supplies kantor'),
  ('Olahraga', 'olahraga', 'fitness_center', 'Peralatan dan pakaian olahraga')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample products
INSERT INTO public.products (name, slug, description, price, original_price, tag, tag_class, image_url, alt_text, rating, reviews, category_id) VALUES
  (
    'EliteSound Wireless Headset Pro - Noise Cancelling',
    'elitesound-wireless-headset-pro',
    'Headset wireless premium dengan noise cancelling aktif untuk produktivitas kerja profesional.',
    1999200,
    2499000,
    'GADGET',
    'bg-surface-container-highest text-primary',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDyV1n-4egGtvgzrSU4OjwAxdiOY-P2ZpuNu9GINy1YhE4E0yT_-CMPZkU7_5LZjfsDZOo4eV2h-eN0kUGQa4OqTmRnh3D51w7_W4MenlqbBIO8LCzx26h-bDr6IcVFeBKp5T01dWAxqh5FdaUwYTfgnZeDP7FLAPbjSPCv2TfX6JyTAIWr7PmzaLNuh3cjziUsqzfhX3WbyIVLoXAsSPgU_tcGZARCHORAqnDJQoqUJlXYmPAs3vKIxCHJsMW_cuEzov8-5qWNx01s',
    'A premium wireless noise-canceling headphone in matte charcoal grey finish, displayed with dramatic side lighting that highlights its ergonomic curves and metallic accents, set against a minimal light grey studio background.',
    4.0,
    128,
    (SELECT id FROM public.categories WHERE slug = 'elektronik')
  ),
  (
    'KeyMaster K890 Mechanical Keyboard Blue Switch',
    'keymaster-k890-mechanical-keyboard',
    'Keyboard mekanik profesional dengan switch biru dan backlighting RGB untuk pengalaman mengetik yang optimal.',
    850000,
    NULL,
    'COMPUTER',
    'bg-surface-container-highest text-primary',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDgdUua6MROCE6ZYlJCs1W-jFtxkIz1-FWLwkQ4wLbbByo7crglPsFhKJ19Iv-qv5jtjWag9gz5pR2hjM7jyw67x9dRoCc4QWEQuDvTjc8HK1ONeHrcCJ9551IIMf-4nm_yKQ3WFuLHdI3xQayzelP3GJ_jT31w5tgwq_nCChF-jg9LXwgxGFeW45nDRaMIymJYyUzi_vbwxF5kGs5yway-8sO86Z31eSdqpzvwle01JOga72w7XOg1xHkOqxeSWZbL0T9yYnhbPuTH',
    'A modern mechanical ergonomic keyboard with RGB backlighting, featuring high-quality PBT keycaps and a brushed aluminum base, photographed in a low-angle professional product shot with soft blue ambient glow in a professional gaming office setup.',
    5.0,
    45,
    (SELECT id FROM public.categories WHERE slug = 'elektronik')
  ),
  (
    'ErgoForm Mesh Office Chair v2.0 - Grey Chrome',
    'ergoform-mesh-office-chair-v2',
    'Kursi kantor ergonomis dengan mesh breathable dan aksen chrome untuk kenyamanan sepanjang hari kerja.',
    3450000,
    NULL,
    'OFFICE',
    'bg-surface-container-highest text-primary',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCYnN0lVtdXWD730V2YBpARqQG5TEKAUB08zdgNhMTvJd3ZYMXUJu5psAo6TggrHGufXYEU3rmicbTcUoxHImymqHlFShFWfBs-BQU3B_IyVLBSLIpuQmPF-oe4PEa1h7uhkbMJNXTSQQu6wKW9yw25ozTla9U2P9pe0110Fwj21cHjBAkPdpCTj_AEQYLbVuBNaA2UndyoSVWFapBonM4VvVMGLSczHzMiOKoOJ50EWNO10ikYUs0t1kZbzu9-_Z0AHyOVXWW--0xO',
    'A minimalist professional office chair in breathable black mesh and polished chrome accents, designed with ergonomic lumbar support, captured in a bright airy studio with soft shadows to emphasize its structural design and premium material texture.',
    4.5,
    312,
    (SELECT id FROM public.categories WHERE slug = 'home-living')
  )
ON CONFLICT (slug) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policies for categories (public read)
CREATE POLICY "Categories are viewable by everyone" ON public.categories
  FOR SELECT USING (true);

-- Create policies for products (public read)
CREATE POLICY "Products are viewable by everyone" ON public.products
  FOR SELECT USING (is_active = true);

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON public.categories TO anon, authenticated;
GRANT SELECT ON public.products TO anon, authenticated;
