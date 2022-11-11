
// Datatables Option Setting
const options = {
    language: {
        emptyTable: "There is no data",
        info: " _TOTAL_ Items, From _START_ To _END_ ",
        infoEmpty: " 0 Items From 0  To 0",
        infoFiltered: "(All _MAX_ Retrieve)",
        infoThousands: ",",
        lengthMenu: "_MENU_ Display",
        loadingRecords: "Loading...",
        processing: "Processing...",
        search: "Search:",
        select: {
            rows: {
                _: "(%d Search Item)",
                0: "",
                1: "(%d Search Item)",
            },
        },
        zeroRecords: "There is no matched data",
        paginate: {
            first: "First",
            last: "Last",
            next: "Next",
            previous: "Previous",
        },
    },
    paging: true,
    lengthChange: true,
    lengthMenu: [10, 25, 50, 100],
    displayLength: 10,
    searching: true,
    ordering: true,
    info: true,
    autoWidth: false,
    responsive: true,
    select: {
        style: "single",
    },
    stateSave: false,
    order: [[1, "asc"]],
    columnDefs: [{ targets: 0, visible: false }],
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
};

// Datatables Column Setting
const columns = [
    { data: "id" },
    { data: "name" },
    { data: "age" },
    { data: "address" }
];

const data_list = [
    {
        "id": 1,
        "name": "Smith",
        "age": 23,
        "address": "add1",
    },
    {
        "id": 2,
        "name": "John",
        "age": 25,
        "address": "add2",
    },
    {
        "id": 3,
        "name": "JoKinsleyhn",
        "age": 32,
        "address": "add3",
    },
    {
        "id": 4,
        "name": "Kit",
        "age": 33,
        "address": "add4",
    },
    {
        "id": 5,
        "name": "Marley",
        "age": 25,
        "address": "add5",
    },
    {
        "id": 6,
        "name": "Peyton",
        "age": 24,
        "address": "add6",
    },
    {
        "id": 7,
        "name": "Winston",
        "age": 29,
        "address": "add7",
    },
    {
        "id": 8,
        "name": "Sutton",
        "age": 25,
        "address": "add8",
    },
    {
        "id": 9,
        "name": "Wilder",
        "age": 25,
        "address": "add9",
    },
    {
        "id": 10,
        "name": "Winter",
        "age": 27,
        "address": "add10",
    },
    {
        "id": 11,
        "name": "Mason",
        "age": 29,
        "address": "add11",
    },
    {
        "id": 12,
        "name": "Shaw",
        "age": 31,
        "address": "add12",
    },
    {
        "id": 13,
        "name": "Booker",
        "age": 26,
        "address": "add13",
    },
    {
        "id": 14,
        "name": "Birch",
        "age": 25,
        "address": "add14",
    },
    {
        "id": 15,
        "name": "Arden",
        "age": 30,
        "address": "add15",
    }
];

export default {
    options,
    columns,
    data_list
};

