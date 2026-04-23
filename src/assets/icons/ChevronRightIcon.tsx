import Svg, { Path, SvgProps } from 'react-native-svg'

export function ChevronRightIcon({ width = 20, height = 20, fill = 'black', ...rest }: SvgProps) {
	return (
		<Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...rest}>
			<Path
				d="M7 4L14 10L7 16"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}
