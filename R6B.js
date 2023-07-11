//const my_list = flatten_list(my_matrix);
// returns: list(1, 2, 3, 4, 5, 6, 7, 8, 9);
function flatten_list(lst) {
// your answer here
    return accumulate(append, null, lst);
}
display_list(flatten_list(list(list(1, 2, 3), list(4, 5, 6), list(7, 8, 9))));
// Returns: list(1, 2, 3, 4, 5, 6, 7, 8, 9);



