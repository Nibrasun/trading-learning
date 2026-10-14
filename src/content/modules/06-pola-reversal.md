---
title: "Chart Pattern Reversal: Head & Shoulders, Double & Rounding"
kategori: "Chart Pattern"
urutan: 6
estimasi: "2-3 jam"
deskripsi: "Pola pembalikan arah skala besar: head and shoulders (dan inversnya), double top/bottom, triple top/bottom, serta rounding top/bottom — termasuk cara mengukur target dengan tinggi pola."
rumus:
  - nama: "Target head and shoulders"
    rumus: "Target = Neckline − Tinggi kepala (top) / + Tinggi (inverse)"
    keterangan: "Tinggi = jarak kepala ke neckline. Ukur vertikal, proyeksikan dari titik jebol."
  - nama: "Target double top/bottom"
    rumus: "Target = Neckline ∓ Tinggi pola"
    keterangan: "Tinggi = puncak/lembah ke neckline tengah. Minimal target; sering lebih."
  - nama: "Syarat neckline"
    rumus: "Jebol = close body melewati neckline, idealnya + retest"
    keterangan: "Pola belum resmi sebelum neckline jebol. Jangan entry di bahu kanan."
  - nama: "Volume ideal"
    rumus: "Kiri ramai → kepala sepi → kanan makin sepi → jebol ramai"
    keterangan: "Volume yang melemah ke kanan = kehabisan bahan bakar tren. Konfirmasi kuat."
sumber:
  - jenis: video
    judul: "Head and Shoulders Pattern: Complete Guide"
    channel: "The Trading Channel"
    catatan: "Neckline miring, retest, dan target terukur."
  - jenis: video
    judul: "Double Tops and Bottoms (Avoid This Mistake)"
    channel: "Rayner Teo"
    catatan: "Bedakan double top valid vs dua puncak acak."
  - jenis: buku
    judul: "Encyclopedia of Chart Patterns"
    pengarang: "Thomas Bulkowski"
    catatan: "Statistik keberhasilan tiap pola reversal dari data historis."
soal:
  - soal: "Head and shoulders top terkonfirmasi ketika:"
    opsi:
      - "Bahu kanan terbentuk"
      - "Harga close body di bawah neckline"
      - "Kepala lebih tinggi dari bahu"
      - "Volume naik di bahu kanan"
    jawaban: 1
    pembahasan: "Pola sehebat apa pun belum resmi sebelum neckline jebol. Entry di bahu kanan = menebak."
  - soal: "Kepala di 120, neckline di 100. Target turun terukurnya:"
    opsi:
      - "110"
      - "100"
      - "80 (100 − 20)"
      - "120"
    jawaban: 2
    pembahasan: "Tinggi = 120 − 100 = 20. Target = 100 − 20 = 80."
  - soal: "Double bottom (W) yang berkualitas biasanya:"
    opsi:
      - "Dua lembah sejajar + lembah kedua bervolume lebih kecil + jebol neckline bervolume"
      - "Terbentuk dalam 5 menit"
      - "Tanpa neckline yang jelas"
      - "Muncul di tengah tren naik kencang"
    jawaban: 0
    pembahasan: "Lembah kedua sepi = seller habis. Jebol neckline ramai = buyer masuk. Itu cetak biru double bottom sehat."
  - soal: "Rounding bottom (cawan) mencerminkan:"
    opsi:
      - "Panik sesaat"
      - "Transisi perlahan: seller melemah bertahap lalu buyer mengambil alih — akumulasi"
      - "Gap semalam"
      - "Tidak ada makna"
    jawaban: 1
    pembahasan: "Bentuk U landai = distribusi tekanan yang berubah perlahan. Pecah ke atas (plus handle) = tren naik baru."
studi_kasus:
  judul: "Head and shoulders fiktif saham properti PROP"
  cerita: "Saham fiktif PROP naik ke 1.500 (bahu kiri), ke 1.650 (kepala), lalu 1.520 (bahu kanan). Neckline di 1.400 (menghubungkan dua lembah). Volume melemah dari kiri ke kanan. Harga kini 1.420 mendekati neckline."
  diketahui:
    - "Kepala 1.650, neckline 1.400 → tinggi 250"
    - "Volume: kiri ramai, kanan sepi (ideal)"
    - "Harga 1.420, belum jebol"
  ditanya: "Kapan pola resmi, berapa target, dan rencana tradenya?"
analisis:
  ringkasan: "Struktur dan volume textbook. Tinggal menunggu pelatuk: close di bawah 1.400. Rencana dibuat sebelum pelatuk, bukan sesudah."
  langkah:
    - "Status: bahu kanan selesai, pola 90% jadi tapi 0% resmi. Belum boleh short."
    - "Pelatuk: close H1/D1 body di bawah 1.400."
    - "Target terukur: 1.400 − 250 = 1.150."
    - "SL: di atas 1.470 (di atas bahu kanan + buffer) bila entry di jebolnya."
solving:
  pengantar: "Ukur target sebelum entry — kalau RR tidak masuk, pola terbaik pun dilewatkan."
  langkah:
    - "Tunggu close di bawah 1.400. Entry short misal 1.390."
    - "Stop loss 1.475 (risiko 85 poin). Target 1.150 (reward 240). RR ≈ 1:2,8."
    - "Varian aman: tunggu retest 1.400 dari bawah yang gagal → short dengan SL lebih rapat."
    - "Batal: bila harga malah tutup di atas 1.520 → bahu kanan gagal, pola bubar."
    - "Catat volume saat jebol: jebol sepi = waspada false break."
  hasil: "Short saat jebol 1.400 (entry ±1.390), SL 1.475, target 1.150 (RR ≈ 1:2,8)."
---

## Reversal: saat raksasa berbalik arah

Chart pattern reversal terbentuk dalam **minggu-bulan** dan membalikkan tren besar. Karena itu bobotnya di atas semua pola candle — tapi kesabarannya juga dituntut lebih: pola belum resmi sebelum garis pemicunya jebol.

## Head and shoulders (dan inverse-nya)

Tiga puncak (bahu kiri – kepala – bahu kanan) + **neckline** penghubung dua lembah:

- Bahu kanan lebih rendah dari kepala = momentum melemah (divergensi visual).
- Volume ideal: ramai di kiri, sepi di kanan, ramai lagi saat jebol.
- Neckline boleh miring; yang penting jelas menghubungkan dua lembah.
- **Inverse H&S** di lembah = cerminan untuk reversal naik.

Entry: saat close di bawah neckline (atau retest-nya yang gagal). Jangan entry di bahu kanan yang "kelihatannya akan jebol".

## Double top / bottom

Huruf **M** (top) dan **W** (bottom):

- Dua puncak/lembah sejajar (±3% masih wajar), dipisahkan lembah/puncak tengah (= neckline).
- Lembah kedua bervolume lebih kecil = tekanan habis.
- Target = tinggi pola dari neckline. Double top yang gagal menembus ke atas setelah dua puncak = justru sinyal beli kuat (bullish!), karena seller dua kali gagal.

## Triple top / bottom

Tiga kali gagal di level sama = level makin kuat sekaligus makin rapuh: kalau akhirnya jebol, ledakannya besar karena stop loss tiga gelombang ikut tersapu. Perlakukan seperti double dengan target sama dan kewaspadaan lebih.

## Rounding top / bottom

Huruf U (bottom) dan U terbalik (top) yang landai:

- **Rounding bottom:** akumulasi perlahan. Konfirmasi saat pecah ke atas. Varian *cup and handle*: cawan + cangkir kecil = entry di bibir cawan.
- **Rounding top:** distribusi perlahan, jarang simetris sempurna. Waspadai bila terbentuk setelah rally panjang + volume menipis.

> Semua pola reversal menjawab tiga pertanyaan: *di mana pelatuknya (neckline), berapa targetnya (tinggi pola), di mana saya salah (SL)?* Tidak bisa jawab ketiganya = jangan entry.
