<svelte:head>
	<title>FoodZone-Colaboradores</title>
</svelte:head>


<script>
	import { base } from '$app/paths';
	export let url = base;
</script>

<section id="portfolio" class="portfolio">
	<div class="container">
	  <div class="row">
		<div
		  class="portfolio_content text-center  wow fadeIn"
		  data-wow-duration="5s"
		>
		  <div class="col-md-12">
			<div class="head_title text-center">
			  <h4>Be part of our team! </h4>
			  <h3>Collaborators </h3>
			</div>
  
			<div class="d-grid gap-2 d-md-flex justify-content-md-center pb-3">
			  <a href="restaurante" class="btn btn-primary me-md-2" type="button"
				>Restaurant</a
			  >
			  <a href="{url}/repartidor" class="btn btn-primary me-md-2" type="button"
				>Delivery man </a
			  >
			</div>
  
			<div class="main_portfolio_content">
			  <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
				<img src="{url}/img/res1.jpg" alt="" />
				<div class="portfolio_images_overlay text-center">
				  <h6>Italian Source Mushroom</h6>
				  <p class="product_price">$12</p>
				  <a href="{url}/" class="btn btn-primary">Click here</a>
				</div>
  
				<h5>La Noria</h5>
			  </div>
			  <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
				<img src="{url}/img/res2.jpg" alt="" />
				<div class="portfolio_images_overlay text-center">
				  <h6>Italian Source Mushroom</h6>
				  <p class="product_price">$12</p>
				  <a href="{url}/" class="btn btn-primary">Click here</a>
				</div>
  
				<h5>La corregidora</h5>
			  </div>
			  <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
				<img src="{url}/img/res3.jpg" alt="" />
				<div class="portfolio_images_overlay text-center">
				  <h6>Italian Source Mushroom</h6>
				  <p class="product_price">$12</p>
				  <a href="{url}/" class="btn btn-primary">Click here</a>
				</div>
				<h5>La casona</h5>
			  </div>
			  <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
				<img src="{url}/img/res4.jpg" alt="" />
				<div class="portfolio_images_overlay text-center">
				  <h6>Italian Source Mushroom</h6>
				  <p class="product_price">$12</p>
				  <a href="{url}/" class="btn btn-primary">Click here</a>
				</div>
				<h5>Pizza and food</h5>
			  </div>
			  <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
				<img src="{url}/img/res5.jpg" alt="" />
				<div class="portfolio_images_overlay text-center">
				  <h6>Italian Source Mushroom</h6>
				  <p class="product_price">$12</p>
				  <a href="{url}/" class="btn btn-primary">Click here</a>
				</div>
				<h5>Barcleys</h5>
			  </div>
			  <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
				<img src="{url}/img/res6.jpg" alt="" />
				<div class="portfolio_images_overlay text-center">
				  <h6>Italian Source Mushroom</h6>
				  <p class="product_price">$12</p>
				  <a href="{url}/" class="btn btn-primary">Click here</a>
				</div>
				<h5>Restaurantes palacios</h5>
			  </div>
			  <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
				<img src="{url}/img/res7.jpg" alt="" />
				<div class="portfolio_images_overlay text-center">
				  <h6>Italian Source Mushroom</h6>
				  <p class="product_price">$12</p>
				  <a href="{url}/" class="btn btn-primary">Click here</a>
				</div>
  
				<h5>hermenejildo galeana</h5>
			  </div>
			  <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
				<img src="{url}/img/res8.jpg" alt="" />
				<div class="portfolio_images_overlay text-center">
				  <h6>Italian Source Mushroom</h6>
				  	<p class="product_price">$12</p>
				  	<a href="{url}/" class="btn btn-primary">Click here</a>
					</div>
					<h5>paseo bravo</h5>
			  	</div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </section>
  <style>
	  .portfolio{
		margin-right: -13px;
	  }
  </style>