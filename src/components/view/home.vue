<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <Navbar>
    <Caroucel/>
    <div class="flex justify-center mt-8 flex-col">
      <div class="flex items-center justify-normal columun mx-4">
          <Icon icon="mdi:gun" height="34" width="34" class="logo"/><a style="font-size:28px;" class="font-bold">&ensp;予告映像</a>
      </div>
    </div>
    <div class="flex justify-center mx-4 mt-4 ml-6">
      <p class="text-lg">「予告映像を見る」ボタンを押すと動画が再生されます。広告ブロッカーによって動画が再生できない場合がありますのでこのサイトではオフにすることを推奨します。</p>
    </div>
    <div class="flex justify-center mt-8 mb-12">
      <va-button
        size="large"
        color="success"
        @click="showModal = !showModal"
      >
        <Icon icon="tabler:movie" width="24" height="24"/>
        &ensp;予告映像を見る
      </va-button>
    </div>
    <!-- Second Section -->
    <div class="flex flex-col h-full md:flex-row">
    <div class="flex-1 md:bg-transparent mb-8 justify-center">
      <div class="flex items-center not-prose justify-normal columun1 mx-4">
          <Icon icon="mdi:gun" height="34" width="34" class="logo"/><a style="font-size:28px;" class="font-bold">&ensp;ルール</a>
      </div>
      <div class="flex justify-center">
        <p class="text-lg mx-4 mt-4 ml-6">高専名物「レポート」を題材とした3Sのクラス企画、「シューティングマスターへの道!!」のルールはこちらから!</p>
      </div>
      <div class="mx-4 mt-4 ml-6 flex justify-center">
        <router-link to="/rule">
          <va-button
            size="large"
            color="warning"
            class="mt-4"
          >
            <Icon icon="tabler:gavel" width="24" height="24"/>
            &ensp;ルールを確認する
          </va-button>
        </router-link>
        
      </div>
    </div>
    <div class="flex-1 md:bg-transparent mt-8 md:mt-0 mb-8">
      <div class="flex items-center not-prose justify-normal columun2 mx-4">
          <Icon icon="mdi:gun" height="34" width="34" class="logo"/><a style="font-size:28px;" class="font-bold">&ensp;スコアデータ</a>
      </div>
      <div class="flex justify-center">
        <p class="text-lg mx-4 mt-4 ml-6">ゲームで獲得したポイントなどのデータをスマホなどのインターネットに接続できる端末で見ることができます。確認はこちらから! (ゲームIDが必要です)</p>
      </div>
      <div class="mx-4 mt-4 ml-6 flex justify-center">
        <router-link to="/result">
          <va-button
            size="large"
            color="info"
            class="mt-4"
          >
            <Icon icon="tabler:chart-bar" width="24" height="24"/>
            &ensp;スコアを見る
          </va-button>
        </router-link>
      </div>
    </div>
  </div>
  </Navbar>
  <va-modal
    v-slot="{ hide }"
    v-model="showModal"
    ok-text="Apply"
    hide-default-actions
    :noEscDismiss="true"
    :noOutsideDismiss="true"
    :mobile-fullscreen="false"
  >
    <h3 class="va-h4">
      予告映像
    </h3>
    <div class="iframe-wrapper">
      <video controls controlslist="nodownload">
        <source src="https://00.gy/2023-3s-movie.mp4" type="video/mp4" />
      </video>
    </div>
    <p class="mt-2">動画の再生に時間がかかる場合があります。再生されない場合は<a href="https://00.gy/2023-3s-movie.mp4" target="_blank" class="text-blue-500 hover:text-blue-800 underline">コチラ</a></p>
    <div class="flex justify-end mt-4 gap-2">
      <va-button
        @click="hide()"
      >
        閉じる
      </va-button>
    </div>
  </va-modal>
</template>


<script>
import Navbar from '@/components/layout/navbar.vue';
import Caroucel from '@/components/layout/caroucel.vue';

export default {
  components: {
    Navbar,
    Caroucel
  },
  data() {
    return {
      showModal: false,
    };
  },
}
</script>

<style scoped>
.iframe-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

.columun2 {
  position: relative;
  background: #B8FEFF;
  box-shadow: 0px 0px 0px 5px #B8FEFF;
  border: dashed 2px white;
  padding: 0.2em 0.5em;
  color: #454545;
}

.columun2:after {
  position: absolute;
  content: '';
  left: -7px;
  top: -7px;
  border-width: 0 0 15px 15px;
  border-style: solid;
  border-color: #fff #fff #A8EDFF;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
}
</style>