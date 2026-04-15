import { getPayloadClient } from '@/lib/payload/client'

export async function getAllArticlesPublished() {
    const payload = await getPayloadClient()

    return await payload.find({
        collection: 'articles',
        depth: 1,
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

export async function getArticleBySlug(slug: string) {
    const payload = await getPayloadClient()

    const { docs: article } = await payload.find({
        collection: 'articles',
        depth: 1,
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
            and: [
                {
                    publishedAt: {
                        not_equals: null,
                    },
                },
                {
                    slug: {
                        equals: slug,
                    },
                },
            ],
        },
        limit: 1,
    })

    return article[0]
}
