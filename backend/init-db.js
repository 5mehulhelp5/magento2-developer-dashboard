// backend/init-db.js
import { execSync } from 'child_process';

try {
    console.log('Running Prisma migrations...');
    execSync('npx prisma migrate deploy', { stdio: 'inherit' });
    console.log('Migrations applied successfully');
} catch (error) {
    console.error('Failed to apply migrations:', error);
    process.exit(1);
}
