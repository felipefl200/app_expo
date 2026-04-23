import Svg, { Circle, SvgProps } from 'react-native-svg'

export function CameraClickIcon({ width = 20, height = 20, fill = 'black', ...rest }: SvgProps) {
	return (
		<Svg width={width} height={height} viewBox="0 0 80 80" fill="none" {...rest}>
			<Circle cx="40" cy="40" r="34" fill={fill} />
			<Circle cx="40" cy="40" r="39" stroke="white" strokeWidth="2" />
		</Svg>
	)
}
