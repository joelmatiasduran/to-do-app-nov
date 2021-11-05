import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Init1636032712634 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
