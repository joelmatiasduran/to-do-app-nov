"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTask1636025089530 = void 0;
class AddTask1636025089530 {
    constructor() {
        this.name = 'AddTask1636025089530';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "description" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "description" SET NOT NULL`);
    }
}
exports.AddTask1636025089530 = AddTask1636025089530;
//# sourceMappingURL=1636025089530-AddTask.js.map