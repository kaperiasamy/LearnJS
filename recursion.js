class Comment {
    constructor(content, children) {
        this.content = content; 
        this.children = children
    }

    *[Symbol.iterator]() {
        yield this.content;
        for(let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment("Good comment", []), 
    new Comment("Bad comment", []),
    new Comment("meh", [])
]

const post = new Comment("Great post!", children);

console.log(post);

const values = [];

for(let value of post)
{
    values.push(value);
}

console.log(values);