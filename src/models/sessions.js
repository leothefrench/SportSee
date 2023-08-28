export class Session {
    constructor(session) {
        this.session = session;
    }

    format() {
        if(!this.session) {
            return []
        }
        return this.session.map((el, index) => {
            return {
              day: index + 1, // On récépére l'index de l'élement & on ajoute 1
              kilogram: el.kilogram,
              calories: el.calories
            }
        })
    }
}
