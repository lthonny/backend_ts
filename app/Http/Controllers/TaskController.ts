import {ITask} from "../../../interfaces";

class TaskController {

    public index(req: Request, res: any) {

        const tasks: ITask[] = [
            {id: 1, title: 'ss', text: 'Lorem', status: true},
            {id: 2, title: 'ss', text: 'Lorem', status: true},
            {id: 3, title: 'ss', text: 'Lorem', status: true}
        ];

       res.status(200).send(tasks);
    }

    public create(req: Request, res: any) {
        res.status(201 ).send('create');
    }

    public update(req: Request, res: any) {
        res.status(200).send('update');
    }

    public destroy(req: Request, res: any) {
        res.status(204);
    }
}

module.exports = new TaskController();