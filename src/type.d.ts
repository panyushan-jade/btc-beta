
/**
 * 把对象中的key变成可选
 * Optional<obj, 'key1' | 'key2...'>
 */
 type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
