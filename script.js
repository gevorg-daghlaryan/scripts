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
const mergeSort = arr => {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    const l = mergeSort(arr.slice(0, mid));
    const r = mergeSort(arr.slice(mid, arr.length));
    return Array.from({ length: l.length + r.length }, () => {
        if (!l.length) return r.shift();
        else if (!r.length) return l.shift();
        else return l[0] > r[0] ? r.shift() : l.shift();
    });
};
mergeSort([5, 1, 4, 2, 3]); // [1, 2, 3, 4, 5];


const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10

const digitCount = num => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = nums => {
    let maxDigits = 0

    for (let i = 0; i < nums.length; i++) maxDigits = Math.max(maxDigits, digitCount(nums[i]))

    return maxDigits
}
const arr = [3,2,1,4,6,5,7,9,8,10]
const radixSort = nums => {
    let maxDigitCount = mostDigits(nums)

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }

        nums = [].concat(...digitBuckets)
    }

    return nums
}
console.log(radixSort(arr)) // [1,2,3,4,5,6,7,8,9,10]
const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
        (acc, item, i) =>
            acc.concat(
                permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
                    item,
                    ...val,
                ])
            ),
        []
    );
};

function calculateLpsTable(subStr) {
    let i = 1;
    let j = 0;
    let lps = new Array(subStr.length).fill(0);

    while(i < subStr.length) {
        if(subStr[i] === subStr[j]) {
            lps[i] = j + 1;
            i += 1;
            j += 1;
        } else {
            if(j !== 0) {
                j = lps[j - 1];
            } else {
                i += 1;
            }
        }
    }
    return lps;
}

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
