const db = require('../db')

class PostController {

	async createPost(req, res) {
		const { title, content, user_id } = req.body
		const newPost = await db.query('INSERT INTO post (title, content, user_id) values ($1, $2, $3)  RETURNING *', [title, content, user_id])
		res.json(newPost.rows[0])
	}

	async getPostsByUser(req, res) {
		const user_id = req.query?.user_id
		const posts = await db.query('SELECT post.*, person.name as person_name, person.surname as person_surname FROM post INNER JOIN person ON post.user_id = person.id WHERE user_id=$1 ', [user_id])
		res.json(posts.rows)
	}

}

module.exports = new PostController()