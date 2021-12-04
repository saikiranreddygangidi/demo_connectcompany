'use strict'

class UserController {
    async getAllCompaniesByEmail({request,response,auth,params}){
        const userName=params.userName;
        const companies = [{id:1,companyName:"google",companyLocation:"United States",noofevents:1},
        {id:2,companyName:"microsoft",companyLocation:"India",noofevents:2},
     ];
     return companies;
    }
}

module.exports = UserController