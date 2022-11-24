# 问题

## 1.URT常见问题解决方法

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### 新安装URT报错

> 现象：新安装URT,打完补丁后，提示错误。
> 信息：Specified cast is not valid.
> 解决：重新打URT 2.4.3 以上的客户端补丁包，重启电脑



### URT连接数据库失败

> 问题描述：
> 现象：客户端无法访问服务器端QCDAO数据库，提示：在与SQL Server 建立连接时出现与网络相关的或特定于实例的错误
> 信息：未找到或无法访问服务器
> 分析：网络是否连通？数据库访问服务是否开启？防火墙是否开启？


解决思路：

依次排查配置：服务器IP是否正确，是否需要加数据库实例名？如 10.1.1.100\MSSQLSERVER
排查网络连接：是否能Ping通QCDAO服务器，防火墙是否开启，如开始，端口是否添加例外
排查数据库服务：同时按WIN键+R 打开运行，输入 services.msc ，找到SQL Server（实例名） 是否开启




### URT更新Codelist报错

> 问题描述：
> 现象：URT 更新Codelist 报错
> 提示：未将对象引用设置到对象的实例
> 分析：Matrix 表缺失数据

解决方法：

同时按  **WIn键+R 键** ，打开运行

在运行中输入CMD，点确定，在弹出的界面中输入以下：

```bash
osql -E 回车
USE QCDAO 回车
GO 回车
insert into Matrix values(12,'Nucleic Acid') 回车
GO 回车
exit 回车
```

第二种可行的方法：

（前提是电脑有安装SQL Server Management Studio ）打开SQL Server Management Studio ，选择QCDAO数据库，执行以下语句：

`insert into Matrix values(12,'Nucleic Acid')`



Codelist下载

下载地址：<https://decent.lanzoui.com/b0261sipg>
密码:aaaa




###  URT打开测试，报错

> 现象：URT操作测试项目时，报错
> 信息：当前测试项目正在使用中，您仅被允许查看数据。
> 解决：清空Testinused 表中的数据。

解决方法：
打开SQL Server Management Studio ，选择QCDAO数据库，执行以下语句：
`Delete From TestInUsed`



### URT审核出错

> 现象：URT审核时，提示其它使用者已经试验了当前的观察。
> 解决：清空Datareview 表中的数据。

解决方法：
打开SQL Server Management Studio ，选择QCDAO数据库，执行以下语句：
`Delete From DataReview`














## 2.UC常见问题解决方法

### UC 连不上数据库

> 问题描述：
> 现象：URT可以连上数据库，UC连不上数据库
> 信息：UC数据库下拉框，选不出来QCDAO
> 原因：安装URT 时，丢失sql server 2005 backward compatibility

解决方法：

重新安装 sql server 2005 backward compatibility

文件下载地址：<https://decent.lanzoui.com/iKzCVnyn1ab>
密码:aaaa




### UC 匹配项目时不弹出对话框

> 问题描述：
> 现象：小火把抓取到了新的项目信息，UC没有配置相关信息，需要在UC中匹配
> 信息：开启UC后，没有弹出要设置匹配新项目的对话框
> 原因：UC开启了静默模式

解决方法：

依次打开UC顶部的 Options→Settings
切换到Watch Folder选项卡
将下面的 **Watch Folder in Slient Mode** 前面的勾取消掉
点OK即可






### UC 安装完成报错

> 现象：客户端无法成功安装UC软件
> 提示：没有找到**perl58.dll**，因此这个应用程序未能启动。

解决方法：

计算机-》属性-》高级系统设置-》环境变量-》系统变量-》
在系统变量里找到perl5LIB备份后，删除perl5LIB即可
![2.png](https://i.loli.net/2021/04/12/dfhy1m8HKCnzO5F.png)






## 3.QCBox常见问题解决方法

### 打开QCBox 报错

> 现象：提示缺少QcLog
> 解决方法：打开SQL Server Management Studio ，选择QCDAO数据库，

执行以下语句：
```sql
IF OBJECT_ID ('dbo.QcLog') IS NOT NULL
    DROP TABLE dbo.QcLog
GO

CREATE TABLE dbo.QcLog
    (
    ID          INT IDENTITY NOT NULL,
    Kind        NVARCHAR (50) NOT NULL,
    Message     NVARCHAR (1000) NOT NULL,
    LogLevel    INT NOT NULL,
    LogTime     DATETIME NOT NULL,
    LogUser     NVARCHAR (20) NOT NULL,
    LogComputer NVARCHAR (50) NOT NULL,
    LogIp       NVARCHAR (20) NOT NULL,
    Version     NVARCHAR (30) NOT NULL,
    Properties  NTEXT,
    Extend1     NVARCHAR (50),
    Extend2     NVARCHAR (50),
    CONSTRAINT PK_QcLog PRIMARY KEY (ID)
    )
GO

CREATE INDEX IX_QcLog_Kind
    ON dbo.QcLog (Kind)
GO
```



QcBox 可能会用到的补丁
下载地址：<https://decent.lanzoui.com/iKf6hnyqd9a>
密码:aaaa




### QcBox 质控品基质为空

> 问题描述：
> 现象：添加新批号以后，基质处没有信息，无显示
> 分析：Matrix 表缺失数据

解决方法：
打开SQL Server Management Studio或其他数据库工具 ，选择QCDAO数据库，
执行以下语句：

```sql
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 1,N'水', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 2, N'等离子体', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 3,N'血清', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 4, N'脑脊液', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 5, N'尿液', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 6, N'全血', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 7, N'拭子', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 8, N'精液', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 9, N'粪便', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 10, N'汗液', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 11, N'唾液', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 12, N'核酸', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 98, N'未知', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
INSERT INTO dbo.QcDict (CodeKind, CodeNo, CodeName, ShortName, Status, Description, IsEnable, SeqNo, Extend1, Extend2, Extend3)
VALUES ('Matrix', 99, N'其他', NULL, 0, NULL, 1, 0, NULL, NULL, NULL)
GO
```



### QcBox 非伯乐质控品无法复制



复制非伯乐质控品新批号的时候，无法填写新批号信息，解决办法：

将厂商改成其他值，不能含有**BIO**、**biorad**、**伯乐** 等字母或汉字

## 4.常用SQL语句

### 解决当前测试正在使用
`Delete From TestInUsed`  

### 解决审核出错问题
`Delete From DataReview` 

###  清空拒绝日志表
`Delete From RejectionLog` 

### 解决Codelist更新出错
`insert into Matrix values(12,'Nucleic Acid')` 

### 更换实验室号
`UPDATE [dbo].[LabLotTest] SET [LabID] = 999999 WHERE [LabLotTestID] = 29745`



## 5.常用网站地址

### 伯乐质控产品说明书下载
地址：<http://myeinserts.qcnet.com/>

### Codelist 伯乐官网下载
地址：<https://classic.qcnet.com/codelist/URT2_English.exe>

### 伯乐实验室报告下载
先登录：<https://www.qcnet.com/my-account>
然后到此地址下载：<https://www.qcnet.com/QCNET/UnityReports.aspx>

### 微软操作系统及数据库下载

地址：<https://msdn.itellyou.cn/>




## 6.质控软件整合快捷方式

> 问题描述：
> 用户反应，URT相关软件太多，unity real time , UC , 小火把，QCBOX, 报表软件。
> 有没有可能，把所有的软件在一个界面打开。

可行的解决方法：

使用**Maye**（一个简洁小巧的快速启动工具）下载地址：<https://wwa.lanzoui.com/b0bqwqjvg>

将伯乐软件启动的快捷方式集中到一个界面。方便用户使用。如下图所示：
![2021-04-12_115237.png](https://i.loli.net/2021/04/12/rDXmSQLiaWfGV38.png)