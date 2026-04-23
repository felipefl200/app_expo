import { useAppTheme } from '@/hooks/useAppTheme'
import { ThemeColors } from '@/theme'
import { SvgProps } from 'react-native-svg'

import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '../../assets/icons/ArrowRightIcon'
import { BellIcon } from '../../assets/icons/BellIcon'
import { BellOnIcon } from '../../assets/icons/BellOnIcon'
import { BookmarkFillIcon } from '../../assets/icons/BookmarkFillIcon'
import { BookmarkIcon } from '../../assets/icons/BookmarkIcon'
import { CameraClickIcon } from '../../assets/icons/CameraClickIcon'
import { CameraIcon } from '../../assets/icons/CameraIcon'
import { ChatIcon } from '../../assets/icons/ChatIcon'
import { ChatOnIcon } from '../../assets/icons/ChatOnIcon'
import { CheckIcon } from '../../assets/icons/CheckIcon'
import { CheckRoundIcon } from '../../assets/icons/CheckRoundIcon'
import { ChevronRightIcon } from '../../assets/icons/ChevronRightIcon'
import { CommentIcon } from '../../assets/icons/CommentIcon'
import { ErrorRoundIcon } from '../../assets/icons/ErrorRoundIcon'
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon'
import { EyeOnIcon } from '../../assets/icons/EyeOnIcon'
import { FlashOffIcon } from '../../assets/icons/FlashOffIcon'
import { FlashOnIcon } from '../../assets/icons/FlashOnIcon'
import { HeartFillIcon } from '../../assets/icons/HeartFillIcon'
import { HeartIcon } from '../../assets/icons/HeartIcon'
import { HomeFillIcon } from '../../assets/icons/HomeFillIcon'
import { HomeIcon } from '../../assets/icons/HomeIcon'
import { MessageIcon } from '../../assets/icons/MessageIcon'
import { MessageRoundIcon } from '../../assets/icons/MessageRoundIcon'
import { NewPostIcon } from '../../assets/icons/NewPostIcon'
import { ProfileFillIcon } from '../../assets/icons/ProfileFillIcon'
import { ProfileIcon } from '../../assets/icons/ProfileIcon'
import { SearchIcon } from '../../assets/icons/SearchIcon'
import { SettingsIcon } from '../../assets/icons/SettingsIcon'
import { TrashIcon } from '../../assets/icons/TrashIcon'

const iconRegistry = {
	arrowLeft: ArrowLeftIcon,
	arrowRight: ArrowRightIcon,
	bell: BellIcon,
	bellOn: BellOnIcon,
	bookmark: BookmarkIcon,
	bookmarkFill: BookmarkFillIcon,
	camera: CameraIcon,
	cameraClick: CameraClickIcon,
	chat: ChatIcon,
	chatOn: ChatOnIcon,
	check: CheckIcon,
	checkRound: CheckRoundIcon,
	chevronRight: ChevronRightIcon,
	comment: CommentIcon,
	errorRound: ErrorRoundIcon,
	eyeOff: EyeOffIcon,
	eyeOn: EyeOnIcon,
	flashOff: FlashOffIcon,
	flashOn: FlashOnIcon,
	heart: HeartIcon,
	heartFill: HeartFillIcon,
	home: HomeIcon,
	homeFill: HomeFillIcon,
	message: MessageIcon,
	messageRound: MessageRoundIcon,
	newPost: NewPostIcon,
	profile: ProfileIcon,
	profileFill: ProfileFillIcon,
	search: SearchIcon,
	settings: SettingsIcon,
	trash: TrashIcon,
} as const

export type IconName = keyof typeof iconRegistry

interface IconProps extends SvgProps {
	name: IconName
	color?: ThemeColors
	size?: number
}

export function Icon({ name, size = 20, color = 'primaryContrast', ...rest }: IconProps) {
	const IconComponent = iconRegistry[name]
	const { colors } = useAppTheme()

	return <IconComponent width={size} height={size} fill={colors[color]} {...rest} />
}
