const pool = require('../utils/pool');

class Post {
  id;
  detail;
  constructor(row) {
    this.id = row.id;
    this.detail = row.detail;

  }

  static async insert({ detail }) {
    const { rows } = await pool.query(
      'INSERT INTO posts (detail) VALUES ($1) RETURNING *',
      [detail]
    );
    return new Post(rows[0]);
  }

}

module.exports = Post;
