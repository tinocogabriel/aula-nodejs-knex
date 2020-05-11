const knex = require("../database");

module.exports = {
  async index(req, res, next) {
    try {
      const { user_id, page = 1 } = req.query;
      const query = knex("projects")
        .limit(5)
        .offset((page - 1) * 5);

      if (user_id) {
        query
          .where({ user_id })
          .join("users", "users.id", "=", "projects.user_id")
          .select("projects.*", "users.username");
      }

      const [count] = await knex("projects").count();

      res.header("X-Total-Count", count["count"]);

      const results = await query;

      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      const { title } = req.body;
      const { user_id } = req.params;

      await knex("projects").insert([
        {
          title,
          user_id,
        },
      ]);

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  },
};
