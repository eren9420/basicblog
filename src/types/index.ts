// src/types/index.ts
export interface PostFrontMatter {
    title: string;
    date: string; // ISO formatında (YYYY-MM-DD)
    excerpt: string;
    author?: string;
    tags?: string[];
    // İhtiyaca göre başka alanlar eklenebilir
  }
  
  export interface Post extends PostFrontMatter {
    slug: string; // Dosya adından türetilecek (örn: ilk-yazim)
    content: string; // Markdown içeriği
  }
  
  export interface PostSummary extends PostFrontMatter {
     slug: string;
  }