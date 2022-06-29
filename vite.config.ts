import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import react from '@vitejs/plugin-react'
import axios from 'axios'

const generateThumbPlugin = () => {
    return {
        name: 'generate-thumb',
        async transformIndexHtml(html: string) {
            const request = await axios.get('https://api.atlasacademy.io/export/JP/basic_equip_lang_en.json')
            const response = request.data
            const thumb = response.pop().face
            return html.replace(/\{face\}/, thumb.replace('.png', '_bordered.png'))
        },
    }
}

export default defineConfig({
    plugins: [react(), VitePWA({}), generateThumbPlugin()],
})
