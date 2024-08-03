const teste = (n) => {
    let controle = 0;
    let array = [];
    let a = 0, b = 1, c = 0;

    while (controle <= n) {
        array.push(a)
        c = a + b;
        b = a;
        a = c;
        console.log(array)
        controle++
    }
    return array[n]
}
