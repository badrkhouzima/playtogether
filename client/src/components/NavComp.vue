<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg px-4 navbar-light d-flex navbar__color">
      <router-link to="/" class="navbar-brand">Playtogether</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#"
              >About</router-link
            >
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#"><span class="material-icons-outlined">visibility</span></a>
          </li> -->
          <!--
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavComp",
  components: {},
};
</script>
<style scoped>
.navbar__color {
  background-color: #d6f7f3;
}
</style>
