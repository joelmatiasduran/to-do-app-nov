"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTask1636025757254 = void 0;
class AddTask1636025757254 {
    constructor() {
        this.name = 'AddTask1636025757254';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" character varying(64) NOT NULL, "description" character varying(1024), "status" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "task"`);
    }
}
exports.AddTask1636025757254 = AddTask1636025757254;
//# sourceMappingURL=1636025757254-AddTask.js.map