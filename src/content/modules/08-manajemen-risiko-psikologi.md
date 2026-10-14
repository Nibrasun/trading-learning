---
title: "Manajemen Risiko & Psikologi: Position Sizing, RR & Jurnal"
kategori: "Manajemen Risiko"
urutan: 8
estimasi: "2-3 jam"
deskripsi: "Modul paling penting: risiko 1-2% per trade, rasio risk-reward minimal 1:2, rumus position sizing, stop loss yang logis, jurnal trading, dan cara menjinakkan FOMO serta revenge trading."
rumus:
  - nama: "Risiko per trade"
    rumus: "Risiko = 1% × Modal (maks 2%)"
    keterangan: "10 loss beruntun di 1% = modal sisa ~90%. Di 10% = sisa ~35%. Bedanya di sini."
  - nama: "Position sizing"
    rumus: "Lot/Saham = Risiko Rp ÷ (Entry − Stop Loss)"
    keterangan: "Jarak SL menentukan ukuran, bukan feeling. SL lebar = posisi kecil."
  - nama: "Risk-reward ratio"
    rumus: "RR = (Target − Entry) ÷ (Entry − Stop Loss)"
    keterangan: "Syarat minimal 1:2. Di bawah itu, skip — sebagus apa pun polanya."
  - nama: "Winrate impas"
    rumus: "Wajib menang = 1 ÷ (1 + RR)"
    keterangan: "RR 1:2 → cukup menang 33% untuk impas. RR 1:1 → butuh 50%."
  - nama: "Drawdown pulih"
    rumus: "Naik perlu = Drawdown ÷ (1 − Drawdown)"
    keterangan: "Rugi 50% butuh naik 100% untuk pulih. Itulah kenapa rugi besar dilarang."
sumber:
  - jenis: video
    judul: "Position Sizing: Never Blow Up Again"
    channel: "Rayner Teo"
    catatan: "Rumus ukuran posisi dengan contoh angka nyata."
  - jenis: video
    judul: "Risk-Reward Explained for Beginners"
    channel: "The Trading Channel"
    catatan: "Kenapa RR lebih penting dari winrate."
  - jenis: buku
    judul: "Trading in the Zone"
    pengarang: "Mark Douglas"
    catatan: "Psikologi: berpikir probabilitas dan menerima risiko."
soal:
  - soal: "Modal Rp10 juta, risiko 1% per trade, entry 1.000, SL 950. Berapa saham boleh dibeli?"
    opsi:
      - "10.000 saham (semua modal)"
      - "2.000 saham (100.000 ÷ 50)"
      - "100 saham asal kecil"
      - "Sebanyaknya sampai margin habis"
    jawaban: 1
    pembahasan: "Risiko = 1% × 10 jt = 100 rb. Jarak SL = 50. 100.000 ÷ 50 = 2.000 saham. Kena SL = rugi tepat 1%."
  - soal: "Setup RR 1:1 dengan winrate 40%. Dalam jangka panjang akun akan:"
    opsi:
      - "Tumbuh pesat"
      - "Menyusut — ekspektasi negatif (40 menang 1R vs 60 kalah 1R)"
      - "Impas persis"
      - "Tidak bisa dihitung"
    jawaban: 1
    pembahasan: "Ekspektasi = 0,4×1 − 0,6×1 = −0,2R per trade. Pola sebagus apa pun kalah oleh matematika ini."
  - soal: "Setelah 3 loss beruntun, dorongan melipatgandakan lot agar 'balik modal' disebut:"
    opsi:
      - "Position sizing"
      - "Revenge trading — dilarang; risiko tetap 1-2% apa pun emosi"
      - "Strategi martingale yang aman"
      - "Confluence"
    jawaban: 1
    pembahasan: "Balas dendam ke pasar = jalan tercepat ke margin call. Aturan lot tidak berubah karena emosi."
  - soal: "Fungsi utama jurnal trading adalah:"
    opsi:
      - "Pamer profit ke media sosial"
      - "Mencatat alasan, emosi, dan hasil tiap trade untuk direview — satu-satunya cara naik kelas"
      - "Menggantikan stop loss"
      - "Syarat setor pajak"
    jawaban: 1
    pembahasan: "Tanpa catatan, kesalahan terulang tanpa disadari. Review mingguan 15 menit mengalahkan 5 jam screen-time tanpa arah."
studi_kasus:
  judul: "Akun Rp50 juta, setup morning star grade A"
  cerita: "Setup morning star + support + D1 (confluence triple, modul 1-5) muncul di saham fiktif. Entry 5.000, SL 4.800 (di bawah low pola), target 5.600 (resistance). Modal Rp50 juta, kas tersedia penuh. Tentukan risiko, ukuran posisi, dan vonis trade."
  diketahui:
    - "Entry 5.000, SL 4.800 → risiko 200/lembar"
    - "Target 5.600 → reward 600/lembar"
    - "RR = 600/200 = 1:3"
  ditanya: "Berapa lot, berapa rugi/untungnya, dan layakkah trade ini?"
analisis:
  ringkasan: "Setup grade A + RR 1:3 = trade yang layak. Matematikanya sederhana dan melindungi akun dari skenario terburuk."
  langkah:
    - "Risiko = 1% × 50 jt = Rp500 ribu."
    - "Ukuran = 500.000 ÷ 200 = 2.500 saham."
    - "Kena SL: rugi 500 rb (1%). Kena target: untung 1,5 jt (3%)."
    - "Vonis: layak. Bahkan menang 1 dari 3 trade serupa pun masih impas-plus."
solving:
  pengantar: "Trader profesional tidak menebak arah — mereka membeli ekspektasi positif dengan risiko kecil."
  langkah:
    - "Risiko ditetapkan dulu: 1% × Rp50 juta = Rp500.000."
    - "Ukuran posisi = 500.000 ÷ (5.000 − 4.800) = 2.500 saham (nilai ±Rp12,5 jt, bukan seluruh modal)."
    - "Skenario buruk: SL tersentuh → −Rp500 ribu (−1%). Akun selamat untuk 99 trade berikutnya."
    - "Skenario baik: target → +Rp1,5 juta (+3%). Satu menang menutup tiga kalah."
    - "Jurnal: catat alasan (morning star + support + D1), emosi saat entry, dan hasil. Review akhir pekan."
  hasil: "Beli 2.500 saham. Risiko Rp500 rb (1%), potensi +Rp1,5 jt (RR 1:3). Trade layak."
---

## Kebenaran yang tidak enak didengar

Trader dengan strategi 50% winrate tapi disiplin risiko **kaya perlahan**. Trader dengan strategi 80% winrate tapi tanpa stop loss **bangkrut sekali**. Modul ini — bukan pola apa pun — yang menentukan Anda jadi yang mana.

## Aturan 1-2%: sabuk pengaman

Risiko **1% modal per trade** (maksimal 2%):

- 10 loss beruntun di 1% → modal sisa ±90%. Masih hidup, masih bisa trading.
- 10 loss beruntun di 10% → modal sisa ±35%. Secara psikologis hampir pasti hancur.
- Persentase dihitung dari **modal berjalan**, bukan modal awal — otomatis mengecil saat drawdown (rem otomatis).

## Position sizing: matematika sebelum keberanian

```text
Ukuran posisi = Risiko rupiah ÷ Jarak entry ke stop loss
```

SL jauh = posisi kecil. SL rapat = posisi boleh besar. Yang tetap: **rupiah risikonya**. Contoh modul ini (2.500 saham dari modal 50 juta) menunjukkan posisi ideal sering *jauh lebih kecil* dari yang dikira pemula.

## RR minimal 1:2: filter segala setup

Sebelum entry, hitung:

```text
RR = (Target − Entry) ÷ (Entry − Stop loss)
```

- RR ≥ 1:2 → boleh dipertimbangkan (dengan confluence).
- RR < 1:2 → **skip**, sebagus apa pun polanya. Melewatkan trade buruk = profit.
- Winrate impas RR 1:2 hanya 33% — Anda boleh salah 2 dari 3 kali dan tetap hidup.

Stop loss dipasang di level **logis** (bawah support/low pola + buffer), bukan angka bulat asal. SL yang benar + ukuran posisi yang benar = satu paket.

## Psikologi: tiga monster

1. **FOMO** (takut ketinggalan): entry di puncak karena orang lain profit. Obat: checklist tertulis — tanpa checklist lengkap, tanpa entry.
2. **Revenge trading:** melipatgandakan lot setelah loss. Obat: aturan *circuit breaker* — 2 loss beruntun = tutup laptop 1 jam; 3 = stop hari ini.
3. **Overtrading:** entry karena bosan. Obat: batasi maksimal 2-3 trade per hari dan catat alasan tiap entry di jurnal.

## Jurnal: cermin yang jujur

Format minimal per trade: tanggal, setup & alasan, screenshot chart, emosi (1-10), hasil + R (kelipatan risiko). Review mingguan 15 menit dengan satu pertanyaan: *kesalahan mana yang paling sering berulang?* Perbaiki satu itu saja bulan ini.

> Pasar tidak peduli Anda benar atau salah — ia hanya membayar mereka yang risikonya kecil saat salah dan posisinya cukup saat benar. Delapan modul selesai; sekarang buktikan di akun demo.
