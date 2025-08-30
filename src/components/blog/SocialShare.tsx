'use client';

import {Button} from '@/components/ui/Button';

interface SocialShareProps {
    title: string;
    url: string;
    description?: string;
}

export function SocialShare({title, url, description}: SocialShareProps) {
    const fullUrl = typeof window !== 'undefined' ? window.location.origin + url : url;
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(fullUrl);
    const encodedDescription = encodeURIComponent(description || title);

    const shareButtons = [
        {
            name: 'X/Twitter',
            url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        },
        {
            name: 'Copy URL',
            url: '#',
            action: () => {
                navigator.clipboard.writeText(fullUrl);
                alert('URL copied to clipboard!');
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
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center py-6">
            <span className="text-sm font-medium text-text-default/80">Share:</span>
            <div className="flex flex-wrap gap-2">
                {shareButtons.map((button) => (
                    <Button
                        key={button.name}
                        variant="primary"
                        size="sm"
                        onClick={() => handleShare(button.url, button.action)}
                        className={`neu-surface neu-pressable`}
                        title={button.name}
                    >
                        {button.name}
                    </Button>
                ))}
            </div>
        </div>
    );
}
