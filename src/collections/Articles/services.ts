import { unstable_cache } from 'next/cache'
import { getAllArticlesPublished, getArticleBySlug } from './repository'
import { CACHE_TAG_ARTICLES } from './constant'

export const getAllArticles = unstable_cache(
    async () => {
        try {
            const result = await getAllArticlesPublished()
            return result?.docs ?? []
        } catch (error) {
            console.log('Error get all articles service : ', error)
            return []
        }
    },
    [],
    {
        tags: [CACHE_TAG_ARTICLES],
    },
)

export async function getArticle(slug: string) {
    try {
        if (!slug) throw new Error('Paramater slug kosong')
        const result = await getArticleBySlug(slug)
        if (result.docs.length === 0 && !result.docs) return null
        return result.docs[0]
    } catch (error) {
        console.log('Error get article service: ', error)
        return null
    }
}
