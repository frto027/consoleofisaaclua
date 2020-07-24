
## It is just a game

此Readme文件通过`rm_gen.js`自动生成。  
你可以在线访问本项目的[gitee pages](http://frto027.gitee.io/consoleofisaaclua)或[github pages](https://frto027.github.io/consoleofisaaclua)  
建议[从gitee](https://gitee.com/frto027/consoleofisaaclua/repository/archive/master.zip)或[从github](https://github.com/frto027/consoleofisaaclua/archive/master.zip)下载离线版，解压后打开`index.html`。


-----

### 你好，世界
在控制台上打印"hello, world"<a href='https://baike.baidu.com/item/hello%20world/85501'>更多</a>
```
l print('hello, world')
```


-----

### 放置炸弹
在(200,200)的位置，放置一个带有横向初速度向右50的炸弹
```
l Isaac.GetPlayer(0):FireBomb(Vector(200,200),Vector(50,0))
```


-----

### 打印HP
打印当前房间中所有可受伤实体的hp
```
l for _,v in pairs(Isaac.GetRoomEntities()) do if v:IsVulnerableEnemy() then print(v.HitPoints.."/"..v.MaxHitPoints) end end
```


-----

### 增加诅咒
增加诅咒位CURSE_OF_BLIND（致盲诅咒，看不见物品）。你可以将指令中的CURSE_OF_BLIND替换为下面的值之一：CURSE_OF_DARKNESS, CURSE_OF_LABYRINTH, CURSE_OF_THE_LOST, CURSE_OF_THE_UNKNOWN, CURSE_OF_THE_CURSED, CURSE_OF_MAZE, CURSE_OF_BLIND
```
l Game():GetLevel():AddCurse(LevelCurse.CURSE_OF_BLIND)
```


-----

### 移除诅咒
移除诅咒位CURSE_OF_BLIND（致盲诅咒，看不见物品）。你可以将指令中的CURSE_OF_BLIND替换为下面的值之一：CURSE_OF_DARKNESS, CURSE_OF_LABYRINTH, CURSE_OF_THE_LOST, CURSE_OF_THE_UNKNOWN, CURSE_OF_THE_CURSED, CURSE_OF_MAZE, CURSE_OF_BLIND
```
l Game():GetLevel():RemoveCurse(LevelCurse.CURSE_OF_BLIND)
```


-----

### 蒙眼
角色无法再发射任何子弹
```
暂无
```


-----

### 展示预言
展示一条预言机的预言
```
l Game():ShowFortune()
```


-----

### 展示规则
展示一条规则卡的规则
```
l Game():ShowRule()
```


-----

### 随机移动
以随机条件123进行当前层的随机传送
```
l Game():MoveToRandomRoom(True,123)
```


-----

### 随机传送
随机进行当前层的传送
```
l Game():MoveToRandomRoom(True,Random())
```


-----

### 取当前房间网格索引
打印当前的房间索引（RoomIndex，GridIndex）
```
l print(Game():GetLevel():GetCurrentRoomDesc().SafeGridIndex)
```


-----

### 取上一个房间网格索引
打印上一个房间索引（RoomIndex，GridIndex）
```
l print(Game():GetLevel():GetLastRoomDesc().SafeGridIndex)
```


-----

### 传送至房间网格索引
传送至房间网格索引(GridIndex)为84的房间，网格索引和小地图有关，请小心崩溃，经测试84为出生点。
```
l Game():ChangeRoom(84)
```


-----

### 晃动屏幕
摇晃屏幕，时间为30。不清楚单位，猜测是半帧，估计30=1秒。
```
l Game():ShakeScreen(30)
```


-----

### 屏幕黑暗
以0.7的黑暗程度(猜测范围0 ~ 1)进行黑屏，时间为30。不清楚单位，猜测是半帧，估计30=1秒。
```
l Game():Darken(0.7,30)
```


-----

### 打印胜利跑圈数
在控制台上打印胜利跑圈数
```
l print(Game():GetVictoryLap())
```


-----

### 进行下一轮胜利跑圈
直接开启下一轮跑圈
```
l Game():NextVictoryLap()
```


-----

### 随机位置生成x石头
在随机位置生成x石头，不会覆盖已有地形
```
l Isaac.GridSpawn(GridEntityType.GRID_ROCKT,0,Isaac.GetRandomPosition(),false)
```


-----

### 定点生成地形
在鼠标所指位置生成石头（GRID_ROCK），不会覆盖已有地形。其中GRID_ROCK可替换为枚举量GridEntityType的任意值。<details>GridEntityType包括：GRID_DECORATION, GRID_ROCK, GRID_ROCKB, GRID_ROCKT, GRID_ROCK_BOMB, GRID_ROCK_ALT, GRID_PIT, GRID_SPIKES, GRID_SPIKES_ONOFF, GRID_SPIDERWEB, GRID_LOCK, GRID_TNT, GRID_FIREPLACE（未使用）, GRID_POOP, GRID_WALL, GRID_DOOR, GRID_TRAPDOOR, GRID_STAIRS, GRID_GRAVITY, GRID_PRESSURE_PLATE, GRID_STATUE, GRID_ROCK_SS</details>
```
l Isaac.GridSpawn(GridEntityType.GRID_ROCK,0,Input.GetMousePosition(true),false)
```


-----

### 生成友好怪物
生成种类、变体、子类型为100,0,0的怪物，位置是(200,200)，速度为0，并具有友好、魅惑、持久（更换房间后不消失）属性
```
l Isaac.Spawn(100,0,0,Vector(200,200),Vector(0,0),Isaac.GetPlayer(0)):AddEntityFlags(EntityFlag.FLAG_FRIENDLY|EntityFlag.FLAG_CHARM|EntityFlag.FLAG_PERSISTENT)
```


-----

### 定点生成/生产实体
生成种类、变体、子类型为5,100,118的实体（硫磺火），位置是鼠标所指位置，速度为0。这三个数字详见控制台的spawn指令。
```
l Isaac.Spawn(5,100,118,Input.GetMousePosition(true),Vector(0,0),Isaac.GetPlayer(0))
```


-----

### 打印去过的宝箱房数量
去过几个宝箱房，就打印几
```
l print(Game():GetTreasureRoomVisitCount())
```


-----

### 定点流血特效
令距离鼠标位置最近的实体脚下的地板染红。可以用来观察鼠标最近的实体是哪一个。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:BloodExplode()
```


-----

### 击杀鼠标最近实体
消灭距离鼠标位置最近的实体
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:Kill()
```


-----

### 移除鼠标最近实体
移除距离鼠标位置最近的实体
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:Remove()
```


-----

### 设置鼠标最近实体的速度
令距离鼠标位置最近的实体速度增加(10,20)
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddVelocity(Vector(10,20))
```


-----

### 设置鼠标最近实体的颜色
令距离鼠标最近的实体颜色变成红、绿、蓝、透明度依次为0.1，0.9，0.2，0.5的颜色，其中最后的true表示启用渐变，改为false为禁用渐变。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:SetColor(Color(0.1,0.9,0.2,0.5,0,0,0),30,0,true)
```


-----

### 设置鼠标最近实体的大小(碰撞体积)
令距离鼠标最近的实体的碰撞体积大小为1，水平缩放0.9，竖直缩放1.5。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:SetSize(1,Vector(0.2,1.5),0)
```


-----

### 为鼠标最近实体添加特性
给距离鼠标最近的实体增加FLAG_FEAR标志位（恐惧）。你可以将FLAG_FEAR替换为一个或多个枚举量EntityFlag，并使用“|”隔开。例如：EntityFlag.FLAG_FEAR|EntityFlag.FLAG_BURN|EntityFlag.FLAG_CONFUSION表示恐惧、燃烧、眩晕三个特性。<details>EntityFlag的标志位有：FLAG_NO_STATUS_EFFECTS, FLAG_NO_INTERPOLATE, FLAG_APPEAR, FLAG_RENDER_FLOOR, FLAG_NO_TARGET, FLAG_FREEZE, FLAG_POISON, FLAG_SLOW, FLAG_CHARM, FLAG_CONFUSION, FLAG_MIDAS_FREEZE, FLAG_FEAR, FLAG_BURN, FLAG_RENDER_WALL, FLAG_INTERPOLATION_UPDATE, FLAG_APPLY_GRAVITY, FLAG_NO_BLOOD_SPLASH, FLAG_NO_REMOVE_ON_TEX_RENDER, FLAG_NO_DEATH_TRIGGER, FLAG_NO_SPIKE_DAMAGE, FLAG_BOSSDEATH_TRIGGERED, FLAG_DONT_OVERWRITE, FLAG_SPAWN_STICKY_SPIDERS, FLAG_SPAWN_BLACK_HP, FLAG_SHRINK, FLAG_NO_FLASH_ON_DAMAGE, FLAG_NO_KNOCKBACK, FLAG_SLIPPERY_PHYSICS, FLAG_ADD_JAR_FLY, FLAG_FRIENDLY, FLAG_NO_PHYSICS_KNOCKBACK, FLAG_DONT_COUNT_BOSS_HP, FLAG_NO_SPRITE_UPDATE, FLAG_CONTAGIOUS, FLAG_BLEED_OUT, FLAG_HIDE_HP_BAR, FLAG_NO_DAMAGE_BLINK, FLAG_PERSISTENT</details>
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddEntityFlags(EntityFlag.FLAG_FEAR)
```


-----

### 为鼠标最近实体移除特性
给距离鼠标最近的实体移除FLAG_FEAR标志位（恐惧）。你可以将FLAG_FEAR替换为一个或多个枚举量EntityFlag，并使用“|”隔开。例如：EntityFlag.FLAG_FEAR|EntityFlag.FLAG_BURN|FLAG_CONFUSION表示恐惧、燃烧、眩晕三个特性。<details>EntityFlag的标志位有：FLAG_NO_STATUS_EFFECTS, FLAG_NO_INTERPOLATE, FLAG_APPEAR, FLAG_RENDER_FLOOR, FLAG_NO_TARGET, FLAG_FREEZE, FLAG_POISON, FLAG_SLOW, FLAG_CHARM, FLAG_CONFUSION, FLAG_MIDAS_FREEZE, FLAG_FEAR, FLAG_BURN, FLAG_RENDER_WALL, FLAG_INTERPOLATION_UPDATE, FLAG_APPLY_GRAVITY, FLAG_NO_BLOOD_SPLASH, FLAG_NO_REMOVE_ON_TEX_RENDER, FLAG_NO_DEATH_TRIGGER, FLAG_NO_SPIKE_DAMAGE, FLAG_BOSSDEATH_TRIGGERED, FLAG_DONT_OVERWRITE, FLAG_SPAWN_STICKY_SPIDERS, FLAG_SPAWN_BLACK_HP, FLAG_SHRINK, FLAG_NO_FLASH_ON_DAMAGE, FLAG_NO_KNOCKBACK, FLAG_SLIPPERY_PHYSICS, FLAG_ADD_JAR_FLY, FLAG_FRIENDLY, FLAG_NO_PHYSICS_KNOCKBACK, FLAG_DONT_COUNT_BOSS_HP, FLAG_NO_SPRITE_UPDATE, FLAG_CONTAGIOUS, FLAG_BLEED_OUT, FLAG_HIDE_HP_BAR, FLAG_NO_DAMAGE_BLINK, FLAG_PERSISTENT</details>
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ClearEntityFlags(EntityFlag.FLAG_FEAR)
```


-----

### 为鼠标最近实体增加血量
令距离鼠标最近的实体的生命值增加3.5。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddHealth(3.5)
```


-----

### 为鼠标最近实体增加中毒效果
令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的中毒效果。虽然1表示伤害值，但实测造成的是玩家面板伤害。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddPoison(EntityRef(nil),60,1)
```


-----

### 为鼠标最近实体增加石化效果
令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的石化效果。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddFreeze(EntityRef(nil),60)
```


-----

### 为鼠标最近实体增加减速效果
令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的减速效果，减速值为10（测试没有发现减速值的效果）
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddSlowing(EntityRef(nil),60,10,Color(1,1,1,1,0,0,0))
```


-----

### 为鼠标最近实体增加魅惑效果
令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的魅惑效果。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddCharmed(60)
```


-----

### 为鼠标最近实体增加眩晕效果
令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的眩晕效果。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddConfusion(EntityRef(nil),60,false)
```


-----

### 为鼠标最近实体增加点金石化效果
令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的点金石化效果。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddMidasFreeze(EntityRef(nil),60)
```


-----

### 为鼠标最近实体增加恐惧效果
令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的恐惧效果。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddFear(EntityRef(nil),60)
```


-----

### 为鼠标最近实体增加灼烧效果
令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的灼烧效果。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddBurn(EntityRef(nil),60,1)
```


-----

### 为鼠标最近实体增加缩小效果
令距离鼠标最近的实体增加2秒(指令中的60表示2秒)的缩小效果。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:AddShrink(EntityRef(nil),60)
```


-----

### 为鼠标最近实体移除状态特效
移除距离鼠标最近的实体的效果。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:RemoveStatusEffects()
```


-----

### 设置红心伤害
设置本层受过红心伤害（影响恶魔房概率）
```
l Game():GetLevel():SetRedHeartDamage()
```


-----

### 增加天使房转换率
增加0.1的天使转换率，数字可以为负数。真实效果不明。
```
l Game():GetLevel():AddAngelRoomChance(0.1)
```


-----

### 打印天使房转换率
打印天使放转换率。真实效果不明。
```
l print(Game():GetLevel():GetAngelRoomChance())
```


-----

### 显示地图
开图，和the world/the sun作用类似，但不显示超隐。
```
l Game():GetLevel():ShowMap()
```


-----

### 透视(I can see everything)
类似x光眼镜、I can see everything的效果。将true改为false就是关闭这一能力的指令。
```
l Game():GetLevel():SetCanSeeEverything(true)
```


-----

### 使用白地图
显示当前层的普通房间，类似白地图的效果
```
l Game():GetLevel():ApplyMapEffect(true)
```


-----

### 使用蓝地图
显示当前层的隐藏房间，类似蓝地图的效果
```
l Game():GetLevel():ApplyBlueMapEffect()
```


-----

### 使用指南针
显示当前层的特殊房间，类似指南针的效果
```
l Game():GetLevel():ApplyCompassEffect()
```


-----

### 移除指南针
移除指南针的效果，不显示特殊房间。需要和本页面的“使用指南针”配合使用。
```
l Game():GetLevel():RemoveCompassEffect()
```


-----

### 房间变为金色
将当前房间变为金色。总觉得这个特效在哪里见过？
```
l Game():GetLevel():GetCurrentRoom():TurnGold()
```


-----

### Mama mega大爆炸
触发一次Mama mega大炸弹的爆炸效果
```
l Game():GetLevel():GetCurrentRoom():MamaMegaExplossion()
```


-----

### 打印当前房间是否已有敌人死亡
打印当前房间是否已有敌人死亡
```
l print(Game():GetLevel():GetCurrentRoom():IsFirstEnemyDead())
```


-----

### 设置当前房间是否已有敌人死亡
设置当前房间已有敌人死亡，可以将true改为false，表示当前房间还没有敌人死亡
```
l Game():GetLevel():GetCurrentRoom():SetFirstEnemyDead(true)
```


-----

### 打印当前房间是否为最终Boss
打印当前房间是否为Boss房间
```
l print(Game():GetLevel():GetCurrentRoom():IsCurrentRoomLastBoss())
```


-----

### 重置当前房间的敌人
类似道具“D7”
```
l Game():GetLevel():GetCurrentRoom():RespawnEnemies()
```


-----

### 填平沟壑
在网格索引为40的位置上进行填充。可以使用debug 11来观察网格索引。只能在沟壑(pit)上使用，使用时请将40修改为当前房间中某个沟壑的网格索引。
```
l Game():GetLevel():GetCurrentRoom():TryMakeBridge(Game():GetLevel():GetCurrentRoom():GetGridEntity(40))
```


-----

### 移除地形
移除网格索引为60位置的地形（60在正常大小的房间中是左侧的门的位置，因此会移除左侧的门）。可以使用debug 11来观察网格索引。
```
l Game():GetLevel():GetCurrentRoom():RemoveGridEntity(60,0,true)
```


-----

### 定点移除地形
移除鼠标所在位置处的地形。可以使用debug 11来观察网格索引。
```
l Game():GetLevel():GetCurrentRoom():RemoveGridEntity(Game():GetLevel():GetCurrentRoom():GetClampedGridIndex(Input.GetMousePosition(true)),0,true)
```


-----

### 定点攻击地形
给鼠标所在位置处的地形造成1点伤害。
```
l Game():GetLevel():GetCurrentRoom():DamageGrid(Game():GetLevel():GetCurrentRoom():GetClampedGridIndex(Input.GetMousePosition(true)),1)
```


-----

### 定点摧毁地形（自然摧毁）
自然摧毁鼠标所在位置处的地形。例如，自然摧毁一个爆桶时，会发生爆炸。
```
l Game():GetLevel():GetCurrentRoom():DestroyGrid(Game():GetLevel():GetCurrentRoom():GetClampedGridIndex(Input.GetMousePosition(true)),false)
```


-----

### 定点摧毁地形（立即摧毁）
立即摧毁鼠标所在位置处的地形。例如，立即摧毁一个爆桶时，不会发生爆炸。
```
l Game():GetLevel():GetCurrentRoom():DestroyGrid(Game():GetLevel():GetCurrentRoom():GetClampedGridIndex(Input.GetMousePosition(true)),true)
```


-----

### 打印x石头网格索引
打印当前房间中x石头的网格索引。网格索引可以使用debug 11观察。
```
l print(Game():GetLevel():GetCurrentRoom():GetTintedRockIdx())
```


-----

### 打印地下室石头网格索引
打印当前房间中地下室石头的网格索引。-1表示不存在地下室。网格索引可以使用debug 11观察。
```
l print(Game():GetLevel():GetCurrentRoom():GetDungeonRockIdx())
```


-----

### 生成清图奖励
生成清理房间的奖励。
```
l Game():GetLevel():GetCurrentRoom():SpawnClearAward()
```


-----

### 墙壁冒血
似乎在哪里见过的特效。墙壁冒血，时间为30（持续1秒），密度为10。
```
l Game():GetLevel():GetCurrentRoom():EmitBloodFromWalls(30,10)
```


-----

### 反人类卡特效
在当前房间激活反人类卡的特效。开饭啦！
```
l Game():GetLevel():GetCurrentRoom():SetCardAgainstHumanity()
```


-----

### 坏表（加速/减速）特效
设置当前房间速度为正常(0)、减速(1)、加速(2)。修改指令中的数字来指定是哪种速度。
```
l Game():GetLevel():GetCurrentRoom():SetBrokenWatchState(0)
```


-----

### 尝试生成恶魔房门
需要满足开启条件才能成功，成功打印true，否则打印false。
```
l print(Game():GetLevel():GetCurrentRoom():TrySpawnDevilRoomDoor(true))
```


-----

### 尝试生成Boss Rush门
需要满足开启条件才能成功，指令中的true表示无视时间，改为false则会考虑游戏当前时间。成功打印true，否则打印false。
```
l print(Game():GetLevel():GetCurrentRoom():TrySpawnBossRushDoor(true))
```


-----

### 尝试生成mega撒旦门
需要满足开启条件才能成功，成功打印true，否则打印false。
```
l print(Game():GetLevel():GetCurrentRoom():TrySpawnMegaSatanRoomDoor())
```


-----

### 尝试生成hush门
需要满足开启条件才能成功，无视时间。成功打印true，否则打印false。
```
l print(Game():GetLevel():GetCurrentRoom():TrySpawnBlueWombDoor(true,true))
```


-----

### 尝试生成虚空门
需要满足开启条件才能成功。成功打印true，否则打印false。
```
l print(Game():GetLevel():GetCurrentRoom():TrySpawnTheVoidDoor())
```


-----

### 商店刷新
刷新商店的全部商品
```
l Game():GetLevel():GetCurrentRoom():ShopRestockFull()
```


-----

### 打印当前房间是否清理
打印当前房间是否清理
```
l print(Game():GetLevel():GetCurrentRoom():IsClear())
```


-----

### 设置当前房间是否清理
清理当前房间。将true改为false即设置为未清理状态。注意，改变房间的清理/未清理状态后，游戏将立即进行结算。
```
l Game():GetLevel():GetCurrentRoom():SetClear(true)
```


-----

### 移除一扇门
移除房间中的某个门。其中DOWN0可以替换为UP0、RIGHT0、LEFT0、LEFT1、UP1、RIGHT1、DOWN1。注意，该指令不保存房间状态。
```
l Game():GetLevel():GetCurrentRoom():RemoveDoor(DoorSlot.DOWN0)
```


-----

### 增加心之容器
增加两个心之容器。true表示无视Keeper。数字4表示两个心之容器，单位是“半血”，如果是单数，则会出现半格血上限的情况。
```
l Isaac.GetPlayer(0):AddMaxHearts(4,true)
```


-----

### 增加红心
增加2颗红心。数量为4，单位是半血。
```
l Isaac.GetPlayer(0):AddHearts(4)
```


-----

### 增加白心
增加半颗白心。数字1表示半颗，单位为半血。
```
l Isaac.GetPlayer(0):AddEternalHearts(1)
```


-----

### 增加魂心
增加半颗魂心。数字1表示半颗，单位为半血。
```
l Isaac.GetPlayer(0):AddSoulHearts(1)
```


-----

### 增加黑心
增加半颗黑心。数字1表示半颗，单位为半血。
```
l Isaac.GetPlayer(0):AddBlackHearts(1)
```


-----

### 增加10块钱
增加10块钱。换成负数就是扣钱。
```
l Isaac.GetPlayer(0):AddCoins(10)
```


-----

### 增加10个炸弹
增加10个炸弹。换成负数就是扣炸弹。
```
l Isaac.GetPlayer(0):AddBombs(10)
```


-----

### 增加10个钥匙
增加10个钥匙。换成负数就是扣钥匙。
```
l Isaac.GetPlayer(0):AddKeys(10)
```


-----

### 设置金钥匙
设置金钥匙
```
l Isaac.GetPlayer(0):AddGoldenKey()
```


-----

### 移除金钥匙
移除金钥匙
```
l Isaac.GetPlayer(0):RemoveGoldenKey()
```


-----

### 设置金炸弹
设置金炸弹
```
l Isaac.GetPlayer(0):AddGoldenBomb()
```


-----

### 移除金炸弹
移除金炸弹
```
l Isaac.GetPlayer(0):RemoveGoldenBomb()
```


-----

### 增加金心
增加2颗金心
```
l Isaac.GetPlayer(0):AddGoldenHearts(2)
```


-----

### 增加蓝蜘蛛
在随机位置生成蓝蜘蛛
```
l Isaac.GetPlayer(0):AddBlueSpider(Isaac.GetRandomPosition())
```


-----

### 增加蓝苍蝇
在随机位置，以玩家为目标，生成3个蓝苍蝇
```
l Isaac.GetPlayer(0):AddBlueFlies(3,Isaac.GetRandomPosition(),Isaac.GetPlayer(0).Target)
```


-----

### 增加灰苍蝇（pretty fly）
生成1个灰苍蝇（围绕玩家旋转）
```
l Isaac.GetPlayer(0):AddPrettyFly()
```


-----

### 增加幸运
增加2点幸运值
```
l Isaac.GetPlayer(0):DonateLuck(2)
```


-----

### 设置充能
设置主动当前充能为3
```
l Isaac.GetPlayer(0):SetActiveCharge(3)
```


-----

### 补满充能
将主动充能补满
```
l Isaac.GetPlayer(0):FullCharge()
```


-----

### 清空充能
将主动充能设置为0
```
l Isaac.GetPlayer(0):DischargeActiveItem()
```


-----

### 红心补满
恢复所有心之容器
```
l Isaac.GetPlayer(0):SetFullHearts()
```


-----

### 打印玩家角色
打印玩家角色。可以用于判断当前角色是谁，角色信息见枚举量PlayerType。 PLAYER_ISAAC = 0, PLAYER_MAGDALENA = 1, PLAYER_CAIN = 2, PLAYER_JUDAS = 3,  PLAYER_XXX = 4, PLAYER_EVE = 5, PLAYER_SAMSON = 6, PLAYER_AZAZEL = 7,  PLAYER_LAZARUS = 8, PLAYER_EDEN = 9, PLAYER_THELOST = 10, PLAYER_LAZARUS2 = 11,  PLAYER_BLACKJUDAS = 12, PLAYER_LILITH = 13, PLAYER_KEEPER = 14, PLAYER_APOLLYON = 15,  PLAYER_THEFORGOTTEN = 16, PLAYER_THESOUL = 17
```
l print(Isaac.GetPlayer(0):GetPlayerType())
```


-----

### 打印蓝苍蝇数量
打印目前蓝苍蝇的数量
```
l print(Isaac.GetPlayer(0):GetNumBlueFlies())
```


-----

### 打印蓝蜘蛛数量
打印目前蓝蜘蛛的数量
```
l print(Isaac.GetPlayer(0):GetNumBlueSpiders())
```


-----

### 触发主动效果
触发金传送器（419号）主动的效果
```
l Isaac.GetPlayer(0):UseActiveItem(419,true,true,true,false)
```


-----

### 触发卡片效果
触发The Fool卡片的效果。CARD_FOOL可以替换为枚举变量Card中的任意值（或使用卡片id）。<details>Card枚举变量可用值如下：<p>CARD_FOOL, CARD_MAGICIAN, CARD_HIGH_PRIESTESS, CARD_EMPRESS, CARD_EMPEROR, CARD_HIEROPHANT, CARD_LOVERS, CARD_CHARIOT, CARD_JUSTICE, CARD_HERMIT, CARD_WHEEL_OF_FORTUNE, CARD_STRENGTH, CARD_HANGED_MAN, CARD_DEATH, CARD_TEMPERANCE, CARD_DEVIL, CARD_TOWER, CARD_STARS, CARD_MOON, CARD_SUN, CARD_JUDGEMENT, CARD_WORLD, CARD_CLUBS_2, CARD_DIAMONDS_2, CARD_SPADES_2, CARD_HEARTS_2, CARD_ACE_OF_CLUBS, CARD_ACE_OF_DIAMONDS, CARD_ACE_OF_SPADES, CARD_ACE_OF_HEARTS, CARD_JOKER, RUNE_HAGALAZ, RUNE_JERA, RUNE_EHWAZ, RUNE_DAGAZ, RUNE_ANSUZ, RUNE_PERTHRO, RUNE_BERKANO, RUNE_ALGIZ, RUNE_BLANK, RUNE_BLACK, CARD_CHAOS, CARD_CREDIT, CARD_RULES, CARD_HUMANITY, CARD_SUICIDE_KING, CARD_GET_OUT_OF_JAIL, CARD_QUESTIONMARK, CARD_DICE_SHARD, CARD_EMERGENCY_CONTACT, CARD_HOLY, CARD_HUGE_GROWTH, CARD_ANCIENT_RECALL, CARD_ERA_WALK</p></details>
```
l Isaac.GetPlayer(0):UseCard(Card.CARD_FOOL)
```


-----

### 触发药丸效果
触发Bad Gas药丸的效果。PILLEFFECT_BAD_GAS可以替换为枚举变量PillEffect中的任意值（或使用药丸id）。<details>PillEffect枚举变量可用值如下：<p>PILLEFFECT_BAD_GAS, PILLEFFECT_BAD_TRIP, PILLEFFECT_BALLS_OF_STEEL, PILLEFFECT_BOMBS_ARE_KEYS, PILLEFFECT_EXPLOSIVE_DIARRHEA, PILLEFFECT_FULL_HEALTH, PILLEFFECT_HEALTH_DOWN, PILLEFFECT_HEALTH_UP, PILLEFFECT_I_FOUND_PILLS, PILLEFFECT_PUBERTY, PILLEFFECT_PRETTY_FLY, PILLEFFECT_RANGE_DOWN, PILLEFFECT_RANGE_UP, PILLEFFECT_SPEED_DOWN, PILLEFFECT_SPEED_UP, PILLEFFECT_TEARS_DOWN, PILLEFFECT_TEARS_UP, PILLEFFECT_LUCK_DOWN, PILLEFFECT_LUCK_UP, PILLEFFECT_TELEPILLS, PILLEFFECT_48HOUR_ENERGY, PILLEFFECT_HEMATEMESIS, PILLEFFECT_PARALYSIS, PILLEFFECT_SEE_FOREVER, PILLEFFECT_PHEROMONES, PILLEFFECT_AMNESIA, PILLEFFECT_LEMON_PARTY, PILLEFFECT_WIZARD, PILLEFFECT_PERCS, PILLEFFECT_ADDICTED, PILLEFFECT_RELAX, PILLEFFECT_QUESTIONMARK, PILLEFFECT_LARGER, PILLEFFECT_SMALLER, PILLEFFECT_INFESTED_EXCLAMATION, PILLEFFECT_INFESTED_QUESTION, PILLEFFECT_POWER, PILLEFFECT_RETRO_VISION, PILLEFFECT_FRIENDS_TILL_THE_END, PILLEFFECT_X_LAX, PILLEFFECT_SOMETHINGS_WRONG, PILLEFFECT_IM_DROWSY, PILLEFFECT_IM_EXCITED, PILLEFFECT_GULP, PILLEFFECT_HORF, PILLEFFECT_SUNSHINE, PILLEFFECT_VURP</p></details>
```
l Isaac.GetPlayer(0):UsePill(PillEffect.PILLEFFECT_BAD_GAS,0)
```


-----

### 增加骨心
增加2颗骨心
```
l Isaac.GetPlayer(0):AddBoneHearts(2)
```


-----

### 复活玩家
复活玩家，增加半颗蓝心,并触发钝刀片的效果（以提供一定时间的无敌）。
```
l Isaac.GetPlayer(0):Revive();Isaac.GetPlayer(0):UseActiveItem(486,false,true,true,false)
```


-----

### 当发射眼泪时，...
当玩家发射眼泪时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR,function() print('hello, world') end)
```


-----

### 当发射眼泪时，增加幸运
当玩家发射眼泪时，增加幸运。这是指令“当发射眼泪时，...”的一个使用示例。指令中的hello world被替换为增加幸运的lua指令。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR,function() Isaac.GetPlayer(0):DonateLuck(1) end)
```


-----

### 当玩家受伤时，...
当玩家受伤时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_ENTITY_TAKE_DMG,function(_) print('hello, world') end,EntityType.ENTITY_PLAYER)
```


-----

### 当使用主动时，...
当使用任意主动道具时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_ITEM,function(_) print('hello, world') end)
```


-----

### 当使用某个主动时，...
当使用id为105的主动道具（D6）时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_ITEM,function(_) print('hello, world') end,105)
```


-----

### 当使用卡片时，...
当使用任意卡片时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_CARD,function(_) print('hello, world') end)
```


-----

### 当使用某个卡片时，...
当使用The Fool卡时，打印hello, world到控制台上。你可以将指令中的CARD_FOOL替换为枚举变量Card中的任意值。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。<details>Card枚举变量可用值如下：<p>CARD_FOOL, CARD_MAGICIAN, CARD_HIGH_PRIESTESS, CARD_EMPRESS, CARD_EMPEROR, CARD_HIEROPHANT, CARD_LOVERS, CARD_CHARIOT, CARD_JUSTICE, CARD_HERMIT, CARD_WHEEL_OF_FORTUNE, CARD_STRENGTH, CARD_HANGED_MAN, CARD_DEATH, CARD_TEMPERANCE, CARD_DEVIL, CARD_TOWER, CARD_STARS, CARD_MOON, CARD_SUN, CARD_JUDGEMENT, CARD_WORLD, CARD_CLUBS_2, CARD_DIAMONDS_2, CARD_SPADES_2, CARD_HEARTS_2, CARD_ACE_OF_CLUBS, CARD_ACE_OF_DIAMONDS, CARD_ACE_OF_SPADES, CARD_ACE_OF_HEARTS, CARD_JOKER, RUNE_HAGALAZ, RUNE_JERA, RUNE_EHWAZ, RUNE_DAGAZ, RUNE_ANSUZ, RUNE_PERTHRO, RUNE_BERKANO, RUNE_ALGIZ, RUNE_BLANK, RUNE_BLACK, CARD_CHAOS, CARD_CREDIT, CARD_RULES, CARD_HUMANITY, CARD_SUICIDE_KING, CARD_GET_OUT_OF_JAIL, CARD_QUESTIONMARK, CARD_DICE_SHARD, CARD_EMERGENCY_CONTACT, CARD_HOLY, CARD_HUGE_GROWTH, CARD_ANCIENT_RECALL, CARD_ERA_WALK</p></details>
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_CARD,function(_) print('hello, world') end,Card.CARD_FOOL)
```


-----

### 当游戏开始时，...
当游戏开始/继续时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_STARTED,function(_) print('hello, world') end)
```


-----

### 当开始新游戏时，...
当游戏首次开始(new run)时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_STARTED,function(_,mpgsc) if(not mpgsc) then print('hello, world') end end)
```


-----

### 当继续游戏时，...
当游戏读档继续(continue)时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_STARTED,function(_,mpgsc) if(mpgsc) then print('hello, world') end end)
```


-----

### 当退出游戏时，...
当退出游戏时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_PRE_GAME_EXIT,function(_) print('hello, world') end)
```


-----

### 当玩家死亡，游戏结束时，...
当因死亡结束游戏时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_END,function(_,mpgeiso) if(mpgeiso) then print('hello, world') end end)
```


-----

### 当玩家通关，游戏结束时，...
当因通关结束游戏时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_END,function(_,mpgeiso) if(not mpgeiso) then print('hello, world') end end)
```


-----

### 当进入新关卡/楼层时，...
当进入新的楼层或关卡时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_NEW_LEVEL,function(_) print('hello, world') end)
```


-----

### 当进入新房间时，...
当进入新的房间时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_NEW_ROOM,function(_) print('hello, world') end)
```


-----

### 当按下键盘时，...
当按下键盘上的K键时时，打印hello, world到控制台上。其中KEY_K可以替换为枚举量Keyboard的值。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。<details>枚举量Keyboard包含以下值：KEY_SPACE, KEY_APOSTROPHE, KEY_COMMA, KEY_MINUS, KEY_PERIOD, KEY_SLASH, KEY_0, KEY_1, KEY_2, KEY_3, KEY_4, KEY_5, KEY_6, KEY_7, KEY_8, KEY_9, KEY_SEMICOLON, KEY_EQUAL, KEY_A, KEY_B, KEY_C, KEY_D, KEY_E, KEY_F, KEY_G, KEY_H, KEY_I, KEY_J, KEY_K, KEY_L, KEY_M, KEY_N, KEY_O, KEY_P, KEY_Q, KEY_R, KEY_S, KEY_T, KEY_U, KEY_V, KEY_W, KEY_X, KEY_Y, KEY_Z, KEY_LEFT_BRACKET, KEY_BACKSLASH, KEY_RIGHT_BRACKET, KEY_GRAVE_ACCENT, KEY_WORLD_1, KEY_WORLD_2, KEY_ESCAPE, KEY_ENTER, KEY_TAB, KEY_BACKSPACE, KEY_INSERT, KEY_DELETE, KEY_RIGHT, KEY_LEFT, KEY_DOWN, KEY_UP, KEY_PAGE_UP, KEY_PAGE_DOWN, KEY_HOME, KEY_END, KEY_CAPS_LOCK, KEY_SCROLL_LOCK, KEY_NUM_LOCK, KEY_PRINT_SCREEN, KEY_PAUSE, KEY_F1, KEY_F2, KEY_F3, KEY_F4, KEY_F5, KEY_F6, KEY_F7, KEY_F8, KEY_F9, KEY_F10, KEY_F11, KEY_F12, KEY_F13, KEY_F14, KEY_F15, KEY_F16, KEY_F17, KEY_F18, KEY_F19, KEY_F20, KEY_F21, KEY_F22, KEY_F23, KEY_F24, KEY_F25, KEY_KP_0, KEY_KP_1, KEY_KP_2, KEY_KP_3, KEY_KP_4, KEY_KP_5, KEY_KP_6, KEY_KP_7, KEY_KP_8, KEY_KP_9, KEY_KP_DECIMAL, KEY_KP_DIVIDE, KEY_KP_MULTIPLY, KEY_KP_SUBTRACT, KEY_KP_ADD, KEY_KP_ENTER, KEY_KP_EQUAL, KEY_LEFT_SHIFT, KEY_LEFT_CONTROL, KEY_LEFT_ALT, KEY_LEFT_SUPER, KEY_RIGHT_SHIFT, KEY_RIGHT_CONTROL, KEY_RIGHT_ALT, KEY_RIGHT_SUPER, KEY_MENU</details>
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_RENDER,function(_) if(Input.IsButtonTriggered(Keyboard.KEY_K, 0)) then print('hello, world') end end)
```


-----

### 当xxx死亡时，...
当怪物MONSTRO（萌死戳）死亡时，打印hello, world到控制台上。其中ENTITY_MONSTRO可以替换为枚举量EntityType的值。此外，你也可以将指令中的“EntityType.ENTITY_MONSTRO”整个替换为一个数字，表示怪物种类，对应的是控制台中spawn指令的第一个数字。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。<details>枚举量EntityType包含以下值：ENTITY_NULL, ENTITY_PLAYER, ENTITY_TEAR, ENTITY_FAMILIAR, ENTITY_BOMBDROP, ENTITY_PICKUP, ENTITY_SLOT, ENTITY_LASER, ENTITY_KNIFE, ENTITY_PROJECTILE, ENTITY_GAPER, ENTITY_GUSHER, ENTITY_HORF, ENTITY_FLY, ENTITY_POOTER, ENTITY_CLOTTY, ENTITY_MULLIGAN, ENTITY_SHOPKEEPER, ENTITY_ATTACKFLY, ENTITY_LARRYJR, ENTITY_MONSTRO, ENTITY_MAGGOT, ENTITY_HIVE, ENTITY_CHARGER, ENTITY_GLOBIN, ENTITY_BOOMFLY, ENTITY_MAW, ENTITY_HOST, ENTITY_CHUB, ENTITY_HOPPER, ENTITY_BOIL, ENTITY_SPITY, ENTITY_BRAIN, ENTITY_FIREPLACE, ENTITY_LEAPER, ENTITY_MRMAW, ENTITY_GURDY, ENTITY_BABY, ENTITY_VIS, ENTITY_GUTS, ENTITY_KNIGHT, ENTITY_STONEHEAD, ENTITY_MONSTRO2, ENTITY_POKY, ENTITY_MOM, ENTITY_SLOTH, ENTITY_LUST, ENTITY_WRATH, ENTITY_GLUTTONY, ENTITY_GREED, ENTITY_ENVY, ENTITY_PRIDE, ENTITY_DOPLE, ENTITY_FLAMINGHOPPER, ENTITY_LEECH, ENTITY_LUMP, ENTITY_MEMBRAIN, ENTITY_PARA_BITE, ENTITY_FRED, ENTITY_EYE, ENTITY_SUCKER, ENTITY_PIN, ENTITY_FAMINE, ENTITY_PESTILENCE, ENTITY_WAR, ENTITY_DEATH, ENTITY_DUKE, ENTITY_PEEP, ENTITY_LOKI, ENTITY_FISTULA_BIG, ENTITY_FISTULA_MEDIUM, ENTITY_FISTULA_SMALL, ENTITY_BLASTOCYST_BIG, ENTITY_BLASTOCYST_MEDIUM, ENTITY_BLASTOCYST_SMALL, ENTITY_EMBRYO, ENTITY_MOMS_HEART, ENTITY_GEMINI, ENTITY_MOTER, ENTITY_FALLEN, ENTITY_HEADLESS_HORSEMAN, ENTITY_HORSEMAN_HEAD, ENTITY_SATAN, ENTITY_SPIDER, ENTITY_KEEPER, ENTITY_GURGLE, ENTITY_WALKINGBOIL, ENTITY_BUTTLICKER, ENTITY_HANGER, ENTITY_SWARMER, ENTITY_HEART, ENTITY_MASK, ENTITY_BIGSPIDER, ENTITY_ETERNALFLY, ENTITY_MASK_OF_INFAMY, ENTITY_HEART_OF_INFAMY, ENTITY_GURDY_JR, ENTITY_WIDOW, ENTITY_DADDYLONGLEGS, ENTITY_ISAAC, ENTITY_STONE_EYE, ENTITY_CONSTANT_STONE_SHOOTER, ENTITY_BRIMSTONE_HEAD, ENTITY_MOBILE_HOST, ENTITY_NEST, ENTITY_BABY_LONG_LEGS, ENTITY_CRAZY_LONG_LEGS, ENTITY_FATTY, ENTITY_FAT_SACK, ENTITY_BLUBBER, ENTITY_HALF_SACK, ENTITY_DEATHS_HEAD, ENTITY_MOMS_HAND, ENTITY_FLY_L2, ENTITY_SPIDER_L2, ENTITY_SWINGER, ENTITY_DIP, ENTITY_WALL_HUGGER, ENTITY_WIZOOB, ENTITY_SQUIRT, ENTITY_COD_WORM, ENTITY_RING_OF_FLIES, ENTITY_DINGA, ENTITY_OOB, ENTITY_BLACK_MAW, ENTITY_SKINNY, ENTITY_BONY, ENTITY_HOMUNCULUS, ENTITY_TUMOR, ENTITY_CAMILLO_JR, ENTITY_NERVE_ENDING, ENTITY_SKINBALL, ENTITY_MOM_HEAD, ENTITY_ONE_TOOTH, ENTITY_GAPING_MAW, ENTITY_BROKEN_GAPING_MAW, ENTITY_GURGLING, ENTITY_SPLASHER, ENTITY_GRUB, ENTITY_WALL_CREEP, ENTITY_RAGE_CREEP, ENTITY_BLIND_CREEP, ENTITY_CONJOINED_SPITTY, ENTITY_ROUND_WORM, ENTITY_POOP, ENTITY_RAGLING, ENTITY_FLESH_MOBILE_HOST, ENTITY_PSY_HORF, ENTITY_FULL_FLY, ENTITY_TICKING_SPIDER, ENTITY_BEGOTTEN, ENTITY_NULLS, ENTITY_PSY_TUMOR, ENTITY_FLOATING_KNIGHT, ENTITY_NIGHT_CRAWLER, ENTITY_DART_FLY, ENTITY_CONJOINED_FATTY, ENTITY_FAT_BAT, ENTITY_IMP, ENTITY_THE_HAUNT, ENTITY_DINGLE, ENTITY_MEGA_MAW, ENTITY_GATE, ENTITY_MEGA_FATTY, ENTITY_CAGE, ENTITY_MAMA_GURDY, ENTITY_DARK_ONE, ENTITY_ADVERSARY, ENTITY_POLYCEPHALUS, ENTITY_MR_FRED, ENTITY_URIEL, ENTITY_GABRIEL, ENTITY_THE_LAMB, ENTITY_MEGA_SATAN, ENTITY_MEGA_SATAN_2, ENTITY_ROUNDY, ENTITY_BLACK_BONY, ENTITY_BLACK_GLOBIN, ENTITY_BLACK_GLOBIN_HEAD, ENTITY_BLACK_GLOBIN_BODY, ENTITY_SWARM, ENTITY_MEGA_CLOTTY, ENTITY_BONE_KNIGHT, ENTITY_CYCLOPIA, ENTITY_RED_GHOST, ENTITY_FLESH_DEATHS_HEAD, ENTITY_MOMS_DEAD_HAND, ENTITY_DUKIE, ENTITY_ULCER, ENTITY_MEATBALL, ENTITY_PITFALL, ENTITY_MOVABLE_TNT, ENTITY_ULTRA_COIN, ENTITY_ULTRA_DOOR, ENTITY_CORN_MINE, ENTITY_HUSH_FLY, ENTITY_HUSH_GAPER, ENTITY_HUSH_BOIL, ENTITY_GREED_GAPER, ENTITY_MUSHROOM, ENTITY_POISON_MIND, ENTITY_STONEY, ENTITY_BLISTER, ENTITY_THE_THING, ENTITY_MINISTRO, ENTITY_PORTAL, ENTITY_TARBOY, ENTITY_FISTULOID, ENTITY_GUSH, ENTITY_LEPER, ENTITY_STAIN, ENTITY_BROWNIE, ENTITY_FORSAKEN, ENTITY_LITTLE_HORN, ENTITY_RAG_MAN, ENTITY_ULTRA_GREED, ENTITY_HUSH, ENTITY_HUSH_SKINLESS, ENTITY_RAG_MEGA, ENTITY_SISTERS_VIS, ENTITY_BIG_HORN, ENTITY_DELIRIUM, ENTITY_MATRIARCH, ENTITY_EFFECT, ENTITY_TEXT</details>
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_NPC_DEATH,function(_) print('hello, world') end,EntityType.ENTITY_MONSTRO)
```


-----

### 禁止投掷物
移除所有的投掷物。游戏场景内所有的投掷物都会被移除，甚至混沌卡也不能用。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_PROJECTILE_INIT,function(_,t) t:Remove() end)
```


-----

### 执行控制台指令
执行"spawn 5.100.118"这条控制台指令（在地面上生成118号道具），指令需要被单引号或双引号包起来，不要在指令中出现将它包起来的那个符号。话说回来，我为什么要在控制台的lua里执行控制台指令？答案是可以把这条指令用在回调中。
```
l Isaac.ExecuteCommand('spawn 5.100.118')
```


-----

### 执行多次控制台指令
由于此处控制台的repeat指令失效，故提供此方案。反复执行"spawn 5.100.118"这条控制台指令共3次。（在地面上生成118号道具），指令需要被单引号或双引号包起来，不要在指令中出现将它包起来的那个符号。话说回来，我为什么要在控制台的lua里执行控制台指令？答案是可以把这条指令用在回调中。
```
l for _=1,3 do Isaac.ExecuteCommand('spawn 5.100.118') end
```


-----

### 在游戏的每一帧，...
警告：请谨慎执行，此指令可能会引起意外的游戏行为，并导致游戏崩溃。在游戏的每一帧，打印hello, world到控制台上。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_UPDATE,function(_) print('hello, world') end)
```


-----

### 在游戏的每一渲染帧，...
警告：请谨慎执行，此指令可能会引起意外的游戏行为，并导致游戏崩溃。在游戏的每一渲染帧时，打印hello, world到控制台上。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_RENDER,function(_) print('hello, world') end)
```


-----

### 在下一帧，执行...
延迟一帧打印hello, world。这条指令主要在特定逻辑下被用到。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftlk={n=ftlk,f=function() print('hello, world') end};if(not ftpup)then ftl = ftl or RegisterMod('ftcslua',1);ftpup=function() ftldo, ftlk=ftlk,nil;while(ftldo) do ftldo.f();ftldo=ftldo.n end end ftl:AddCallback(ModCallbacks.MC_POST_UPDATE,ftpup) end
```


-----

### 在下一帧，执行...（简化版）
注意，此指令仅在至少执行过一遍“在下一帧，执行...”指令后才可以使用。<br/>延迟一帧打印hello, world。这条指令主要在特定逻辑下被用到。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftlk={n=ftlk,f=function() print('hello, world') end}
```


-----

### 在下两帧，执行...（简化版）
注意，此指令仅在至少执行过一遍“在下一帧，执行...”指令后才可以使用。<br/>本质上是延迟一帧的套娃版本，你可以进一步套娃，得到延迟三帧、四帧等指令，不过这真的有用吗？延迟两帧打印hello, world。这条指令主要在特定逻辑下被用到。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftlk={n=ftlk,f=function() ftlk={n=ftlk,f=function() print('hello, world') end} end}
```


-----

### 让玩家受伤
让玩家受到1点（半颗心）伤害，在第七层后，玩家至少受到一颗心的伤害。指令中的1表示半血。
```
l Isaac.GetPlayer(0):TakeDamage(1,0,EntityRef(nil),0)
```


-----

### 让玩家中毒
让玩家中毒，持续时间为30
```
l Isaac.GetPlayer(0):AddPoison(EntityRef(nil),30,0)
```


-----

### 灼烧玩家
让玩家被灼烧，持续时间为30
```
l Isaac.GetPlayer(0):AddBurn(EntityRef(nil),30,0)
```


-----

### 让玩家死亡
让玩家立即死亡
```
l Isaac.GetPlayer(0):Die()
```


-----

### 禁止操作数秒
强制冷静。让玩家在两秒（120帧）内无法操作。
```
l Isaac.GetPlayer(0).ControlsCooldown=120
```


-----

### 缩放玩家贴图
将玩家贴图水平放大至2倍，垂直放大至0.1倍。不影响实际碰撞。
```
l Isaac.GetPlayer(0).SpriteScale=Vector(2,0.1)
```


-----

### 缩放玩家碰撞
将玩家碰撞水平放大至2倍，垂直放大至0.1倍。不影响游戏贴图。
```
l Isaac.GetPlayer(0):SetSize(1,Vector(2,0.1),0)
```


-----

### 隐藏玩家贴图
隐藏玩家的贴图。你看不到自己。将指令中的false改为true即可实现相反的效果。
```
l Isaac.GetPlayer(0).Visible=false
```


-----

### 玩家贴图左右翻转
左右翻转玩家的贴图。将指令中的true改为false即可实现停止这一效果。好像没有什么用的东西。
```
l Isaac.GetPlayer(0).FlipX=true
```


-----

### 玩家贴图旋转（固定值）
将玩家的贴图逆时针为旋转45度。奇怪的指令增加了。
```
l Isaac.GetPlayer(0).SpriteRotation=45
```


-----

### 玩家贴图旋转（相对值）
将玩家的贴图逆时针继续旋转45度。奇怪的指令增加了。
```
l Isaac.GetPlayer(0).SpriteRotation=Isaac.GetPlayer(0).SpriteRotation+45
```


-----

### 设置鼠标最近拾取物价格
将鼠标最近的物品价格设置为99元，并关闭自动更新价格的属性。（确认过眼神，是你买不起的样子）。价格除了整数之外，还可以取4个特殊值：-1即一颗红心，-2为两颗红心，-3为三颗魂心，-1000为0元免费。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ToPickup().AutoUpdatePrice=false;_e:ToPickup().Price=99
```


-----

### 移除鼠标最近拾取物价格
将鼠标最近的物品价格移除。你免费了。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ToPickup().AutoUpdatePrice=true;_e:ToPickup().Price=0
```


-----

### 设置鼠标最近拾取物充能
将鼠标最近的（主动）物品充能设置为3。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ToPickup().Charge=3
```


-----

### 设置鼠标最近拾取物的拾取冷却
鼠标最近的物品在2秒（时间为60）内无法被拾取。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ToPickup().Wait=60
```


-----

### 设置鼠标最近拾取物的超时
鼠标最近的物品在2秒（时间为60）内无法被拾取，时间结束后消失。
```
l local _m,_e=Input.GetMousePosition(true) for _,v in pairs(Isaac.GetRoomEntities()) do _e=not _e and v or (_e.Position-_m):Length()<(v.Position-_m):Length() and _e or v end _e:ToPickup().Timeout=60
```


-----

### 卸除装备到地板上
将角色身上除327、328（全家福、底片）外的所有被动道具丢在地上。你可以修改第一对{}括号内的数字，使用逗号隔开，这些数字对应的道具不会被丢弃。
```
l local t,_t,_p={327,328},{};for _,i in pairs(t) do _t[i]=true end for i=1,Isaac.GetItemConfig():GetCollectibles().Size-1 do _p=Isaac.GetItemConfig():GetCollectible(i) if not _t[i] and _p and _p.Type ~= ItemType.ITEM_ACTIVE then _p=Isaac.GetPlayer(0) while(_p:HasCollectible(i)) do _p:RemoveCollectible(i);Isaac.Spawn(5,100,i,Isaac.GetRandomPosition(),Vector(0,0),_p) end end end
```


-----

### 卸除装备到log文件中
将角色身上除327、328（全家福、底片）外的所有被动道具丢在log文件中，你可以通过复制log文件中的代码再次拾取这些道具。你可以修改第一对{}括号内的数字，使用逗号隔开，这些数字对应的道具不会被丢弃。你想知道log文件是什么吗？它位于游戏存档目录的log.txt，打开它，翻到最后就能看到了。（通常位于电脑的：文档\My Games\Binding of Isaac Afterbirth+\log.txt）
```
l local t,_t,_s,_p={327,328},{},'player_status:';for _,i in pairs(t) do _t[i]=true end for i=1,Isaac.GetItemConfig():GetCollectibles().Size-1 do _p=Isaac.GetItemConfig():GetCollectible(i) if not _t[i] and _p and _p.Type ~= ItemType.ITEM_ACTIVE then _p=Isaac.GetPlayer(0) while(_p:HasCollectible(i)) do _p:RemoveCollectible(i);_s=_s..'
g c'..i end end end Isaac.DebugString(_s)
```


-----

### 强制丢弃饰品
丢弃玩家身上的饰品（包括血虱）
```
l Isaac.GetPlayer(0):DropTrinket(Isaac.GetFreeNearPosition(Isaac.GetPlayer(0).Position,50),true)
```


-----

### 药丸池中增加药丸
给本局增加Bad Gas药丸，并在控制台上打印对应的药丸颜色。你可以将指令中的PILLEFFECT_BAD_GAS替换为枚举量PillEffect的其它值。打印的颜色为枚举量PillColor。<details>枚举量PillEffect的值有：PILLEFFECT_BAD_GAS, PILLEFFECT_BAD_TRIP, PILLEFFECT_BALLS_OF_STEEL, PILLEFFECT_BOMBS_ARE_KEYS, PILLEFFECT_EXPLOSIVE_DIARRHEA, PILLEFFECT_FULL_HEALTH, PILLEFFECT_HEALTH_DOWN, PILLEFFECT_HEALTH_UP, PILLEFFECT_I_FOUND_PILLS, PILLEFFECT_PUBERTY, PILLEFFECT_PRETTY_FLY, PILLEFFECT_RANGE_DOWN, PILLEFFECT_RANGE_UP, PILLEFFECT_SPEED_DOWN, PILLEFFECT_SPEED_UP, PILLEFFECT_TEARS_DOWN, PILLEFFECT_TEARS_UP, PILLEFFECT_LUCK_DOWN, PILLEFFECT_LUCK_UP, PILLEFFECT_TELEPILLS, PILLEFFECT_48HOUR_ENERGY, PILLEFFECT_HEMATEMESIS, PILLEFFECT_PARALYSIS, PILLEFFECT_SEE_FOREVER, PILLEFFECT_PHEROMONES, PILLEFFECT_AMNESIA, PILLEFFECT_LEMON_PARTY, PILLEFFECT_WIZARD, PILLEFFECT_PERCS, PILLEFFECT_ADDICTED, PILLEFFECT_RELAX, PILLEFFECT_QUESTIONMARK, PILLEFFECT_LARGER, PILLEFFECT_SMALLER, PILLEFFECT_INFESTED_EXCLAMATION, PILLEFFECT_INFESTED_QUESTION, PILLEFFECT_POWER, PILLEFFECT_RETRO_VISION, PILLEFFECT_FRIENDS_TILL_THE_END, PILLEFFECT_X_LAX, PILLEFFECT_SOMETHINGS_WRONG, PILLEFFECT_IM_DROWSY, PILLEFFECT_IM_EXCITED, PILLEFFECT_GULP, PILLEFFECT_HORF, PILLEFFECT_SUNSHINE, PILLEFFECT_VURP<br /> 药丸颜色值为：蓝_蓝 = 1, 白_蓝 = 2, 橙_橙 = 3, 白_白 = 4, 红点_红 = 5, 粉_红 = 6, 蓝_军校蓝 = 7, 黄_橙 = 8, 橙点_白 = 9, 白_天蓝 = 10, 黑_黄 = 11, 白_黑 = 12, 白_黄 = 13</details>
```
l print(Isaac.AddPillEffectToPool(PillEffect.PILLEFFECT_BAD_GAS))
```


-----

### 掉落道具强制替换（道具）
将除了全家福(327)、底片(328)、晚餐(第一个23)之外的所有道具掉落替换为晚餐(第二个23)，味道美极了。可以roll，但出入房间后还是会被替换。
```
l local t,_t,_c={327,328,23},{},23 for _,i in pairs(t) do _t[i]=true end ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN,function(_,e,v,s,_,_,_,S) return e==5 and (v==100 or v==150) and not _t[s] and {e,100,_c,S} or nil end)
```


-----

### 掉落道具强制替换（掉落）
将除了全家福(327)、底片(328)之外的所有道具掉落替换为一枚幸运币（spawn指令对应的id为5.20.5）。请注意这条指令在商店会产生一些奇特的行为。
```
l local t,_t={327,328},{} for _,i in pairs(t) do _t[i]=true end ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN,function(_,e,v,s,_,_,_,S) return e==5 and (v==100 or v==150) and not _t[s] and {5,20,5,S} or nil end)
```


-----

### xxx房间内，掉落道具强制替换（道具）
当位于宝箱房时，将除了全家福(327)、底片(328)、晚餐(第一个23)之外的所有道具掉落替换为晚餐(第二个23)，味道美极了。可以roll，但出入房间后还是会被替换。你可以修改指令中的ROOM_TREASURE修改为枚举量RoomType的值。<details>枚举量RoomType包含的值有：ROOM_DEFAULT, ROOM_SHOP, ROOM_ERROR, ROOM_TREASURE, ROOM_BOSS, ROOM_MINIBOSS, ROOM_SECRET, ROOM_SUPERSECRET, ROOM_ARCADE, ROOM_CURSE, ROOM_CHALLENGE, ROOM_LIBRARY, ROOM_SACRIFICE, ROOM_DEVIL, ROOM_ANGEL, ROOM_DUNGEON, ROOM_BOSSRUSH, ROOM_ISAACS, ROOM_BARREN, ROOM_CHEST, ROOM_DICE, ROOM_BLACK_MARKET, ROOM_GREED_EXIT</details>
```
l local t,_t,_c={327,328,23},{},23 for _,i in pairs(t) do _t[i]=true end ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN,function(_,e,v,s,_,_,_,S) return Game():GetRoom():GetType()==RoomType.ROOM_TREASURE and e==5 and (v==100 or v==150) and not _t[s] and {e,100,_c,S} or nil end)
```


-----

### xxx房间内，掉落道具强制替换（掉落）
当位于宝箱房时，将除了全家福(327)、底片(328)之外的所有道具掉落替换为一枚幸运币（spawn指令对应的id为5.20.5）。请注意这条指令在商店会产生一些奇特的行为。你可以修改指令中的ROOM_TREASURE修改为枚举量RoomType的值。<details>枚举量RoomType包含的值有：ROOM_DEFAULT, ROOM_SHOP, ROOM_ERROR, ROOM_TREASURE, ROOM_BOSS, ROOM_MINIBOSS, ROOM_SECRET, ROOM_SUPERSECRET, ROOM_ARCADE, ROOM_CURSE, ROOM_CHALLENGE, ROOM_LIBRARY, ROOM_SACRIFICE, ROOM_DEVIL, ROOM_ANGEL, ROOM_DUNGEON, ROOM_BOSSRUSH, ROOM_ISAACS, ROOM_BARREN, ROOM_CHEST, ROOM_DICE, ROOM_BLACK_MARKET, ROOM_GREED_EXIT</details>
```
l local t,_t={327,328},{} for _,i in pairs(t) do _t[i]=true end ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN,function(_,e,v,s,_,_,_,S) return Game():GetRoom():GetType()==RoomType.ROOM_TREASURE and e==5 and (v==100 or v==150) and not _t[s] and {5,20,5,S} or nil end)
```


-----

### 给某种怪物增加标志位
给当前房间中所有的萌死戳（spawn的第一个数字，即种类为20）增加恐惧标志位（FLAG_FEAR）。你可以将FLAG_FEAR替换为一个或多个枚举量EntityFlag，并使用“|”隔开。例如：EntityFlag.FLAG_FEAR|EntityFlag.FLAG_BURN|EntityFlag.FLAG_CONFUSION表示恐惧、燃烧、眩晕三个特性。<details>EntityFlag的标志位有：FLAG_NO_STATUS_EFFECTS, FLAG_NO_INTERPOLATE, FLAG_APPEAR, FLAG_RENDER_FLOOR, FLAG_NO_TARGET, FLAG_FREEZE, FLAG_POISON, FLAG_SLOW, FLAG_CHARM, FLAG_CONFUSION, FLAG_MIDAS_FREEZE, FLAG_FEAR, FLAG_BURN, FLAG_RENDER_WALL, FLAG_INTERPOLATION_UPDATE, FLAG_APPLY_GRAVITY, FLAG_NO_BLOOD_SPLASH, FLAG_NO_REMOVE_ON_TEX_RENDER, FLAG_NO_DEATH_TRIGGER, FLAG_NO_SPIKE_DAMAGE, FLAG_BOSSDEATH_TRIGGERED, FLAG_DONT_OVERWRITE, FLAG_SPAWN_STICKY_SPIDERS, FLAG_SPAWN_BLACK_HP, FLAG_SHRINK, FLAG_NO_FLASH_ON_DAMAGE, FLAG_NO_KNOCKBACK, FLAG_SLIPPERY_PHYSICS, FLAG_ADD_JAR_FLY, FLAG_FRIENDLY, FLAG_NO_PHYSICS_KNOCKBACK, FLAG_DONT_COUNT_BOSS_HP, FLAG_NO_SPRITE_UPDATE, FLAG_CONTAGIOUS, FLAG_BLEED_OUT, FLAG_HIDE_HP_BAR, FLAG_NO_DAMAGE_BLINK, FLAG_PERSISTENT</details>
```
l for _,v in pairs(Isaac.GetRoomEntities()) do if v.Type==20 then v:AddEntityFlags(EntityFlag.FLAG_FEAR) end end
```
