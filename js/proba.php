<?php
  $conexion= new mysqli('localhost','root','1234','ing_cono');
  $conexion->set_charset("utf8");

  $producto=$conexion->query("select distinct tienda from ventas");
  while ($res = $producto->fetch_assoc()) {
    $tienda[]=$res;
  }

  $producto=$conexion->query("select distinct producto from ventas");
  while ($res = $producto->fetch_assoc()) {
    $productos[]=$res;
  }

  $producto=$conexion->query("select count(*) as Contador, tienda, producto from ventas group by tienda,producto");
  $total=0;
  while ($res = $producto->fetch_assoc()) {
    $total+=$res['Contador'];

    //saber que tienda
    for ($i=0; $i < count($tienda); $i++) {
      if ($tienda[$i]['tienda']==$res['tienda']) {
        //saber que producto
        for ($j=0; $j < count($productos); $j++) {
          if ($productos[$j]['producto']==$res['producto']) {
            $todos['ventas']['tienda'][$tienda[$i]['tienda']]['productos'][$productos[$j]['producto']]+=$res['Contador'];
          }
        }
      }
    }
  }
  
  $todos['ventas']['total']=$total;
  $conexion->close();
  die(json_encode($todos));

 ?>
