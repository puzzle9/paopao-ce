| 编号 | 作者 | 发表时间 | 变更时间 | 版本 | 状态 |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 004| 北野 | 2022-11-12 | 2022-11-12 | v1.0 | 提议 |

### 支持使用bleve搜索引擎提供推文搜索服务
 [bleve](https://github.com/blevesearch/bleve)是一个嵌入式的文本索引搜索引擎，提供多种语言支持，包括中文。基于bleve搜索引擎可以实现paopao-ce的推文搜索服务，提供除zinc/meilisearch外推文搜索服务的另一种轻量级选择。

### 场景

 * 流量不大，推文总量不多的小站点；
 * 节点服务器配置比较低，需要一种轻量级的paopao-ce部署方式; 目标是 **阿里云的丐中丐版云机(1C/512M/20G - CPU:1C/Memory:512M/Disk:20G) 中单机部署paopao-ce**；

### 需求

* 实现paopao-ce的推文搜索服务，包括关键字搜索/话题搜索；
* paopao-ce本身内嵌bleve搜索引擎提供推文搜索服务；
 
### 方案
#### 实现细节
* 依赖库:
   * 文本搜索引擎 - [bleve](https://github.com/blevesearch/bleve)
   * 中文分词库 - [gse](https://github.com/go-ego/gse)
   * [gse-bleve](https://github.com/vcaesar/gse-bleve)

### 疑问
1. 为什么添加这个功能？   
提供除基于Zinc/Meilisearch搜索引擎外 实现推文搜索服务 的另一种轻量级选择。bleve是一种嵌入式文本搜索引擎，意味着paopao-ce可以内嵌bleve实现推文搜索服务，单机部署时也更方便。引入bleve的另一个原因是单机部署paopao-ce时节点配置需求最小化，目标是 **阿里云的丐中丐版云机(1C/512M/20G - CPU:1C/Memory:512M/Disk:20G) 中单机部署paopao-ce**。这是单机部署paopao-ce计划的一部分，个人小站点理想的最小化单机paopao-ce节点是 **paopao-ce内嵌bleve、localoss使用sqlite3作为存储部署于丐中丐版云机(1C/512M/20G)**。

2. 如何开启这个功能？   
    * 编译paopao-ce时 `TAGS` 添加`bleve`:  
        ```bash
        make build TAGS=`bleve`
        ```

    * 在配置文件config.yaml中的`Features`中添加`Bleve`功能项开启该功能:  
        ```yaml
        ...
        # features中加上 Bleve
        Features:
        Default: ["Meili", "LoggerMeili", "Base", "Sqlite3", "BigCacheIndex", "MinIO", "Friendship", "Bleve"]
        Base: ["Redis", "PhoneBind"]
        ...
        ```

### 更新记录
#### v1.0 (2022-11-12) - 北野
* 初始文档