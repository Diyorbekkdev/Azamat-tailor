const tableRow = document.querySelector(".table-row");



function getTableRow({ id, name, phone1 ,}) {
  return `
    <tr class="tb-tr">
      <td class="table-data   first-td">1</td>
      <td class="table-data">Diyorbek aka</td>
      <td class="table-data ">Kostyum-shim</td>
      <td class="table-data didline-td">02 / 10/ 2023</td>
      <td class="table-data getOrder-td">25 / 06 / 2023</td>
      <td class="table-data ">100 $</td>
      <td class="table-data last-td"><img src="./assets/icons/more_vert_FILL0_wght400_GRAD0_opsz48.svg" alt=""></td>
    </tr>
  `;
}

function getData(tailor) {
  let token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  axios.post(
    "https://topkitob.com/api/orders/in_process",
    {},
    {
      Headers: {
        // 'accept': 'application/json',
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  ).then((res)=>{
    console.log(res);
  });
}

const users = [
  {
    userName: "Catherine",
    name: "Catherine Hintz",
    phone1: "+998901234567",
    phone2: "+998912345678",
    notes: "bruk",
  },
  {
    userName: "Itzel",
    name: "Itzel Murray",
    phone1: "+998912345678",
    phone2: "+998923456789",
    notes: "kastum",
  },
  {
    userName: "Julianne",
    name: "Julianne Jakubowski",
    phone1: "+998923456789",
    phone2: "+998934567890",
    notes: "jaket",
  },
  {
    userName: "Monica",
    name: "Monica Hyatt",
    phone1: "+998934567890",
    phone2: "+998945678901",
    notes: "bruk",
  },
  {
    userName: "Marjorie",
    name: "Marjorie Connelly",
    phone1: "+998945678901",
    phone2: "+998956789012",
    notes: "kastum",
  },
  {
    userName: "Cristobal",
    name: "Cristobal Quitzon",
    phone1: "+998956789012",
    phone2: "+998967890123",
    notes: "jaket",
  },
  {
    userName: "Danial",
    name: "Danial Kohler",
    phone1: "+998967890123",
    phone2: "+998978901234",
    notes: "bruk",
  },
  {
    userName: "Sheldon",
    name: "Sheldon Paucek",
    phone1: "+998978901234",
    phone2: "+998989012345",
    notes: "kastum",
  },
  {
    userName: "Dorian",
    name: "Dorian Brown",
    phone1: "+998989012345",
    phone2: "+998990123456",
    notes: "jaket",
  },
  {
    userName: "Candido",
    name: "Candido Toy",
    phone1: "+998990123456",
    phone2: "+998901234567",
    notes: "bruk",
  },
  {
    userName: "Delphine",
    name: "Delphine Olson",
    phone1: "+998901234567",
    phone2: "+998912345678",
    notes: "kastum",
  },
  {
    userName: "Yasmeen",
    name: "Yasmeen Gutkowski",
    phone1: "+998912345678",
    phone2: "+998923456789",
    notes: "jaket",
  },
  {
    userName: "Amelie",
    name: "Amelie Hirthe",
    phone1: "+998923456789",
    phone2: "+998934567890",
    notes: "bruk",
  },
  {
    userName: "Isobel",
    name: "Isobel Schinner",
    phone1: "+998934567890",
    phone2: "+998945678901",
    notes: "kastum",
  },
  {
    userName: "Leonard",
    name: "Leonard Sporer",
    phone1: "+998945678901",
    phone2: "+998956789012",
    notes: "jaket",
  },
  {
    userName: "Harmon",
    name: "Harmon Dicki",
    phone1: "+998956789012",
    phone2: "+998967890123",
    notes: "bruk",
  },
  {
    userName: "Abdulaziz",
    name: "Abdulaziz LikiLiki",
    phone1: "+998967890123",
    phone2: "+998978901234",
    notes: "kastum",
  },
  {
    userName: "Edwin",
    name: "Edwin King",
    phone1: "+998978901234",
    phone2: "+998989012345",
    notes: "jaket",
  },
  {
    userName: "Hunter",
    name: "Hunter Hartmann",
    phone1: "+998989012345",
    phone2: "+998990123456",
    notes: "bruk",
  },
  {
    userName: "Lavina",
    name: "Lavina Mertz",
    phone1: "+998990123456",
    phone2: "+998901234567",
    notes: "kastum",
  },
];

// for(let i = 0;i<users.length;i++){
//   axios.post("https://topkitob.com/api/customers", users[i], {
//     Headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

getData();
