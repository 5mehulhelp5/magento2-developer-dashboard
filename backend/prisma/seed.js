import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.command.createMany({
        data: [
            { name: 'Cache clean', value: 'php bin/magento cache:clean' },
            { name: 'Cache flush', value: 'php bin/magento cache:flush' },
        ],
    });
    console.log('Seeding complete!');
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect()
        process.exit(1);
    });
