# 参数说明
##
## collectionName(String):必传值。所要操作的集合名

## limit(Number): 指定查询结果集数量上限。默认值20

## skip(Number): 指定查询返回结果时从指定序列后的结果开始返回。默认值0

## whereData(Object): 可不传。数据库操作where匹配里的值，不传则代表无指定条件匹配内容
##### method值为update或remove时，必须传入whereData

## method (String)：必传值。数据库操作增删改查方式
### 可选值：
#### get：查询
#### add：插入
##### addData(Object):必传值。要往集合里插入的数据
#### update: 更新
##### upData(Object):更新的数据内容
#### remove: 删除 

