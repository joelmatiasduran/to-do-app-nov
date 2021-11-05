import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Init1636031909657 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
