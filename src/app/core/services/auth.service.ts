import { Injectable } from '@angular/core';
import { ROLES_PERMISSIONS } from '../services/roles-permissions.model'; // Path to your Roles and Permissions

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Simulated current user roles
  currentUserRoles: string[] = ['admin']; // Example: User with an 'editor' role
  
  constructor() {}

  // Check if the current user has a specific permission
  hasPermission(permission: string): boolean {
    return this.currentUserRoles.some(role => 
      ROLES_PERMISSIONS[role]?.includes(permission)
    );
  }

  isConnected(): boolean {
    return this.currentUserRoles.some(role => 
      ROLES_PERMISSIONS[role]?.length > 0
    );
  }
}
