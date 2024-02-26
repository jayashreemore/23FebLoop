const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cell = [];
let i = 0;
let j = 0;
//for (j = 0; j < 4; j++) {
for (i = 0; i <= str.length; i++) {
        /*if (str[i] == ",") {
            
           // continue//move to next cell logic
        } else */ if (str[i] == "\n") {

        console.log(cell[j]);
        j++;
        continue;

    } else {
        cell[j] += str[i];

    }

}
//console.log(cell[0], cell[1], cell[2], cell[3]);
//}
