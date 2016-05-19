$(function(){
	$("#reloj").on(hora());
	//$("#moden").on(pais());
});

function hora(){
	var tiempo = new Date();
	var h = tiempo.getHours();
	var m = tiempo.getMinutes();
	var s = tiempo.getSeconds();
	var day = tiempo.getDay();
	var mes = tiempo.getMonth();
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

	var nomDia= new Array("Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb");
	var t = setTimeout('hora()',500);
	$("#reloj").html(h+":"+m+":"+s);
	$("#fecha").html(nomDia[day]+", "+tiempo.getDate()+" de "+meses[mes]);
}
//$(".moden").change(pais);
var ArrayPais= [{
				nombre:"Chicago",
				horario: "0",
				},{
				nombre:"Sao Paulo",
				horario: "+2",
				},{
				nombre:"Santiago",
				horario: "+2",
				},{
				nombre:"Mexico D.F",
				horario: "-1",
				},{
				nombre:"Caracas",
				horario: "+1",
				},{
				nombre:"Brasilia",
				horario: "+2",
				},{
				nombre:"Quito",
				horario: "0",
				},{
				nombre:"Guayaquil",
				horario: "0",
				},{
				nombre:"Santa Marta",
				horario: "1",
				},{
				nombre:"Bogota",
				horario: "1",
				}];

function horaPais(){
	var Huso=$(".label-modal").val();


}
// function pais (){
// 	if($(this).prop("checked")==true){
// 		$(".moden")
// 		$(".paises").append("<p id='p"+num+"'>hola</p>");

// 	} else {
// 		$("#p"+num).remove();
// 	}
// }
	// <p class='p"+num+"'>
	// $('#nun'+num)
$(document).ready(function(){
	$(".moden").click(function(){
		alert($(this).attr("data"));
	});
});








