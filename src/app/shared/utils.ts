export function invert(fun: Function, ...args: any[]) {
  // @ts-ignore
  return !fun.call(this, ...args)
}
