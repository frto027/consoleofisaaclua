
## It is just a game

此Readme文件通过`rm_gen.js`自动生成。  
建议[点击下载](https://github.com/frto027/consoleofisaaclua/archive/master.zip)离线版，点击`index.html`文件打开。


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

### Mama mega大爆炸
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


-----

### 增加心之容器
增加两个心之容器。true表示无视Keeper。数字4表示两个心之容器，单位是“半血”，如果是单数，则会出现半格血上限的情况。
```
l Isaac.GetPlayer(0):AddMaxHearts(4,true)
```
作者信息：[@frto027]()


-----

### 增加红心
增加2颗红心。数量为4，单位是半血。
```
l Isaac.GetPlayer(0):AddHearts(4)
```
作者信息：[@frto027]()


-----

### 增加白心
增加半颗白心。数字1表示半颗，单位为半血。
```
l Isaac.GetPlayer(0):AddEternalHearts(1)
```
作者信息：[@frto027]()


-----

### 增加魂心
增加半颗魂心。数字1表示半颗，单位为半血。
```
l Isaac.GetPlayer(0):AddSoulHearts(1)
```
作者信息：[@frto027]()


-----

### 增加黑心
增加半颗黑心。数字1表示半颗，单位为半血。
```
l Isaac.GetPlayer(0):AddBlackHearts(1)
```
作者信息：[@frto027]()


-----

### 增加10块钱
增加10块钱。换成负数就是扣钱。
```
l Isaac.GetPlayer(0):AddCoins(10)
```
作者信息：[@frto027]()


-----

### 增加10个炸弹
增加10个炸弹。换成负数就是扣炸弹。
```
l Isaac.GetPlayer(0):AddBombs(10)
```
作者信息：[@frto027]()


-----

### 增加10个钥匙
增加10个钥匙。换成负数就是扣钥匙。
```
l Isaac.GetPlayer(0):AddKeys(10)
```
作者信息：[@frto027]()


-----

### 设置金钥匙
设置金钥匙
```
l Isaac.GetPlayer(0):AddGoldenKey()
```
作者信息：[@frto027]()


-----

### 移除金钥匙
移除金钥匙
```
l Isaac.GetPlayer(0):RemoveGoldenKey()
```
作者信息：[@frto027]()


-----

### 设置金炸弹
设置金钥匙
```
l Isaac.GetPlayer(0):AddGoldenBomb()
```
作者信息：[@frto027]()


-----

### 移除金炸弹
移除金钥匙
```
l Isaac.GetPlayer(0):RemoveGoldenBomb()
```
作者信息：[@frto027]()


-----

### 增加金心
增加2颗金心
```
l Isaac.GetPlayer(0):AddGoldenHearts(2)
```
作者信息：[@frto027]()


-----

### 增加蓝蜘蛛
在随机位置生成蓝蜘蛛
```
l Isaac.GetPlayer(0):AddBlueSpider(Isaac.GetRandomPosition())
```
作者信息：[@frto027]()


-----

### 增加蓝苍蝇
在随机位置，以玩家为目标，生成3个蓝苍蝇
```
l Isaac.GetPlayer(0):AddBlueFlies(3,Isaac.GetRandomPosition(),Isaac.GetPlayer(0).Target)
```
作者信息：[@frto027]()


-----

### 增加灰苍蝇（pretty fly）
生成1个灰苍蝇（围绕玩家旋转）
```
l Isaac.GetPlayer(0):AddPrettyFly()
```
作者信息：[@frto027]()


-----

### 增加幸运
增加2点幸运值
```
l Isaac.GetPlayer(0):DonateLuck(2)
```
作者信息：[@frto027]()


-----

### 设置充能
设置主动当前充能为3
```
l Isaac.GetPlayer(0):SetActiveCharge(3)
```
作者信息：[@frto027]()


-----

### 清空充能
将主动充能设置为0
```
l Isaac.GetPlayer(0):DischargeActiveItem()
```
作者信息：[@frto027]()


-----

### 红心补满
恢复所有心之容器
```
l Isaac.GetPlayer(0):SetFullHearts()
```
作者信息：[@frto027]()


-----

### 打印玩家角色
打印玩家角色。可以用于判断当前角色是谁，角色信息见枚举量PlayerType。 PLAYER_ISAAC = 0, PLAYER_MAGDALENA = 1, PLAYER_CAIN = 2, PLAYER_JUDAS = 3,  PLAYER_XXX = 4, PLAYER_EVE = 5, PLAYER_SAMSON = 6, PLAYER_AZAZEL = 7,  PLAYER_LAZARUS = 8, PLAYER_EDEN = 9, PLAYER_THELOST = 10, PLAYER_LAZARUS2 = 11,  PLAYER_BLACKJUDAS = 12, PLAYER_LILITH = 13, PLAYER_KEEPER = 14, PLAYER_APOLLYON = 15,  PLAYER_THEFORGOTTEN = 16, PLAYER_THESOUL = 17
```
l print(Isaac.GetPlayer(0):GetPlayerType())
```
作者信息：[@frto027]()


-----

### 打印蓝苍蝇数量
打印目前蓝苍蝇的数量
```
l print(Isaac.GetPlayer(0):GetNumBlueFlies())
```
作者信息：[@frto027]()


-----

### 打印蓝蜘蛛数量
打印目前蓝蜘蛛的数量
```
l print(Isaac.GetPlayer(0):GetNumBlueSpiders())
```
作者信息：[@frto027]()


-----

### 触发主动效果
触发金传送器（419号）主动的效果
```
l Isaac.GetPlayer(0):UseActiveItem(419,true,true,true,false)
```
作者信息：[@frto027]()


-----

### 触发卡片效果
触发The Fool卡片的效果。CARD_FOOL可以替换为枚举变量Card中的任意值（或使用卡片id）。<details>Card枚举变量可用值如下：<p>CARD_FOOL, CARD_MAGICIAN, CARD_HIGH_PRIESTESS, CARD_EMPRESS, CARD_EMPEROR, CARD_HIEROPHANT, CARD_LOVERS, CARD_CHARIOT, CARD_JUSTICE, CARD_HERMIT, CARD_WHEEL_OF_FORTUNE, CARD_STRENGTH, CARD_HANGED_MAN, CARD_DEATH, CARD_TEMPERANCE, CARD_DEVIL, CARD_TOWER, CARD_STARS, CARD_MOON, CARD_SUN, CARD_JUDGEMENT, CARD_WORLD, CARD_CLUBS_2, CARD_DIAMONDS_2, CARD_SPADES_2, CARD_HEARTS_2, CARD_ACE_OF_CLUBS, CARD_ACE_OF_DIAMONDS, CARD_ACE_OF_SPADES, CARD_ACE_OF_HEARTS, CARD_JOKER, RUNE_HAGALAZ, RUNE_JERA, RUNE_EHWAZ, RUNE_DAGAZ, RUNE_ANSUZ, RUNE_PERTHRO, RUNE_BERKANO, RUNE_ALGIZ, RUNE_BLANK, RUNE_BLACK, CARD_CHAOS, CARD_CREDIT, CARD_RULES, CARD_HUMANITY, CARD_SUICIDE_KING, CARD_GET_OUT_OF_JAIL, CARD_QUESTIONMARK, CARD_DICE_SHARD, CARD_EMERGENCY_CONTACT, CARD_HOLY, CARD_HUGE_GROWTH, CARD_ANCIENT_RECALL, CARD_ERA_WALK</p></details>
```
l Isaac.GetPlayer(0):UseCard(Card.CARD_FOOL)
```
作者信息：[@frto027]()


-----

### 触发药丸效果
触发Bad Gas药丸的效果。PILLEFFECT_BAD_GAS可以替换为枚举变量PillEffect中的任意值（或使用药丸id）。<details>PillEffect枚举变量可用值如下：<p>PILLEFFECT_BAD_GAS, PILLEFFECT_BAD_TRIP, PILLEFFECT_BALLS_OF_STEEL, PILLEFFECT_BOMBS_ARE_KEYS, PILLEFFECT_EXPLOSIVE_DIARRHEA, PILLEFFECT_FULL_HEALTH, PILLEFFECT_HEALTH_DOWN, PILLEFFECT_HEALTH_UP, PILLEFFECT_I_FOUND_PILLS, PILLEFFECT_PUBERTY, PILLEFFECT_PRETTY_FLY, PILLEFFECT_RANGE_DOWN, PILLEFFECT_RANGE_UP, PILLEFFECT_SPEED_DOWN, PILLEFFECT_SPEED_UP, PILLEFFECT_TEARS_DOWN, PILLEFFECT_TEARS_UP, PILLEFFECT_LUCK_DOWN, PILLEFFECT_LUCK_UP, PILLEFFECT_TELEPILLS, PILLEFFECT_48HOUR_ENERGY, PILLEFFECT_HEMATEMESIS, PILLEFFECT_PARALYSIS, PILLEFFECT_SEE_FOREVER, PILLEFFECT_PHEROMONES, PILLEFFECT_AMNESIA, PILLEFFECT_LEMON_PARTY, PILLEFFECT_WIZARD, PILLEFFECT_PERCS, PILLEFFECT_ADDICTED, PILLEFFECT_RELAX, PILLEFFECT_QUESTIONMARK, PILLEFFECT_LARGER, PILLEFFECT_SMALLER, PILLEFFECT_INFESTED_EXCLAMATION, PILLEFFECT_INFESTED_QUESTION, PILLEFFECT_POWER, PILLEFFECT_RETRO_VISION, PILLEFFECT_FRIENDS_TILL_THE_END, PILLEFFECT_X_LAX, PILLEFFECT_SOMETHINGS_WRONG, PILLEFFECT_IM_DROWSY, PILLEFFECT_IM_EXCITED, PILLEFFECT_GULP, PILLEFFECT_HORF, PILLEFFECT_SUNSHINE, PILLEFFECT_VURP</p></details>
```
l Isaac.GetPlayer(0):UsePill(PillEffect.PILLEFFECT_BAD_GAS,0)
```
作者信息：[@frto027]()


-----

### 增加骨心
增加2颗骨心
```
l Isaac.GetPlayer(0):AddBoneHearts(2)
```
作者信息：[@frto027]()


-----

### 复活玩家
复活玩家，增加半颗蓝心。由于伤害计算机制，增加的半颗蓝心多数情况下会被立即扣除，并产生一定时间的无敌。在游戏后期，你可能需要一颗蓝心才能承担复活瞬间的伤害。
```
l Isaac.GetPlayer(0):Revive();Isaac.GetPlayer(0):AddSoulHearts(1)
```
作者信息：[@frto027]()


-----

### 当发射眼泪时，...
当玩家发射眼泪时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR,function() print('hello, world') end)
```
作者信息：[@frto027]()


-----

### 当发射眼泪时，增加幸运
当玩家发射眼泪时，增加幸运。这是指令“当发射眼泪时，...”的一个使用示例。指令中的hello world被替换为增加幸运的lua指令。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_FIRE_TEAR,function() Isaac.GetPlayer(0):DonateLuck(1) end)
```
作者信息：[@frto027]()


-----

### 当玩家受伤时，...
当玩家受伤时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_ENTITY_TAKE_DMG,function(_) print('hello, world') end,EntityType.ENTITY_PLAYER)
```
作者信息：[@frto027]()


-----

### 当使用主动时，...
当使用任意主动道具时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_ITEM,function(_) print('hello, world') end)
```
作者信息：[@frto027]()


-----

### 当使用某个主动时，...
当使用id为105的主动道具（D6）时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_ITEM,function(_) print('hello, world') end,105)
```
作者信息：[@frto027]()


-----

### 当使用卡片时，...
当使用任意卡片时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_CARD,function(_) print('hello, world') end)
```
作者信息：[@frto027]()


-----

### 当使用某个卡片时，...
当使用The Fool卡时，打印hello, world到控制台上。你可以将指令中的CARD_FOOL替换为枚举变量Card中的任意值。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。<details>Card枚举变量可用值如下：<p>CARD_FOOL, CARD_MAGICIAN, CARD_HIGH_PRIESTESS, CARD_EMPRESS, CARD_EMPEROR, CARD_HIEROPHANT, CARD_LOVERS, CARD_CHARIOT, CARD_JUSTICE, CARD_HERMIT, CARD_WHEEL_OF_FORTUNE, CARD_STRENGTH, CARD_HANGED_MAN, CARD_DEATH, CARD_TEMPERANCE, CARD_DEVIL, CARD_TOWER, CARD_STARS, CARD_MOON, CARD_SUN, CARD_JUDGEMENT, CARD_WORLD, CARD_CLUBS_2, CARD_DIAMONDS_2, CARD_SPADES_2, CARD_HEARTS_2, CARD_ACE_OF_CLUBS, CARD_ACE_OF_DIAMONDS, CARD_ACE_OF_SPADES, CARD_ACE_OF_HEARTS, CARD_JOKER, RUNE_HAGALAZ, RUNE_JERA, RUNE_EHWAZ, RUNE_DAGAZ, RUNE_ANSUZ, RUNE_PERTHRO, RUNE_BERKANO, RUNE_ALGIZ, RUNE_BLANK, RUNE_BLACK, CARD_CHAOS, CARD_CREDIT, CARD_RULES, CARD_HUMANITY, CARD_SUICIDE_KING, CARD_GET_OUT_OF_JAIL, CARD_QUESTIONMARK, CARD_DICE_SHARD, CARD_EMERGENCY_CONTACT, CARD_HOLY, CARD_HUGE_GROWTH, CARD_ANCIENT_RECALL, CARD_ERA_WALK</p></details>
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_USE_CARD,function(_) print('hello, world') end,Card.CARD_FOOL)
```
作者信息：[@frto027]()


-----

### 当游戏开始时，...
当游戏开始/继续时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_STARTED,function(_) print('hello, world') end)
```
作者信息：[@frto027]()


-----

### 当开始新游戏时，...
当游戏首次开始(new run)时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_STARTED,function(_,mpgsc) if(not mpgsc) then print('hello, world') end end)
```
作者信息：[@frto027]()


-----

### 当继续游戏时，...
当游戏读档继续(continue)时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_STARTED,function(_,mpgsc) if(mpgsc) then print('hello, world') end end)
```
作者信息：[@frto027]()


-----

### 当退出游戏时，...
当退出游戏时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_PRE_GAME_EXIT,function(_) print('hello, world') end)
```
作者信息：[@frto027]()


-----

### 当玩家死亡，游戏结束时，...
当因死亡结束游戏时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_END,function(_,mpgeiso) if(mpgeiso) then print('hello, world') end end)
```
作者信息：[@frto027]()


-----

### 当玩家通关，游戏结束时，...
当因通关结束游戏时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_GAME_END,function(_,mpgeiso) if(not mpgeiso) then print('hello, world') end end)
```
作者信息：[@frto027]()


-----

### 当进入新关卡/楼层时，...
当进入新的楼层或关卡时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_NEW_LEVEL,function(_) print('hello, world') end)
```
作者信息：[@frto027]()


-----

### 当进入新房间时，...
当进入新的房间时，打印hello, world到控制台上，请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_NEW_ROOM,function(_) print('hello, world') end)
```
作者信息：[@frto027]()


-----

### 当按下键盘时，...
当按下键盘上的K键时时，打印hello, world到控制台上。其中KEY_K可以替换为枚举量Keyboard的值。请将指令中的print('hello, world')替换为你想要使用的lua指令内容，替换时注意不含l前缀。<details>枚举量Keyboard包含以下值：KEY_SPACE, KEY_APOSTROPHE, KEY_COMMA, KEY_MINUS, KEY_PERIOD, KEY_SLASH, KEY_0, KEY_1, KEY_2, KEY_3, KEY_4, KEY_5, KEY_6, KEY_7, KEY_8, KEY_9, KEY_SEMICOLON, KEY_EQUAL, KEY_A, KEY_B, KEY_C, KEY_D, KEY_E, KEY_F, KEY_G, KEY_H, KEY_I, KEY_J, KEY_K, KEY_L, KEY_M, KEY_N, KEY_O, KEY_P, KEY_Q, KEY_R, KEY_S, KEY_T, KEY_U, KEY_V, KEY_W, KEY_X, KEY_Y, KEY_Z, KEY_LEFT_BRACKET, KEY_BACKSLASH, KEY_RIGHT_BRACKET, KEY_GRAVE_ACCENT, KEY_WORLD_1, KEY_WORLD_2, KEY_ESCAPE, KEY_ENTER, KEY_TAB, KEY_BACKSPACE, KEY_INSERT, KEY_DELETE, KEY_RIGHT, KEY_LEFT, KEY_DOWN, KEY_UP, KEY_PAGE_UP, KEY_PAGE_DOWN, KEY_HOME, KEY_END, KEY_CAPS_LOCK, KEY_SCROLL_LOCK, KEY_NUM_LOCK, KEY_PRINT_SCREEN, KEY_PAUSE, KEY_F1, KEY_F2, KEY_F3, KEY_F4, KEY_F5, KEY_F6, KEY_F7, KEY_F8, KEY_F9, KEY_F10, KEY_F11, KEY_F12, KEY_F13, KEY_F14, KEY_F15, KEY_F16, KEY_F17, KEY_F18, KEY_F19, KEY_F20, KEY_F21, KEY_F22, KEY_F23, KEY_F24, KEY_F25, KEY_KP_0, KEY_KP_1, KEY_KP_2, KEY_KP_3, KEY_KP_4, KEY_KP_5, KEY_KP_6, KEY_KP_7, KEY_KP_8, KEY_KP_9, KEY_KP_DECIMAL, KEY_KP_DIVIDE, KEY_KP_MULTIPLY, KEY_KP_SUBTRACT, KEY_KP_ADD, KEY_KP_ENTER, KEY_KP_EQUAL, KEY_LEFT_SHIFT, KEY_LEFT_CONTROL, KEY_LEFT_ALT, KEY_LEFT_SUPER, KEY_RIGHT_SHIFT, KEY_RIGHT_CONTROL, KEY_RIGHT_ALT, KEY_RIGHT_SUPER, KEY_MENU</details>
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_RENDER,function(_) if(Input.IsButtonTriggered(Keyboard.KEY_K, 0)) then print('hello, world') end end)
```
作者信息：[@frto027]()


-----

### 禁止投掷物
移除所有的投掷物。游戏场景内所有的投掷物都会被移除，甚至混沌卡也不能用。
```
l ftl = ftl or RegisterMod('ftcslua',1);ftl:AddCallback(ModCallbacks.MC_POST_PROJECTILE_INIT,function(_,t) t:Remove() end)
```
作者信息：[@frto027]()
