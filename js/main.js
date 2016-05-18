$(function(){
	$("#reloj").on(hora());
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

function pais(){
	

}











