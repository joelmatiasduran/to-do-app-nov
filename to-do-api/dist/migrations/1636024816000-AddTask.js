"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTask1636024816000 = void 0;
class AddTask1636024816000 {
    constructor() {
        this.name = 'AddTask1636024816000';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "description" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "description" SET NOT NULL`);
    }
}
exports.AddTask1636024816000 = AddTask1636024816000;
//# sourceMappingURL=1636024816000-AddTask.js.map