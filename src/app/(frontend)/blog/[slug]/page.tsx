import ArticleMetadata from '@/components/blog/artilce-metadata'
import Image from 'next/image'
import { isRelationObjet } from '../page'
import { getArticle } from '@/collections/Articles/services'
import { RichText } from '@/components/payload/rich-text'
import { notFound } from 'next/navigation'

interface BlostPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function BlogPostPage({ params }: BlostPostPageProps) {
    const slug = (await params).slug
    const article = await getArticle(slug)

    if (!article) return notFound()

    return (
        <div className="prose lg:prose-lg dark:prose-invert min-w-full">
            {/* title */}
            <h1>{article.title}</h1>
            {/* metaData */}
            {isRelationObjet(article.author) && (
                <ArticleMetadata
                    intent="post"
                    data={{
                        publishedAt: new Date(article.publishedAt ?? '2025-11-13T20:45:00'),
                        readTimeMins: article.readTimeInMins ?? 0,
                        author: article.author,
                    }}
                />
            )}
            {/* cover image  */}
            {isRelationObjet(article.coverImage) && (
                <Image
                    alt={article.coverImage.alt}
                    src={article.coverImage.url ?? 'https://placehold.co/600x300/png'}
                    blurDataURL={article.coverImage.blurDataUrl}
                    width={600}
                    height={300}
                    className="aspect-video w-full object-cover object-center"
                    loading="eager"
                />
            )}
            {/* contant */}
            <RichText lexicalData={article.content} />
        </div>
    )
}
