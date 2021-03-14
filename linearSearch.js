function linearSearch(arr, val) {
    for(let i= 0; i<arr.length;i++) {
        if(arr[i] === val) return i;
    }
    return -1
}

console.log(linearSearch([12,45, 67,90], 67));

// BIG O

// O(1)-> Best case             O(n)-> Worst case