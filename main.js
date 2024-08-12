var ProfessionistaMedia = /** @class */ (function () {
    function ProfessionistaMedia(nome, cognome, specializzazione, esperienza, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }
    ProfessionistaMedia.prototype.partecipaProgramma = function (programma) {
        programma.aggiungiPartecipante(this);
    };
    return ProfessionistaMedia;
}());
var ProgrammaFormazione = /** @class */ (function () {
    function ProgrammaFormazione(titolo, descrizione, ambitoSpecializzazione, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoSpecializzazione = ambitoSpecializzazione;
        this.durata = durata;
        this.partecipanti = [];
    }
    ProgrammaFormazione.prototype.aggiungiPartecipante = function (professionista) {
        this.partecipanti.push(professionista);
    };
    return ProgrammaFormazione;
}());
var Piattaforma = /** @class */ (function () {
    function Piattaforma(nome, tipo, descrizione, categorieContenuto) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieContenuto = categorieContenuto;
    }
    Piattaforma.prototype.pubblicaContenuto = function (professionista, contenuto) {
        console.log("La piattaforma ".concat(this.nome, " ha pubblicato il contenuto di ").concat(professionista.nome, " ").concat(professionista.cognome, ": ").concat(contenuto));
    };
    return Piattaforma;
}());
var professionista1 = new ProfessionistaMedia("Annalisa", "Verdi", "Giornalismo", 5, ["Politica", "Ambiente"]);
var professionista2 = new ProfessionistaMedia("Maria", "Esposito", "Regia", 8, ["Cinema", "Teatro"]);
var professionista3 = new ProfessionistaMedia("Luca", "Rossi", "Produzione", 10, ["Musica", "Arte"]);
var programma1 = new ProgrammaFormazione("Mentorship in Giornalismo Investigativo", "Programma di sviluppo per giornalisti investigativi", "Giornalismo", 6);
var programma2 = new ProgrammaFormazione("Corso Avanzato di Regia Cinematografica", "Corso per aspiranti registi", "Regia", 12);
var programma3 = new ProgrammaFormazione("Workshop di Produzione Musicale", "Workshop per produttori musicali", "Produzione", 4);
var piattaforma1 = new Piattaforma("Blog Voci", "Online", "Piattaforma di blogging focalizzata sulla parità di genere", ["Politica", "Società"]);
var piattaforma2 = new Piattaforma("Canale YouTube Voci", "Audiovisivo", "Canale YouTube dedicato alla diffusione di contenuti femminili", ["Cinema", "Arte"]);
var piattaforma3 = new Piattaforma("Podcast Voci", "Audiovisivo", "Piattaforma di podcast focalizzata su interviste e talk show", ["Musica", "Arte"]);
professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma2);
professionista3.partecipaProgramma(programma3);
piattaforma1.pubblicaContenuto(professionista1, "Articolo su Politica e Diversità");
piattaforma2.pubblicaContenuto(professionista2, "Intervista con una regista emergente");
piattaforma3.pubblicaContenuto(professionista3, "Podcast su Produzione Musicale");
console.log("Partecipanti al Programma 1:", programma1.partecipanti);
console.log("Partecipanti al Programma 2:", programma2.partecipanti);
console.log("Partecipanti al Programma 3:", programma3.partecipanti);
