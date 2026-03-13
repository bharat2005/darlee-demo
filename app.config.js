import dotenv from 'dotenv'

dotenv.config()

export default {
  "expo": {
    "name": "darlee",
    "slug": "darlee",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "darlee",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/icon.png",
        "backgroundColor": "#8c52ff"
      },
      "edgeToEdgeEnabled": true,
      "package": "com.bharat2005.darlee"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#8c52ff"
        }
      ],
      "expo-font",
      "expo-video"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "GEMINI_API_KEY": process.env.GEMINI_API_KEY,
      "router": {},
      "eas": {
        "projectId": "105881c8-bf3d-4c8c-a65f-27868f4f5317"
      }
    }
  }
}
