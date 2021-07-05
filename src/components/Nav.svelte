


<script >
   const collapseMenu = () => {
    if (window.innerWidth < 992) {
      document
        .querySelector("#navbarNav")
        .classList.replace("collapse", "collapsing");
      document.querySelector("#navbarNav").classList.remove("show");
      document.querySelector("#navbarNav").classList.add("collapse");
    }
  };

  import { base} from '$app/paths';
  export let url = base;
</script>

<link rel="stylesheet" href="{url}/assets/css/font-awesome.min.css" />
<link rel="stylesheet" href="{url}/assets/css/animate/animate.min.css" />
<link rel="stylesheet" href="{url}/assets/css/style.css" />
<link rel="stylesheet" href="{url}/assets/css/responsive.css" />

<svelte:head>


  <script  src="{url}/assets/js/wow/wow.min.js"></script>
  <script  src="{url}/assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js" ></script> 
  <script  src="{url}/assets/js/vendor/jquery-1.11.2.min.js"></script>
  <script  src="{url}/assets/js/main.js"></script>
  <script  src="{url}/assets/js/jquery-easing/jquery.easing.1.3.js"></script>
  
</svelte:head>




<nav class="navbar navbar-expand-lg navbar-dark bg sticky-top">
  <div class="container">
    <img src="{url}/img/LogoFoodzone.png" alt="" class="imagen-lo" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a href="{url}/" class="nav-link active activo" on:click={collapseMenu}>Home</a>
        </li>
        <li class="nav-item" >
          <a href="{url}/colaboradores" class="nav-link active activo" on:click={collapseMenu}
            >Colaboradores</a
          >
        </li>
        <li class="nav-item">
          <a href="{url}/nosotros" class="nav-link active activo" on:click={collapseMenu}>Nosotros</a>
        </li>
        <li class="nav-item" >
          <a href="{url}/pedir" class="nav-link active activo" on:click={collapseMenu}>Pedido</a>
        </li>
        <li class="nav-item" >
          <a href="{url}/noticias" class="nav-link active activo" on:click={collapseMenu}>Noticias</a>
        </li>
        <li class="nav-item" >
          <a href="{url}/preguntas-frecuentes" class="nav-link active activo" on:click={collapseMenu}
            >Preguntas
          </a>
        </li>
        <li class="nav-item" >
          <a href="{url}/terminos" class="nav-link active activo" on:click={collapseMenu}
            >Términos</a
          >
        </li>
        <li class="nav-item">
          <a href="{url}/contacto" class="nav-link active activo" on:click={collapseMenu}>Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>





<style>
  .imagen-lo{
    width: 5em;
    height: auto;
   
  }
 .bg{
  background-color: #e03c36;
  
 }
 .nav-link{
  color: white;
 }
 .navbar{
  margin-right: -13px;
 }
</style>
