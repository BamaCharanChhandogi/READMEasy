import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { Copy, Check } from 'lucide-react';

function OutputDisplay({ content, viewMode }) {
  const [copied, setCopied] = React.useState(false);

  if (!content) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };
  
  // Custom components for markdown rendering
  const components = {
    // Handle code blocks with syntax highlighting
    code: ({node, inline, className, children, ...props}) => {
      const match = /language-(\w+)/.exec(className || '');
      return (
        <pre className={`${match ? `language-${match[1]}` : ''} bg-gray-800 p-4 rounded-md overflow-x-auto`}>
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      );
    },
    // Handle images with proper sizing and alt text
    img: ({node, ...props}) => (
      <img 
        {...props} 
        className="max-w-full h-auto rounded-lg shadow-lg" 
        loading="lazy"
      />
    ),
    // Style links
    a: ({node, children, ...props}) => (
      <a 
        {...props} 
        className="text-blue-400 hover:text-blue-300 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    // Style tables
    table: ({node, children, ...props}) => (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full divide-y divide-gray-600" {...props}>
          {children}
        </table>
      </div>
    ),
    // Style table headers
    th: ({node, children, ...props}) => (
      <th 
        className="px-6 py-3 bg-gray-800 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" 
        {...props}
      >
        {children}
      </th>
    ),
    // Style table cells
    td: ({node, children, ...props}) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300" {...props}>
        {children}
      </td>
    ),
    // Style blockquotes
    blockquote: ({node, children, ...props}) => (
      <blockquote 
        className="border-l-4 border-gray-500 pl-4 my-4 italic text-gray-300"
        {...props}
      >
        {children}
      </blockquote>
    )
  };

  return (
    <div className="relative">
      <div className="flex justify-end mb-2">
        <button 
          onClick={copyToClipboard}
          className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center gap-2"
          disabled={copied}
        >
          {copied ? (
            <>
              <Check size={16} className="text-green-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copy to Clipboard</span>
            </>
          )}
        </button>
      </div>
      <div className={`bg-gray-800 p-6 rounded-lg shadow-md ${
        viewMode === 'rendered' 
          ? 'prose prose-invert prose-headings:text-gray-100 prose-a:text-blue-400 prose-code:text-pink-300 prose-pre:bg-gray-900 prose-pre:p-0 prose-pre:my-0 max-w-none'
          : ''
      }`}>
        {viewMode === 'markdown' ? (
          <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm overflow-x-auto">
            {content}
          </pre>
        ) : (
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} // Adds support for tables, strikethrough, task lists, etc.
            rehypePlugins={[
              rehypeRaw, // Allows raw HTML
              rehypeSanitize // Sanitizes HTML to prevent XSS
            ]}
            components={components}
            className="text-gray-200"
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default OutputDisplay;