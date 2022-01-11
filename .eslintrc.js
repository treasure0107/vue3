// ESLint 配置文件 遵循commonJS 的导出规则，所导出的对象就是ESLint的配置对象
// 文档： https://eslint.bootcss.com/docs/user-guide/configuring
module.exports = {
  // 表示当前目录即为根目录
  root: true,
  // env表示启动 ESLint 检测的环境
  env: {
    // 在node 环境下启动 ESLint 检测
    node: true
  },
  // ESLint中基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  // 解析器
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 需要修改的启动规则及其各自的错误级别
  /*
   * 错误级别分为三种：
   * off或0 - 关闭规则
   * warn 或 1 开启规则，使用警告级别的错误：warn（不会导致程序退出）
   * error 或 2 开启规则，使用错误级别的错误：error（当被触发的时候，程序会退出） quotes
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off'
  }
}
