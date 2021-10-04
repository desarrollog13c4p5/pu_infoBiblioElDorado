<template>
  <div>
    <!-- Nuevo Prestamo -->
    <div class="row">
      <form @submit.prevent="handleSubmitForm">
        <h5>Nuevo Prestamo</h5>
        <div class="row pb-2">
          <div class="col-9">
            <input
              type="text"
              id="inNombre"
              v-model="prestamo.libro"
              placeholder="Nombre del Libro"
              class="form-control"
              value=""
              readonly
              required
            />
          </div>
        </div>

        <div class="row">
          <div class="col-5">
            <select
              v-model="prestamo.usuario"
              name=""
              id="selUsuario"
              class="form-select pe-1"
              required
            >
              <option value="" selected disabled>
                Seleccione un usuario...
              </option>
              <option value="1">Usuario 1</option>
              <option value="2">Usuario 2</option>
              <option value="3">Usuario 3</option>
            </select>
          </div>
          <div class="col-4">
            <input
              type="date"
              id="inFecha"
              class="form-control ps-1"
              v-model="prestamo.fecha"
              data-bs-toggle="tooltip"
              title="Fecha de entrega"
              required
            />
          </div>
          <div class="col">
            <div class="col"></div>
            <button class="col btn btn-primary">Prestar</button>
          </div>
        </div>
        <div class="col">
          <div class="row"></div>
        </div>
        <hr />
      </form>
    </div>

    <!-- Lista de Libros -->
    <div class="row pb-3">
      <h5>Lista de Libros</h5>
      <div class="row">
        <div class="col-5 pe-1">
          <div class="input-group">
            <input
              type="text"
              id="inFitroTexto"
              v-model="filtro"
              placeholder="Todos"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-auto">
          <button class="btn btn-primary" @click="showMod">Buscar</button>
        </div>
      </div>
    </div>
    <div class="row ps-3 pe-1">
      <table class="table table-sm table-bordered">
        <thead>
          <tr id="cent">
            <th scope="col">ID</th>
            <th scope="col">Libro</th>
            <th scope="col">Usuario</th>
            <th scope="col">Prestamo</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0004</td>
            <td>Los Gatos</td>
            <td></td>
            <td id="cent">Ninguno</td>
            <td id="cent">
              <button
                @click.prevent="seleccionarLibro('Los Gatos')"
                class="btn btn-outline-primary btn-sm p-1"
              >
                Seleccionar
              </button>
            </td>
          </tr>
          <tr>
            <td>0003</td>
            <td>Atlas de Colombia</td>
            <td>Jorge Diaz</td>
            <td id="cent">Vencido</td>
            <td id="cent">
              <button
                @click.prevent="entregarLibro('Atlas de Colombia')"
                class="btn btn-outline-danger btn-sm p-1"
              >
                Entregar
              </button>
            </td>
          </tr>
          <tr>
            <td>0002</td>
            <td>El cuerpo Humano</td>
            <td>Sandra Reyes</td>
            <td id="cent">02/02/2022</td>
            <td id="cent">
              <button
                @click.prevent="entregarLibro('El cuerpo Humano')"
                class="btn btn-outline-success btn-sm p-1"
              >
                Entregar
              </button>
            </td>
          </tr>
          <tr>
            <td>0001</td>
            <td>Brujas</td>
            <td></td>
            <td id="cent">Ninguno</td>
            <td id="cent">
              <button
                @click.prevent="seleccionarLibro('Brujas')"
                class="btn btn-outline-primary btn-sm p-1"
              >
                Seleccionar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      prestamo: {
        libro: "",
        usuario: "",
        fecha: "",
      },
      filtro: "",
      modEstado: "",
    };
  },

  methods: {
    handleSubmitForm() {
      if (this.prestamo.libro != "") {
        alert(
          "Prestando libro: " +
            this.prestamo.libro +
            " a " +
            this.prestamo.usuario +
            " hasta " +
            this.prestamo.fecha
        );
        // this.$router.push({ name: "prestamos" });
        this.prestamo.libro = "";
        this.prestamo.usuario = "";
        this.prestamo.fecha = "";
      } else {
        alert("Falta seeccionar un libro para prestar!");
      }
    },

    seleccionarLibro(libro) {
      this.prestamo.libro = libro;
    },

    entregarLibro(libro) {
      prompt("Desea entregar el Libro " + libro + " (S/n) ?", "S");
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