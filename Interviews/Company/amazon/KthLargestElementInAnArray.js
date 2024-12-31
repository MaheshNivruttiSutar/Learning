// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// For example,
// Given [3,2,1,5,6,4] and k = 2, return 5.

// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.




//Method 1
//1. Heap-based Approach
// function findKthLargest(nums, k) {
//     // Create a min-heap using a priority queue
//     const minHeap = new MinPriorityQueue({ priority: x => x });

//     // Iterate over each number in the array
//     for (const num of nums) {
//         // Add the number to the heap
//         minHeap.enqueue(num);

//         // If the heap size exceeds k, remove the smallest element
//         if (minHeap.size() > k) {
//             minHeap.dequeue();
//         }
//     }

//     // The root of the min-heap is the k-th largest element
//     return minHeap.front().element;
// }

// // Helper class for min-heap (priority queue)
// class MinPriorityQueue {
//     constructor(comparator) {
//         this.heap = [];
//         this.comparator = comparator;
//     }

//     enqueue(element) {
//         this.heap.push(element);
//         this._heapifyUp(this.heap.length - 1);
//     }

//     dequeue() {
//         if (this.size() === 0) return null;
//         const root = this.heap[0];
//         const last = this.heap.pop();
//         if (this.size() > 0) {
//             this.heap[0] = last;
//             this._heapifyDown(0);
//         }
//         return root;
//     }

//     front() {
//         return this.size() > 0 ? this.heap[0] : null;
//     }

//     size() {
//         return this.heap.length;
//     }

//     _heapifyUp(index) {
//         let parent = Math.floor((index - 1) / 2);
//         while (index > 0 && this.comparator(this.heap[index]) < this.comparator(this.heap[parent])) {
//             [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
//             index = parent;
//             parent = Math.floor((index - 1) / 2);
//         }
//     }

//     _heapifyDown(index) {
//         const length = this.heap.length;
//         let smallest = index;
//         let left = 2 * index + 1;
//         let right = 2 * index + 2;

//         if (left < length && this.comparator(this.heap[left]) < this.comparator(this.heap[smallest])) {
//             smallest = left;
//         }

//         if (right < length && this.comparator(this.heap[right]) < this.comparator(this.heap[smallest])) {
//             smallest = right;
//         }

//         if (smallest !== index) {
//             [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//             this._heapifyDown(smallest);
//         }
//     }
// }

// // Example usage
// const nums = [3, 2, 1, 5, 6, 4];
// const k = 2;
// console.log(findKthLargest(nums, k)); // Output: 5





//Method 2
//2. Quickselect Algorithm
function findKthLargest(nums, k) {
    // Helper function to perform the partition
    function partition(left, right, pivotIndex) {
        const pivot = nums[pivotIndex];
        // Move pivot to the end
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
        let storeIndex = left;
        // Move all smaller elements to the left
        for (let i = left; i < right; i++) {
            if (nums[i] < pivot) {
                [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
                storeIndex++;
            }
        }
        // Move pivot to its final place
        [nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]];
        return storeIndex;
    }

    function quickSelect(left, right, kSmallest) {
        if (left === right) return nums[left];
        const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
        const pivotNewIndex = partition(left, right, pivotIndex);
        if (kSmallest === pivotNewIndex) return nums[kSmallest];
        else if (kSmallest < pivotNewIndex) return quickSelect(left, pivotNewIndex - 1, kSmallest);
        else return quickSelect(pivotNewIndex + 1, right, kSmallest);
    }

    // The k-th largest is the (n - k)-th smallest
    return quickSelect(0, nums.length - 1, nums.length - k);
}

// Example usage
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k)); // Output: 5






/*
Explanation
1. Heap-based Approach:
This approach uses a min-heap to keep the top k largest elements. As each element is added to the heap, if the heap exceeds size k, the smallest element (root of the min-heap) is removed. The root of the heap will be the k-th largest element.

2. Quickselect Algorithm:
This algorithm is based on the partition process used in quicksort. It partitions the array into elements less than and greater than the pivot. Based on the position of the pivot after partitioning, it recursively narrows down to the k-th smallest element, which corresponds to the k-th largest element.


*/