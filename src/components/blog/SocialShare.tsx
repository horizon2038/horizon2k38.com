'use client';

import { Button } from '@/components/ui/Button';

interface SocialShareProps {
    title: string;
    url: string;
    description?: string;
}

export function SocialShare({ title, url, description }: SocialShareProps) {
    const fullUrl = typeof window !== 'undefined' ? window.location.origin + url : url;
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(fullUrl);
    const encodedDescription = encodeURIComponent(description || title);

    const shareButtons = [
        {
            name: 'X (Twitter)',
            url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
            icon: '𝕏',
            color: 'hover:bg-black hover:text-white'
        },
        {
            name: 'Facebook',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            icon: 'f',
            color: 'hover:bg-blue-600 hover:text-white'
        },
        {
            name: 'LinkedIn',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            icon: 'in',
            color: 'hover:bg-blue-700 hover:text-white'
        },
        {
            name: 'コピー',
            url: '#',
            icon: '📋',
            color: 'hover:bg-gray-600 hover:text-white',
            action: () => {
                navigator.clipboard.writeText(fullUrl);
                alert('URLをコピーしました！');
            }
        }
    ];

    const handleShare = (shareUrl: string, action?: () => void) => {
        if (action) {
            action();
        } else {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center py-6 border-y border-border">
            <span className="text-sm font-medium text-text-default/80">共有:</span>
            <div className="flex flex-wrap gap-2">
                {shareButtons.map((button) => (
                    <Button
                        key={button.name}
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare(button.url, button.action)}
                        className={`transition-colors ${button.color}`}
                        title={button.name}
                    >
                        <span className="mr-2">{button.icon}</span>
                        {button.name}
                    </Button>
                ))}
            </div>
        </div>
    );
}