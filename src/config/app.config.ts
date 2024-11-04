import { SupportedChains, AppThemes, IconIds, SupportedApps, SupportedAppsCategories, SupportedSocials } from '@/enums'
import { SupportedAppConfig, SupportedChainConfig } from '@/interfaces'

export const APP_METADATA = {
    SITE_AUTHOR: 'fberger',
    SITE_NAME: 'safes-trades',
    SITE_INFO: 'SITE_INFO',
    SITE_DESCRIPTION: 'One linktree to manage your safes',
    SITE_URL: 'https://safes-trades.vercel.app/',
    SOCIALS: {
        TWITTER: 'fberger_xyz',
        TELEGRAM: 'fberger_xyz',
        LINKEDIN: 'francis-berger-a2404094',
    },
}

export const APP_THEMES: Partial<Record<AppThemes, { index: number; iconId: IconIds }>> = {
    [AppThemes.LIGHT]: { index: 0, iconId: IconIds.THEME_LIGHT },
    [AppThemes.DARK]: { index: 1, iconId: IconIds.THEME_DARK },
}

/**
 * specific
 */

export const chainsConfig: Record<SupportedChains, SupportedChainConfig> = {
    [SupportedChains.ETH]: { index: 1, id: SupportedChains.ETH, gnosisPrefix: 'eth' },
    [SupportedChains.ARBITRUM]: { index: 2, id: SupportedChains.ARBITRUM, gnosisPrefix: 'arb' },
    [SupportedChains.BASE]: { index: 3, id: SupportedChains.BASE, gnosisPrefix: 'base' },
    [SupportedChains.GNOSIS]: { index: 4, id: SupportedChains.GNOSIS, gnosisPrefix: 'gno' },
}

export const supportedCategoriesConfig: { name: SupportedAppsCategories; apps: SupportedAppConfig[] }[] = [
    {
        name: SupportedAppsCategories.OWN,
        apps: [
            {
                id: SupportedApps.SAFE,
                svg: IconIds.SAFE,
                name: 'Safe',
                iconUrl: 'https://pbs.twimg.com/profile_images/1643941027898613760/gyhYEOCE_400x400.jpg',
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/safe',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://app.safe.global',
                    },
                ],
            },
            {
                id: SupportedApps.REVOKE,
                svg: undefined,
                name: 'Revoke',
                iconUrl: 'https://safe-transaction-assets.safe.global/safe_apps/88/icon.png',
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: '',
                    },
                ],
            },
            {
                id: SupportedApps.ONCHAINDEN,
                svg: undefined,
                name: 'Onchain Den',
                iconUrl: 'https://pbs.twimg.com/profile_images/1838330609543880704/55neQ_sj_400x400.png',
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/OnChainDen',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://www.onchainden.com/',
                    },
                ],
            },
        ],
    },
    {
        name: SupportedAppsCategories.LEND,
        apps: [
            {
                id: SupportedApps.AAVE,
                svg: IconIds.AAVE,
                name: 'Aave',
                iconUrl: 'https://pbs.twimg.com/profile_images/1808921860781821952/CmtvkzWo_400x400.png',
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: 'https://discord.com/invite/CvKUrqM',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: 'https://github.com/aave',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://twitter.com/aaveaave',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://app.aave.com',
                    },
                ],
            },
            {
                id: SupportedApps.MORPHO,
                svg: IconIds.MORPHO,
                name: 'Morpho',
                iconUrl: 'https://pbs.twimg.com/profile_images/1712024635590455296/ksuEkiF7_400x400.jpg',
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: 'https://discord.com/invite/BWXbJMHMdz/',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: 'https://github.com/morpho-org',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/MorphoLabs',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://app.morpho.org/',
                    },
                ],
            },
        ],
    },
    {
        name: SupportedAppsCategories.TRADE,
        apps: [
            {
                id: SupportedApps.COWSWAP,
                svg: IconIds.COWSWAP,
                name: 'CoW Swap',
                iconUrl: 'https://pbs.twimg.com/profile_images/1805606768266924032/nzzLCHXW_400x400.jpg',
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: 'https://discord.com/invite/cowprotocol',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: 'https://github.com/cowprotocol',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://twitter.com/CoWSwap',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://swap.cow.fi',
                    },
                ],
            },
            {
                id: SupportedApps.ONEINCH,
                svg: IconIds.ONEINCH,
                name: '1inch',
                iconUrl: 'https://pbs.twimg.com/profile_images/1803771489025470466/JSzaEa9X_400x400.jpg',
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/1inch',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://app.1inch.io/',
                    },
                ],
            },
            {
                id: SupportedApps.DEFI_SAVER,
                svg: IconIds.DEFI_SAVER,
                name: 'DeFi Saver',
                iconUrl: 'https://pbs.twimg.com/profile_images/1717844708083347456/02FNBrqO_400x400.jpg',
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: 'https://discord.com/invite/XGDJHhZ',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: 'https://github.com/defisaver/defisaver-v3-contracts',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/DeFiSaver',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://defisaver.com/',
                    },
                ],
            },
        ],
    },
    {
        name: SupportedAppsCategories.TRACK,
        apps: [
            {
                id: SupportedApps.DEBANK,
                svg: IconIds.DEBANK,
                name: 'Debank',
                iconUrl: 'https://pbs.twimg.com/profile_images/1414880725921267716/YzVitob7_400x400.jpg',
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/DeBankDeFi',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://debank.com/',
                    },
                ],
            },
            {
                id: SupportedApps.ZERION,
                svg: IconIds.ZERION,
                name: 'Zerion',
                iconUrl: 'https://pbs.twimg.com/profile_images/1639841598648512515/RXG5M-pv_400x400.jpg',
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/zerion',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://app.zerion.io',
                    },
                ],
            },
            {
                id: SupportedApps.ZAPPER,
                svg: IconIds.ZAPPER,
                name: 'Zapper',
                iconUrl: 'https://pbs.twimg.com/profile_images/1681396816737181707/MZVvpTPr_400x400.jpg',
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/zapper_fi',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://zapper.xyz',
                    },
                ],
            },
        ],
    },
]
