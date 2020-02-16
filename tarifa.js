function HacerClick(totalPagar){
    

    
var nombreCompleto = document.getElementById("name").value;
//var fechaNac = new Date(document.getElementById("date").value);
//fechaNac = document.getElementById("date");
//console.log(fechaNac);
var dia = document.getElementById("dia").value;
var mes = document.getElementById("mes").value;
var anio = document.getElementById("anio").value;

var y1 = anio;
console.log(y1);

var fechaActual = new Date();
var y2 = fechaActual.toLocaleDateString();
var y2 = fechaActual.getFullYear();
console.log(y2);


var edad = y2-y1;
console.log(edad);


    if (edad < 18 || edad >= 65){
    alert("No se puede asegurar. Se encuentra fuera del rango de edad");//tenía console.log
    }

    else{
    var precioBase = 250;
    var comision = precioBase * 0.30;
    
    var recargoHijos = 0;
    var recargoConyuge = 0;
    var recargoEdad = 0;

    var conyuge = document.getElementById("conyuge").value;
        if (conyuge == "SI"){
        var edadConyuge = document.getElementById("edadC").value;
        
        if (edadConyuge < 30){
            recargoConyuge = precioBase*0.01;
        }
        else if (edadConyuge >=30 && edadConyuge < 40){
            recargoConyuge = precioBase*0.02;
        }
        else if (edadConyuge >=40 && edadConyuge < 50){
            recargoConyuge = precioBase*0.03;
        }
        else if (edadConyuge >=50 && edadConyuge < 70){
            recargoConyuge = precioBase*0.05;
        }
        else if (edadConyuge <1){
            alert("La edad del conyuge se encuentra fuera del rango de edad");   
        }
        else if (edadConyuge >= 70){
            alert("La edad del conyuge se encuentra fuera del rango de edad");   
        }
        }

        var hijos = document.getElementById("hijos").value;
         if (hijos == "SI"){
        var cantidadHijos = document.getElementById("cantidad").value;
        recargoHijos = precioBase*cantidadHijos/100;
        }

        if (edad >=18 && edad < 21){
        recargoEdad = 0;
        }

        else if (edad >=21 && edad <25){
        recargoEdad = precioBase*0.01;
        }

        else if (edad >=25 && edad <30){
        recargoEdad = precioBase*0.02;
        }

        else if (edad >=30 && edad <40){
            recargoEdad = precioBase*0.05;
            }

        else if (edad >=40 && edad <50){
            recargoEdad = precioBase*0.08;
            }

        else if (edad >=50 && edad <65){
            recargoEdad = precioBase*0.12;
            }
        
        recargos = recargoHijos+recargoConyuge+recargoEdad;
        console.log("precioBase "+precioBase+ " comision "+comision + " recargos " +recargos);
        totalPagar = precioBase + comision + recargos;
        
        comision = comision.toFixed(2);
        precioBase = precioBase.toFixed(2);
        recargoConyuge = recargoConyuge.toFixed(2);
        recargoEdad = recargoEdad.toFixed(2);
        totalPagar = totalPagar.toFixed(2);
        recargoHijos = recargoHijos.toFixed(2);
         
        document.writeln("Bienvenido a Seguros TK-U"+"<br>");
        document.write("Muchas gracias "+nombreCompleto+" por preferirnos"+"<br>"+"<br>");
        document.write("Los cargos aplicados son: "+"<br>");
        document.write("Precio base: "+"Q. "+precioBase+"<br>");
        document.write("Comisión: "+"Q. "+comision+"<br>");
        document.write("Cargos por edad: "+"Q. "+recargoEdad+"<br>");
        document.write("Cargos por conyugue: "+"Q. "+recargoConyuge+"<br>");
        document.write("Cargos por hijos menores de 21 años: "+"Q. "+recargoHijos+"<br>");
        document.write("----------------------------------------------------"+"<br>");
        document.write("El total a pagar es: "+"Q. "+totalPagar);
    }
}
