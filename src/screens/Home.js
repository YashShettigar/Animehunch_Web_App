import React from 'react'
import { WebView } from 'react-native-webview'
 
export default () => {
    return (
        <WebView 
            source={{uri: 'https://digiswag.tech/'}} 
        />
    )
}