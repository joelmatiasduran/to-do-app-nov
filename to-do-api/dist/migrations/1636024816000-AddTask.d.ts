import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddTask1636024816000 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
