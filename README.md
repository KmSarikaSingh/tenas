# tenas
Hosted Link-  https://kmsarikasingh.github.io/tenas/
# Day10HomeAssignment
This is a simple HTML and JavaScript code that changes the background color of the webpage when the button is clicked.
## HTML Code
The HTML code consists of a <div> element that contains a button. The button has an onclick event listener that calls the changeBackgroundColor() function when clicked.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day10Homework</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <button>Change Color</button>
    </div>
    <script src="index.js">
    </script>
</body>
</html>
```
## JavaScript Code
The JavaScript code consists of a single function called changeBackgroundColor(). This function changes the background color of the webpage by setting the backgroundColor property of the body element.
```
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
```
