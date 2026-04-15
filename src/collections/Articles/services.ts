import { getPayloadClient } from '@/lib/payload/client'

export async function getAllArticlesPublished() {
    const payload = await getPayloadClient()

    return await payload.find({
        collection: 'articles',
        draft: true,
        select: {
            title: true,
            contentSummary: true,
            status: true,
            readTimeInMins: true,
            slug: true,
            author: true,
            coverImage: true,
            publishedAt: true,
        },
        where: {
            publishedAt: {
                not_equals: null,
            },
        },
    })
}
