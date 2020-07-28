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
        ['.notes_btn','便签'],
        ['.copymark_console','已复制为控制台指令'],
        ['.copymark_lua','已复制为lua'],
        ['.copy_card','复制到控制台'],
        ['.copy_card_lua','复制为lua'],
        ['.copy_card_note','复制到便签'],
        ['#request_desc','这个脚本正在请求编写'],
        ['#broken_desc','这个脚本已经失效'],
        ['#reset_desc','在重新启动游戏（或重新开关任意mod）之前，脚本功能不会消失。这是因为部分lua指令会污染游戏的上下文，建议通过重新开关某个mod，或重启游戏程序的方式来进行重置。'],
        ['.reset_card','重置'],
        ['#search_btn','过滤']
    ],
}

function generate_replate_by_note_zh(text,number){
    if(number)
        return `将第${number}个打印${text}替换为便签内容`
    else
        return `将打印${text}替换为便签内容`
}

function generate_replate_by_note_en(text,number){
    return 'not supported.'
}

let generate_replate_by_note = undefined

const note_replace_reg = /print\(('([^']*)'|"([^"]*)")\)/g

let template = $('#template')
for(let i = language.length - 1;i>=0;i--){
    trans_items = trans_json[language[i]]
    if(trans_items){
        for(let item_i = 0;item_i < trans_items.length;item_i++){
            item = trans_items[item_i]
            $(item[0]).text(item[1])
        }
    }
    try{
        generate_replate_by_note = eval('generate_replate_by_note_'+language[i]) || generate_replate_by_note
    }catch(e){
        if(e.name != "ReferenceError")
            throw e
    }
}

//$('#use_js').remove()
$('#js_content').attr('style','')

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

    //copy note
    c_note_btn = next_card.querySelector('.copy_card_note')
    c_note_btn.cptarget = c_target
    c_note_btn.onclick = on_copy_to_note

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
        //code area
        $('#'+e.target.getAttribute('rst_target')).find('.codes').val(e.target.getAttribute('rst_code'))
        //paste note btns
        update_paste_note_btns({target:$('#'+e.target.getAttribute('rst_target')).find('.codes')[0]})
    })

    //paste note
    {

        paste_note_btns = next_card.querySelector('.paste_note_btns')
        paste_note_btns.rep_target=c_target

        c_target.paste_note_btns = paste_note_btns

        paste_note_btn = paste_note_btns.querySelector('.paste_note_btn')

        update_paste_note_btns({target:c_target})
        $(c_target).on('change',update_paste_note_btns)
    }


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

//copy to note
function on_copy_to_note(e){
    $('#pastebin_texts').val(this.cptarget.value.substr(2))
    $('#pastebin_area').slideDown('fast')
}

//note to code
//add note buttons
function update_paste_note_btns(e){
    //update buttons

    //get information from code
    // let print_datas = { //key:text value:count
    //     'hello, world':1,
    //     'no problem':2
    // }
    let print_datas = {}

    let mresult
    while((mresult = note_replace_reg.exec(e.target.value)) != null){
        let r = mresult[2]||mresult[3]
        print_datas[r] = print_datas[r] ? print_datas[r]+1 : 1
    }

    //buffer, we do not need to update buttons all of the time
    if(e.target.print_datas != undefined && Object.keys(e.target.print_datas).length == Object.keys(print_datas).length){
        //check if it is equal
        let equal = true
        for(k in print_datas){
            if(print_datas[k] != e.target.print_datas[k]){
                equal = false
                break
            }
        }
        if(equal){
            //we don't need to change the paste note buttons
            return
        }

    }
    e.target.print_datas = print_datas

    //do something to update buttons
    e.target.paste_note_btns.innerHTML=''

    for(text in print_datas){
        for(let cur_count = 1;cur_count <= print_datas[text];cur_count++){
            let show_str = generate_replate_by_note(text,print_datas[text] > 1 ? cur_count : undefined)
            let the_btn = $(paste_note_btn).clone()
            the_btn.text(show_str)
            the_btn = the_btn[0]
            the_btn.onclick = on_note_to_code
            the_btn.rep_text = text
            the_btn.rep_time = cur_count
            $(e.target.paste_note_btns).append(the_btn)
        }
    }
}
//note button clicked
function on_note_to_code(e){
    let code_target = $(e.target).parent('.paste_note_btns')[0].rep_target
    let counter = 0
    let mresult
    while((mresult = note_replace_reg.exec(code_target.value)) != null){
        //index
        //mresult[0].length
        if((mresult[2]||mresult[3]) === e.target.rep_text){
            counter++
        }
        if(counter == e.target.rep_time){
            let s = code_target.value
            code_target.value = s.substr(0,mresult.index) + $('#pastebin_texts').val() + s.substr(mresult.index + mresult[0].length)
            break
        }
    }
    note_replace_reg.lastIndex = 0

    update_paste_note_btns({target:code_target})
}

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
var script_execute_over = true