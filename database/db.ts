import { DataSource } from 'typeorm'
import { envConfig } from '../config';

const dataSource = new DataSource({
    type: 'mysql',
    host: envConfig.database.host,
    port: envConfig.database.port,
    password: envConfig.database.password,
    username: envConfig.database.username,
    database: envConfig.database.database,
});
async function connectDB() {
    try {
        await dataSource.initialize();
        console.log("connection to database success");
    } catch (e) {
        console.log(`ERROR: connection fail: ${e}`);
    }
}
async function find() {
    return await dataSource.query(/* sql */`SELECT * FROM Users`)
}
async function findOne(table: string, where: string) {
    return (await dataSource.query(/* sql */`SELECT * FROM ${table} where ${where}`))[0];
}
export { connectDB, find, findOne }