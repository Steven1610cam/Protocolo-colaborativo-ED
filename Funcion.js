document.addEventListener('DOMContentLoaded', function() {
    let originalNumeros = []; 
    let matrices = []; 

    // botones
    const ejecutarArreglosBtn = document.getElementById('ejecutarArreglosBtn');
    const ejecutarMatricesBtn = document.getElementById('ejecutarMatricesBtn');
    const searchBtn = document.getElementById('searchBtn');
    const outputElement = document.getElementById('output');
    const searchResultElement = document.getElementById('searchResult');

    // Ejecutar arreglos
    function ejecutarArreglos() {
        let output = "\n--- Arreglos ---\n";

















        // 1. Declaración y creación 
        let numeros = new Array(10);
        
        for (let i = 0; i < numeros.length; i++) {
            numeros[i] = Math.floor(Math.random() * 100);
            
        }
      
        











        
        originalNumeros = [...numeros];

        // 4. Mostrar los valores con for clásico
        output += "Recorrido con for clásico: ";
        for (let i = 0; i < numeros.length; i++) {
            output += numeros[i] + " ";
        }
        output += "\n";

        // Mostrar los valores con for-of
        output += "Recorrido con for-of: ";
        for (let numero of numeros) {
            output += numero + " ";
        }
        output += "\n";






        

        // 5. Cambiar los números impares por 0
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 !== 0) {
                numeros[i] = 0;
            }
        }
        output += "Arreglo con impares cambiados a 0: ";
        for (let i = 0; i < numeros.length; i++) {
            output += numeros[i] + " ";
        }

        output += "\n";










        // 6. Multiplicar cada número por su posición (índice)
        for (let i = 0; i < numeros.length; i++) {
            numeros[i] = numeros[i] * i;
        }
        output += "Arreglo después de multiplicar cada valor por su índice: ";
        for (let i = 0; i < numeros.length; i++) {
            output += numeros[i] + " ";
        }
        output += "\n";

        
        outputElement.textContent = output;
        
        
        searchResultElement.textContent = "";
        
        
        searchResultElement.innerHTML = '<span class="success">Operación con arreglos ejecutada correctamente</span>';
    }














    // Ejecutar matrices
    function ejecutarMatrices() {
        let output = "\n--- Matrices ---\n";
        
        // Crear una matriz 3x3 con valores aleatorios
        matrices = [];
        for (let i = 0; i < 3; i++) {
            matrices[i] = [];
            for (let j = 0; j < 3; j++) {
                matrices[i][j] = Math.floor(Math.random() * 100);
            }
        }
        
        // Mostrar la matriz
        output += "Matriz 3x3 generada:\n";
        for (let i = 0; i < matrices.length; i++) {
            for (let j = 0; j < matrices[i].length; j++) {
                output += matrices[i][j] + "\t";
            }
            output += "\n";
        }
        
        // Calcular y mostrar la suma de cada fila
        output += "\nSuma por filas:\n";
        for (let i = 0; i < matrices.length; i++) {
            let sumaFila = 0;
            for (let j = 0; j < matrices[i].length; j++) {
                sumaFila += matrices[i][j];
            }
            output += "Fila " + (i+1) + ": " + sumaFila + "\n";
            
        }
        





        
        outputElement.textContent = output;
        
        // Limpiar resultado de búsqueda anterior
        searchResultElement.textContent = "";
        
        
        searchResultElement.innerHTML = '<span class="success">Operación con matrices ejecutada correctamente</span>';
    }

    
    ejecutarArreglosBtn.addEventListener('click', ejecutarArreglos);
    ejecutarMatricesBtn.addEventListener('click', ejecutarMatrices);
    
    // Configurar la búsqueda
    searchBtn.addEventListener("click", function() {
        if (originalNumeros.length === 0) {
            searchResultElement.innerHTML = '<span class="error">Primero debe ejecutar la operación con arreglos</span>';
            return;
        }
        
        buscarEnArreglo(originalNumeros);
    });

    function buscarEnArreglo(arr) {
        let valorBuscado = parseInt(prompt("Ingrese el valor que desea buscar en el arreglo (0–99):"));
        
        if (isNaN(valorBuscado)) {
            searchResultElement.innerHTML = '<span class="error">Por favor, ingrese un número válido.</span>';
            return;
        }

        let encontrado = false;
        let posiciones = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === valorBuscado) {
                encontrado = true;
                posiciones.push(i);
            }
        }
        
        if (encontrado) {
            searchResultElement.innerHTML = `<span class="success">El valor ${valorBuscado} se encontró en la(s) posición(es): ${posiciones.join(', ')}</span>`;
        } else {
            searchResultElement.innerHTML = `<span class="error">El valor ${valorBuscado} no se encuentra en el arreglo.</span>`;
        }
    }
});