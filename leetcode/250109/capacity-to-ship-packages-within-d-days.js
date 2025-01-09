/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  /*
  
    min possible min capacity is largest number
    e.g. 10 items, 5 days
    > use all the days to get smallest min val
    > figure out where to put (days - 1) "splits"
    > sort at the start to understand my min and max > nlogn

    [3,2,2,4,1,4]
    L    M     R
    leftWeight = 7, rightWeight = 9

   days = 3, weights = [3,2,2,4,1,4] capcity = 5,  ???



  */
};
