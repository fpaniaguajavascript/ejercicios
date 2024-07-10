class Serie {
    constructor(titulo, numeroTemporadas)
    {
        this.titulo = titulo;
        this.numeroTemporadas = numeroTemporadas;
    }
    toString()
    {
        return this.titulo + ":::" + this.numeroTemporadas;
    }
}

let from = new Serie("From",3);
let _30monedas = new Serie("30 monedas", 3);
let series = [from, _30monedas];
console.log(series);
let todas = series.join("---");
console.log(todas);