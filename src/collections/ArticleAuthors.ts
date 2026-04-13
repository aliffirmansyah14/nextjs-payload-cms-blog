import type { CollectionConfig } from 'payload'

export const ArticleAuthors: CollectionConfig = {
    slug: 'article-authors',
    fields: [
        {
            name: 'name',
            type: 'text',
            unique: true,
            required: true,
        },
        {
            name: 'avatar',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'role',
            type: 'select',
            options: ['Staff Writer', 'Guest Writer', 'Flo rida', 'Contributor', 'Editor'],
            defaultValue: 'Staff Writer',
            required: true,
        },
    ],
}
