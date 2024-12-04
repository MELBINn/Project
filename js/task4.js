const textElement = document.getElementById("text");
const button = document.getElementById("changeTextButton");
const newText = document.getElementById("TextButton");
const heading = document.getElementById("heading");
const link = document.getElementById('myLink');

// Changing content and styles
button.addEventListener("click", () => {
  textElement.textContent = "Text Changed!";
  textElement.style.color = "red";
  textElement.classList.add("highlight");
});
newText.addEventListener("click", () => {
  console.log("clicked");
});

// Print the inner text of the h1 tag to the console
console.log(heading.innerText);

  // Get all paragraphs with the class "text"
  const paragraphs = document.querySelectorAll('.text');

  // Loop through each paragraph and log its text using foreach for mapping nodelist
  paragraphs.forEach(paragraph => {
      console.log(paragraph.innerText);
  });
 
  document.getElementById('output').innerText = link.href;
