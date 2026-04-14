import ArticelCard from '@/components/blog/article-card'
import { mockDelay } from '@/lib/mock-delay'

export default async function BlogPage() {
    await mockDelay(1000)
    return (
        <div className="w-full grid grid-cols-3 gap-4">
            <ArticelCard
                href="/blog/awdwadawdawd"
                title="How to Create a Blog Tutorial"
                coverImage="https://placehold.co/600x300/png"
                publishedAt={new Date('2025-11-13T20:45:00')}
                summary="lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque?"
                readTimeMins={2}
                author={{
                    avatar: 'https://placehold.co/40x40/png',
                    name: 'Joe Mama',
                    role: 'Staff Writer',
                }}
            />
        </div>
    )
}
