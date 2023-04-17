export class Quote {
    constructor(data){
        this.author = data.author
        this.content = data.content
    }
get QuotesTemplate() {

return `

<div>
<p class="fs-5 p-2">
${this.content}
</p>
<div class="on-hover">${this.author}</div>
</div>
`
}
}
