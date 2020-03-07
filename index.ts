// interface Person {
//     name: string;
// }
// const person: Person = { name: 'Antonio' }

// console.log(person.name)

// //

// const message: string = 'hello world';
// console.log(message);

// // --

// const userAccount = {
//     name: "Kieron",
//     id: 0
// }

// // You can combine these to make larger, more complex
// // data-models.

// const pie = {
//     type: "Apple"
// }

// const purchaseOrder = {
//     owner: userAccount,
//     item: pie
// }

// function addOldSchool(x, y) {
//     return x + y;
// }


// const add1 = (x: any, y: any) => {
//     return x + y;
// };
// console.log(add1("1", 1));

// const add2 = (x: number, y: number): string => {
//     return `${x} - ${y}`;
// };

// const resultado: string = add2(1, 1);

// type Pessoa = { name: string }

// type Brasileiro = Pessoa;

// interface Argentino { name: string };


// interface Usuario {
//     nome: string
//     telefone?: {
//         ddd: string,
//         numero: string
//         operadora?: {
//             nome: string
//         }
//     }
// }

// const usuario: Usuario = { nome: 'João', telefone: { ddd: '12', numero: '12' } }

// console.log(usuario.telefone?.operadora?.nome || 'Nenhuma');

// const minhaLista: number[] = [];
// minhaLista.push(1)
// minhaLista.push(...[2, 3, 4, 5])
// console.log(minhaLista);

// const temdois = minhaLista.filter(x => x === 2);
// console.log(temdois);

