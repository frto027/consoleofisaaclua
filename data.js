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
	"name_zh":"增加诅咒",
	"status":[],
	"keywords":['诅咒','增加','add'],
	"desc_zh":"增加诅咒位CURSE_OF_BLIND（致盲诅咒，看不见物品）。你可以将指令中的CURSE_OF_BLIND替换为下面的值之一：CURSE_OF_DARKNESS, CURSE_OF_LABYRINTH, CURSE_OF_THE_LOST, CURSE_OF_THE_UNKNOWN, CURSE_OF_THE_CURSED, CURSE_OF_MAZE, CURSE_OF_BLIND",
	"code":'l Game():GetLevel():AddCurse(LevelCurse.CURSE_OF_BLIND)',
	"about":"@frto027",
	"about_link":'http://tieba.baidu.com/p/4928422576?pid=128955968778&cid=0#128955968778'
},
{
	"name_zh":"移除诅咒",
	"status":[],
	"keywords":['诅咒','去除','移除','remove','瞎子','Curse of the Blind'],
	"desc_zh":"移除诅咒位CURSE_OF_BLIND（致盲诅咒，看不见物品）。你可以将指令中的CURSE_OF_BLIND替换为下面的值之一：CURSE_OF_DARKNESS, CURSE_OF_LABYRINTH, CURSE_OF_THE_LOST, CURSE_OF_THE_UNKNOWN, CURSE_OF_THE_CURSED, CURSE_OF_MAZE, CURSE_OF_BLIND",
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
	"keywords":['展示','预言机','废话机','废话','showfortune'],
	"desc_zh":"展示一条预言机的预言",
	"code":'l Game():ShowFortune()',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"展示规则",
	"status":[],
	"keywords":['展示','规则卡','废话卡','废话','show','rule','card'],
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
	"name_zh":"随机传送",
	"status":[],
	"keywords":['随机传送','随机移动','move','randome'],
	"desc_zh":"随机进行当前层的传送",
	"code":'l Game():MoveToRandomRoom(True,Random())',
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
	"keywords":['传送至房间网格索引','传送','房间','teleport','gridindex','roomindex'],
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
	"keywords":['屏幕黑暗','dark','screen','变黑','黑屏','关灯'],
	"desc_zh":"以0.7的黑暗程度(猜测范围0 ~ 1)进行黑屏，时间为30。不清楚单位，猜测是半帧，估计30=1秒。",
	"code":'l Game():Darken(0.7,30)',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"打印胜利跑圈数",
	"status":[],
	"keywords":['打印胜利跑圈数','跑圈','victory','lap','print'],
	"desc_zh":"在控制台上打印胜利跑圈数",
	"code":'l print(Game():GetVictoryLap())',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"进行下一轮胜利跑圈",
	"status":[],
	"keywords":['下一轮胜利跑圈','开启','跑圈','victory','lap','next','run'],
	"desc_zh":"直接开启下一轮跑圈",
	"code":'l Game():NextVictoryLap()',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146'
},{
	"name_zh":"随机位置生成x石头",
	"status":[],
	"keywords":['rockt','×石头','x石头','叉石头','插石头','宝箱石头','隐藏石头'],
	"desc_zh":"在随机位置生成x石头，不会覆盖已有地形",
	"code":'l Isaac.GridSpawn(GridEntityType.GRID_ROCKT,0,Isaac.GetRandomPosition(),false)',
	"about":'@frto027',
	"about_link":'http://tieba.baidu.com/p/4928422576?pid=102219431913&cid=130402803671#130402803671'
},{
	"name_zh":"定点生成地形",
	"status":[],
	"keywords":['鼠标位置','生成地形','生产地形','定点生成','地形实体'],
	"desc_zh":"在鼠标所指位置生成石头（GRID_ROCK），不会覆盖已有地形。其中GRID_ROCK可替换为枚举量GridEntityType的任意值。<details>GridEntityType包括：GRID_DECORATION, GRID_ROCK, GRID_ROCKB, GRID_ROCKT, GRID_ROCK_BOMB, GRID_ROCK_ALT, GRID_PIT, GRID_SPIKES, GRID_SPIKES_ONOFF, GRID_SPIDERWEB, GRID_LOCK, GRID_TNT, GRID_FIREPLACE（未使用）, GRID_POOP, GRID_WALL, GRID_DOOR, GRID_TRAPDOOR, GRID_STAIRS, GRID_GRAVITY, GRID_PRESSURE_PLATE, GRID_STATUE, GRID_ROCK_SS</details>",
	"code":'l Isaac.GridSpawn(GridEntityType.GRID_ROCK,0,Input.GetMousePosition(true),false)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"生成友好怪物",
	"status":[],
	"keywords":['frendly','charm','友好','怪物','生成','魅惑'],
	"desc_zh":"生成种类、变体、子类型为100,0,0的怪物，位置是(200,200)，速度为0，并具有友好、魅惑、持久（更换房间后不消失）属性",
	"code":'l Isaac.Spawn(100,0,0,Vector(200,200),Vector(0,0),Isaac.GetPlayer(0)):AddEntityFlags(EntityFlag.FLAG_FRIENDLY|EntityFlag.FLAG_CHARM|EntityFlag.FLAG_PERSISTENT)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"定点生成/生产实体",
	"status":[],
	"keywords":['鼠标位置','定位','定点','实体','生成','生产','实体操作'],
	"desc_zh":"生成种类、变体、子类型为5,100,118的实体（硫磺火），位置是鼠标所指位置，速度为0。这三个数字详见控制台的spawn指令。",
	"code":'l Isaac.Spawn(5,100,118,Input.GetMousePosition(true),Vector(0,0),Isaac.GetPlayer(0))',
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
	"name_zh":"定点流血特效",
	"status":[],
	"keywords":['定点流血','标记','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标位置最近的实体脚下的地板染红。可以用来观察鼠标最近的实体是哪一个。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:BloodExplode()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"击杀鼠标最近实体",
	"status":[],
	"keywords":['定点击杀','消除','移除','伤害','鼠标最近','实体操作'],
	"desc_zh":"消灭距离鼠标位置最近的实体",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:Kill()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"移除鼠标最近实体",
	"status":[],
	"keywords":['定点移除','消除','移除','伤害','鼠标最近','实体操作'],
	"desc_zh":"移除距离鼠标位置最近的实体",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:Remove()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置鼠标最近实体的速度",
	"status":[],
	"keywords":['定点','速度','变速','改变速度','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标位置最近的实体速度增加(10,20)",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddVelocity(Vector(10,20))',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置鼠标最近实体的颜色",
	"status":[],
	"keywords":['定点','颜色','变色','改变颜色','色彩','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体颜色变成红、绿、蓝、透明度依次为0.1，0.9，0.2，0.5的颜色，其中最后的true表示启用渐变，改为false为禁用渐变。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:SetColor(Color(0.1,0.9,0.2,0.5,0,0,0),30,0,true)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置鼠标最近实体的大小(碰撞体积)",
	"status":[],
	"keywords":['定点','大小','尺寸','碰撞','体积','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体的碰撞体积大小为1，水平缩放0.9，竖直缩放1.5。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:SetSize(1,Vector(0.2,1.5),0)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体添加特性",
	"status":[],
	"keywords":['定点','特性','标志','标识','属性','变异','精英','鼠标最近','实体操作'],
	"desc_zh":"给距离鼠标最近的实体增加FLAG_FEAR标志位（恐惧）。你可以将FLAG_FEAR替换为一个或多个枚举量EntityFlag，并使用“|”隔开。例如：EntityFlag.FLAG_FEAR|EntityFlag.FLAG_BURN|EntityFlag.FLAG_CONFUSION表示恐惧、燃烧、眩晕三个特性。<details>EntityFlag的标志位有：FLAG_NO_STATUS_EFFECTS, FLAG_NO_INTERPOLATE, FLAG_APPEAR, FLAG_RENDER_FLOOR, FLAG_NO_TARGET, FLAG_FREEZE, FLAG_POISON, FLAG_SLOW, FLAG_CHARM, FLAG_CONFUSION, FLAG_MIDAS_FREEZE, FLAG_FEAR, FLAG_BURN, FLAG_RENDER_WALL, FLAG_INTERPOLATION_UPDATE, FLAG_APPLY_GRAVITY, FLAG_NO_BLOOD_SPLASH, FLAG_NO_REMOVE_ON_TEX_RENDER, FLAG_NO_DEATH_TRIGGER, FLAG_NO_SPIKE_DAMAGE, FLAG_BOSSDEATH_TRIGGERED, FLAG_DONT_OVERWRITE, FLAG_SPAWN_STICKY_SPIDERS, FLAG_SPAWN_BLACK_HP, FLAG_SHRINK, FLAG_NO_FLASH_ON_DAMAGE, FLAG_NO_KNOCKBACK, FLAG_SLIPPERY_PHYSICS, FLAG_ADD_JAR_FLY, FLAG_FRIENDLY, FLAG_NO_PHYSICS_KNOCKBACK, FLAG_DONT_COUNT_BOSS_HP, FLAG_NO_SPRITE_UPDATE, FLAG_CONTAGIOUS, FLAG_BLEED_OUT, FLAG_HIDE_HP_BAR, FLAG_NO_DAMAGE_BLINK, FLAG_PERSISTENT</details>",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddEntityFlags(EntityFlag.FLAG_FEAR)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体移除特性",
	"status":[],
	"keywords":['定点','特性','标志','标识','属性','变异','精英','鼠标最近','实体操作'],
	"desc_zh":"给距离鼠标最近的实体移除FLAG_FEAR标志位（恐惧）。你可以将FLAG_FEAR替换为一个或多个枚举量EntityFlag，并使用“|”隔开。例如：EntityFlag.FLAG_FEAR|EntityFlag.FLAG_BURN|FLAG_CONFUSION表示恐惧、燃烧、眩晕三个特性。<details>EntityFlag的标志位有：FLAG_NO_STATUS_EFFECTS, FLAG_NO_INTERPOLATE, FLAG_APPEAR, FLAG_RENDER_FLOOR, FLAG_NO_TARGET, FLAG_FREEZE, FLAG_POISON, FLAG_SLOW, FLAG_CHARM, FLAG_CONFUSION, FLAG_MIDAS_FREEZE, FLAG_FEAR, FLAG_BURN, FLAG_RENDER_WALL, FLAG_INTERPOLATION_UPDATE, FLAG_APPLY_GRAVITY, FLAG_NO_BLOOD_SPLASH, FLAG_NO_REMOVE_ON_TEX_RENDER, FLAG_NO_DEATH_TRIGGER, FLAG_NO_SPIKE_DAMAGE, FLAG_BOSSDEATH_TRIGGERED, FLAG_DONT_OVERWRITE, FLAG_SPAWN_STICKY_SPIDERS, FLAG_SPAWN_BLACK_HP, FLAG_SHRINK, FLAG_NO_FLASH_ON_DAMAGE, FLAG_NO_KNOCKBACK, FLAG_SLIPPERY_PHYSICS, FLAG_ADD_JAR_FLY, FLAG_FRIENDLY, FLAG_NO_PHYSICS_KNOCKBACK, FLAG_DONT_COUNT_BOSS_HP, FLAG_NO_SPRITE_UPDATE, FLAG_CONTAGIOUS, FLAG_BLEED_OUT, FLAG_HIDE_HP_BAR, FLAG_NO_DAMAGE_BLINK, FLAG_PERSISTENT</details>",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ClearEntityFlags(EntityFlag.FLAG_FEAR)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体增加血量",
	"status":[],
	"keywords":['生命值','HP','血量','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体的生命值增加3.5。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddHealth(3.5)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体增加中毒效果",
	"status":[],
	"keywords":['持续伤害','变绿','中毒','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的中毒效果。虽然1表示伤害值，但实测造成的是玩家面板伤害。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddPoison(EntityRef(nil),60,1)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体增加石化效果",
	"status":[],
	"keywords":['石化','灰色','冻结','冰冻','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的石化效果。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddFreeze(EntityRef(nil),60)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体增加减速效果",
	"status":[],
	"keywords":['减速','变慢','变缓','移动速度','降低','移速','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的减速效果，减速值为10（测试没有发现减速值的效果）",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddSlowing(EntityRef(nil),60,10,Color(1,1,1,1,0,0,0))',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体增加魅惑效果",
	"status":[],
	"keywords":['魅惑','友好','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的魅惑效果。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddCharmed(60)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体增加眩晕效果",
	"status":[],
	"keywords":['眩晕','疑惑','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的眩晕效果。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddConfusion(EntityRef(nil),60,false)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体增加点金石化效果",
	"status":[],
	"keywords":['石化','点金','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的点金石化效果。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddMidasFreeze(EntityRef(nil),60)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体增加恐惧效果",
	"status":[],
	"keywords":['恐惧','害怕','瑟瑟发抖','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的恐惧效果。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddFear(EntityRef(nil),60)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体增加灼烧效果",
	"status":[],
	"keywords":['点燃','火焰伤害','灼烧','燃烧','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的灼烧效果。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddBurn(EntityRef(nil),60,1)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体增加缩小效果",
	"status":[],
	"keywords":['缩小','害怕','瑟瑟发抖','变小','鼠标最近','实体操作'],
	"desc_zh":"令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的缩小效果。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddShrink(EntityRef(nil),60)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"为鼠标最近实体移除状态特效",
	"status":[],
	"keywords":['移除特效','移除属性','重置状态','鼠标最近','实体操作'],
	"desc_zh":"移除距离鼠标最近的实体的效果。",
	"code":'l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:RemoveStatusEffects()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置红心伤害",
	"status":[],
	"keywords":['红心','伤害','红血','恶魔房概率'],
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
	"keywords":['I can see everything','隐藏','透视','超隐'],
	"desc_zh":"类似x光眼镜、I can see everything的效果。将true改为false就是关闭这一能力的指令。",
	"code":'l Game():GetLevel():SetCanSeeEverything(true)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"使用白地图",
	"status":[],
	"keywords":['地图','开图','白地图','普通房间'],
	"desc_zh":"显示当前层的普通房间，类似白地图的效果",
	"code":'l Game():GetLevel():ApplyMapEffect(true)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"使用蓝地图",
	"status":[],
	"keywords":['地图','蓝图','蓝地图','开图','隐藏房间','超隐'],
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
	"keywords":['房间','大爆炸','Mama mega','妈妈炸弹','大炸弹'],
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
	"code":'l Game():GetLevel():GetCurrentRoom():SetFirstEnemyDead(true)',
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
	"name_zh":"移除地形",
	"status":[],
	"keywords":['房间','移除地形','删除地形','删除物品'],
	"desc_zh":"移除网格索引为60位置的地形（60在正常大小的房间中是左侧的门的位置，因此会移除左侧的门）。可以使用debug 11来观察网格索引。",
	"code":'l Game():GetLevel():GetCurrentRoom():RemoveGridEntity(60,0,true)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"定点移除地形",
	"status":[],
	"keywords":['房间','移除地形','删除地形','删除物品','定点移除','鼠标位置移除地形'],
	"desc_zh":"移除鼠标所在位置处的地形。可以使用debug 11来观察网格索引。",
	"code":'l Game():GetLevel():GetCurrentRoom():RemoveGridEntity(Game():GetLevel():GetCurrentRoom():GetClampedGridIndex(Input.GetMousePosition(true)),0,true)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"定点攻击地形",
	"status":[],
	"keywords":['房间','攻击地形','伤害地形','定点','鼠标位置'],
	"desc_zh":"给鼠标所在位置处的地形造成1点伤害。",
	"code":'l Game():GetLevel():GetCurrentRoom():DamageGrid(Game():GetLevel():GetCurrentRoom():GetClampedGridIndex(Input.GetMousePosition(true)),1)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"定点摧毁地形（自然摧毁）",
	"status":[],
	"keywords":['房间','摧毁地形','消灭地形','定点','鼠标位置'],
	"desc_zh":"自然摧毁鼠标所在位置处的地形。例如，自然摧毁一个爆桶时，会发生爆炸。",
	"code":'l Game():GetLevel():GetCurrentRoom():DestroyGrid(Game():GetLevel():GetCurrentRoom():GetClampedGridIndex(Input.GetMousePosition(true)),false)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"定点摧毁地形（立即摧毁）",
	"status":[],
	"keywords":['房间','摧毁地形','消灭地形','定点','鼠标位置'],
	"desc_zh":"立即摧毁鼠标所在位置处的地形。例如，立即摧毁一个爆桶时，不会发生爆炸。",
	"code":'l Game():GetLevel():GetCurrentRoom():DestroyGrid(Game():GetLevel():GetCurrentRoom():GetClampedGridIndex(Input.GetMousePosition(true)),true)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印x石头网格索引",
	"status":[],
	"keywords":['房间','x石头','宝箱石头','叉石头','插石头','宝箱石头','隐藏石头','打印'],
	"desc_zh":"打印当前房间中x石头的网格索引。网格索引可以使用debug 11观察。",
	"code":'l print(Game():GetLevel():GetCurrentRoom():GetTintedRockIdx())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"打印地下室石头网格索引",
	"status":[],
	"keywords":['房间','地下室石头','楼梯','梯子','地下室'],
	"desc_zh":"打印当前房间中地下室石头的网格索引。-1表示不存在地下室。网格索引可以使用debug 11观察。",
	"code":'l print(Game():GetLevel():GetCurrentRoom():GetDungeonRockIdx())',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"生成清图奖励",
	"status":[],
	"keywords":['房间','清图','过图','清理房间','基础掉落'],
	"desc_zh":"生成清理房间的奖励。",
	"code":'l Game():GetLevel():GetCurrentRoom():SpawnClearAward()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"墙壁冒血",
	"status":[],
	"keywords":['房间','墙壁','冒血','流血','特效'],
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
	"desc_zh":"设置金炸弹",
	"code":'l Isaac.GetPlayer(0):AddGoldenBomb()',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"移除金炸弹",
	"status":[],
	"keywords":['玩家','金炸弹','无限炸弹','移除'],
	"desc_zh":"移除金炸弹",
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
	"keywords":['主动充能','主动','充能','设置','数量'],
	"desc_zh":"设置主动当前充能为3",
	"code":'l Isaac.GetPlayer(0):SetActiveCharge(3)',
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"补满充能",
	"status":[],
	"keywords":['主动充能','主动','补满','充能'],
	"desc_zh":"将主动充能补满",
	"code":'l Isaac.GetPlayer(0):FullCharge()',
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
	"keywords":['HP','补充','补满','血量','红血','回血','恢复'],
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
	"keywords":['触发','特定卡片','使用卡片','卡牌','卡片效果'],
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
	"desc_zh":"复活玩家，增加半颗蓝心,并触发钝刀片的效果（以提供一定时间的无敌）。",
	"code":'l Isaac.GetPlayer(0):Revive();Isaac.GetPlayer(0):UseActiveItem(486,false,true,true,false)',
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
	"keywords":['使用','任意','卡片','卡牌','回调函数'],
	"desc_zh":"当使用任意卡片时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_CARD,function(_) print('hello, world') end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当使用某个卡片时，...",
	"status":['reset'],
	"keywords":['使用','某个','卡片','卡牌','回调函数'],
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
},{
	"name_zh":"当按下键盘时，...",
	"status":['reset'],
	"keywords":['键盘','按钮','按下','回调函数'],
	"desc_zh":"当按下键盘上的K键时时，打印hello, world到控制台上。其中KEY_K可以替换为枚举量Keyboard的值。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。<details>枚举量Keyboard包含以下值：KEY_SPACE, KEY_APOSTROPHE, KEY_COMMA, KEY_MINUS, KEY_PERIOD, KEY_SLASH, KEY_0, KEY_1, KEY_2, KEY_3, KEY_4, KEY_5, KEY_6, KEY_7, KEY_8, KEY_9, KEY_SEMICOLON, KEY_EQUAL, KEY_A, KEY_B, KEY_C, KEY_D, KEY_E, KEY_F, KEY_G, KEY_H, KEY_I, KEY_J, KEY_K, KEY_L, KEY_M, KEY_N, KEY_O, KEY_P, KEY_Q, KEY_R, KEY_S, KEY_T, KEY_U, KEY_V, KEY_W, KEY_X, KEY_Y, KEY_Z, KEY_LEFT_BRACKET, KEY_BACKSLASH, KEY_RIGHT_BRACKET, KEY_GRAVE_ACCENT, KEY_WORLD_1, KEY_WORLD_2, KEY_ESCAPE, KEY_ENTER, KEY_TAB, KEY_BACKSPACE, KEY_INSERT, KEY_DELETE, KEY_RIGHT, KEY_LEFT, KEY_DOWN, KEY_UP, KEY_PAGE_UP, KEY_PAGE_DOWN, KEY_HOME, KEY_END, KEY_CAPS_LOCK, KEY_SCROLL_LOCK, KEY_NUM_LOCK, KEY_PRINT_SCREEN, KEY_PAUSE, KEY_F1, KEY_F2, KEY_F3, KEY_F4, KEY_F5, KEY_F6, KEY_F7, KEY_F8, KEY_F9, KEY_F10, KEY_F11, KEY_F12, KEY_F13, KEY_F14, KEY_F15, KEY_F16, KEY_F17, KEY_F18, KEY_F19, KEY_F20, KEY_F21, KEY_F22, KEY_F23, KEY_F24, KEY_F25, KEY_KP_0, KEY_KP_1, KEY_KP_2, KEY_KP_3, KEY_KP_4, KEY_KP_5, KEY_KP_6, KEY_KP_7, KEY_KP_8, KEY_KP_9, KEY_KP_DECIMAL, KEY_KP_DIVIDE, KEY_KP_MULTIPLY, KEY_KP_SUBTRACT, KEY_KP_ADD, KEY_KP_ENTER, KEY_KP_EQUAL, KEY_LEFT_SHIFT, KEY_LEFT_CONTROL, KEY_LEFT_ALT, KEY_LEFT_SUPER, KEY_RIGHT_SHIFT, KEY_RIGHT_CONTROL, KEY_RIGHT_ALT, KEY_RIGHT_SUPER, KEY_MENU</details>",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_RENDER,function(_) if(Input.IsButtonTriggered(Keyboard.KEY_K, 0)) then print('hello, world') end end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"当xxx死亡时，...",
	"status":['reset'],
	"keywords":['怪物死亡','玩家死亡','杀死','死亡','消灭怪物','消灭','回调函数'],
	"desc_zh":"当怪物MONSTRO（萌死戳）死亡时，打印hello, world到控制台上。其中ENTITY_MONSTRO可以替换为枚举量EntityType的值。此外，你也可以将指令中的“EntityType.ENTITY_MONSTRO”整个替换为一个数字，表示怪物种类，对应的是控制台中spawn指令的第一个数字。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。<details>枚举量EntityType包含以下值：ENTITY_NULL, ENTITY_PLAYER, ENTITY_TEAR, ENTITY_FAMILIAR, ENTITY_BOMBDROP, ENTITY_PICKUP, ENTITY_SLOT, ENTITY_LASER, ENTITY_KNIFE, ENTITY_PROJECTILE, ENTITY_GAPER, ENTITY_GUSHER, ENTITY_HORF, ENTITY_FLY, ENTITY_POOTER, ENTITY_CLOTTY, ENTITY_MULLIGAN, ENTITY_SHOPKEEPER, ENTITY_ATTACKFLY, ENTITY_LARRYJR, ENTITY_MONSTRO, ENTITY_MAGGOT, ENTITY_HIVE, ENTITY_CHARGER, ENTITY_GLOBIN, ENTITY_BOOMFLY, ENTITY_MAW, ENTITY_HOST, ENTITY_CHUB, ENTITY_HOPPER, ENTITY_BOIL, ENTITY_SPITY, ENTITY_BRAIN, ENTITY_FIREPLACE, ENTITY_LEAPER, ENTITY_MRMAW, ENTITY_GURDY, ENTITY_BABY, ENTITY_VIS, ENTITY_GUTS, ENTITY_KNIGHT, ENTITY_STONEHEAD, ENTITY_MONSTRO2, ENTITY_POKY, ENTITY_MOM, ENTITY_SLOTH, ENTITY_LUST, ENTITY_WRATH, ENTITY_GLUTTONY, ENTITY_GREED, ENTITY_ENVY, ENTITY_PRIDE, ENTITY_DOPLE, ENTITY_FLAMINGHOPPER, ENTITY_LEECH, ENTITY_LUMP, ENTITY_MEMBRAIN, ENTITY_PARA_BITE, ENTITY_FRED, ENTITY_EYE, ENTITY_SUCKER, ENTITY_PIN, ENTITY_FAMINE, ENTITY_PESTILENCE, ENTITY_WAR, ENTITY_DEATH, ENTITY_DUKE, ENTITY_PEEP, ENTITY_LOKI, ENTITY_FISTULA_BIG, ENTITY_FISTULA_MEDIUM, ENTITY_FISTULA_SMALL, ENTITY_BLASTOCYST_BIG, ENTITY_BLASTOCYST_MEDIUM, ENTITY_BLASTOCYST_SMALL, ENTITY_EMBRYO, ENTITY_MOMS_HEART, ENTITY_GEMINI, ENTITY_MOTER, ENTITY_FALLEN, ENTITY_HEADLESS_HORSEMAN, ENTITY_HORSEMAN_HEAD, ENTITY_SATAN, ENTITY_SPIDER, ENTITY_KEEPER, ENTITY_GURGLE, ENTITY_WALKINGBOIL, ENTITY_BUTTLICKER, ENTITY_HANGER, ENTITY_SWARMER, ENTITY_HEART, ENTITY_MASK, ENTITY_BIGSPIDER, ENTITY_ETERNALFLY, ENTITY_MASK_OF_INFAMY, ENTITY_HEART_OF_INFAMY, ENTITY_GURDY_JR, ENTITY_WIDOW, ENTITY_DADDYLONGLEGS, ENTITY_ISAAC, ENTITY_STONE_EYE, ENTITY_CONSTANT_STONE_SHOOTER, ENTITY_BRIMSTONE_HEAD, ENTITY_MOBILE_HOST, ENTITY_NEST, ENTITY_BABY_LONG_LEGS, ENTITY_CRAZY_LONG_LEGS, ENTITY_FATTY, ENTITY_FAT_SACK, ENTITY_BLUBBER, ENTITY_HALF_SACK, ENTITY_DEATHS_HEAD, ENTITY_MOMS_HAND, ENTITY_FLY_L2, ENTITY_SPIDER_L2, ENTITY_SWINGER, ENTITY_DIP, ENTITY_WALL_HUGGER, ENTITY_WIZOOB, ENTITY_SQUIRT, ENTITY_COD_WORM, ENTITY_RING_OF_FLIES, ENTITY_DINGA, ENTITY_OOB, ENTITY_BLACK_MAW, ENTITY_SKINNY, ENTITY_BONY, ENTITY_HOMUNCULUS, ENTITY_TUMOR, ENTITY_CAMILLO_JR, ENTITY_NERVE_ENDING, ENTITY_SKINBALL, ENTITY_MOM_HEAD, ENTITY_ONE_TOOTH, ENTITY_GAPING_MAW, ENTITY_BROKEN_GAPING_MAW, ENTITY_GURGLING, ENTITY_SPLASHER, ENTITY_GRUB, ENTITY_WALL_CREEP, ENTITY_RAGE_CREEP, ENTITY_BLIND_CREEP, ENTITY_CONJOINED_SPITTY, ENTITY_ROUND_WORM, ENTITY_POOP, ENTITY_RAGLING, ENTITY_FLESH_MOBILE_HOST, ENTITY_PSY_HORF, ENTITY_FULL_FLY, ENTITY_TICKING_SPIDER, ENTITY_BEGOTTEN, ENTITY_NULLS, ENTITY_PSY_TUMOR, ENTITY_FLOATING_KNIGHT, ENTITY_NIGHT_CRAWLER, ENTITY_DART_FLY, ENTITY_CONJOINED_FATTY, ENTITY_FAT_BAT, ENTITY_IMP, ENTITY_THE_HAUNT, ENTITY_DINGLE, ENTITY_MEGA_MAW, ENTITY_GATE, ENTITY_MEGA_FATTY, ENTITY_CAGE, ENTITY_MAMA_GURDY, ENTITY_DARK_ONE, ENTITY_ADVERSARY, ENTITY_POLYCEPHALUS, ENTITY_MR_FRED, ENTITY_URIEL, ENTITY_GABRIEL, ENTITY_THE_LAMB, ENTITY_MEGA_SATAN, ENTITY_MEGA_SATAN_2, ENTITY_ROUNDY, ENTITY_BLACK_BONY, ENTITY_BLACK_GLOBIN, ENTITY_BLACK_GLOBIN_HEAD, ENTITY_BLACK_GLOBIN_BODY, ENTITY_SWARM, ENTITY_MEGA_CLOTTY, ENTITY_BONE_KNIGHT, ENTITY_CYCLOPIA, ENTITY_RED_GHOST, ENTITY_FLESH_DEATHS_HEAD, ENTITY_MOMS_DEAD_HAND, ENTITY_DUKIE, ENTITY_ULCER, ENTITY_MEATBALL, ENTITY_PITFALL, ENTITY_MOVABLE_TNT, ENTITY_ULTRA_COIN, ENTITY_ULTRA_DOOR, ENTITY_CORN_MINE, ENTITY_HUSH_FLY, ENTITY_HUSH_GAPER, ENTITY_HUSH_BOIL, ENTITY_GREED_GAPER, ENTITY_MUSHROOM, ENTITY_POISON_MIND, ENTITY_STONEY, ENTITY_BLISTER, ENTITY_THE_THING, ENTITY_MINISTRO, ENTITY_PORTAL, ENTITY_TARBOY, ENTITY_FISTULOID, ENTITY_GUSH, ENTITY_LEPER, ENTITY_STAIN, ENTITY_BROWNIE, ENTITY_FORSAKEN, ENTITY_LITTLE_HORN, ENTITY_RAG_MAN, ENTITY_ULTRA_GREED, ENTITY_HUSH, ENTITY_HUSH_SKINLESS, ENTITY_RAG_MEGA, ENTITY_SISTERS_VIS, ENTITY_BIG_HORN, ENTITY_DELIRIUM, ENTITY_MATRIARCH, ENTITY_EFFECT, ENTITY_TEXT</details>",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_NPC_DEATH,function(_) print('hello, world') end,EntityType.ENTITY_MONSTRO)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"禁止投掷物",
	"status":['reset'],
	"keywords":['移除','投掷物','所有'],
	"desc_zh":"移除所有的投掷物。游戏场景内所有的投掷物都会被移除，甚至混沌卡也不能用。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_PROJECTILE_INIT,function(_,t) t:Remove() end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"执行控制台指令",
	"status":[],
	"keywords":['执行控制台指令','控制台','指令','执行'],
	"desc_zh":"执行\"spawn 5.100.118\"这条控制台指令（在地面上生成118号道具），指令需要被单引号或双引号包起来，不要在指令中出现将它包起来的那个符号。话说回来，我为什么要在控制台的lua里执行控制台指令？答案是可以把这条指令用在回调中。",
	"code":`l Isaac.ExecuteCommand('spawn 5.100.118')`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"执行多次控制台指令",
	"status":[],
	"keywords":['执行控制台指令','多次','反复','控制台','指令','执行'],
	"desc_zh":"由于此处控制台的repeat指令失效，故提供此方案。反复执行\"spawn 5.100.118\"这条控制台指令共3次。（在地面上生成118号道具），指令需要被单引号或双引号包起来，不要在指令中出现将它包起来的那个符号。话说回来，我为什么要在控制台的lua里执行控制台指令？答案是可以把这条指令用在回调中。",
	"code":`l for _=1,3 do Isaac.ExecuteCommand('spawn 5.100.118') end`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"在游戏的每一帧，...",
	"status":['reset'],
	"keywords":['每一帧','每帧','时时刻刻','一直','回调函数'],
	"desc_zh":"警告：请谨慎执行，此指令可能会引起意外的游戏行为，并导致游戏崩溃。在游戏的每一帧，打印hello, world到控制台上。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_UPDATE,function(_) print('hello, world') end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"在游戏的每一渲染帧，...",
	"status":['reset'],
	"keywords":['每一帧','每帧','渲染帧','时时刻刻','一直','回调函数'],
	"desc_zh":"警告：请谨慎执行，此指令可能会引起意外的游戏行为，并导致游戏崩溃。在游戏的每一渲染帧时，打印hello, world到控制台上。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_RENDER,function(_) print('hello, world') end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"在下一帧，执行...",
	"status":['reset'],
	"keywords":['执行lua指令','延迟执行指令'],
	"desc_zh":"延迟一帧打印hello, world。这条指令主要在特定逻辑下被用到。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftlk={n=ftlk,f=function() print('hello, world') end};if(not ftpup)then ftl = ftl or RegisterMod('ftcslua',1);ftpup=function() ftldo, ftlk=ftlk,nil;while(ftldo) do ftldo.f();ftldo=ftldo.n end end ftl:AddCallback(ModCallbacks.MC_POST_UPDATE,ftpup) end`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"在下一帧，执行...（简化版）",
	"status":[],
	"keywords":['执行lua指令','延迟执行指令'],
	"desc_zh":"注意，此指令仅在至少执行过一遍“在下一帧，执行...”指令后才可以使用。<br/>延迟一帧打印hello, world。这条指令主要在特定逻辑下被用到。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftlk={n=ftlk,f=function() print('hello, world') end}`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"在下两帧，执行...（简化版）",
	"status":[],
	"keywords":['执行lua指令','延迟执行指令'],
	"desc_zh":"注意，此指令仅在至少执行过一遍“在下一帧，执行...”指令后才可以使用。<br/>本质上是延迟一帧的套娃版本，你可以进一步套娃，得到延迟三帧、四帧等指令，不过这真的有用吗？延迟两帧打印hello, world。这条指令主要在特定逻辑下被用到。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。",
	"code":`l ftlk={n=ftlk,f=function() ftlk={n=ftlk,f=function() print('hello, world') end} end}`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"让玩家受伤",
	"status":[],
	"keywords":['玩家','受到伤害','受伤','伤害'],
	"desc_zh":"让玩家受到1点（半颗心）伤害，在第七层后，玩家至少受到一颗心的伤害。指令中的1表示半血。",
	"code":`l Isaac.GetPlayer(0):TakeDamage(1,0,EntityRef(nil),0)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"让玩家中毒",
	"status":[],
	"keywords":['玩家','中毒','发绿'],
	"desc_zh":"让玩家中毒，持续时间为30",
	"code":`l Isaac.GetPlayer(0):AddPoison(EntityRef(nil),30,0)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"灼烧玩家",
	"status":[],
	"keywords":['玩家','灼烧','点燃'],
	"desc_zh":"让玩家被灼烧，持续时间为30",
	"code":`l Isaac.GetPlayer(0):AddBurn(EntityRef(nil),30,0)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"让玩家死亡",
	"status":[],
	"keywords":['玩家','死亡','结束游戏'],
	"desc_zh":"让玩家立即死亡",
	"code":`l Isaac.GetPlayer(0):Die()`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"禁止操作数秒",
	"status":[],
	"keywords":['玩家禁止操作','禁止输入'],
	"desc_zh":"强制冷静。让玩家在两秒（120帧）内无法操作。",
	"code":`l Isaac.GetPlayer(0).ControlsCooldown=120`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"缩放玩家贴图",
	"status":[],
	"keywords":['贴图','缩放','体积','玩家'],
	"desc_zh":"将玩家贴图水平放大至2倍，垂直放大至0.1倍。不影响实际碰撞。",
	"code":`l Isaac.GetPlayer(0).SpriteScale=Vector(2,0.1)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"缩放玩家碰撞",
	"status":[],
	"keywords":['碰撞','缩放','体积','玩家'],
	"desc_zh":"将玩家碰撞水平放大至2倍，垂直放大至0.1倍。不影响游戏贴图。",
	"code":`l Isaac.GetPlayer(0):SetSize(1,Vector(2,0.1),0)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"隐藏玩家贴图",
	"status":[],
	"keywords":['隐藏贴图','玩家贴图','隐藏玩家','隐藏','玩家'],
	"desc_zh":"隐藏玩家的贴图。你看不到自己。将指令中的false改为true即可实现相反的效果。",
	"code":`l Isaac.GetPlayer(0).Visible=false`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"玩家贴图左右翻转",
	"status":[],
	"keywords":['翻转贴图','玩家贴图','翻转玩家','翻转','玩家'],
	"desc_zh":"左右翻转玩家的贴图。将指令中的true改为false即可实现停止这一效果。好像没有什么用的东西。",
	"code":`l Isaac.GetPlayer(0).FlipX=true`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"玩家贴图旋转（固定值）",
	"status":[],
	"keywords":['旋转贴图','玩家贴图','旋转玩家','旋转','玩家','整活'],
	"desc_zh":"将玩家的贴图逆时针为旋转45度。奇怪的指令增加了。",
	"code":`l Isaac.GetPlayer(0).SpriteRotation=45`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"玩家贴图旋转（相对值）",
	"status":[],
	"keywords":['旋转贴图','玩家贴图','旋转玩家','旋转','玩家','整活'],
	"desc_zh":"将玩家的贴图逆时针继续旋转45度。奇怪的指令增加了。",
	"code":`l Isaac.GetPlayer(0).SpriteRotation=Isaac.GetPlayer(0).SpriteRotation+45`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置鼠标最近拾取物价格",
	"status":[],
	"keywords":['修改价钱','改变价格','打折','价钱','设置价格','鼠标最近'],
	"desc_zh":"将鼠标最近的物品价格设置为99元，并关闭自动更新价格的属性。（确认过眼神，是你买不起的样子）。价格除了整数之外，还可以取4个特殊值：-1即一颗红心，-2为两颗红心，-3为三颗魂心，-1000为0元免费。",
	"code":`l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ToPickup().AutoUpdatePrice=false;_e:ToPickup().Price=99`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"移除鼠标最近拾取物价格",
	"status":[],
	"keywords":['修改价钱','改变价格','打折','价钱','设置价格','移除','鼠标最近'],
	"desc_zh":"将鼠标最近的物品价格移除。你免费了。",
	"code":`l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ToPickup().AutoUpdatePrice=true;_e:ToPickup().Price=0`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置鼠标最近拾取物充能",
	"status":[],
	"keywords":['修改充能','改变','设置','主动充能','鼠标最近'],
	"desc_zh":"将鼠标最近的（主动）物品充能设置为3。",
	"code":`l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ToPickup().Charge=3`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置鼠标最近拾取物的拾取冷却",
	"status":[],
	"keywords":['修改冷却','拾取冷却','鼠标最近'],
	"desc_zh":"鼠标最近的物品在2秒（时间为60）内无法被拾取。",
	"code":`l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ToPickup().Wait=60`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"设置鼠标最近拾取物的超时",
	"status":[],
	"keywords":['修改超时','拾取超时','鼠标最近'],
	"desc_zh":"鼠标最近的物品在2秒（时间为60）内无法被拾取，时间结束后消失。",
	"code":`l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ToPickup().Timeout=60`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"卸除装备到地板上",
	"status":[],
	"keywords":['卸装','丢弃道具','丢弃物品'],
	"desc_zh":"将角色身上除327、328（全家福、底片）外的所有被动道具丢在地上。你可以修改第一对{}括号内的数字，使用逗号隔开，这些数字对应的道具不会被丢弃。",
	"code":`l local t,_t,_p={327,328},{};for _,i in pairs(t) do _t[i]=true end for i=1,Isaac.GetItemConfig():GetCollectibles().Size-1 do _p=Isaac.GetItemConfig():GetCollectible(i) if not _t[i] and _p and _p.Type ~= ItemType.ITEM_ACTIVE then _p=Isaac.GetPlayer(0) while(_p:HasCollectible(i)) do _p:RemoveCollectible(i);Isaac.Spawn(5,100,i,Isaac.GetRandomPosition(),Vector(0,0),_p) end end end`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"卸除装备到log文件中",
	"status":[],
	"keywords":['卸装','丢弃道具','丢弃物品'],
	"desc_zh":"将角色身上除327、328（全家福、底片）外的所有被动道具丢在log文件中，你可以通过复制log文件中的代码再次拾取这些道具。你可以修改第一对{}括号内的数字，使用逗号隔开，这些数字对应的道具不会被丢弃。你想知道log文件是什么吗？它位于游戏存档目录的log.txt，打开它，翻到最后就能看到了。（通常位于电脑的：文档\\My Games\\Binding of Isaac Afterbirth+\\log.txt）",
	"code":`l local t,_t,_s,_p={327,328},{},'player_status:';for _,i in pairs(t) do _t[i]=true end for i=1,Isaac.GetItemConfig():GetCollectibles().Size-1 do _p=Isaac.GetItemConfig():GetCollectible(i) if not _t[i] and _p and _p.Type ~= ItemType.ITEM_ACTIVE then _p=Isaac.GetPlayer(0) while(_p:HasCollectible(i)) do _p:RemoveCollectible(i);_s=_s..'\ng c'..i end end end Isaac.DebugString(_s)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"强制丢弃饰品",
	"status":[],
	"keywords":['丢弃饰品','去除饰品'],
	"desc_zh":"丢弃玩家身上的饰品（包括血虱）",
	"code":`l Isaac.GetPlayer(0):DropTrinket(Isaac.GetFreeNearPosition(Isaac.GetPlayer(0).Position,50),true)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"药丸池中增加药丸",
	"status":[],
	"keywords":['药丸','增加','药片','药丸池','药池'],
	"desc_zh":"给本局增加Bad Gas药丸，并在控制台上打印对应的药丸颜色。你可以将指令中的PILLEFFECT_BAD_GAS替换为枚举量PillEffect的其它值。打印的颜色为枚举量PillColor。<details>枚举量PillEffect的值有：PILLEFFECT_BAD_GAS, PILLEFFECT_BAD_TRIP, PILLEFFECT_BALLS_OF_STEEL, PILLEFFECT_BOMBS_ARE_KEYS, PILLEFFECT_EXPLOSIVE_DIARRHEA, PILLEFFECT_FULL_HEALTH, PILLEFFECT_HEALTH_DOWN, PILLEFFECT_HEALTH_UP, PILLEFFECT_I_FOUND_PILLS, PILLEFFECT_PUBERTY, PILLEFFECT_PRETTY_FLY, PILLEFFECT_RANGE_DOWN, PILLEFFECT_RANGE_UP, PILLEFFECT_SPEED_DOWN, PILLEFFECT_SPEED_UP, PILLEFFECT_TEARS_DOWN, PILLEFFECT_TEARS_UP, PILLEFFECT_LUCK_DOWN, PILLEFFECT_LUCK_UP, PILLEFFECT_TELEPILLS, PILLEFFECT_48HOUR_ENERGY, PILLEFFECT_HEMATEMESIS, PILLEFFECT_PARALYSIS, PILLEFFECT_SEE_FOREVER, PILLEFFECT_PHEROMONES, PILLEFFECT_AMNESIA, PILLEFFECT_LEMON_PARTY, PILLEFFECT_WIZARD, PILLEFFECT_PERCS, PILLEFFECT_ADDICTED, PILLEFFECT_RELAX, PILLEFFECT_QUESTIONMARK, PILLEFFECT_LARGER, PILLEFFECT_SMALLER, PILLEFFECT_INFESTED_EXCLAMATION, PILLEFFECT_INFESTED_QUESTION, PILLEFFECT_POWER, PILLEFFECT_RETRO_VISION, PILLEFFECT_FRIENDS_TILL_THE_END, PILLEFFECT_X_LAX, PILLEFFECT_SOMETHINGS_WRONG, PILLEFFECT_IM_DROWSY, PILLEFFECT_IM_EXCITED, PILLEFFECT_GULP, PILLEFFECT_HORF, PILLEFFECT_SUNSHINE, PILLEFFECT_VURP<br /> 药丸颜色值为：蓝_蓝 = 1, 白_蓝 = 2, 橙_橙 = 3, 白_白 = 4, 红点_红 = 5, 粉_红 = 6, 蓝_军校蓝 = 7, 黄_橙 = 8, 橙点_白 = 9, 白_天蓝 = 10, 黑_黄 = 11, 白_黑 = 12, 白_黄 = 13</details>",
	"code":`l print(Isaac.AddPillEffectToPool(PillEffect.PILLEFFECT_BAD_GAS))`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"掉落道具强制替换（道具）",
	"status":['reset'],
	"keywords":['禁止拾取道具','废除道具房间','替换掉落物品'],
	"desc_zh":"将除了全家福(327)、底片(328)、晚餐(第一个23)之外的所有道具掉落替换为晚餐(第二个23)，味道美极了。可以roll，但出入房间后还是会被替换。",
	"code":`l local t,_t,_c={327,328,23},{},23 for _,i in pairs(t) do _t[i]=true end ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN,function(_,e,v,s,_,_,_,S) return e==5 and (v==100 or v==150) and not _t[s] and {e,100,_c,S} or nil end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"掉落道具强制替换（掉落）",
	"status":['reset'],
	"keywords":['禁止拾取道具','废除道具房间','替换掉落物品'],
	"desc_zh":"将除了全家福(327)、底片(328)之外的所有道具掉落替换为一枚幸运币（spawn指令对应的id为5.20.5）。请注意这条指令在商店会产生一些奇特的行为。",
	"code":`l local t,_t={327,328},{} for _,i in pairs(t) do _t[i]=true end ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN,function(_,e,v,s,_,_,_,S) return e==5 and (v==100 or v==150) and not _t[s] and {5,20,5,S} or nil end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"xxx房间内，掉落道具强制替换（道具）",
	"status":['reset'],
	"keywords":['禁止拾取道具','废除道具房间','替换掉落物品'],
	"desc_zh":"当位于宝箱房时，将除了全家福(327)、底片(328)、晚餐(第一个23)之外的所有道具掉落替换为晚餐(第二个23)，味道美极了。可以roll，但出入房间后还是会被替换。你可以修改指令中的ROOM_TREASURE修改为枚举量RoomType的值。<details>枚举量RoomType包含的值有：ROOM_DEFAULT, ROOM_SHOP, ROOM_ERROR, ROOM_TREASURE, ROOM_BOSS, ROOM_MINIBOSS, ROOM_SECRET, ROOM_SUPERSECRET, ROOM_ARCADE, ROOM_CURSE, ROOM_CHALLENGE, ROOM_LIBRARY, ROOM_SACRIFICE, ROOM_DEVIL, ROOM_ANGEL, ROOM_DUNGEON, ROOM_BOSSRUSH, ROOM_ISAACS, ROOM_BARREN, ROOM_CHEST, ROOM_DICE, ROOM_BLACK_MARKET, ROOM_GREED_EXIT</details>",
	"code":`l local t,_t,_c={327,328,23},{},23 for _,i in pairs(t) do _t[i]=true end ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN,function(_,e,v,s,_,_,_,S) return Game():GetRoom():GetType()==RoomType.ROOM_TREASURE and e==5 and (v==100 or v==150) and not _t[s] and {e,100,_c,S} or nil end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"xxx房间内，掉落道具强制替换（掉落）",
	"status":['reset'],
	"keywords":['禁止拾取道具','废除道具房间','替换掉落物品'],
	"desc_zh":"当位于宝箱房时，将除了全家福(327)、底片(328)之外的所有道具掉落替换为一枚幸运币（spawn指令对应的id为5.20.5）。请注意这条指令在商店会产生一些奇特的行为。你可以修改指令中的ROOM_TREASURE修改为枚举量RoomType的值。<details>枚举量RoomType包含的值有：ROOM_DEFAULT, ROOM_SHOP, ROOM_ERROR, ROOM_TREASURE, ROOM_BOSS, ROOM_MINIBOSS, ROOM_SECRET, ROOM_SUPERSECRET, ROOM_ARCADE, ROOM_CURSE, ROOM_CHALLENGE, ROOM_LIBRARY, ROOM_SACRIFICE, ROOM_DEVIL, ROOM_ANGEL, ROOM_DUNGEON, ROOM_BOSSRUSH, ROOM_ISAACS, ROOM_BARREN, ROOM_CHEST, ROOM_DICE, ROOM_BLACK_MARKET, ROOM_GREED_EXIT</details>",
	"code":`l local t,_t={327,328},{} for _,i in pairs(t) do _t[i]=true end ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN,function(_,e,v,s,_,_,_,S) return Game():GetRoom():GetType()==RoomType.ROOM_TREASURE and e==5 and (v==100 or v==150) and not _t[s] and {5,20,5,S} or nil end)`,
	"about":'@frto027',
	"about_link":''
},{
	"name_zh":"给某种怪物增加标志位",
	"status":[],
	"keywords":['增加标志位','增加属性'],
	"desc_zh":"给当前房间中所有的萌死戳（spawn的第一个数字，即种类为20）增加恐惧标志位（FLAG_FEAR）。你可以将FLAG_FEAR替换为一个或多个枚举量EntityFlag，并使用“|”隔开。例如：EntityFlag.FLAG_FEAR|EntityFlag.FLAG_BURN|EntityFlag.FLAG_CONFUSION表示恐惧、燃烧、眩晕三个特性。<details>EntityFlag的标志位有：FLAG_NO_STATUS_EFFECTS, FLAG_NO_INTERPOLATE, FLAG_APPEAR, FLAG_RENDER_FLOOR, FLAG_NO_TARGET, FLAG_FREEZE, FLAG_POISON, FLAG_SLOW, FLAG_CHARM, FLAG_CONFUSION, FLAG_MIDAS_FREEZE, FLAG_FEAR, FLAG_BURN, FLAG_RENDER_WALL, FLAG_INTERPOLATION_UPDATE, FLAG_APPLY_GRAVITY, FLAG_NO_BLOOD_SPLASH, FLAG_NO_REMOVE_ON_TEX_RENDER, FLAG_NO_DEATH_TRIGGER, FLAG_NO_SPIKE_DAMAGE, FLAG_BOSSDEATH_TRIGGERED, FLAG_DONT_OVERWRITE, FLAG_SPAWN_STICKY_SPIDERS, FLAG_SPAWN_BLACK_HP, FLAG_SHRINK, FLAG_NO_FLASH_ON_DAMAGE, FLAG_NO_KNOCKBACK, FLAG_SLIPPERY_PHYSICS, FLAG_ADD_JAR_FLY, FLAG_FRIENDLY, FLAG_NO_PHYSICS_KNOCKBACK, FLAG_DONT_COUNT_BOSS_HP, FLAG_NO_SPRITE_UPDATE, FLAG_CONTAGIOUS, FLAG_BLEED_OUT, FLAG_HIDE_HP_BAR, FLAG_NO_DAMAGE_BLINK, FLAG_PERSISTENT</details>",
	"code":`l for _,v in pairs(Isaac.GetRoomEntities()) do if v.Type==20 then v:AddEntityFlags(EntityFlag.FLAG_FEAR) end end`,
	"about":'@frto027',
	"about_link":''
}
]
