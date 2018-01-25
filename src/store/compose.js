function addFirst(str) {
  return '我很帅'+str;
}
function addSecond(str) {
  return str+'有钱'
}
function compose(...fns) {
  return function (...args) {
    let last = fns.pop(); // 最后一个函数addFirst
    return fns.reduceRight(function (prev,next,curIndex,arr) {
      return next(prev);
    },last(...args))
  }
}
// addSecond(addFirst('姜文'))
console.log(compose(addFirst,addSecond,addFirst)('姜文'));