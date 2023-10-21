<script setup>
  import { ref, watchEffect } from 'vue'
  import { useBreakpoint } from 'vuestic-ui'
  import { Icon } from '@iconify/vue'

  const breakpoints = useBreakpoint()

  const isSidebarVisible = ref(breakpoints.mdUp)

  watchEffect(() => {
    isSidebarVisible.value = false
  })
</script>

<template>
  <VaLayout
    :top="{ fixed: true, order: 2 }"
    :left="{ fixed: true, absolute: breakpoints.smDown, order: 1, overlay: breakpoints.smDown && isSidebarVisible }"
    @left-overlay-click="isSidebarVisible = false"
  >
    <template #top>
      <VaNavbar shadowed color="primary">
        <template #left>
          <VaButton
            
            :icon="isSidebarVisible ? 'close' : 'menu'"
            @click="isSidebarVisible = !isSidebarVisible"
            class="mr-4"
          />
          <Icon icon="covid:vaccine-protection-infrared-thermometer-gun" height="34" width="34" class="logo"/><a style="font-size:20px;" class="mt-0.5 font-serif">&ensp;2023 3S</a>
        </template>
      </VaNavbar>
    </template>

    <template #left>
      <VaSidebar v-model="isSidebarVisible">
        <VaSidebarItem to="/" :active="$route.path === '/'" activeColor="success">
          <VaSidebarItemContent>
            <Icon icon="tabler:home" width="24" height="24"/>
            <VaSidebarItemTitle>ホーム</VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem to="/rule" :active="$route.path === '/rule'" activeColor="success">
          <VaSidebarItemContent>
            <Icon icon="tabler:gavel" width="24" height="24"/>
            <VaSidebarItemTitle>ルール</VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem to="/result" :active="$route.path === '/result'" activeColor="success">
          <VaSidebarItemContent>
            <Icon icon="tabler:chart-bar" width="24" height="24"/>
            <VaSidebarItemTitle>スコアデータ</VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
      </VaSidebar>
    </template>

    <template #content>
      <main>
        <article>
          <slot />
        </article>
      </main>
    </template>
  </VaLayout>
</template>
