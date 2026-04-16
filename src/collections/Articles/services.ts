import { getAllArticlesPublished, getArticleBySlug } from './repository'

export async function getAllArticles() {
    try {
        const { docs: articles } = await getAllArticlesPublished()
        return articles
    } catch (error) {
        console.log('Error get all articles service : ', error)
        return []
    }
}

export async function getArticle(slug: string) {
    try {
        if (!slug) throw new Error('Paramater slug kosong')
        const { docs: article } = await getArticleBySlug(slug)
        if (article.length === 0 && !article) return null
        return article[0]
    } catch (error) {
        console.log('Error get article service: ', error)
        return null
    }
}
