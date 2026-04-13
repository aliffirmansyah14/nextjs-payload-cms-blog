import { createEnv } from '@t3-oss/env-nextjs'
import * as z from 'zod'

export const env = createEnv({
    server: {
        ADMIN_EMAIL: z.email(),
        ADMIN_PASSWORD: z.string().min(1),
    },
    client: {},
    runtimeEnv: {
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    },
})
