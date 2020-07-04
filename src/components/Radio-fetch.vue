// Weather.vue

<template>
  <div>
    <h1>Radio Section</h1>
    <div class="music-grid">
      <div v-for="radioData in radioDataList" :key="radioData.id" class="radio-data">
      <div class="radio-stats">
          <div class="m_cover">
            <img class="r_coveri" :src="radioData.urlc" />
          </div>
        <div class="m_text">
            <h3>
              <span>{{ radioData.title }}</span>
            </h3>
        </div>
        <div class="m_player1">
            <audio
              :src="radioData.urlm"
              controls
              controlslist="nodownload"
              duration="+Infinity"
              preload="none"
            ></audio>
          </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Radio",
  data() {
    return {
      radioDataList: []
    };
  },
    mounted() {
        this.getRadioData();
    },
  methods: {

    getRadioData() {
      fetch("radio.json")
        .then(response => response.json())
        .then(data => (this.radioDataList = data));
    }
  }
  
};
</script>
