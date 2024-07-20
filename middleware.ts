// Applies NextAuth to app
export { default } from 'next-auth/middleware'

// Applies next-auth to matching routes
export const config = { matcher: ['/dashboard'] }