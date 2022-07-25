export const COLUMNS=[
   
    {
        Header: "ID",
        accessor:"id"
    },
    {
        Header: "First Name",
        accessor:"first_name"
    },
    {
        Header: "Last Name",
        accessor:"last_name"
    },
    {
        Header: "Email",
        accessor:"email"
    },
    {
        Header: "D.O.B",
        accessor:"date_of_birth"
    },
    {
        Header: "Age",
        accessor:"age"
    },
    {
        Header: "Contact",
        accessor:"contact"
    },
   
]


export const GROUPED_COLUMNS=[
    {
        Header: "ID",
        accessor:"id",
    },
    {
        Header:"Name",
        columns:[
            {
                Header: "First Name",
                accessor:"first_name"
            },
            {
                Header: "Last Name",
                accessor:"last_name"
            }
        ]

    },
    {
        Header:"Information",
        columns:[
            {
                Header: "Email",
                accessor:"email"
            },
            {
                Header: "D.O.B",
                accessor:"date_of_birth"
            },
            {
                Header: "Age",
                accessor:"age"
            },
            {
                Header: "Contact",
                accessor:"contact"
            }
        ]
    }
]