import { faker } from '@faker-js/faker'
import type { Payload } from 'payload'
import { createMediaFromImageUrl } from '../lib/create-media-from-image-url'
import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import config from '@/payload.config'
import { slugify } from 'payload/shared'
import { ARTICLE_STATUS } from '@/collections/Articles/constant'

const ARTICLES_COUNT = 5

export async function seedArticles(payload: Payload) {
    let successSeeded = 0
    for (let index = 1; index <= ARTICLES_COUNT; index++) {
        try {
            const title = faker.lorem.sentence()
            const content = faker.lorem.paragraph(3)
            const contentToLexical = convertMarkdownToLexical({
                markdown: content,
                editorConfig: await editorConfigFactory.default({
                    config: await config,
                }),
            })
            const status = faker.helpers.arrayElement(Object.values(ARTICLE_STATUS))

            const imageUrl = faker.image.urlPicsumPhotos()
            const image = await createMediaFromImageUrl(payload, imageUrl)
            if (!image) {
                console.warn('Stop seeding karen gagal membuat image')
                return
            }
            await payload.create({
                collection: 'articles',
                draft: true,
                data: {
                    title,
                    content: contentToLexical,
                    contentSummary: content.slice(0, 160),
                    coverImage: image.id,
                    author: 1,
                    slug: slugify(title),
                    status,
                    ...(status === 'Published' && {
                        publishedAt: faker.date.recent() as unknown as string,
                    }),
                },
            })
            successSeeded++
        } catch (error) {
            console.log(`Error seeding articles : ${JSON.stringify(error, null, 2)}`)
        }
    }
    console.log('Success seed article count : ', successSeeded)
}
