import express from 'express';

const app = express();

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
        comments: [],
    },
    'learn-node': {
        upvotes: 0,
        comments: [],
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
        comments: [],
    },
}

app.use(express.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name

    articlesInfo[articleName].upvotes += 1;

    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
})

app.post('/api/articles/:name/add-comment', (req, res) => {
    const {user, text} = req.body
    const articleName = req.params.name

    articlesInfo[articleName].comments.push({ user, text})

    res.status(200).send(articlesInfo[articleName]);
}) 

app.listen(8000, () => console.log("Listening on port 8000"));