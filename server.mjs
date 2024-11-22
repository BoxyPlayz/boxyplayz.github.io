import express from 'express'

const PORT = 3000

const app = express()
app.use("/", express.static("public"))


app.listen(PORT, () => {
    console.log(`App Running On http://localhost:${PORT}`);
})