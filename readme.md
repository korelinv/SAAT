#Step assembly

#Wrapper classes

#Sequence
```javascript
// create new sequence
new Sequence()

    //adds line of comment
    .Comment('this is comment')

    // adds step defenitions
    .Given('login')
    .When('loaded')
    .Then('authorize')
    .And('wait for pop up')

    // conditional steps can added
    .If('http:\\\\google.com' === url)
        .Then('search everything')

        // conditions can be nested
        .If(true === nothing_found)
            .Then('leave')
        .End()

    .End()

    // append another sequence to current sequence
    .Sequence(new Sequence()
        .Then('do smth')
        .And('wait for smth')
    )

    // returns content of sequence as array of lines
    .content()
```

#Snippet exporter

```javascript
// create new snipet file
new SnipetFile('filename')

    // sets up domain of snippet
    // in this case for .feature files
    .domain('.source.feature')

    // adds coment line as such
    // #comment
    .comment('comment')

    // adds snipet
    // pretty selfexplanatory if you familiar with atom snippets syntax

    // single line body
    .add({
        name: 'name',
        prefix: 'prefix',
        description: 'description',
        body: 'body'
    })

    //multiline body
    .add({
        name: 'name2',
        prefix: 'prefix2',
        description: 'description2',
        body: [
            'line1',
            'line2'
        ]
    })

    //write to file and call 'callback' function
    .finalize(callback);
```
