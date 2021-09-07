<script >
 import { base} from '$app/paths';
 export let url = base;
</script>

<section id="footer_widget" class="footer_widget px-0">
    <div class="container">
      <div class="row ">
        <div class="ms-3">
          <div class="col-md-6 in">
            <div class="single_widget wow fadeIn" data-wow-duration="2s">
              <h4>Contacto</h4> 
              <div class="single_widget_info">
                <p>
                  <i class="bi bi-house"></i>  La Paz, Puebla, México, 72160. 
                  <a href="tel:222 620 0600"><span ><i class="bi bi-telephone"></i>  Teléfono: (222) 620 0600</span></a>
                  <span><i class="bi bi-envelope"></i>  Email: contacto@foodzone.com</span>
                </p>
              </div>
              <div class="footer_socail_icon">
                <a href="{url}/"><img src="{url}/img/facebook.png" alt="" class="redIcon"></a>
                <a href="{url}/"><img src="{url}/img/instagram.png" alt="" class="redIcon"></a>
                <a href="{url}/"><img src="{url}/img/gorjeo.png" alt="" class="redIcon"></a>
                <a href="{url}/"><img src="{url}/img/linkedin.png" alt="" class="redIcon"></a>
              </div>
            </div>
          </div>
          <div class="col-md-5 in">
            <div class="single_widget wow fadeIn" data-wow-duration="4s">
              <h4>Categorías</h4>
              
              <div class="">
                <ul class="">
                        <li class="nav-item">
                        <a href="{url}/" class="nav-link active activo">Home</a>
                        </li>
                        <li class="nav-item" >
                            <a href="{url}/colaboradores" class="nav-link active activo"
                            >Colaboradores</a
                            >
                        </li>
                        <li class="nav-item">
                            <a href="{url}/nosotros" class="nav-link active activo">Nosotros</a>
                        </li>
                        <li class="nav-item" >
                            <a href="{url}/pedir" class="nav-link active activo">Pedido</a>
                        </li>
                        <li class="nav-item" >
                            <a href="{url}/noticias" class="nav-link active activo">Noticias</a>
                        </li>
                        <li class="nav-item" >
                            <a href="{url}/preguntas-frecuentes" class="nav-link active activo"
                            >Preguntas
                            </a>
                        </li>
                        <li class="nav-item" >
                            <a href="{url}/terminos" class="nav-link active activo"
                            >Términos</a
                            >
                        </li>
                        <li class="nav-item">
                            <a href="{url}/contacto" class="nav-link active activo">Contacto</a>
                        </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <style>
    .in{
      display: inline-block;
    }
    .single_widget_info{
      color: white;
    }
    a{
      color:white;
    }
    .redIcon{
      width: 35px;
      height: auto;
      margin-right: 10px;
      
    }
    .footer_widget{
      margin-left: -14px;
      margin-right: -13px;
    }

  </style>