# Plantiva Görsel Ekleme Rehberi

Bu rehberdeki yollar proje ana klasörü olan `/Users/acelyatepe/Desktop/Plantiva` temel alınarak verilmiştir. Dosya adlarında Türkçe karakter, boşluk ve büyük harf kullanmayın.

## Genel kullanım

- Ürün görsellerinin ana klasörü: `/Users/acelyatepe/Desktop/Plantiva/public/images/products/`
- Ana sayfa görsellerinin klasörü: `/Users/acelyatepe/Desktop/Plantiva/public/images/home/`
- Hakkımızda görsellerinin klasörü: `/Users/acelyatepe/Desktop/Plantiva/public/images/about/`
- Site genelindeki marka görsellerinin klasörü: `/Users/acelyatepe/Desktop/Plantiva/public/images/site/`
- Ürün metinleri ve tüm ürün görsel yolları: `/Users/acelyatepe/Desktop/Plantiva/data/products.ts`
- Aynı dosya adını koruyarak yerel görseli değiştirirseniz kod değişikliği gerekmez. Tarayıcı önbelleği nedeniyle eski görsel görünürse sayfayı zorla yenileyin.
- Ürün görselini `public/images/products/` klasörüne ürün adının küçük harfli, Türkçe karaktersiz ve tireli karşılığıyla `.png` olarak ekleyin. Kod değişikliği gerekmez.

## Git geçmişi ve geri yükleme denetimi

- Git commitleri, reflog, erişilebilir eski Git ağaçları ve proje klasörü karşılaştırıldı.
- Geçmişte bulunan 100 benzersiz görsel dosyasının tamamı hâlen projede bulunuyor; Git'ten geri yüklenecek eksik bir görsel tespit edilmedi.
- `public/images/home/hero-cicek-bahcesi.mp4` dosyası proje içinde bulundu ve ana sayfa hero bölümüne yeniden bağlandı. Mevcut dosyanın üzerine yazılmadı.
- Aşağıdaki yerel dosyalar Git geçmişinde veya proje klasöründe bulunamadı. Yeniden üretilmediler ve başka görsellerle tahmini olarak doldurulmadılar:
  - `public/images/home/hero-cicek-bahcesi.webp` — ana sayfa hero poster görseli, önerilen ölçü 1920 × 1080 px.
  - `public/images/home/urun-notu-cicekler.mp4` — ürün notu arka plan videosu, önerilen ölçü 1920 × 1080 px.
  - `public/images/home/urun-notu-cicekler.webp` — ürün notu poster görseli, önerilen ölçü 1600 × 900 px.
- Ürün görsellerinin dosya yolu artık ürün adından otomatik oluşturulur. Aşağıdaki tabloda bütün ürünler için kesin otomatik dosya adı listelenmiştir.

## Ana sayfa ve site genelindeki görseller

### Ana sayfa hareketli çiçek bahçesi

- Bölüm: Ana sayfa hero arka plan videosu
- Klasör: `public/images/home/`
- Kesin dosya adı: `hero-cicek-bahcesi.mp4`
- Önerilen tür: `mp4` (H.264)
- Önerilen ölçü: 1920 × 1080 px (16:9), web için sıkıştırılmış
- Kod değişikliği: Gerekmez; dosya ana sayfa hero bölümüne `/images/home/hero-cicek-bahcesi.mp4` yoluyla bağlıdır.

### Ana sayfa hero yedek görseli

- Bölüm: Video yüklenirken veya oynatılamadığında görünen poster
- Klasör: `public/images/home/`
- Kesin dosya adı: `hero-cicek-bahcesi.webp`
- Önerilen tür: `webp`
- Önerilen ölçü: 1920 × 1080 px (16:9)
- Kod değişikliği: Şu anda uzak görsel adresi kullanılıyor. `app/page.tsx` içindeki hero video `poster` değerini `/images/home/hero-cicek-bahcesi.webp` yapın.

### Ürün notu arka plan videosu

- Bölüm: Ürün detayındaki not yazma alanı
- Klasör: `public/images/home/`
- Kesin dosya adı: `urun-notu-cicekler.mp4`
- Önerilen tür: `mp4` (H.264)
- Önerilen ölçü: 1920 × 1080 px (16:9)
- Kod değişikliği: Şu anda uzak video adresi kullanılıyor. `app/page.tsx` içindeki ProductNote video `src` değerini `/images/home/urun-notu-cicekler.mp4` yapın.

### Ürün notu yedek görseli

- Bölüm: Ürün notu videosunun poster görseli
- Klasör: `public/images/home/`
- Kesin dosya adı: `urun-notu-cicekler.webp`
- Önerilen tür: `webp`
- Önerilen ölçü: 1600 × 900 px (16:9)
- Kod değişikliği: Şu anda uzak görsel adresi kullanılıyor. `app/page.tsx` içindeki ProductNote video `poster` değerini `/images/home/urun-notu-cicekler.webp` yapın.

### Hakkımızda ana marka görseli

- Bölüm: Hakkımızda sayfası üst görseli
- Klasör: `public/images/products/`
- Kesin dosya adı: `bahar-esintisi-buketi.png`
- Önerilen tür: `png` veya aynı ad korunarak `png`
- Önerilen ölçü: 1600 × 900 px (16:9)
- Kod değişikliği: Gerekmez; aynı adla değiştirin.

### Hakkımızda yaşam alanı görseli

- Bölüm: Hakkımızda destekleyici görsel 1
- Klasör: `public/images/products/`
- Kesin dosya adı: `seramikte-monstera.png`
- Önerilen tür: `png`
- Önerilen ölçü: 1200 × 800 px (3:2)
- Kod değişikliği: Gerekmez; aynı adla değiştirin.

### Hakkımızda hizmet görseli

- Bölüm: Hakkımızda destekleyici görsel 2
- Klasör: `public/images/products/`
- Kesin dosya adı: `beyaz-orkide-zarafeti.png`
- Önerilen tür: `png`
- Önerilen ölçü: 1200 × 800 px (3:2)
- Kod değişikliği: Gerekmez; aynı adla değiştirin.

### Sosyal paylaşım görseli

- Bölüm: Mesajlaşma ve sosyal medya bağlantı önizlemesi
- Klasör: `public/`
- Kesin dosya adı: `og.png`
- Önerilen tür: `png`
- Önerilen ölçü: 1200 × 630 px
- Kod değişikliği: Gerekmez; aynı adla değiştirin.

### Site simgesi

- Bölüm: Tarayıcı sekmesi ve yer imi
- Klasör: `public/`
- Kesin dosya adı: `favicon.svg`
- Önerilen tür: `svg`
- Önerilen ölçü: Kare çalışma alanı
- Kod değişikliği: Gerekmez; aynı adla değiştirin.

## Ürün görselleri

Tüm ürün görselleri tek klasörde tutulur: `public/images/products/`. Dosya yolu ürün adından otomatik üretilir; ürün adına uygun `.png` dosyasını bu klasöre eklemek yeterlidir. Aynı ada sahip ürünler aynı görsel dosyasını kullanır.

| ID | Ürün | Kategori | Klasör | Otomatik dosya adı | Tür ve önerilen ölçü | Kod değişikliği |
|---:|---|---|---|---|---|---|
| 1 | Bahar Esintisi Buketi | Mevsim Çiçekleri | `public/images/products/` | `bahar-esintisi-buketi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2 | Seramikte Monstera | Ev Bitkileri | `public/images/products/` | `seramikte-monstera.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 3 | Pudra Gül Kutusu | Güller | `public/images/products/` | `pudra-gul-kutusu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 4 | Minimal Sukulent Trio | Sukulentler | `public/images/products/` | `minimal-sukulent-trio.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 5 | Beyaz Orkide Zarafeti | Ev Bitkileri | `public/images/products/` | `beyaz-orkide-zarafeti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 6 | Aşkın Kırmızı Gülleri | Sevgiliye | `public/images/products/` | `askin-kirmizi-gulleri.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 7 | Gün Işığı Ayçiçekleri | Doğum Günü | `public/images/products/` | `gun-isigi-aycicekleri.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 8 | Lavanta Huzuru Sepeti | Geçmiş Olsun | `public/images/products/` | `lavanta-huzuru-sepeti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 9 | İsteme Çiçeği – İnci | İsteme Çiçekleri | `public/images/products/` | `isteme-cicegi-inci.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 10 | Nedime Pudra Buketi | Nişan & Düğün | `public/images/products/` | `nedime-pudra-buketi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 11 | Anne Bahçesi | Anneler Günü | `public/images/products/` | `anne-bahcesi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 12 | Kahve & Çiçek Hediye Seti | Hediye Setleri | `public/images/products/` | `kahve-cicek-hediye-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 13 | Ficus Lyrata XL | Ev Bitkileri | `public/images/products/` | `ficus-lyrata-xl.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 14 | Terracotta Bakım Seti | Saksı & Bakım | `public/images/products/` | `terracotta-bakim-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 15 | Renkli Lale Kucaklaması | Mevsim Çiçekleri | `public/images/products/` | `renkli-lale-kucaklamasi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 16 | Doğal Papatya Demeti | Özel Günler | `public/images/products/` | `dogal-papatya-demeti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1000 | Seramik saksı | Saksı & Bakım | `public/images/products/` | `seramik-saksi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1001 | Beton saksı | Saksı & Bakım | `public/images/products/` | `beton-saksi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1002 | Plastik saksı | Saksı & Bakım | `public/images/products/` | `plastik-saksi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1003 | Ahşap saksı | Saksı & Bakım | `public/images/products/` | `ahsap-saksi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1004 | Hasır saksı | Saksı & Bakım | `public/images/products/` | `hasir-saksi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1005 | Dekoratif saksı | Saksı & Bakım | `public/images/products/` | `dekoratif-saksi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1006 | Renkli saksı | Saksı & Bakım | `public/images/products/` | `renkli-saksi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1007 | Minimal saksı | Saksı & Bakım | `public/images/products/` | `minimal-saksi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1008 | Ayaklı saksı | Saksı & Bakım | `public/images/products/` | `ayakli-saksi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1009 | Asma saksı | Saksı & Bakım | `public/images/products/` | `asma-saksi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1010 | Kendinden sulamalı saksı | Saksı & Bakım | `public/images/products/` | `kendinden-sulamali-saksi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1011 | Saksı tabağı | Saksı & Bakım | `public/images/products/` | `saksi-tabagi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1012 | Bitki toprağı | Saksı & Bakım | `public/images/products/` | `bitki-topragi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1013 | Saksı toprağı | Saksı & Bakım | `public/images/products/` | `saksi-topragi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1014 | Sıvı bitki besini | Saksı & Bakım | `public/images/products/` | `sivi-bitki-besini.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1015 | Gübre | Saksı & Bakım | `public/images/products/` | `gubre.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1016 | Saksı altlığı | Saksı & Bakım | `public/images/products/` | `saksi-altligi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1017 | Sulama kabı | Saksı & Bakım | `public/images/products/` | `sulama-kabi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1018 | Sprey şişesi | Saksı & Bakım | `public/images/products/` | `sprey-sisesi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1019 | Budama makası | Saksı & Bakım | `public/images/products/` | `budama-makasi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1020 | Bitki destek çubuğu | Saksı & Bakım | `public/images/products/` | `bitki-destek-cubugu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1021 | Yaprak temizleme aparatı | Saksı & Bakım | `public/images/products/` | `yaprak-temizleme-aparati.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1022 | Nem ölçer | Saksı & Bakım | `public/images/products/` | `nem-olcer.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1023 | Toprak ölçer | Saksı & Bakım | `public/images/products/` | `toprak-olcer.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1024 | Saksı değişim seti | Saksı & Bakım | `public/images/products/` | `saksi-degisim-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1025 | Bahçe eldiveni | Saksı & Bakım | `public/images/products/` | `bahce-eldiveni.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1026 | Bitki bakım seti | Saksı & Bakım | `public/images/products/` | `bitki-bakim-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1027 | Orkide saksısı | Saksı & Bakım | `public/images/products/` | `orkide-saksisi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1028 | Orkide toprağı | Saksı & Bakım | `public/images/products/` | `orkide-topragi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1029 | Orkide besini | Saksı & Bakım | `public/images/products/` | `orkide-besini.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1030 | Sukulent saksısı | Saksı & Bakım | `public/images/products/` | `sukulent-saksisi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1031 | Sukulent toprağı | Saksı & Bakım | `public/images/products/` | `sukulent-topragi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1032 | Büyük bitki saksısı | Saksı & Bakım | `public/images/products/` | `buyuk-bitki-saksisi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1100 | Deve tabanı | Ev Bitkileri | `public/images/products/` | `deve-tabani.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1101 | Monstera | Ev Bitkileri | `public/images/products/` | `monstera.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1102 | Benjamin | Ev Bitkileri | `public/images/products/` | `benjamin.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1103 | Kauçuk | Ev Bitkileri | `public/images/products/` | `kaucuk.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1104 | Paşa kılıcı | Ev Bitkileri | `public/images/products/` | `pasa-kilici.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1105 | Salon sarmaşığı | Ev Bitkileri | `public/images/products/` | `salon-sarmasigi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1106 | Barış çiçeği | Ev Bitkileri | `public/images/products/` | `baris-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1107 | Areka palmiyesi | Ev Bitkileri | `public/images/products/` | `areka-palmiyesi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1108 | Yucca | Ev Bitkileri | `public/images/products/` | `yucca.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1109 | Dracaena | Ev Bitkileri | `public/images/products/` | `dracaena.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1110 | Zamia | Ev Bitkileri | `public/images/products/` | `zamia.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1111 | Aloe vera | Ev Bitkileri | `public/images/products/` | `aloe-vera.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1112 | Sukulent | Ev Bitkileri | `public/images/products/` | `sukulent.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1113 | Kaktüs | Ev Bitkileri | `public/images/products/` | `kaktus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1114 | Orkide | Ev Bitkileri | `public/images/products/` | `orkide.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1115 | Afrika menekşesi | Ev Bitkileri | `public/images/products/` | `afrika-meneksesi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1116 | Kalanşo | Ev Bitkileri | `public/images/products/` | `kalanso.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1117 | Antoryum | Ev Bitkileri | `public/images/products/` | `antoryum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1118 | Guzmanya | Ev Bitkileri | `public/images/products/` | `guzmanya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1119 | Şeflera | Ev Bitkileri | `public/images/products/` | `seflera.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1120 | Fittonya | Ev Bitkileri | `public/images/products/` | `fittonya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1121 | Dua çiçeği | Ev Bitkileri | `public/images/products/` | `dua-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1122 | Kalatya | Ev Bitkileri | `public/images/products/` | `kalatya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1123 | Peperomia | Ev Bitkileri | `public/images/products/` | `peperomia.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1124 | Kurdele çiçeği | Ev Bitkileri | `public/images/products/` | `kurdele-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1125 | Begonya | Ev Bitkileri | `public/images/products/` | `begonya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1126 | Sardunya | Ev Bitkileri | `public/images/products/` | `sardunya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1127 | Gardenya | Ev Bitkileri | `public/images/products/` | `gardenya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1128 | Benjamin kauçuğu | Ev Bitkileri | `public/images/products/` | `benjamin-kaucugu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1129 | Bonsai | Ev Bitkileri | `public/images/products/` | `bonsai.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1200 | Aloe vera | Sukulentler | `public/images/products/` | `aloe-vera.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1201 | Echeveria | Sukulentler | `public/images/products/` | `echeveria.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1202 | Haworthia | Sukulentler | `public/images/products/` | `haworthia.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1203 | Gasteria | Sukulentler | `public/images/products/` | `gasteria.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1204 | Crassula | Sukulentler | `public/images/products/` | `crassula.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1205 | Sedum | Sukulentler | `public/images/products/` | `sedum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1206 | Kalanchoe | Sukulentler | `public/images/products/` | `kalanchoe.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1207 | Sempervivum | Sukulentler | `public/images/products/` | `sempervivum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1208 | Graptopetalum | Sukulentler | `public/images/products/` | `graptopetalum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1209 | Graptoveria | Sukulentler | `public/images/products/` | `graptoveria.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1210 | Aeonium | Sukulentler | `public/images/products/` | `aeonium.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1211 | Pachyphytum | Sukulentler | `public/images/products/` | `pachyphytum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1212 | Lithops | Sukulentler | `public/images/products/` | `lithops.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1213 | Senecio | Sukulentler | `public/images/products/` | `senecio.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1214 | Sedeveria | Sukulentler | `public/images/products/` | `sedeveria.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1215 | Cotyledon | Sukulentler | `public/images/products/` | `cotyledon.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1216 | Adromischus | Sukulentler | `public/images/products/` | `adromischus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1217 | Portulacaria | Sukulentler | `public/images/products/` | `portulacaria.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1218 | Dudleya | Sukulentler | `public/images/products/` | `dudleya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1219 | Fenestraria | Sukulentler | `public/images/products/` | `fenestraria.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1220 | Pleiospilos | Sukulentler | `public/images/products/` | `pleiospilos.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1221 | Stapelia | Sukulentler | `public/images/products/` | `stapelia.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1222 | Rhipsalis | Sukulentler | `public/images/products/` | `rhipsalis.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1223 | Euphorbia | Sukulentler | `public/images/products/` | `euphorbia.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1224 | Sedum morganianum | Sukulentler | `public/images/products/` | `sedum-morganianum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1225 | Crassula ovata | Sukulentler | `public/images/products/` | `crassula-ovata.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1226 | Echeveria elegans | Sukulentler | `public/images/products/` | `echeveria-elegans.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1227 | Haworthia attenuata | Sukulentler | `public/images/products/` | `haworthia-attenuata.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1228 | Kalanchoe tomentosa | Sukulentler | `public/images/products/` | `kalanchoe-tomentosa.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1229 | Sempervivum tectorum | Sukulentler | `public/images/products/` | `sempervivum-tectorum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1300 | Kırmızı gül | Güller | `public/images/products/` | `kirmizi-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1301 | Beyaz gül | Güller | `public/images/products/` | `beyaz-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1302 | Sarı gül | Güller | `public/images/products/` | `sari-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1303 | Pembe gül | Güller | `public/images/products/` | `pembe-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1304 | Turuncu gül | Güller | `public/images/products/` | `turuncu-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1305 | Mor gül | Güller | `public/images/products/` | `mor-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1306 | Şampanya gülü | Güller | `public/images/products/` | `sampanya-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1307 | Çay gülü | Güller | `public/images/products/` | `cay-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1308 | Mini gül | Güller | `public/images/products/` | `mini-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1309 | Saksı gülü | Güller | `public/images/products/` | `saksi-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1310 | Tırmanıcı gül | Güller | `public/images/products/` | `tirmanici-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1311 | Sarmaşık gül | Güller | `public/images/products/` | `sarmasik-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1312 | İngiliz gülü | Güller | `public/images/products/` | `ingiliz-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1313 | Hibrit çay gülü | Güller | `public/images/products/` | `hibrit-cay-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1314 | Floribunda gül | Güller | `public/images/products/` | `floribunda-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1315 | Grandiflora gül | Güller | `public/images/products/` | `grandiflora-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1316 | Polyantha gül | Güller | `public/images/products/` | `polyantha-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1317 | Yer örtücü gül | Güller | `public/images/products/` | `yer-ortucu-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1318 | Ağaç gülü | Güller | `public/images/products/` | `agac-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1319 | Kokulu gül | Güller | `public/images/products/` | `kokulu-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1320 | Damask gülü | Güller | `public/images/products/` | `damask-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1321 | Bourbon gülü | Güller | `public/images/products/` | `bourbon-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1322 | Çin gülü | Güller | `public/images/products/` | `cin-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1323 | Yaban gülü | Güller | `public/images/products/` | `yaban-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1324 | Gallica gülü | Güller | `public/images/products/` | `gallica-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1325 | Alba gülü | Güller | `public/images/products/` | `alba-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1326 | Centifolia gülü | Güller | `public/images/products/` | `centifolia-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1327 | Noisette gülü | Güller | `public/images/products/` | `noisette-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1328 | Musk gülü | Güller | `public/images/products/` | `musk-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1329 | Rambling gül | Güller | `public/images/products/` | `rambling-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1400 | İlkbahar · Lale | Mevsim Çiçekleri | `public/images/products/` | `ilkbahar-lale.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1401 | İlkbahar · Sümbül | Mevsim Çiçekleri | `public/images/products/` | `ilkbahar-sumbul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1402 | İlkbahar · Nergis | Mevsim Çiçekleri | `public/images/products/` | `ilkbahar-nergis.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1403 | İlkbahar · Çiğdem | Mevsim Çiçekleri | `public/images/products/` | `ilkbahar-cigdem.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1404 | İlkbahar · Frezya | Mevsim Çiçekleri | `public/images/products/` | `ilkbahar-frezya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1405 | İlkbahar · Hercai menekşe | Mevsim Çiçekleri | `public/images/products/` | `ilkbahar-hercai-menekse.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1406 | İlkbahar · Çuha çiçeği | Mevsim Çiçekleri | `public/images/products/` | `ilkbahar-cuha-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1407 | İlkbahar · Şebboy | Mevsim Çiçekleri | `public/images/products/` | `ilkbahar-sebboy.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1408 | Yaz · Petunya | Mevsim Çiçekleri | `public/images/products/` | `yaz-petunya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1409 | Yaz · Kadife çiçeği | Mevsim Çiçekleri | `public/images/products/` | `yaz-kadife-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1410 | Yaz · Begonya | Mevsim Çiçekleri | `public/images/products/` | `yaz-begonya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1411 | Yaz · Sardunya | Mevsim Çiçekleri | `public/images/products/` | `yaz-sardunya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1412 | Yaz · Gazanya | Mevsim Çiçekleri | `public/images/products/` | `yaz-gazanya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1413 | Yaz · Vinka | Mevsim Çiçekleri | `public/images/products/` | `yaz-vinka.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1414 | Yaz · Zinya | Mevsim Çiçekleri | `public/images/products/` | `yaz-zinya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1415 | Yaz · Kozmos | Mevsim Çiçekleri | `public/images/products/` | `yaz-kozmos.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1416 | Yaz · Aslanağzı | Mevsim Çiçekleri | `public/images/products/` | `yaz-aslanagzi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1417 | Yaz · Mine çiçeği | Mevsim Çiçekleri | `public/images/products/` | `yaz-mine-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1418 | Yaz · Ateş çiçeği | Mevsim Çiçekleri | `public/images/products/` | `yaz-ates-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1419 | Yaz · Karanfil | Mevsim Çiçekleri | `public/images/products/` | `yaz-karanfil.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1420 | Yaz · Lobelya | Mevsim Çiçekleri | `public/images/products/` | `yaz-lobelya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1421 | Yaz · Verbena | Mevsim Çiçekleri | `public/images/products/` | `yaz-verbena.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1422 | Sonbahar · Kasımpatı | Mevsim Çiçekleri | `public/images/products/` | `sonbahar-kasimpati.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1423 | Sonbahar · Aster | Mevsim Çiçekleri | `public/images/products/` | `sonbahar-aster.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1424 | Sonbahar · Siklamen | Mevsim Çiçekleri | `public/images/products/` | `sonbahar-siklamen.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1425 | Sonbahar · Celosia | Mevsim Çiçekleri | `public/images/products/` | `sonbahar-celosia.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1426 | Sonbahar · İpek çiçeği | Mevsim Çiçekleri | `public/images/products/` | `sonbahar-ipek-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1427 | Kış · Siklamen | Mevsim Çiçekleri | `public/images/products/` | `kis-siklamen.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1428 | Kış · Çuha çiçeği | Mevsim Çiçekleri | `public/images/products/` | `kis-cuha-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1429 | Kış · Hercai menekşe | Mevsim Çiçekleri | `public/images/products/` | `kis-hercai-menekse.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1430 | Kış · Kasımpatı | Mevsim Çiçekleri | `public/images/products/` | `kis-kasimpati.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1431 | Kış · Menekşe | Mevsim Çiçekleri | `public/images/products/` | `kis-menekse.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1432 | Kış · Şebboy | Mevsim Çiçekleri | `public/images/products/` | `kis-sebboy.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1500 | Gül | İsteme Çiçekleri | `public/images/products/` | `gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1501 | Beyaz gül | İsteme Çiçekleri | `public/images/products/` | `beyaz-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1502 | Kırmızı gül | İsteme Çiçekleri | `public/images/products/` | `kirmizi-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1503 | Pembe gül | İsteme Çiçekleri | `public/images/products/` | `pembe-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1504 | Şampanya gülü | İsteme Çiçekleri | `public/images/products/` | `sampanya-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1505 | Orkide | İsteme Çiçekleri | `public/images/products/` | `orkide.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1506 | Beyaz orkide | İsteme Çiçekleri | `public/images/products/` | `beyaz-orkide.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1507 | Pembe orkide | İsteme Çiçekleri | `public/images/products/` | `pembe-orkide.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1508 | Lale | İsteme Çiçekleri | `public/images/products/` | `lale.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1509 | Lilyum | İsteme Çiçekleri | `public/images/products/` | `lilyum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1510 | Şakayık | İsteme Çiçekleri | `public/images/products/` | `sakayik.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1511 | Ortanca | İsteme Çiçekleri | `public/images/products/` | `ortanca.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1512 | Frezya | İsteme Çiçekleri | `public/images/products/` | `frezya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1513 | Lisianthus | İsteme Çiçekleri | `public/images/products/` | `lisianthus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1514 | Gerbera | İsteme Çiçekleri | `public/images/products/` | `gerbera.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1515 | Hüsnüyusuf | İsteme Çiçekleri | `public/images/products/` | `husnuyusuf.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1516 | Karanfil | İsteme Çiçekleri | `public/images/products/` | `karanfil.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1517 | Antoryum | İsteme Çiçekleri | `public/images/products/` | `antoryum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1518 | Lavanta | İsteme Çiçekleri | `public/images/products/` | `lavanta.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1519 | Sümbül | İsteme Çiçekleri | `public/images/products/` | `sumbul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1520 | Nergis | İsteme Çiçekleri | `public/images/products/` | `nergis.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1521 | Zambak | İsteme Çiçekleri | `public/images/products/` | `zambak.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1522 | Menekşe | İsteme Çiçekleri | `public/images/products/` | `menekse.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1523 | Kasımpatı | İsteme Çiçekleri | `public/images/products/` | `kasimpati.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1524 | Cipso | İsteme Çiçekleri | `public/images/products/` | `cipso.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1525 | Protea | İsteme Çiçekleri | `public/images/products/` | `protea.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1526 | Ranunkulus | İsteme Çiçekleri | `public/images/products/` | `ranunkulus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1527 | İris | İsteme Çiçekleri | `public/images/products/` | `iris.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1528 | Aster | İsteme Çiçekleri | `public/images/products/` | `aster.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1529 | Şebboy | İsteme Çiçekleri | `public/images/products/` | `sebboy.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1600 | Nişan · Beyaz gül | Nişan & Düğün | `public/images/products/` | `nisan-beyaz-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1601 | Nişan · Pembe gül | Nişan & Düğün | `public/images/products/` | `nisan-pembe-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1602 | Nişan · Şampanya gülü | Nişan & Düğün | `public/images/products/` | `nisan-sampanya-gulu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1603 | Nişan · Şakayık | Nişan & Düğün | `public/images/products/` | `nisan-sakayik.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1604 | Nişan · Ortanca | Nişan & Düğün | `public/images/products/` | `nisan-ortanca.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1605 | Nişan · Lisianthus | Nişan & Düğün | `public/images/products/` | `nisan-lisianthus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1606 | Nişan · Orkide | Nişan & Düğün | `public/images/products/` | `nisan-orkide.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1607 | Nişan · Lilyum | Nişan & Düğün | `public/images/products/` | `nisan-lilyum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1608 | Nişan · Lale | Nişan & Düğün | `public/images/products/` | `nisan-lale.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1609 | Nişan · Frezya | Nişan & Düğün | `public/images/products/` | `nisan-frezya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1610 | Nişan · Ranunkulus | Nişan & Düğün | `public/images/products/` | `nisan-ranunkulus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1611 | Nişan · Gerbera | Nişan & Düğün | `public/images/products/` | `nisan-gerbera.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1612 | Nişan · Karanfil | Nişan & Düğün | `public/images/products/` | `nisan-karanfil.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1613 | Nişan · Cipso | Nişan & Düğün | `public/images/products/` | `nisan-cipso.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1614 | Nişan · Lavanta | Nişan & Düğün | `public/images/products/` | `nisan-lavanta.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1615 | Düğün · Gül | Nişan & Düğün | `public/images/products/` | `dugun-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1616 | Düğün · Şakayık | Nişan & Düğün | `public/images/products/` | `dugun-sakayik.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1617 | Düğün · Ortanca | Nişan & Düğün | `public/images/products/` | `dugun-ortanca.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1618 | Düğün · Orkide | Nişan & Düğün | `public/images/products/` | `dugun-orkide.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1619 | Düğün · Lisianthus | Nişan & Düğün | `public/images/products/` | `dugun-lisianthus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1620 | Düğün · Lilyum | Nişan & Düğün | `public/images/products/` | `dugun-lilyum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1621 | Düğün · Lale | Nişan & Düğün | `public/images/products/` | `dugun-lale.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1622 | Düğün · Frezya | Nişan & Düğün | `public/images/products/` | `dugun-frezya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1623 | Düğün · Protea | Nişan & Düğün | `public/images/products/` | `dugun-protea.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1624 | Düğün · Sterliçya | Nişan & Düğün | `public/images/products/` | `dugun-sterlicya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1625 | Düğün · Delphinium | Nişan & Düğün | `public/images/products/` | `dugun-delphinium.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1626 | Düğün · Okaliptüs | Nişan & Düğün | `public/images/products/` | `dugun-okaliptus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1627 | Düğün · Gypsophila | Nişan & Düğün | `public/images/products/` | `dugun-gypsophila.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1700 | Gül | Doğum Günü | `public/images/products/` | `gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1701 | Papatya | Doğum Günü | `public/images/products/` | `papatya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1702 | Gerbera | Doğum Günü | `public/images/products/` | `gerbera.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1703 | Lale | Doğum Günü | `public/images/products/` | `lale.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1704 | Lilyum | Doğum Günü | `public/images/products/` | `lilyum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1705 | Orkide | Doğum Günü | `public/images/products/` | `orkide.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1706 | Şakayık | Doğum Günü | `public/images/products/` | `sakayik.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1707 | Ortanca | Doğum Günü | `public/images/products/` | `ortanca.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1708 | Frezya | Doğum Günü | `public/images/products/` | `frezya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1709 | Lisianthus | Doğum Günü | `public/images/products/` | `lisianthus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1710 | Karanfil | Doğum Günü | `public/images/products/` | `karanfil.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1711 | Ayçiçeği | Doğum Günü | `public/images/products/` | `aycicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1712 | Lavanta | Doğum Günü | `public/images/products/` | `lavanta.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1713 | Sümbül | Doğum Günü | `public/images/products/` | `sumbul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1714 | Nergis | Doğum Günü | `public/images/products/` | `nergis.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1715 | Menekşe | Doğum Günü | `public/images/products/` | `menekse.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1716 | Antoryum | Doğum Günü | `public/images/products/` | `antoryum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1717 | Begonya | Doğum Günü | `public/images/products/` | `begonya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1718 | Kalanşo | Doğum Günü | `public/images/products/` | `kalanso.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1719 | Zambak | Doğum Günü | `public/images/products/` | `zambak.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1720 | İris | Doğum Günü | `public/images/products/` | `iris.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1721 | Aster | Doğum Günü | `public/images/products/` | `aster.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1722 | Şebboy | Doğum Günü | `public/images/products/` | `sebboy.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1723 | Hüsnüyusuf | Doğum Günü | `public/images/products/` | `husnuyusuf.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1724 | Cipso | Doğum Günü | `public/images/products/` | `cipso.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1725 | Ranunkulus | Doğum Günü | `public/images/products/` | `ranunkulus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1726 | Alstroemeria | Doğum Günü | `public/images/products/` | `alstroemeria.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1727 | Protea | Doğum Günü | `public/images/products/` | `protea.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1728 | Kasımpatı | Doğum Günü | `public/images/products/` | `kasimpati.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1729 | Glayöl | Doğum Günü | `public/images/products/` | `glayol.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1800 | Kırmızı gül | Sevgiliye | `public/images/products/` | `kirmizi-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1801 | Pembe gül | Sevgiliye | `public/images/products/` | `pembe-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1802 | Beyaz gül | Sevgiliye | `public/images/products/` | `beyaz-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1803 | Şakayık | Sevgiliye | `public/images/products/` | `sakayik.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1804 | Lale | Sevgiliye | `public/images/products/` | `lale.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1805 | Orkide | Sevgiliye | `public/images/products/` | `orkide.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1806 | Lilyum | Sevgiliye | `public/images/products/` | `lilyum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1807 | Lisianthus | Sevgiliye | `public/images/products/` | `lisianthus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1808 | Gerbera | Sevgiliye | `public/images/products/` | `gerbera.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1809 | Frezya | Sevgiliye | `public/images/products/` | `frezya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1810 | Lavanta | Sevgiliye | `public/images/products/` | `lavanta.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1811 | Ranunkulus | Sevgiliye | `public/images/products/` | `ranunkulus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1812 | Karanfil | Sevgiliye | `public/images/products/` | `karanfil.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1813 | Antoryum | Sevgiliye | `public/images/products/` | `antoryum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1814 | Zambak | Sevgiliye | `public/images/products/` | `zambak.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1900 | Pembe gül | Anneler Günü | `public/images/products/` | `pembe-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1901 | Beyaz gül | Anneler Günü | `public/images/products/` | `beyaz-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1902 | Orkide | Anneler Günü | `public/images/products/` | `orkide.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1903 | Şakayık | Anneler Günü | `public/images/products/` | `sakayik.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1904 | Ortanca | Anneler Günü | `public/images/products/` | `ortanca.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1905 | Lilyum | Anneler Günü | `public/images/products/` | `lilyum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1906 | Gerbera | Anneler Günü | `public/images/products/` | `gerbera.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1907 | Karanfil | Anneler Günü | `public/images/products/` | `karanfil.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1908 | Papatya | Anneler Günü | `public/images/products/` | `papatya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1909 | Lale | Anneler Günü | `public/images/products/` | `lale.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1910 | Frezya | Anneler Günü | `public/images/products/` | `frezya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1911 | Menekşe | Anneler Günü | `public/images/products/` | `menekse.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1912 | Begonya | Anneler Günü | `public/images/products/` | `begonya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1913 | Kalanşo | Anneler Günü | `public/images/products/` | `kalanso.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 1914 | Lavanta | Anneler Günü | `public/images/products/` | `lavanta.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2000 | Papatya | Geçmiş Olsun | `public/images/products/` | `papatya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2001 | Gerbera | Geçmiş Olsun | `public/images/products/` | `gerbera.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2002 | Orkide | Geçmiş Olsun | `public/images/products/` | `orkide.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2003 | Lilyum | Geçmiş Olsun | `public/images/products/` | `lilyum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2004 | Beyaz gül | Geçmiş Olsun | `public/images/products/` | `beyaz-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2005 | Pembe gül | Geçmiş Olsun | `public/images/products/` | `pembe-gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2006 | Kalanşo | Geçmiş Olsun | `public/images/products/` | `kalanso.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2007 | Begonya | Geçmiş Olsun | `public/images/products/` | `begonya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2008 | Lavanta | Geçmiş Olsun | `public/images/products/` | `lavanta.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2009 | Antoryum | Geçmiş Olsun | `public/images/products/` | `antoryum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2010 | Menekşe | Geçmiş Olsun | `public/images/products/` | `menekse.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2011 | Ortanca | Geçmiş Olsun | `public/images/products/` | `ortanca.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2100 | Sevgililer Günü | Özel Günler | `public/images/products/` | `sevgililer-gunu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2101 | Anneler Günü | Özel Günler | `public/images/products/` | `anneler-gunu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2102 | Babalar Günü | Özel Günler | `public/images/products/` | `babalar-gunu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2103 | Kadınlar Günü | Özel Günler | `public/images/products/` | `kadinlar-gunu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2104 | Öğretmenler Günü | Özel Günler | `public/images/products/` | `ogretmenler-gunu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2105 | Sevgiliye özel gün | Özel Günler | `public/images/products/` | `sevgiliye-ozel-gun.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2106 | Yıl dönümü | Özel Günler | `public/images/products/` | `yil-donumu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2107 | Doğum günü | Özel Günler | `public/images/products/` | `dogum-gunu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2108 | Mezuniyet | Özel Günler | `public/images/products/` | `mezuniyet.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2109 | Terfi | Özel Günler | `public/images/products/` | `terfi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2110 | Yeni iş | Özel Günler | `public/images/products/` | `yeni-is.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2111 | Ev hediyesi | Özel Günler | `public/images/products/` | `ev-hediyesi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2112 | Teşekkür | Özel Günler | `public/images/products/` | `tesekkur.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2113 | Tebrik | Özel Günler | `public/images/products/` | `tebrik.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2114 | Özür | Özel Günler | `public/images/products/` | `ozur.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2115 | Geçmiş olsun | Özel Günler | `public/images/products/` | `gecmis-olsun.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2200 | Çiçek ve çikolata seti | Hediye Setleri | `public/images/products/` | `cicek-ve-cikolata-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2201 | Çiçek ve peluş seti | Hediye Setleri | `public/images/products/` | `cicek-ve-pelus-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2202 | Çiçek ve mum seti | Hediye Setleri | `public/images/products/` | `cicek-ve-mum-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2203 | Çiçek ve parfüm seti | Hediye Setleri | `public/images/products/` | `cicek-ve-parfum-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2204 | Çiçek ve kahve seti | Hediye Setleri | `public/images/products/` | `cicek-ve-kahve-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2205 | Çiçek ve kupa seti | Hediye Setleri | `public/images/products/` | `cicek-ve-kupa-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2206 | Çiçek ve çikolata kutusu | Hediye Setleri | `public/images/products/` | `cicek-ve-cikolata-kutusu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2207 | Çiçek ve meyve sepeti | Hediye Setleri | `public/images/products/` | `cicek-ve-meyve-sepeti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2208 | Saksı bitkisi hediye seti | Hediye Setleri | `public/images/products/` | `saksi-bitkisi-hediye-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2209 | Sukulent seti | Hediye Setleri | `public/images/products/` | `sukulent-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2210 | Teraryum seti | Hediye Setleri | `public/images/products/` | `teraryum-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2211 | Kurutulmuş çiçek seti | Hediye Setleri | `public/images/products/` | `kurutulmus-cicek-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2300 | Begonya | Tüm Çiçekler | `public/images/products/` | `begonya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2301 | Afrika menekşesi | Tüm Çiçekler | `public/images/products/` | `afrika-meneksesi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2302 | Gül | Tüm Çiçekler | `public/images/products/` | `gul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2303 | Sardunya | Tüm Çiçekler | `public/images/products/` | `sardunya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2304 | Petunya | Tüm Çiçekler | `public/images/products/` | `petunya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2305 | Kadife çiçeği | Tüm Çiçekler | `public/images/products/` | `kadife-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2306 | Kalanşo | Tüm Çiçekler | `public/images/products/` | `kalanso.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2307 | Orkide | Tüm Çiçekler | `public/images/products/` | `orkide.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2308 | Antoryum | Tüm Çiçekler | `public/images/products/` | `antoryum.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2309 | Guzmanya | Tüm Çiçekler | `public/images/products/` | `guzmanya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2310 | Barış çiçeği | Tüm Çiçekler | `public/images/products/` | `baris-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2311 | Açelya | Tüm Çiçekler | `public/images/products/` | `acelya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2312 | Siklamen | Tüm Çiçekler | `public/images/products/` | `siklamen.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2313 | Küpe çiçeği | Tüm Çiçekler | `public/images/products/` | `kupe-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2314 | Kamelya | Tüm Çiçekler | `public/images/products/` | `kamelya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2315 | Gardenya | Tüm Çiçekler | `public/images/products/` | `gardenya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2316 | Ortanca | Tüm Çiçekler | `public/images/products/` | `ortanca.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2317 | Yasemin | Tüm Çiçekler | `public/images/products/` | `yasemin.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2318 | Lavanta | Tüm Çiçekler | `public/images/products/` | `lavanta.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2319 | Hibiskus | Tüm Çiçekler | `public/images/products/` | `hibiskus.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2320 | Yılbaşı kaktüsü | Tüm Çiçekler | `public/images/products/` | `yilbasi-kaktusu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2321 | Dikenli taç | Tüm Çiçekler | `public/images/products/` | `dikenli-tac.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2322 | Gazanya | Tüm Çiçekler | `public/images/products/` | `gazanya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2323 | Vinka | Tüm Çiçekler | `public/images/products/` | `vinka.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2324 | Çuha çiçeği | Tüm Çiçekler | `public/images/products/` | `cuha-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2325 | Sümbül | Tüm Çiçekler | `public/images/products/` | `sumbul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2326 | Frezya | Tüm Çiçekler | `public/images/products/` | `frezya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2327 | Hercai menekşe | Tüm Çiçekler | `public/images/products/` | `hercai-menekse.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2328 | Mine çiçeği | Tüm Çiçekler | `public/images/products/` | `mine-cicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2400 | Buğday | Tohumlar | `public/images/products/` | `bugday.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2401 | Arpa | Tohumlar | `public/images/products/` | `arpa.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2402 | Çavdar | Tohumlar | `public/images/products/` | `cavdar.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2403 | Yulaf | Tohumlar | `public/images/products/` | `yulaf.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2404 | Mısır | Tohumlar | `public/images/products/` | `misir.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2405 | Pirinç | Tohumlar | `public/images/products/` | `pirinc.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2406 | Mercimek | Tohumlar | `public/images/products/` | `mercimek.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2407 | Nohut | Tohumlar | `public/images/products/` | `nohut.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2408 | Fasulye | Tohumlar | `public/images/products/` | `fasulye.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2409 | Bezelye | Tohumlar | `public/images/products/` | `bezelye.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2410 | Soya | Tohumlar | `public/images/products/` | `soya.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2411 | Ayçiçeği | Tohumlar | `public/images/products/` | `aycicegi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2412 | Kabak | Tohumlar | `public/images/products/` | `kabak.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2413 | Susam | Tohumlar | `public/images/products/` | `susam.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2414 | Keten | Tohumlar | `public/images/products/` | `keten.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2415 | Haşhaş | Tohumlar | `public/images/products/` | `hashas.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2416 | Kanola | Tohumlar | `public/images/products/` | `kanola.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2417 | Pamuk | Tohumlar | `public/images/products/` | `pamuk.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2418 | Domates | Tohumlar | `public/images/products/` | `domates.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2419 | Biber | Tohumlar | `public/images/products/` | `biber.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2420 | Patlıcan | Tohumlar | `public/images/products/` | `patlican.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2421 | Salatalık | Tohumlar | `public/images/products/` | `salatalik.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2422 | Havuç | Tohumlar | `public/images/products/` | `havuc.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2423 | Turp | Tohumlar | `public/images/products/` | `turp.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2424 | Marul | Tohumlar | `public/images/products/` | `marul.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2425 | Ispanak | Tohumlar | `public/images/products/` | `ispanak.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2426 | Roka | Tohumlar | `public/images/products/` | `roka.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2427 | Maydanoz | Tohumlar | `public/images/products/` | `maydanoz.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2428 | Dereotu | Tohumlar | `public/images/products/` | `dereotu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2429 | Tere | Tohumlar | `public/images/products/` | `tere.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2430 | Pancar | Tohumlar | `public/images/products/` | `pancar.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2431 | Lahana | Tohumlar | `public/images/products/` | `lahana.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2432 | Brokoli | Tohumlar | `public/images/products/` | `brokoli.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2433 | Karnabahar | Tohumlar | `public/images/products/` | `karnabahar.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2434 | Brüksel lahanası | Tohumlar | `public/images/products/` | `bruksel-lahanasi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2435 | Soğan | Tohumlar | `public/images/products/` | `sogan.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2436 | Pırasa | Tohumlar | `public/images/products/` | `pirasa.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2437 | Sarımsak | Tohumlar | `public/images/products/` | `sarimsak.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2438 | Şalgam | Tohumlar | `public/images/products/` | `salgam.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2439 | Yonca | Tohumlar | `public/images/products/` | `yonca.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2440 | Fiğ | Tohumlar | `public/images/products/` | `fig.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2441 | Korunga | Tohumlar | `public/images/products/` | `korunga.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2442 | Çim | Tohumlar | `public/images/products/` | `cim.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2443 | Çörek otu | Tohumlar | `public/images/products/` | `corek-otu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2444 | Hardal | Tohumlar | `public/images/products/` | `hardal.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2445 | Rezene | Tohumlar | `public/images/products/` | `rezene.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2446 | Kimyon | Tohumlar | `public/images/products/` | `kimyon.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2447 | Anason | Tohumlar | `public/images/products/` | `anason.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2448 | Fesleğen | Tohumlar | `public/images/products/` | `feslegen.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2500 | Premium çikolata kutusu | Yenilebilir & Çikolata | `public/images/products/` | `premium-cikolata-kutusu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2501 | Çiçek şeklinde çikolatalar | Yenilebilir & Çikolata | `public/images/products/` | `cicek-seklinde-cikolatalar.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2502 | Gül ve çikolata seti | Yenilebilir & Çikolata | `public/images/products/` | `gul-ve-cikolata-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2503 | Yenilebilir çiçek paketi | Yenilebilir & Çikolata | `public/images/products/` | `yenilebilir-cicek-paketi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2504 | Özel gün çikolataları | Yenilebilir & Çikolata | `public/images/products/` | `ozel-gun-cikolatalari.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2505 | Hediye çikolata seçkisi | Yenilebilir & Çikolata | `public/images/products/` | `hediye-cikolata-seckisi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2600 | Dört mevsim çim tohumu | Bahçe & Çim | `public/images/products/` | `dort-mevsim-cim-tohumu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2601 | Gölge alan çim tohumu | Bahçe & Çim | `public/images/products/` | `golge-alan-cim-tohumu.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2602 | Bahçe tohumu karışımı | Bahçe & Çim | `public/images/products/` | `bahce-tohumu-karisimi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2603 | Bahçe toprağı | Bahçe & Çim | `public/images/products/` | `bahce-topragi.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2604 | Organik gübre | Bahçe & Çim | `public/images/products/` | `organik-gubre.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2605 | Bitki besini | Bahçe & Çim | `public/images/products/` | `bitki-besini.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2606 | Perlit | Bahçe & Çim | `public/images/products/` | `perlit.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2607 | Torf | Bahçe & Çim | `public/images/products/` | `torf.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |
| 2608 | Bahçe bakım seti | Bahçe & Çim | `public/images/products/` | `bahce-bakim-seti.png` | `png` · 1200 × 1500 px (4:5) | Gerekmez; dosya adı ürün adından otomatik oluşturulur. |

