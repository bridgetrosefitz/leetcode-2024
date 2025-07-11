var TimeMap = function () {
  /** 
        {
            "key": [[value, timestamp in ms]]
        }
    */

  this.items = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  const item = [value, timestamp];
  if (!this.items.hasOwnProperty(key)) {
    this.items[key] = [item];
  } else {
    this.items[key].push(item);
  }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.items.hasOwnProperty(key)) {
    return "";
  }

  // find item efficiently using binary search

  const entries = this.items[key];
  let left = 0;
  let right = entries.length - 1;
  let res = "";

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const [value, time] = entries[mid];

    if (time <= timestamp) {
      res = value;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
