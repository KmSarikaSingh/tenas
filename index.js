var Color = [
    "green",
    "grey",
    "black",
    "olive",
    "blue",
    "yellow",
    "purple",
    "orange",
    "indigo",
    "coral",
  ];
  var index = 0 ;
  var div = document.querySelector("div");
  const button = document.querySelector("button");
  button.addEventListener("click", function() {
      if (index === Color.length) {
          index = 0;
    }
          div.style.backgroundColor = Color[index];
          index++;
  })