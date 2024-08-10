const connection = require('../models/db');

module.exports.ping = (req, res) => {
    const consult = 'SELECT * FROM login';

    connection.query(consult, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Error executing query jiorgggg' });
        }

        res.json(results); // Devuelve los resultados al cliente en formato JSON
    });
};

