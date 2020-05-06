const unPolish = (str) => {
    let polishletters = {
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ó: "o",
        ś: "s",
        ź: "z",
        ż: "z",
    }
    let stringnew = "";
    for (let i of str) {
        for (let letter in polishletters) {
            if (i === letter) {
                i = polishletters[i];
        }

            }
        stringnew += i;
        }
    return stringnew;
    }
console.log(unPolish("Jędrzej Błądziński"));


