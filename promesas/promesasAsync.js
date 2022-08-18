const showData = async () => {
  const json = await getData();

  const lectura = json.map((el) => el);
  console.log(lectura);
};

const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => json);
};

showData();
