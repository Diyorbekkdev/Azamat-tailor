const tableRow = document.querySelector(".table-row");

function getTableRow({ id, customer, phone1, createdAt, endDate }) {
  return `
    <tr class="tb-tr">
      <td class="table-data   first-td">1</td>
      <td class="table-data">${customer}</td>
      <td class="table-data ">Kostyum-shim</td>
      <td class="table-data didline-td">${endDate}</td>
      <td class="table-data getOrder-td">${createdAt}</td>
      <td class="table-data ">100 $</td>
      <td class="table-data last-td"><img src="./assets/icons/more_vert_FILL0_wght400_GRAD0_opsz48.svg" alt=""></td>
    </tr>
  `;
}

function getData(tailor) {
  // let auto = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwibmJmIjoxNjg4MDUwNjI4LCJleHAiOjE2ODgxMzM0MjgsImlhdCI6MTY4ODA1MDYyOCwiaXNzIjoiaHR0cHM6Ly90YWlsb3JtYW4uYXBpIiwiYXVkIjoidGFpbG9ybWFuLmFwaSJ9.m98A9zsZU1Lp90AM-07n6k_kwFvVWD4d6LWRNE-BlHo";
  // let token = JSON.parse(localStorage.getItem("token"));
  // console.log(token);
  axios.post(
    "https://topkitob.com/api/orders/in_process",
    {},
    {
      Headers: {
        // 'accept': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwibmJmIjoxNjg4MDUwNjI4LCJleHAiOjE2ODgxMzM0MjgsImlhdCI6MTY4ODA1MDYyOCwiaXNzIjoiaHR0cHM6Ly90YWlsb3JtYW4uYXBpIiwiYXVkIjoidGFpbG9ybWFuLmFwaSJ9.m98A9zsZU1Lp90AM-07n6k_kwFvVWD4d6LWRNE-BlHo",
        // "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  ).then((res)=>{
    console.log(res);
  });
  let token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  axios
    .post(
      "https://topkitob.com/api/orders/in_process",
      {},
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res);
      const filteredCustomer = res.data.page.items;
      tableRow.innerHTML = "";
      filteredCustomer.map((el) => {
        const createdAt = new Date(el.createdAt).toLocaleDateString();
        const endDate = new Date(el.endDate).toLocaleDateString();

        tableRow.innerHTML += getTableRow(el);
      });
    });
}

getData();


