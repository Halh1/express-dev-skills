const skills = [
    {id: 1, skill: "Javascript"},
    {id: 2, skill: "HTML"},
    {id: 3, skill: "CSS"}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => todo.id === id);
}