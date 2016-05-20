$(function(){
	$("#reloj").on(hora());
	$(".moden").click(function(){
		var check = this.checked
		val= $(this).attr("data");
		if(check==true){
			$(".paises").append("<div id='p"+val+"'></div>");
			horaPais(val);
		}else{
			$("#p"+val).remove();
		}
	});
});
var val=0;
function hora(){
	var tiempo = new Date();
	var h = tiempo.getHours();
	var m = tiempo.getMinutes();
	var s = tiempo.getSeconds();
	var day = tiempo.getDay();
	var mes = tiempo.getMonth();
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var nomDia= new Array("Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb");
	setTimeout('hora()',500);
	$("#reloj").html(h+":"+m+":"+s);
	$("#fecha").html(nomDia[day]+", "+tiempo.getDate()+" de "+meses[mes]);
}
var ArrayPais= [{
				nombre:"Chicago",
				horario: "0",
				},{
				nombre:"Sao Pablo",
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
function horaPais(val){
	var tiempo = new Date();
	var h = tiempo.getHours();
	var m = tiempo.getMinutes();
	var s = tiempo.getSeconds();
	setTimeout('horaPais('+val+')',500);
	var Huso=ArrayPais[val].horario;
	var Pais=ArrayPais[val].nombre;
	A=h+parseInt(Huso);
	$("#p"+val).html("<p class='left'>"+Pais+"</p><p class='right'>"+A+":"+m+":"+s+"</p>");
}







