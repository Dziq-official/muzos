<template>
  <div style="text-align: center" class="music page">
    <div style="display: flex; justify-content: center;flex-wrap: wrap;">
      <Radio />
    </div>
    <div class="footer"><p>Made With Love By Mateusz Żak</p></div>
  </div>
</template>

<script>
import Radio from "../components/Radio-fetch.vue";

export default {
  name: "app",
  components: {
    Radio
  }
};
</script>
