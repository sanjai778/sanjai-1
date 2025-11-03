import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Fetching database schema information...');

    // 1. Show current database
    const dbResult: any[] = await prisma.$queryRaw`SELECT DATABASE() as \`database\`;`;
    const dbName = dbResult[0].database;
    console.log(`\nDatabase: ${dbName}`);

    // 2. Show tables
    const tablesResult: any[] = await prisma.$queryRaw`SHOW TABLES;`;
    const tablesKey = `Tables_in_${dbName}`;
    const tables = tablesResult.map((row: any) => row[tablesKey]);
    
    console.log('\nTables:');
    console.table(tables);

    // 3. Show columns for each table
    for (const table of tables) {
      console.log(`\n--- Columns for table: ${table} ---`);
      const columnsResult: any[] = await prisma.$queryRawUnsafe(`DESCRIBE \`${table}\`;`);
      console.table(columnsResult);
    }

  } catch (e) {
    console.error('An error occurred while fetching the schema:');
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
