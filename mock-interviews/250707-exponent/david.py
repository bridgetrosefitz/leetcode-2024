from typing import List

def knapsack(weight: List[int], values: List[int], cap: int) -> int:
    n = len(weight)
    # initialize DP table of size (cap+1, n+1)
    c = [[0] * (n+1) for _ in range(cap+1)]

    for j in range(1, n+1):
        for i in range(c+1):
            c[i][j] = c[i][j-1]
            if i > 0:
                c[i][j] = max(c[i][j], c[i-1][j])
            if i >= weight[j-1]:
                c[i][j] = max(c[i][j], c[i-weight[j-1]][j-1] + values[j-1])
    
    return c[cap][n]
    

# debug your code below
weights = [10, 20, 30]
values = [60, 100, 120]
capacity = 50
print(knapsack(weights, values, capacity)) 


'''
weights = [10, 20, 30]
values = [60, 100, 120]
capacity = 50
output: 220

c 20 + 30 = 50
v 100 + 120 = 220

Algo 1: brute-force
n: the number of items
consider each subset of items --> O(2^n)
find the best subset --> O(n)

T: O(2^n * n)
S: O(n)

Algo 2: dynamic programming

item 0
item 1
item 2

j == 1 -> item 0
j == 2 -> item 0 and item 1
j == 3 -> item 0 ~ 2

sub-problem
c[i][j] = the maximum total value for the first j items when the maximum capacity is equal to `i` 
c[i][j] = max (c[i-1][j],   c[i][j-1],   c[i-w[j], j-1] + v[j])

N: the number of items
C: max capacity
Time: O(N * C)
Space: O(N * C)
'''

