---
title: "Support-Resistance, Trendline & Confluence Timeframe"
kategori: "Level & Konteks"
urutan: 5
estimasi: "2-3 jam"
deskripsi: "Peta medan sebelum berperang: cara menarik support-resistance dan trendline yang tidak asal, anatomi breakout-retest, dan menyelaraskan timeframe kecil dengan besar (confluence)."
rumus:
  - nama: "Skor level"
    rumus: "Skor = sentuhan + usia + volume + timeframe"
    keterangan: "Level yang 3× disentuh, berumur bulanan, bervolume, di D1 = benteng. Sekali sentuh di M5 = pagar bambu."
  - nama: "Konfirmasi breakout"
    rumus: "Close body di luar level + (volume naik | retest memantul)"
    keterangan: "Shadow lewat = belum jebol. Yang menjebol adalah body yang tutup di luar."
  - nama: "Aturan flip"
    rumus: "Support jebol → resistance baru; resistance jebol → support baru"
    keterangan: "Bekas benteng yang runtuh jadi markas lawan. Entry terbaik sering di retest-nya."
  - nama: "Confluence minimal"
    rumus: "Entry butuh ≥ 2 alasan independen di satu zona"
    keterangan: "Contoh: support D1 + hammer H1. Satu alasan = tebak-tebakan."
sumber:
  - jenis: video
    judul: "Support and Resistance: The Only Video You Need"
    channel: "Rayner Teo"
    catatan: "Zona vs garis, dan cara marking yang benar."
  - jenis: video
    judul: "Multi Timeframe Analysis Made Simple"
    channel: "The Trading Channel"
    catatan: "Menyelaraskan D1-H1-M15 tanpa pusing."
  - jenis: buku
    judul: "Technical Analysis of the Financial Markets"
    pengarang: "John Murphy"
    catatan: "Bab support-resistance dan trendline. Standar industri."
soal:
  - soal: "Harga menyentuh 5.000 tiga kali dan memantul, lalu candle harian tutup body di bawah 4.950 bervolume besar. Artinya:"
    opsi:
      - "Support makin kuat, beli besar"
      - "Breakdown terkonfirmasi — support 5.000 resmi jebol"
      - "Tidak ada artinya, tunggu berita"
      - "Waktunya averaging down"
    jawaban: 1
    pembahasan: "Body close di luar level + volume = konfirmasi jebol. Makin sering diuji, makin besar-half jebolnya."
  - soal: "Entry paling aman setelah breakout naik adalah:"
    opsi:
      - "Kejar harga secepatnya saat breakout"
      - "Tunggu retest: harga kembali ke level jebol lalu memantul naik"
      - "Beli sebelum breakout karena firasat"
      - "Tunggu setahun dulu"
    jawaban: 1
    pembahasan: "Retest memberi harga lebih baik + bukti level flip berfungsi + stop loss lebih rapat."
  - soal: "Trendline uptrend yang valid ditarik dengan menghubungkan:"
    opsi:
      - "Dua high dengan garis"
      - "Minimal dua low yang makin tinggi, dengan sentuhan ketiga sebagai konfirmasi"
      - "Satu titik acak ke harga sekarang"
      - "Open dan close satu candle"
    jawaban: 1
    pembahasan: "Dua titik membuat garis, titik ketiga memvalidasi. Makin banyak sentuhan tanpa jebol, makin kuat."
  - soal: "D1 tren naik, H1 koreksi ke support + muncul bullish engulfing. Ini contoh:"
    opsi:
      - "Sinyal palsu yang harus dihindari"
      - "Confluence: arah besar + level + pola kecil selaras — setup berkualitas"
      - "Alasan untuk short"
      - "Tidak ada hubungannya antar timeframe"
    jawaban: 1
    pembahasan: "Tiga alasan independen menunjuk arah sama. Inilah setup yang layak dirisikokan (dengan RR benar)."
studi_kasus:
  judul: "Peta perang saham fiktif PT Energi Nusantara"
  cerita: "Saham fiktif ENUS turun dari 3.000 ke 2.200, memantul dua kali tepat di 2.200, lalu naik menembus 2.500 dan kembali turun ke 2.500. Timeframe D1 tren naik, H1 koreksi. Anda diminta menyusun peta level dan rencana."
  diketahui:
    - "Support 2.200: dua pantulan. Resistance 2.500 jebol, kini diretest"
    - "D1 naik, H1 koreksi (sehat, bukan reversal)"
    - "Belum ada pola candle di 2.500"
  ditanya: "Di mana zona entry, stop loss, dan apa yang ditunggu?"
analisis:
  ringkasan: "Setup idaman yang belum lengkap: level flip 2.500 + tren D1 naik, tinggal menunggu pola trigger H1. Kesabaran adalah posisinya."
  langkah:
    - "Tandai: support 2.200 (benteng), zona flip 2.480-2.520 (medan entry), resistance berikutnya 2.800."
    - "Skenario utama: tunggu bullish engulfing/hammer H1 di 2.480-2.520 → entry."
    - "Stop loss: di bawah 2.430 (bawah zona + buffer). Target: 2.800."
    - "Skenario batal: H1 tutup body di bawah 2.430 → flip gagal, mundur."
solving:
  pengantar: "Rencana dulu, emosi kemudian."
  langkah:
    - "Zona entry: 2.480-2.520, hanya jika ada pola bullish H1."
    - "Entry misal 2.510, SL 2.425 (risiko 85 poin), target 2.800 (reward 290). RR ≈ 1:3,4."
    - "RR di atas 1:2 dengan confluence D1 + flip + (nanti) pola = setup grade A."
    - "Tanpa pola trigger: tidak entry. Menunggu adalah posisi."
    - "Jika jebol 2.430: batal total, evaluasi ulang di support 2.200."
  hasil: "Tunggu trigger H1 di zona flip 2.480-2.520. Entry 2.510, SL 2.425, target 2.800 (RR ≈ 1:3,4)."
---

## Level dulu, pola kemudian

Semua pola modul 1-4 **melipatgandakan akurasinya** bila muncul di level yang tepat, dan berubah jadi noise di tengah jalan. Modul ini mengajarkan menggambar petanya: support, resistance, trendline, lalu menyelaraskan timeframe.

## Support & resistance: zona, bukan garis

Gambar sebagai **zona** (rentang 1-3% atau ekor-eker shadow), bukan garis presisi:

- **Makin sering disentuh tanpa jebol** (≥2-3×) = makin valid.
- **Makin lama usianya** (level bulanan > mingguan > intraday) = makin kuat.
- **Makin besar volumenya** saat memantul = makin serius penjaganya.
- Level bulat psikologis (1.000, 5.000, 10.000) sering jadi magnet.

> Aturan flip: support yang jebol berubah jadi resistance, dan sebaliknya. Bekas luka pasar tidak hilang — ia berganti peran.

## Trendline: tiga sentuhan baru sah

1. Uptrend: hubungkan low-low yang meninggi. Downtrend: hubungkan high-high yang menurun.
2. Gunakan **ekor shadow**, bukan body, agar garis mencakup seluruh emosi pasar.
3. Sentuhan ketiga = konfirmasi garis itu "dilihat" pasar.
4. Garis yang terlalu curam (>60°) cepat patah — tren sehat itu menanjak, bukan memanjat tebing.

## Breakout & retest: cara pasar menguji

- **Breakout valid:** body candle *tutup* di luar level, idealnya bervolume. Shadow lewat doang = *false break*.
- **Retest:** harga kembali ke level jebol. Memantul = flip terkonfirmasi = entry terbaik (harga bagus + SL rapat).
- **False break + pola berlawanan** (misal spike di atas resistance lalu bearish engulfing) justru sinyal kuat arah sebaliknya — jebakan buyer yang bisa dimanfaatkan.

## Confluence timeframe: paduan suara, bukan solo

Template kerja:

1. **D1/H4:** tentukan arah dan level besar. Hanya cari entry searah ini.
2. **H1:** cari zona flip/support-resistance + pola double/triple candle.
3. **M15 (opsional):** presisikan entry untuk SL lebih rapat.

Satu timeframe boleh berteriak, tapi entry hanya saat minimal dua timeframe bernyanyi sama. Inilah yang membuat winrate dan ketenangan naik bersamaan.
