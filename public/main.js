console.log("main.js是活的可以用");

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "./data.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log("加载成功！");
      console.log(request.response);
    } else {
      console.log("加载失败了！");
    }
  };
  request.send();
};
