import PersonModel from "../models/Person.model";

const getAllPersons = async (): Promise<PersonModel[]> => PersonModel.findAll();
const getPersonByID = async (id: string): Promise<PersonModel> => {
    const person = await PersonModel.findOne({where: {id: id}});
    if (!person) {
        throw new Error();
    }
    return person;
};

const createPerson = async (person: any): Promise<PersonModel> => {
    const newPerson = PersonModel.build(person);
    await newPerson.validate();
    return newPerson.save();
}

const updatePerson = async (id: string, personUpdated: any): Promise<PersonModel> => {
    const person = await PersonModel.findOne({where: {id: id}});
    if (!person) {
        throw new Error();
    }
    return person.update(personUpdated);
}

const deletePerson = async (id: string) => {
    const person = await PersonModel.findOne({where: {id: id}});
    if (!person) {
        throw new Error();
    }
    return person.destroy();
}

export default {
    getAllPersons,
    getPersonByID,
    createPerson,
    updatePerson,
    deletePerson,
}