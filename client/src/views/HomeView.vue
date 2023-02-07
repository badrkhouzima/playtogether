<template>
  <div class="container-fluid home mt-0 pt-5 px-5">
    <div class="row">
      <div
        class="col-lg-6 d-flex flex-column align-items-center justify-content-between py-5"
        style="height: 440px"
      >
        <h1><span class="logo">PlayTogether</span></h1>
        <p class="text-center text-lg-start">
          PlayDate is a web app designed for parents in Barcelona. It allows
          them to easily find playgrounds in their district and schedule
          playdates with other families. This way, children can have the
          opportunity to meet and play with new friends while parents can enjoy
          the company of other adults. With PlayDate, scheduling playdates has
          never been easier
        </p>
        <DistrictMenu />
      </div>
      <div
        class="col-lg-6 d-flex flex-column justify-content-center px-5"
        style="padding: 0 40px"
      >
        <CustomForm />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DistrictMenu from "@/components/DistrictMenu.vue";
import CustomForm from "@/components/CustomForm.vue";

export default {
  name: "HomeView",
  components: {
    DistrictMenu,
    CustomForm,
  },
};
</script>
<style scoped>
p{
  font-weight: bold;
}
h3 {
  max-width: 470px;
  margin: auto;
  font-size: 1.8rem;
}
.logo {
  font-family: Jockey One;
  color: #a89858;
}
.home {
  background-color: #8bf4e9;
  padding-bottom: 10em;
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
    margin: 0 auto;
  }
  h2 {
    margin: 0;
    margin-top: -0.8em;
    margin-left: 0.8em;
  }
}
</style>
