const tableRow = document.querySelector(".table-row");

let axiosInstance = axios.create({
  baseURL: "https://topkitob.com/api/customers",
  timeout: 10000,
});

function getTableRow({ id, name, phone1 }) {
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

async function getData(tailor) {
  let tailorInfo = await axiosInstance.post("get", {
    Headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(tailorInfo.data.page.items);
}


// for(let i = 0;i<users.length;i++){
//   axios.post("https://topkitob.com/api/customers", users[i], {
//     Headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }
