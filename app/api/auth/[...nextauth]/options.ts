import type { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username:',
                    type: 'text',
                    placeholder: 'Enter your username'
                },
                password: {
                    label: 'Password:',
                    type: 'password',
                    placeholder: 'Enter your password',
                }
            },
            async authorize(credentials) {
                // Retrieve user credentials from database
                const user = { id: '1', name: 'Faris', password: 'farisd'}

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "api/auth/signin"
    }
    /*
        adapter: FirestoreAdapter({
            credential: cert({
            projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
            clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
            }),
        }),
    */
}

// https://www.youtube.com/watch?v=w2h54xz6Ndw&t=910s