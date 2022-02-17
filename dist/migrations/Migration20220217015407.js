"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220217015407 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220217015407 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null);');
    }
    async down() {
        this.addSql('drop table if exists "post" cascade;');
    }
}
exports.Migration20220217015407 = Migration20220217015407;
//# sourceMappingURL=Migration20220217015407.js.map