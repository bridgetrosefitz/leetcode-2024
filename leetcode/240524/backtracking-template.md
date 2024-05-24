function backtrack(curr) {
if( base case) {
// increment or add answer
return
}

for(iterate over input) {
// modify curr
backtrack(curr)
// undo whatever modification was done to curr
}

}
