/* 
    typescript types
        - String
        - Number
        - Boolean
        - null
        - undefined

        collections
        - []
        - {}

*/

let age: Number = 13;
let color: String = "red";

let price = 12.342; //  type inference

/* 
    let price = 12.342  

    converted to 

    let price:Number = 12.342  

*/
price = 150;

let isAdmin: Boolean = true;

/* 
        let user: { name: string; phone: number; isActive: boolean } = {
        name: "hari bahadur",
        phone: 956345345,
        isActive: true,
        };

        let user2: { name: string; phone: number; isActive: boolean } = {
        name: "hari bahadur",
        phone: 956345345,
        isActive: "false",
        };

        let user3: { name: string; phone: number; isActive: boolean } = {
        name: "hari bahadur",
        phone: 956345345,
        isActive: "no",
        };
 */

type Address = {
  permanent: {
    district: string;
  };
  temporary: {
    district: string;
  };
};

type User = {
  name: string;
  phone: number;
  isActive: boolean;
  isAdmin: boolean;
  address: Address;
};

let user: User = {
  name: "hari bahadur",
  phone: 956345345,
  isActive: true,
  isAdmin: true,
  address: {
    temporary: {
      district: "kathamndu",
    },
    permanent: {
      district: "dhading",
    },
  },
};

let user2: User = {
  name: "hari bahadur",
  phone: 956345345,
  //   isActive: "false",
  isActive: false,
  isAdmin: false,
  address: {
    temporary: {
      district: "kathamndu",
    },
    permanent: {
      district: "dhading",
    },
  },
};

let userAddress: Address = {
  temporary: {
    district: "kathamndu",
  },
  permanent: {
    district: "dhading",
  },
};

let user3: User = {
  name: "hari bahadur",
  phone: 98404255,
  //   isActive:"no",
  isActive: false,
  isAdmin: false,
  address: userAddress,
};

let district = user.address.permanent.district;
console.log(district);

type Category = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
  category: Category;
  description?: string | null; // optional field  as well the feild can have string or null
  shortDescription?: string;
};

let category1: Category = {
  id: 1,
  name: "electorinics",
};

let category2: Category = {
  id: 2,
  name: "clothes",
};

let product: Product = {
  id: 1,
  name: "mouse",
  category: {
    id: 2,
    name: "electorinics",
  },
};

// let colors = ["red", "blue", "orange", 12, [], {}];

let colors: string[] = ["red", "blue", "orange"];

let numbers: number[] = [1, 2, 3];

let products: Product[] = [
  {
    id: 1,
    name: "mouse",
    description: "lorem ipsum.....",
    category: {
      id: 2,
      name: "electorinics",
    },
  },
  {
    id: 2,
    name: "mouse",
    description: null,
    category: {
      id: 2,
      name: "electorinics",
    },
  },
];


export {}