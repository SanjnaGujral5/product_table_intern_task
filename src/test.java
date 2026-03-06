import java.util.*;

int arr = [5, 2, 9,1, 7];

int smallest = Integer.MAX_VALUE;
int largest = Integer.MIN_VALUE;
for(int i=0; i<arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i];
    }
    if(arr[i] > largest){
        largest  = arr[i];
    }

    return largest - smallest;
}

