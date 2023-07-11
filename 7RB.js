
function make_withdraw(balance, my_password) {
    
    function withdraw(amount, password) {
        if(my_password !== password){
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
W1(40, "123");
W1(40, "12");
W1(40, "1");
