import { generateInputArray } from "../utility";

const SENTINEL = 20000000
let a:number[];

const merge = (left: number, mid: number, right: number) => {
  const n1 = mid - left;
  const n2 = right - mid;

  const L = new Array();
  const R = new Array();

  for(let i = 0; i < n1; i++)L[i] = a[left + i ]
  for(let i = 0; i < n2; i++)R[i] = a[mid + i ]

  let [i,j] = [0,0]

  for(let k = left; k < right; k++){
    L[n1] = R[n2] = SENTINEL

    if(L[i] <= R[j]){
      a[k] = L[i++]
    }else{
      a[k] = R[j++]
    }
  }
};

const mergeSort = ( left: number, right: number) => {
  if (left + 1 < right) {
    const mid = Math.floor((left + right) / 2) ;
    mergeSort( left, mid);
    mergeSort( mid, right);

    merge( left, mid, right);
  }
};

export const main = (input: string) => {
  const [length, array] = generateInputArray(input);
  
  a = array;
  mergeSort(0, length);
  
  return a 
};
