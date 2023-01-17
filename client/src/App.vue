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

<style></style>
