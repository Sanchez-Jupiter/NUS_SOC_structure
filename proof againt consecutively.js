// Task 3

// Copy your functions get_dtmf_frequencies and make_dtmf_tone here.
import {sine_sound, simultaneously, consecutively, silence_sound, play} from 'sound';
function matrix(x, y){
    const list_l = list(697, 770, 852, 941);
    const list_c = list(1209, 1336, 1477, 1633);
    return pair(list_ref(list_l, x), list_ref(list_c, y));
}
function get_dtmf_frequencies(number) {
    // your answer here
    if(number === 1) {
        return matrix(0,0);
    }
    else if(number === 2) {
        return matrix(0,1);
    }
    else if(number === 3) {
        return matrix(0,2);
    }
    else if(number === 12){
        return matrix(0,3);
    } 
    else if(number === 4) {
        return matrix(1,0);
    }
    else if(number === 5){
        return matrix(1,1);
    } 
    else if(number === 6) {
        return matrix(1,2);
    }
    else if(number === 13){
        return matrix(1,3);
    } 
    else if(number === 7){
        return matrix(2,0);
    } 
    else if(number === 8){
        return matrix(2,1);
    } 
    else if(number === 9){
        return matrix(2,2);
    } 
    else if(number === 14){
        return matrix(2,3);
    }
    else if(number === 10){
        return matrix(3,0);
    } 
    else if(number === 0){
        return matrix(3,1);
    } 
    else if(number === 11){
        return matrix(3,2);
    } 
    else if(number === 15){
        return matrix(3,3);
    } 
    else {
        return pair(0,0);
    }
}



function make_dtmf_tone(frequency_pair) {
    // your answer here
    const s1 = sine_sound(head(frequency_pair), 0.5);
    const s2 = sine_sound(tail(frequency_pair), 0.5);
    return simultaneously(list(s1, s2));
}

function add_silence(frequency_pair){
    return consecutively(list(make_dtmf_tone(frequency_pair), silence_sound(0.1)));
}

function dial(list_of_digits) {
    // your answer here
    if(is_null(list_of_digits)){
        return pair(0, 0);
    }
    else{
        return consecutively(map(add_silence, map(get_dtmf_frequencies, list_of_digits)));
       // const current = (list( make_dtmf_tone(get_dtmf_frequencies(head(list_of_digits))) , silence_sound(0.1), dial(tail(list_of_digits))));
        //display(current);
        //return current;
         // return consecutively(list(dial(tail(list_of_digits)), silence_sound(0.1), make_dtmf_tone(get_dtmf_frequencies(head(list_of_digits)))));
    }
}

// Test
//play(dial(list(0)));

play(make_dtmf_tone(get_dtmf_frequencies(1)));
play(make_dtmf_tone(get_dtmf_frequencies(4)));
play(make_dtmf_tone(get_dtmf_frequencies(8)));
play(consecutively(list(make_dtmf_tone(get_dtmf_frequencies(8)), make_dtmf_tone(get_dtmf_frequencies(4)), make_dtmf_tone(get_dtmf_frequencies(1)))));
