import { seedAdmin } from './seeders/admin.seeder'

async function main() {
    try {
        await seedAdmin()
    } catch (error) {
        //   console.log(error)
    } finally {
        process.exit(1)
    }
}
void main()
