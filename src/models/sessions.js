export class Session {
    constructor(sessions) {
        this.sessions = sessions || [];
    }

    format() {
        return this.sessions.map((el, index) => {
            return {
              day: index + 1,
              kilogram: el.kilogram,
              calories: el.calories
            }
        })
    }
}
