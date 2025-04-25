// src/lib/posts.ts
import matter from 'gray-matter';
import { Post, PostFrontMatter, PostSummary } from '../types';

// Vite'ın glob import özelliği ile posts klasöründeki tüm md dosyalarını al
// eager: true -> dosyaları hemen yükler ve modül içeriğini verir
const postModules = import.meta.glob('/posts/**/*.md', { eager: true, as: 'raw' });

// Tüm yazıların özet bilgilerini ve slug'larını döndüren fonksiyon
export function getAllPostSummaries(): PostSummary[] {
  const posts: PostSummary[] = Object.entries(postModules).map(([path, rawContent]) => {
    const slug = path.replace('/posts/', '').replace('.md', '');
    const { data } = matter(rawContent); // Sadece frontmatter'ı alıyoruz

    // Tip kontrolü ve varsayılan değer atama
    const frontMatter = data as PostFrontMatter;
     if (!frontMatter.title || !frontMatter.date || !frontMatter.excerpt) {
         console.warn(`Post at ${path} is missing required frontmatter (title, date, excerpt). Skipping.`);
         // Gerekirse burada null dönebilir ve filtreleyebilirsiniz
         // Veya varsayılan değerler atayabilirsiniz
         return null; // Eksik bilgili yazıyı atla
     }


    return {
      slug,
      ...frontMatter,
    };
  }).filter((post): post is PostSummary => post !== null); // Null olanları filtrele


  // Yazıları tarihe göre en yeniden eskiye sırala
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Belirli bir slug'a sahip yazının tüm içeriğini döndüren fonksiyon
export function getPostBySlug(slug: string): Post | null {
  const path = `/posts/${slug}.md`;
  const rawContent = postModules[path];

  if (!rawContent) {
    console.error(`Post with slug "${slug}" not found at path "${path}"`);
    return null;
  }

  const { data, content } = matter(rawContent);
  const frontMatter = data as PostFrontMatter;

   if (!frontMatter.title || !frontMatter.date || !frontMatter.excerpt) {
       console.warn(`Post with slug "${slug}" is missing required frontmatter (title, date, excerpt).`);
       // Eksik bilgi durumunda nasıl davranılacağına karar verin
   }


  return {
    slug,
    ...frontMatter,
    content,
  };
}