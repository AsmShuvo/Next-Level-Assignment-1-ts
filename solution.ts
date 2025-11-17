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


