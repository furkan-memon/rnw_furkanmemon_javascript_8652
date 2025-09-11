// // Created a Map to store students and their grades
// let students = new Map();

// //  Set() 
// console.log("=== set() ===");
// students.set("Alice", "A");
// students.set("Bob", "B+");
// students.set("Charlie", "A-");
// console.log("Initial Students Map:", students);

// //  Get()
// console.log("\n=== get() ===");
// console.log("Alice's grade:", students.get("Alice"));

// //  Has()
// console.log("\n=== has() ===");
// console.log("Is Bob in the list?", students.has("Bob"));
// console.log("Is David in the list?", students.has("David"));

// //  Delete()
// console.log("\n=== delete() ===");
// students.delete("Bob");
// console.log("After deleting Bob:", students);

// //  Keys()
// console.log("\n=== keys() ===");
// console.log("Student Names:");
// for (let name of students.keys()) {
//     console.log(name);
// }

// //  Values()
// console.log("\n=== values() ===");
// console.log("Grades:");
// for (let grade of students.values()) {
//     console.log(grade);
// }

// //  Entries
// console.log("\n=== entries() ===");
// console.log("Entries:");
// for (let [name, grade] of students.entries()) {
//     console.log(name, "=>", grade);
// }

// //  forEach()
// console.log("\n=== forEach() ===");
// students.forEach((grade, name) => {
//     console.log(`${name} has grade ${grade}`);
// });

// //  Clear
// console.log("\n=== clear() ===");
// students.clear();
// console.log("After clearing:", students);

// //