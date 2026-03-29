common js

    export :
        module.exports = { login, signup}

    import :
        const auth = require("./auth") 
        const{login,signup} = require("./auth")




ES module
    export:
        export default auth
        export const login = () =>{}
        export const signup = () =>{}

    import:
        import auth from "./auth"   // default import 
        import {login,signup} from "./auth"  //  named import 
