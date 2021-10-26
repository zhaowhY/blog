/**
 * @description 1. 利用promise实现睡眠
 */

const delay = time => new Promise(resolve => setTimeout(resolve, time));

const syncRun = async (eventQueue = []) => {
  for (const event of eventQueue) {
    await delay(2000).then(() => {
      event();
    });
  }
};

syncRun([() => console.log(1), () => console.log(2)]);


/**
 * @description 进阶版
 */

// 题目: 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);

createFlow([
  () => log("a"),
  () => log("b"),
  subFlow,
  [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
  console.log("done");
});

// 答案：
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);
const { log } = console;

createFlow([
  () => log("a"),
  () => log("b"),
  subFlow,
  [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
  console.log("done");
});

function createFlow(effects = []) {
  return {
    async run(callback) {
      const flatEffects = effects.flat(Infinity);
      for (const effect of flatEffects) {
        if (typeof effect.run === 'function') {
          await effect.run();
        } else {
          await effect();
        }
      }
      if (typeof callback === 'function') {
        await callback();
      }
    }
  };
}


