"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1636031909657 = void 0;
class Init1636031909657 {
    constructor() {
        this.name = 'Init1636031909657';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" character varying(64) NOT NULL, "description" character varying(1024), "status" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "task"`);
    }
}
exports.Init1636031909657 = Init1636031909657;
//# sourceMappingURL=1636031909657-Init.js.map