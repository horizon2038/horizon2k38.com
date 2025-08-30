import Link from 'next/link';
import {getAllTags, getPostsByTag} from '@/lib/posts';

export function TagList() {
    const tags = getAllTags();

    return (
        <div className="mb-8">
            <div className="flex flex-wrap gap-3">
                {tags.map((tag) => {
                    const postCount = getPostsByTag(tag).length;
                    return (
                        <Link
                            key={tag}
                            href={`/tags/${encodeURIComponent(tag)}`}
                            className="group no-underline"
                        >
                            <div className="neu-surface neu-pressable px-3 py-2 rounded-lg transition-colors hover:bg-secondary/10">
                                <span className="text-sm font-medium text-text-default group-hover:text-secondary">
                                    #{tag}
                                </span>
                                <span className="text-xs text-text-default/60 ml-1">
                                    ({postCount})
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
