import Svg, { Circle, Path, SvgProps } from 'react-native-svg'

export function ErrorRoundIcon({ width = 20, height = 20, fill = 'black', ...rest }: SvgProps) {
	return (
		<Svg width={width} height={height} viewBox="0 0 48 48" fill="none" {...rest}>
			<Circle cx="24" cy="24" r="24" fill={fill} />
			<Path
				d="M15 15.0004L31.2279 31.9996M15.7728 32L32 15"
				stroke="white"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</Svg>
	)
}
