import { SupportedApps } from '@/enums'
import { SupportedAppConfig, SupportedChainConfig } from '@/interfaces'

export const linkForChainAppAndAddress = (chain: SupportedChainConfig, app: SupportedAppConfig, address: string) => {
    // own
    if (app.id === SupportedApps.SAFE) return `https://app.safe.global/balances?safe=${chain.gnosisPrefix}:${address}`
    if (app.id === SupportedApps.REVOKE)
        return `https://app.safe.global/apps/open?safe=${chain.gnosisPrefix}:${address}&appUrl=https%3A%2F%2Frevoke.cash%2F`
    if (app.id === SupportedApps.ONCHAINDEN) return app.socialProfiles.find((profile) => profile.platform === 'WEBSITE')?.url ?? '/'

    // lend
    if (app.id === SupportedApps.AAVE)
        return `https://app.safe.global/apps/open?safe=${chain.gnosisPrefix}:${address}&appUrl=https%3A%2F%2Fapp.aave.com`
    if (app.id === SupportedApps.MORPHO)
        return `https://app.safe.global/apps/open?safe=${chain.gnosisPrefix}:${address}&appUrl=https%3A%2F%2Fsafe-app.morpho.org%2F`

    // trade
    if (app.id === SupportedApps.DEFI_SAVER)
        return `https://app.safe.global/apps/open?safe=${chain.gnosisPrefix}:${address}&appUrl=https%3A%2F%2Fapp.defisaver.com`
    if (app.id === SupportedApps.COWSWAP)
        return `https://app.safe.global/apps/open?safe=${chain.gnosisPrefix}:${address}&appUrl=https%3A%2F%2Fswap.cow.fi`
    if (app.id === SupportedApps.ONEINCH)
        return `https://app.safe.global/apps/open?safe=${chain.gnosisPrefix}:${address}&appUrl=https%3A%2F%2Fapp.1inch.io`

    // track
    if (app.id === SupportedApps.DEBANK) return `https://debank.com/profile/${address}`
    if (app.id === SupportedApps.ZERION)
        return `https://app.safe.global/apps/open?safe=${chain.gnosisPrefix}:${address}&appUrl=https%3A%2F%2Fapp.zerion.io`
    if (app.id === SupportedApps.ZAPPER) return `https://zapper.xyz/fr/account/${address}`

    // -
    return '/'
}
