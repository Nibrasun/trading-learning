---
title: "Pola Single Candle: Doji, Hammer, Shooting Star & Marubozu"
kategori: "Price Action"
urutan: 2
estimasi: "2-3 jam"
deskripsi: "Tujuh pola satu candle yang paling sering muncul: doji, hammer, hanging man, inverted hammer, shooting star, spinning top, dan marubozu — lengkap dengan kriteria valid dan kebutuhan konfirmasinya."
rumus:
  - nama: "Kriteria hammer"
    rumus: "Lower shadow ≥ 2 × Body, upper shadow kecil, muncul setelah turun"
    keterangan: "Tanpa tren turun sebelumnya, hammer hanyalah candle biasa."
  - nama: "Kriteria doji"
    rumus: "Body ≤ 10% × Range"
    keterangan: "Open nyaris sama dengan close. Makin kecil body, makin murni keraguannya."
  - nama: "Kriteria shooting star"
    rumus: "Upper shadow ≥ 2 × Body, muncul setelah naik"
    keterangan: "Kebalikan hammer. Rejection dari atas di puncak rally."
  - nama: "Aturan konfirmasi"
    rumus: "Entry hanya setelah candle berikutnya searah sinyal"
    keterangan: "Hammer + candle hijau = valid. Hammer + candle merah = abaikan."
sumber:
  - jenis: video
    judul: "7 Powerful Single Candlestick Patterns"
    channel: "The Trading Channel"
    catatan: "Visual tiap pola single candle dengan contoh chart nyata."
  - jenis: video
    judul: "Doji Candles: The Only Guide You Need"
    channel: "Rayner Teo"
    catatan: "Kapan doji penting dan kapan doji hanya noise."
  - jenis: buku
    judul: "Japanese Candlestick Charting Techniques"
    pengarang: "Steve Nison"
    catatan: "Bab 4-6: doji, hammer, dan bintang jatuh menurut sumber aslinya."
soal:
  - soal: "Candle dengan body kecil di atas, lower shadow 3× body, muncul setelah tren turun. Pola apa ini?"
    opsi:
      - "Shooting star"
      - "Hammer — potensi reversal naik"
      - "Marubozu"
      - "Doji biasa"
    jawaban: 1
    pembahasan: "Kaki panjang di bawah setelah penurunan = hammer. Buyer menolak harga rendah."
  - soal: "Hammer muncul, tapi candle berikutnya merah besar menutup di bawah low hammer. Tindakan benar?"
    opsi:
      - "Tetap buy, hammer tidak pernah salah"
      - "Batalkan sinyal — konfirmasi gagal, buyer kalah"
      - "Tambah posisi dua kali lipat"
      - "Ganti timeframe sampai terlihat bagus"
    jawaban: 1
    pembahasan: "Pola single candle wajib konfirmasi. Candle merah berikutnya berarti seller mengambil alih lagi."
  - soal: "Perbedaan hammer dan hanging man terletak pada:"
    opsi:
      - "Bentuknya — hanging man tidak punya shadow"
      - "Konteks tren: hammer setelah turun, hanging man setelah naik"
      - "Warnanya — hanging man selalu merah"
      - "Tidak ada bedanya sama sekali"
    jawaban: 1
    pembahasan: "Bentuknya identik. Hammer di lembah = sinyal naik; hanging man di puncak = peringatan turun."
  - soal: "Bullish marubozu (full body hijau tanpa shadow) menunjukkan:"
    opsi:
      - "Keraguan pasar, tunggu dulu"
      - "Buyer menguasai penuh dari open sampai close"
      - "Harga pasti turun besok"
      - "Volume pasti nol"
    jawaban: 1
    pembahasan: "Tanpa shadow = tidak ada rejection sama sekali. Satu pihak menang telak satu periode."
studi_kasus:
  judul: "Hammer di support fiktif ADRO-like"
  cerita: "Saham fiktif tambang BARA turun 5 hari beruntun ke zona support 2.000 yang sudah memantul dua kali. Hari ini muncul candle: Open 2.010, High 2.030, Low 1.940, Close 2.025. Grup chat heboh menyebut hammer dan ajak buy sekarang juga."
  diketahui:
    - "Tren sebelumnya: turun 5 hari ke support kuat 2.000"
    - "Body = 15, lower shadow = 70, upper = 5"
    - "Lower shadow ≈ 4,6× body"
  ditanya: "Apakah ini hammer valid? Boleh entry sekarang atau tunggu apa?"
analisis:
  ringkasan: "Strukturnya hammer sempurna plus bonus confluence support. Tapi aturan main tetap: tunggu konfirmasi candle berikutnya sebelum entry."
  langkah:
    - "Cek konteks: setelah turun + di support yang dua kali memantul. Syarat konteks lolos."
    - "Cek struktur: body kecil di atas, lower 4,6× body, upper mungil. Struktur lolos."
    - "Cek status: ini baru sinyal, belum konfirmasi. Entry sekarang = mendahului pasar."
    - "Rencana: buy hanya jika besok candle hijau tutup di atas 2.030, stop loss di bawah 1.940."
solving:
  pengantar: "Hammer yang bagus tetap butuh restu candle berikutnya."
  langkah:
    - "Body = |2.025 − 2.010| = 15. Lower = 2.010 − 1.940 = 70. Rasio 4,6×. Valid sebagai hammer."
    - "Konteks: downtrend + support teruji dua kali = lokasi premium untuk hammer."
    - "Keputusan: belum entry hari ini. Pasang alert di 2.030."
    - "Jika besok hijau tutup di atas 2.030 → entry, stop loss di bawah 1.935, target resistance terdekat."
    - "Jika besok merah jebol 1.940 → sinyal batal, support mungkin jebol."
  hasil: "Hammer valid tapi belum terkonfirmasi. Entry bersyarat: hijau di atas 2.030, SL di bawah 1.935."
---

## Satu candle, tujuh wajah

Pola single candle adalah pola tercepat dibaca — tapi juga paling berisik. Prinsip modul ini: **bentuk tanpa konteks = noise**. Setiap pola di bawah wajib ditanya dulu: *muncul setelah tren apa, di level apa?*

## Kelompok 1: keraguan (doji & spinning top)

- **Doji:** body ≤ 10% range. Open ≈ close. Pasar bimbang total.
- **Spinning top:** body kecil tapi masih terlihat, shadow atas-bawah seimbang. Bimbang versi ringan.
- Keduanya baru bermakna di **ujung tren** atau **level penting**. Doji di tengah sideways = noise, abaikan.

Varian doji: *dragonfly* (kaki bawah panjang, bias naik), *gravestone* (sumbu atas panjang, bias turun), *long-legged* (kaki dua sisi ekstrem, volatilitas meledak).

## Kelompok 2: rejection dari bawah (hammer family)

| Pola | Konteks | Arti |
|---|---|---|
| Hammer | Setelah turun | Buyer menolak harga murah → potensi naik |
| Inverted hammer | Setelah turun | Buyer mencoba naik tapi belum menang → butuh konfirmasi lebih kuat |
| Hanging man | Setelah naik | Bentuk sama dengan hammer tapi di puncak → peringatan turun |

Kriteria hammer: lower shadow ≥ 2× body, body di papan atas, upper shadow kecil.

## Kelompok 3: rejection dari atas (shooting star)

Body kecil di bawah + upper shadow ≥ 2× body **setelah kenaikan**. Seller menekan dari atas. Makin panjang sumbunya dan makin besar volume, makin serius peringatannya.

## Kelompok 4: dominasi penuh (marubozu)

Full body tanpa shadow berarti satu pihak menang telak:

- **Bullish marubozu:** sering menjadi pembuka rally; entry retracement-nya lebih aman daripada kejar.
- **Bearish marubozu:** tekanan jual merata; jangan coba-coba menangkap pisau jatuh.

## Aturan konfirmasi (wajib)

1. Hammer/inverted butuh **candle hijau** berikutnya. Tanpa itu, cuma candle berkaki.
2. Shooting star/hanging man butuh **candle merah** berikutnya.
3. Doji butuh candle berikutnya yang menunjukkan arah pemenang.
4. Konfirmasi ideal: close menembus ekstrem pola (di atas high hammer, di bawah low shooting star).

> Pola single candle = alarm, bukan vonis. Alarm yang bagus tetap dicek sebelum bertindak.
