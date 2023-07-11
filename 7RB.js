
function make_withdraw(balance, my_password) {
    
    let left_times = 3;
    function withdraw(amount, password) {
        if(left_times === 0) {
            return "Account disabled";
        } 
        else if(my_password !== password){
            left_times = left_times - 1;
            return "Wrong password; no withdraw";
        }
        else if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    }
    return withdraw;
}

const W1 = make_withdraw(100, "123");
