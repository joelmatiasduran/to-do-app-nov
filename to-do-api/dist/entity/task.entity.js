"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.TaskStatus = void 0;
const typeorm_1 = require("typeorm");
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Created"] = 0] = "Created";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Done"] = 2] = "Done";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
let Task = class Task {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 64 }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 1024 }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: TaskStatus.Created }),
    __metadata("design:type", Number)
], Task.prototype, "status", void 0);
Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
exports.Task = Task;
//# sourceMappingURL=task.entity.js.map