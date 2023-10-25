# 🔥QcTorch

::: info
小火把是绿色免安装程序，配置好以后只需要将对应的文件夹拷贝到电脑即可使用。

官方最新版下载地址：

https://spicy-insect-d4d.notion.site/Download-0da91368438b4f8fb9a967773bad51e6
:::




## 1.配置导出模式

在QcTorch文件夹中，双击打开圆形的火焰图标 ，点击配置，切换到配置界面

::: tip

如果数据导入模式为小火把→UC→URT，则导出方式选择 TXT文本文件，然后填写对应的导出路径。

如果数据导入模式为小火把→QCDAO中间表→qcData→URT/QcBox，则导出方式选择 URT数据库中间表

:::

![qctorch001.png](/img/qctorch001.png)


## 2.配置 LIS 数据库连接

依次配置↓

- 数据类型（SQLServer、Oracle 或者其他）
- 数据库连接地址
- 数据库名称
- 数据库访问账户
- 数据库访问密码



配置完以后，点击连接测试，后面出现绿色的勾勾，就表示配置信息无误，连接成功！



## 3.配置查询语句



```sql
--仪器查询
select InstrumentCode,InstrumentName  from InstrumentsView

--质控结果查询
SELECT InstrumentCode as 仪器代码
    , InstrumentName as 仪器名称
    , LotNumber as 质控品批号
    , ItemCode as 质控项目英文编号
    , ItemName as 质控项目中文编号
    , QcResult as 质控结果
    , QcDatetime as 质控时间
    , Operator as 操作人
FROM QcResultsView
WHERE QcDatetime >= @start AND QcDatetime <= @end AND InstrumentCode IN @codes
ORDER BY ItemCode, QcDatetime


```




## 


::: warning
以上仅作为参考，具体SQL语句请根据实际情况配置
:::


