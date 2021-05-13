const data = [
  {
    valid: true,
    content: '1|2'
  },
  {
    valid: false,
    content: '4|5'
  }
];

// 实现一个组件，输出对象valid为true，根据content按照h1, h2,  h4, h5格式化输出内容
{/* <Title :level="1|2|3|4|5">text<Title> */ }