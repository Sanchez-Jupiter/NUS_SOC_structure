//       1
//const my_list = flatten_list(my_matrix);
// returns: list(1, 2, 3, 4, 5, 6, 7, 8, 9);
function flatten_list(lst) {
// your answer here
    return accumulate(append, null, lst);
}
display_list(flatten_list(list(list(1, 2, 3), list(4, 5, 6), list(7, 8, 9))));
// Returns: list(1, 2, 3, 4, 5, 6, 7, 8, 9);


//      2


/*
Write a function tree_sum that takes in a tree of numbers and returns the sum of all the
numbers in the tree.
*/
function tree_sum(tree) {
// your answer here
}
const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);
// Returns: 28




//      3

/*
Write a function accumulate_tree that takes four arguments: a function f1, a function
f2, an initial value and a tree. The function f1 takes one argument and is used to get
the value for each data item in the tree. The second function takes two arguments and is
used to combine the values of two sub-trees.
For example the following programs should compute the tree_sum above and the function
count_data_items from Lecture L5, respectively.
function tree_sum(tree) {
return accumulate_tree( x => x, (x, y) => x + y, 0, tree);
}
The following function computes the number of data items in a given tree (count_data_items
as given in Lecture L5).
function count_data_items(tree) {
return accumulate_tree( x => 1, (x, y) => x + y, 0, tree);
}
The following function flattens a given tree into a list.
function flatten(tree) {
return accumulate_tree( x => list(x), append, null, tree);
}
Give sufficient conditions for f2 and initial such that the result does not depend on the
shape of the tree or the order in which the elements appear?
*/
function accumulate_tree(tree) {
// your answer here
}
