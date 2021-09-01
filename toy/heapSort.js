function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
    return Math.ceil(idx/2) - 1;
}

function insert(heap, item) {
    heap.push(item);
    
    if(heap.length > 1) {
        let idx = heap.length - 1;
        let parent_idx = getParentIdx(idx);

        while(parent_idx >= 0 && heap[idx] < heap[parent_idx]) {
            swap(parent_idx, idx, heap);
            idx = parent_idx;
            parent_idx = getParentIdx(idx);
        }
    }

    return heap;
}

function removeRoot(heap) {
    swap(0, heap.length - 1, heap);
    heap.pop();
    if(heap.length  === 0) return [];

    let idx = 0;
    while(true) {
        let left = 2*idx + 1;
        let right = 2*idx + 2;
        let small_idx;
        // 자식이 있을 경우 자식끼리 비교
        if(!isNaN(heap[left]) && !isNaN(heap[right])) {
            if(heap[left] < heap[right]) small_idx = left;
            else small_idx = right;
        }
        else if(!isNaN(heap[left])) small_idx = left;
        else if(!isNaN(heap[right])) small_idx = right;
        else break;
        // 자식과 부모 비교
        if(heap[idx] > heap[small_idx]) {
            swap(idx, small_idx, heap);
            idx =  small_idx;
        }
        else break;
    }

    return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
        return insert(heap, item);
    }, []);
};

const heapSort = function (arr) {
    let minHeap = binaryHeap(arr);
    let result = [];
    while(minHeap.length !== 0) {
        result.push(minHeap[0]);
        minHeap = removeRoot(minHeap);
    }

    return result;
};

let output = heapSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = heapSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]

output = heapSort([4, 10, 3, 5, 1]);
console.log(output); // --> [1, 3, 4, 5, 10]