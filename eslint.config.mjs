// eslint.config.mjs
// https://github.com/antfu/eslint-config
import antfu from '@antfu/eslint-config'

export default antfu({
  solid: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
})
