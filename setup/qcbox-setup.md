# 🗳️QcBox 安装

> QcBox 是绿色免安装程序，配置好以后只需要将对应的文件夹拷贝到电脑即可使用


## 1.配置config 文件

在QcBox桌面版文件夹中，用记事本打开  `QcBox桌面版.exe.config` 文件

找到此段语句：

```xml
 <!-- 系统数据库连接字符串 -->
    <add key="ConnectionString" value="server=.;database=QCDAO;uid=sa;pwd=biorad;" />
    <add key="ConnectionString2" value="server=.;database=QCDAO;uid=sa;pwd=biorad;" />

```

需要修改的地方：

server=`QCDAO服务器的IP地址`（根据实际情况填写）

database=`QCDAO`

uid=`sa`（数据库的用户名，一般情况为sa）

pwd=`biorad` （数据库sa对应的密码，根据实际情况修改）



修改以上值，完成以后保存即可



## 2.打开使用

拷贝QcBox文件到电脑，然后在QcBox文件夹中，找到`QcBox桌面版.exe`→鼠标**右键**→**发送到** →**桌面快捷方式**

![qcbox-002.png](https://i.loli.net/2021/09/28/AxGfz59lpaV46gb.png)

在桌面找到Qcbox图标，双击打开，即可





## 3.添加表


::: warning
注意：如果客户此前一直都是用的`Unity Real Time`软件，没有任何一台电脑安装过QcBox，则需要使用数据库工具，添加相应的表到`QCDAO`数据库中（如果客户有使用QcBox，只是在新的电脑上安装QcBox，则不需要此操作）
:::


![qcbox-001.png](https://i.loli.net/2021/09/28/7GqRd6thA3pILHo.png)

通过**SQL Server Management Studio**工具或其他数据库工具，依次执行上述SQL语句，添加相应数据表到QCDAO数据库中，即可。

以上SQL语句文件地址：https://disk.ningsuan.com.cn/#s/7ZfIRIig 密码：aaaa