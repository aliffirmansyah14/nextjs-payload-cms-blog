import { faker } from '@faker-js/faker'
import type { Payload } from 'payload'

export async function createMediaFromImageUrl(payload: Payload, imageUrl: string) {
    try {
        //   fetch image buat dapetin buffer dan info bufferfile
        const res = await fetch(imageUrl)
        const arrBuffer = await res.arrayBuffer()
        const buffer = Buffer.from(arrBuffer)

        const mimeType = res.headers.get('content-type') || 'image/jpg'
        const fileSize = buffer.length
        const filename = res.url.split('/').pop()?.split('?')[0]

        if (!filename) throw new Error('Failed to extract filename')
        return await payload.create({
            collection: 'media',
            draft: true,
            data: {
                alt: faker.lorem.word(3),
            },
            file: {
                data: buffer,
                name: filename,
                size: fileSize,
                mimetype: mimeType,
            },
        })
    } catch (error) {
        console.warn('failed to create media ', error)
    }
}
