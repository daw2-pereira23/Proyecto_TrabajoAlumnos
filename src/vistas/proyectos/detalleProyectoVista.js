import { Proyecto } from "../../bd/proyecto";


export const detalleProyecto = {
    template: `
    <div class="container justify-content-center mt-5">
      <form class="p-3 mt-5" id="formEditarUsuario" >
          <h1>Informació del proyecto</h1>
          <div class="mt-5">
            <label class="mt-3 form-label" for="nick">Nombre Proyecto </label>
            <p id="nombreProyecto"></p>

            <label class="mt-3 form-label" for="apellidos">Descripcion </label>
            <p id="descripcionProyecto"></p>
  
            <label class="mt-3 form-label" for="contraseña">Enlace </label>
            <p id="enlaceProyecto"></p>
          </div>
        </form>
        
    </div>
    `,
    script: async(id)=>{
        const proyecto = await Proyecto.getById(id)
        console.log(proyecto);
        document.querySelector('#nombreProyecto').innerHTML = proyecto.nombre
        document.querySelector('#descripcionProyecto').innerHTML = proyecto.descripcion
        document.querySelector('#enlaceProyecto').innerHTML = proyecto.enlace
        
    }
}

