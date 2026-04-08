// Aria - Art Director Agent
// Descrizione di Aria, l'agente Direttore Artistico

class Aria {
    constructor() {
        this.name = 'Aria';
        this.role = 'Direttore Artistico';
        this.skills = ['creatività', 'vision', 'leadership'];
    }

    getDescription() {
        return `Ciao, sono ${this.name}, il tuo ${this.role}. Sono qui per guidarti nella creazione di progetti artistici eccellenti.`;
    }

    displaySkills() {
        return `Le mie competenze includono: ${this.skills.join(', ')}.`;
    }
}

// Esportazione della classe Aria
module.exports = Aria;