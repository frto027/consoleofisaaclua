//document.getElementById('use_js').remove()
/* language */

/* change the order */
let language = ['zh','en']

/* translate template */
let trans_json = {
    'zh':[
        ['.s_new','新'],
        ['.s_request','申请'],
        ['.s_broken','失效'],
        ['.s_reset','重启'],
        ['.copymark_console','已复制为控制台指令'],
        ['.copymark_lua','已复制为lua'],
        ['.copy_card','复制到控制台'],
        ['.copy_card_lua','复制为lua'],
        ['#request_desc','这个脚本正在请求编写'],
        ['#broken_desc','这个脚本已经失效'],
        ['#reset_desc','在重新启动游戏（或重新开关任意mod）之前，脚本功能不会消失。这是因为部分lua指令会污染游戏的上下文，建议通过重新开关某个mod，或重启游戏程序的方式来进行重置。'],
        ['.reset_card','重置'],
        ['#search_btn','过滤']
    ],
}
let template = $('#template')
for(let i = language.length - 1;i>=0;i--){
    trans_items = trans_json[language[i]]
    if(trans_items){
        for(let item_i = 0;item_i < trans_items.length;item_i++){
            item = trans_items[item_i]
            $(item[0]).text(item[1])
        }
    }
}

//$('#use_js').remove()
$('#js_content').attr('style','')

function onCopyClicked(self){
    console.log(self.parentElement.querySelector('.codes').textContent)
    self.parentElement.querySelector('.codes').select()
    $('.copymark').hide()
    $(self.parentElement.querySelector('.copymark')).show('fast')
}

//let template = $('#template')
let parent_list = template.parent()[0]
template.remove()
template = template[0].outerHTML

//parent_list is element
//template is html

let next_id = 0

function add_elem(data_item){
    id = next_id++
    next_card = $.parseHTML(template)[0]
    next_card.id = 'card_'+id

    //copy
    c_target = next_card.querySelector('.codes')

    c_btn = next_card.querySelector('.copy_card')
    c_btn.cptarget = c_target
    
    //copy lua
    c_lua_btn = next_card.querySelector('.copy_card_lua')
    c_lua_btn.cptarget = c_target


    set_data_item(data_item)
    nq = $(next_card)
    //name
    nq.find('.code_title').text(p('name'))
    //status
    let status = p('status')
    for(let i=0;i<status.length;i++){
        nq.find('.s_'+status[i]).show()
    }
    //desc
    nq.find('.code_desc').html(p('desc'))
    //code
    //it is a textarea, use 'val' instead of 'text'
    nq.find('.codes').val(p('code'))
    //about
    let a = nq.find('.code_ablout')
    a.text(p('about'))
    a.prop('href',p('about_link'))

    /* reset btn */
    let reset_btn = nq.find('.reset_card')
    reset_btn[0].setAttribute('rst_code',p('code'))
    reset_btn[0].setAttribute('rst_target',next_card.id)
    nq.on('click',(e)=>{
        $('#'+e.target.getAttribute('rst_target')).find('.codes').val(e.target.getAttribute('rst_code'))
    })

    parent_list.appendChild(next_card)
}

function clean_elems(){
    $(parent_list).html('')
    next_id = 0
}

/* beg === get data by language */
function set_data_item(it){
    data_item = it
}
function p(prop){
    for(let i=0;i<language.length;i++){
        let x = data_item[prop + '_' + language[i]]
        if(x){
            return x
        }
    }
    return data_item[prop]
}
/* end === get data by language */

let clipboard = new ClipboardJS('.copy_card',{
    text:(trigger)=>{
        return trigger.cptarget.value
    }
})
clipboard.on('success',(e)=>{
    $('.copymark').hide()
    let c_mark = $(e.trigger.parentElement).children('.copymark_console')
    c_mark.show('fast')
})
clipboard.on('error',()=>{
    $('.copymark').hide('fast')
    alert('copy failed')
})


let clipboard_lua = new ClipboardJS('.copy_card_lua',{
    text:(trigger)=>{
        return trigger.cptarget.value.substr(2)
    }
})
clipboard_lua.on('success',(e)=>{
    $('.copymark').hide()
    let c_mark = $(e.trigger.parentElement).children('.copymark_lua')
    c_mark.show('fast')
})
clipboard_lua.on('error',()=>{
    $('.copymark').hide('fast')
    alert('copy failed')
})

//show all element
for(let i=0;i<data.length;i++){
    add_elem(data[i])
}
function keyword_is_match(keyword,keywords){
    keyword = keyword.toLowerCase()
    for(let i=0;i<keywords.length;i++){
        k = keywords[i].toLowerCase()
        if(k.indexOf(keyword) >= 0 || keyword.indexOf(k) >= 0)
            return true
    }
    return false
}
$('#search_input').on('keypress',(e)=>{
    if(e.key=='Enter')
        $('#search_btn').click()
})
$('#search_btn').on('click',()=>{
    clean_elems()
    search_text = $('#search_input').val().split(' ')
    for(let i=0;i<data.length;i++){
        dt = data[i]
        set_data_item(dt)
        keywords = p('keywords')
        matched = true
        for(let j = 0;matched && j<search_text.length;j++){
            if(!keyword_is_match(search_text[j],keywords))
                matched = false
        }
        if(matched){
            add_elem(dt)
        }
    }
})

$('#loading_div').remove()

/* inform index.html */
var script_execute_over