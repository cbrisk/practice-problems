import fetch from "../util/fetch-fill";
import URI from "urijs";

// /records endpoint
window.path = "http://localhost:3000/records";

async function retrieve(options) {
  const page = options && options.page ? options.page : 1;
  const colors = options && options.colors ? options.colors : ["red", "brown", "blue", "yellow", "green"];
  const offset = page === 1 ? 0 : (page - 1) * 10;

  const url = URI.build({
    path: window.path,
    query: URI.buildQuery({
      limit: 11,
      offset: offset,
      "color[]": colors
    })
  });

  let data = await getData(url)
    .then(recieved => {
      return recieved;
    })
    .catch(error => {
      console.log("An error occured");
    });

  const previousPage = page > 1 ? page - 1 : null;
  const nextPage = data.length === 11 ? page + 1 : null;

  const obj = {
    ids: [],
    open: [],
    closedPrimaryCount: 0,
    previousPage,
    nextPage
  }

  if (data && data.length === 11) {
    data.pop();
  }

  const primaryColors = ["red", "blue", "yellow"];

  for (let i = 0; i < data.length; i++) {
    obj.ids.push(data[i].id);
    data[i].primary = primaryColors.indexOf(data[i].color) !== -1 ? true : false;
    if (data[i].disposition === "open") {
      obj.open.push(data[i]);
    }
    if (data[i].primary && data[i].disposition === "closed") {
      obj.closedPrimaryCount++;
    }
  }
  return Promise.resolve(obj);
}

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error;
    }
    const json = await response.json();
    return json;
  } catch {
    console.log("An error occured");
  }
}

export default retrieve;
