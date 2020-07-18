/**
 * node rm_gen.js
 */

const fs = require('fs')

/* include data */
eval(fs.readFileSync('./data.js',{
    encoding:'utf8'
}) + '')

header = `
## It is just a game

此Readme文件通过\`rm_gen.js\`自动生成。  
建议[点击下载](https://github.com/frto027/consoleofisaaclua/archive/master.zip)离线版，点击\`index.html\`文件打开。
`

data.forEach(data_item => {
    read = (name) => data_item[name+'_zh'] || data_item[name+'_en']||data_item[name]
    
    header += '\n\n-----\n\n'

    header += `### ${read('name')}\n`
    header += read('desc') + '\n'
    header += `\`\`\`\n${read('code') || '暂无'}\n\`\`\`\n`
    //header += `作者信息：[${read('about')}](${read('about_link')})\n`
    
});

fs.writeFileSync('Readme.md',header,{encoding:'utf8'})