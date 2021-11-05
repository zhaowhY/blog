/**
 * @description 利用await promise函数阻塞http请求，等到合适时机，将promise函数状态改为resolve，继续http请求
 * 1. 创建一个类RequestLimit
 * 2. 参数，max: 最大并发数，current: 目前请求数 ，httpQueue: 请求暂时缓存队列
 * 3. 开始一个请求，current++，结束一个请求，current--。当current>=max时，利用pormise进行阻塞，存入httpQueue,待current<max时，从httpQueue中取出一个promise，并将状态改为reslove()
 */


class RequestLimit {
  constructor(max = 5, requestApi) {
    this.max = max; // 最大阀值
    this.requestApi = requestApi; // api接口
    this.current = 0; // 当前请求数
    this.httpQueue = []; // 缓存队列
  }

  // 请求函数
  async request(...args) {
    if (this.current >= this.max) {
      await this.startBlocking();
    }
    try {
      this.current++;
      await this.requestApi(...args);
    } catch (error) {
      return error;
    } finally {
      this.current--;
      this.next();
    }
  }

  // 创建一个promise，缓存超过max的请求
  startBlocking() {
    let subResolve;
    const promise = new Promise((resolve) => { subResolve = resolve; });
    this.httpQueue.push(subResolve);
    return promise;
  }

  // 释放一个被缓存的请求
  next() {
    if (this.httpQueue.length <= 0) return;
    this.httpQueue.shift()();
  }
}

module.exports = RequestLimit;




