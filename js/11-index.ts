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

type User = {
  name: string;
  phone: number;
  isActive: boolean;
  isAdmin: boolean;
  address: {
    permanent: {
      district: string;
    };
    temporary: {
      district: string;
    };
  };
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

let user3: User = {
  name: "hari bahadur",
  phone: 98404255,
  //   isActive:"no",
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

let district = user.address.permanent.district;
console.log(district);


export{}