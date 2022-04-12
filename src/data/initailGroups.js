const initialGroups = [
    {
        id: 1,
        name: "Grupa 1",
        members: [{ name: "Jan Kowalski", memberDesc: "Fronted React", email: "janek@gmail.com"},
            { name: "Anna Lewandowska", memberDesc: "Backend", email: "anna@wp.pl"}],
        description: "Szukamy 2 osób do projektu z baz danych",
        subject: "Bazy danych"
    },
    {
        id: 2,
        name: "Grupa 2",
        members: [
            { name: "Robert Kubica",  memberDesc: "Java Python", email: "robert@wp.pl"},
            { name: "Kasia Ciupińska", memberDesc: "PHP C++", email: "kasia@gmail.com"},
            { name: "Andrzej Ciupiński", memberDesc: "Python", email: "andrzej@gmail.com"},
        ],
        description: "Szukamy 1 osoby do projektu zespołowego, będziemy tworzyć projekt dla Volvo",
        subject: "Projekt zespołowy"
    },
    {
        id: 3,
        name: "Grupa 3",
        members: [
        { name: "Jan Nowak",  memberDesc: "Java React", email: "jan@wp.pl"},

    ],
        description: "Szukamy 1 osoby do projektu z AK2, trzeba mnie nauczyć assemblera",
        subject: "Architektura komputerów"
    },

]

export default initialGroups;