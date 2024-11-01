import React, { useEffect, useState } from 'react';
import { 
  Bold, 
  Italic, 
  Link, 
  Image, 
  List, 
  ListOrdered, 
  Table, 
  Code,
  CheckSquare,
  Heading1,
  Heading2,
  Heading3
} from 'lucide-react';

const MarkdownToolbar = ({ textareaRef }) => {
  const [urlModalOpen, setUrlModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [urlValue, setUrlValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [lastSelection, setLastSelection] = useState(null);
  const [lastScrollPosition, setLastScrollPosition] = useState(null);
  const [storeTextRef, setTextRef] = useState(textareaRef.current);

  const tools = [
    { icon: Bold, action: 'bold', wrapper: '**', shortcut: 'Ctrl+B' },
    { icon: Italic, action: 'italic', wrapper: '_', shortcut: 'Ctrl+I' },
    { icon: Heading1, action: 'h1', prefix: '# ', shortcut: 'Ctrl+1' },
    { icon: Heading2, action: 'h2', prefix: '## ', shortcut: 'Ctrl+2' },
    { icon: Heading3, action: 'h3', prefix: '### ', shortcut: 'Ctrl+3' },
    { icon: Link, action: 'link', template: '[text](url)', shortcut: 'Ctrl+K', needsUrl: true },
    { icon: Image, action: 'image', template: '![text](url)', shortcut: 'Ctrl+Shift+I', needsUrl: true },
    { icon: List, action: 'unordered-list', template: '- item\n- item\n- item', shortcut: 'Ctrl+U' },
    { icon: ListOrdered, action: 'ordered-list', template: '1. item\n2. item\n3. item', shortcut: 'Ctrl+O' },
    { icon: CheckSquare, action: 'checklist', template: '- [ ] task\n- [ ] task\n- [x] completed task', shortcut: 'Ctrl+Shift+C' },
    { icon: Table, action: 'table', template: '| Header | Header |\n|--------|--------|\n| Cell   | Cell   |', shortcut: 'Ctrl+T' },
    { icon: Code, action: 'code', wrapper: '```', multiline: true, shortcut: 'Ctrl+Shift+K' }
  ];

  const saveState = () => {
    const textarea = storeTextRef;
    if (!textarea) return;
    
    setLastSelection({
      start: textarea.selectionStart,
      end: textarea.selectionEnd,
      text: textarea.value.substring(textarea.selectionStart, textarea.selectionEnd)
    });
    
    setLastScrollPosition(textarea.scrollTop);
  };

  const restoreState = (newStart = null, newEnd = null) => {
    const textarea = storeTextRef;
    if (!textarea) return;

    // Restore scroll position
    if (lastScrollPosition !== null) {
      textarea.scrollTop = lastScrollPosition;
    }

    // Restore selection
    textarea.focus();
    if (newStart !== null && newEnd !== null) {
      textarea.setSelectionRange(newStart, newEnd);
    } else if (lastSelection) {
      textarea.setSelectionRange(lastSelection.start, lastSelection.end);
    }
  };

  const insertText = (text, start, end, selectInserted = false) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    saveState();
    
    const value = textarea.value;
    const newValue = value.substring(0, start) + text + value.substring(end);
    
    // Calculate new selection positions
    const newStart = selectInserted ? start : start + text.length;
    const newEnd = selectInserted ? start + text.length : start + text.length;

    // Update textarea value
    textarea.value = newValue;
    
    // Trigger React's onChange event
    const event = new Event('input', { bubbles: true });
    Object.defineProperty(event, 'target', { 
      value: textarea,
      writable: true 
    });
    textarea.dispatchEvent(event);

    // Use requestAnimationFrame to ensure DOM updates are complete
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(newStart, newEnd);
      if (lastScrollPosition !== null) {
        textarea.scrollTop = lastScrollPosition;
      }
    });
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    const textarea = textareaRef.current;
    const tool = tools.find(t => t.action === modalType);
    
    if (tool) {
      const text = textValue || lastSelection?.text || 'text';
      const formattedText = tool.template
        .replace('text', text)
        .replace('url', urlValue);
      
      const insertStart = lastSelection?.start || textarea.selectionStart;
      const insertEnd = lastSelection?.end || textarea.selectionEnd;
      
      insertText(formattedText, insertStart, insertEnd, true);
    }
    
    setUrlModalOpen(false);
    setUrlValue('');
    setTextValue('');
    setModalType(null);
  };

  const handleAction = (tool) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    saveState();

    if (tool.needsUrl) {
      setModalType(tool.action);
      setUrlModalOpen(true);
      if (lastSelection?.text) {
        setTextValue(lastSelection.text);
      }
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    if (tool.wrapper) {
      const isWrapped = selectedText.startsWith(tool.wrapper) && selectedText.endsWith(tool.wrapper);
      if (isWrapped) {
        // Remove wrapper
        const unwrappedText = selectedText.substring(tool.wrapper.length, selectedText.length - tool.wrapper.length);
        insertText(unwrappedText, start, end, true);
      } else {
        // Add wrapper
        const wrappedText = tool.multiline 
          ? `${tool.wrapper}\n${selectedText}\n${tool.wrapper}`
          : `${tool.wrapper}${selectedText}${tool.wrapper}`;
        insertText(wrappedText, start, end, true);
      }
    } else if (tool.prefix) {
      const lineStart = textarea.value.lastIndexOf('\n', start - 1) + 1;
      const currentLine = textarea.value.substring(lineStart, end);
      const hasPrefix = currentLine.startsWith(tool.prefix);
      
      if (hasPrefix) {
        insertText(currentLine.substring(tool.prefix.length), lineStart, end, true);
      } else {
        insertText(tool.prefix + currentLine, lineStart, end, true);
      }
    } else if (tool.template) {
      insertText(tool.template, start, end, true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!textareaRef.current) return;
      if (e.ctrlKey) {
        const tool = tools.find(t => {
          const shortcutKey = t.shortcut.split('+').pop().toLowerCase();
          return e.key.toLowerCase() === shortcutKey && 
                 t.shortcut.includes('Shift') === e.shiftKey;
        });

        if (tool) {
          e.preventDefault();
          handleAction(tool);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [textareaRef]);

  return (
    <>
      <div className="flex flex-wrap gap-2 p-2 bg-gray-700 rounded-t-md border-b border-gray-600">
        {tools.map((tool) => (
          <button
            key={tool.action}
            onClick={() => handleAction(tool)}
            className="p-1.5 text-gray-300 hover:text-white hover:bg-gray-600 rounded transition-colors group relative"
            title={`${tool.action.charAt(0).toUpperCase() + tool.action.slice(1).replace('-', ' ')} (${tool.shortcut})`}
          >
            <tool.icon size={20} />
            <span className="absolute hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
              {tool.shortcut}
            </span>
          </button>
        ))}
      </div>

      {urlModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
            <form onSubmit={handleUrlSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Text
                </label>
                <input
                  type="text"
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                  placeholder="Enter text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  URL
                </label>
                <input
                  type="text"
                  value={urlValue}
                  onChange={(e) => setUrlValue(e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                  placeholder="Enter URL"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setUrlModalOpen(false);
                    setUrlValue('');
                    setTextValue('');
                    setModalType(null);
                    restoreState();
                  }}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                >
                  Insert
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MarkdownToolbar;