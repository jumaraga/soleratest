import { DataSource } from 'typeorm'

const dataSource = new DataSource({
    type: 'mysql',
    host: 'movistardb.cjcmv3tc2pyq.us-east-1.rds.amazonaws.com',
    port: 3306,
    password: 'interview123',
    username: 'interview',
    database: 'interview_db',
});
async function connectDB() {
    try {
        await dataSource.initialize();
        console.log("connection to database success");
    } catch (e) {
        console.log(`ERROR: connection fail: ${e}`);
    }
}
async function find(){
return await dataSource.query(/* sql */`SELECT * FROM Users`)
}
export { connectDB, find }