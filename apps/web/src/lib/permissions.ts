import { createAccessControl } from "better-auth/plugins/access";
import { adminAc, defaultStatements } from "better-auth/plugins/admin/access";

const statement = {
  ...defaultStatements,
  project: ["create", "share", "update", "delete"],
} as const;

const ac = createAccessControl(statement);

const user = ac.newRole({
  project: ["create"],
});

const admin = ac.newRole({
  project: ["create", "update"],
  ...adminAc.statements,
});

const myCustomRole = ac.newRole({
  project: ["create", "update", "delete"],
  user: ["ban"],
});

export { ac, admin, myCustomRole, user };
