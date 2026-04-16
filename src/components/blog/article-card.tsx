import Image from 'next/image'
import Link from 'next/link'
import ArticleMetadata from './artilce-metadata'
import { ArticleAuthor, Media } from '@/payload-types'

export interface ArticelCardProps {
    href: string
    title: string
    summary: string
    coverImage: Media
    publishedAt: Date
    readTimeMins: number
    author: ArticleAuthor
}

export default function ArticelCard({
    href,
    title,
    summary,
    coverImage,
    ...metaDataProps
}: ArticelCardProps) {
    return (
        <Link href={href} aria-label={`Read article: "${title}"`} className="block">
            <article className="rounded-md border border-gray-700 overflow-hidden h-full">
                {/* cover image */}
                <Image
                    alt={`Cover image ${title}`}
                    src={coverImage.url ?? 'https://placehold.co/600x300/png'}
                    blurDataURL={coverImage.blurDataUrl}
                    width={600}
                    height={300}
                    className="aspect-video w-full object-cover object-center"
                    loading="eager"
                />
                {/* content */}
                <div className="p-3 space-y-4">
                    <header className="space-y-2">
                        <h2 className="font-bold text-lg">{title}</h2>
                        <p>{summary}</p>
                    </header>
                    <ArticleMetadata intent="card" data={metaDataProps} />
                </div>
            </article>
        </Link>
    )
}

export function ArticleSkeleton() {
    return (
        <div>
            <div className="rounded-md aspect-video bg-gray-300"></div>
            <div className="p-3 space-y-4">
                <div className="space-y-3">
                    <div className="h-4 w-3/4 bg-gray-300 rounded-md"></div>
                    <div className="space-y-1">
                        <div className="h-3 bg-gray-300 rounded-md"></div>
                        <div className="h-3 bg-gray-300 rounded-md"></div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-2">
                        <div className="size-10 rounded-full bg-gray-300 "></div>
                        <div className="space-y-1.5">
                            <div className="h-3 w-20 bg-gray-300 rounded-md"></div>
                            <div className="h-3 w-20 bg-gray-300 rounded-md"></div>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="h-3 w-30  bg-gray-300 rounded-md"></div>
                        <div className="ms-auto h-3 w-20 bg-gray-300 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
