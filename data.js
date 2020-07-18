/* utf-8 */
var data = [
{
	"name_zh":"你好，世界",
	"name_en":"hello, world",
	"status":[""],
	"keywords":["hello","world","你好","世界",'demo','示例'],
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
	"name_zh":"Mama mega大爆炸",
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
},{
	"name_zh":"增加心之容器",
	"status":[],
	"keywords":['玩家','HP','血量上限','红心','心之容器'],
	"desc_zh":"增加两个心之容器。true表示无视Keeper。数字4表示两个心之容器，单位是“半血”，如果是单数，则会出现半格血上限的情况。",
	"code":'l Isaac.GetPlayer(0):AddMaxHearts(4,true)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加红心",
	"status":[],
	"keywords":['玩家','HP','红心','血量'],
	"desc_zh":"增加2颗红心。数量为4，单位是半血。",
	"code":'l Isaac.GetPlayer(0):AddHearts(4)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加白心",
	"status":[],
	"keywords":['玩家','HP','白心','上限','血量'],
	"desc_zh":"增加半颗白心。数字1表示半颗，单位为半血。",
	"code":'l Isaac.GetPlayer(0):AddEternalHearts(1)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加魂心",
	"status":[],
	"keywords":['玩家','HP','蓝心','魂心','上限','血量'],
	"desc_zh":"增加半颗魂心。数字1表示半颗，单位为半血。",
	"code":'l Isaac.GetPlayer(0):AddSoulHearts(1)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加黑心",
	"status":[],
	"keywords":['玩家','HP','黑心','上限','血量'],
	"desc_zh":"增加半颗黑心。数字1表示半颗，单位为半血。",
	"code":'l Isaac.GetPlayer(0):AddBlackHearts(1)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加10块钱",
	"status":[],
	"keywords":['玩家','金钱'],
	"desc_zh":"增加10块钱。换成负数就是扣钱。",
	"code":'l Isaac.GetPlayer(0):AddCoins(10)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加10个炸弹",
	"status":[],
	"keywords":['玩家','炸弹'],
	"desc_zh":"增加10个炸弹。换成负数就是扣炸弹。",
	"code":'l Isaac.GetPlayer(0):AddBombs(10)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加10个钥匙",
	"status":[],
	"keywords":['玩家','钥匙'],
	"desc_zh":"增加10个钥匙。换成负数就是扣钥匙。",
	"code":'l Isaac.GetPlayer(0):AddKeys(10)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置金钥匙",
	"status":[],
	"keywords":['玩家','金钥匙','无限钥匙','拾取'],
	"desc_zh":"设置金钥匙",
	"code":'l Isaac.GetPlayer(0):AddGoldenKey()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"移除金钥匙",
	"status":[],
	"keywords":['玩家','金钥匙','无限钥匙','移除'],
	"desc_zh":"移除金钥匙",
	"code":'l Isaac.GetPlayer(0):RemoveGoldenKey()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置金炸弹",
	"status":[],
	"keywords":['玩家','金炸弹','无限炸弹','拾取'],
	"desc_zh":"设置金钥匙",
	"code":'l Isaac.GetPlayer(0):AddGoldenBomb()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"移除金炸弹",
	"status":[],
	"keywords":['玩家','金炸弹','无限炸弹','移除'],
	"desc_zh":"移除金钥匙",
	"code":'l Isaac.GetPlayer(0):RemoveGoldenBomb()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加金心",
	"status":[],
	"keywords":['玩家','金心','钱心'],
	"desc_zh":"增加2颗金心",
	"code":'l Isaac.GetPlayer(0):AddGoldenHearts(2)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加蓝蜘蛛",
	"status":[],
	"keywords":['蓝蜘蛛','生成','增加'],
	"desc_zh":"在随机位置生成蓝蜘蛛",
	"code":'l Isaac.GetPlayer(0):AddBlueSpider(Isaac.GetRandomPosition())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加蓝苍蝇",
	"status":[],
	"keywords":['蓝苍蝇','生成','增加'],
	"desc_zh":"在随机位置，以玩家为目标，生成3个蓝苍蝇",
	"code":'l Isaac.GetPlayer(0):AddBlueFlies(3,Isaac.GetRandomPosition(),Isaac.GetPlayer(0).Target)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加灰苍蝇（pretty fly）",
	"status":[],
	"keywords":['灰苍蝇','生成','增加'],
	"desc_zh":"生成1个灰苍蝇（围绕玩家旋转）",
	"code":'l Isaac.GetPlayer(0):AddPrettyFly()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加幸运",
	"status":[],
	"keywords":['玩家属性','幸运','增加','demo','示例'],
	"desc_zh":"增加2点幸运值",
	"code":'l Isaac.GetPlayer(0):DonateLuck(2)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置充能",
	"status":[],
	"keywords":['主动充能','设置','数量'],
	"desc_zh":"设置主动当前充能为3",
	"code":'l Isaac.GetPlayer(0):SetActiveCharge(3)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"清空充能",
	"status":[],
	"keywords":['主动充能','清空','清除','数量'],
	"desc_zh":"将主动充能设置为0",
	"code":'l Isaac.GetPlayer(0):DischargeActiveItem()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"红心补满",
	"status":[],
	"keywords":['HP','补充','补满','恢复'],
	"desc_zh":"恢复所有心之容器",
	"code":'l Isaac.GetPlayer(0):SetFullHearts()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印玩家角色",
	"status":[],
	"keywords":['打印','玩家角色','我是谁'],
	"desc_zh":"打印玩家角色。可以用于判断当前角色是谁，角色信息见枚举量PlayerType。 PLAYER_ISAAC = 0, PLAYER_MAGDALENA = 1, PLAYER_CAIN = 2, PLAYER_JUDAS = 3,  PLAYER_XXX = 4, PLAYER_EVE = 5, PLAYER_SAMSON = 6, PLAYER_AZAZEL = 7,  PLAYER_LAZARUS = 8, PLAYER_EDEN = 9, PLAYER_THELOST = 10, PLAYER_LAZARUS2 = 11,  PLAYER_BLACKJUDAS = 12, PLAYER_LILITH = 13, PLAYER_KEEPER = 14, PLAYER_APOLLYON = 15,  PLAYER_THEFORGOTTEN = 16, PLAYER_THESOUL = 17",
	"code":'l print(Isaac.GetPlayer(0):GetPlayerType())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印蓝苍蝇数量",
	"status":[],
	"keywords":['打印','数量','蓝苍蝇','计数'],
	"desc_zh":"打印目前蓝苍蝇的数量",
	"code":'l print(Isaac.GetPlayer(0):GetNumBlueFlies())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印蓝蜘蛛数量",
	"status":[],
	"keywords":['打印','数量','蓝蜘蛛','计数'],
	"desc_zh":"打印目前蓝蜘蛛的数量",
	"code":'l print(Isaac.GetPlayer(0):GetNumBlueSpiders())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"触发主动效果",
	"status":[],
	"keywords":['触发','特定主动','使用主动','主动效果'],
	"desc_zh":"触发金传送器（419号）主动的效果",
	"code":'l Isaac.GetPlayer(0):UseActiveItem(419,true,true,true,false)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"触发卡片效果",
	"status":[],
	"keywords":['触发','特定卡片','使用卡片','卡片效果'],
	"desc_zh":"触发The Fool卡片的效果。CARD_FOOL可以替换为枚举变量Card中的任意值（或使用卡片id）。<details>Card枚举变量可用值如下：<p>CARD_FOOL, CARD_MAGICIAN, CARD_HIGH_PRIESTESS, CARD_EMPRESS, CARD_EMPEROR, CARD_HIEROPHANT, CARD_LOVERS, CARD_CHARIOT, CARD_JUSTICE, CARD_HERMIT, CARD_WHEEL_OF_FORTUNE, CARD_STRENGTH, CARD_HANGED_MAN, CARD_DEATH, CARD_TEMPERANCE, CARD_DEVIL, CARD_TOWER, CARD_STARS, CARD_MOON, CARD_SUN, CARD_JUDGEMENT, CARD_WORLD, CARD_CLUBS_2, CARD_DIAMONDS_2, CARD_SPADES_2, CARD_HEARTS_2, CARD_ACE_OF_CLUBS, CARD_ACE_OF_DIAMONDS, CARD_ACE_OF_SPADES, CARD_ACE_OF_HEARTS, CARD_JOKER, RUNE_HAGALAZ, RUNE_JERA, RUNE_EHWAZ, RUNE_DAGAZ, RUNE_ANSUZ, RUNE_PERTHRO, RUNE_BERKANO, RUNE_ALGIZ, RUNE_BLANK, RUNE_BLACK, CARD_CHAOS, CARD_CREDIT, CARD_RULES, CARD_HUMANITY, CARD_SUICIDE_KING, CARD_GET_OUT_OF_JAIL, CARD_QUESTIONMARK, CARD_DICE_SHARD, CARD_EMERGENCY_CONTACT, CARD_HOLY, CARD_HUGE_GROWTH, CARD_ANCIENT_RECALL, CARD_ERA_WALK</p></details>",
	"code":'l Isaac.GetPlayer(0):UseCard(Card.CARD_FOOL)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"触发药丸效果",
	"status":[],
	"keywords":['触发','特定药丸','使用药丸','药丸效果'],
	"desc_zh":"触发Bad Gas药丸的效果。PILLEFFECT_BAD_GAS可以替换为枚举变量PillEffect中的任意值（或使用药丸id）。<details>PillEffect枚举变量可用值如下：<p>PILLEFFECT_BAD_GAS, PILLEFFECT_BAD_TRIP, PILLEFFECT_BALLS_OF_STEEL, PILLEFFECT_BOMBS_ARE_KEYS, PILLEFFECT_EXPLOSIVE_DIARRHEA, PILLEFFECT_FULL_HEALTH, PILLEFFECT_HEALTH_DOWN, PILLEFFECT_HEALTH_UP, PILLEFFECT_I_FOUND_PILLS, PILLEFFECT_PUBERTY, PILLEFFECT_PRETTY_FLY, PILLEFFECT_RANGE_DOWN, PILLEFFECT_RANGE_UP, PILLEFFECT_SPEED_DOWN, PILLEFFECT_SPEED_UP, PILLEFFECT_TEARS_DOWN, PILLEFFECT_TEARS_UP, PILLEFFECT_LUCK_DOWN, PILLEFFECT_LUCK_UP, PILLEFFECT_TELEPILLS, PILLEFFECT_48HOUR_ENERGY, PILLEFFECT_HEMATEMESIS, PILLEFFECT_PARALYSIS, PILLEFFECT_SEE_FOREVER, PILLEFFECT_PHEROMONES, PILLEFFECT_AMNESIA, PILLEFFECT_LEMON_PARTY, PILLEFFECT_WIZARD, PILLEFFECT_PERCS, PILLEFFECT_ADDICTED, PILLEFFECT_RELAX, PILLEFFECT_QUESTIONMARK, PILLEFFECT_LARGER, PILLEFFECT_SMALLER, PILLEFFECT_INFESTED_EXCLAMATION, PILLEFFECT_INFESTED_QUESTION, PILLEFFECT_POWER, PILLEFFECT_RETRO_VISION, PILLEFFECT_FRIENDS_TILL_THE_END, PILLEFFECT_X_LAX, PILLEFFECT_SOMETHINGS_WRONG, PILLEFFECT_IM_DROWSY, PILLEFFECT_IM_EXCITED, PILLEFFECT_GULP, PILLEFFECT_HORF, PILLEFFECT_SUNSHINE, PILLEFFECT_VURP</p></details>",
	"code":'l Isaac.GetPlayer(0):UsePill(PillEffect.PILLEFFECT_BAD_GAS,0)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"增加骨心",
	"status":[],
	"keywords":['增加','骨心','血量'],
	"desc_zh":"增加2颗骨心",
	"code":'l Isaac.GetPlayer(0):AddBoneHearts(2)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"复活玩家",
	"status":[],
	"keywords":['复活','重生'],
	"desc_zh":"复活玩家，增加半颗蓝心。由于伤害计算机制，增加的半颗蓝心多数情况下会被立即扣除，并产生一定时间的无敌。在游戏后期，你可能需要一颗蓝心才能承担复活瞬间的伤害。",
	"code":'l Isaac.GetPlayer(0):Revive();Isaac.GetPlayer(0):AddSoulHearts(1)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当发射眼泪时，...",
	"status":['reset'],
	"keywords":['当发射眼泪','shoot tear','回调函数','demo','示例'],
	"desc_zh":"当玩家发射眼泪时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":'l ftl = ftl or RegisterMod(\'ftcslua\',1);ftl:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR,function() print(\'hello, world\') end)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当发射眼泪时，增加幸运",
	"status":['reset'],
	"keywords":['当发射眼泪','shoot tear','回调函数','增加幸运','demo','示例'],
	"desc_zh":"当玩家发射眼泪时，增加幸运。这是指令“当发射眼泪时，...”的一个使用示例。指令中的hello world被替换为增加幸运的lua指令。",
	"code":'l ftl = ftl or RegisterMod(\'ftcslua\',1);ftl:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR,function() Isaac.GetPlayer(0):DonateLuck(1) end)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当玩家受伤时，...",
	"status":['reset'],
	"keywords":['当玩家受伤','回调函数','demo','示例'],
	"desc_zh":"当玩家受伤时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_ENTITY_TAKE_DMG,function(_) print('hello, world') end,EntityType.ENTITY_PLAYER)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当使用主动时，...",
	"status":['reset'],
	"keywords":['使用','任意','主动','回调函数'],
	"desc_zh":"当使用任意主动道具时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_ITEM,function(_) print('hello, world') end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当使用某个主动时，...",
	"status":['reset'],
	"keywords":['使用','特定','主动','回调函数'],
	"desc_zh":"当使用id为105的主动道具（D6）时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_ITEM,function(_) print('hello, world') end,105)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当使用卡片时，...",
	"status":['reset'],
	"keywords":['使用','任意','卡片','回调函数'],
	"desc_zh":"当使用任意卡片时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_CARD,function(_) print('hello, world') end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当使用某个卡片时，...",
	"status":['reset'],
	"keywords":['使用','某个','卡片','回调函数'],
	"desc_zh":"当使用The Fool卡时，打印hello, world到控制台上。你可以将指令中的CARD_FOOL替换为枚举变量Card中的任意值。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。<details>Card枚举变量可用值如下：<p>CARD_FOOL, CARD_MAGICIAN, CARD_HIGH_PRIESTESS, CARD_EMPRESS, CARD_EMPEROR, CARD_HIEROPHANT, CARD_LOVERS, CARD_CHARIOT, CARD_JUSTICE, CARD_HERMIT, CARD_WHEEL_OF_FORTUNE, CARD_STRENGTH, CARD_HANGED_MAN, CARD_DEATH, CARD_TEMPERANCE, CARD_DEVIL, CARD_TOWER, CARD_STARS, CARD_MOON, CARD_SUN, CARD_JUDGEMENT, CARD_WORLD, CARD_CLUBS_2, CARD_DIAMONDS_2, CARD_SPADES_2, CARD_HEARTS_2, CARD_ACE_OF_CLUBS, CARD_ACE_OF_DIAMONDS, CARD_ACE_OF_SPADES, CARD_ACE_OF_HEARTS, CARD_JOKER, RUNE_HAGALAZ, RUNE_JERA, RUNE_EHWAZ, RUNE_DAGAZ, RUNE_ANSUZ, RUNE_PERTHRO, RUNE_BERKANO, RUNE_ALGIZ, RUNE_BLANK, RUNE_BLACK, CARD_CHAOS, CARD_CREDIT, CARD_RULES, CARD_HUMANITY, CARD_SUICIDE_KING, CARD_GET_OUT_OF_JAIL, CARD_QUESTIONMARK, CARD_DICE_SHARD, CARD_EMERGENCY_CONTACT, CARD_HOLY, CARD_HUGE_GROWTH, CARD_ANCIENT_RECALL, CARD_ERA_WALK</p></details>",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_CARD,function(_) print('hello, world') end,Card.CARD_FOOL)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当游戏开始时，...",
	"status":['reset'],
	"keywords":['开始','游戏','回调函数'],
	"desc_zh":"当游戏开始/继续时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_STARTED,function(_) print('hello, world') end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当开始新游戏时，...",
	"status":['reset'],
	"keywords":['开始','新游戏','回调函数'],
	"desc_zh":"当游戏首次开始(new run)时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_STARTED,function(_,mpgsc) if(not mpgsc) then print('hello, world') end end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当继续游戏时，...",
	"status":['reset'],
	"keywords":['继续','游戏','回调函数'],
	"desc_zh":"当游戏读档继续(continue)时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_STARTED,function(_,mpgsc) if(mpgsc) then print('hello, world') end end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当退出游戏时，...",
	"status":['reset'],
	"keywords":['退出','游戏','回调函数'],
	"desc_zh":"当退出游戏时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_PRE_GAME_EXIT,function(_) print('hello, world') end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当玩家死亡，游戏结束时，...",
	"status":['reset'],
	"keywords":['结束','停止','游戏','回调函数'],
	"desc_zh":"当因死亡结束游戏时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_END,function(_,mpgeiso) if(mpgeiso) then print('hello, world') end end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当玩家通关，游戏结束时，...",
	"status":['reset'],
	"keywords":['通关','游戏','回调函数'],
	"desc_zh":"当因通关结束游戏时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_END,function(_,mpgeiso) if(not mpgeiso) then print('hello, world') end end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当进入新关卡/楼层时，...",
	"status":['reset'],
	"keywords":['切换','进入','楼层','回调函数'],
	"desc_zh":"当进入新的楼层或关卡时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_NEW_LEVEL,function(_) print('hello, world') end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当进入新房间时，...",
	"status":['reset'],
	"keywords":['切换','进入','房间','回调函数'],
	"desc_zh":"当进入新的房间时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_NEW_ROOM,function(_) print('hello, world') end)`,
	"about":'@frto027',
	"about_link":''
},
]