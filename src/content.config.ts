import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const modules = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/modules' }),
  schema: z.object({
    title: z.string(),
    kategori: z.string(),
    deskripsi: z.string(),
    urutan: z.number(),
    estimasi: z.string(),
    sumber: z.array(
      z.object({
        jenis: z.enum(['video', 'buku']),
        judul: z.string(),
        url: z.string().url().optional(),
        channel: z.string().optional(),
        pengarang: z.string().optional(),
        durasi: z.string().optional(),
        catatan: z.string().optional(),
        timestamps: z
          .array(z.object({ t: z.string(), label: z.string() }))
          .optional(),
      })
    ),
    soal: z
      .array(
        z.object({
          soal: z.string(),
          opsi: z.array(z.string()),
          jawaban: z.number().int(),
          pembahasan: z.string(),
        })
      )
      .default([]),
    rumus: z
      .array(
        z.object({
          nama: z.string(),
          rumus: z.string(),
          keterangan: z.string().optional(),
        })
      )
      .default([]),
    studi_kasus: z
      .object({
        judul: z.string(),
        cerita: z.string(),
        diketahui: z.array(z.string()).default([]),
        ditanya: z.string(),
      })
      .optional(),
    analisis: z
      .object({
        ringkasan: z.string().optional(),
        langkah: z.array(z.string()).default([]),
      })
      .optional(),
    solving: z
      .object({
        pengantar: z.string().optional(),
        langkah: z.array(z.string()).default([]),
        hasil: z.string(),
      })
      .optional(),
  }),
});

export const collections = { modules };
