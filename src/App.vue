<template>
  <div id="app">
    <img class="logo1" src="http://musox.ct8.pl/icon.png">
    <div id="nav">
      <router-link to="/music">Music</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/radio">Radio</router-link>
    </div>

    <transition
      name="router-anim"
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutRight"
    >
    <router-view />
    </transition>
  </div>
</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
#app {
  font-family: 'Montserrat', sans-serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page {
  position: absolute;
  width: inherit;
}

#nav {
  padding: 15px;
}

#nav a {
  color: #9c1de7;
}

#nav a.router-link-exact-active {
  color: #581b98;
}

.logo1 {
  width: 40px;
  height: 40px;
}

.m_player {
  text-align: center;
}

.music-data {
      margin: 25px;
    padding: 10px;
    color: rgba(9, 0, 41, 0.87);
    background-color: rgba(255, 255, 255, 1);
    filter: drop-shadow(30px 10px 1rem rgba(0, 0, 0, 0.35));
    border-radius: 25px;
    width: 320px;
}

.home {
    display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
}

.m_coveri {
  width: 150px;
  border-radius: 25px;
}
.music-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

audio {
  border-radius: 300px;
}

.radio-data {
        margin: 10px;
    padding: 10px;
    color: rgba(9, 0, 41, 0.87);
    background-color: rgba(255, 255, 255, 1);
    filter: drop-shadow(30px 10px 1rem rgba(0, 0, 0, 0.35));
    border-radius: 25px;
    width: 320px;
}



.radio-stats {
  padding:5px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.r_coveri {
  max-width: 300px;
  height: 150px;
  border-radius: 25px;
}
</style>
