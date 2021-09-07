<script>
import { base} from '$app/paths';
export let url = base;
import { onMount } from 'svelte';


onMount(() => {
		new WOW({
			mobile: true,
			live: false,
			offset: 0,
		}).init();
	});
</script>


<div class="row">
  <main>
    <div class="position-relative overflow-hidden  bg-light ">
      <div class="col-md-12">
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="row py-5">
              <h4 class=" wow animated rubberBand  text-center">FoodZone-Us</h4>
              <h3 class=" wow animated rubberBand  text-center py-3">
                Who we are and what we do?
              </h3>

              <img
                src="{url}/img/FZ1.png"
                class="igure-img img-fluid rounded wow zoomIn animated py-3" data-wow-offset="10"
                alt="..."
              />
              <p class=" wow rotateInDownRight animated" data-wow-offset="10">
                FOOD ZONE is a software with web access, and APP 's iOS and Android to facilitate interaction between users and establishments Industry Food and Beverage Industry of Hospitality and Entertainment Industry.
              </p>

              <p class=" wow rotateInDownRight animated" data-wow-offset="10">
                The app allows the user to have an interaction safe and complete for your experience with restaurants and entertainment venues. The platform allows payments to be made by credit or debit card, as well as by means of credit that can be paid in cash when acquiring electronic wallets at the different points of sale.
              </p>
              <p class=" wow rotateInDownRight animated" data-wow-offset="10">
               
              </p>
            </div>

            <div class="row py-3">
              <div class="col-sm-12 col-md-6 wow rotateInDownRight animated" data-wow-offset="10">
                <h4 class="py-5">Vision</h4>
                <p class="">
                  To position ourselves as the most widely used software focused on Food and Beverages in the Mexican and United States markets.
                </p>
              </div>
              <div class="col-sm-12 col-md-6 wow rotateInUpLeft animated " data-wow-offset="10">
                <h4 class="py-5">Mission</h4>
                <p class="">
                  Provide the best service to each of our clients by facilitating the purchasing process in establishments in the Food and Beverages sector.
                </p>
              </div>

              <h4 class="text-center py-3">Our values</h4>
              <div class="row">
                <div class="col wow zoomInDown animated" data-wow-offset="10">
                  <div class="card h-100">
                    <img
                      src="https://spicasoftware.es/sael/wp-content/uploads/sites/3/2020/02/aiddyIT-min.png"
                      class="card-img-top"
                      alt="..."
                      style="width: 100%;"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Personalized service</h5>
                    </div>
                  </div>
                </div>
                <div class="col wow zoomInDown animated" data-wow-offset="10">
                  <div class="card h-100">
                    <img
                      src="https://www.lima-europe.eu/wp-content/uploads/2016/09/RD_wit-300x218.png"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Innovation</h5>
                    </div>
                  </div>
                </div>
                <div class="col wow zoomInDown animated" data-wow-offset="10">
                  <div class="card h-100">
                    <img
                      src="{url}/assets/images/calidad.png"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Quality</h5>
                    </div>
                  </div>
                </div>
                <div class="col wow zoomInDown animated" data-wow-offset="10">
                  <div class="card h-100">
                    <img
                      src="https://1.bp.blogspot.com/-zz5EdQQUwDE/W2QrZnbkmVI/AAAAAAAAT0I/h6RuDL_frUQLMAeLVCeqA8VwpCJSdSIjgCEwYBhgL/s640/honestidad.png"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Honesty</h5>
                    </div>
                  </div>
                </div>

                <div class="col  wow zoomInDown animated" data-wow-offset="10">
                  <div class="card h-100">
                    <img
                      src="https://freepikpsd.com/media/2019/10/responsabilidad-png-2-Transparent-Images-Free.png"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Responsability </h5>
                    </div>
                  </div>
                </div>
              </div>

              <h4 class="text-center py-5 wow rotateInUpLeft animated" data-wow-offset="10">
                History of Food Zone
              </h4>
              <div class="row">
                <div class="col-sm-12 col-md-4 wow rotateInUpLeft animated" data-wow-offset="10">
                  <img
                    src="https://sites.google.com/site/portmari04/_/rsrc/1481203045409/tarea-3-cartel-la-empresa-desde-el-punto-de-vista-juridico/Existen-distintos-tipos-de-empresas.png"
                    alt=""
                  />
                </div>
                <div class="col-sm-12 col-md-8 wow rotateInUpLeft animated" data-wow-offset="10">
                  <p class=" py-5">
                    Our company arises in 2021 from the need to facilitate and expedite the service of food and beverages in food courts, restaurants and other establishments. We offer the option of paying with any card and also, we give our clients a benefit for each purchase made from our app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
