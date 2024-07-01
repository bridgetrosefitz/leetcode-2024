/**
 * @param {string} s
 * @return {string[]}
 */

/*
    s = "0000"

    i = 0
    option1 = "0"
    option2 = "00"
    option3 = "000"
    temp = ["0"]

    i = 1

    // LOOKS GOOD // 

    "101023"

    i = 0
    option1 = "1"
    option2 = "10"
    option3 = "101"

    temp = ["1"]

        i = 1
        o1 = "0"
        o2 = "01"
        o3 = "010"
        temp = ["1", "0"]

            i = 2
            o1 = "1"
            o2 = "10"
            o3 = "102"
            temp = ["1", "0", "1"]

                i = 3
                o1 = "0"
                o2 = "02"
                o3 = "023"
                temp = ["1", "0", "1", "0"]

                    i = 4
                    * return because temp.length is > 4 *

                pop
                temp = ["1", "0", "1"]
                * no other options are valid * 

            i = 2
            pop
            temp = ["1", "0"]
            temp = ["1", "0", "10"]

                i = 4
                o1 = "2"
                o2 = "23"
                o3 = "23"
                temp = ["1", "0", "10", "2"]









 */
var restoreIpAddresses = function (s) {
  let temp = [];
  let res = [];

  function helper(i) {
    if (i === s.length) {
      if (temp.length === 4) {
        res.push(temp.join("."));
      }

      return;
    }

    if (temp.length >= 4) {
      return;
    }

    const option1 = s.slice(i, i + 1);
    const option2 = s.slice(i, i + 2);
    const option3 = s.slice(i, i + 3);

    if (isValid(option1)) {
      temp.push(option1);
      helper(i + 1);
      temp.pop();
    }

    if (s.length - i >= 2 && isValid(option2)) {
      temp.push(option2);
      helper(i + 2);
      temp.pop();
    }

    if (s.length - i >= 3 && isValid(option3)) {
      temp.push(option3);
      helper(i + 3);
      temp.pop();
    }

    function isValid(section) {
      if (section.length > 1 && section[0] === "0") return false;
      if (parseInt(section) > 255) return false;

      return true;
    }
  }

  helper(0);

  return res;
};
