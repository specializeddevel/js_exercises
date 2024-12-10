// Función de suma simplificada usando arrow function
const sumar = n => n + n;

// Función de suma y resta optimizada usando arrow function y destructuring
const sumaYresta = n => {
    const suma = n + n;
    const resta = suma - 1;
    return [suma, resta];
};

class SelectionSort {
    constructor(originalArray) {
        if (!Array.isArray(originalArray)) {
            throw new TypeError('El argumento debe ser un array');
        }
        this.copiedArray = [...originalArray];
        this.originalArrayLength = originalArray.length;
    }

    sortArray() {
        const result = [];
        
        while (this.copiedArray.length > 0) {
            const smallPosition = this.findSmallPosition(this.copiedArray);
            result.push(this.copiedArray[smallPosition]);
            this.copiedArray.splice(smallPosition, 1);
            
            // Si necesitas debugging, usa console.log
            console.log({
                sorted: result,
                remaining: this.copiedArray
            });
        }
        
        return result;
    }

    findSmallPosition(array) {
        return array.reduce((minIndex, currentValue, currentIndex, arr) => 
            currentValue < arr[minIndex] ? currentIndex : minIndex, 0);
    }
}

(function ordenaArray(){      
    let selectionsortarray = new SelectionSort([4,8,4,3,7,6])
    let selection2 = new SelectionSort([9,8,7,6,5,4,3,2,1,0,10,11])
    selectionsortarray.sortArray()
    selection2.sortArray()
    let arr1 = [1,2,3]
    console.log(arr1[3])
    arr1.unshift(0)
    console.log(arr1)
    arr1 = [...arr1, ...[4,5,6]]
    console.log(arr1)
    console.log(sumar(10))
    const [suma, resta] = sumaYresta(11)
    console.log(suma, resta)
})();
