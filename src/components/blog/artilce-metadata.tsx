import Image from 'next/image'
import { ArticelCardProps } from './article-card'
import { getLocaleDate } from '@/lib/get-locale-date'
import { isRelationObjet } from '@/app/(frontend)/blog/page'

interface ArticleMetadataProps {
    data: Pick<ArticelCardProps, 'readTimeMins' | 'author' | 'publishedAt'>
    intent: 'card' | 'post'
    className?: string
}

export default function ArticleMetadata({ data, intent, className }: ArticleMetadataProps) {
    const { author, publishedAt, readTimeMins } = data
    if (!isRelationObjet(author.avatar)) return null

    return (
        <div className={`flex items-center justify-between ${className}`}>
            <div className="flex justify-center items-center gap-2">
                <Image
                    src={author.avatar.url ?? 'https://placehold.co/40x40/png'}
                    alt={`${author.name}'s avatar`}
                    blurDataURL={author.avatar.blurDataUrl}
                    width={40}
                    height={40}
                    sizes="40px"
                    className={`rounded-full ${intent === 'card' ? 'size-10' : 'size-11'}`}
                />
                {/* author name & role */}
                <div
                    className={`leading-none ${intent === 'card' ? 'text-sm space-y-1.5' : 'text-base space-y-2'}`}
                >
                    <h3 className="capitalize font-bold">{author.name}</h3>
                    <p className="text-gray-400">{author.role}</p>
                </div>
            </div>
            {/* published & author  */}
            <div
                className={`leading-none text-right ${intent === 'card' ? 'text-sm space-y-1.5' : 'text-lg space-y-2'}`}
            >
                <p className="capitalize font-bold">{getLocaleDate(publishedAt)}</p>
                <p className="text-gray-400">{readTimeMins} minutes read</p>
            </div>
        </div>
    )
}
