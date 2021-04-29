let count = document.body.children.length;
console.log(count);

for (let i = 0; i < count; i++) {
  console.log(document.body.children[i].nodeName);
  if (document.body.children[i].children.length > 0) {
    for (let j = 0; j < document.body.children[i].children.length; j++) {
      console.log(document.body.children[i].children[j].nodeName);
    }
  } else {
    console.log("Дочерних елементов нет");
  }
}
