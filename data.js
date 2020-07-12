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
},{
	"name_zh":"房间变为金色",
	"status":[],
	"keywords":['房间','金色','贪婪','击败','boss'],
	"desc_zh":"将当前房间变为金色。总觉得这个特效在哪里见过？",
	"code":'l Game():GetLevel():GetCurrentRoom():TurnGold()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"房间变为金色",
	"status":[],
	"keywords":['房间','大爆炸','Mama mega','大炸弹'],
	"desc_zh":"触发一次Mama mega大炸弹的爆炸效果",
	"code":'l Game():GetLevel():GetCurrentRoom():MamaMegaExplossion()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印当前房间是否已有敌人死亡",
	"status":[],
	"keywords":['房间','击杀','第一次','第一滴血'],
	"desc_zh":"打印当前房间是否已有敌人死亡",
	"code":'l print(Game():GetLevel():GetCurrentRoom():IsFirstEnemyDead())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置当前房间是否已有敌人死亡",
	"status":[],
	"keywords":['房间','击杀','第一次','第一滴血'],
	"desc_zh":"设置当前房间已有敌人死亡，可以将true改为false，表示当前房间还没有敌人死亡",
	"code":'l Game():GetLevel():GetCurrentRoom():	SetFirstEnemyDead(true)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印当前房间是否为最终Boss",
	"status":[],
	"keywords":['房间','是否','boss','打印'],
	"desc_zh":"打印当前房间是否为Boss房间",
	"code":'l print(Game():GetLevel():GetCurrentRoom():IsCurrentRoomLastBoss())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"重置当前房间的敌人",
	"status":[],
	"keywords":['房间','重置','怪物','敌人'],
	"desc_zh":"类似道具“D7”",
	"code":'l Game():GetLevel():GetCurrentRoom():RespawnEnemies()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"填平沟壑",
	"status":[],
	"keywords":['房间','沟壑','填充','填平','架桥','pit'],
	"desc_zh":"在网格索引为40的位置上进行填充。可以使用debug 11来观察网格索引。只能在沟壑(pit)上使用，使用时请将40修改为当前房间中某个沟壑的网格索引。",
	"code":'l Game():GetLevel():GetCurrentRoom():TryMakeBridge(Game():GetLevel():GetCurrentRoom():GetGridEntity(40))',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印x石头网格索引",
	"status":[],
	"keywords":['房间','x石头','宝箱石头'],
	"desc_zh":"打印当前房间中x石头的网格索引。网格索引可以使用debug 11观察。",
	"code":'l print(Game():GetLevel():GetCurrentRoom():GetTintedRockIdx())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印地下室石头网格索引",
	"status":[],
	"keywords":['房间','地下室石头'],
	"desc_zh":"打印当前房间中地下室石头的网格索引。-1表示不存在地下室。网格索引可以使用debug 11观察。",
	"code":'l print(Game():GetLevel():GetCurrentRoom():GetDungeonRockIdx())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"生成清图奖励",
	"status":[],
	"keywords":['房间','清图','清理房间','基础掉落'],
	"desc_zh":"生成清理房间的奖励。",
	"code":'l Game():GetLevel():GetCurrentRoom():SpawnClearAward()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"墙壁冒血",
	"status":[],
	"keywords":['房间','墙壁','冒血','特效'],
	"desc_zh":"似乎在哪里见过的特效。墙壁冒血，时间为30（持续1秒），密度为10。",
	"code":'l Game():GetLevel():GetCurrentRoom():EmitBloodFromWalls(30,10)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"反人类卡特效",
	"status":[],
	"keywords":['房间','地板','大便','特效'],
	"desc_zh":"在当前房间激活反人类卡的特效。开饭啦！",
	"code":'l Game():GetLevel():GetCurrentRoom():SetCardAgainstHumanity()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"坏表（加速/减速）特效",
	"status":[],
	"keywords":['加速','减速','好表','坏表'],
	"desc_zh":"设置当前房间速度为正常(0)、减速(1)、加速(2)。修改指令中的数字来指定是哪种速度。",
	"code":'l Game():GetLevel():GetCurrentRoom():SetBrokenWatchState(0)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"尝试生成恶魔房门",
	"status":[],
	"keywords":['生成','恶魔房门','尝试'],
	"desc_zh":"需要满足开启条件才能成功，成功打印true，否则打印false。",
	"code":'l print(Game():GetLevel():GetCurrentRoom():TrySpawnDevilRoomDoor(true))',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"尝试生成Boss Rush门",
	"status":[],
	"keywords":['生成','boss rush门','尝试'],
	"desc_zh":"需要满足开启条件才能成功，指令中的true表示无视时间，改为false则会考虑游戏当前时间。成功打印true，否则打印false。",
	"code":'l print(Game():GetLevel():GetCurrentRoom():TrySpawnBossRushDoor(true))',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"尝试生成mega撒旦门",
	"status":[],
	"keywords":['生成','mega撒旦门','尝试'],
	"desc_zh":"需要满足开启条件才能成功，成功打印true，否则打印false。",
	"code":'l print(Game():GetLevel():GetCurrentRoom():TrySpawnMegaSatanRoomDoor())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"尝试生成hush门",
	"status":[],
	"keywords":['生成','mega撒旦门','尝试'],
	"desc_zh":"需要满足开启条件才能成功，无视时间。成功打印true，否则打印false。",
	"code":'l print(Game():GetLevel():GetCurrentRoom():TrySpawnBlueWombDoor(true,true))',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"尝试生成虚空门",
	"status":[],
	"keywords":['生成','虚空门','尝试'],
	"desc_zh":"需要满足开启条件才能成功。成功打印true，否则打印false。",
	"code":'l print(Game():GetLevel():GetCurrentRoom():TrySpawnTheVoidDoor())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"商店刷新",
	"status":[],
	"keywords":['商店','刷新','补货'],
	"desc_zh":"刷新商店的全部商品",
	"code":'l Game():GetLevel():GetCurrentRoom():ShopRestockFull()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印当前房间是否清理",
	"status":[],
	"keywords":['房间','清理','打印'],
	"desc_zh":"打印当前房间是否清理",
	"code":'l print(Game():GetLevel():GetCurrentRoom():IsClear())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置当前房间是否清理",
	"status":[],
	"keywords":['房间','清理','设置'],
	"desc_zh":"清理当前房间。将true改为false即设置为未清理状态。注意，改变房间的清理/未清理状态后，游戏将立即进行结算。",
	"code":'l Game():GetLevel():GetCurrentRoom():SetClear(true)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"移除一扇门",
	"status":[],
	"keywords":['房间','门','移除','消失'],
	"desc_zh":"移除房间中的某个门。其中DOWN0可以替换为UP0、RIGHT0、LEFT0、LEFT1、UP1、RIGHT1、DOWN1。注意，该指令不保存房间状态。",
	"code":'l Game():GetLevel():GetCurrentRoom():RemoveDoor(DoorSlot.DOWN0)',
	"about":'@frto027',
	"about_link":''
},
]