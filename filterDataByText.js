function filterDataByText(data, text, field) {
  let respArray = [];
  data.map((e) => {
    if (e[field].indexOf(text) > -1) {
      respArray.push(e);
    }
    else {
      return;
    }
  });
  return respArray;
}

export default filterDataByText;
