import { IconIds } from '@/enums'
import CarbonSun from '../icons/carbonSun.icon'
import MdiWeatherNight from '../icons/mdi.weather.night.icon'
import IconWrapper from './IconWrapper'
import DegenIcon from '../icons/degen.icon'
import SafeSVG from '../icons/safe.logo'
import DefiSaverSVG from '../icons/defiSaver.logo'
import AaveSVG from '../icons/aave.logo'
import OneInchSVG from '../icons/1inch.logo'
import CowSwapSVG from '../icons/cowSwap.logo'
import OnChainDenSVG from '../icons/onchainDen.logo'
import DebankSVG from '../icons/debankSvg.logo'
import ZerionSVG from '../icons/zerionSvg.logo'
import MorphoSVG from '../icons/morpho.logo'
import ZapperSVG from '../icons/zapperSvg.logo'

export default function SvgMapper(props: { icon: IconIds; className?: string }) {
    if (props.icon === IconIds.THEME_LIGHT) return <CarbonSun className={props.className} />
    if (props.icon === IconIds.THEME_DARK) return <MdiWeatherNight className={props.className} />
    if (props.icon === IconIds.THEME_DEGEN) return <DegenIcon className={props.className} />
    if (props.icon === IconIds.SAFE) return <SafeSVG className={props.className} />
    if (props.icon === IconIds.DEFI_SAVER) return <DefiSaverSVG className={props.className} />
    if (props.icon === IconIds.AAVE) return <AaveSVG className={props.className} />
    if (props.icon === IconIds.MORPHO) return <MorphoSVG className={props.className} />
    if (props.icon === IconIds.ONEINCH) return <OneInchSVG className={props.className} />
    if (props.icon === IconIds.COWSWAP) return <CowSwapSVG className={props.className} />
    if (props.icon === IconIds.ONCHAINDEN) return <OnChainDenSVG className={props.className} />
    if (props.icon === IconIds.DEBANK) return <DebankSVG className={props.className} />
    if (props.icon === IconIds.ZERION) return <ZerionSVG className={props.className} />
    if (props.icon === IconIds.ZAPPER) return <ZapperSVG className={props.className} />
    return <IconWrapper icon={props.icon} className={props.className} />
}
