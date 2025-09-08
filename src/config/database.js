export default {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'fantin94#83',
    database: process.env.DB_NAME || 'banco-postgres',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
}