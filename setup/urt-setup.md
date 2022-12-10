# 📦URT安装步骤


::: info
本文档以Win7（电脑系统）、243002（URT版本）为例
:::


## 1.安装

1.将安装文件压缩包**Unity Real Time 2.0 SP2 (006) Full Install**解压到当前文件夹

![](https://i.loli.net/2021/09/27/8H2e9wnfX4qjmur.png)

2.进入解压后得到的文件夹，找到**setup.exe** , 右键 **以管理员身份运行**，点击确定

![](https://i.loli.net/2021/09/27/hwIvPzZ4meMSo8j.png)

3.点击下一步：

![](https://i.loli.net/2021/09/27/iZgmhnGpvcV7LRU.png)

4.点击Yes

![](https://i.loli.net/2021/09/27/cTGC4z5Dy8XA9lr.png)

5.点击Next

![](https://i.loli.net/2021/09/27/RBkhy7QEspCPmva.png)

## 2.高级选项

6.选择**Advanced**，然后点击**Next**

![](https://i.loli.net/2021/09/27/KpjyczXM6PIo7T8.png)

7.先选择 **Unity Real Time Installation** ，再点击 **Next**

![](https://i.loli.net/2021/09/27/VeMg3Hs4kBjcXvJ.png)

8.选择合适的程序**安装目录**（建议安装在C盘以外的目录），然后点击下一步

![](https://i.loli.net/2021/09/27/mrVSwXv3724NaJL.png)

9.继续点击下一步

![](https://i.loli.net/2021/09/27/M2DXnd9p7CHEiYF.png)

10.等待程序安装完成

![](https://i.loli.net/2021/09/27/KpJQwyNcb1P2irx.png)

11.点击 **是**

![](https://i.loli.net/2021/09/27/X8okylKV6pCzEj3.png)

12.点击**Finish**，完成安装

![](https://i.loli.net/2021/09/27/YlOVUx3b4S7tXFh.png)

13.此时桌面出现**Unity Real Time**的图标，则表示软件已成功安装！

 

## 3.配置及更新补丁

14.在桌面，鼠标双击打开 **Unity Real Time** 图标，在弹出的对话框中，点击**更改**，

![](https://i.loli.net/2021/09/27/yxiQ857ABed4b9K.png)

15.依次输入SQL服务器**连接信息（IP/实例名）**、SQL数据库**登录账号**、**密码**、**数据库（QCDAO）**，然后确定

![](https://i.loli.net/2021/09/27/SJ7aiuH8QMrzNnP.png)

16.输入软件的管理账户密码，点击确定

![](https://i.loli.net/2021/09/27/GqbjtioJO9a7NE6.png)

17.待完全打开以后，点击顶部 **帮助** →  **关于 Unity Real Time**

![](https://i.loli.net/2021/09/27/5GktxObKW7oTwi2.png)

18.查看**应用程序版本** 和 **数据库版本** 是否一致，如不一致，则需要安装对于版本的补丁

![](https://i.loli.net/2021/09/27/8Js1MxcEKqOfG4B.png)

上图中，应用程序版本比数据库版本低，所以，需要将应用程序版本更新到和数据库一样的版本。



19.首先关闭Unity Real Time软件，然后找到应用程序更新补丁，右键管理员运行打开**UnityRT2SP243002.exe**补丁，补丁会自动运行。

![](https://i.loli.net/2021/09/27/pxqWUvPwCBuiaFS.png)

20.更新完后，重新打开Unity Real Time软件，查看补丁是否成功更新。如**应用程序版本** 和 **数据库版本** 一致，这表示更新成功了！





## 4.小贴士

### ✔️加快URT开启的速度

::: tip 小技巧
如何让URT的打开速度变快？
:::



待URT安装完成并配置好连接信息后，可以打开URT的安装目录，用记事本打开`UnityRealTime.exe.config`文件，

找到其中的`UnityUrl` 这一行，并将值改为0.0.0.0

`<add key="UnityUrl" value="0.0.0.0" />`

然后，保存关闭文件，这样再打开URT的速度会快很多



### ✔️减少重复配置

::: tip 小技巧
如何减少重复配置连接信息？
:::

待一台电脑URT安装完成并配置好连接信息后，我们可以拷贝上文提到的`UnityRealTime.exe.config`文件，

等其他电脑安装完URT以后，在将此文件覆盖到URT的安装目录，这样就不用重复配置数据库连接信息了！

（注意，最好是相同操作系统版本的电脑，如都是Win7 ，或者都是Win 10）已在WIN7系统验证可行，其他版本系统请自行测试！





## 5.Win10系统离线安装   .net 3.5

部分版本的 Win10 电脑没有自带 .net 环境，使用URT又必须要有 `.NET Framework 3.5`，往往医院内网没有外部网络，无法在线下载，此时只能通过离线的方式安装，步骤如下：

### 1.下载对应WIN版本的sxs文件



::: tip 如何查看Win10版本？
鼠标右键`此电脑`，选择`属性`，下滑找到 `Windows规格` ，然后就可以看到 `版本号` 了
:::



> `1809`可独装，密码:3quo
>
> https://wws.lanzoui.com/i0zFtqaieoh 
>
> `1903`,`1909`可混装   密码:1ax1
>
> https://wws.lanzoui.com/igOZ5qaifmb
>
> `2004`,`20h2`,`21h1`可以混装   密码:9wr3
>
> https://wws.lanzoui.com/idDI6qaigsd
>
> 
>
> 打包下载：
>
> https://disk.ningsuan.com.cn/#s/7ZfIRIig&view=2.%E8%A1%A5%E4%B8%81%E5%8F%8A%E5%85%B6%E4%BB%96/Win10%E5%AE%89%E8%A3%85net3.5





![](/img/win10v.png)



如上图所示，Win10 版本为 `20H2`， 则下载适用于 `20H2` 的sxs文件

将下载好的sxs文件夹拷贝到`C盘根目录` 

### 2.在CMD中执行语句

`dism.exe /online /enable-feature /featurename:netfx3 /Source:C:\sxs`



等待部署完成，即安装完成  .NET Framework 3.5

