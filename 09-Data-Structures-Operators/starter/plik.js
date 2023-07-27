const tabliczka = function (size) {
    const table = new Array(size);
    for (let i = 1; i <= size; i++) {
        table[i] = new Array(size);

        for (let j = 1; j <= size; j++) {
            table[i][j] = i * j;
        }

    }
    return table;
}

const wynik1 = tabliczka(10);
console.table(wynik1);


const input = "a,b,c,d,f\ng,h,i,j,k";
const wiersze = input.split("\n");
const wynik = new Array;
for (let numerwiersza = 0; numerwiersza < wiersze.length; numerwiersza++) {
    const row = wiersze[numerwiersza].split(",");
    wynik.push(row);
}

console.table(wynik);