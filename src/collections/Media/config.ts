import type { CollectionConfig } from 'payload'
import { generateBlurDataUrl, isEligableForBlurDataUrl } from './lib/generate-blur-data-url'

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'blurDataUrl',
            type: 'text',
            required: true,
            admin: {
                hidden: true,
            },
        },
    ],
    hooks: {
        beforeChange: [
            async ({ data, operation, req }) => {
                if (operation !== 'create') return data
                // check apakah file typenya sesuai
                if (!isEligableForBlurDataUrl(req.file?.mimetype)) return data

                // tambahkan blur hash disiini sebelum store didb
                const base64 = await generateBlurDataUrl(req.file?.data)
                if (!base64) return data
                data.blurDataUrl = base64
                //  data.blur = req.file.name
                return data
            },
        ],
    },
    upload: true,
}
