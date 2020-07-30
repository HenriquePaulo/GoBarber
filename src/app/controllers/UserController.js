import User from '../models/User';

class Controller {
    async store(req, res) {
        const userExist = await User.findOne({
            where: { email: req.body.email },
        });
        if (userExist) {
            return res.status(400).json({ error: 'User already exists.' });
        }
        const { id, name, email, provider } = await User.create(req.body);
        return res.json({
            id,
            name,
            email,
            provider,
        });
    }

    async update(req, res) {
        return res.json({ error: 'ok' });
    }
}
export default new Controller();
