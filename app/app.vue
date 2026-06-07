<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue';
import { onMounted, ref, watch } from 'vue';

const isDark = ref(false);
const facts = ['异次元捉妖师', '男孩子虚拟主播', '587 岁', '官方 170cm，悄悄话 155.6cm'];

onMounted(() => {
  isDark.value = localStorage.getItem('misheng-theme') === 'dark';
});

watch(isDark, value => {
  if (import.meta.client) {
    localStorage.setItem('misheng-theme', value ? 'dark' : 'light');
  }
});
</script>

<template>
  <main
    class="theme-page min-h-screen bg-(--page-bg) px-5 py-6 text-(--ink) transition-colors duration-300 sm:px-8 lg:px-10"
    :data-theme="isDark ? 'dark' : 'light'"
  >
    <article class="mx-auto max-w-5xl">
      <nav class="mb-10 flex items-center justify-between gap-4 text-sm text-(--muted)">
        <span class="font-mi-sans font-semibold text-(--ink)">花生弥乐园</span>
        <div class="flex items-center gap-4">
          <a
            href="https://misheng.live"
            target="_blank"
            rel="noreferrer"
            class="text-(--accent) underline decoration-(--accent) underline-offset-4 transition hover:opacity-75"
          >
            歌单 misheng.live
          </a>
          <button
            type="button"
            class="inline-grid size-9 place-items-center rounded-full border border-(--line) text-(--ink) transition hover:bg-(--soft)"
            :aria-label="isDark ? '切换到白色主题' : '切换到黑色主题'"
            @click="isDark = !isDark"
          >
            <Sun v-if="isDark" class="size-4" :stroke-width="2" />
            <Moon v-else class="size-4" :stroke-width="2" />
          </button>
        </div>
      </nav>

      <header class="grid items-end gap-8 border-b border-(--line) pb-10 lg:grid-cols-[1fr_340px]">
        <div>
          <p class="mb-4 text-base font-semibold text-(--accent)">♡(˃̶͈̀௰˂̶͈́)੭ 你好～我是弥生</p>
          <SplitText
            text="弥生 Miku"
            class-name="font-mi-sans text-left text-6xl font-black leading-[0.95] text-[var(--ink)] sm:text-7xl lg:text-8xl"
            :delay="80"
            :duration="0.45"
            ease="power3.out"
            split-type="chars"
            :from="{ opacity: 0, y: 48, rotateX: -40 }"
            :to="{ opacity: 1, y: 0, rotateX: 0 }"
            :threshold="0.1"
            root-margin="-100px"
            text-align="left"
            tag="h1"
          />
          <p class="mt-6 max-w-2xl text-lg leading-9 text-(--body) sm:text-xl">
            是一名来自异次元的捉妖师哦～悄悄说，我是一个男孩子哒！因为一些奇妙机缘，
            正式成为了一名虚拟主播啦。
          </p>
        </div>

        <figure class="mx-auto w-full max-w-[320px] lg:mx-0">
          <Magnet
            :padding="10"
            :disabled="false"
            :magnet-strength="3"
            active-transition="transform 0.2s ease-out"
            inactive-transition="transform 0.6s ease-in-out"
            wrapper-class-name="custom-wrapper"
            inner-class-name="custom-inner"
          >
            <MiShengHead class="w-full cursor-pointer" />
          </Magnet>
          <figcaption class="mt-3 text-center text-sm leading-6 text-(--muted)">
            基本每天都会播：下午高能场 / 晚上碎碎念场
          </figcaption>
        </figure>
      </header>

      <div class="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div class="space-y-7 text-lg leading-9 text-(--body)">
          <p>
            主要营业内容超丰富：唱歌、聊天、游戏，还会一点点占卜。弥弥超喜欢唱歌，
            梦想是成为超级爱抖露～日常直播内容大概是
            <strong class="font-semibold text-(--ink)">60% 杂谈</strong>、
            <strong class="font-semibold text-(--ink)">30% 唱歌</strong>
            和 <strong class="font-semibold text-(--ink)">10% 下头笑话</strong>， 笑点密集预警。
          </p>

          <p>
            你可以称呼我：弥弥、弥宝、小弥，怎么可爱怎么来。年龄已经 587 岁咯，
            是不是很神奇呀？身高嘛，官方数据一米七；小声说，其实只有一米五五点六啦。
            体重绝对要保密，是弥弥的小秘密。
          </p>

          <p>
            弥生讨厌没有边界感的人哝。请观众老爷注重二次元人设呀，不要过度探究三次元；
            因为是男孩子，所以可以开一些夸张的玩笑，但不尊重的话会被“踢”出去哟。
          </p>

          <p>
            舰长礼物有一首专属学歌、一次私人占卜、游戏车队带飞，还有实体舰礼。
            喜欢什么可以自行兑换，实体舰礼也可以攒舰长积分慢慢换，商城还会不定期更新新品哦。
          </p>
        </div>

        <aside class="text-sm leading-7 text-(--muted) lg:pt-1">
          <p class="font-semibold text-(--accent)">资料小条</p>
          <p class="mt-3">
            <span v-for="(fact, index) in facts" :key="fact">
              {{ fact }}<span v-if="index < facts.length - 1"> / </span>
            </span>
          </p>
        </aside>
      </div>
    </article>
  </main>
</template>

<style scoped>
.theme-page {
  --page-bg: #fffafc;
  --ink: #2a1f2d;
  --body: #4a414d;
  --muted: #766c78;
  --accent: oklch(0.6538 0.1782 359.41);
  --line: #f7cfe0;
  --link-line: #f9a8d4;
  --soft: #fff0f6;
}

.theme-page[data-theme='dark'] {
  --page-bg: #111111;
  --ink: #f7f7f7;
  --body: #d6d6d6;
  --muted: #a3a3a3;
  --accent: oklch(0.6538 0.1782 359.41);
  --line: #323232;
  --link-line: #737373;
  --soft: #222222;
}
</style>
