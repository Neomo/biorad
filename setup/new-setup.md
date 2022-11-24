# 💻新客户装软件流程



## 1.🧪与伯乐对接 

### 1.1申请实验室号（URT许可证文件）

需要先确认申请的**实验室号数量**

对接人：伯乐工程师

所需表格：**《Unity质控管理系统LIS导入版（URT+WA+UC）专项投放项目申请表》**

表格所需信息：医院名称、医院地址及邮编、投放科室、科室联系人、科室电话、科室Email 等

样表如下：

| 医院名称  | 医院地址及邮编         | 投放科室 | 科室联系人 | 科室电话        | 科室Email                           |
| ----- | --------------- | ---- | ----- | ----------- | --------------------------------- |
| XXX医院 | XX市XX区   430000 | XX科  | 张XX   | 138XXXXXXXX | [xxx@xxx.com](mailto:xxx@xxx.com) |



获取到以上信息后，填入项目申请表中，将表格以邮件形式发送给伯乐工程师
等待工程师反馈得到实验室License XML文件



### 1.2 申请报告系统注册码（如果需要）

对接人：**伯乐工程师**



### 1.3 申请QCBOX 许可文件（如果需要）

对接人：**伯乐工程师**

注意：需要在QCBOX安装完以后，导出key文件，再向伯乐工程师申请




## 2.🏥与医院LIS系统工程师对接

### 2.1获取LIS中的质控相关数据，需要2张视图

1.质控结果视图：v_biorad_qcresult

> 读取字段如下：
>
> - 1.仪器代码
> - 2.仪器英文名
> - 3.项目代码
> - 4.项目英文名
> - 5.项目中文名
> - 6.质控品批号
> - 7.水平
> - 8.样本号 （如果医院是按样本来做的质控）
> - 9.质控时间  2017-07-24 10:10:10
> - 10.质控结果 
> - 11.质控操作者

2.质控仪器视图：v_biorad_ins

> 读取以下字段：
>
> - 1.仪器代码
> - 2.仪器英文名

::: info
具体的接口要求，请查阅官方文档：

https://spicy-insect-d4d.notion.site/LIS-8365475d97064657805099b1810c515c
:::

### 2.2获取数据库连接信息
> - 数据库类型（Sql Server 、 Oracle）
> - 数据库名
> - 数据库访问地址
> - 可以访问以上2个视图的数据库用户名/密码





## 3.⚡与医院检验科/信息科对接

> 有条件的话，建议将**数据库**安装在**单独**的电脑/服务器/虚拟主机上 。
>
> URT等伯乐系列软件，建议安装到科室电脑统一的路径下，如 ：`D:/biorad` 文件夹



### 3.1确认URT数据库的安装位置

1. 在一台高配置的电脑上安装SQL Server 数据库，并还原qcdao空库
2. 记录以上电脑的IP地址，数据库sa访问密码
3. 完成以后执行SQL语句：`insert into Matrix values(12,'Nucleic Acid')`
4. 在科室电脑安装URT客户端软件，以及补丁（目前常用版本243002）
5. 配置主实验室号，上传License文件，更新Codelist




### 3.2安装UC

1. 在科室电脑安装UC
2. 配置连接信息
3. 上传License文件



### 3.3安装小火把

小火把是绿色软件，从LIS工程师获取到相关信息，在tools文件里进行配置，

配置好以后直接拷贝到电脑即可



### 3.4安装质控报告

质控报告是绿色软件，配置好**质控报告.exe.config**文件，配置好以后直接拷贝到电脑即可



### 3.5安装QCBox

QCBox是绿色软件，配置好**QcBox桌面版.exe.config**文件，配置好以后直接拷贝到电脑即可





## 4.⚙️后期配置

### 4.1🔬URT配置

### 4.2🧾UC配置

### 4.3 小火把配置
