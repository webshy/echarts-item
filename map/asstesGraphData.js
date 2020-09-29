var graph = {
  "nodes": [{
    "name": "河北",
    "value": [
      "石家庄"
    ],
    "category": "中心教师",
    "symbolSize": 50,
    'datas': ["石家庄"]
  },
  {
    "name": "220.220.0.1/8",
    "category": "1",
    "symbolSize": 20,
    'datas': ["关基资产报备", "河北大学:221,192,237.1/24", "石家庄银行:222.222.32.1/24", "IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  {
    "name": "220.220.0.8/8",
    "category": "1",
    "symbolSize": 20,
    'datas': ["关基资产报备", "河北大学:221,192,237.1/24", "石家庄银行:222.222.32.1/24", "IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  {
    "name": "220.220.0.9/18",
    "category": "1",
    "symbolSize": 20,
    'datas': ["关基资产报备", "河北大学:221,192,237.1/24", "石家庄银行:222.222.32.1/24", "IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  {
    "name": "220.220.0.10/18",
    "category": "2",
    "symbolSize": 20,
    'datas': ["关基资产报备", "河北大学:221,192,237.1/24", "石家庄银行:222.222.32.1/24", "IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  {
    "name": "220.220.0.11/22",
    "category": "2",
    "symbolSize": 20,
    'datas': ["关基资产报备", "河北大学:221,192,237.1/24", "石家庄银行:222.222.32.1/24", "IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  {
    "name": "220.220.0.22/19",
    "category": "2",
    "symbolSize": 20,
    'datas': ["关基资产报备", "河北大学:221,192,237.1/24", "石家庄银行:222.222.32.1/24", "IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  {
    "name": "主机资产-22/19",
    "category": "3",
    "symbolSize": 20,
    "symbol": "image://http://thumb12.jfcdns.com/2018-06/bce5b231ad7df722.png",
    'datas': ["IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  {
    "name": "安全设备-22/19",
    "category": "3",
    "symbolSize": 20,
    "symbol": "image://http://thumb12.jfcdns.com/2018-06/bce5b231ad7df722.png",
    'datas': ["IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  {
    "name": "网络设备-22/19",
    "category": "3",
    "symbolSize": 20,
    "symbol": "image://http://thumb12.jfcdns.com/2018-06/bce5b231ad7df722.png",
    'datas': ["IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  }, {
    "name": "物联网设备-22/19",
    "category": "3",
    "symbolSize": 20,
    "symbol": "image://http://thumb12.jfcdns.com/2018-06/bce5b231ad7df722.png",
    'datas': ["IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  {
    "name": "主机资产-11/22",
    "category": "3",
    "symbolSize": 20,
    "symbol": "image://http://thumb12.jfcdns.com/2018-06/bce5b231ad7df722.png",
    'datas': ["IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  {
    "name": "安全设备-11/22",
    "category": "3",
    "symbolSize": 20,
    "symbol": "image://http://thumb12.jfcdns.com/2018-06/bce5b231ad7df722.png",
    'datas': ["IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  {
    "name": "网络设备-11/22",
    "category": "3",
    "symbolSize": 20,
    "symbol": "image://http://thumb12.jfcdns.com/2018-06/bce5b231ad7df722.png",
    'datas': ["IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  }, {
    "name": "物联网设备-11/22",
    "category": "3",
    "symbolSize": 20,
    "symbol": "image://http://thumb12.jfcdns.com/2018-06/bce5b231ad7df722.png",
    'datas': ["IP:总量:506", "IP存活数量:359", "端口存活数量:1456", "高危端口:131"]
  },
  ],
  "links": [
    {
      "source": "河北",
      "target": "220.220.0.1/8",
      "show": true
    },
    {
      "source": "河北",
      "target": "220.220.0.8/8",
      "show": true
    },
    {
      "source": "河北",
      "target": "220.220.0.9/18"
    },
    {
      "source": "河北",
      "target": "220.220.0.10/18"
    },
    {
      "source": "河北",
      "target": "220.220.0.11/22"
    },
    {
      "source": "河北",
      "target": "220.220.0.22/19"
    },
    {
      "source": "220.220.0.22/19",
      "target": "主机资产-22/19",
    },
    {
      "source": "220.220.0.22/19",
      "target": "安全设备-22/19",
    },
    {
      "source": "220.220.0.22/19",
      "target": "网络设备-22/19",
    },
    {
      "source": "220.220.0.22/19",
      "target": "物联网设备-22/19",
    },
    {
      "source": "220.220.0.11/22",
      "target": "主机资产-11/22",
      "show": true
    },
    {
      "source": "220.220.0.11/22",
      "target": "安全设备-11/22",
      "show": true
    },
    {
      "source": "220.220.0.11/22",
      "target": "网络设备-11/22",
      "show": true
    },
    {
      "source": "220.220.0.11/22",
      "target": "物联网设备-11/22",
      "show": true
    },
  ]
};