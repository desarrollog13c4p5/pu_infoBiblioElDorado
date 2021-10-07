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
              v-model="prestamo.nombre"
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
              v-model="prestamo.idUsuario"
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
            <button class="col btn btn-primary" :disabled="bloquear">Prestar</button>
          </div>
        </div>
        <div class="col">
          <div class="row"></div>
        </div>
        <hr />
      </form>
    </div>

    <!-- Alertas -->
    <div class="alert alert-danger" role="alert" v-if="this.mensajeError != ''">
      {{mensajeError}}
    </div>

    <!-- Lista de Libros -->
    <div class="row pb-3">
      <h5>Lista de Prestamos</h5>
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
          <button class="btn btn-primary" :disabled="bloquear">Buscar</button>
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
          <tr v-for="item in Prestamos" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.libro }}</td>
            <td>{{ item.usuario }}</td>
            <td id="cent">{{ item.prestamo }}</td>
            <td id="cent">
              <button v-if="item.prestamo == 'Ninguno'"
                @click.prevent="seleccionarLibro(item)"
                class="btn btn-outline-primary btn-sm p-1"
              >
                Seleccionar
              </button>
              <button v-else-if="item.prestamo == 'Vencido'"
                @click.prevent="entregarLibro(item)"
                class="btn btn-outline-danger btn-sm p-1"
              >
                Entregar
              </button>
              <button v-else
                @click.prevent="entregarLibro(item)"
                class="btn btn-outline-success btn-sm p-1"
              >
                Entregar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      prestamo: {
        nombre: "",
        idLibro: "",
        idUsuario: "",
        fecha: "",
      },
      filtro: "",
      mensajeError: "",
      bloquear: true,
      Prestamos: [],
    };
  },

  created() {
    console.log('Listando Prestamos');
    this.listarPrestamos();
  },

  methods: {
    handleSubmitForm() {
      if (this.prestamo.libro != "") {
        alert(
          "Prestando libro: " +
            this.prestamo.libro +
            " a " +
            this.prestamo.idUsuario +
            " hasta " +
            this.prestamo.fecha
        );
        this.prestamo.libro = "";
        this.prestamo.idUsuario = "";
        this.prestamo.fecha = "";
      } else {
        alert("Falta seeccionar un libro para prestar!");
      }
    },

    listarPrestamos() {
      axios
        .get('http://localhost:5000/prestamos/')
        .then((res) => {
          this.Prestamos = res.data;
          console.log(JSON.stringify(this.Libros));
          this.mensajeError = ""
          this.bloquear = false;
        })
        .catch((error) => {
          console.log(error);
          this.mensajeError = "No se puede traer la lista de Prestamos."
        });
      
      this.prestamo.libro = "";
      this.prestamo.idUsuario = "";
      this.prestamo.fecha = "";
      this.filtro = "";
    },

    seleccionarLibro(libro) {
      this.prestamo.libro = libro.nombre;
      this.prestamo.idLibro = libro.idLibro;
    },

    entregarLibro(libro) {
      this.prestamo.libro = libro.nombre;
      this.prestamo.idLibro = libro.idLibro;
      this.prestamo.idUsuario = libro.idUsuario;
      this.prestamo.fecha = libro.fecha;
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