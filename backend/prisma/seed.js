import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const commands = [
        { name: 'Cache clean',          value: 'php bin/magento cache:clean' },
        { name: 'Cache flush',          value: 'php bin/magento cache:flush' },
        { name: 'Reindex',              value: 'php bin/magento indexer:reindex' },
        { name: 'Upgrade',              value: 'php bin/magento setup:upgrade' },
        { name: 'Recompile',            value: 'php bin/magento setup:di:compile' },
        { name: 'Zero Downtime Deploy', value: 'php bin/magento magefan:zero-downtime:deploy' },
        { name: 'Raw output',           value: 'php bin/magento list --raw' }
    ];

    await loadInitialCommands(commands);

    console.log('Seeding complete!');
}

const loadInitialCommands = (commands) => {
    const promises = commands.map(async (c) => {
        return prisma.command.upsert({
            where: { name: c.name },
            update: {},
            create: {
                name:  c.name,
                value: c.value
            }
        })
    });

    return Promise.all(promises);
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
