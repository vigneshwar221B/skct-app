import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
	SafeAreaView,
  ActivityIndicator,
  Image
} from 'react-native'

import Webview from './Webview'

export default function App() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
      console.log('hi');
      
			setLoading(state => false)
		}, 5000)
	}, [])
	return (
		<>
			{loading ? (
				<SafeAreaView style={styles.container}>
          <Image resizeMode={"center"} style={styles.img} source={require('./assets/skct.png')} />
					<ActivityIndicator size='large' color='#00ff00' />
				</SafeAreaView>
			) : (
				<Webview />
			)}
		</>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
  },
  img:{
    height: 500,
    width: 400,
    marginBottom: 30
  }
})
