<template>
  <div class="radio page">
    
    
    <div style="display: flex; justify-content: center;flex-wrap: wrap;">
    <Music />
    </div>
    <div class="footer"><p>Made With Love By Mateusz Żak</p></div>
  </div>
</template>

<script>
import Music from '../components/Music-fetch.vue'

export default {
  name: "app",
  components: {
    Music
  }
}
</script>