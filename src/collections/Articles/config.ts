import type { CollectionConfig, FieldHook } from 'payload'
import { genereateSlugHook } from './hook/generated-slug-hook'
import { generateSummaryContentHooks } from './hook/generated-summery-content-hook'
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'

export const Articles: CollectionConfig = {
    slug: 'articles',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            hooks: {
                beforeValidate: [genereateSlugHook],
            },
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'contentSummary',
            type: 'textarea',
            hooks: {
                beforeValidate: [generateSummaryContentHooks],
            },
        },
        {
            name: 'readTimeInMins',
            type: 'number',
            defaultValue: 0,
            hooks: {
                beforeChange: [
                    ({ siblingData }) => {
                        // memastikan data agar tidak di store ke db
                        delete siblingData['readTimeInMins']
                    },
                ],
                afterRead: [
                    ({ data }) => {
                        // from data content
                        const text = convertLexicalToPlaintext({
                            data: data?.content,
                        })
                        const wordsPerMinute = 200
                        const words = text.trim().split(/\s+/).length
                        return Math.max(Math.ceil(words / wordsPerMinute))
                    },
                ],
            },
        },
        {
            name: 'coverImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'article-authors',
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            options: ['Draf', 'Published'],
            defaultValue: 'Draf',
            required: true,
        },
        {
            name: 'publishedAt',
            type: 'date',
            required: true,
            admin: {
                // kalo published baru nongol
                condition: (data) => data?.status === 'Published',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
    ],
}
