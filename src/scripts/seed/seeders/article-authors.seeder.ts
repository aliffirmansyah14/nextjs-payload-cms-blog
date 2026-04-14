import type { Payload } from 'payload'
import { faker } from '@faker-js/faker'
import { ARTICLE_AUTHOR_ROLES } from '@/collections/ArticleAuthors/constants'
import { createMediaFromImageUrl } from '../lib/create-media-from-image-url'

export async function seedArticleAuthor(payload: Payload) {
    try {
        const imageUrl = faker.image.personPortrait({ size: 256 })
        const image = await createMediaFromImageUrl(payload, imageUrl)
        if (!image) {
            console.warn('Stop seeding karen gagal membuat image')
            return
        }
        await payload.create({
            collection: 'article-authors',
            data: {
                avatar: image.id,
                name: faker.person.fullName(),
                role: ARTICLE_AUTHOR_ROLES.STAFF_WRITER,
            },
        })
    } catch (error) {
        console.log(`Error seeding article author : ${JSON.stringify(error, null, 2)}`)
    }
}
