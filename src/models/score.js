// const score = [
//     { value: data.todayScore || data.score},
//     { value: 1 - data.todayScore || data.score} 
//   ]

export class Score {
    constructor(data) {
        this.data = data;
    }

    format() {
        return [
            { value: this.data.todayScore || this.data.score},
            { value: 1 - (this.data.todayScore || this.data.score)} 
        ]
    }
}











