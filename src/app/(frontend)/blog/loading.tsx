import { ArticleSkeleton } from '@/components/blog/article-card'

export default function BlogLoading() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
                <ArticleSkeleton key={i} />
            ))}
        </div>
    )
}
