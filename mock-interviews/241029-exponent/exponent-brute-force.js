 function calcProductArray(arr):
        n = arr.length
        if (n == 0 OR n == 1):
            # nothing to multiply if n equals to 0 or 1
            return []

        productArr = []
        for i from 0 to n-1:
            product = 1
            for j from 0 to n-1:
                if(i != j):
                    product *= arr[j]

            productArr[i] = product

        return productArr