export interface UserResponse {
  aud: string; // Audience
  iss: string; // Issuer
  iat: number; // Issued At
  nbf: number; // Not Before
  exp: number; // Expiration Time
  acct: number; // Account type
  ctry: string; // Country
  email: string; // Email
  family_name: string; // Family Name
  given_name: string; // Given Name
  login_hint: string; // Login Hint
  name: string; // Full Name
  oid: string; // Object ID
  preferred_username: string; // Preferred Username
  rh: string; // Refresh Token
  roles: string[]; // Roles
  sub: string; // Subject
  tid: string; // Tenant ID
  upn: string; // User Principal Name
  uti: string; // Unique Token Identifier
  ver: string; // Token Version
}

export interface SimpleUserDto {
  name: string;
  email: string;
  roles: string[];
}
