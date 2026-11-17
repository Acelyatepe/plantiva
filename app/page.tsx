'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Check,
  Heart,
  Leaf,
  Menu,
  Minus,
  PackageCheck,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Sun,
  UserRound,
  ClipboardList,
  LogOut,
  MapPin,
  Phone,
  Trash2,
  Truck,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { allProducts, products, type Product } from '@/data/products';

type Cart = Record<number, number>;
type View =
  | 'home'
  | 'catalog'
  | 'detail'
  | 'favorites'
  | 'cart'
  | 'checkout'
  | 'success'
  | 'account'
  | 'subscription'
  | 'content';

type Language = 'tr' | 'en' | 'de';

const ui = {
  tr: { search: 'Çiçek veya bitki ara...', cart: 'Sepet', favorites: 'Favoriler', account: 'Hesabım', add: 'Sepete ekle +', explore: 'Koleksiyonu keşfet', subscription: 'Çiçek Aboneliği' },
  en: { search: 'Search flowers or plants...', cart: 'Cart', favorites: 'Favorites', account: 'My account', add: 'Add to cart +', explore: 'Explore the collection', subscription: 'Flower Subscription' },
  de: { search: 'Blumen oder Pflanzen suchen...', cart: 'Warenkorb', favorites: 'Favoriten', account: 'Mein Konto', add: 'In den Warenkorb +', explore: 'Kollektion entdecken', subscription: 'Blumen-Abo' },
} as const;

const seedNames: Record<Language, Record<string, string>> = {
  tr: {},
  en: { Buğday:'Wheat', Arpa:'Barley', Çavdar:'Rye', Yulaf:'Oats', Mısır:'Corn', Pirinç:'Rice', Mercimek:'Lentil', Nohut:'Chickpea', Fasulye:'Bean', Bezelye:'Pea', Soya:'Soybean', Ayçiçeği:'Sunflower' },
  de: { Buğday:'Weizen', Arpa:'Gerste', Çavdar:'Roggen', Yulaf:'Hafer', Mısır:'Mais', Pirinç:'Reis', Mercimek:'Linse', Nohut:'Kichererbse', Fasulye:'Bohne', Bezelye:'Erbse', Soya:'Sojabohne', Ayçiçeği:'Sonnenblume' },
};

const phraseTranslations: Record<'en'|'de', Record<string,string>> = {
  en: {
    'Çiçekler':'Flowers','Bitkiler':'Plants','Tohum & Bakım':'Seeds & Care','Hediyeler':'Gifts','Sipariş Takibi':'Order Tracking','Hesabım':'My Account','Üyelik':'Membership','Sepete ekle +':'Add to cart +','Plantiva seçkisi':'Plantiva selection','Tohumlar':'Seeds','ürün gösteriliyor':'products shown','Sırala':'Sort','Öne çıkanlar':'Featured','Fiyat: Artan':'Price: Low to high','Fiyat: Azalan':'Price: High to low','İsim: A–Z':'Name: A–Z','Tümü':'All','Sebze Tohumları':'Vegetable Seeds','Meyve Tohumları':'Fruit Seeds','Çiçek Tohumları':'Flower Seeds','Aromatik Bitkiler':'Herbs','Tahıllar':'Grains','Başlangıç Setleri':'Starter Kits','İlkbahar':'Spring','Sonbahar':'Autumn','Bahçe':'Garden','Tarla':'Field','Saksı':'Pot','Balkon':'Balcony','75 güne kadar':'Up to 75 days','75 günden uzun':'More than 75 days','Tam güneş':'Full sun','Yarı gölge':'Partial shade','Fiyat':'Price','Çok satanlar':'Bestsellers','En çok sevilenler':'Most loved','Kategorileri keşfet':'Explore categories','Tümünü gör →':'View all →','Koleksiyonu keşfet':'Explore collection','Mevsimin çiçekleri':'Seasonal flowers','Sepetiniz':'Your cart','Favorilerim':'My favorites','Hakkımızda':'About us','Yardım':'Help','Koleksiyonlar':'Collections','Gizlilik Politikası':'Privacy Policy','Çerez Politikası':'Cookie Policy','Kullanım Koşulları':'Terms of Use','İletişim / Şikâyet / Öneri':'Contact / Complaint / Suggestion','Çiçek Aboneliği':'Flower Subscription','Ürünlere dön':'Back to products','Sepete Ekle':'Add to Cart','Favorilere Ekle':'Add to Favorites','Bakım ve anlamı':'Care and details','Tohum grubu':'Seed group','Ekim mevsimi':'Sowing season','Yetiştirme alanı':'Growing area','Hasat süresi':'Harvest time','Güneş ihtiyacı':'Sun requirement','Sulama':'Watering','Ekim ve bakım':'Sowing and care','Toprak hazırlığı':'Soil preparation','Ara toplam':'Subtotal','Kargo':'Shipping','Toplam':'Total','Ödemeye geç':'Proceed to checkout','Ana sayfaya dön':'Return home'
  },
  de: {
    'Çiçekler':'Blumen','Bitkiler':'Pflanzen','Tohum & Bakım':'Saatgut & Pflege','Hediyeler':'Geschenke','Sipariş Takibi':'Bestellverfolgung','Hesabım':'Mein Konto','Üyelik':'Mitgliedschaft','Sepete ekle +':'In den Warenkorb +','Plantiva seçkisi':'Plantiva-Auswahl','Tohumlar':'Saatgut','ürün gösteriliyor':'Produkte angezeigt','Sırala':'Sortieren','Öne çıkanlar':'Empfohlen','Fiyat: Artan':'Preis: aufsteigend','Fiyat: Azalan':'Preis: absteigend','İsim: A–Z':'Name: A–Z','Tümü':'Alle','Sebze Tohumları':'Gemüsesamen','Meyve Tohumları':'Obstsamen','Çiçek Tohumları':'Blumensamen','Aromatik Bitkiler':'Kräuter','Tahıllar':'Getreide','Başlangıç Setleri':'Starter-Sets','İlkbahar':'Frühling','Sonbahar':'Herbst','Bahçe':'Garten','Tarla':'Feld','Saksı':'Topf','Balkon':'Balkon','75 güne kadar':'Bis 75 Tage','75 günden uzun':'Mehr als 75 Tage','Tam güneş':'Volle Sonne','Yarı gölge':'Halbschatten','Fiyat':'Preis','Çok satanlar':'Bestseller','En çok sevilenler':'Am beliebtesten','Kategorileri keşfet':'Kategorien entdecken','Tümünü gör →':'Alle anzeigen →','Koleksiyonu keşfet':'Kollektion entdecken','Mevsimin çiçekleri':'Saisonblumen','Sepetiniz':'Ihr Warenkorb','Favorilerim':'Meine Favoriten','Hakkımızda':'Über uns','Yardım':'Hilfe','Koleksiyonlar':'Kollektionen','Gizlilik Politikası':'Datenschutzrichtlinie','Çerez Politikası':'Cookie-Richtlinie','Kullanım Koşulları':'Nutzungsbedingungen','İletişim / Şikâyet / Öneri':'Kontakt / Beschwerde / Vorschlag','Çiçek Aboneliği':'Blumen-Abo','Ürünlere dön':'Zurück zu Produkten','Sepete Ekle':'In den Warenkorb','Favorilere Ekle':'Zu Favoriten','Bakım ve anlamı':'Pflege und Details','Tohum grubu':'Saatgutgruppe','Ekim mevsimi':'Aussaatzeit','Yetiştirme alanı':'Anbauort','Hasat süresi':'Erntezeit','Güneş ihtiyacı':'Lichtbedarf','Sulama':'Bewässerung','Ekim ve bakım':'Aussaat und Pflege','Toprak hazırlığı':'Bodenvorbereitung','Ara toplam':'Zwischensumme','Kargo':'Versand','Toplam':'Gesamt','Ödemeye geç':'Zur Kasse','Ana sayfaya dön':'Zur Startseite'
  }
};

function localizeText(value: string, language: Language) {
  if (language === 'tr') return value;
  let output = value;
  const dict = {...phraseTranslations[language], ...seedNames[language]};
  Object.entries(dict).sort((a,b)=>b[0].length-a[0].length).forEach(([from,to]) => { output = output.replaceAll(from,to); });
  if (language === 'en') output = output.replace(/(\d+) ürün/g, '$1 products').replace(' seçenek bulunuyor',' options available').replace('Yaklaşık ','Approximately ').replace(' gün',' days');
  if (language === 'de') output = output.replace(/(\d+) ürün/g, '$1 Produkte').replace(' seçenek bulunuyor',' Optionen verfügbar').replace('Yaklaşık ','Ungefähr ').replace(' gün',' Tage');
  return output;
}

const sameDayCities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Mersin', 'Konya', 'Gaziantep', 'Kocaeli'];
const categoryLimits: Record<string, number> = { 'Hediye Setleri': 12, 'Nişan & Düğün': 20, 'Ev Bitkileri': 28 };
type Member = { name: string; email: string; phone: string; address: string };

const pickupBranches = [
  [
    'Plantiva İstanbul Avrupa',
    'İstanbul · Şişli',
    'Demo adres: Merkez Mah., Şişli / İstanbul',
  ],
  [
    'Plantiva İstanbul Anadolu',
    'İstanbul · Kadıköy',
    'Demo adres: Bahariye çevresi, Kadıköy / İstanbul',
  ],
  [
    'Plantiva Ankara',
    'Ankara · Çankaya',
    'Demo adres: Çankaya merkez / Ankara',
  ],
  [
    'Plantiva İzmir',
    'İzmir · Konak',
    'Demo adres: Alsancak çevresi, Konak / İzmir',
  ],
  ['Plantiva Bursa', 'Bursa · Nilüfer', 'Demo adres: Nilüfer merkez / Bursa'],
  [
    'Plantiva Antalya',
    'Antalya · Muratpaşa',
    'Demo adres: Muratpaşa merkez / Antalya',
  ],
  ['Plantiva Adana', 'Adana · Seyhan', 'Demo adres: Seyhan merkez / Adana'],
  [
    'Plantiva Mersin',
    'Mersin · Yenişehir',
    'Demo adres: Yenişehir merkez / Mersin',
  ],
  ['Plantiva Konya', 'Konya · Selçuklu', 'Demo adres: Selçuklu merkez / Konya'],
  [
    'Plantiva Gaziantep',
    'Gaziantep · Şehitkamil',
    'Demo adres: Şehitkamil merkez / Gaziantep',
  ],
];

const categories = [
  ['🌸', 'Tüm Çiçekler'],
  ['🌿', 'Ev Bitkileri'],
  ['🌵', 'Sukulentler'],
  ['🌹', 'Güller'],
  ['🌷', 'Mevsim Çiçekleri'],
  ['💐', 'İsteme Çiçekleri'],
  ['💍', 'Nişan & Düğün'],
  ['🎂', 'Doğum Günü'],
  ['❤️', 'Sevgiliye'],
  ['🌸', 'Anneler Günü'],
  ['🌼', 'Geçmiş Olsun'],
  ['💐', 'Özel Günler'],
  ['🎁', 'Hediye Setleri'],
  ['🪴', 'Saksı & Bakım'],
  ['🌱', 'Tohumlar'],
  ['🍫', 'Yenilebilir & Çikolata'],
  ['🌾', 'Bahçe & Çim'],
];

const menuGroups: Record<string, string[]> = {
  Çiçekler: ['Tüm Çiçekler', 'Mevsim Çiçekleri', 'Güller', 'İsteme Çiçekleri', 'Nişan & Düğün', 'Doğum Günü', 'Geçmiş Olsun'],
  Bitkiler: ['Ev Bitkileri', 'Sukulentler'],
  'Tohum & Bakım': ['Tohumlar', 'Saksı & Bakım', 'Bahçe & Çim'],
  Hediyeler: ['Hediye Setleri', 'Yenilebilir & Çikolata', 'Özel Günler', 'Sevgiliye', 'Anneler Günü'],
};

const flowerCategories = new Set([
  'Mevsim Çiçekleri', 'Güller', 'İsteme Çiçekleri', 'Nişan & Düğün',
  'Doğum Günü', 'Geçmiş Olsun',
]);

const productSlug = (name: string) => name.toLocaleLowerCase('tr-TR').normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replaceAll('ı', 'i').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const normalizeSearch = (value: string) => value.toLocaleLowerCase('tr-TR').normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replaceAll('ı', 'i').replace(/[^a-z0-9]+/g, ' ').trim();

const money = (n: number) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(n);

function ProductCard({
  product,
  favorite,
  onFavorite,
  onOpen,
  onAdd,
  language,
  index,
}: {
  product: Product;
  favorite: boolean;
  onFavorite: () => void;
  onOpen: () => void;
  onAdd: () => void;
  language: Language;
  index: number;
}) {
  const shownName = seedNames[language][product.name] || product.name;
  const shownShort = language === 'tr' ? product.short : product.category === 'Tohumlar' ? (language === 'en' ? `${shownName} seeds selected for reliable germination in home gardens and controlled growing areas.` : `${shownName}-Saatgut, ausgewählt für zuverlässige Keimung im Hausgarten und kontrollierten Anbau.`) : (language === 'en' ? `${shownName}, carefully selected and prepared for healthy, lasting enjoyment.` : `${shownName}, sorgfältig ausgewählt und für gesunde, langanhaltende Freude vorbereitet.`);
  return (
    <article className="product-card group min-w-0" style={{ animationDelay: `${Math.min(index, 8) * 55}ms` }}>
      <div
        className="relative aspect-[4/5] cursor-pointer overflow-hidden rounded-[1.5rem] bg-[#ecebe4]"
        onClick={onOpen}
      >
        <img
          src={product.image}
          alt={shownName}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-[#315c48] backdrop-blur">
          {product.badge}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavorite();
          }}
          aria-label="Favorilere ekle"
          className={`absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/90 shadow-sm transition ${favorite ? 'text-[#b95f72]' : 'text-[#315c48] hover:text-[#b95f72]'}`}
        >
          <Heart className="size-4" fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <button
        onClick={onOpen}
        className="mt-4 block max-w-full text-left font-serif text-lg font-medium text-[#294d3d] hover:text-[#b46876]"
      >
        {shownName}
      </button>
      <p className="mt-1 line-clamp-1 text-xs text-[#7a847d]">
        {shownShort}
      </p>
      <div className="mt-3 flex items-center justify-between gap-2">
        <p className="font-bold text-[#405548]">{money(product.price)}</p>
        <button
          onClick={onAdd}
          className="rounded-full bg-[#edf2e9] px-3 py-2 text-xs font-bold text-[#315c48] transition hover:bg-[#315c48] hover:text-white"
        >
          Sepete ekle +
        </button>
      </div>
    </article>
  );
}

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [selected, setSelected] = useState<Product>(products[0]);
  const [transitioning, setTransitioning] = useState(false);
  const [cart, setCart] = useState<Cart>({});
  const [favorites, setFavorites] = useState<number[]>([]);
  const [category, setCategory] = useState('Tüm Çiçekler');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('featured');
  const [mobile, setMobile] = useState(false);
  const [toast, setToast] = useState('');
  const [detailQty, setDetailQty] = useState(1);
  const [checkoutErrors, setCheckoutErrors] = useState<Record<string, string>>(
    {},
  );
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [member, setMember] = useState<Member | null>(null);
  const [accountTab, setAccountTab] = useState('profile');
  const [deliveryType, setDeliveryType] = useState<'address' | 'store'>(
    'address',
  );
  const [selectedBranch, setSelectedBranch] = useState('');
  const [language, setLanguage] = useState<Language>('tr');
  const [megaMenu, setMegaMenu] = useState('');
  const [seedBudget, setSeedBudget] = useState('all');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('10:00–14:00');
  const [checkoutCity, setCheckoutCity] = useState('');
  const [giftHidePrice, setGiftHidePrice] = useState(false);
  const [cardDesign, setCardDesign] = useState('Minimal');
  const [contentPage, setContentPage] = useState('about');
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [seedType, setSeedType] = useState('Tümü');
  const [seedSeason, setSeedSeason] = useState('Tümü');
  const [seedArea, setSeedArea] = useState('Tümü');
  const [seedHarvest, setSeedHarvest] = useState('Tümü');
  const [seedSun, setSeedSun] = useState('Tümü');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    try {
      setCart(JSON.parse(localStorage.getItem('plantiva-cart') || '{}'));
      setFavorites(
        JSON.parse(localStorage.getItem('plantiva-favorites') || '[]'),
      );
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem('plantiva-cart', JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem('plantiva-favorites', JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    try {
      setNotes(JSON.parse(localStorage.getItem('plantiva-notes') || '{}'));
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem('plantiva-notes', JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    try {
      setMember(JSON.parse(localStorage.getItem('plantiva-member') || 'null'));
    } catch {}
  }, []);
  useEffect(() => {
    if (member) localStorage.setItem('plantiva-member', JSON.stringify(member));
    else localStorage.removeItem('plantiva-member');
  }, [member]);
  useEffect(() => {
    const stored = localStorage.getItem('plantiva-language') as Language | null;
    if (stored && ['tr', 'en', 'de'].includes(stored)) setLanguage(stored);
  }, []);
  useEffect(() => localStorage.setItem('plantiva-language', language), [language]);
  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'tr') return;
    const originals = new Map<Text, string>();
    const attrOriginals = new Map<HTMLInputElement | HTMLTextAreaElement, string>();
    const translate = () => {
      const root = document.querySelector('main');
      if (!root) return;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        const textNode = node as Text;
        if (!textNode.data.trim() || textNode.parentElement?.closest('script,style')) continue;
        if (!originals.has(textNode)) originals.set(textNode, textNode.data);
        textNode.data = localizeText(originals.get(textNode)!, language);
      }
      root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[placeholder],textarea[placeholder]').forEach((el) => {
        if (!attrOriginals.has(el)) attrOriginals.set(el, el.placeholder);
        el.placeholder = localizeText(attrOriginals.get(el)!, language);
      });
    };
    translate();
    const observer = new MutationObserver(() => requestAnimationFrame(translate));
    observer.observe(document.querySelector('main')!, {subtree:true, childList:true});
    return () => {
      observer.disconnect();
      originals.forEach((value, node) => { if (node.isConnected) node.data = value; });
      attrOriginals.forEach((value, el) => { if (el.isConnected) el.placeholder = value; });
    };
  }, [language, view, selected]);
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(id);
  }, [toast]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, selected]);
  useEffect(() => {
    const update = () => setShowScrollTop(window.scrollY > 480);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    const syncFromLocation = () => {
      const params = new URLSearchParams(window.location.search);
      const productId = Number(params.get('urun'));
      const product = productId ? allProducts.find((item) => item.id === productId) : undefined;
      if (product) {
        setSelected(product);
        setView('detail');
        return;
      }
      const urlCategory = params.get('kategori');
      if (urlCategory) {
        setCategory(urlCategory);
        setView('catalog');
        return;
      }
      const info = params.get('bilgi');
      if (info) {
        setContentPage(info);
        setView('content');
        return;
      }
      const page = params.get('sayfa') as View | null;
      setView(page && ['catalog', 'favorites', 'cart', 'checkout', 'success', 'account', 'subscription', 'content'].includes(page) ? page : 'home');
    };
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, []);

  const add = (id: number, qty = 1) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + qty }));
    setToast('Sepetinize eklendi');
  };
  const toggleFavorite = (id: number) => {
    setFavorites((f) =>
      f.includes(id) ? f.filter((x) => x !== id) : [...f, id],
    );
    setToast(
      favorites.includes(id) ? 'Favorilerden çıkarıldı' : 'Favorilere eklendi',
    );
  };
  const navigate = (action: () => void) => {
    setTransitioning(true);
    window.setTimeout(() => {
      action();
      setTransitioning(false);
    }, 220);
  };
  const openProduct = (p: Product) =>
    navigate(() => {
      setSelected(p);
      setDetailQty(1);
      setView('detail');
      history.pushState({ plantiva: true }, '', `?urun=${p.id}`);
    });
  const go = (v: View) =>
    navigate(() => {
      setView(v);
      setMobile(false);
      history.pushState({ plantiva: true }, '', v === 'home' ? './' : `?sayfa=${v}`);
    });
  const openCategory = (c: string) =>
    navigate(() => {
      setCategory(c);
      setSearch('');
      setView('catalog');
      setMobile(false);
      history.pushState({ plantiva: true }, '', `?kategori=${encodeURIComponent(c)}`);
    });
  const openContent = (id: string) => navigate(() => { setContentPage(id); setView('content'); history.pushState({ plantiva: true }, '', `?bilgi=${id}`); });
  const goBack = () => {
    if (history.state?.plantiva && history.length > 1) history.back();
    else go('home');
  };
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const subtotal = Object.entries(cart).reduce(
    (s, [id, q]) => s + (allProducts.find((p) => p.id === +id)?.price || 0) * q,
    0,
  );
  const shipping = subtotal === 0 || subtotal >= 1500 ? 0 : 99;
  const filtered = useMemo(() => {
    let list = search ? allProducts : category === 'Tüm Çiçekler'
      ? Array.from(
          allProducts.filter((p) => flowerCategories.has(p.category)).reduce((unique, product) => {
            const slug = productSlug(product.name);
            if (!unique.has(slug)) unique.set(slug, product);
            return unique;
          }, new Map<string, Product>()).values(),
        )
      : allProducts.filter((p) => p.category === category);
    if (search) {
      const query = normalizeSearch(search);
      list = Array.from(list.filter((p) => {
        const flowerKeyword = flowerCategories.has(p.category) ? ' cicek cicekler buket aranjman' : '';
        const haystack = normalizeSearch([
          p.name, p.category, p.subcategory, p.short, p.detailedDescription,
          p.productType, p.searchKeywords?.join(' '), flowerKeyword,
        ].filter(Boolean).join(' '));
        return haystack.includes(query);
      }).reduce((unique, product) => {
        const slug = productSlug(product.name);
        if (!unique.has(slug)) unique.set(slug, product);
        return unique;
      }, new Map<string, Product>()).values());
    }
    if (categoryLimits[category]) list = list.filter((p) => p.id >= 1000).slice(0, categoryLimits[category]);
    if (category === 'Tohumlar') {
      if (seedBudget === 'under500') list = list.filter((p) => p.price < 500);
      if (seedType !== 'Tümü') list = list.filter((p) => p.seedType === seedType);
      if (seedSeason !== 'Tümü') list = list.filter((p) => p.sowingSeason?.includes(seedSeason));
      if (seedArea !== 'Tümü') list = list.filter((p) => p.growingArea?.includes(seedArea));
      if (seedHarvest === 'Kısa') list = list.filter((p) => (p.harvestDays || 999) <= 75);
      if (seedHarvest === 'Uzun') list = list.filter((p) => (p.harvestDays || 0) > 75);
      if (seedSun !== 'Tümü') list = list.filter((p) => p.sunNeed === seedSun);
    }
    return [...list].sort((a, b) =>
      sort === 'price-asc'
        ? a.price - b.price
        : sort === 'price-desc'
          ? b.price - a.price
          : sort === 'name'
            ? a.name.localeCompare(b.name, 'tr')
            : Number(b.bestseller) - Number(a.bestseller),
    );
  }, [category, search, sort, seedBudget, seedType, seedSeason, seedArea, seedHarvest, seedSun]);
  const selectedKey = selected.name.toLocaleLowerCase('tr-TR');
  const selectedShownName = seedNames[language][selected.name] || selected.name;
  const selectedShownShort = language === 'tr' ? selected.short : selected.category === 'Tohumlar' ? (language === 'en' ? `${selectedShownName} seeds selected for reliable germination, with clear sowing and harvest guidance.` : `${selectedShownName}-Saatgut für zuverlässige Keimung mit klaren Aussaat- und Erntehinweisen.`) : (language === 'en' ? `${selectedShownName}, carefully selected and prepared for healthy, lasting enjoyment.` : `${selectedShownName}, sorgfältig ausgewählt und für gesunde, langanhaltende Freude vorbereitet.`);
  const recommendationTerms = selectedKey.includes('orkide')
    ? ['Orkide saksısı', 'Orkide toprağı', 'Orkide besini']
    : selectedKey.includes('sukulent') || selectedKey.includes('kaktüs')
      ? ['Sukulent saksısı', 'Sukulent toprağı', 'Sıvı bitki besini']
      : selectedKey.includes('monstera') || selectedKey.includes('deve tabanı')
        ? ['Büyük bitki saksısı', 'Bitki toprağı', 'Sıvı bitki besini']
        : ['Seramik saksı', 'Bitki toprağı', 'Sıvı bitki besini'];
  const recommended = recommendationTerms
    .map((name) => allProducts.find((p) => p.name === name))
    .filter((p): p is Product => Boolean(p));

  useEffect(() => {
    const context = (
      document as Document & {
        modelContext?: {
          registerTool: (
            tool: unknown,
            options?: { signal?: AbortSignal },
          ) => void | Promise<void>;
        };
      }
    ).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    Promise.resolve(
      context.registerTool(
        {
          name: 'add_product_to_cart',
          title: 'Ürünü sepete ekle',
          description:
            'Plantiva kataloğundaki ürün kimliğini belirtilen adetle sepete ekler.',
          inputSchema: {
            type: 'object',
            properties: {
              productId: { type: 'number' },
              quantity: { type: 'number', minimum: 1, maximum: 10 },
            },
            required: ['productId'],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false, untrustedContentHint: false },
          execute: (input: unknown) => {
            const x = input as { productId?: number; quantity?: number };
            const p = allProducts.find((v) => v.id === x.productId);
            if (!p) throw new Error('Ürün bulunamadı');
            const q = Math.max(1, Math.min(10, Number(x.quantity) || 1));
            add(p.id, q);
            return {
              productId: p.id,
              productName: p.name,
              quantity: q,
              status: 'added',
            };
          },
        },
        { signal: lifecycle.signal },
      ),
    ).catch(() => {});
    return () => lifecycle.abort();
  }, []);

  const header = (
    <>
      <div className="bg-[#315c48] px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-white sm:text-xs">
        1.500 TL üzeri siparişlerde ücretsiz teslimat · Aynı gün teslimat
        seçeneği
      </div>
      <header className="sticky top-0 z-50 border-b border-[#315c48]/10 bg-[#fffdf8]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center gap-3 px-4 lg:px-8">
          <button
            onClick={() => go('home')}
            className="flex items-center gap-2.5 font-serif text-2xl font-bold tracking-tight text-[#294d3d]"
          >
            <BrandMark /> Plantiva
          </button>
          <nav className="ml-7 hidden items-center gap-5 text-sm font-semibold text-[#526158] lg:flex">
            {Object.keys(menuGroups).map((group) => (
              <button key={group} onMouseEnter={() => setMegaMenu(group)} onFocus={() => setMegaMenu(group)} onClick={() => setMegaMenu(megaMenu === group ? '' : group)} aria-expanded={megaMenu === group}>{group}</button>
            ))}
            <button onClick={() => go('subscription')}>{ui[language].subscription}</button>
          </nav>
          <div className="relative ml-auto hidden max-w-[270px] flex-1 md:block">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#738078]" />
            <Input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (e.target.value) setView('catalog');
              }}
              className="h-11 rounded-full border-0 bg-[#f0f2eb] pl-10"
              placeholder={ui[language].search}
            />
          </div>
          <select aria-label="Dil" value={language} onChange={(e) => setLanguage(e.target.value as Language)} className="rounded-full border border-[#315c48]/15 bg-white px-2 py-1.5 text-xs font-bold">
            <option value="tr">TR</option><option value="en">EN</option><option value="de">DE</option>
          </select>
          <button
            onClick={() => {
              setAccountTab('orders');
              go('account');
            }}
            className="hidden items-center gap-1.5 text-xs font-semibold text-[#526158] xl:flex"
          >
            <ClipboardList className="size-4" /> Sipariş Takibi
          </button>
          <button
            onClick={() => go('account')}
            className="hidden items-center gap-1.5 text-xs font-semibold text-[#526158] xl:flex"
          >
            <UserRound className="size-4" /> {member ? 'Hesabım' : 'Üyelik'}
          </button>
          <Button
            variant="ghost"
            size="icon-lg"
            onClick={() => go('favorites')}
            aria-label="Favoriler"
            className="relative"
          >
            <Heart fill={favorites.length ? 'currentColor' : 'none'} />
            {favorites.length > 0 && (
              <span className="absolute right-0 top-0 size-2 rounded-full bg-[#c87482]" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon-lg"
            onClick={() => go('cart')}
            aria-label="Sepet"
            className="relative"
          >
            <ShoppingBag />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#c87482] text-[10px] text-white">
                {count}
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon-lg"
            onClick={() => setMobile(!mobile)}
            aria-label="Menü"
            className="lg:hidden"
          >
            {mobile ? <X /> : <Menu />}
          </Button>
        </div>
        {megaMenu && <div onMouseLeave={() => setMegaMenu('')} className="absolute left-1/2 z-40 hidden w-[min(900px,92vw)] -translate-x-1/2 rounded-b-3xl border border-[#315c48]/10 bg-[#fffdf8] p-6 shadow-xl lg:block">
          <p className="mb-4 font-serif text-2xl">{megaMenu}</p>
          <div className="grid grid-cols-3 gap-2">{menuGroups[megaMenu].map((c) => <button key={c} onClick={() => { setMegaMenu(''); openCategory(c); }} className="rounded-xl px-4 py-3 text-left text-sm hover:bg-[#eef2e9]">{c}</button>)}</div>
        </div>}
        {mobile && (
          <div className="border-t bg-[#fffdf8] p-4 lg:hidden">
            <div className="relative mb-3 md:hidden">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2" />
              <Input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setView('catalog');
                }}
                className="h-11 pl-10"
                placeholder="Ürün ara..."
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(menuGroups).map((c) => (
                <button
                  key={c}
                  onClick={() => setMegaMenu(megaMenu === c ? '' : c)}
                  className="rounded-xl bg-[#f1f3ed] p-3 text-left text-sm"
                >
                  {c}
                </button>
              ))}
            </div>
            {megaMenu && <div className="mt-3 grid gap-1">{menuGroups[megaMenu]?.map((c) => <button key={c} onClick={() => openCategory(c)} className="rounded-lg px-3 py-2 text-left text-sm hover:bg-[#f1f3ed]">{c}</button>)}</div>}
          </div>
        )}
      </header>
    </>
  );

  const productGrid = (list: Product[]) => (
    <div className="grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
      {list.map((p, index) => (
        <ProductCard
          key={p.id}
          product={p}
          favorite={favorites.includes(p.id)}
          onFavorite={() => toggleFavorite(p.id)}
          onOpen={() => openProduct(p)}
          onAdd={() => add(p.id)}
          language={language}
          index={index}
        />
      ))}
    </div>
  );

  const home = (
    <>
      <section className="relative flex min-h-[calc(100vh-108px)] items-center overflow-hidden bg-[#244a3b] px-5 py-16 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl py-8 text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-white backdrop-blur">
            <Sparkles className="size-3.5" /> Doğadan gelen mutluluk
          </span>
          <h1 className="mt-7 max-w-2xl font-serif text-5xl font-semibold leading-[1.04] tracking-[-.04em] text-white sm:text-6xl lg:text-7xl">
            Her duygunun
            <br />
            <em className="font-normal text-[#f2bdc7]">çiçek açan</em> bir hâli
            var.
          </h1>
          <p className="mt-6 max-w-lg leading-7 text-white/80">
            Özenle seçilen çiçekler, iyi bakılmış bitkiler ve sevdiklerinize
            kendilerini özel hissettiren zarif hediyeler.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              onClick={() => openCategory('Tüm Çiçekler')}
              className="h-12 rounded-full bg-white px-6 text-[#315c48] hover:bg-[#f5efe6]"
            >
              Koleksiyonu keşfet <ArrowRight />
            </Button>
            <Button
              onClick={() => openCategory('Mevsim Çiçekleri')}
              variant="outline"
              className="h-12 rounded-full border-white/40 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white"
            >
              Mevsimin çiçekleri
            </Button>
          </div>
          <div className="mt-10 flex gap-7 border-t border-white/20 pt-6 text-sm">
            <div>
              <strong className="block text-lg">24 saat</strong>
              <span className="text-white/65">tazelik garantisi</span>
            </div>
            <div>
              <strong className="block text-lg">4.9/5</strong>
              <span className="text-white/65">mutlu müşteri</span>
            </div>
            <div>
              <strong className="block text-lg">10 şehir</strong>
              <span className="text-white/65">mağazadan teslim</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1400&q=90"
            aria-label="Hafif rüzgârda hareket eden çiçekler"
            className="absolute inset-0 h-full w-full object-contain object-center"
          >
            <source
              src="/images/home/hero-cicek-bahcesi.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#15372d]/85 via-[#15372d]/52 to-[#15372d]/20" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="eyebrow">Aradığın her his burada</p>
            <h2 className="section-title">Kategorileri keşfet</h2>
          </div>
          <button
            onClick={() => openCategory('Tüm Çiçekler')}
            className="hidden text-sm font-bold sm:block"
          >
            Tümünü gör →
          </button>
        </div>
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-3">
          {categories.map(([, c], index) => (
            <button
              key={c}
              onClick={() => openCategory(c)}
              className="category-card flex min-w-[150px] items-center gap-3 rounded-2xl bg-[#f1f3ed] p-4 text-left transition hover:-translate-y-1 hover:bg-[#e5ecdf]"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <span className="grid size-9 place-items-center rounded-full bg-white/70">
                <Leaf className="size-4" />
              </span>
              <span className="text-sm font-bold leading-tight">{c}</span>
            </button>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="mb-8">
          <p className="eyebrow">En çok sevilenler</p>
          <h2 className="section-title">Çok satanlar</h2>
        </div>
        {productGrid([...products.filter((p) => p.bestseller).slice(0, 3), ...allProducts.filter((p) => p.name === 'Açelya Çiçeği').slice(0, 1)])}
      </section>
    </>
  );

  const catalog = (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="rounded-[2rem] bg-[#e9efe6] px-6 py-10 sm:px-10">
        <p className="eyebrow">Plantiva seçkisi</p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl">
          {search ? `“${search}” için sonuçlar` : category}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6a776f]">
          {category === 'Tohumlar' ? `Çimlenme gücü yüksek, ekim mevsimi ve yetiştirme alanı açıkça belirtilen ${filtered.length} tohum seçeneğini keşfedin.` : `Her ürün; mevsimi, ışık ve sulama ihtiyacı, bakım önerisi ve kullanım alanıyla birlikte sunulur. Bu koleksiyonda ${filtered.length} seçenek bulunuyor.`}
        </p>
      </div>
      <div className="no-scrollbar mt-7 flex gap-2 overflow-x-auto pb-2">
        {categories.map(([, c]) => (
          <button
            key={c}
            onClick={() => openCategory(c)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${category === c ? 'bg-[#315c48] text-white' : 'bg-[#f1f3ed]'}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="my-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-[#718078]">
          {filtered.length} ürün gösteriliyor
        </p>
        <label className="flex items-center gap-2 text-sm">
          Sırala{' '}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-[#315c48]/15 bg-white px-4 py-2.5"
          >
            <option value="featured">Öne çıkanlar</option>
            <option value="price-asc">Fiyat: Artan</option>
            <option value="price-desc">Fiyat: Azalan</option>
            <option value="name">İsim: A–Z</option>
          </select>
        </label>
      </div>
      {category === 'Tohumlar' && <div className="mb-8 rounded-3xl border border-[#315c48]/10 bg-[#faf9f4] p-5">
        <div className="flex flex-wrap gap-2">
          <>
            <select value={seedType} onChange={(e) => setSeedType(e.target.value)} className="rounded-full border-0 bg-white px-4 py-2 text-xs font-bold"><option>Tümü</option>{['Sebze Tohumları','Meyve Tohumları','Çiçek Tohumları','Aromatik Bitkiler','Tahıllar','Başlangıç Setleri'].map(x => <option key={x}>{x}</option>)}</select>
            <select value={seedSeason} onChange={(e) => setSeedSeason(e.target.value)} className="rounded-full border-0 bg-white px-4 py-2 text-xs font-bold"><option>Tümü</option><option>İlkbahar</option><option>Sonbahar</option></select>
            <select value={seedArea} onChange={(e) => setSeedArea(e.target.value)} className="rounded-full border-0 bg-white px-4 py-2 text-xs font-bold"><option>Tümü</option><option>Bahçe</option><option>Tarla</option><option>Saksı</option><option>Balkon</option></select>
            <select value={seedHarvest} onChange={(e) => setSeedHarvest(e.target.value)} className="rounded-full border-0 bg-white px-4 py-2 text-xs font-bold"><option>Tümü</option><option value="Kısa">75 güne kadar</option><option value="Uzun">75 günden uzun</option></select>
            <select value={seedSun} onChange={(e) => setSeedSun(e.target.value)} className="rounded-full border-0 bg-white px-4 py-2 text-xs font-bold"><option>Tümü</option><option>Tam güneş</option><option>Yarı gölge</option></select>
            <select value={seedBudget} onChange={(e) => setSeedBudget(e.target.value)} className="rounded-full border-0 bg-white px-4 py-2 text-xs font-bold"><option value="all">Fiyat</option><option value="under500">500 TL altı</option></select>
          </>
        </div>
      </div>}
      {filtered.length ? (
        productGrid(filtered)
      ) : (
        <div className="rounded-3xl bg-[#f5f2eb] py-20 text-center">
          <Search className="mx-auto mb-4 size-9 text-[#8a958e]" />
          <h2 className="font-serif text-2xl">Aradığınız ürünü bulamadık.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#77827b]">
            Aramanıza yakın olabilecek popüler seçeneklere göz atabilirsiniz.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setCategory('Tüm Çiçekler');
            }}
            className="mt-3 text-sm font-bold text-[#b46876]"
          >
            Tüm ürünleri göster
          </button>
          <div className="mx-auto mt-10 max-w-5xl text-left">
            {productGrid(
              allProducts
                .filter((p) => p.category === category || p.bestseller)
                .slice(0, 4),
            )}
          </div>
        </div>
      )}
    </section>
  );

  const detail = (
    <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <button
        onClick={goBack}
        className="mb-7 flex items-center gap-2 text-sm font-bold text-[#68766e]"
      >
        <ArrowLeft className="size-4" /> Ürünlere dön
      </button>
      <div className="grid gap-9 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/4.7] overflow-hidden rounded-[2rem] bg-[#eeeae3]">
          <img
            src={selected.image}
            alt={selectedShownName}
            className="h-full w-full object-cover"
          />
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold">
            {selected.badge}
          </span>
        </div>
        <div className="py-3">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#b46876]">
            {selected.category}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            {selectedShownName}
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex text-[#c88d54]">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} className="size-4" fill="currentColor" />
              ))}
            </div>
            <span className="text-xs text-[#7b857f]">
              4.9 · 38 değerlendirme
            </span>
          </div>
          <p className="mt-6 text-2xl font-bold">{money(selected.price)}</p>
          <p className="mt-5 leading-7 text-[#68756d]">{selectedShownShort}</p>
          <p className="mt-3 leading-7 text-[#68756d]">{selected.detailedDescription}</p>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#3f6a54]">
            <span className="size-2 rounded-full bg-[#65a179]" /> Stokta ·{' '}
            {selected.stock} adet hazır
          </div>
          <div className="mt-6 grid gap-3 rounded-2xl bg-[#f3f2eb] p-4 sm:grid-cols-2">
            <label className="text-xs font-bold">Teslimat tarihi<Input type="date" min={new Date(Date.now() + 86400000).toISOString().slice(0,10)} value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} className="mt-2 bg-white" /></label>
            <label className="text-xs font-bold">Teslimat saati<select value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} className="mt-2 h-9 w-full rounded-md border bg-white px-3"><option>10:00–14:00</option><option>14:00–18:00</option><option>18:00–21:00</option></select></label>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <div className="flex h-12 items-center rounded-full border border-[#315c48]/15 bg-white">
              <button
                onClick={() => setDetailQty((q) => Math.max(1, q - 1))}
                className="grid size-11 place-items-center"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-8 text-center font-bold">{detailQty}</span>
              <button
                onClick={() => setDetailQty((q) => Math.min(10, q + 1))}
                className="grid size-11 place-items-center"
              >
                <Plus className="size-4" />
              </button>
            </div>
            <Button
              onClick={() => add(selected.id, detailQty)}
              className="h-12 flex-1 rounded-full px-7 sm:flex-none"
            >
              <ShoppingBag /> Sepete Ekle
            </Button>
            <Button
              onClick={() => toggleFavorite(selected.id)}
              variant="outline"
              className="h-12 rounded-full px-5"
            >
              <Heart
                fill={favorites.includes(selected.id) ? 'currentColor' : 'none'}
              />{' '}
              {favorites.includes(selected.id)
                ? 'Favorilerde'
                : 'Favorilere Ekle'}
            </Button>
          </div>
          <div className="mt-7 grid grid-cols-3 gap-2 border-y border-[#315c48]/10 py-5 text-center text-[11px] font-semibold text-[#617068]">
            <div>
              <Truck className="mx-auto mb-2 size-5" />
              Güvenli teslimat
            </div>
            <div>
              <ShieldCheck className="mx-auto mb-2 size-5" />
              Tazelik garantisi
            </div>
            <div>
              <PackageCheck className="mx-auto mb-2 size-5" />
              Özenli paketleme
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-[#b46876]/20 bg-[#fff3f3] p-4 text-sm leading-6"><strong className="block text-[#9b5361]">Görsel onayı</strong>Siparişiniz yola çıkmadan önce hazırlanan ürünün fotoğrafını görür ve onaylarsınız.</div>
          <div className="mt-3 rounded-2xl bg-[#eef2e9] p-4 text-sm leading-6"><strong className="block">Özel Paketleme Güvencesi</strong>Hava delikli koruyucu kutu ve ürüne uygun sabitleme yöntemleriyle güvenli teslimat sağlanır.</div>
        </div>
      </div>
      {selected.showCareSection && <div className="care-section mt-14">
        <p className="eyebrow">Bitkini tanı</p>
        <h2 className="section-title">Bakım ve anlamı</h2>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {(selected.productType === 'seed' ? [
            ['', 'Tohum grubu', selected.seedType || 'Tohumlar'],
            ['', 'Ekim mevsimi', selected.sowingSeason || selected.season],
            ['', 'Yetiştirme alanı', selected.growingArea || 'Bahçe'],
            ['', 'Hasat süresi', `Yaklaşık ${selected.harvestDays || 75} gün`],
            ['', 'Güneş ihtiyacı', selected.sunNeed || selected.light],
            ['', 'Sulama', selected.watering],
            ['', 'Ekim ve bakım', selected.care],
            ['', 'Toprak hazırlığı', selected.soil || 'İnce yapılı, geçirgen ve organik maddesi dengeli ekim toprağı'],
          ] : selected.productType === 'care' || selected.productType === 'garden' ? [
            ['', 'Kullanım dönemi', selected.season],
            ['', 'Kullanım', selected.detailedDescription],
            ['', 'Saklama', selected.environment],
            ['', 'Işık ve ısı', selected.light],
            ['', 'Temizlik ve bakım', selected.care],
            ['', 'Uygun uygulama alanı', selected.soil || 'Ürün etiketinde belirtilen uygulama alanı'],
          ] : [
            ['', 'Mevsim', selected.season],
            ['', 'Sulama', selected.watering],
            ['', 'Işık', selected.light],
            ['', 'Uygun ortam', selected.environment],
            ['', 'Saksı önerisi', selected.pot],
            [
              '',
              'Toprak önerisi',
              selected.soil ||
                'Organik maddesi zengin, iyi drene olan kaliteli saksı toprağı',
            ],
            ['', 'Bakım', selected.care],
            ['', 'Hediye anlamı', selected.meaning],
          ]).filter(([, , detail]) => Boolean(detail)).map(([i, t, d], idx) => (
            <div
              key={t}
              className={`rounded-2xl bg-[#f3f2eb] p-5 ${idx > 4 ? 'lg:col-span-2' : ''}`}
            >
              <span className="text-2xl">{i}</span>
              <h3 className="mt-3 text-sm font-bold">{t}</h3>
              <p className="mt-1 text-sm leading-6 text-[#6e7972]">{d}</p>
            </div>
          ))}
        </div>
      </div>}
      {selected.showRecommendations && <div className="mt-16 border-t border-[#315c48]/10 pt-12">
        <p className="eyebrow">Birlikte daha iyi</p>
        <h2 className="section-title">Bu ürün için önerilenler</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e7972]">
          Bitkinizin kök yapısını destekleyen saksı, geçirgen toprak ve dengeli
          bakım ürünlerini birlikte seçebilirsiniz.
        </p>
        <div className="mt-8">{productGrid(recommended)}</div>
      </div>}
    </section>
  );

  const cartView = (
    <section className="mx-auto max-w-5xl px-5 py-10 lg:px-8">
      <p className="eyebrow">Plantiva sepetim</p>
      <h1 className="section-title">
        Sepetiniz <span className="text-xl text-[#7d8881]">({count} ürün)</span>
      </h1>
      {count === 0 ? (
        <div className="mt-10 rounded-[2rem] bg-[#f3f2eb] py-20 text-center">
          <ShoppingBag className="mx-auto size-12 text-[#8b968f]" />
          <h2 className="mt-5 font-serif text-3xl">Sepetiniz henüz boş</h2>
          <p className="mt-2 text-sm text-[#77827b]">
            Biraz yeşillik ve mutluluk eklemeye ne dersiniz?
          </p>
          <Button
            onClick={() => openCategory('Tüm Çiçekler')}
            className="mt-6 h-11 rounded-full px-6"
          >
            Alışverişe başla
          </Button>
        </div>
      ) : (
        <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-4">
            {Object.entries(cart).map(([id, q]) => {
              const p = allProducts.find((x) => x.id === +id)!;
              return (
                <div
                  key={id}
                  className="flex gap-4 rounded-2xl border border-[#315c48]/10 bg-white p-3 sm:p-4"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="size-24 rounded-xl object-cover sm:size-28"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-lg">{p.name}</h3>
                        <p className="mt-1 text-xs text-[#7c8780]">
                          {p.category}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setCart((c) => {
                            const n = { ...c };
                            delete n[p.id];
                            return n;
                          })
                        }
                        aria-label="Sepetten sil"
                      >
                        <Trash2 className="size-4 text-[#a86b73]" />
                      </button>
                    </div>
                    <div className="mt-5 flex items-end justify-between">
                      <div className="flex items-center rounded-full bg-[#f1f3ed]">
                        <button
                          onClick={() =>
                            setCart((c) => ({
                              ...c,
                              [p.id]: Math.max(1, q - 1),
                            }))
                          }
                          className="grid size-8 place-items-center"
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="w-7 text-center text-sm font-bold">
                          {q}
                        </span>
                        <button
                          onClick={() =>
                            setCart((c) => ({ ...c, [p.id]: q + 1 }))
                          }
                          className="grid size-8 place-items-center"
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <strong>{money(p.price * q)}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            onCheckout={() => go('checkout')}
          />
        </div>
      )}
    </section>
  );

  const favoritesView = (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <p className="eyebrow">Kalbinizdekiler</p>
      <h1 className="section-title">Favorilerim</h1>
      <div className="mt-9">
        {favorites.length ? (
          productGrid(allProducts.filter((p) => favorites.includes(p.id)))
        ) : (
          <div className="rounded-[2rem] bg-[#f3f2eb] py-20 text-center">
            <Heart className="mx-auto size-12 text-[#b9808b]" />
            <h2 className="mt-5 font-serif text-3xl">Henüz favoriniz yok</h2>
            <p className="mt-2 text-sm text-[#77827b]">
              Beğendiğiniz ürünleri kalp simgesiyle burada biriktirebilirsiniz.
            </p>
            <Button
              onClick={() => openCategory('Tüm Çiçekler')}
              className="mt-6 rounded-full px-6"
            >
              Ürünleri keşfet
            </Button>
          </div>
        )}
      </div>
    </section>
  );

  const checkout = (
    <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
      <button
        onClick={goBack}
        className="mb-6 flex items-center gap-2 text-sm font-bold"
      >
        <ArrowLeft className="size-4" /> Sepete dön
      </button>
      <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const req = [
              'name',
              'phone',
              'email',
              'card',
              'expiry',
              'cvc',
              ...(deliveryType === 'address'
                ? ['address', 'city', 'district']
                : []),
            ];
            const errs: Record<string, string> = {};
            req.forEach((k) => {
              if (!String(data.get(k) || '').trim())
                errs[k] = 'Bu alan zorunludur';
            });
            if (deliveryType === 'store' && !selectedBranch)
              errs.branch = 'Lütfen teslim alacağınız şubeyi seçin';
            if (String(data.get('email')).indexOf('@') < 1)
              errs.email = 'Geçerli bir e-posta girin';
            if (String(data.get('card')).replace(/\s/g, '').length < 16)
              errs.card = '16 haneli kart numarası girin';
            setCheckoutErrors(errs);
            if (!Object.keys(errs).length) {
              setCart({});
              go('success');
            }
          }}
          className="space-y-7"
        >
          <div>
            <p className="eyebrow">Güvenli ödeme</p>
            <h1 className="section-title">Teslimat ve ödeme</h1>
          </div>
          <CheckoutBlock title="Teslimat bilgileri">
            <Field name="name" label="Ad soyad" error={checkoutErrors.name} />
            <Field
              name="phone"
              label="Telefon"
              placeholder="05xx xxx xx xx"
              error={checkoutErrors.phone}
            />
            <Field
              name="email"
              label="E-posta"
              type="email"
              error={checkoutErrors.email}
            />
            {deliveryType === 'address' && <>
              <Field name="address" label="Teslimat adresi" wide error={checkoutErrors.address} />
              <Field name="city" label="Şehir" value={checkoutCity} onChange={(e) => setCheckoutCity(e.target.value)} error={checkoutErrors.city} />
              <Field name="district" label="İlçe" error={checkoutErrors.district} />
              {checkoutCity && <p className={`col-span-full rounded-xl p-3 text-xs font-semibold ${sameDayCities.some((c) => c.toLocaleLowerCase('tr') === checkoutCity.trim().toLocaleLowerCase('tr')) ? 'bg-[#e7f1e5] text-[#315c48]' : 'bg-[#f8e9e9] text-[#9b5361]'}`}>{sameDayCities.some((c) => c.toLocaleLowerCase('tr') === checkoutCity.trim().toLocaleLowerCase('tr')) ? 'Bu şehirde aynı gün teslimat seçilebilir.' : 'Aynı gün teslimat bu bölgede mevcut değildir.'}</p>}
            </>}
          </CheckoutBlock>
          <CheckoutBlock title="Teslimat tercihi ve sipariş notu">
            <div className="col-span-full grid gap-3 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#315c48]/12 bg-[#fbfbf7] p-4 text-sm font-semibold">
                <input
                  type="radio"
                  name="delivery"
                  value="address"
                  checked={deliveryType === 'address'}
                  onChange={() => setDeliveryType('address')}
                  className="accent-[#315c48]"
                />{' '}
                Adrese teslim
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#315c48]/12 bg-[#fbfbf7] p-4 text-sm font-semibold">
                <input
                  type="radio"
                  name="delivery"
                  value="store"
                  checked={deliveryType === 'store'}
                  onChange={() => setDeliveryType('store')}
                  className="accent-[#315c48]"
                />{' '}
                Mağazadan teslim
              </label>
            </div>
            {deliveryType === 'store' && (
              <>
                <div className="col-span-full grid max-h-[430px] gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
                  {pickupBranches.map(([name, place, address]) => (
                    <label
                      key={name}
                      className={`cursor-pointer rounded-2xl border p-4 ${selectedBranch === name ? 'border-[#315c48] bg-[#eef3ea]' : 'border-[#315c48]/10 bg-white'}`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="branch"
                          value={name}
                          checked={selectedBranch === name}
                          onChange={() => setSelectedBranch(name)}
                          className="mt-1 accent-[#315c48]"
                        />
                        <div>
                          <strong className="text-sm">{name}</strong>
                          <p className="mt-1 text-xs font-semibold text-[#647169]">
                            {place}
                          </p>
                          <p className="mt-2 text-xs font-normal leading-5 text-[#78827c]">
                            {address}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-3 text-[11px] font-bold text-[#315c48]">
                            <a
                              href="tel:+908500000000"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1"
                            >
                              <Phone className="size-3" /> Demo telefon
                            </a>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1"
                            >
                              <MapPin className="size-3" /> Haritada görüntüle
                            </a>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {checkoutErrors.branch && (
                  <p className="col-span-full text-xs font-semibold text-red-600">
                    {checkoutErrors.branch}
                  </p>
                )}
              </>
            )}
            <label className="col-span-full block text-sm font-semibold">
              Sipariş Notunuz
              <textarea
                name="orderNote"
                rows={4}
                maxLength={300}
                placeholder="Siparişinizle ilgili özel bir notunuz varsa buraya yazabilirsiniz."
                className="mt-2 w-full resize-none rounded-xl border border-[#315c48]/15 bg-[#fbfbf7] p-3 text-sm font-normal leading-6 outline-none focus:border-[#315c48]"
              />
            </label>
            <div className="col-span-full">
              <p className="mb-2 text-sm font-semibold">Not kartı tasarımı</p>
              <div className="flex flex-wrap gap-2">{['Minimal','Romantik','Doğum günü','Anneler Günü','Teşekkür','Geçmiş olsun','Tebrik','Kurumsal'].map((design) => <button type="button" key={design} onClick={() => setCardDesign(design)} className={`rounded-full px-3 py-2 text-xs font-bold ${cardDesign === design ? 'bg-[#315c48] text-white' : 'bg-[#f1f3ed]'}`}>{design}</button>)}</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2"><label className="rounded-xl border border-dashed p-3 text-xs font-semibold">Sesli mesaj<input type="file" accept="audio/*" className="mt-2 block w-full text-xs" /></label><label className="rounded-xl border border-dashed p-3 text-xs font-semibold">Video mesaj<input type="file" accept="video/*" className="mt-2 block w-full text-xs" /></label></div>
              <p className="mt-2 text-xs leading-5 text-[#718078]">Seçilen medya, demo sipariş kartında QR bağlantısı olarak hazırlanır.</p>
            </div>
            <label className="col-span-full flex items-center gap-3 rounded-xl bg-[#f3f2eb] p-4 text-sm font-semibold"><input type="checkbox" checked={giftHidePrice} onChange={(e) => setGiftHidePrice(e.target.checked)} className="size-4 accent-[#315c48]" />Bu bir hediyedir – fiyat bilgisi alıcıya gösterilmesin</label>
          </CheckoutBlock>
          <CheckoutBlock title="Kart bilgileri">
            <Field
              name="card"
              label="Kart numarası"
              placeholder="0000 0000 0000 0000"
              wide
              error={checkoutErrors.card}
            />
            <Field
              name="expiry"
              label="Son kullanma"
              placeholder="AA/YY"
              error={checkoutErrors.expiry}
            />
            <Field
              name="cvc"
              label="CVC"
              placeholder="000"
              error={checkoutErrors.cvc}
            />
          </CheckoutBlock>
          <CheckoutBlock title="Fatura bilgileri">
            <label className="col-span-full flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                defaultChecked
                className="size-4 accent-[#315c48]"
              />{' '}
              Fatura adresim teslimat adresimle aynı
            </label>
          </CheckoutBlock>
          <Button type="submit" className="h-13 w-full rounded-full text-base">
            <ShieldCheck /> {money(subtotal + shipping)} · Demo ödemeyi tamamla
          </Button>
          <p className="text-center text-xs text-[#77827b]">
            Bu bir demo mağazadır; gerçek ödeme alınmaz.
          </p>
        </form>
        <div>
          <OrderSummary subtotal={subtotal} shipping={shipping} />
        </div>
      </div>
    </section>
  );

  const account = (
    <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
      {!member ? (
        <div className="mx-auto max-w-xl rounded-[2rem] border border-[#315c48]/10 bg-white p-6 shadow-sm sm:p-9">
          <p className="eyebrow">Plantiva hesabı</p>
          <h1 className="section-title">Giriş yap veya üye ol</h1>
          <p className="mt-4 text-sm leading-6 text-[#6e7972]">
            Siparişlerinizi takip etmek, adreslerinizi ve favorilerinizi tek
            yerde yönetmek için bilgilerinizi girin. Bu demo hesap yalnızca
            cihazınızda saklanır.
          </p>
          <form
            className="mt-7 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              setMember({
                name: String(data.get('memberName') || 'Plantiva Üyesi'),
                email: String(data.get('memberEmail') || ''),
                phone: String(data.get('memberPhone') || ''),
                address: '',
              });
              setToast('Hesabınıza giriş yapıldı');
            }}
          >
            <Field name="memberName" label="Ad soyad" />
            <Field name="memberPhone" label="Telefon" />
            <Field name="memberEmail" label="E-posta" type="email" wide />
            <Field name="memberPassword" label="Şifre" type="password" wide />
            <Button type="submit" className="col-span-full h-11 rounded-full">
              Devam et
            </Button>
            <button type="button" onClick={() => setToast('Şifre yenileme bağlantısı e-posta adresinize gönderildi')} className="col-span-full text-sm font-bold text-[#b46876]">Şifremi unuttum</button>
          </form>
        </div>
      ) : (
        <div className="grid gap-7 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-3xl bg-[#eef2e9] p-5">
            <div className="flex items-center gap-3 border-b border-[#315c48]/10 pb-5">
              <span className="grid size-11 place-items-center rounded-full bg-white">
                <UserRound />
              </span>
              <div>
                <strong className="block">{member.name}</strong>
                <span className="text-xs text-[#718078]">{member.email}</span>
              </div>
            </div>
            <nav className="mt-4 space-y-1">
              {[
                ['profile', 'Profilim'],
                ['addresses', 'Adreslerim'],
                ['orders', 'Siparişlerim'],
                ['favorites', 'Favorilerim'],
                ['subscriptions', 'Aboneliklerim'],
                ['preferences', 'Teslimat tercihlerim'],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => setAccountTab(id)}
                  className={`block w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold ${accountTab === id ? 'bg-white text-[#315c48]' : 'text-[#657169]'}`}
                >
                  {label}
                </button>
              ))}
            </nav>
            <button
              onClick={() => setMember(null)}
              className="mt-5 flex items-center gap-2 px-3 text-sm font-semibold text-[#a45865]"
            >
              <LogOut className="size-4" /> Çıkış yap
            </button>
          </aside>
          <div className="rounded-3xl border border-[#315c48]/10 bg-white p-6 sm:p-8">
            {accountTab === 'profile' && (
              <>
                <h1 className="font-serif text-3xl">Profil bilgilerim</h1>
                <form
                  className="mt-6 grid gap-4 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const d = new FormData(e.currentTarget);
                    setMember({
                      ...member,
                      name: String(d.get('profileName') || member.name),
                      phone: String(d.get('profilePhone') || member.phone),
                    });
                    setToast('Profil bilgileriniz güncellendi');
                  }}
                >
                  <Field
                    name="profileName"
                    label="Ad soyad"
                    placeholder={member.name}
                  />
                  <Field
                    name="profilePhone"
                    label="Telefon"
                    placeholder={member.phone}
                  />
                  <Button
                    type="submit"
                    className="sm:col-span-2 w-fit rounded-full px-5"
                  >
                    Değişiklikleri kaydet
                  </Button>
                </form>
              </>
            )}
            {accountTab === 'addresses' && (
              <>
                <h1 className="font-serif text-3xl">Adreslerim</h1>
                <label className="mt-6 block text-sm font-semibold">
                  Teslimat adresi
                  <textarea
                    value={member.address}
                    onChange={(e) =>
                      setMember({ ...member, address: e.target.value })
                    }
                    rows={5}
                    placeholder="Adresinizi girin"
                    className="mt-2 w-full rounded-xl border border-[#315c48]/15 bg-[#fbfbf7] p-3 font-normal"
                  />
                </label>
                <p className="mt-3 text-xs text-[#718078]">
                  Adres değişiklikleri otomatik kaydedilir.
                </p>
              </>
            )}
            {accountTab === 'orders' && (
              <>
                <h1 className="font-serif text-3xl">Siparişlerim ve takip</h1>
                <div className="mt-6 rounded-2xl bg-[#f3f4ee] p-5">
                  <div className="flex flex-wrap justify-between gap-2">
                    <strong>#PLN-260901</strong>
                    <span className="rounded-full bg-[#dcebdc] px-3 py-1 text-xs font-bold text-[#3d6c51]">
                      Hazırlanıyor
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-[#6e7972]">
                    Tahmini teslimat: Yarın, 10:00–18:00
                  </p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                    <div className="h-full w-2/3 rounded-full bg-[#5c8a6d]" />
                  </div>
                  <div className="mt-5 grid gap-2 text-xs">{['Sipariş alındı','Hazırlanıyor','Hazırlandı','Görsel onayı bekliyor','Onaylandı','Kargoya verildi','Yolda','Dağıtımda','Teslim edildi'].map((s,i) => <div key={s} className={`flex items-center gap-2 ${i < 2 ? 'font-bold text-[#315c48]' : 'text-[#8a958e]'}`}><span className={`size-2 rounded-full ${i < 2 ? 'bg-[#5c8a6d]' : 'bg-[#d3d8d1]'}`} />{s}</div>)}</div>
                </div>
              </>
            )}
            {accountTab === 'favorites' && (
              <>
                <h1 className="font-serif text-3xl">Favorilerim</h1>
                <div className="mt-6">
                  {favorites.length ? (
                    productGrid(
                      allProducts
                        .filter((p) => favorites.includes(p.id))
                        .slice(0, 4),
                    )
                  ) : (
                    <p className="rounded-2xl bg-[#f3f4ee] p-6 text-sm text-[#6e7972]">
                      Henüz favori ürününüz bulunmuyor.
                    </p>
                  )}
                </div>
              </>
            )}
            {accountTab === 'subscriptions' && <><h1 className="font-serif text-3xl">Aboneliklerim</h1><div className="mt-6 rounded-2xl bg-[#f3f4ee] p-6 text-sm leading-6 text-[#6e7972]">Aktif aboneliğiniz bulunmuyor. <button onClick={() => go('subscription')} className="font-bold text-[#315c48]">Yeni abonelik oluşturun.</button></div></>}
            {accountTab === 'preferences' && <><h1 className="font-serif text-3xl">Teslimat tercihlerim</h1><div className="mt-6 grid gap-3"><label className="rounded-xl bg-[#f3f4ee] p-4 text-sm"><input type="radio" name="pref" defaultChecked className="mr-3 accent-[#315c48]" />Adrese teslim</label><label className="rounded-xl bg-[#f3f4ee] p-4 text-sm"><input type="radio" name="pref" className="mr-3 accent-[#315c48]" />Mağazadan teslim</label></div></>}
          </div>
        </div>
      )}
    </section>
  );

  const success = (
    <section className="mx-auto max-w-2xl px-5 py-20 text-center">
      <div className="mx-auto grid size-20 place-items-center rounded-full bg-[#e4efe4]">
        <Check className="size-10 text-[#3f7658]" />
      </div>
      <p className="eyebrow mt-8">Siparişiniz alındı</p>
      <h1 className="mt-3 font-serif text-5xl">Teşekkürler!</h1>
      <p className="mx-auto mt-5 max-w-md leading-7 text-[#6d7871]">
        Çiçekleriniz özenle hazırlanıyor. Sipariş numaranız{' '}
        <strong className="text-[#315c48]">#PLN-260901</strong>. Teslimat
        detaylarını e-posta adresinize gönderdik.
      </p>
      <div className="mt-8 rounded-2xl bg-[#f2f3ec] p-5 text-sm">
        <Truck className="mx-auto mb-3 size-6" />
        <strong>Tahmini teslimat</strong>
        <p className="mt-1 text-[#77827b]">Yarın, 10:00 – 18:00</p>
      </div>
      <Button
        onClick={() => go('home')}
        className="mt-8 h-11 rounded-full px-6"
      >
        Ana sayfaya dön <ArrowRight />
      </Button>
    </section>
  );

  const subscription = (
    <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
      <div className="rounded-[2.5rem] bg-[#e9efe6] p-7 sm:p-12"><p className="eyebrow">Düzenli tazelik</p><h1 className="section-title">Çiçek Aboneliği</h1><p className="mt-4 max-w-2xl leading-7 text-[#657169]">Ev, ofis, restoran ve oteller için seçtiğiniz sıklıkta hazırlanan mevsimlik çiçek ve bitki aboneliği.</p></div>
      {subscriptionSuccess ? <div className="mt-8 rounded-3xl bg-[#e8f1e5] p-8 text-center"><Check className="mx-auto size-10 text-[#3f7658]" /><h2 className="mt-4 font-serif text-3xl">Talebiniz başarıyla alındı.</h2><p className="mt-3 text-[#657169]">En kısa sürede sizinle iletişime geçeceğiz.</p><Button onClick={() => setSubscriptionSuccess(false)} className="mt-6 rounded-full">Yeni talep oluştur</Button></div> :
      <form onSubmit={(e) => { e.preventDefault(); const data = Object.fromEntries(new FormData(e.currentTarget).entries()); const previous = JSON.parse(localStorage.getItem('plantiva-subscription-requests') || '[]'); localStorage.setItem('plantiva-subscription-requests', JSON.stringify([...previous, {...data, createdAt: new Date().toISOString(), status: 'Talep alındı'}])); setSubscriptionSuccess(true); setToast('Talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.'); setAccountTab('subscriptions'); }} className="mt-8 grid gap-5 rounded-3xl border border-[#315c48]/10 bg-white p-6 sm:grid-cols-2 sm:p-8">
        <Field name="fullName" label="Ad Soyad" wide required /><Field name="subscriptionEmail" label="E-posta adresi" type="email" required /><Field name="subscriptionPhone" label="İrtibat telefonu" required />
        <label className="text-sm font-semibold">Abonelik modeli<select name="model" required className="mt-2 h-11 w-full rounded-xl border bg-[#fbfbf7] px-3"><option>Ev aboneliği</option><option>Kurumsal ofis</option><option>Restoran / Otel</option></select></label>
        <label className="text-sm font-semibold">Teslimat sıklığı<select name="frequency" required className="mt-2 h-11 w-full rounded-xl border bg-[#fbfbf7] px-3"><option>Haftalık</option><option>2 haftada bir</option><option>Aylık</option></select></label>
        <label className="text-sm font-semibold">Ürün tercihi<select name="preference" required className="mt-2 h-11 w-full rounded-xl border bg-[#fbfbf7] px-3"><option>Mevsim çiçekleri</option><option>Ev bitkileri</option><option>Karışık seçki</option></select></label>
        <Field name="subscriptionBudget" label="Aylık bütçe" placeholder="Örn. 2.500 TL" /><Field name="subscriptionStart" label="Başlangıç tarihi" type="date" /><Field name="subscriptionAddress" label="Teslimat adresi" wide />
        <label className="sm:col-span-2 text-sm font-semibold">Notlar<textarea name="subscriptionNotes" rows={4} className="mt-2 w-full rounded-xl border bg-[#fbfbf7] p-3 font-normal" placeholder="Tercih ettiğiniz renkler, ortam veya teslimat ayrıntıları..." /></label>
        <p className="sm:col-span-2 rounded-2xl bg-[#f3f2eb] p-4 text-sm leading-6 text-[#657169]">Abonelik talebiniz bize ulaştıktan sonra, aboneliğinizle ilgili detayları görüşmek ve talebinizi kesinleştirmek için 24 saat içerisinde sizinle e-posta veya telefon yoluyla iletişime geçeceğiz.</p>
        <Button type="submit" className="sm:col-span-2 h-12 rounded-full">Abonelik talebi oluştur</Button>
      </form>}
    </section>
  );

  const contentPages: Record<string, { title: string; body: string[] }> = {
  about: {
    title: 'Hakkımızda',
    body: [
      'Doğayı Yaşam Alanlarınıza Taşıyoruz. Plantiva olarak çiçek ve bitkilerin yalnızca bir dekorasyon ürünü olmadığına; yaşam alanlarına güzellik, doğallık ve duygu kattığına inanıyoruz.',
      'Özenle seçtiğimiz çiçek, bitki ve bakım ürünlerini kaliteli, estetik ve güvenilir bir alışveriş deneyimiyle buluşturuyoruz. İster evinizde küçük bir doğa köşesi oluşturun, ister sevdiklerinize anlamlı bir hediye gönderin; her siparişin arkasında özenli bir hazırlık süreci bulunuyor.',
      'Her Çiçekte Bir Hikâye. Doğum günlerinden yıl dönümlerine, nişan ve düğünlerden yeni başlangıçlara kadar hayatın özel anlarına eşlik eden çiçekleri özenle hazırlıyoruz. Farklı zevklere, ortamlara ve bütçelere uygun seçenekler sunuyoruz.',
      'Bitkilerinize Uzun Ömürlü Bir Yaşam. Ürünlere özel bakım bilgileri, sulama önerileri, ideal ışık koşulları ve kullanım tavsiyeleriyle bitkilerinizin daha sağlıklı gelişmesine yardımcı oluyoruz.',
      'Sevdiklerinize Göndermekten Daha Fazlası. Özenli paketleme, not kartları ve hediye seçenekleriyle her siparişin güzel bir deneyime dönüşmesini amaçlıyoruz.',
      'Plantiva, doğadan ilham alan ve yaşam alanlarına güzellik katmayı hedefleyen bir marka olarak her siparişte aynı özeni gösterir. Plantiva — Hayatınıza biraz daha yeşil, biraz daha güzel.',
    ],
  },
  delivery: {
    title: 'Teslimat ve İade',
    body: [
      'Teslimat Süreci: Siparişler seçilen teslimat tarihi, ürünün hazırlanma süresi ve teslimat bölgesinin uygunluğuna göre planlanır. Aynı gün teslimat seçeneği yalnızca hizmet verilen bölgelerde, günlük kapasite elverdiği ölçüde sunulur.',
      'Canlı Ürünler: Çiçek ve bitkiler, taşıma sırasında zarar görmemeleri için ürün türüne uygun koruyucu ambalajla hazırlanır. Mevsim ve stok durumuna bağlı küçük renk veya dal farklılıkları olabilir; ürünün genel görünümü ve değeri korunur.',
      'Teslimat Kontrolü: Alıcıya ulaşılamaması, adresin eksik veya hatalı olması ya da teslimatın kabul edilmemesi durumunda sipariş için yeniden teslimat ücreti doğabilir. Teslimat bilgilerinin siparişten önce kontrol edilmesi gerekir.',
      'Hasarlı veya Eksik Ürün: Ürün hasarlı, eksik ya da siparişten belirgin biçimde farklı ulaştıysa teslimat günü içinde sipariş numarası ve ürünü açıkça gösteren fotoğraflarla destek@plantiva.com adresine bildirim yapılabilir. İnceleme sonucuna göre yeniden gönderim, değişim veya ücret iadesi seçeneklerinden uygun olanı sunulur.',
      'İade Koşulları: Kullanılmamış ve yeniden satışa uygun standart ürünlerde yasal cayma süresi içinde iade talebi oluşturulabilir. Kişiye özel hazırlanan, teslimat tarihi yaklaşmış olan, hızlı bozulan veya niteliği gereği iadesi uygun olmayan canlı çiçek ve bitkilerde yasal istisnalar uygulanabilir.',
      'Ücret İadesi: Onaylanan iadeler, ürünün ve gerekli incelemenin tamamlanmasının ardından siparişte kullanılan ödeme yöntemine gönderilir. Bankanın işlem süresi Plantiva dışındadır.',
    ],
  },
  tracking: {
    title: 'Sipariş Takibi',
    body: [
      'Siparişinizi hesabınızdaki Siparişlerim alanından veya sipariş numaranızla Sipariş Takibi bölümünden görüntüleyebilirsiniz.',
      'Sipariş Alındı: Sipariş bilgileriniz sisteme ulaştı ve ödeme kontrolü sürüyor.',
      'Hazırlanıyor: Ürünleriniz seçiliyor, düzenleniyor ve teslimata uygun şekilde paketleniyor.',
      'Teslimata Hazır: Siparişiniz kurye veya kargo teslimi için hazırlandı.',
      'Yolda: Siparişiniz teslimat görevlisine veya kargo firmasına verildi. Bölge ve yoğunluğa bağlı olarak tahmini teslimat saati değişebilir.',
      'Teslim Edildi: Siparişiniz alıcıya veya teslim almaya yetkili kişiye ulaştı. Teslimatla ilgili bir sorun varsa sipariş numaranızla destek@plantiva.com adresine yazabilirsiniz.',
    ],
  },
  faq: {
    title: 'Sık Sorulan Sorular',
    body: [
      'Aynı gün teslimat var mı? Hizmet verilen şehir ve ilçelerde, sipariş saati ile günlük kapasite uygun olduğunda aynı gün teslimat seçilebilir. Uygun seçenekler ürün ve adres bilgileri girildiğinde görünür.',
      'Görseldeki ürünün aynısı mı gelir? Çiçekler ve bitkiler doğal ürünlerdir. Mevsim, tazelik ve stok durumuna göre küçük renk, boy ve dal farklılıkları olabilir. Tasarımın genel tarzı, renk dengesi ve ürün değeri korunur.',
      'Teslimat saatini seçebilir miyim? Uygun ürün ve bölgelerde teslimat aralığı seçilebilir. Trafik, hava koşulları ve yoğunluk nedeniyle kesin dakika garantisi verilmez.',
      'Sipariş notu ekleyebilir miyim? Uygun ürünlerde ödeme aşamasında ücretsiz not kartı metni ekleyebilirsiniz. Hakaret, tehdit veya kişisel güvenliği tehlikeye atan içerikler kabul edilmez.',
      'Siparişimi değiştirebilir veya iptal edebilir miyim? Hazırlık başlamadan önce destek ekibine ulaşabilirsiniz. Kişiye özel veya canlı ürünlerde hazırlık başladıktan sonra değişiklik ve iptal mümkün olmayabilir.',
      'Bitkim zarar görürse ne yapmalıyım? Ürünün bakım kartındaki ışık, sulama ve ortam önerilerini uygulayın. Teslimat kaynaklı bir sorun varsa teslimat günü içinde fotoğraf ve sipariş numarasıyla bize ulaşın.',
      'Ödeme güvenli mi? Ödeme bilgileri ödeme hizmeti sağlayıcısının güvenli altyapısında işlenir. Plantiva kart şifresi veya kartın güvenlik kodunu saklamaz.',
    ],
  },
  contact: {
    title: 'İletişim, Şikâyet ve Öneri',
    body: [
      'Destek: Sipariş, teslimat, ürün veya hesap işlemleriyle ilgili taleplerinizi destek@plantiva.com adresine iletebilirsiniz.',
      'Bize Yazarken: Daha hızlı inceleme için adınızı, sipariş numaranızı, talebinizin kısa açıklamasını ve gerekiyorsa ürünü gösteren fotoğrafları ekleyin. E-posta içinde kart şifresi, kart güvenlik kodu veya hesap parolası paylaşmayın.',
      'Değerlendirme Süreci: Talepler geliş sırasına göre incelenir. Teslimat günü oluşan hasar ve eksik ürün bildirimlerine öncelik verilir. İnceleme gerektiren durumlarda ek bilgi istenebilir.',
      'Şikâyet ve Öneriler: Deneyiminizi geliştirmemize yardımcı olacak görüşlerinizi aynı e-posta adresine iletebilirsiniz. Her bildirim ilgili süreç ve ürün kayıtlarıyla birlikte değerlendirilir.',
      'Kişisel Veri Başvuruları: Kişisel verilerinize ilişkin başvurularınızı konu alanına “KVKK Başvurusu” yazarak destek@plantiva.com adresine gönderebilirsiniz. Kimlik doğrulaması için yalnızca gerekli bilgiler talep edilir.',
    ],
  },
  privacy: {
    title: 'Gizlilik Politikası',
    body: [
      'Plantiva; üyelik, sipariş, teslimat, ödeme yönlendirmesi, müşteri desteği ve site güvenliği süreçlerinde paylaşılan kişisel verilerin gizliliğini korumayı önemser.',
      'İşlenen Veriler: Ad, soyad, iletişim bilgileri, teslimat ve fatura bilgileri, sipariş geçmişi, destek yazışmaları, tercih ve favori bilgileri ile site kullanımına ilişkin sınırlı teknik kayıtlar işlenebilir. Kart bilgileri Plantiva tarafından saklanmaz; ödeme hizmeti sağlayıcısı üzerinden işlenir.',
      'Kullanım Amaçları: Veriler siparişin alınması ve teslimi, üyelik işlemleri, müşteri desteği, dolandırıcılığın önlenmesi, sistem güvenliği, yasal yükümlülükler ve izin verilmişse kampanya iletişimi amaçlarıyla kullanılır.',
      'Paylaşım: Veriler yalnızca hizmetin gerektirdiği ölçüde kargo ve kurye şirketleri, ödeme hizmeti sağlayıcıları, barındırma ve teknik destek hizmetleri ile yetkili kamu kurumlarıyla paylaşılabilir. Kişisel veriler satılmaz.',
      'Saklama ve Güvenlik: Veriler, işleme amacı ve yasal saklama süreleri boyunca tutulur; ardından silinir, yok edilir veya anonim hâle getirilir. Yetkisiz erişimi önlemek için erişim sınırlandırma, güvenli bağlantı ve kayıt kontrolleri uygulanır.',
      'Tercihleriniz: Pazarlama iletilerinden dilediğiniz zaman ayrılabilir, zorunlu olmayan çerez tercihlerinizi değiştirebilir ve kişisel verilerinize ilişkin taleplerinizi destek@plantiva.com adresine iletebilirsiniz.',
    ],
  },
  kvkk: {
    title: 'KVKK Aydınlatma Metni',
    body: [
      'Veri Sorumlusu: Plantiva, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizi veri sorumlusu sıfatıyla işler. Plantiva gerçek bir ticari işletme olarak faaliyete geçtiğinde ticari unvan, adres ve kayıt bilgilerinin bu alana eklenmesi gerekir.',
      'İşlenen Kişisel Veriler: Kimlik ve iletişim bilgileri, teslimat ve fatura bilgileri, müşteri işlem kayıtları, sipariş ve talep geçmişi, kullanıcı tercihleri, işlem güvenliği kayıtları ve hukuki işlem bilgileri işlenebilir.',
      'İşleme Amaçları: Üyelik ve sipariş süreçlerinin yürütülmesi, ürünlerin hazırlanması ve teslimi, ödeme ve iade işlemleri, müşteri ilişkileri, talep ve şikâyet yönetimi, bilgi güvenliği, muhasebe işlemleri ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla sınırlı ve ölçülü veri işlenir.',
      'Hukuki Sebepler ve Toplama Yöntemi: Veriler; sözleşmenin kurulması veya ifası, hukuki yükümlülük, bir hakkın tesisi veya korunması, meşru menfaat ve gerekli durumlarda açık rıza hukuki sebeplerine dayanarak; site formları, üyelik, sipariş, e-posta ve teknik kayıtlar üzerinden elektronik ortamda toplanır.',
      'Aktarım: Kişisel veriler hizmetin yürütülmesi için gerekli olduğu ölçüde ödeme kuruluşları, kargo ve kurye şirketleri, teknik altyapı sağlayıcıları, mali müşavirler ve hukuken yetkili kamu kurumlarıyla paylaşılabilir.',
      'Haklarınız: KVKK’nın 11. maddesi kapsamında verilerinizin işlenip işlenmediğini öğrenme, bilgi isteme, işlenme amacını öğrenme, aktarıldığı kişileri bilme, eksik veya yanlış verilerin düzeltilmesini isteme, şartları oluştuğunda silme veya yok etme talep etme, otomatik analiz sonucuna itiraz etme ve zararın giderilmesini isteme haklarına sahipsiniz.',
      'Başvuru: Taleplerinizi konu alanına “KVKK Başvurusu” yazarak destek@plantiva.com adresine iletebilirsiniz. Başvurunun size ait olduğunun doğrulanması için gerekli ek bilgiler istenebilir.',
    ],
  },
  cookies: {
    title: 'Çerez Politikası',
    body: [
      'Çerezler, internet sitesinin çalışmasını sağlamak ve tercihlerinizi hatırlamak amacıyla tarayıcınıza kaydedilebilen küçük metin dosyalarıdır.',
      'Zorunlu Çerezler: Sepet, oturum, güvenlik, dil tercihi ve sayfalar arası gezinme gibi açıkça talep ettiğiniz temel işlevleri sağlar. Bu çerezler kapatıldığında sitenin bazı bölümleri çalışmayabilir.',
      'Tercih Çerezleri: Dil, görünüm ve daha önce yaptığınız seçimleri hatırlayarak site deneyimini kolaylaştırır.',
      'Analitik Çerezler: Ziyaretlerin ve sayfa kullanımının toplu olarak anlaşılmasına yardımcı olur. Zorunlu olmayan analitik çerezler, gerekli izin mekanizması bulunmadan etkinleştirilmez.',
      'Pazarlama Çerezleri: İlgi alanına dayalı tanıtım ve kampanya ölçümü amacıyla kullanılabilir. Bu çerezler yalnızca açık tercihinizle çalıştırılır.',
      'Çerez Yönetimi: Zorunlu olmayan çerezler için kabul et, reddet ve tercihleri yönet seçenekleri eşit şekilde sunulmalıdır. Tercihinizi daha sonra çerez ayarlarından veya tarayıcı ayarlarından değiştirebilirsiniz.',
      'Siteye yeni bir analiz veya reklam hizmeti eklendiğinde kullanılan çerezin adı, amacı, süresi ve birinci ya da üçüncü taraf olduğu bilgisi bu politikaya eklenir.',
    ],
  },
  sales: {
    title: 'Mesafeli Satış Sözleşmesi',
    body: [
      'Taraflar: Bu sözleşme, sipariş sırasında bilgileri bulunan alıcı ile Plantiva arasında elektronik ortamda kurulur. Satıcının ticari unvanı, açık adresi, iletişim bilgileri ve varsa MERSİS numarası gerçek satışa başlanmadan önce ödeme ekranında eksiksiz gösterilmelidir.',
      'Sözleşmenin Konusu: Alıcının elektronik ortamda sipariş verdiği ürünlerin temel özellikleri, satış bedeli, ödeme şekli, teslimat bilgileri ve tarafların hak ve yükümlülükleri sipariş özeti ile bu sözleşmenin kapsamını oluşturur.',
      'Sipariş ve Ödeme: Ürünlerin vergiler dâhil toplam bedeli, teslimat ücreti ve ödeme yöntemi sipariş onayından önce gösterilir. Sipariş, ödemenin onaylanması ve sipariş onayının alıcıya iletilmesiyle işleme alınır.',
      'Teslimat: Ürün, siparişte belirtilen alıcıya ve adrese, taahhüt edilen süre içinde teslim edilir. Adres veya alıcı bilgilerinin eksik olması nedeniyle oluşan gecikmelerden satıcı sorumlu tutulamaz. Teslimatın mümkün olmadığı durumda alıcı bilgilendirilir ve mevzuata uygun işlem yapılır.',
      'Cayma Hakkı: Alıcı, yasal istisnalar dışında ürünü teslim aldığı tarihten itibaren on dört gün içinde gerekçe göstermeden cayma hakkını kullanabilir. Bildirimin süre içinde destek@plantiva.com adresine yöneltilmesi gerekir.',
      'Cayma Hakkının İstisnaları: Alıcının isteğine göre kişiselleştirilen ürünler; hızlı bozulabilen veya son kullanma tarihi geçebilecek canlı çiçekler, kesme çiçekler ve gıda ürünleri; tesliminden sonra ambalajı açılması hâlinde sağlık veya hijyen açısından iadesi uygun olmayan ürünler için mevzuattaki istisnalar uygulanabilir.',
      'İade: Cayma hakkının geçerli olduğu ürün, bildirimin ardından mevzuatta belirtilen süre içinde, kullanılmamış ve yeniden satışa uygun şekilde geri gönderilir. İade yöntemi ve varsa anlaşmalı taşıyıcı bilgisi ön bilgilendirme formunda gösterilir.',
      'Uyuşmazlık: Taraflar öncelikle destek kanalı üzerinden çözüm arar. Tüketici, yürürlükteki parasal sınırlar doğrultusunda Tüketici Hakem Heyetine veya Tüketici Mahkemesine başvurabilir.',
    ],
  },
  terms: {
    title: 'Kullanım Koşulları',
    body: [
      'Bu siteyi ziyaret eden veya üyelik oluşturan kullanıcılar, siteyi hukuka ve bu koşullara uygun şekilde kullanmayı kabul eder.',
      'Ürün Bilgileri: Ürün açıklamaları ve görseller mümkün olduğunca doğru hazırlanır. Canlı çiçek ve bitkiler doğal yapıları nedeniyle renk, boyut ve görünüm bakımından küçük farklılıklar gösterebilir.',
      'Hesap Güvenliği: Kullanıcı, hesap bilgilerinin güncel tutulmasından ve parolasının gizliliğinden sorumludur. Yetkisiz kullanım şüphesi oluştuğunda destek@plantiva.com adresine bildirim yapılmalıdır.',
      'Yasaklı Kullanım: Siteye zarar verecek yazılım kullanmak, güvenlik önlemlerini aşmaya çalışmak, başka kişilere ait verileri izinsiz kullanmak, yanıltıcı sipariş oluşturmak ve içerikleri izinsiz çoğaltmak yasaktır.',
      'Fikri Haklar: Plantiva adı, logo, tasarım, metinler, ürün sunumları ve siteye özgü içerikler ilgili hak sahiplerine aittir. Yazılı izin olmadan ticari amaçla kopyalanamaz veya yayımlanamaz.',
      'Hizmet Değişiklikleri: Ürünler, teslimat bölgeleri, fiyatlar ve site özellikleri güncellenebilir. Onaylanmış siparişlerde sipariş anında gösterilen fiyat ve koşullar esas alınır.',
      'Sorumluluk: Planlı bakım, internet kesintisi, üçüncü taraf hizmet arızası veya mücbir sebepler nedeniyle geçici erişim sorunları yaşanabilir. Plantiva, makul güvenlik ve hizmet sürekliliği önlemlerini uygular.',
      'İletişim: Kullanım koşullarıyla ilgili sorularınızı destek@plantiva.com adresine iletebilirsiniz.',
    ],
  },
};

  const contentView = <section className="mx-auto max-w-5xl px-5 py-16"><p className="eyebrow">Plantiva bilgi merkezi</p><h1 className="section-title">{contentPages[contentPage]?.title}</h1>{contentPage === 'about' && <img src="/images/about/marka-hikayesi.png" alt="Plantiva çiçek atölyesi ve mevsim çiçekleri" className="mt-8 h-[420px] w-full rounded-[2rem] object-cover" />}<div className="mt-10 grid gap-8 text-[15px] leading-8 text-[#657169] md:grid-cols-2">{contentPages[contentPage]?.body.map((p, i) => <article key={p} className={contentPage === 'about' ? 'rounded-3xl bg-[#f4f2eb] p-6' : 'md:col-span-2'}>{contentPage === 'about' && i === 2 && <img src="/images/about/yasam-alani-bitkileri.png" alt="Plantiva yaşam alanı bitkileri" className="mb-5 h-52 w-full rounded-2xl object-cover" />}{contentPage === 'about' && i === 4 && <img src="/images/about/cicek-hazirlama-hizmeti.png" alt="Plantiva özenli çiçek hizmeti" className="mb-5 h-52 w-full rounded-2xl object-cover" />}<p>{p}</p></article>)}</div>{contentPage === 'about' && <div className="mt-10 grid gap-4 sm:grid-cols-3">{[['Özen','Her siparişi ürüne uygun hazırlarız.'],['Doğallık','Sağlıklı ve mevsimine uygun ürünleri seçeriz.'],['Güven','Bakım desteğini teslimattan sonra da sürdürürüz.']].map(([a,b]) => <div key={a} className="rounded-2xl bg-[#e9efe6] p-5"><strong className="font-serif text-xl">{a}</strong><p className="mt-2 text-sm text-[#657169]">{b}</p></div>)}</div>}</section>;

  return (
    <main className="min-h-screen overflow-x-clip">
      {header}
      <div
        className={`page-stage ${transitioning ? 'page-leaving' : 'page-visible'}`}
      >
        {view !== 'home' && view !== 'detail' && view !== 'checkout' && (
          <div className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
            <button onClick={goBack} className="flex items-center gap-2 text-sm font-bold text-[#68766e]">
              <ArrowLeft className="size-4" /> Geri dön
            </button>
          </div>
        )}
        {view === 'home' ? (
          home
        ) : view === 'catalog' ? (
          catalog
        ) : view === 'detail' ? (
          <>
            {detail}
            <ProductNote
              product={selected}
              value={notes[selected.id] || ''}
              onChange={(value) =>
                setNotes((n) => ({ ...n, [selected.id]: value }))
              }
            />
          </>
        ) : view === 'favorites' ? (
          favoritesView
        ) : view === 'cart' ? (
          cartView
        ) : view === 'checkout' ? (
          checkout
        ) : view === 'account' ? (
          account
        ) : view === 'subscription' ? (
          subscription
        ) : view === 'content' ? (
          contentView
        ) : (
          success
        )}
      </div>
      <Footer go={go} openCategory={openCategory} openContent={openContent} />
      <button
        type="button"
        aria-label="Sayfanın başına dön"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-4 z-40 grid size-12 place-items-center rounded-full bg-[#315c48] text-white shadow-xl transition-all duration-300 sm:bottom-8 sm:right-8 ${showScrollTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
      >
        <ArrowUp className="size-5" />
      </button>
      {toast && (
        <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#284c3d] px-5 py-3 text-sm font-semibold text-white shadow-2xl">
          <Check className="size-4" />
          {toast}
        </div>
      )}
    </main>
  );
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Sun className="brand-sun" />
      <Leaf className="brand-leaf" />
    </span>
  );
}
function ProductNote({
  product,
  value,
  onChange,
}: {
  product: Product;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <section className="relative mx-auto mt-14 min-h-[430px] max-w-7xl overflow-hidden rounded-[2.25rem] text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=85"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/853800/853800-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-[#18392f]/65" />
      <div className="relative z-10 grid min-h-[430px] items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:px-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#f0cbd1]">
            Kendinize küçük bir hatırlatma
          </p>
          <h2 className="mt-3 max-w-lg font-serif text-4xl leading-tight sm:text-5xl">
            {product.name} için bakım notunuz
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-white/75">
            Sulama gününü, saksı değişimini veya bu çiçeği kime hediye
            edeceğinizi yazın. Notunuz yalnızca bu cihazda saklanır.
          </p>
        </div>
        <div className="rounded-3xl bg-white/92 p-5 text-[#294d3d] shadow-2xl backdrop-blur">
          <label className="text-sm font-bold" htmlFor="plant-note">
            Notunuz
          </label>
          <textarea
            id="plant-note"
            maxLength={500}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={7}
            placeholder="Örn. Her pazar toprağı kontrol et, haziranda saksısını değiştir..."
            className="mt-3 w-full resize-none rounded-2xl border border-[#315c48]/15 bg-[#fbfbf7] p-4 text-sm leading-6 outline-none focus:border-[#315c48]"
          />
          <div className="mt-3 flex items-center justify-between text-xs text-[#6d7871]">
            <span>Otomatik kaydedilir</span>
            <span>{value.length}/500</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderSummary({
  subtotal,
  shipping,
  onCheckout,
}: {
  subtotal: number;
  shipping: number;
  onCheckout?: () => void;
}) {
  return (
    <aside className="sticky top-28 rounded-3xl bg-[#f1f3ed] p-6">
      <h2 className="font-serif text-2xl">Sipariş özeti</h2>
      <div className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Ara toplam</span>
          <strong>{money(subtotal)}</strong>
        </div>
        <div className="flex justify-between">
          <span>Kargo</span>
          <strong>{shipping ? money(shipping) : 'Ücretsiz'}</strong>
        </div>
        {subtotal < 1500 && subtotal > 0 && (
          <p className="rounded-xl bg-white/70 p-3 text-xs leading-5 text-[#647169]">
            Ücretsiz kargo için {money(1500 - subtotal)} daha ekleyin.
          </p>
        )}
        <div className="flex justify-between border-t border-[#315c48]/10 pt-4 text-base">
          <strong>Toplam</strong>
          <strong>{money(subtotal + shipping)}</strong>
        </div>
      </div>
      {onCheckout && (
        <Button
          onClick={onCheckout}
          className="mt-6 h-11 w-full rounded-full"
          disabled={!subtotal}
        >
          Ödemeye geç <ArrowRight />
        </Button>
      )}
      <p className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#748078]">
        <ShieldCheck className="size-3.5" /> Güvenli demo ödeme
      </p>
    </aside>
  );
}
function CheckoutBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[#315c48]/10 bg-white p-5 sm:p-7">
      <h2 className="mb-5 font-serif text-2xl">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}
function Field({
  name,
  label,
  type = 'text',
  placeholder,
  error,
  wide,
  value,
  onChange,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  wide?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}) {
  return (
    <label
      className={`block text-sm font-semibold ${wide ? 'sm:col-span-2' : ''}`}
    >
      {label}
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 h-11 bg-[#fbfbf7]"
      />
      {error && (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      )}
    </label>
  );
}
function Footer({
  go,
  openCategory,
  openContent,
}: {
  go: (v: View) => void;
  openCategory: (c: string) => void;
  openContent: (id: string) => void;
}) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{ type: 'error' | 'success' | 'info'; message: string } | null>(null);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const submitNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = newsletterEmail.trim().toLocaleLowerCase('tr-TR');
    if (!email) {
      setNewsletterStatus({ type: 'error', message: 'Lütfen e-posta adresinizi girin.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setNewsletterStatus({ type: 'error', message: 'Geçerli bir e-posta adresi girin.' });
      return;
    }
    setNewsletterSubmitting(true);
    const saved = JSON.parse(localStorage.getItem('plantiva-newsletter-emails') || '[]') as string[];
    if (saved.includes(email)) {
      setNewsletterStatus({ type: 'info', message: 'Bu e-posta bu tarayıcıda daha önce kaydedilmiş.' });
      setNewsletterSubmitting(false);
      return;
    }
    localStorage.setItem('plantiva-newsletter-emails', JSON.stringify([...saved, email]));
    setNewsletterEmail('');
    setNewsletterStatus({ type: 'success', message: 'E-posta tercihiniz bu tarayıcıda kaydedildi.' });
    setNewsletterSubmitting(false);
  };
  return (
    <footer className="mt-16 bg-[#294d3d] text-[#edf1eb]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <button
            onClick={() => go('home')}
            className="flex items-center gap-2.5 font-serif text-2xl font-bold"
          >
            <BrandMark /> Plantiva
          </button>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
            Her duygunun çiçek açan bir hâli var. Doğadan gelen mutluluğu
            kapınıza getiriyoruz.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Koleksiyonlar</h3>
          <div className="mt-4 space-y-2 text-sm text-white/65">
            <button
              onClick={() => openCategory('Ev Bitkileri')}
              className="block"
            >
              Ev Bitkileri
            </button>
            <button onClick={() => openCategory('Güller')} className="block">
              Güller
            </button>
            <button
              onClick={() => openCategory('Sukulentler')}
              className="block"
            >
              Sukulentler
            </button>
            <button
              onClick={() => openCategory('Hediye Setleri')}
              className="block"
            >
              Hediye Setleri
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Yardım</h3>
          <div className="mt-4 space-y-2 text-sm text-white/65">
            <button onClick={() => openContent('delivery')} className="block">Teslimat & İade</button>
            <button onClick={() => openContent('tracking')} className="block">Sipariş Takibi</button>
            <button onClick={() => openContent('faq')} className="block">Sık Sorulan Sorular</button>
            <button onClick={() => openContent('contact')} className="block">İletişim / Şikâyet / Öneri</button>
            <button onClick={() => openContent('about')} className="block">Hakkımızda</button>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Plantiva notları</h3>
          <p className="mt-4 text-sm leading-6 text-white/65">
            Yeni koleksiyonlardan ve bakım önerilerinden haberdar olun.
          </p>
          <form className="mt-4" onSubmit={submitNewsletter} noValidate>
            <div className="flex">
            <Input
              type="email"
              value={newsletterEmail}
              onChange={(event) => setNewsletterEmail(event.target.value)}
              placeholder="E-posta adresiniz"
              aria-label="E-posta adresiniz"
              aria-describedby="newsletter-status"
              aria-invalid={newsletterStatus?.type === 'error'}
              className="h-10 rounded-r-none border-white/15 bg-white/10 text-white placeholder:text-white/45"
            />
            <Button type="submit" disabled={newsletterSubmitting} className="h-10 rounded-l-none bg-[#c27b87]">{newsletterSubmitting ? 'Kaydediliyor…' : 'Katıl'}</Button>
            </div>
            <p id="newsletter-status" aria-live="polite" className={`mt-2 min-h-5 text-xs ${newsletterStatus?.type === 'error' ? 'text-[#ffc1c8]' : 'text-white/70'}`}>
              {newsletterStatus?.message}
            </p>
          </form>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-5 gap-y-2 border-t border-white/10 px-5 py-5 text-xs text-white/55">
        <button onClick={() => openContent('privacy')}>Gizlilik Politikası</button><button onClick={() => openContent('kvkk')}>KVKK</button><button onClick={() => openContent('cookies')}>Çerez Politikası</button><button onClick={() => openContent('sales')}>Mesafeli Satış Sözleşmesi</button><button onClick={() => openContent('terms')}>Kullanım Koşulları</button><button onClick={() => go('account')}>Üyelik / Hesabım</button><button onClick={() => go('subscription')}>Çiçek Aboneliği</button>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45">
        © 2026 Plantiva. Sevgiyle yetiştirildi.
      </div>
    </footer>
  );
}
