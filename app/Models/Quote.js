export class Quote {
    constructor(data){
        this.author = data.author
        this.content = data.content
    }
get QuotesTemplate() {

return `

<div>
<h1>
${this.content}
</h1>
<div class="on-hover">${this.author}</div>
</div>
`
}
}
