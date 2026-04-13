import { getPayload } from 'payload'
import config from '@/payload.config'
import { isDuplicateError } from '../lib/helper/is-duplicate-error'
import { env } from '@/lib/env'

export async function seedAdmin() {
    const payload = await getPayload({
        config,
    })
    try {
        const response = await payload.create({
            collection: 'users',
            data: {
                email: env.ADMIN_EMAIL,
                password: env.ADMIN_PASSWORD,
            },
        })
        console.log('Admin user created ', response)
    } catch (error) {
        if (isDuplicateError(error, 'email')) {
            console.log('User already exist')
        } else {
            console.log(`Error seeding admin user : ${JSON.stringify(error, null, 2)}`)
        }
    }
}
