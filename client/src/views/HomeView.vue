<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-6">
        <div class="img-cont">
          <img alt="Vue logo" src="../assets/img/playtogetherlogo.svg" />
          <h3 class="text-center text-lg-start">
            PlayDate is a web app designed for parents in Barcelona. It allows
            them to easily find playgrounds in their district and schedule
            playdates with other families. This way, children can have the
            opportunity to meet and play with new friends while parents can
            enjoy the company of other adults. With PlayDate, scheduling
            playdates has never been easier
          </h3>
          <DistrictMenu/>
        </div>
      </div>
      <div class="col-lg-6"></div>
    </div>
    <!-- <HelloWorld msg="Welcome badr  " /> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import DistrictMenu from "@/components/DistrictMenu.vue";

export default {
  name: "HomeView",
  components: {
    DistrictMenu
  },

};
</script>
<style scoped>
h3 {
  max-width: 470px;
  margin: auto;
  font-size: 1.8rem;
}
.home {
  max-width: 895px;
  margin-top: auto;
}
.img-cont {
  display: flex;
  flex-direction: column;
}
.img {
  max-width: 315px;
  margin: 1em auto 0 auto;
  max-height: 200px;
}
@media (min-width: 992px) {
  .home {
    margin: 4em auto;
  }
  img {
    margin: 0;
    /* margin-top: 5.6em; */
  }
  h2 {
    margin: 0;
    margin-top: -0.8em;
    margin-left: 0.8em;
  }
}
</style>
