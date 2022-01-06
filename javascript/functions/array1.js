var array = [2, 3, 4, 5]
var element = 9, flag = 0
var upp = array.length - 1, low = 0
while (low < upp) {
    let sum = array[low] + array[upp]
    if (sum == element) {

        console.log("pairs are ", array[low], array[upp]);
        flag++
        break

    }
    else if (sum > element) {
        upp--
    }
    else if (sum < element) {
        low++
    }}
    if (flag == 0) {
        console.log("no pairs");
    }































// for (let i of array) {
//     for (let j of array) {
//         if ((i + j) ==6) {
//             console.log("pairs are ", i, j);
//         }
//     }
// }