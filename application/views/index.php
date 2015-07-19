<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Order control</title>

    <script src="./public/bower_components/angular/angular.js"></script>
    <script src="./public/bower_components/jquery/dist/holder.js"></script>
    <script src="./public/bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <script src="./public/bower_components/angular-resource/angular-resource.js"></script>
    <script src="./public/bower_components/angular-route/angular-route.js"></script>
    <script src="./public/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="./public/bower_components/jquery/dist/jquery.js"></script>

    <script src="./public/assets/js/demo.js" type="text/javascript"></script>

    <link rel="stylesheet" href="./public/assets/css/style.css">
    <link rel="stylesheet" href="./public/bower_components/bootstrap/dist/css/bootstrap.css">

    <script src="./public/app.js"></script>
    <script src="./public/routes/home.js"></script>
    <script src="./public/routes/contact.js"></script>

    <!-- update -->
    <script src="./public/controllers/main.js"></script>
    <script src="./public/controllers/sessions.js"></script>
    <script src="./public/controllers/almacen/almacen.js"></script>

    <script src="./public/controllers/almacen/pedidos.js"></script>
    <script src="./public/controllers/administrador/administrador.js"></script>
    <script src="./public/controllers/auth/authentication.js"></script>
    <script src="./public/controllers/auth/pedidos.js"></script>
    <script src="./public/controllers/sysadmin/sysadmin.js"></script>
    <script src="./public/controllers/public/contact.js"></script>
    <script src="./public/controllers/tesorero/tesorero.js"></script>
    <!-- update -->

    <script src="./public/services/persons.js"></script>

    <script src="./public/services/product.js"></script>
    <script src="./public/services/categoryProduct.js"></script>

    <script src="./public/controllers/almacen/product.js"></script>
    <script src="./public/controllers/almacen/categoryProduct.js"></script>
  </head>

  <body>

    <div ng-app="seedApp">

      <div ui-view>
      </div>

    </div>

  </body>

</html>
