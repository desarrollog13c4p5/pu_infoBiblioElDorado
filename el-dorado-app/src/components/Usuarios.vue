<template>
  <div>
    <!-- Crear Usuarios -->
    <div class="row">
      <form @submit.prevent="handleSubmitForm">
        <h5>Crear Usuario</h5>
        <div class="row pb-1">
          <div class="col-8">
            <input
              type="text"
              id="inNombre"
              placeholder="Nombres del Usuario"
              v-model="usuario.nombres"
              class="form-control"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <input
              type="text"
              id="inApellido"
              placeholder="Apellidos del Usuario"
              v-model="usuario.apellidos"
              class="form-control"
              required
            />
          </div>
          <div class="col">
            <button class="btn btn-primary">Crear</button>
          </div>
        </div>
      </form>
    </div>
    <hr />

    <!-- Lista de Usuarios -->
    <div class="row">
      <h5>Lista de Usuarios</h5>
      <div class="row pb-2">
        <div class="col-6">
          <input
            type="text"
            id="inFiltro"
            placeholder="Todos"
            v-model="filtro"
            class="form-control"
          />
        </div>
        <div class="col-auto px-1">
          <button class="btn btn-primary">Aplicar</button>
        </div>
        <div class="col-auto px-1">
          <button class="btn btn-secondary">Limpiar</button>
        </div>
      </div>
      <div class="row ps-4 pe-1">
        <table class="table table-sm table-bordered">
          <thead>
            <tr id="cent">
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apelido</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0003</td>
              <td>Adriana María</td>
              <td>Perez Oviedo</td>
              <td id="cent">
                <button
                  @click.prevent="editarUsuario('Adriana', 'Perez')"
                  class="btn btn-outline-success btn-sm p-1"
                >
                  Editar
                </button>
                <button
                  @click.prevent="borrarUsuario('Adriana Perez')"
                  class="btn btn-outline-danger btn-sm p-1"
                >
                  Borrar
                </button>
              </td>
            </tr>
            <tr>
              <td>0002</td>
              <td>Jorge</td>
              <td>Diaz</td>
              <td id="cent">
                <button
                  @click.prevent="editarUsuario('Jorge', 'Diaz')"
                  class="btn btn-outline-success btn-sm p-1"
                >
                  Editar
                </button>
                <button
                  @click.prevent="borrarUsuario('Jorge Diaz')"
                  class="btn btn-outline-danger btn-sm p-1"
                >
                  Borrar
                </button>
              </td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Pedro</td>
              <td>Umba</td>
              <td id="cent">
                <button
                  @click.prevent="editarUsuario('Pedro', 'Umba')"
                  class="btn btn-outline-success btn-sm p-1"
                >
                  Editar
                </button>
                <button
                  @click.prevent="borrarUsuario('Pedro Umba')"
                  class="btn btn-outline-danger btn-sm p-1"
                >
                  Borrar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nombres: "",
        apellidos: "",
      },
      filtro: "",
    };
  },
  methods: {
    handleSubmitForm() {
      console.log(
        "Creando Usuario: " +
          this.usuario.nombres +
          " " +
          this.usuario.apellidos
      );
      alert(
        "Creando Usuario: " +
          this.usuario.nombres +
          " " +
          this.usuario.apellidos
      );
      // this.$router.push({ name: "usuarios" });
      this.usuario.nombres = "";
      this.usuario.apellidos = "";
      this.filtro = "";
    },

    borrarUsuario(nombre) {
      prompt("Desea borrar el usuario " + nombre + " (s/N) ?", "N");
    },

    editarUsuario(nombre, apellido) {
      prompt("Nuevo Nombre (" + nombre + ") ?", nombre);
      prompt("Nuevo Apellido (" + apellido + ") ?", apellido);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

#cent {
  text-align: center;
}
</style>