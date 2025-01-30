/* eslint-disable no-undef */
import mysql from 'mysql2/promise';

export const handler = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,  // RDS endpoint (e.g., xxxxxx.rds.amazonaws.com)
        user: process.env.DB_USER,  // RDS username
        password: process.env.DB_PASSWORD, // RDS password
        database: process.env.DB_NAME, // RDS database name
        port: 3306, // MySQL default port
    });

    try {
        // Run a simple query to test the connection
        const [rows] = await connection.execute('SELECT NOW() AS current_time');
        console.log('Connected to MySQL:', rows[0]);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Successfully connected to MySQL!',
                timestamp: rows[0].current_time,
            }),
        };
    } catch (err) {
        console.error('MySQL Connection Failed:', err);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to connect to MySQL' }),
        };
    } finally {
        await connection.end(); // Close the database connection
    }
};
