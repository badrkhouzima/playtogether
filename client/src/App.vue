<template>
  <nav>
    <NavComp/>
  
  </nav>
  <router-view />
</template>
<script>
import NavComp from "./components/NavComp.vue"
export default{
  name: "App",
  components:{
    NavComp
  }
}
</script>

<style>
body {
    /* font-family: "JetBrains Mono"; */
    /* font-weight: bold; */
}
</style>
