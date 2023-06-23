let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
    }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.down();
// ladder.showStep();


//Bubble Sort

function bubbleSort(arr){

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length - i - 1; j++){

            if(arr[j + 1] < arr[j]){

                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
};

console.log(bubbleSort([5,3,8,4,6,-1]));

function insertionSort(arr){
    //Start from the second element.
    for(let i = 1; i < arr.length;i++){

        //Go through the elements behind it.
        for(let j = i - 1; j > -1; j--){

            //value comparison using ascending order.
            if(arr[j + 1] < arr[j]){

                //swap
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];

            }
        }
    };

    return arr;
}

console.log(insertionSort([23, 1, 10, 5, 2]));
function selectionSort(arr) {
    let min;

    //start passes.
    for (let i = 0; i < arr.length; i++) {
        //index of the smallest element to be the ith element.
        min = i;

        //Check through the rest of the array for a lesser element
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        //compare the indexes
        if (min !== i) {
            //swap
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));


function LinearSearch(t,A)
    {
        let n = A.length, i = 0;

        A[n] = t;

        while (A[ i ] !== t) i++;

        if (i < n) return i;
        else return -1;
    }



    const heapsort = arr => {
    const a = [...arr];
    let l = a.length;

    const heapify = (a, i) => {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let max = i;
        if (left < l && a[left] > a[max]) max = left;
        if (right < l && a[right] > a[max]) max = right;
        if (max !== i) {
            [a[max], a[i]] = [a[i], a[max]];
            heapify(a, max);
        }
    };

    for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i);
    for (i = a.length - 1; i > 0; i--) {
        [a[0], a[i]] = [a[i], a[0]];
        l--;
        heapify(a, 0);
    }
    return a;
};

heapsort([6, 3, 4, 1]);