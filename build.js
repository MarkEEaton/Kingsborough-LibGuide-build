const esbuild = require('esbuild');
const vuePlugin = require('esbuild-plugin-vue3');

esbuild.build({
  entryPoints: ['app.js'],
  logLevel: 'info',
  minify: false,
  bundle: true,
  outfile: './dist/out1.js',
  plugins: [vuePlugin()],
}).catch(() => process.exit(1));
