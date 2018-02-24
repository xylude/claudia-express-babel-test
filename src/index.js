import express from 'express'
const app = express()

import {foo} from './routes/test'

app.get('/', (req, res) => foo)


if (process.env.NODE_ENV !== 'production') {
	app.listen(3300, () => console.log('Example app listening on port 3300!'))
}

module.exports = app