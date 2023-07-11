//1
function fap(f){
    return (x,y) => pair(f(x),y);
}
function my_map(f, xs) {
// this should be a one-liner
  return accumulate(fap(f), null, xs) ;
}
//Example calls:
my_map(x => x + 1, list(1, 2, 3));
// Result: list(2, 3, 4)



//2
function remove_duplicates(lst) {
    if(is_null(lst)) {
        return null;
    }
    else {
        const d = head(lst);
        return pair(d, remove_duplicates(filter(x => x !== d, lst)));
    }
}
//display_list(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));
// Result: list(1, 2, 3, 4)
display_list(remove_duplicates(list("a", "x", "b", "c", "c", "b", "d")));
// Result: list("a", "x", "b", "c", "d")


