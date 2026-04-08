// Luna Agent - Content Writer Functionality

class Luna {
    static generateCaption(topic) {
        return `Questa è una didascalia per l'argomento '${topic}'.`;
    }

    static generateThread(topic) {
        return `Thread su '${topic}':
1. Introduzione
2. Sviluppo
3. Conclusione`; 
    }

    static generateQuote(author, quote) {
        return `"${quote}" - ${author}`;
    }
}

module.exports = Luna;