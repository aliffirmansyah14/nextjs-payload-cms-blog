import { getPayloadClient } from '@/lib/payload/client'
import { seedAdmin } from './seeders/admin.seeder'
import { seedArticleAuthor } from './seeders/article-authors.seeder'
import { seedArticles } from './seeders/articles.seeder'

async function main() {
    const payload = await getPayloadClient()
    try {
        await seedAdmin(payload)
        await seedArticleAuthor(payload)
        await seedArticles(payload)
    } catch (error) {
        //   console.log(error)
    } finally {
        process.exit(1)
    }
}
void main()
