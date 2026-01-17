"use client";

import { useState, useEffect, MouseEvent } from "react";

interface ReactionBarProps {
  itemId: string;
  initialViews?: number;
}

export default function ReactionBar({ itemId, initialViews }: ReactionBarProps) {
  const [views, setViews] = useState(0);
  const [reactions, setReactions] = useState({
    thumbsUp: 0,
    thumbsDown: 0,
    heart: 0,
    rocket: 0,
  });
  
  // Track user's own interactions locally
  const [hasInteracted, setHasInteracted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Start view count at 0 for now
    setViews(0);
  }, [itemId, initialViews]);

  const handleReaction = (e: MouseEvent, type: keyof typeof reactions) => {
    e.preventDefault(); // Prevent Link navigation if inside a Link
    e.stopPropagation();

    if (hasInteracted[type]) {
       // Toggle off
       setReactions(prev => ({
        ...prev,
        [type]: Math.max(0, prev[type] - 1)
      }));
      setHasInteracted(prev => ({ ...prev, [type]: false }));
    } else {
       // Toggle on
       setReactions(prev => ({
        ...prev,
        [type]: prev[type] + 1
      }));
      setHasInteracted(prev => ({ ...prev, [type]: true }));
    }
  };

  return (
    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100/50 w-full">
      <div className="flex items-center text-xs text-gray-500 font-medium">
        <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        {views.toLocaleString()}
      </div>

      <div className="flex items-center gap-1 bg-gray-50/50 rounded-full px-2 py-1 backdrop-blur-sm">
        <ReactionButton
          emoji="👍"
          count={reactions.thumbsUp}
          active={!!hasInteracted.thumbsUp}
          onClick={(e) => handleReaction(e, 'thumbsUp')}
        />
        <ReactionButton
          emoji="👎"
          count={reactions.thumbsDown}
          active={!!hasInteracted.thumbsDown}
          onClick={(e) => handleReaction(e, 'thumbsDown')}
        />
        <ReactionButton
          emoji="❤️"
          count={reactions.heart}
          active={!!hasInteracted.heart}
          onClick={(e) => handleReaction(e, 'heart')}
        />
        <ReactionButton
          emoji="🚀"
          count={reactions.rocket}
          active={!!hasInteracted.rocket}
          onClick={(e) => handleReaction(e, 'rocket')}
        />
      </div>
    </div>
  );
}

function ReactionButton({ 
  emoji, 
  count, 
  active, 
  onClick 
}: { 
  emoji: string; 
  count: number; 
  active: boolean;
  onClick: (e: MouseEvent) => void 
}) {
  return (
    <button
      onClick={onClick}
      className={`
        group flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-200
        ${active ? 'bg-white shadow-sm scale-105' : 'hover:bg-white/60'}
      `}
    >
      <span className={`transform transition-transform ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
        {emoji}
      </span>
      {count > 0 && (
        <span className={`text-[10px] font-semibold ${active ? 'text-sky-600' : 'text-gray-400'}`}>
          {count}
        </span>
      )}
    </button>
  );
}
