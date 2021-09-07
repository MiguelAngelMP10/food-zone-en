
<script>
	import { base } from '$app/paths';
	export let url = base;
</script>

<section class="portfolio " id="portfolio">
    <main>
      <div class="container">
        <div class="row">
          <h4 class="wow animated rubberBand text-center head_title" id="">
            Do you want to be a delivery person?
          </h4>
          <h3 class="wow animated rubberBand text-center pb-2" id="">
            Contact us to become part of our team!
          </h3>
          <div class="col-md-6 col-sm-12">
            <p class="wow animated zoomIn text-center h3 pt-5">
              Earn a minimum of 7,280 MXN for your first 200 deliveries in Puebla *.
            </p>
          </div>
          <div class="col-md-6 col-sm-12 pt-5">
            <form action="" autocomplete="off">
              <p class="h5 animated zoomIn">
                Fill out the following form and we will contact you as soon as possible
              </p>
              <div class="row wow zoomIn">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="nombre"
                    placeholder="Nomnbre completo"
                  />
                  <label for="nombre">Full Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Correo electronico"
                  />
                  <label for="email">Mail</label>
                </div>
  
                <div class="form-floating mb-3">
                  <input
                    type="tel"
                    class="form-control"
                    id="tel"
                    placeholder="Teléfono"
                  />
                  <label for="tel">Phone</label>
                </div>
  
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="direccion"
                    placeholder="Ciudad en dónde te encuentras"
                  />
                  <label for="direccion">City where you are</label>
                </div>
  
                <div class=" mb-3">
                  <label for="formFileLg" class="form-label">Attach your CV</label>
                  <input
                    class="form-control form-control-lg"
                    id="formFileLg"
                    type="file"
                  />
                </div>
  
                <p>
                  By continuing, I accept the Food Zone terms of use and acknowledge having read its privacy policy.
                </p>
                <p>
                  I also accept that Food Zone or its representatives can contact me by email, telephone or SMS (as well as through automated means) through the email or telephone number that I have indicated, including for promotional purposes.
                </p>
  
                <div class="col-auto">
                  <button type="button" class="btn btn-primary"
                    >Submit registration</button
                  >
                  <a
                    href="colaboradores"
                    class="btn btn-secondary me-md-2"
                    type="button">Return </a
                  >
                </div>
              </div>
            </form>
          </div>
          <img src="{url}/assets/images/Fz-1.png" alt="" class="hero-bottom-img" />
        </div>
  
        <div class="row">
          <h4 class="wow animated rubberBand text-center head_title" id="">
            Useful income for you
          </h4>
  
          <div class="col-sm-12 col-md-4">
            <h3 class="text-center mb-3">Get paid quickly</h3>
            <p>
              You will receive your income automatically every week. Drivers of instant pay markets can withdraw money up to 5 times a day.
            </p>
          </div>
          <div class="col-sm-12 col-md-4">
            <h3 class="text-center mb-3">Choose your schedule and earn moneyo</h3>
            <p>
              Without bosses and without having to go to the office. You can start and finish when you want.
            </p>
          </div>
          <div class="col-sm-12 col-md-4">
            <h3 class="text-center mb-3">Plan your day with ease</h3>
            <p>
              Learn about hourly trends, set your preferences and check promotions: all from the same place.
            </p>
          </div>
        </div>
      </div>
    </main>
  </section>
  <style>
    .hero-bottom-img {
      max-width: 100%;
      width: 100%;
    }
    .portfolio{
      margin-left: -14px;
      margin-right: -13px;
    }
  </style>