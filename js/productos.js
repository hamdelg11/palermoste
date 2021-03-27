/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var opt_1 = new Array("-", "Chai Verde", "Gun Powder Menta", "Choco Vainilla", "Jasmine Mint", "Té verde de Indonesia");
			var opt_2 = new Array("-","Apple Chai","Vainilla-Jazmín","Pai Mu Tan");
			var opt_3 = new Array("-", "English Breakfast tea","Earl Grey con Bergamota","Earl Grey Creme","Té negro con chispas de chocolate","Malasa chai");
            var opt_4 = new Array("-","Frutos Rojos Silvestres","Kane-wa","Granada-jenjibre","Mandarina-Jengibre","Flores de campo","Manzana-vainilla");


            // 2) crear una funcion que permita ejecutar el cambio dinamico

			function cambia() {
				var cosa;
				//Se toma el vamor de la "cosa seleccionada"
				cosa = document.formulario1.cosa[document.formulario1.cosa.selectedIndex].value;
				//se chequea si la "cosa" esta definida
				if (cosa != 0) {
					//selecionamos las cosas Correctas
					mis_opts = eval("opt_" + cosa);
					//se calcula el numero de cosas
					num_opts = mis_opts.length;
					//marco el numero de opt en el select
					document.formulario1.opt.length = num_opts;
					//para cada opt del array, la pongo en el select
					for (i = 0; i < num_opts; i++) {
						document.formulario1.opt.options[i].value = mis_opts[i];
						document.formulario1.opt.options[i].text = mis_opts[i];
					}
				} else {
					//si no habia ninguna opt seleccionada, elimino las cosas del select
					document.formulario1.opt.length = 1;
					//ponemos un guion en la unica opt que he dejado
					document.formulario1.opt.options[0].value = "-";
					document.formulario1.opt.options[0].text = "-";
				}
				//hacer un reset de las opts
				document.formulario1.opt.options[0].selected = true;

			}
//Funcion para ocultar el contenido de los té
function ocultarv() {
    var v = document.getElementById("verde");

		if (v.style.display === "none") {
        v.style.display = "block";
    } else {
        v.style.display = "none";
    }
}
function ocultarb() {
		var b = document.getElementById("blanco");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultarn() {
		var b = document.getElementById("negro");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultarp() {
		var b = document.getElementById("pu");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultarr() {
		var b = document.getElementById("rooibos");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultart() {
		var b = document.getElementById("tisana");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultarh() {
		var b = document.getElementById("honey");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
function ocultaro() {
		var b = document.getElementById("oolong");

		if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
