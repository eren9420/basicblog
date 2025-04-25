// src/components/Blog/MarkdownRenderer.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// Popüler bir tema seçin veya kendi temanızı oluşturun
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '@mui/material/styles'; // Temayı almak için

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const theme = useTheme(); // Mevcut MUI temasını al
  const codeTheme = theme.palette.mode === 'dark' ? materialDark : materialLight;

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]} // Matematik ifadelerini işlemesi için
      rehypePlugins={[rehypeKatex]} // Matematik ifadelerini KaTeX ile render etmesi için
      components={{
        // Kod bloklarını SyntaxHighlighter ile özelleştirme
        code(props) {
          const {children, className, node, ...rest} = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              {...rest}
              style={codeTheme} // Tema moduna göre stil uygula
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        // İsteğe bağlı: Diğer HTML etiketlerini MUI bileşenleriyle değiştirebilirsiniz
        // Örneğin: h1, h2, p, a, blockquote vb.
        // h1: ({ node, ...props }) => <Typography variant="h1" {...props} />,
        // p: ({ node, ...props }) => <Typography paragraph {...props} />,
        // a: ({ node, ...props }) => <Link {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;