
import java.io.*;
import java.util.*;

class Solution {
  
  static int[] arrayOfArrayProducts(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return new int[0];
    }

    int len = arr.length;
    // O(n^2)
    // your code goes here
    int[] preProduct = new int[len];
    int[] postProduct = new int[len];

    preProduct[0] = arr[0];
    for (int i = 1; i < len; i++) {
        preProduct[i] = preProduct[i-1] * arr[i];
    }

    postProduct[len-1] = arr[len-1];
    for (int i = len-2; i >= 0; i--) {
        postProduct[i] = postProduct[i+1] * arr[i];
    }

    int[] res = new int[len];
    for (int i = 0; i < len; i++) {
        int leftProduct = i > 0 ? preProduct[i-1] : 1;
        int rightProduct = i < len-1 ? postProduct[i+1] : 1;
        res[i] = leftProduct * rightProduct;
    }
    return res;
  }

  public static void main(String[] args) {

  }

}