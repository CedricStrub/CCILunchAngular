interface RolePermissions {
  [key: string]: string[]; // Index signature
}

export const ROLES_PERMISSIONS: RolePermissions = {
  admin: ['Admin', 'Manager', 'Worker', 'User'],
  manager: ['Manager', 'Worker', 'User'],
  worker: ['Worker', 'User'],
  user: ['User']
};