import { Box } from '@/components'
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { Text } from '@/components/Text/Text'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
	const [visible, setVisible] = useState(false)
	return (
		<SafeAreaView>
			<Text preset="headingLarge" style={{ color: 'green' }}>
				Projeto Expo!
			</Text>
			<Text preset="paragraphSmall" style={{ color: 'red' }}>
				Projeto Expo!
			</Text>
			<Text preset="headingLarge" style={{ color: 'orange' }}>
				HeadingMedium bold!
			</Text>

			<Button title="Primary" marginBottom="s24" />
			<Button title="Outline" preset="outline" marginBottom="s24" />
			<Button title="Disabled" disabled marginBottom="s24" />
			<Button title="Gray" preset="gray" marginBottom="s24" />

			<Button loading title="Carregando..." marginBottom="s24" />
			<Button title="Carregando..." />
			<Box style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
				<Icon name="eyeOn" color="primary" size={24} />
				<Icon name="eyeOff" color="primary" size={24} />
				<Icon name="arrowLeft" color="primary" size={24} />
				<Icon name="arrowRight" color="primary" size={24} />
				<Icon name="bell" color="primary" size={24} />
				<Icon name="bellOn" color="primary" size={24} />
				<Icon name="chat" color="primary" size={24} />
				<Icon name="chatOn" color="primary" size={24} />
				<Icon name="check" color="primary" size={24} />
				<Icon name="checkRound" color="primary" size={24} />
				<Icon name="chevronRight" color="primary" size={24} />
				<Icon name="comment" color="primary" size={24} />
				<Icon name="errorRound" color="primary" size={24} />
				<Icon name="flashOff" color="primary" size={24} />
				<Icon name="flashOn" color="primary" size={24} />
				<Icon name="heart" color="primary" size={24} />
				<Icon name="heartFill" color="primary" size={24} />
				<Icon name="home" color="primary" size={24} />
				<Icon name="homeFill" color="primary" size={24} />
				<Icon name="message" color="primary" size={24} />
				<Icon name="messageRound" color="primary" size={24} />
				<Icon name="newPost" color="primary" size={24} />
				<Icon name="profile" color="primary" size={24} />
				<Icon name="profileFill" color="primary" size={24} />
				<Icon name="search" color="primary" size={24} />
				<Icon name="settings" color="primary" size={24} />
				<Icon name="trash" color="primary" size={24} />
			</Box>
		</SafeAreaView>
	)
}
