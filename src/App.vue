<template>
  <div class="container">
    <MainHeader/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader';
export default {
  name: 'App',
  components: {
    MainHeader,
  }
};
</script>

<style>
@import "@/assets/scss/_variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap');

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.container {
  margin: 0 auto;
  width: 1170px;
}


</style>
