const routeList = [
    {
        key                 : "dashboard",
        name                : "Dashboard",
        path                : "/dashboard",
        enable_subscription : false,
        submenu             : [],
        is_dynamic          : false
    },
    {
        key                 : "user",
        name                : "User",
        path                : "",
        enable_subscription : false,
        submenu             : [
            {
                key                 : "user_list",
                name                : "User List",
                path                : "/user",
                enable_subscription : false,
                is_dynamic          : false
            },
            {
                key                 : "user_create",
                name                : "Add User",
                path                : "/user/add",
                enable_subscription : false,
                is_dynamic          : false
            },
            {
                key                 : "user_edit",
                name                : "Edit User",
                path                : "/user/[slug]",
                enable_subscription : true,
                is_dynamic          : true
            },
            {
                key                 : "user_delete",
                name                : "Delete User",
                path                : "/user/delete/[slug]",
                enable_subscription : true,
                is_dynamic          : true
            }
        ]
    }
];

export default routeList;