import { Article } from '@/payload-types'
import type { FieldHook } from 'payload'
import { slugify } from 'payload/shared'

export const genereateSlugHook: FieldHook<Article, string> = ({ value, data }): string => {
    if (value) return slugify(value.trim()) || ''
    return slugify(data?.title?.trim() || '') || ''
}
