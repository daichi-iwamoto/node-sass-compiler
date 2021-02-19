const fs = require('fs')
const sass = require('sass')

// コンパイル前のsassのpath
let srcPath = process.argv[2]

// コンパイル後のcssのpath
let distPath = srcPath.replace(/src/g, 'dist')
distPath = distPath.replace(/scss/g, 'css')
distPath = './' + distPath.replace(/\\/g, '/')

sass.render({
  file: srcPath,
  sourceMap: false
}, (err, result) => {
  if (err) { 
    console.log('sass compile module err (´･ω･`)!')
    throw err
  }

  // cssファイル作成処理
  fs.writeFileSync(distPath, result.css, (err) => {
    if (err) { 
      console.log('fs module err (´･ω･`)!')
      throw err
    }
  })
  console.log('finish compiled (´-ω-`)!')
})