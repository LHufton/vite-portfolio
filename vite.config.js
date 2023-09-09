import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy' // Import the legacy plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy()], // Add the legacy plugin
  build: {
    target: 'es2015', // Set the target to es2015
    outDir: 'docs' // Set the output directory to docs instead of dist
  }
})
