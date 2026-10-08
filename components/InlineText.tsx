/**
 * Renders a plain string that may contain `[label](url)` markdown-style
 * links as text with real anchor tags, without pulling in a full markdown
 * renderer for content that's otherwise just plain sentences.
 */
export default function InlineText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    parts.push(
      <a
        key={key++}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand underline decoration-brand/40 underline-offset-2 hover:decoration-brand"
      >
        {label}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
