<template>
  <div class="container registered__home">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci
      nisi necessitatibus a accusamus earum sapiente dolor? At non delectus
      autem sequi dignissimos obcaecati ratione, in fugiat. Similique, expedita
      eos?
    </p>
    <DistrictMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import DistrictMenu from "@/components/DistrictMenu.vue";

export default {
  name: "RegisteredParentHome",
  components: {
    DistrictMenu,
  },
};
</script>

<style scoped>
.registered__home {
  background-color: #8bf4e9;
  height: 100vh;
}
</style>
