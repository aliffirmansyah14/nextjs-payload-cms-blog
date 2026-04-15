import { getAllArticlesPublished } from '@/collections/Articles/services'
import ArticelCard from '@/components/blog/article-card'

export function isRelationObjet<T>(object: T | number): object is T {
    return typeof object === 'object' && !Array.isArray(object)
}

export default async function BlogPage() {
    const { docs: articles } = await getAllArticlesPublished()
    if (articles.length <= 0) {
        return (
            <div className="w-full py-4">
                <p>Belum ada article dipublish</p>
            </div>
        )
    }
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => {
                if (!isRelationObjet(article.coverImage)) return null
                if (!isRelationObjet(article.author)) return null
                return (
                    <ArticelCard
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        title={article.title}
                        coverImage={article.coverImage}
                        publishedAt={new Date(article?.publishedAt ?? '2026-04-15T20:45:00')}
                        summary={
                            article?.contentSummary ??
                            'Content summary tidak ada, coba edit article kembali'
                        }
                        readTimeMins={2}
                        author={article.author}
                    />
                )
            })}
        </div>
    )
}
