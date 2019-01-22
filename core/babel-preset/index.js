module.exports = () => {
  return {
    presets: [require('@babel/preset-env'), require('@babel/preset-react')],
    plugins: [require('@babel/plugin-proposal-object-rest-spread'), require('@babel/plugin-proposal-class-properties')],
  }
}
