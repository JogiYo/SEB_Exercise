function swap(idx1, idx2, arr) {
    // 두 변수를 바꾸는 방법

    // 1) 임시 변수를 활용한 방법
    // let temp = arr[idx1];
    // arr[idx1] = arr[idx2];
    // arr[idx2] = temp;

    // 2) Destructuring assignment를 활용한 방법
    // arr이 reference type이라 가능
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    // 3) XOR 연산을 활용한 방법
    // arr이 reference type이라 가능
    // arr[idx1] ^= arr[idx2];
    // arr[idx2] ^= arr[idx1];
    // arr[idx1] ^= arr[idx2];
}
  
function getParentIdx(idx) {
    // TODO: 여기에 코드를 작성합니다.
    return Math.ceil(idx/2) - 1;
}

function insert(heap, item) {
    // TODO: 여기에 코드를 작성합니다.
    heap.push(item);
    
    if(heap.length > 1) {
        let idx = heap.length - 1;
        let parent_idx = getParentIdx(idx);

        while(parent_idx >= 0 && heap[idx] > heap[parent_idx]) {
            swap(parent_idx, idx, heap);
            idx = parent_idx;
            parent_idx = getParentIdx(idx);
        }
    }

    return heap;
}

    // 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
        return insert(heap, item);
    }, []);
};