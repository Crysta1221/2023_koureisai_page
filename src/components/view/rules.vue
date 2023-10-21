<template>
  <Navbar>
    <h1 class="column text-5xl mt-1 ml-1">ルール説明</h1>
    <div class="flex items-center not-prose justify-normal columun mx-4 mt-4">
      <Icon icon="mdi:gun" height="34" width="34" class="logo"/><a style="font-size:28px;" class="font-bold">&ensp;概要</a>
    </div>
    <p class="mx-4 mt-4 text-lg">これから、みなさんには<span class="marker">レポートの提出</span>を妨害してくる3Sの人たちを銃を使って眠らせ、無効化してレポートの提出をしてもらいます。<span class="marker">ゲームは 3フェーズ制</span>となっており、各フェーズを合わせたポイントがあなたのスコアとなります。どのフェーズも高得点目指して頑張りましょう!</p>
    <div class="flex items-center not-prose justify-normal columun mx-4 mt-12 mb-8">
      <Icon icon="mdi:gun" height="34" width="34" class="logo"/><a style="font-size:28px;" class="font-bold">&ensp;ゲーム情報</a>
    </div>
    <p class="mx-4 mt-4 text-xl flex justify-center info">・プレイ可能人数 1 ~ 3人<br>・3フェーズ制</p>
    <div class="flex items-center not-prose justify-normal columun1 mx-4 mt-12">
      <Icon icon="mdi:gun" height="34" width="34" class="logo"/><a style="font-size:28px;" class="font-bold">&ensp;注意事項</a>
    </div>
    <p class="mx-4 mt-4 text-lg">自分の色と違う色の的を撃つとほかの人に得点が入ります。人ではなく、自分の色と同じ的を撃ってください。また、銃は手作りのものです。大変壊れやすいため丁寧に扱ってください。<br>銃口にはレーザーポインターがついています。<span class="marker text-red-500">絶対に銃を人に向けないでください。レーザーポインターが目に当たると失明の恐れがあります。</span></p>
    <div class="flex justify-center mt-8 mb-12">
      <router-link to="/">
          <va-button
            size="large"
            color="success"
            class="mt-4"
          >
            <Icon icon="tabler:home" width="24" height="24"/>
            &ensp;ホームに戻る
          </va-button>
        </router-link>
    </div>
  </Navbar>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<script>
import Navbar from '@/components/layout/navbar.vue';

export default {
  components: {
    Navbar
  },
}
</script>

<style scoped>
.column {
  padding: 0.5em;/*文字周りの余白*/
  color: #494949;/*文字色*/
  border-left: solid 5px #ffaf58;/*左線（実線 太さ 色）*/
}

.columun {
  position: relative;
  background: #c0ffb8;
  box-shadow: 0px 0px 0px 5px #c0ffb8;
  border: dashed 2px white;
  padding: 0.2em 0.5em;
  color: #454545;
}

.columun:after {
  position: absolute;
  content: '';
  left: -7px;
  top: -7px;
  border-width: 0 0 15px 15px;
  border-style: solid;
  border-color: #fff #fff #A8FFAB;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
}

.columun1 {
  position: relative;
  background: #FFEBB8;
  box-shadow: 0px 0px 0px 5px #FFEBB8;
  border: dashed 2px white;
  padding: 0.2em 0.5em;
  color: #454545;
}

.columun1:after {
  position: absolute;
  content: '';
  left: -7px;
  top: -7px;
  border-width: 0 0 15px 15px;
  border-style: solid;
  border-color: #fff #fff #FFEEA8;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
}

.marker {
  background: linear-gradient(transparent 70%, #FFF985 80%);
  font-weight: bold;
}

.info {
  position: relative;
  padding: 0.5em;
  background: #9cd4c6;
  color: white;
}

.info::before {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  border: none;
  border-bottom: solid 15px transparent;
  border-right: solid 20px rgb(149, 158, 155);
}
</style>