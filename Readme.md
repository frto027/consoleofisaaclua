
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
