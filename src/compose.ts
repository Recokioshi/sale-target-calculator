const compose = (...functions: Function[]) => (args: any) => functions.reduceRight((arg, fn) => fn(arg), args);
export default compose;
