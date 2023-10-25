# ⌨️常用SQL语句

::: tip 
有时候没有办法通过软件直接解决问题，或者通过软件处理比较麻烦，这个时候，可以直接通过执行相关SQL语句来处理。
:::

## 解决当前测试正在使用

> 在使用URT查看具体某个项目的数据时，如果同时有多台电脑的URT都打开了同一测试项目，URT就会提示 当前测试正在使用，此时可能无法修改数据，常规的处理方法是关掉其他已经打开此项目的URT，但是往往查找其他电脑会耗时比较长，此时就可以通过数据库清除相关表的内容处理



通过数据库管理工具 `SQL Server Management Studio` 或者 `SqlDbx`，连接到`qcdao`数据库，执行下列SQL语句，即可解决。（关于如何使用SqlDbx，可参考下文）

`Delete From TestInUsed`



## 解决审核出错问题

同样先连接到QCDAO数据库，执行下列SQL语句：

`Delete From DataReview`



## 清空拒绝日志表

随着时间的推移，`qcdao`数据库中的`RejectionLog`表，存储的无用数据会越来越多，建议定期删除！

`Delete From RejectionLog`



## SQL查询项目信息


```sql
SELECT

	  l.LabID AS 实验室
	, l.LotID AS 批号
	, l.LabLotTestID AS 项目ID
	
	, a.name AS 项目英文名
	, ins.name AS 仪器
	, rea.Name AS 试剂
	, m.Name AS 方法学
	, tem.name  As 温度 
	, u.Name AS URT单位

FROM LabLotTest l


INNER JOIN Test t ON t.TestID =  l.TestID
INNER JOIN Analyte a  ON  a.AnalyteID  =  t.AnalyteID 

INNER JOIN Method m  ON  m.MethodID  =  t.MethodID
INNER JOIN Unit u  ON  u.UnitID  =  t.UnitID


INNER JOIN  Instrument ins ON t.InstrumentID = ins.InstrumentID
INNER JOIN  Reagent  rea  ON  t.ReagentID =  rea.ReagentID 
INNER JOIN  Temperature  tem  ON t.TemperatureID =  tem.TemperatureID 


INNER JOIN LabLot ll  ON  ll.labid = l.LabID and ll.lotid = l.LotID
where l.Status = 1  and ll.Status = 1

ORDER BY l.LabID,l.LotID,l.LabLotTestID
```



### 获取到的结果

| 实验室    | 批号    | 项目ID  | 项目英文名          | 仪器               | 试剂                | 方法学            | 温度    | URT单位 |
| ------ | ----- | ----- | -------------- | ---------------- | ----------------- | -------------- | ----- | ----- |
| 103183 | 45830 | 31196 | AST (ASAT/GOT) | Roche cobas 8000 | Dedicated Reagent | UV without P5P | 37° C | U/L   |
| 103183 | 45830 | 31197 | ALT (ALAT/GPT) | Roche cobas 8000 | Dedicated Reagent | UV without P5P | 37° C | U/L   |





##  lis分子结果转换

### Sql 语句：

`select LOG10(cast(cast('7.23e+04' as float) as decimal(18,2)))`

### 说明

**7.23e+04** 为某分子项目在lis系统中的值，现在需要将该值转换为以10为底的对数结果再导入URT

> 解决方法：**先将其转换为float类型，再转换为decimal类型，最后进行log运算**



注意：如果是**Oracle**平台，则相应的log函数有所变动：

`select LOG(10,cast(cast('7.23e+04' as float) as decimal(18,2)))`



### 小火把中的更改

对应的小火把语句，只需要将**QC_Result**(结果字段)替换为：



SQL Server:

`LOG10(cast(cast(QC_Result as float) as decimal(18,2)))`

或者Oracel:

`LOG(10,cast(cast(QC_Result as float) as decimal(18,2)))`





## SQL查询项目的平均估值

### 需要执行的SQL语句

```sql
SELECT
 LLT.LevelsInUseMask,
 LLT.LabLotTestInfo,
 LLT.LablotTestID,
 LLT.LabID,
 LLT.LotID,


 LLT.PointsBeforeValidation,
 FM.Level1FixedMean as 水平1固定均值,
 FM.Level1FixedSD,
 FM.Level1PercentSDFlag,
 FM.Level1Percent,
 FM.Level2FixedMean as 水平2固定均值,
 FM.Level2FixedSD,
 FM.Level2PercentSDFlag,
 FM.Level2Percent,
 FM.Level3FixedMean as 水平3固定均值,
 FM.Level3FixedSD,
 FM.Level3PercentSDFlag,
 FM.Level3Percent,
 FM.Level4FixedMean as 水平4固定均值,
 FM.Level4FixedSD,
 FM.Level4PercentSDFlag,
 FM.Level4Percent,

 STD.StartDateTime,
 STD.Level1FloatMean  as 水平1浮动均值,
 STD.Level1FloatSD,
 STD.Level1FloatPoints,
 STD.Level2FloatMean as 水平2浮动均值,
 STD.Level2FloatSD,
 STD.Level2FloatPoints,
 STD.Level3FloatMean as 水平3浮动均值,
 STD.Level3FloatSD,
 STD.Level3FloatPoints,
 STD.Level4FloatMean as 水平4浮动均值,
 STD.Level4FloatSD,
 STD.Level4FloatPoints


FROM
 lablottest LLT
 LEFT OUTER JOIN FixedMean FM ON LLT.LablotTestID = FM.LablotTestID
 LEFT OUTER JOIN StartDate_FloatMeanSD STD ON LLT.LablotTestID = STD.LablotTestID 
WHERE
 LLT.lablottestid IN (
  27004
 )


```



### 语句说明

语句最下面的 **27004 **需要更改为你想查询的项目实际的 **lablottestid**

#### 如何获取  lablottestid 值？

打开URT 

![lablottestid1](/img/lablottestid1.png)

测试项目最后以**[]**包裹的就是项目的 lablottestid



#### 如何一次查询导出多个项目的评估均值？

以英文逗号分割：27004,27005,27006

例如：

```sql
 LLT.lablottestid IN (
  27004,27005,27006
 )
```




## SQL解锁URT管理员用户



```sql
UPDATE [dbo].[OperatorProfile] 
SET 
[Password] = N'000000', 
[SecurityLevel] = 1,  
[PasswordExpiredPeriod] = 0, 
[LoginCount] = 0 

WHERE  [Operator] = N'admin';
```



###  说明

**Password** 为密码，如果不需要更改密码，则去掉此行




## SQL调整实验室号

> 案列：
> 将实验室号：**103183** 中的  57570（批号）连同项目及数据完整
> 调整到
> 新实验室号：**332924**中的 57570（批号）下





### 1.URT添加批号

在新实验室号**332924**下，手动建立57570 批号（注意，是**新建**，不是复制）只用建立批号，不需要建项目。



### 2.执行下列SQL 语句
（转移该批号下的所有项目）

```sql
UPDATE dbo.LabLotTest
SET LabID = 332924 
WHERE LabLotTestID IN
(SELECT  LabLotTestID FROM dbo.LabLotTest WHERE LabID = 103183  AND lotid = '57570' AND Status =1) 
```



### 3.说明

上面的SQL语句中，**332924**为新实验室号，**103183** 为老实验室号，**57570** 为批号

语句执行以后，会将 57570 批号下面的所有项目连同数据一并转移到 332924下面。



**如果只转移部分项目到新实验室号下面**

则将

`(SELECT  LabLotTestID FROM dbo.LabLotTest WHERE LabID = 103183  AND lotid = '57570' AND Status =1)` 

替换为相应的测试项目ID即可如 `（21991，21992，21993）`

> **项目ID在哪里获取？**
>
> ![lablottestid1.png](https://i.loli.net/2021/06/11/Xywv4TMDpLE1ahJ.png)



**具体SQL如下：(转移部分测试项目)**

```sql
UPDATE dbo.LabLotTest
SET LabID = 332924 
WHERE LabLotTestID IN 
（21991，21992，21993）
```





## SQL查询失控项目


```sql
SELECT
	LabLotTest.LabID,
	Instrument.Name,
	LabLotTest.LotID,
	Analyte.Name,
	Analyte.AnalyteID,
	Unit.Name,
	Method.Name,
	Reagent.Name,
	Temperature.Name,
	PointData.EnteredDate,
	PointData.Operator,
	PointData.Level1Value,
	PointData.Level1Violation,
	PointData.Level1Status,
	PointData.Level2Value,
	PointData.Level2Violation,
	PointData.Level2Status,
	PointData.Level3Value,
	PointData.Level3Violation,
	PointData.Level3Status,
	PointData.Level4Value,
	PointData.Level4Violation,
	PointData.ActionLog,
	PointData.Comment,
	PointData.RuleApplied,
	PointData.FloatMeanSD,
	PointData.FixedMeanSD 
FROM
	PointData,
	LabLotTest,
	Test,
	Analyte,
	Instrument,
	Method,
	Reagent,
	Temperature,
	Unit 
WHERE
	( PointData.LabLotTestID = LabLotTest.LabLotTestID ) 
	AND ( Test.TestID = LabLotTest.TestID ) 
	AND ( Test.AnalyteID = Analyte.AnalyteID ) 
	AND ( Test.InstrumentID = Instrument.InstrumentID ) 
	AND ( Test.MethodID = Method.MethodID ) 
	AND ( Test.ReagentID = Reagent.ReagentID ) 
	AND ( Test.TemperatureID = Temperature.TemperatureID ) 
	AND ( Test.UnitID = Unit.UnitID ) 
	
	AND (
	   	   ( PointData.Level1Violation <> ''  and PointData.Level1Status = 0) 
		OR ( PointData.Level2Violation <> ''  and PointData.Level2Status = 0) 
		OR ( PointData.Level3Violation <> ''  and PointData.Level3Status = 0) 
		OR ( PointData.Level4Violation <> ''  and PointData.Level4Status = 0)  
	) 


	AND PointData.EnteredDate > = '2021-07-19' 
	AND PointData.EnteredDate < = '2021-07-19 23:59:59'
	and LabLotTest.LabID in (232017)
	
```



### 说明

**PointData.EnteredDate**  为查询的时间段

**LabLotTest.LabID** 为查询某个实验室号是否有失控

如需精确到批号，则添加 **LabLotTest.LotID** 条件，如：

**and LabLotTest.LabID   in  ('88100')**



此外，还可以根据 测试组 的条件查询：

```sql
LabLotTest.LabLotTestID  in 
( select LabLotTestID from Panel_All_VW where Panel_Name  like N'生化特检' )
```

其中 **生化待检** 为测试组的名称



