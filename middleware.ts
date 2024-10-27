// Applies NextAuth to app
// Thank you https://stackoverflow.com/a/77457173
import { withAuth } from "next-auth/middleware";


export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      // verify token and return a boolean
      const sessionToken = req.cookies.get("next-auth.session-token");
      if (sessionToken) return true;
      else return false;
    },
  },
});

// Applies next-auth to matching routes
export const config = { matcher: ['/dashboard', '/start', '/feed'] }
