import {createApp, render } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

//コンポーネントのインスタンスを起動
//アプリはマウントしないとレンダリングされない
createApp(App).use(router).mount('#app')