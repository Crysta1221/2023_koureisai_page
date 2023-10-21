<template>
  <Navbar>
    <div class="flex items-center justify-normal columun mx-4 mt-4">
      <Icon icon="tabler:login" height="34" width="34" class="logo"/><a style="font-size:28px;" class="font-bold">&ensp;ログイン</a>
    </div>
    <div class="mx-4 ml-4 mt-4 flex justify-center">
      <p class="text-lg">受付時に発行されたゲームIDを入力して「ログイン」ボタンを押してください。</p>
    </div>
    <div class="flex justify-center mt-4">
      <va-input
        v-model="id"
        class="mb-6"
        label="Game ID"
        mask="numeral"
        placeholder="ゲームID"
      />
    </div>
    <div class="flex justify-center">
      <va-button @click="login"><Icon icon="tabler:login"/>&ensp;ログイン</va-button>
    </div>
    
  </Navbar>
</template>

<script>
import Navbar from '@/components/layout/navbar.vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: {
    Navbar
  },
  data() {
    return {
      id: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.get(`https://api.crystaworld1221.com/3s_class/v1/rank/rank?id=${this.id}`);
        if (response.status === 200) {
          this.$router.push(`/result?id=${this.id}`);
        } else {
          this.$vaToast.init({ message: 'ユーザーが存在しませんでした。', color: 'danger' })
        }
      } catch (error) {
        this.$vaToast.init({ message: 'ユーザーが存在しませんでした。', color: 'danger' })
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
