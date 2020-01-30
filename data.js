/* utf-8 */
var data = [
{
	"name_zh":"你好，世界",
	"name_en":"hello, world",
	"status":[""],
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
},{
	"name_zh":"蒙眼",
	"status":['request'],
	"keywords":['蒙眼','禁止子弹'],
	"desc_zh":"角色无法再发射任何子弹",
	"code":undefined,
	"about":undefined,
	"about_link":undefined
},{
	"name_zh":"展示预言",
	"status":[],
	"keywords":['展示','预言机','showfortune'],
	"desc_zh":"展示一条预言机的预言",
	"code":'l Game():ShowFortune()',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"展示规则",
	"status":[],
	"keywords":['展示','规则卡','show','rule','card'],
	"desc_zh":"展示一条规则卡的规则",
	"code":'l Game():ShowRule()',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},
{
	"name_zh":"随机移动",
	"status":[],
	"keywords":['随机传送','随机移动','move','randome'],
	"desc_zh":"以随机条件123进行当前层的随机传送",
	"code":'l Game():MoveToRandomRoom(True,123)',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"取当前房间网格索引",
	"status":[],
	"keywords":['当前房间网格索引','roomindex','gridindex','get','current'],
	"desc_zh":"打印当前的房间索引（RoomIndex，GridIndex）",
	"code":'l print(Game():GetLevel():GetCurrentRoomDesc().SafeGridIndex)',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"取上一个房间网格索引",
	"status":[],
	"keywords":['上一个房间网格索引','roomindex','gridindex','get','current'],
	"desc_zh":"打印上一个房间索引（RoomIndex，GridIndex）",
	"code":'l print(Game():GetLevel():GetLastRoomDesc().SafeGridIndex)',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"传送至房间网格索引",
	"status":[],
	"keywords":['传送至房间网格索引','teleport','gridindex','roomindex'],
	"desc_zh":"传送至房间网格索引(GridIndex)为84的房间，网格索引和小地图有关，请小心崩溃，经测试84为出生点。",
	"code":'l Game():ChangeRoom(84)',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"晃动屏幕",
	"status":[],
	"keywords":['晃动屏幕','shake','screen','摇晃'],
	"desc_zh":"摇晃屏幕，时间为30。不清楚单位，猜测是半帧，估计30=1秒。",
	"code":'l Game():ShakeScreen(30)',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"屏幕黑暗",
	"status":[],
	"keywords":['屏幕黑暗','dark','screen','黑屏','关灯'],
	"desc_zh":"以0.7的黑暗程度(猜测范围0 ~ 1)进行黑屏，时间为30。不清楚单位，猜测是半帧，估计30=1秒。",
	"code":'l Game():Darken(0.7,30)',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"打印胜利跑圈数",
	"status":[],
	"keywords":['打印胜利跑圈数','victory','lap','print'],
	"desc_zh":"在控制台上打印胜利跑圈数",
	"code":'l print(Game():GetVictoryLap())',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"进行下一轮胜利跑圈",
	"status":[],
	"keywords":['下一轮胜利跑圈','victory','lap','next','run'],
	"desc_zh":"直接开启下一轮跑圈",
	"code":'l Game():NextVictoryLap()',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},
]