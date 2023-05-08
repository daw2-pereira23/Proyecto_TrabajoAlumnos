import { P as Proyecto } from "./proyecto-7ab2d423.js";
import { detalleProyecto } from "./detalleProyectoVista-8b24c1ad.js";
import { editarProyecto } from "./editarProyectoVista-f7e6eaa4.js";
import "./main-c58cb70e.js";
const proyectosVista = {
  template: `
    <main style="padding-top: 100px">
    <div class="container">
        <h1>Proyectos</h1>
        <a href="/#/nuevoProyecto" id="nuevoProyecto" class="btn btn-success mt-3">Nuevo Proyecto</a>
        <a href="/#/misProyectos" id="misProyectos" class="btn btn-warning mt-3 ms-2">Mis Proyectos</a>
        <table id="tablaProyectos" class="table table-striped table-hover mt-5 align-middle">
            <thead>
                <tr>
                    <th></th>
                    <th>AUTOR</th>
                    <th>NOMBRE</th>
                    <th>DESCRIPCIÓN</th>
                    <th>ENLACE</th>
                    <th class="w-100"></th>
                </tr>
            </thead>
            <tbody>
               
                
                
            </tbody>
        </table>
    </div>
  </main>
  
  `,
  script: async () => {
    try {
      const proyectos = await Proyecto.getAll();
      console.log("numero de proyectos en la base de datos: ", proyectos.length);
      console.log(proyectos);
      let tabla = "";
      for (const proyecto of proyectos) {
        tabla += `
      <tr>
        <td>
          <img src="../assets/javascript.png" width="100" alt="" data-id="${proyecto.id}" class="detalle"/>
        </td>
        <td>${proyecto.user_id}</td>
        <td>${proyecto.nombre}</td>
        <td class="w-100">${proyecto.descripcion}</td>
        <td><a href="${proyecto.enlace}" target="_black">${proyecto.enlace}</a></td>
        <td class="text-end">
          <button
            data-id="${proyecto.id}"
            type="button"
            class="btn text-danger detalle"
          >
          
          </button>
          <img  data-id="${proyecto.id}" class="detalle w-100" src="../assets/info.svg" alt="Info" />
          <button
            data-id="${proyecto.id}"
            type="button"
            class="btn text-info editar"
          >
          
          </button>
          <img  data-id="${proyecto.id}" src="../assets/editar.svg" class="editar w-100"   alt="editar" />
          <button
              data-id="${proyecto.id}"
              type="button"
              class="btn text-danger borrar"
          >
          </button>
            <img  data-id="${proyecto.id}" src="../assets/basura.svg" class="borrar w-100"   alt="Basura" />
        </td>
      </tr>
      `;
      }
      const tablaProyectosBody = document.querySelector("tbody");
      if (tablaProyectosBody)
        tablaProyectosBody.innerHTML = tabla;
    } catch (error) {
      alert("No se han podido cargar la tabla de usuarios " + error);
    }
    const tablaProyectos = document.querySelector("#tablaProyectos");
    if (tablaProyectos) {
      tablaProyectos.addEventListener("click", async (e) => {
        const id = e.target.dataset.id;
        if (e.target.classList.contains("borrar")) {
          try {
            const proyectoABorrar = await Proyecto.getById(id);
            const seguro = confirm("¿Está seguro que desea borrar el proyecto? Se eliminarán todos sus comentarios y notas " + proyectoABorrar.nombre + ", " + proyectoABorrar.nombre);
            if (seguro) {
              await Proyecto.delete(id);
            }
            window.location.href = "/#/proyectos";
          } catch (error) {
            alert("No se han podido borrar el proyecto" + error);
          }
        }
        if (e.target.classList.contains("editar")) {
          document.querySelector("main").innerHTML = editarProyecto.template;
          editarProyecto.script(id);
        }
        if (e.target.classList.contains("detalle")) {
          document.querySelector("main").innerHTML = detalleProyecto.template;
          detalleProyecto.script(id);
        }
      });
    }
  }
};
export {
  proyectosVista as default
};
