const Router = require('express');
const router = new Router();

const taskController = require('../app/Http/Controllers/TaskController');

router.get('/', taskController.index);
router.post('/', taskController.create);
router.path('/${id}', taskController.update);
router.delete('/${id}', taskController.destroy);

module.exports = router;