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
你可以在线访问本项目的[gitee pages](http://frto027.gitee.io/consoleofisaaclua)或[github pages](https://frto027.github.io/consoleofisaaclua)  
建议[从gitee](https://gitee.com/frto027/consoleofisaaclua/repository/archive/master.zip)或[从github](https://github.com/frto027/consoleofisaaclua/archive/master.zip)下载离线版，解压后打开\`index.html\`。
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