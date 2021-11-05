"use strict";
const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'to-do',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
    logging: true,
    logger: 'file',
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map