import { U as User, P as Perfil, m as menuUsuario, a as menuSuperior } from "./main-4b81a140.js";
const loginVistas = {
  template: `
    <div
    class="vh-100 d-flex align-items-center justify-content-center"
    style="padding-top: 100px"
  >
    <div class="col-12 col-md-4">
        <h1 class="text-center p-2">Login</h1>
        <form id="login" class="p-3" novalidate>
            <label class="mt-3 form-label" for="email">Email</label>
            <input type="email" class="form-control" value="" id="email2" required />
            <div class="invalid-feedback">Debes introducir un email valido</div>
  
            <label class="mt-3 form-label" for="nick">Contraseña: </label>
            <input type="password" class="form-control" id="password2" value="" required />
            <div class="invalid-feedback">Esta no es una contraseña correcta</div>
  
            <button
                id="btn_submit"
                type="submit"
                class="mt-4 btn btn-success w-100"
            >
                Enviar
            </button>
            <p class="mt-3">
                <a href="">No recuerdo mi contraseña</a>
                <br />
                <a href="registro.html">Quiero Registrarme</a>
            </p>
            <p></p>
            <hr class="mt-5" />
  
            <button type="button" class="mt-1 btn btn-primary w-100">
                Login con Google
            </button>
        </form>
    </div>
  </div>
  
    `,
  script: () => {
    const form = document.querySelector("#login");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add("was-validated");
      if (!form.checkValidity()) {
        console.log("formulario no valido");
      } else {
        try {
          const userData = {
            email: document.querySelector("#email2").value,
            password: document.querySelector("#password2").value
          };
          const usuarioLogeado = await User.login(userData);
          const divUsuarioLogeado = document.querySelector("#emailUsuarioLogueado");
          const userthisMoment = await User.getUser();
          const perfil = await Perfil.getByUserId(userthisMoment.id);
          console.log(perfil);
          divUsuarioLogeado.innerHTML = usuarioLogeado.email;
          menuUsuario.script(userthisMoment, perfil.rol);
          menuSuperior.script(perfil.rol);
          window.location.href = "/#/home";
        } catch (error) {
          Swal.fire("No se a podido Iniciar sesion con el usuario");
        }
      }
    });
  }
};
export {
  loginVistas as default
};
