/**
 * @description 实现下面这道题中的machine函数
 */

function machine() {

}
machine('robot').execute()
// start robot
machine('robot').do('eat').execute();
// start robot
// robot eat
machine('robot').wait(5).do('eat').execute();
// start robot
// wait 5s（这里等待了5s）
// robot eat
machine('robot').waitFirst(5).do('eat').execute();
// wait 5s
// start robot
// robot eat