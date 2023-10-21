<template>
  <va-carousel
    :items="items"
    autoscroll
    :autoscroll-interval="7000"
    :ratio="11/6"
  />
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      items: [
        "/bg01.png",
        "/bg02.png",
        "/bg03.png",
      ],
    };
  },
};
</script>
