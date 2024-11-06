import PageWrapper from '@/components/common/PageWrapper'
// import { getServerSession } from 'next-auth/next'
// import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Page() {
    // const session = await getServerSession(authOptions)

    return (
        <PageWrapper className="mb-10 gap-5">
            <h1>Protected page</h1>
            {/* <pre>{JSON.stringify({ session }, null, 2)}</pre> */}
        </PageWrapper>
    )
}
