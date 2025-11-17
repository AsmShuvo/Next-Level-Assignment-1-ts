const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value == "string") {
    value = value.toUpperCase();
  } else if (typeof value == "number") {
    value *= 10;
  } else if (typeof value == "boolean") {
    value = !value;
  }
  return value;
};

const getLength = (v: string | unknown[]): number => {
  if (typeof v == "string") {
    return v.length;
  }
  if (Array.isArray(v)) {
    return v.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type MyBook = {
  title: string;
  rating: number;
};
const filterByRating = (ar: MyBook[]): MyBook[] => {
  return ar.filter((book) => book.rating >= 4);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  const { title, author, publishedYear, isAvailable } = book;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
};

const getUniqueValues = (
  v1: (number | string)[],
  v2: (number | string)[]
): (number | string)[] => {
  const vis: (number | string)[] = [];
  const ans: (number | string)[] = [];

  for (let i = 0; i < v1.length; i++) {
    let f: boolean = false;
    for (let j = 0; j < vis.length; j++) {
      if (vis[j] == v1[i]) {
        f = true;
        break;
      }
    }
    if (!f) {
      vis.push(v1[i]);
      ans.push(v1[i]);
    }
  }
  for (let i = 0; i < v2.length; i++) {
    let f: boolean = false;
    for (let j = 0; j < vis.length; j++) {
      if (vis[j] == v2[i]) {
        f = true;
        break;
      }
    }
    if (!f) {
      vis.push(v2[i]);
      ans.push(v2[i]);
    }
  }
  return ans;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;
  const prices = products.map((p) => {
    const cost = p.price * p.quantity;
    const dis = p.discount ? (cost * p.discount) / 100 : 0;
    return cost - dis;
  });
  const total = prices.reduce((sum, val) => sum + val, 0);
  return total;
};


