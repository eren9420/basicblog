import React, { createContext, useContext, ReactNode } from 'react';
import { PostMeta } from '../types';
import { posts as initialPosts } from '../lib/posts';

interface BlogContextValue {
  posts: PostMeta[];
}

export const BlogContext = createContext<BlogContextValue>({ posts: [] });

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <BlogContext.Provider value={{ posts: initialPosts }}>
    {children}
  </BlogContext.Provider>
);

export function useBlogContext(): BlogContextValue {
  return useContext(BlogContext);
}