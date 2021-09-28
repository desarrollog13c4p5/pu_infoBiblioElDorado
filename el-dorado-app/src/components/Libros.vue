<template>
  <div>
    <!-- Crear Libros -->
    <div class="row">
      <form @submit.prevent="handleSubmitForm">
        <h5>Crear Libro</h5>
        <div class="row pb-1">
          <div class="col-8">
            <input
              type="text"
              id="inNombre"
              v-model="libro.nombre"
              placeholder="Nombre del Libro"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="row">
          <div class="col-8">
            <input
              type="text"
              id="inAutor"
              v-model="libro.autor"
              placeholder="Autor del Libro"
              class="form-control"
              required
            />
          </div>
          <div class="col">
            <button class="btn btn-primary">Crear</button>
          </div>
        </div>
        <div class="col">
          <div class="row"></div>
        </div>
        <hr />
      </form>
    </div>

    <!-- Lista de Libros -->
    <div class="row">
      <h5>Lista de Libros</h5>
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
              <th scope="col">Autor</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0004</td>
              <td>Los Gatos</td>
              <td>Adriana Perez</td>
              <td id="cent">
                <button
                  @click.prevent="editarLibro('Los Gatos', 'Adriana Perez')"
                  class="btn btn-outline-success btn-sm p-1"
                >
                  Editar
                </button>
                <button
                  @click.prevent="borrarLibro('Los Gatos')"
                  class="btn btn-outline-danger btn-sm p-1"
                >
                  Borrar
                </button>
              </td>
            </tr>
            <tr>
              <td>0003</td>
              <td>Atlas de Colombia</td>
              <td>Jorge Diaz</td>
              <td id="cent">
                <button
                  @click.prevent="
                    editarLibro('Atlas de Colombia', 'Jorge Diaz')
                  "
                  class="btn btn-outline-success btn-sm p-1"
                >
                  Editar
                </button>
                <button
                  @click.prevent="borrarLibro('Atas de Colombia')"
                  class="btn btn-outline-danger btn-sm p-1"
                >
                  Borrar
                </button>
              </td>
            </tr>
            <tr>
              <td>0002</td>
              <td>El cuerpo Humano</td>
              <td>Sandra Reyes</td>
              <td id="cent">
                <button
                  @click.prevent="
                    editarLibro('El cuerpo Humano', 'Sandra Reyes')
                  "
                  class="btn btn-outline-success btn-sm p-1"
                >
                  Editar
                </button>
                <button
                  @click.prevent="borrarLibro('El cuerpo Humano')"
                  class="btn btn-outline-danger btn-sm p-1"
                >
                  Borrar
                </button>
              </td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Brujas</td>
              <td>Anonimo</td>
              <td id="cent">
                <button
                  @click.prevent="editarLibro('Brujas', 'Anonimo')"
                  class="btn btn-outline-success btn-sm p-1"
                >
                  Editar
                </button>
                <button
                  @click.prevent="borrarLibro('Brujas')"
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
      libro: {
        nombre: "",
        autor: "",
      },
      filtro: "",
    };
  },

  methods: {
    handleSubmitForm() {
      alert("Creando Libro: " + this.libro.nombre + " " + this.libro.autor);
      // this.$router.push({ name: "libros" });
      this.libro.nombre = "";
      this.libro.autor = "";
      this.filtro = "";
    },

    borrarLibro(nombre) {
      prompt("Desea borrar el libro " + nombre + " (s/N) ?", "N");
    },

    editarLibro(nombre, autor) {
      prompt("Nuevo Nombre (" + nombre + ") ?", nombre);
      prompt("Nuevo Autor (" + autor + ") ?", autor);
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