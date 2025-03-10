# nextjs-zitadel-example

Features
- NextJS 15
- NextAuth v5
- NextAuth Custom Sign In Page
- JWT ID token

## Zitadel Settings

### OIDC Configuration
- pkce workflow
- enable refresh token

### Redirect Settings
- enable development mode
- redirect-uris: http://localhost:3000/api/auth/callback/zitadel

### Token Settings
- auth-token type: JWT
- user-info inside id token: true


## env.local

```
AUTH_SECRET="fCI0qjkinX8hCf3vPEdDkw5OwkyB84BZjZT4g+/bzYg="

# referring to the nextjs project settings+structure
AUTH_URL=http://localhost:3000/api/auth
AUTH_TRUST_HOST=http://localhost:3000

# referring to the zitadel instance+config
AUTH_ZITADEL_ISSUER=http://localhost:8080
AUTH_ZITADEL_ID=310549363556417795
```
