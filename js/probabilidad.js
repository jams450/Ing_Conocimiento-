
var ajax;
$(document).ready(function() {
    //Cargar Arbol
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: '../../js/proba.php',
      success: function(data) {
        console.log(data);
        ajax=data;
        $('#json').text(JSON.stringify(data));

        var totala=parseFloat(data.ventas.tienda.A.productos.Radio);
        totala+=parseFloat(data.ventas.tienda.A.productos.TV);

        var totalb=parseFloat(data.ventas.tienda.B.productos.Radio);
        totalb+=parseFloat(data.ventas.tienda.B.productos.TV);
        //crear Arbol
        simple_chart_config = {
            chart: {
                container: "#arbol"
            },

            nodeStructure: {
                text: { name: "Ventas : "+data.ventas.total },
                children: [
                    {
                      text: {
                        name: "A : " + totala
                      },
                      children: [
                          {
                            text: {
                              name: "Radio : " +data.ventas.tienda.A.productos.Radio
                            }
                          },
                          {
                            text: {
                              name:  "TV : " + data.ventas.tienda.A.productos.TV
                            }
                          }
                      ]
                    },
                    {
                      text: {
                      name:  "B : "+ totalb
                      },
                      children: [
                          {
                            text: {
                              name: "Radio : " +data.ventas.tienda.B.productos.Radio
                            }
                          },
                          {
                            text: {
                              name:  "TV : " + data.ventas.tienda.B.productos.TV
                            }
                          }
                      ]
                    }
                ]
            }
        };

        var my_chart = new Treant(simple_chart_config);
      }
    });
});

$('#calca').click(function(e){
  var opc=$('#opc_a').val();
  var totala=parseFloat(ajax.ventas.tienda.A.productos.Radio);
  totala+=parseFloat(ajax.ventas.tienda.A.productos.TV);

  var totalb=parseFloat(ajax.ventas.tienda.B.productos.Radio);
  totalb+=parseFloat(ajax.ventas.tienda.B.productos.TV);

  switch (opc) {
    case '1':
      var proba=ajax.ventas.tienda.A.productos.Radio/totala;
      $('#proba_a').text("Resultado: ("+ajax.ventas.tienda.A.productos.Radio+"/"+totala+") = " +proba);
      break;

    case '2':
      var proba=ajax.ventas.tienda.A.productos.TV/totala;
      $('#proba_a').text("Resultado: ("+ajax.ventas.tienda.A.productos.TV+"/"+totala+") = " +proba);
      break;

    case '3':
      var proba=totala/ajax.ventas.total;
      $('#proba_a').text("Resultado: ("+totala+"/"+ajax.ventas.total+") = " +proba);
      break;

    case '4':
      //P(AR)
      var proba=ajax.ventas.tienda.A.productos.Radio/totala;
      var proba2=totala/ajax.ventas.total;
      //P(BR)
      var proba3=ajax.ventas.tienda.B.productos.Radio/totalb;
      var proba4=totalb/ajax.ventas.total;

      $('#proba_a').text("Resultado: = " +(proba*proba2)+(proba3+proba4));
      break;

    case '5':
      //P(AR)
      var proba=ajax.ventas.tienda.A.productos.TV/totala;
      var proba2=totala/ajax.ventas.total;
      //P(BR)
      var proba3=ajax.ventas.tienda.B.productos.TV/totalb;
      var proba4=totalb/ajax.ventas.total;

      $('#proba_a').text("Resultado: = " +(proba*proba2)+(proba3+proba4));

      break;
    case '6':
      //P(AR)
      var proba=ajax.ventas.tienda.A.productos.TV/totala;
      var proba2=totala/ajax.ventas.total;

      $('#proba_a').text("Resultado: = " +(proba*proba2));

      break;
    case '7':
      //P(AR)
      var proba=ajax.ventas.tienda.A.productos.Radio/totala;
      var proba2=totala/ajax.ventas.total;

      $('#proba_a').text("Resultado: = " +(proba*proba2));

      break;

  }
});

$('#calcb').click(function(e){
  var opc=$('#opc_b').val();
  var totalb=parseFloat(ajax.ventas.tienda.B.productos.Radio);
  totalb+=parseFloat(ajax.ventas.tienda.B.productos.TV);
  var totala=parseFloat(ajax.ventas.tienda.A.productos.Radio);
  totala+=parseFloat(ajax.ventas.tienda.A.productos.TV);

  switch (opc) {
    case '1':
      var proba=ajax.ventas.tienda.B.productos.Radio/totalb;
      $('#proba_b').text("Resultado: ("+ajax.ventas.tienda.B.productos.Radio+"/"+totalb+") = " +proba);
      break;

    case '2':
      var proba=ajax.ventas.tienda.B.productos.TV/totalb;
      $('#proba_b').text("Resultado: ("+ajax.ventas.tienda.B.productos.TV+"/"+totalb+") = " +proba);
      break;

    case '3':
      var proba=totalb/ajax.ventas.total;
      $('#proba_b').text("Resultado: ("+totalb+"/"+ajax.ventas.total+") = " +proba);
      break;

      case '4':
        //P(AR)
        var proba=ajax.ventas.tienda.A.productos.Radio/totala;
        var proba2=totala/ajax.ventas.total;
        //P(BR)
        var proba3=ajax.ventas.tienda.B.productos.Radio/totalb;
        var proba4=totalb/ajax.ventas.total;

        $('#proba_b').text("Resultado: = " +(proba*proba2)+(proba3+proba4));
        break;

      case '5':
        //P(AR)
        var proba=ajax.ventas.tienda.A.productos.TV/totala;
        var proba2=totala/ajax.ventas.total;
        //P(BR)
        var proba3=ajax.ventas.tienda.B.productos.TV/totalb;
        var proba4=totalb/ajax.ventas.total;

        $('#proba_b').text("Resultado: = " +(proba*proba2)+(proba3+proba4));

        break;
      case '6':
        //P(AR)
        var proba=ajax.ventas.tienda.B.productos.TV/totalb;
        var proba2=totalb/ajax.ventas.total;

        $('#proba_b').text("Resultado: = " +(proba*proba2));

        break;
      case '7':
        //P(AR)
        var proba=ajax.ventas.tienda.B.productos.Radio/totalb;
        var proba2=totalb/ajax.ventas.total;

        $('#proba_b').text("Resultado: = " +(proba*proba2));

        break;
  }
});
