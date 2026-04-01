function displayWord(response) {
  new Typewriter("#word", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateWord(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-instructions");
  let apiKey = "82b9bd6db39ddcc03a3e0fof4tf0adf4";
  let prompt = `User instruction: Provide one random, high-school level vocabulary word that is UNQIUE for the field of ${userInput}. Include a simple one-sentence definition. Your answer must include the word (using <strong>)and the definition. The word and definition must be written on separate lines using <br /> after the word. Avoid common terms like atom, cell or photosynthesis. Provide terms that are NOT commonly used.`;
  let context =
    "Act as a Senior High School Science teacher. You are building a 'Word of the Day' website for students.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let wordElement = document.querySelector("#word");
  wordElement.classList.remove("hidden");
  wordElement.innerHTML = `Generating a word...`;

  axios.get(apiUrl).then(displayWord);
}

let userInput = document.querySelector("#word-generator-form");
userInput.addEventListener("submit", generateWord);
