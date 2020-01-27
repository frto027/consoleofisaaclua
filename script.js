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
        ['.copymark','已复制'],
        ['.copy_card','复制'],
        ['#request_desc','这个脚本正在请求编写'],
        ['#broken_desc','这个脚本已经失效'],
        ['#reset_desc','在重新启动游戏之前，脚本功能不会消失。部分lua指令会污染游戏的上下文，建议通过重启游戏程序的方式来进行重置。'],
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

$('#use_js').remove()

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
    c_target.id = 'copy_target_'+id
    c_btn.setAttribute("data-clipboard-target", '#' + c_target.id)

    c_mark = $(next_card.querySelector('.copymark'))
    c_mark.id = 'copymark'+id

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



let clipboard = new ClipboardJS('.copy_card')
clipboard.on('success',(e)=>{
    $('.copymark').hide()
    let c_mark = $(e.trigger.parentElement).children('.copymark')
    c_mark.show('fast')
})
clipboard.on('error',()=>{
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
        if(k.indexOf(keyword) >= 0)
            return true
    }
    return false
}

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