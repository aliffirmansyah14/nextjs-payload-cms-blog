import type { CollectionConfig } from 'payload'
import { ARTICLE_AUTHOR_ROLES } from './constants'

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
            options: Object.values(ARTICLE_AUTHOR_ROLES),
            defaultValue: ARTICLE_AUTHOR_ROLES.STAFF_WRITER,
            required: true,
        },
    ],
}
