
interface User {
    name: string,
    age: number,
}


interface UserWithAddress extends User {
    address?: string
}




//  type inference
let user: UserWithAddress = {
    name: "ram",
    age: "12" as unknown as number
}


user.address = "balaju"


