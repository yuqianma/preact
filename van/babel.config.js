module.exports = function(api) {

  api.cache(true);

  const presets = [
      [
          '@babel/preset-env',
          {
              'useBuiltIns': false,
              'loose'      : true,
          }
      ]
  ];
  const plugins = [
      // ['@babel/plugin-proposal-object-rest-spread', {
      //     'loose': true,
      //     // 'useBuiltIns': true
      // }],
      // ['@babel/plugin-proposal-class-properties', {
      //     'loose': true,
      // }],
      ['@babel/plugin-syntax-jsx'],
      ['@babel/plugin-transform-react-jsx', {
          'pragma'     : 'h',
          'pragmaFrag' : 'Fragment',
          'useBuiltIns': true
      }]
  ];

  return {
      presets,
      plugins
  };
};