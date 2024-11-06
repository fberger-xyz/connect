import NextAuth, { NextAuthOptions, Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getCsrfToken } from 'next-auth/react'
import { SiweMessage } from 'siwe'

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Ethereum',
            credentials: {
                message: {
                    label: 'Message',
                    type: 'text',
                    placeholder: '0x0',
                },
                signature: {
                    label: 'Signature',
                    type: 'text',
                    placeholder: '0x0',
                },
            },
            async authorize(credentials, req) {
                try {
                    const siwe = new SiweMessage(JSON.parse(credentials?.message || '{}'))
                    const nextAuthUrl = new URL(String(process.env.NEXTAUTH_URL))
                    const result = await siwe.verify({
                        signature: credentials?.signature || '',
                        domain: nextAuthUrl.host,
                        nonce: await getCsrfToken({ req }),
                    })
                    if (result.success) return { id: siwe.address }
                    return null
                } catch (e) {
                    return null
                }
            },
        }),
    ],
    session: { strategy: 'jwt' },
    secret: String(process.env.NEXTAUTH_SECRET),
    callbacks: {
        async session({ session, token }: { session: Session; token: JWT }) {
            // @ts-expect-error: to fix later
            session.address = token.sub
            // @ts-expect-error: to fix later
            session.user.name = token.sub
            return session
        },
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
