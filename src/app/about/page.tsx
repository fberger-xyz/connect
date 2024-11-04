import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'

export default function Page() {
    return (
        <PageWrapper>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-8">
                <LinkWrapper
                    target="_blank"
                    href={`https://${APP_METADATA.SITE_AUTHOR}.xyz/projects/connect-rabby`}
                    className=" flex gap-1 text-default hover:text-primary"
                >
                    <p>{APP_METADATA.SITE_DESCRIPTION}</p>
                </LinkWrapper>
            </div>
        </PageWrapper>
    )
}
