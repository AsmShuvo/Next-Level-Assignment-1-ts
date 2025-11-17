## Interface

**interface** হলো একটি অবজেক্টের গঠন নির্ধারণ করার নিয়ম।  
মানে কোন অবজেক্টে কোন property থাকবে, তাদের টাইপ কী হবে - interface তা বলে দেয়

### ব্যবহার:
- Object structure define করা  
- Class এর সাথে কাজ করা।


## Type

**type** নির্ধারণ করে যে একটি ভ্যারিয়েবল, ফাংশন প্যারামিটার বা ফাংশন এর return value কী ধরনের ডেটা ধারণ করতে পারবে।

TypeScript এ object এর গঠন নির্ধারণ করতে interface আর type দুটোই ব্যবহার করা যায়।
কিন্তু কাজের ধরনে কিছু পার্থক্য আছে:

- Type আরও flexible। union, intersection, function type, primitive alias এসব টাইপ তৈরি করতে type খুব সহজ। Interface দিয়ে এগুলো করা যায় না।
- Interface কে বারবার ডিক্লেয়ার করলে TypeScript ওগুলো merge করে। বড় প্রজেক্টে এটা কাজে লাগে। Type এর ক্ষেত্রে merge হয় না।
- Class এ ব্যাবহার করতে গেলে interface সাধারনত ব্যবহার হয়।
- interface type কে extend করতে পারে তবে type interface কে extend করতে পারে না।


### interface উদাহরণ:

```ts
interface User {
  name: string;
  age: number;
}
```


### type উদাহরণ:

```ts
type ID = number | string;
```


## Interface - Simple Code Example

```ts
interface Product {
  title: string;
  price: number;
}

const item: Product = {
  title: "Notebook",
  price: 120,
};
```


## Type - Simple Code Example

```ts
type Product = {
  title: string;
  price: number;
};

type ID = number | string;
```


## Advantages of Interface

- Readable এবং পরিষ্কার  
- Class এর সাথে সহজে কাজ করে  
- Extend করা সহজ  
- বড় প্রজেক্টে maintain সহজ  


## Advantages of Type

- flexiblity  
- Union/intersection
- Alias বানানো
- Function type define করা সহজ  


# `keyof` 

`keyof` হলো একটি keyword যা কোনো object type এর সবগুলো property নামকে একটি **union type** হিসেবে রিটার্ন করে।
একটি object এর key গুলোর নামকে আলাদা টাইপ হিসেবে পেতে `keyof` ব্যবহার হয়।

## `keyof` এর কাজ

- Dynamic property access কে নিরাপদ করা  
- Object এর valid key enforce করা  
- Generic utility function লেখার সময়  

## Simple Code Example ১

```ts
interface Person {
  name: string;
  age: number;
  job: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "job"
```


## Example ২

```ts
function getValue(obj: Person, key: keyof Person) {
  return obj[key];
}

const p: Person = { name: "Shuvo", age: 25, job: "Manager at toto-company" };

console.log(getValue(p, "name")); // "Shuvo"
```

এখানে `keyof Person` নিশ্চিত করেছে যে `key` হিসেবে শুধু `"name" | "age" | "job"` ব্যবহার করা যাবে।


