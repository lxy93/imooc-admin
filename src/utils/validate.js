/**
 * 是否为外部链接
 * @param {String} path 地址
 * @returns Boolen
 */
export const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path);
};
