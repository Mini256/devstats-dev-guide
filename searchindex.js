Object.assign(window.search, {"doc_urls":["introduction.html#devstats-介绍","introduction.html#关于-devstats","introduction.html#在-tidb-社区的应用","introduction.html#关于本书","introductions/data-source.html#数据来源","introductions/data-source.html#gh-archive","introductions/data-source.html#介绍","introductions/data-source.html#记录形式","introductions/data-source.html#github-api","introductions/data-source.html#介绍","introductions/data-source.html#记录形式","introductions/data-source.html#git","introductions/data-source.html#介绍","introductions/data-source.html#记录形式","introductions/data-source.html#cncf-gitdm","introductions/data-source.html#介绍","introductions/data-source.html#记录形式","introductions/data-collect.html#数据收集方式","introductions/data-collect.html#gh-archive","introductions/data-collect.html#收集方式","introductions/data-collect.html#收集工具","introductions/data-collect.html#github-api","introductions/data-collect.html#收集方式","introductions/data-collect.html#收集工具","introductions/data-collect.html#git","introductions/data-collect.html#收集方式","introductions/data-collect.html#收集工具","introductions/data-collect.html#cncf-gitdm","introductions/data-collect.html#收集方式","introductions/data-collect.html#收集工具","introductions/store.html#数据存储方式","introductions/display.html#数据展示方式","architecture.html#架构","architecture.html#整体架构","architecture.html#架构图","architecture.html#架构说明","architecture.html#核心组件","deployment.html#部署流程","custom.html#定制","release.html#发布流程"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":1,"title":1},"1":{"body":13,"breadcrumbs":1,"title":1},"10":{"body":7,"breadcrumbs":0,"title":0},"11":{"body":0,"breadcrumbs":1,"title":1},"12":{"body":2,"breadcrumbs":0,"title":0},"13":{"body":3,"breadcrumbs":0,"title":0},"14":{"body":0,"breadcrumbs":2,"title":2},"15":{"body":5,"breadcrumbs":0,"title":0},"16":{"body":6,"breadcrumbs":0,"title":0},"17":{"body":0,"breadcrumbs":0,"title":0},"18":{"body":0,"breadcrumbs":2,"title":2},"19":{"body":6,"breadcrumbs":0,"title":0},"2":{"body":2,"breadcrumbs":1,"title":1},"20":{"body":3,"breadcrumbs":0,"title":0},"21":{"body":0,"breadcrumbs":2,"title":2},"22":{"body":13,"breadcrumbs":0,"title":0},"23":{"body":5,"breadcrumbs":0,"title":0},"24":{"body":0,"breadcrumbs":1,"title":1},"25":{"body":7,"breadcrumbs":0,"title":0},"26":{"body":5,"breadcrumbs":0,"title":0},"27":{"body":0,"breadcrumbs":2,"title":2},"28":{"body":7,"breadcrumbs":0,"title":0},"29":{"body":3,"breadcrumbs":0,"title":0},"3":{"body":2,"breadcrumbs":0,"title":0},"30":{"body":0,"breadcrumbs":0,"title":0},"31":{"body":0,"breadcrumbs":0,"title":0},"32":{"body":0,"breadcrumbs":0,"title":0},"33":{"body":0,"breadcrumbs":0,"title":0},"34":{"body":1,"breadcrumbs":0,"title":0},"35":{"body":5,"breadcrumbs":0,"title":0},"36":{"body":6,"breadcrumbs":0,"title":0},"37":{"body":0,"breadcrumbs":0,"title":0},"38":{"body":0,"breadcrumbs":0,"title":0},"39":{"body":0,"breadcrumbs":0,"title":0},"4":{"body":0,"breadcrumbs":0,"title":0},"5":{"body":0,"breadcrumbs":2,"title":2},"6":{"body":3,"breadcrumbs":0,"title":0},"7":{"body":12,"breadcrumbs":0,"title":0},"8":{"body":0,"breadcrumbs":2,"title":2},"9":{"body":7,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"","breadcrumbs":"介绍 » devstats 介绍","id":"0","title":"devstats 介绍"},"1":{"body":"devstats 是一个使用 HA Postgres 数据库和 Grafana 仪表盘来可视化 GitHub 存档的工具集。 所有的东西都是开源的，所以它可以被其他 CNCF 和非 CNCF 开源项目使用。唯一的要求是，项目必须托管在一个公共的 GitHub 仓库上。 CNCF 的 devstats 项目使用 Equinix 裸机 Kubernetes 节点部署，并使用 Helm 图部署。","breadcrumbs":"介绍 » 关于 devstats","id":"1","title":"关于 devstats"},"10":{"body":"无论是 REST API 还是 GraphQL API 都可以以 JSON 的格式返回数据，devstats 会定时的去使用 API 获取数据作为数据来源。","breadcrumbs":"介绍 » 数据来源 » 记录形式","id":"10","title":"记录形式"},"11":{"body":"","breadcrumbs":"介绍 » 数据来源 » Git","id":"11","title":"Git"},"12":{"body":"Git 作为一个分布式版本控制系统，存储了代码仓库所有的分支上的所有 commit。","breadcrumbs":"介绍 » 数据来源 » 介绍","id":"12","title":"介绍"},"13":{"body":"Git 存储了代码仓库的所有 commit，devstats 会克隆仓库，并从中获取文件级别的 commit 信息作为数据来源。","breadcrumbs":"介绍 » 数据来源 » 记录形式","id":"13","title":"记录形式"},"14":{"body":"","breadcrumbs":"介绍 » 数据来源 » CNCF gitdm","id":"14","title":"CNCF gitdm"},"15":{"body":"CNCF gitdm 是 CNCF 对 gitdm 的一个 fork，用来计算开发者及其公司对开源项目的贡献。","breadcrumbs":"介绍 » 数据来源 » 介绍","id":"15","title":"介绍"},"16":{"body":"CNCF gitdm 将数据存储为 txt 和 JSON 文件，并且保持每个月一两次的更新。devstats 会将数据以 JSON 的格式导入到其中来作为数据来源。","breadcrumbs":"介绍 » 数据来源 » 记录形式","id":"16","title":"记录形式"},"17":{"body":"","breadcrumbs":"介绍 » 数据收集方式 » 数据收集方式","id":"17","title":"数据收集方式"},"18":{"body":"","breadcrumbs":"介绍 » 数据收集方式 » GH Archive","id":"18","title":"GH Archive"},"19":{"body":"devstats 会一次性将 GH Archive 所有的 JSON 文件逐个下载下来进行解析然后存储到 PostgreSQL 中，并且在该过程中会将数据分为固定数据和可变数据，将 event_id 作为可变数据的主键来进行维护和更新。","breadcrumbs":"介绍 » 数据收集方式 » 收集方式","id":"19","title":"收集方式"},"2":{"body":"因为 devstats 支持其他项目使用，所以我们为 TiDB 社区部署了一套来帮助我们进行社区状况分析。（正在进行中）","breadcrumbs":"介绍 » 在 TiDB 社区的应用","id":"2","title":"在 TiDB 社区的应用"},"20":{"body":"devstats 使用 gha2db 工具来解析数据，并将数据存储到 PostgreSQL 中。","breadcrumbs":"介绍 » 数据收集方式 » 收集工具","id":"20","title":"收集工具"},"21":{"body":"","breadcrumbs":"介绍 » 数据收集方式 » GitHub API","id":"21","title":"GitHub API"},"22":{"body":"devstats 主要利用 GitHub API 来补充和校正 GH Archive 中缺失或错误的数据。devstats 会通过定时任务来调用 GitHub API 获取两个小时以内的相关事件，并且把这些数据更新到 PostgreSQL 中。例如：Issue/PR 当前的 Label 或 Milestone 信息，就需要 API 尽快的来收集和更新。","breadcrumbs":"介绍 » 数据收集方式 » 收集方式","id":"22","title":"收集方式"},"23":{"body":"devstats 使用 ghapi2db 来调用 GitHub API 拉取数据并将数据存储到 PostgreSQL 中。","breadcrumbs":"介绍 » 数据收集方式 » 收集工具","id":"23","title":"收集工具"},"24":{"body":"","breadcrumbs":"介绍 » 数据收集方式 » Git","id":"24","title":"Git"},"25":{"body":"devstats 会将需要分析的仓库直接 clone 或者 pull 到本地，然后查看整个仓库的所有的 git log 并对它进行分析。devstats 会直接通过提交的 SHA 来定位改动并且统计改动大小信息。","breadcrumbs":"介绍 » 数据收集方式 » 收集方式","id":"25","title":"收集方式"},"26":{"body":"devstats 使用 get_repos 来 clone/pull 仓库，并对仓库的 git log 逐一分析。","breadcrumbs":"介绍 » 数据收集方式 » 收集工具","id":"26","title":"收集工具"},"27":{"body":"","breadcrumbs":"介绍 » 数据收集方式 » CNCF gitdm","id":"27","title":"CNCF gitdm"},"28":{"body":"CNCF gitdm 提供了一个存储开发者所属公司信息的 JSON 文件 ，该文件使用 Git LFS 方式存储。devstats 会从中解析出 GitHub 用户的公司信息，并与其他数据结合，这样我们就收集到了大部分贡献者的公司信息。","breadcrumbs":"介绍 » 数据收集方式 » 收集方式","id":"28","title":"收集方式"},"29":{"body":"devstats 使用 import_affs 来解析 JSON 文件将员工公开信息存储到数据库中。","breadcrumbs":"介绍 » 数据收集方式 » 收集工具","id":"29","title":"收集工具"},"3":{"body":"编写本书的目的：一方面是希望本书作为一本手册能够分析 devstats 的架构和记录它的部署流程，另外一方面也希望能够作为一个使用 devstats 的例子供其他社区参考。","breadcrumbs":"介绍 » 关于本书","id":"3","title":"关于本书"},"30":{"body":"","breadcrumbs":"介绍 » 数据存储方式 » 数据存储方式","id":"30","title":"数据存储方式"},"31":{"body":"","breadcrumbs":"介绍 » 数据展示方式 » 数据展示方式","id":"31","title":"数据展示方式"},"32":{"body":"","breadcrumbs":"架构 » 架构","id":"32","title":"架构"},"33":{"body":"","breadcrumbs":"架构 » 整体架构","id":"33","title":"整体架构"},"34":{"body":"arch","breadcrumbs":"架构 » 架构图","id":"34","title":"架构图"},"35":{"body":"当贡献者们在 GitHub 上活动时会产生相关的日志数据，我们会采用定时任务的方式每隔一小时将这些数据同步到 PostgreSQL 中，然后通过 Grafana 将数据展示出来给大家看。另外我们利用 Travis CI 对我们的改动进行测试和部署。","breadcrumbs":"架构 » 架构说明","id":"35","title":"架构说明"},"36":{"body":"Grafana 用于展示数据 PostgreSQL 用于存储数据 使用 Patroni 构建 PostgreSQL 集群保证高可用性 Provisions 用于从各个数据源收集数据 在该组件中主要是使用 devstatscode 的代码来从各个数据源收集数据","breadcrumbs":"架构 » 核心组件","id":"36","title":"核心组件"},"37":{"body":"","breadcrumbs":"部署流程 » 部署流程","id":"37","title":"部署流程"},"38":{"body":"","breadcrumbs":"定制 » 定制","id":"38","title":"定制"},"39":{"body":"","breadcrumbs":"发布流程 » 发布流程","id":"39","title":"发布流程"},"4":{"body":"","breadcrumbs":"介绍 » 数据来源 » 数据来源","id":"4","title":"数据来源"},"5":{"body":"","breadcrumbs":"介绍 » 数据来源 » GH Archive","id":"5","title":"GH Archive"},"6":{"body":"GH Archive 是一个记录 GitHub 公共时间轴的项目，将其归档，并使其易于访问，以便进一步分析。","breadcrumbs":"介绍 » 数据来源 » 介绍","id":"6","title":"介绍"},"7":{"body":"GH Archive 会将 GitHub 所有的 事件 通过 API 爬取 并存储为 JSON 文件，然后将其整理上传到 Google Big Query 的公开数据集。 另外， GH Archive 在爬取过程中会对邮件信息进行 混淆 ，防止数据集被利用暴露个人隐私。 devstats 会直接分析这些 JSON 文件作为数据来源。","breadcrumbs":"介绍 » 数据来源 » 记录形式","id":"7","title":"记录形式"},"8":{"body":"","breadcrumbs":"介绍 » 数据来源 » GitHub API","id":"8","title":"GitHub API"},"9":{"body":"GitHub 提供了两套 API 来让用户获取 GitHub 上几乎所有的数据： REST API GraphQL API","breadcrumbs":"介绍 » 数据来源 » 介绍","id":"9","title":"介绍"}},"length":40,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":7,"docs":{"10":{"tf":1.7320508075688772},"21":{"tf":1.0},"22":{"tf":1.7320508075688772},"23":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.7320508075688772}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"34":{"tf":1.0}},"i":{"df":0,"docs":{},"v":{"df":6,"docs":{"18":{"tf":1.0},"19":{"tf":1.0},"22":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"35":{"tf":1.0}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"26":{"tf":1.0}}}}}},"df":1,"docs":{"25":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"f":{"df":6,"docs":{"1":{"tf":1.7320508075688772},"14":{"tf":1.0},"15":{"tf":1.4142135623730951},"16":{"tf":1.0},"27":{"tf":1.0},"28":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"12":{"tf":1.0},"13":{"tf":1.0}},"，":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":15,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772},"10":{"tf":1.0},"16":{"tf":1.0},"19":{"tf":1.0},"2":{"tf":1.0},"20":{"tf":1.0},"22":{"tf":1.4142135623730951},"23":{"tf":1.0},"25":{"tf":1.4142135623730951},"26":{"tf":1.0},"28":{"tf":1.0},"29":{"tf":1.0},"3":{"tf":1.4142135623730951},"7":{"tf":1.0}},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"36":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":1,"docs":{"26":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"h":{"a":{"2":{"d":{"b":{"df":1,"docs":{"20":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"2":{"d":{"b":{"df":1,"docs":{"23":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":6,"docs":{"18":{"tf":1.0},"19":{"tf":1.0},"22":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}},"i":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"m":{"df":5,"docs":{"14":{"tf":1.0},"15":{"tf":1.4142135623730951},"16":{"tf":1.0},"27":{"tf":1.0},"28":{"tf":1.0}}}},"df":7,"docs":{"11":{"tf":1.0},"12":{"tf":1.0},"13":{"tf":1.0},"24":{"tf":1.0},"25":{"tf":1.0},"26":{"tf":1.0},"28":{"tf":1.0}},"h":{"df":0,"docs":{},"u":{"b":{"df":10,"docs":{"1":{"tf":1.4142135623730951},"21":{"tf":1.0},"22":{"tf":1.4142135623730951},"23":{"tf":1.0},"28":{"tf":1.0},"35":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"n":{"a":{"df":3,"docs":{"1":{"tf":1.0},"35":{"tf":1.0},"36":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":2,"docs":{"10":{"tf":1.0},"9":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"h":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"_":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":1,"docs":{"29":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":1,"docs":{"22":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":6,"docs":{"10":{"tf":1.0},"16":{"tf":1.4142135623730951},"19":{"tf":1.0},"28":{"tf":1.0},"29":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}},"k":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"l":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"22":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":1,"docs":{"28":{"tf":1.0}}},"o":{"df":0,"docs":{},"g":{"df":2,"docs":{"25":{"tf":1.0},"26":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"22":{"tf":1.0}}}}}}}}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"36":{"tf":1.0}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":6,"docs":{"19":{"tf":1.0},"20":{"tf":1.0},"22":{"tf":1.0},"23":{"tf":1.0},"35":{"tf":1.0},"36":{"tf":1.4142135623730951}}}}}}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"36":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"25":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"10":{"tf":1.0},"9":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"h":{"a":{"df":1,"docs":{"25":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"i":{"d":{"b":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":1,"docs":{"35":{"tf":1.0}}}}},"df":0,"docs":{}},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}}}}},"breadcrumbs":{"root":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":7,"docs":{"10":{"tf":1.7320508075688772},"21":{"tf":1.4142135623730951},"22":{"tf":1.7320508075688772},"23":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.4142135623730951},"9":{"tf":1.7320508075688772}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"34":{"tf":1.0}},"i":{"df":0,"docs":{},"v":{"df":6,"docs":{"18":{"tf":1.4142135623730951},"19":{"tf":1.0},"22":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"35":{"tf":1.0}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"26":{"tf":1.0}}}}}},"df":1,"docs":{"25":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"f":{"df":6,"docs":{"1":{"tf":1.7320508075688772},"14":{"tf":1.4142135623730951},"15":{"tf":1.4142135623730951},"16":{"tf":1.0},"27":{"tf":1.4142135623730951},"28":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"12":{"tf":1.0},"13":{"tf":1.0}},"，":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":15,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":2.0},"10":{"tf":1.0},"16":{"tf":1.0},"19":{"tf":1.0},"2":{"tf":1.0},"20":{"tf":1.0},"22":{"tf":1.4142135623730951},"23":{"tf":1.0},"25":{"tf":1.4142135623730951},"26":{"tf":1.0},"28":{"tf":1.0},"29":{"tf":1.0},"3":{"tf":1.4142135623730951},"7":{"tf":1.0}},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"36":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":1,"docs":{"26":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"h":{"a":{"2":{"d":{"b":{"df":1,"docs":{"20":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"2":{"d":{"b":{"df":1,"docs":{"23":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":6,"docs":{"18":{"tf":1.4142135623730951},"19":{"tf":1.0},"22":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}},"i":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"m":{"df":5,"docs":{"14":{"tf":1.4142135623730951},"15":{"tf":1.4142135623730951},"16":{"tf":1.0},"27":{"tf":1.4142135623730951},"28":{"tf":1.0}}}},"df":7,"docs":{"11":{"tf":1.4142135623730951},"12":{"tf":1.0},"13":{"tf":1.0},"24":{"tf":1.4142135623730951},"25":{"tf":1.0},"26":{"tf":1.0},"28":{"tf":1.0}},"h":{"df":0,"docs":{},"u":{"b":{"df":10,"docs":{"1":{"tf":1.4142135623730951},"21":{"tf":1.4142135623730951},"22":{"tf":1.4142135623730951},"23":{"tf":1.0},"28":{"tf":1.0},"35":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"n":{"a":{"df":3,"docs":{"1":{"tf":1.0},"35":{"tf":1.0},"36":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":2,"docs":{"10":{"tf":1.0},"9":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"h":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"_":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":1,"docs":{"29":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":1,"docs":{"22":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":6,"docs":{"10":{"tf":1.0},"16":{"tf":1.4142135623730951},"19":{"tf":1.0},"28":{"tf":1.0},"29":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}},"k":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"l":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"22":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":1,"docs":{"28":{"tf":1.0}}},"o":{"df":0,"docs":{},"g":{"df":2,"docs":{"25":{"tf":1.0},"26":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"22":{"tf":1.0}}}}}}}}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"36":{"tf":1.0}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":6,"docs":{"19":{"tf":1.0},"20":{"tf":1.0},"22":{"tf":1.0},"23":{"tf":1.0},"35":{"tf":1.0},"36":{"tf":1.4142135623730951}}}}}}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"36":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"25":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"10":{"tf":1.0},"9":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"h":{"a":{"df":1,"docs":{"25":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"i":{"d":{"b":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":1,"docs":{"35":{"tf":1.0}}}}},"df":0,"docs":{}},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"21":{"tf":1.0},"8":{"tf":1.0}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":2,"docs":{"18":{"tf":1.0},"5":{"tf":1.0}}}}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"f":{"df":2,"docs":{"14":{"tf":1.0},"27":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":2,"docs":{"18":{"tf":1.0},"5":{"tf":1.0}}},"i":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"m":{"df":2,"docs":{"14":{"tf":1.0},"27":{"tf":1.0}}}},"df":2,"docs":{"11":{"tf":1.0},"24":{"tf":1.0}},"h":{"df":0,"docs":{},"u":{"b":{"df":2,"docs":{"21":{"tf":1.0},"8":{"tf":1.0}}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"i":{"d":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});