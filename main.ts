
interface IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];
    partecipaProgramma(programma: IProgrammaFormazione): void;
}

interface IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoSpecializzazione: string;
    durata: number;
    partecipanti: IProfessionistaMedia[];
    aggiungiPartecipante(professionista: IProfessionistaMedia): void;
}

interface IPiattaforma {
    nome: string;
    tipo: string;
    descrizione: string;
    categorieContenuto: string[];
    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void;
}

class ProfessionistaMedia implements IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];

    constructor(nome: string, cognome: string, specializzazione: string, esperienza: number, interessi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }

    partecipaProgramma(programma: IProgrammaFormazione): void {
        programma.aggiungiPartecipante(this);
    }
}

class ProgrammaFormazione implements IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoSpecializzazione: string;
    durata: number;
    partecipanti: IProfessionistaMedia[];

    constructor(titolo: string, descrizione: string, ambitoSpecializzazione: string, durata: number) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoSpecializzazione = ambitoSpecializzazione;
        this.durata = durata;
        this.partecipanti = [];
    }

    aggiungiPartecipante(professionista: IProfessionistaMedia): void {
        this.partecipanti.push(professionista);
    }
}

class Piattaforma implements IPiattaforma {
    nome: string;
    tipo: string;
    descrizione: string;
    categorieContenuto: string[];

    constructor(nome: string, tipo: string, descrizione: string, categorieContenuto: string[]) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieContenuto = categorieContenuto;
    }

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void {
        console.log(`La piattaforma ${this.nome} ha pubblicato il contenuto di ${professionista.nome} ${professionista.cognome}: ${contenuto}`);
    }
}


let professionista1 = new ProfessionistaMedia("Annalisa", "Verdi", "Giornalismo", 5, ["Politica", "Ambiente"]);
let professionista2 = new ProfessionistaMedia("Maria", "Esposito", "Regia", 8, ["Cinema", "Teatro"]);
let professionista3 = new ProfessionistaMedia("Luca", "Rossi", "Produzione", 10, ["Musica", "Arte"]);


let programma1 = new ProgrammaFormazione("Mentorship in Giornalismo Investigativo", "Programma di sviluppo per giornalisti investigativi", "Giornalismo", 6);
let programma2 = new ProgrammaFormazione("Corso Avanzato di Regia Cinematografica", "Corso per aspiranti registi", "Regia", 12);
let programma3 = new ProgrammaFormazione("Workshop di Produzione Musicale", "Workshop per produttori musicali", "Produzione", 4);


let piattaforma1 = new Piattaforma("Blog Voci", "Online", "Piattaforma di blogging focalizzata sulla parità di genere", ["Politica", "Società"]);
let piattaforma2 = new Piattaforma("Canale YouTube Voci", "Audiovisivo", "Canale YouTube dedicato alla diffusione di contenuti femminili", ["Cinema", "Arte"]);
let piattaforma3 = new Piattaforma("Podcast Voci", "Audiovisivo", "Piattaforma di podcast focalizzata su interviste e talk show", ["Musica", "Arte"]);

professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma2);
professionista3.partecipaProgramma(programma3);

piattaforma1.pubblicaContenuto(professionista1, "Articolo su Politica e Diversità");
piattaforma2.pubblicaContenuto(professionista2, "Intervista con una regista emergente");
piattaforma3.pubblicaContenuto(professionista3, "Podcast su Produzione Musicale");


console.log("Partecipanti al Programma 1:", programma1.partecipanti);
console.log("Partecipanti al Programma 2:", programma2.partecipanti);
console.log("Partecipanti al Programma 3:", programma3.partecipanti);

