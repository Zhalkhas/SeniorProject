import Router from 'express';

import Person from '../models/Person.model';
import PersonService from '../services/persons-service';

const router = Router();

router.get('/', async (req, res) => {
    const persons: Person[] = await PersonService.getAllPersons();
    res.json(persons);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    if (!id) return res.sendStatus(400);
    try {
        const person: Person = await PersonService.getPersonByID(id);
        res.json(person);
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
});

router.post('/', async (req, res) => {
    const personData = req.body;
    try {
        const result = await PersonService.createPerson(personData);
        res.json(result);
    } catch (err) {
        console.error(err.stack);
        res.status(400).send(err.message);
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;

    if (!id) return res.sendStatus(400);

    const personData = req.body;
    try {
        const result = await PersonService.updatePerson(id, personData);
        res.json(result);
    } catch (err) {
        console.error(err.stack);
        res.status(400).send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    if (!id) return res.sendStatus(400);

    try {
        await PersonService.deletePerson(id);
        res.sendStatus(200);
    } catch (err) {
        console.error(err.stack);
        res.status(400).send(err.message);
    }
});

export default router;
