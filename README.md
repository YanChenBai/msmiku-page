# 花生弥乐园

弥生 Miku 的个人主页。页面用于展示虚拟主播人设、直播内容、歌单入口、舰长礼物与观众边界说明。

## 技术栈

- [Nuxt 4](https://nuxt.com/) + Vue 3
- Tailwind CSS v4
- GSAP 动效
- Vite+ 统一工具链
- `@nuxt/fonts` 字体加载
- `shadcn-nuxt` 组件约定

## 本地开发

安装依赖：

```bash
vp install
```

启动开发服务器：

```bash
vp dev
```

默认访问地址：

```text
http://localhost:3000
```

## 常用命令

```bash
# 格式化、lint、类型检查
vp check

# 自动修复格式和可修复问题
vp check --fix

# 运行测试
vp test

# 生产构建
vp run build

# 生成静态站点
vp run generate

# 预览生产产物
vp run preview
```

## 项目结构

```text
app/
  app.vue                  # 主页内容
  assets/
    css/tailwind.css       # Tailwind 与全局样式
    img/                   # 弥生头像资源
  components/
    MiShengHead.vue        # 头像眨眼与点击晃动
    SplitText.vue          # GSAP 文字入场动效
    Magnet.vue             # 磁吸交互组件
nuxt.config.ts             # Nuxt、字体、Tailwind、Nitro 配置
vite.config.ts             # Vite+ 格式化、lint、任务配置
```

## 内容维护

主页主要内容集中在 `app/app.vue`：

- `profileStats`：身份、年龄、身高等设定
- `streamMix`：直播内容比例
- `businessItems`：营业内容标签
- `giftItems`：舰长礼物列表
- 页面文案：首屏介绍、边界说明、商城提示

头像图片位于 `app/assets/img/`，眨眼和点击晃动逻辑在 `app/components/MiShengHead.vue`。

## 构建说明

项目在 `nuxt.config.ts` 中配置了：

```ts
nitro: {
  preset: 'static',
}
```

因此可以通过 `vp run generate` 输出静态站点，适合部署到静态托管服务。
