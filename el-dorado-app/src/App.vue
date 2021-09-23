<template>
  <div id="app">
    <div class="container">
      <!--Row donde va el titulo y logo-->
      <div class="row">
        <div class="col-12 d-flex justify-content-center pb-2 pt-3">
          <h3>El Dorado</h3>
        </div>
        <hr />
      </div>

      <div class="row">
        <!--Menu de navegación-->
        <div class="col-auto list-group d-flex pe-4">
          <small style="text-align: center; color: darkgray">Menu</small>

          <a class="list-group-item list-group-item-action active">
            Prestamos
          </a>

          <a class="list-group-item list-group-item-action">
            Libros
          </a>

          <a class="list-group-item list-group-item-action">
            Usuarios
          </a>
        </div>

        <!-- Componentes -->
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSubmitForm() {},
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
