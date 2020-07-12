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
},{
	"name_zh":"随机位置生成x石头",
	"status":[],
	"keywords":['rockt','×石头','x石头','叉石头','插石头','隐藏石头'],
	"desc_zh":"在随机位置生成x石头，不会覆盖已有地形",
	"code":'l Isaac.GridSpawn(GridEntityType.GRID_ROCKT,0,Isaac.GetRandomPosition(),false)',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/4928422576?pid=102219431913&cid=130402803671#130402803671'
},{
	"name_zh":"生成友好怪物",
	"status":[],
	"keywords":['frendly','charm','友好','魅惑'],
	"desc_zh":"生成种类、变体、子类型为100,0,0的怪物，位置是(200,200)，速度为0，并具有友好、魅惑、持久（更换房间后不消失）属性",
	"code":'l Isaac.Spawn(100,0,0,Vector(200,200),Vector(0,0),Isaac.GetPlayer(0)):AddEntityFlags(EntityFlag.FLAG_FRIENDLY|EntityFlag.FLAG_CHARM|EntityFlag.FLAG_PERSISTENT)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印去过的宝箱房数量",
	"status":[],
	"keywords":['宝箱房','次数','个数','time'],
	"desc_zh":"去过几个宝箱房，就打印几",
	"code":'l print(Game():GetTreasureRoomVisitCount())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置红心伤害",
	"status":[],
	"keywords":['红心','伤害','恶魔房概率'],
	"desc_zh":"设置本层受过红心伤害（影响恶魔房概率）",
	"code":'l Game():GetLevel():SetRedHeartDamage()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加天使房转换率",
	"status":[],
	"keywords":['天使房','转换率'],
	"desc_zh":"增加0.1的天使转换率，数字可以为负数。真实效果不明。",
	"code":'l Game():GetLevel():AddAngelRoomChance(0.1)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印天使房转换率",
	"status":[],
	"keywords":['天使房','转换率'],
	"desc_zh":"打印天使放转换率。真实效果不明。",
	"code":'l print(Game():GetLevel():GetAngelRoomChance())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"显示地图",
	"status":[],
	"keywords":['开图','show map','显示地图','隐藏','太阳卡','the sun'],
	"desc_zh":"开图，和the world/the sun作用类似，但不显示超隐。",
	"code":'l Game():GetLevel():ShowMap()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"透视(I can see everything)",
	"status":[],
	"keywords":['I can see everything','隐藏','超隐'],
	"desc_zh":"类似x光眼镜、I can see everything的效果。将true改为false就是关闭这一能力的指令。",
	"code":'l Game():GetLevel():SetCanSeeEverything(true)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"使用白地图",
	"status":[],
	"keywords":['地图','开图','普通房间'],
	"desc_zh":"显示当前层的普通房间，类似白地图的效果",
	"code":'l Game():GetLevel():SetCanSeeEverything(true)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"使用蓝地图",
	"status":[],
	"keywords":['地图','蓝图','开图','隐藏房间','超隐'],
	"desc_zh":"显示当前层的隐藏房间，类似蓝地图的效果",
	"code":'l Game():GetLevel():ApplyBlueMapEffect()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"使用指南针",
	"status":[],
	"keywords":['地图','指南针','开图','特殊房间','boss','宝箱','商店'],
	"desc_zh":"显示当前层的特殊房间，类似指南针的效果",
	"code":'l Game():GetLevel():ApplyCompassEffect()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"移除指南针",
	"status":[],
	"keywords":['地图','指南针','关图','开图','特殊房间','boss','宝箱','商店'],
	"desc_zh":"移除指南针的效果，不显示特殊房间。需要和本页面的“使用指南针”配合使用。",
	"code":'l Game():GetLevel():RemoveCompassEffect()',
	"about":'@frto027',
	"about_link":''
},
]