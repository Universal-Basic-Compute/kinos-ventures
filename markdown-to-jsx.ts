import { visit } from 'unist-util-visit';

// Convert markdown AST nodes to JSX strings
export function renderContent(nodes: any[]): string {
  if (!nodes || nodes.length === 0) {
    return '<p>No content available</p>';
  }
  
  return nodes.map(node => nodeToJsx(node)).join('\n');
}

// Convert a single node to JSX
function nodeToJsx(node: any): string {
  switch (node.type) {
    case 'paragraph':
      return `<p>${childrenToJsx(node)}</p>`;
    
    case 'heading':
      const level = Math.min(Math.max(node.depth, 1), 6);
      return `<h${level} className="font-semibold mt-6 mb-3">${childrenToJsx(node)}</h${level}>`;
    
    case 'list':
      const listType = node.ordered ? 'ol' : 'ul';
      const listClass = node.ordered ? 'list-decimal' : 'list-disc';
      return `<${listType} className="${listClass} ml-6 space-y-2">${node.children.map((item: any) => nodeToJsx(item)).join('')}</${listType}>`;
    
    case 'listItem':
      return `<li>${childrenToJsx(node)}</li>`;
    
    case 'blockquote':
      return `<blockquote className="border-l-4 border-primary/20 pl-4 italic">${childrenToJsx(node)}</blockquote>`;
    
    case 'code':
      return `<pre className="bg-muted p-4 rounded-md overflow-x-auto"><code className="text-sm">${escapeHtml(node.value)}</code></pre>`;
    
    case 'thematicBreak':
      return '<Separator className="my-6" />';
    
    case 'image':
      return `
        <div className="relative w-full aspect-video my-6 rounded-lg overflow-hidden">
          <Image 
            src="${node.url}" 
            alt="${node.alt || ''}" 
            fill 
            className="object-cover" 
          />
        </div>
      `;
    
    case 'table':
      return `
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              ${node.children.find((n: any) => n.type === 'tableHead') ? nodeToJsx(node.children.find((n: any) => n.type === 'tableHead')) : ''}
            </thead>
            <tbody>
              ${node.children.filter((n: any) => n.type === 'tableRow').map((row: any) => nodeToJsx(row)).join('')}
            </tbody>
          </table>
        </div>
      `;
    
    case 'tableRow':
      return `<tr>${node.children.map((cell: any) => nodeToJsx(cell)).join('')}</tr>`;
    
    case 'tableCell':
      return `<td className="border p-2">${childrenToJsx(node)}</td>`;
    
    case 'tableHead':
      return `<tr>${node.children.map((cell: any) => `<th className="border p-2 font-semibold bg-muted">${childrenToJsx(cell)}</th>`).join('')}</tr>`;
    
    default:
      if (node.children) {
        return childrenToJsx(node);
      }
      return '';
  }
}

// Process children of a node
function childrenToJsx(node: any): string {
  if (!node.children || node.children.length === 0) {
    return '';
  }
  
  return node.children.map((child: any) => {
    if (child.type === 'text') {
      return escapeHtml(child.value);
    } else if (child.type === 'emphasis') {
      return `<em>${childrenToJsx(child)}</em>`;
    } else if (child.type === 'strong') {
      return `<strong>${childrenToJsx(child)}</strong>`;
    } else if (child.type === 'inlineCode') {
      return `<code className="bg-muted px-1 py-0.5 rounded text-sm">${escapeHtml(child.value)}</code>`;
    } else if (child.type === 'link') {
      return `<a href="${child.url}" className="text-primary hover:underline">${childrenToJsx(child)}</a>`;
    } else if (child.type === 'image') {
      return nodeToJsx(child);
    } else if (child.type === 'paragraph' && node.type !== 'listItem') {
      // For paragraphs inside other blocks, just render the content without the <p> tag
      return childrenToJsx(child);
    } else {
      return nodeToJsx(child);
    }
  }).join('');
}

// Escape HTML special characters
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
