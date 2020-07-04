<template>
  <div class="home page">
    
    <HelloWorld />
    <div class="footer"><br><p>Made With Love By Mateusz Żak</p></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

