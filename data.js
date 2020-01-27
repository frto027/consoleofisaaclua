/* utf-8 */
var data = [
{
	"name_zh":"你好，世界",
	"name_en":"door to dmg",
	"status":["reset"],
	"keywords":["hello","world","你好","世界"],
	"desc_zh":"在控制台上打印\"hello, world\"<a href='https://baike.baidu.com/item/hello%20world/85501'>更多</a>",
	"desc_en":"print 'hello, world' in console",
	"desc":"This is a template in json <a href='#'>more</a>",
	"code":"l print('hello, world')",
	"about":"@frto027",
	"about_link":"https://github.com/frto027",
},
{
	"name_zh":"放置炸弹",
	"status":[],
	"keywords":["place",'炸弹','放置','安放','bomb'],
	"desc_zh":"在(200,200)的位置，放置一个带有横向初速度向右50的炸弹",
	"code":"l Isaac.GetPlayer(0):FireBomb(Vector(200,200),Vector(50,0))",
	"about":"@frto027",
	"about_link":"http://tieba.baidu.com/p/4928422576?pid=128953609339&cid=128954028478#128954028478",
},
{
	"name_zh":"打印HP",
	"status":[],
	"keywords":['print','hp','damage','血量','打印','输出'],
	"desc_zh":"打印当前房间中所有可受伤实体的hp",
	"code":'l for _,v in pairs(Isaac.GetRoomEntities()) do if v:IsVulnerableEnemy() then print(v.HitPoints.."/"..v.MaxHitPoints) end end',
	"about":"@Binding of Isaac - Afterbirth+ Lua Reference",
},
{
	"name_zh":"增加诅咒 - Curse of the Blind",
	"status":[],
	"keywords":['诅咒','增加','add','瞎子','Curse of the Blind'],
	"desc_zh":"增加诅咒位CURSE_OF_BLIND",
	"code":'l Game():GetLevel():AddCurse(LevelCurse.CURSE_OF_BLIND)',
	"about":"@frto027",
	"about_link":'http://tieba.baidu.com/p/4928422576?pid=128955968778&cid=0#128955968778'
},
{
	"name_zh":"移除诅咒 - Curse of the Blind",
	"status":[],
	"keywords":['诅咒','去除','移除','remove','瞎子','Curse of the Blind'],
	"desc_zh":"移除诅咒位CURSE_OF_BLIND",
	"code":'l Game():GetLevel():RemoveCurse(LevelCurse.CURSE_OF_BLIND)',
	"about":"@frto027",
	"about_link":'http://tieba.baidu.com/p/4928422576?pid=128955968778&cid=0#128955968778'
},
]