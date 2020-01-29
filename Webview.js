import React from 'react'
import { WebView } from 'react-native-webview'

const Webview = () => {
	return (
		<WebView
			source={{ uri: 'http://www.skct.edu.in/' }}
      style={{ marginTop: 20 }}
      scalesPageToFit
      javaScriptEnabled
      domStorageEnabled
      startInLoadingState
      mixedContentMode="always"
      
		/>
	)
}

export default Webview
