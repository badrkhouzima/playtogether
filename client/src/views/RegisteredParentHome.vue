<template>
  <div class="container d-flex flex-column align-items-center registered__home px-5 pt-5">
    <p>
      {{welcometxt}}
    </p>
    <DistrictMenu class="district__menu"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DistrictMenu from "@/components/DistrictMenu.vue";

export default {
  name: "RegisteredParentHome",
  // props: { welcometxt: String },
  components: {
    DistrictMenu,
  },
  data(){
    return{
      welcometxt: "Welcome to our community of parents! We're thrilled you've joined us. Our goal is to help your children make new friends and have fun playing together. Research shows that socializing and playing with other children at a young age can have a positive impact on their cognitive and emotional development. By connecting with other parents through our platform, you can give your child the opportunity to make memories and build relationships that will last a lifetime. Let's get started!"
    }
  }
};
</script>

<style scoped>
.registered__home {
  background-color: #8bf4e9;
  height: 100vh;
}
p{
  font-size: 1.4em;
  
}
.district__menu{
  border: none;
}
</style>
