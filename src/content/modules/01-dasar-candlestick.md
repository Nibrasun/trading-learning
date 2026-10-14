---
title: "Dasar Candlestick: OHLC, Body, Shadow & Timeframe"
kategori: "Dasar"
urutan: 1
estimasi: "2-3 jam"
deskripsi: "Fondasi semua analisis teknikal. Pelajari empat harga pembentuk candle (OHLC), cara membaca body dan shadow, warna bullish-bearish, dan kenapa timeframe menentukan bobot sinyal."
rumus:
  - nama: "Body candle"
    rumus: "Body = |Close − Open|"
    keterangan: "Panjang badan. Makin panjang, makin kuat tekanan satu arah dalam periode itu."
  - nama: "Range candle"
    rumus: "Range = High − Low"
    keterangan: "Total jarak tempuh harga. Volatilitas satu periode."
  - nama: "Upper shadow"
    rumus: "Upper = High − max(Open, Close)"
    keterangan: "Sumbu atas. Panjang = harga sempat naik tinggi tapi ditolak turun."
  - nama: "Lower shadow"
    rumus: "Lower = min(Open, Close) − Low"
    keterangan: "Sumbu bawah. Panjang = harga sempat jatuh tapi dibeli naik (rejection)."
  - nama: "Dominasi body"
    rumus: "Body% = Body ÷ Range × 100%"
    keterangan: "Body% di atas 70% = candle tegas. Di bawah 30% = ragu-ragu (keluarga doji)."
sumber:
  - jenis: video
    judul: "Candlestick Charting for Beginners"
    channel: "The Trading Channel"
    catatan: "Anatomi candle dan cara baca cepat untuk pemula total."
  - jenis: video
    judul: "Timeframes Explained: Which One to Trade"
    channel: "Rayner Teo"
    catatan: "Kenapa sinyal D1 lebih berbobot dari M5, dan cara menyelaraskannya."
  - jenis: buku
    judul: "Japanese Candlestick Charting Techniques"
    pengarang: "Steve Nison"
    catatan: "Kitab aslinya pola candle. Bab 1-3 untuk fondasi."
soal:
  - soal: "Sebuah candle punya Open 100, High 112, Low 96, Close 108. Berapa body dan lower shadow-nya?"
    opsi:
      - "Body 8, lower shadow 4"
      - "Body 12, lower shadow 12"
      - "Body 8, lower shadow 12"
      - "Body 4, lower shadow 8"
    jawaban: 0
    pembahasan: "Body = |108 − 100| = 8. Lower = min(100,108) − 96 = 100 − 96 = 4."
  - soal: "Candle hijau (bullish) artinya:"
    opsi:
      - "Close di atas Open — buyer menang dalam periode itu"
      - "High lebih tinggi dari periode sebelumnya"
      - "Volume pasti besar"
      - "Harga akan terus naik besok"
    jawaban: 0
    pembahasan: "Warna hanya membandingkan close vs open satu periode. Tidak menjamin volume atau esok hari."
  - soal: "Upper shadow yang sangat panjang pada candle setelah rally panjang menandakan:"
    opsi:
      - "Buyer makin kuat, bersiap tambah posisi"
      - "Harga sempat didorong naik tapi seller menolaknya turun — waspada"
      - "Tidak ada artinya sama sekali"
      - "Broker sedang gangguan"
    jawaban: 1
    pembahasan: "Shadow panjang = rejection. Di puncak rally, upper shadow panjang adalah jejak seller mulai masuk."
  - soal: "Kenapa sinyal pola di timeframe D1 lebih dipercaya daripada di M1?"
    opsi:
      - "Karena chart D1 lebih indah dilihat"
      - "Karena satu candle D1 merangkum lebih banyak transaksi dan emosi pasar"
      - "Karena trader M1 tidak pernah profit"
      - "Karena D1 tidak punya noise sama sekali"
    jawaban: 1
    pembahasan: "Makin panjang periode, makin banyak partisipan dan uang yang tercermin — noise acak ikut teredam."
studi_kasus:
  judul: "Membaca satu candle saham fiktif PT Maju Jaya"
  cerita: "Anda membuka chart harian saham fiktif PT Maju Jaya (kode MJJ). Candle kemarin: Open 1.000, High 1.080, Low 990, Close 1.010. Teman Anda bersorak karena harga sempat menyentuh 1.080 (+8%). Anda diminta menilai: benarkah kemarin hari yang kuat untuk buyer?"
  diketahui:
    - "Open 1.000, High 1.080, Low 990, Close 1.010"
    - "Body = 10 poin, upper shadow = 70 poin, lower shadow = 10 poin"
    - "Body% = 10 / 90 = 11%"
  ditanya: "Apakah candle ini bullish yang kuat, atau justru peringatan? Apa keputusannya?"
analisis:
  ringkasan: "Ini candle hijau secara teknis (close di atas open) tapi strukturnya lemah: body mungil dengan upper shadow raksasa. Pasar menolak kenaikan — klasik mini-shooting-star."
  langkah:
    - "Hitung body: |1.010 − 1.000| = 10. Kecil."
    - "Hitung upper shadow: 1.080 − 1.010 = 70. Tujuh kali body."
    - "Body% = 10 / (1.080 − 990) = 11%. Di bawah 30%: keluarga doji/ragu."
    - "Konteks: harga sempat +8% lalu ditutup nyaris datar. Buyer gagal mempertahankan."
    - "Kesimpulan: bukan kekuatan, melainkan rejection. Jangan ikut bersorak."
solving:
  pengantar: "Ukur dulu, simpulkan kemudian. Angka tidak bisa dibohongi sorak-sorai."
  langkah:
    - "Body = |Close − Open| = |1.010 − 1.000| = 10 poin."
    - "Upper shadow = High − max(Open, Close) = 1.080 − 1.010 = 70 poin."
    - "Range = 1.080 − 990 = 90. Body% = 11% → candle ragu, bukan candle kuat."
    - "Upper shadow 7× body setelah kenaikan intraday = seller menekan turun."
    - "Keputusan: jangan beli karena euforia; tandai 1.080 sebagai resistance awal dan tunggu konfirmasi candle berikutnya."
  hasil: "Candle lemah ber-upper-shadow panjang (rejection). Keputusan: tidak entry, tandai resistance 1.080."
---

## Kenapa satu kotak kecil bisa bercerita banyak

Setiap candlestick adalah **ringkasan pertarungan buyer vs seller** dalam satu periode. Satu candle harian (D1) merangkum ribuan transaksi, kabar, dan emosi — dari euforia pembukaan sampai keputusan penutupan. Pola-pola di modul berikutnya semuanya dibangun dari kemampuan membaca satu candle ini dengan jujur.

## Anatomi: OHLC

Satu candle dibentuk empat harga:

| Istilah | Arti | Letak di candle |
|---|---|---|
| Open | Harga pertama periode | Ujung body (bawah bila hijau, atas bila merah) |
| High | Harga tertinggi periode | Ujung upper shadow |
| Low | Harga terendah periode | Ujung lower shadow |
| Close | Harga terakhir periode | Ujung body (atas bila hijau, bawah bila merah) |

Aturan warna yang dipakai web ini (dan simulatornya):

- **Hijau (bullish):** Close ≥ Open. Buyer memenangkan periode itu.
- **Merah (bearish):** Close < Open. Seller memenangkan periode itu.

> **Catatan praktis:** warna hanya membandingkan open vs close *periode itu*. Candle hijau tetap bisa muncul di tengah tren turun besar — jangan baca satu candle tanpa konteks tren (modul 5).

## Body vs shadow: siapa menguasai periode

- **Body panjang, shadow pendek (marubozu-like):** satu pihak dominan penuh. Keyakinan tinggi.
- **Body kecil, shadow panjang dua sisi (spinning top/doji):** tarik-menarik, tidak ada pemenang. Keraguan.
- **Satu shadow dominan:** rejection dari sisi itu. Lower shadow panjang = buyer menolak harga murah (tanda awal kekuatan). Upper shadow panjang = seller menolak harga mahal (tanda awal kelemahan).

Rasio cepatnya: `Body% = Body ÷ Range`. Di atas 70% = tegas, di bawah 30% = ragu-ragu.

## Timeframe: bobot sebuah sinyal

Timeframe adalah durasi satu candle: M15 (15 menit), H1, H4, D1, W1. Tiga prinsipnya:

1. **Makin besar timeframe, makin berbobot sinyalnya.** Pola hammer di D1 melibatkan uang dan partisipan jauh lebih banyak daripada hammer di M1.
2. **Tren besar memerintah tren kecil.** Sinyal buy di M15 yang melawan arah D1 turun ibarat berenang melawan arus — bisa, tapi melelahkan dan sering gagal.
3. **Pakai minimal dua timeframe:** satu untuk arah (misal D1/H4), satu untuk timing entry (misal H1/M15). Ini fondasi *confluence* di modul 5.

## Kesalahan pemula di modul ini

1. Menghafal nama pola sebelum paham OHLC — seperti menghafal puisi tanpa tahu alfabet.
2. Membaca satu candle tanpa melihat tren di kirinya.
3. Gonta-ganti timeframe sampai menemukan sinyal yang "disuka" (timeframe shopping).
4. Mengira candle hijau = pasti lanjut naik besok.

Kuasai pengukuran body/shadow sampai otomatis — modul 2 akan terasa mudah.
