// Weather.vue

<template>
  <div>
    <h1 >Music Section</h1>
    <div style="display: flex; justify-content: center;width: 100vw;">
    <input  type="text" v-model="search" placeholder="Search..." />
    </div>
    <div class="music-grid">
      <div
        v-for="musicData in filteredMusic"
        :key="musicData.id"
        class="music-data"
      >
      <div class="music-stats">
          <div class="m_cover">
            <img class="m_coveri" :src="musicData.urlc" />
          </div>
        <div class="m_text">
            <h1>
              <span>{{ musicData.title }}</span>
            </h1>
            <h3>
              <span>Author: {{ musicData.author }}</span>
            </h3>
            <p>
              <span>Album: {{ musicData.album }}</span>
            </p>
        </div>
        <div class="m_player1">
            <audio
              :src="musicData.urlm"
              controls
              controlslist="nodownload"
            ></audio>
          </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Music",
  data() {
    return {
      musicDataList: [],
      search:''
    };
  },
    mounted() {
        this.getMusicData();
    },
  methods: {

    getMusicData() {
      fetch("music.json")
        .then(response => response.json())
        .then(data => (this.musicDataList = data));
    }
  },
  
  computed: {
    filteredMusic:function(){
      return this.musicDataList.filter((musicData) => {
        return musicData.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
  
};
</script>
