
## It is just a game

此Readme文件通过`rm_gen.js`自动生成。  
[点击下载](https://github.com/frto027/consoleofisaaclua/archive/master.zip)离线版，点击`index.html`文件打开。


-----

### 你好，世界
在控制台上打印"hello, world"<a href='https://baike.baidu.com/item/hello%20world/85501'>更多</a>
```
l print('hello, world')
```
作者信息：[@frto027](https://github.com/frto027)


-----

### 放置炸弹
在(200,200)的位置，放置一个带有横向初速度向右50的炸弹
```
l Isaac.GetPlayer(0):FireBomb(Vector(200,200),Vector(50,0))
```
作者信息：[@frto027](http://tieba.baidu.com/p/4928422576?pid=128953609339&cid=128954028478#128954028478)


-----

### 打印HP
打印当前房间中所有可受伤实体的hp
```
l for _,v in pairs(Isaac.GetRoomEntities()) do if v:IsVulnerableEnemy() then print(v.HitPoints.."/"..v.MaxHitPoints) end end
```
作者信息：[@Binding of Isaac - Afterbirth+ Lua Reference](undefined)


-----

### 增加诅咒 - Curse of the Blind
增加诅咒位CURSE_OF_BLIND
```
l Game():GetLevel():AddCurse(LevelCurse.CURSE_OF_BLIND)
```
作者信息：[@frto027](http://tieba.baidu.com/p/4928422576?pid=128955968778&cid=0#128955968778)


-----

### 移除诅咒 - Curse of the Blind
移除诅咒位CURSE_OF_BLIND
```
l Game():GetLevel():RemoveCurse(LevelCurse.CURSE_OF_BLIND)
```
作者信息：[@frto027](http://tieba.baidu.com/p/4928422576?pid=128955968778&cid=0#128955968778)


-----

### 蒙眼
角色无法再发射任何子弹
```
暂无
```
作者信息：[undefined](undefined)


-----

### 展示预言
展示一条预言机的预言
```
l Game():ShowFortune()
```
作者信息：[@frto027](http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146)


-----

### 展示规则
展示一条规则卡的规则
```
l Game():ShowRule()
```
作者信息：[@frto027](http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146)


-----

### 随机移动
以随机条件123进行当前层的随机传送
```
l Game():MoveToRandomRoom(True,123)
```
作者信息：[@frto027](http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146)


-----

### 取当前房间网格索引
打印当前的房间索引（RoomIndex，GridIndex）
```
l print(Game():GetLevel():GetCurrentRoomDesc().SafeGridIndex)
```
作者信息：[@frto027](http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146)


-----

### 取上一个房间网格索引
打印上一个房间索引（RoomIndex，GridIndex）
```
l print(Game():GetLevel():GetLastRoomDesc().SafeGridIndex)
```
作者信息：[@frto027](http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146)


-----

### 传送至房间网格索引
传送至房间网格索引(GridIndex)为84的房间，网格索引和小地图有关，请小心崩溃，经测试84为出生点。
```
l Game():ChangeRoom(84)
```
作者信息：[@frto027](http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146)


-----

### 晃动屏幕
摇晃屏幕，时间为30。不清楚单位，猜测是半帧，估计30=1秒。
```
l Game():ShakeScreen(30)
```
作者信息：[@frto027](http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146)


-----

### 屏幕黑暗
以0.7的黑暗程度(猜测范围0 ~ 1)进行黑屏，时间为30。不清楚单位，猜测是半帧，估计30=1秒。
```
l Game():Darken(0.7,30)
```
作者信息：[@frto027](http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146)


-----

### 打印胜利跑圈数
在控制台上打印胜利跑圈数
```
l print(Game():GetVictoryLap())
```
作者信息：[@frto027](http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146)


-----

### 进行下一轮胜利跑圈
直接开启下一轮跑圈
```
l Game():NextVictoryLap()
```
作者信息：[@frto027](http://tieba.baidu.com/p/6462139868?pid=129623864146&cid=0#129623864146)


-----

### 随机位置生成x石头
在随机位置生成x石头，不会覆盖已有地形
```
l Isaac.GridSpawn(GridEntityType.GRID_ROCKT,0,Isaac.GetRandomPosition(),false)
```
作者信息：[@frto027](http://tieba.baidu.com/p/4928422576?pid=102219431913&cid=130402803671#130402803671)


-----

### 生成友好怪物
生成种类、变体、子类型为100,0,0的怪物，位置是(200,200)，速度为0，并具有友好、魅惑、持久（更换房间后不消失）属性
```
l Isaac.Spawn(100,0,0,Vector(200,200),Vector(0,0),Isaac.GetPlayer(0)):AddEntityFlags(EntityFlag.FLAG_FRIENDLY|EntityFlag.FLAG_CHARM|EntityFlag.FLAG_PERSISTENT)
```
作者信息：[@frto027]()


-----

### 打印去过的宝箱房数量
去过几个宝箱房，就打印几
```
l print(Game():GetTreasureRoomVisitCount())
```
作者信息：[@frto027]()


-----

### 设置红心伤害
设置本层受过红心伤害（影响恶魔房概率）
```
l Game():GetLevel():SetRedHeartDamage()
```
作者信息：[@frto027]()


-----

### 增加天使房转换率
增加0.1的天使转换率，数字可以为负数。真实效果不明。
```
l Game():GetLevel():AddAngelRoomChance(0.1)
```
作者信息：[@frto027]()


-----

### 打印天使房转换率
打印天使放转换率。真实效果不明。
```
l print(Game():GetLevel():GetAngelRoomChance())
```
作者信息：[@frto027]()


-----

### 显示地图
开图，和the world/the sun作用类似，但不显示超隐。
```
l Game():GetLevel():ShowMap()
```
作者信息：[@frto027]()


-----

### 透视(I can see everything)
类似x光眼镜、I can see everything的效果。将true改为false就是关闭这一能力的指令。
```
l Game():GetLevel():SetCanSeeEverything(true)
```
作者信息：[@frto027]()


-----

### 使用白地图
显示当前层的普通房间，类似白地图的效果
```
l Game():GetLevel():SetCanSeeEverything(true)
```
作者信息：[@frto027]()


-----

### 使用蓝地图
显示当前层的隐藏房间，类似蓝地图的效果
```
l Game():GetLevel():ApplyBlueMapEffect()
```
作者信息：[@frto027]()


-----

### 使用指南针
显示当前层的特殊房间，类似指南针的效果
```
l Game():GetLevel():ApplyCompassEffect()
```
作者信息：[@frto027]()


-----

### 移除指南针
移除指南针的效果，不显示特殊房间。需要和本页面的“使用指南针”配合使用。
```
l Game():GetLevel():RemoveCompassEffect()
```
作者信息：[@frto027]()


-----

### 房间变为金色
将当前房间变为金色。总觉得这个特效在哪里见过？
```
l Game():GetLevel():GetCurrentRoom():TurnGold()
```
作者信息：[@frto027]()


-----

### 房间变为金色
触发一次Mama mega大炸弹的爆炸效果
```
l Game():GetLevel():GetCurrentRoom():MamaMegaExplossion()
```
作者信息：[@frto027]()


-----

### 打印当前房间是否已有敌人死亡
打印当前房间是否已有敌人死亡
```
l print(Game():GetLevel():GetCurrentRoom():IsFirstEnemyDead())
```
作者信息：[@frto027]()


-----

### 设置当前房间是否已有敌人死亡
设置当前房间已有敌人死亡，可以将true改为false，表示当前房间还没有敌人死亡
```
l Game():GetLevel():GetCurrentRoom():	SetFirstEnemyDead(true)
```
作者信息：[@frto027]()


-----

### 打印当前房间是否为最终Boss
打印当前房间是否为Boss房间
```
l print(Game():GetLevel():GetCurrentRoom():IsCurrentRoomLastBoss())
```
作者信息：[@frto027]()


-----

### 重置当前房间的敌人
类似道具“D7”
```
l Game():GetLevel():GetCurrentRoom():RespawnEnemies()
```
作者信息：[@frto027]()


-----

### 填平沟壑
在网格索引为40的位置上进行填充。可以使用debug 11来观察网格索引。只能在沟壑(pit)上使用，使用时请将40修改为当前房间中某个沟壑的网格索引。
```
l Game():GetLevel():GetCurrentRoom():TryMakeBridge(Game():GetLevel():GetCurrentRoom():GetGridEntity(40))
```
作者信息：[@frto027]()


-----

### 打印x石头网格索引
打印当前房间中x石头的网格索引。网格索引可以使用debug 11观察。
```
l print(Game():GetLevel():GetCurrentRoom():GetTintedRockIdx())
```
作者信息：[@frto027]()


-----

### 打印地下室石头网格索引
打印当前房间中地下室石头的网格索引。-1表示不存在地下室。网格索引可以使用debug 11观察。
```
l print(Game():GetLevel():GetCurrentRoom():GetDungeonRockIdx())
```
作者信息：[@frto027]()


-----

### 生成清图奖励
生成清理房间的奖励。
```
l Game():GetLevel():GetCurrentRoom():SpawnClearAward()
```
作者信息：[@frto027]()


-----

### 墙壁冒血
似乎在哪里见过的特效。墙壁冒血，时间为30（持续1秒），密度为10。
```
l Game():GetLevel():GetCurrentRoom():EmitBloodFromWalls(30,10)
```
作者信息：[@frto027]()


-----

### 反人类卡特效
在当前房间激活反人类卡的特效。开饭啦！
```
l Game():GetLevel():GetCurrentRoom():SetCardAgainstHumanity()
```
作者信息：[@frto027]()


-----

### 坏表（加速/减速）特效
设置当前房间速度为正常(0)、减速(1)、加速(2)。修改指令中的数字来指定是哪种速度。
```
l Game():GetLevel():GetCurrentRoom():SetBrokenWatchState(0)
```
作者信息：[@frto027]()


-----

### 尝试生成恶魔房门
需要满足开启条件才能成功，成功打印true，否则打印false。
```
l print(Game():GetLevel():GetCurrentRoom():TrySpawnDevilRoomDoor(true))
```
作者信息：[@frto027]()


-----

### 尝试生成Boss Rush门
需要满足开启条件才能成功，指令中的true表示无视时间，改为false则会考虑游戏当前时间。成功打印true，否则打印false。
```
l print(Game():GetLevel():GetCurrentRoom():TrySpawnBossRushDoor(true))
```
作者信息：[@frto027]()


-----

### 尝试生成mega撒旦门
需要满足开启条件才能成功，成功打印true，否则打印false。
```
l print(Game():GetLevel():GetCurrentRoom():TrySpawnMegaSatanRoomDoor())
```
作者信息：[@frto027]()


-----

### 尝试生成hush门
需要满足开启条件才能成功，无视时间。成功打印true，否则打印false。
```
l print(Game():GetLevel():GetCurrentRoom():TrySpawnBlueWombDoor(true,true))
```
作者信息：[@frto027]()


-----

### 尝试生成虚空门
需要满足开启条件才能成功。成功打印true，否则打印false。
```
l print(Game():GetLevel():GetCurrentRoom():TrySpawnTheVoidDoor())
```
作者信息：[@frto027]()


-----

### 商店刷新
刷新商店的全部商品
```
l Game():GetLevel():GetCurrentRoom():ShopRestockFull()
```
作者信息：[@frto027]()


-----

### 打印当前房间是否清理
打印当前房间是否清理
```
l print(Game():GetLevel():GetCurrentRoom():IsClear())
```
作者信息：[@frto027]()


-----

### 设置当前房间是否清理
清理当前房间。将true改为false即设置为未清理状态。注意，改变房间的清理/未清理状态后，游戏将立即进行结算。
```
l Game():GetLevel():GetCurrentRoom():SetClear(true)
```
作者信息：[@frto027]()


-----

### 移除一扇门
移除房间中的某个门。其中DOWN0可以替换为UP0、RIGHT0、LEFT0、LEFT1、UP1、RIGHT1、DOWN1。注意，该指令不保存房间状态。
```
l Game():GetLevel():GetCurrentRoom():RemoveDoor(DoorSlot.DOWN0)
```
作者信息：[@frto027]()
