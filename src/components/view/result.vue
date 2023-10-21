<template>
  <Navbar>
    <div v-if="exist">
      <p class="columun mx-4 text-2xl mt-2">{{ pass }}さんのスコアデータ</p>
      <div class="mt-8 flex justify-center">
        <p class="text-3xl">あなたの得点は...</p>
      </div>
      <div class="mt-4 flex justify-center">
        <va-progress-circle :model-value="score" :size="170">
          <p class="text-4xl">{{ score }}</p>
        </va-progress-circle>
      </div>
      <div class="mt-8 flex justify-center">
        <p class="text-3xl">ポイントでした!</p>
      </div>
      <p class="columun mx-4 text-2xl mt-8">あなたの情報</p>
      <div class="mt-8 flex justify-center">
        <p class="text-2xl">ID: {{ id }}</p>
      </div>
      <div class="mt-2 flex justify-center">
        <p class="text-2xl">パスフレーズ: {{ pass }}</p>
      </div>
      <div class="mt-2 flex justify-center">
        <p class="text-2xl">スコア: {{ score }}</p>
      </div>
      <div class="mt-2 flex justify-center">
        <p class="text-2xl">参加日時: {{ date }}</p>
      </div>
      <p class="columun mx-4 text-2xl mt-8">みんなのスコア(ランキング)</p>
      <div class="mt-4 mx-4 flex justify-center">
        <va-data-table
          :items="items"
          :columns="columns"
          no-data-filtered-html="検索結果がありません"
          no-data-html="データがありません"
        >
        </va-data-table>
      </div>  
      <div class="flex justify-center mt-8 mb-8">
        <router-link to="/login">
          <va-button><Icon icon="tabler:brand-google-analytics" width="24" height="24"/>&ensp;スコアに戻る </va-button>
        </router-link>
      </div> 
    </div>
    <div v-else>
      <p class="columun mx-4 text-2xl mt-2">データが見つかりませんでした</p>
      <div class="mt-8 flex justify-center">
        <p class="text-lg">ゲームが終わるまではこのページを見ることができません。しばらくたってから再度お試しください。</p>
      </div>
      <div class="flex justify-center mt-4 mb-8">
        <router-link to="/login">
          <va-button><Icon icon="tabler:brand-google-analytics" width="24" height="24"/>&ensp;スコアに戻る </va-button>
        </router-link>
      </div>
    </div>
    
  </Navbar>
</template>

<script>
import Navbar from '@/components/layout/navbar.vue';
import { defineComponent, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: {
    Navbar
  },
  data() {
    onMounted(async () => {
      const res = await axios.get('https://api.crystaworld1221.com/3s_class/v1/rank/get');
        this.items = res.data;
    })

    const items = [];

    const columns = [
      { label: "順位", key: "rank", sortable: false },
      { label: "パスフレーズ", key: "pass", sortable: false },
      { label: "スコア", key: "score", sortable: false },
    ];
    return {
      items: [],
      columns,
      id: '',
      pass: '',
      score: '',
      date: '',
      exist: false,
    };
  },
  async mounted() {
    const id = this.$route.query.id;
    if (!id) {
      this.$router.push('/login');
    } else {
      try {
        const response = await axios.get(`https://api.crystaworld1221.com/3s_class/v1/user/get?id=${id}`);
          this.id = response.data[0].id;
          this.pass = response.data[0].pass;
          this.score = response.data[0].score;
          this.date = response.data[0].date;
          this.exist = true;
      } catch(error) {
        this.$vaToast.init({ message: 'ユーザーが存在しませんでした。', color: 'danger' })
        this.exist = false;
      }
    }
}
});
</script>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
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
</style>
