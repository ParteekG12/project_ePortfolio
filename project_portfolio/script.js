// document.getElementById("contact-form").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;
  
//     // Display a response message
//     const response = document.getElementById("form-response");
//     response.textContent = `Thank you, ${name}! Your message has been sent.`;
//     response.style.color = "green";
  
//     // Clear the form
//     event.target.reset();
//   });

let skill = document.querySelector(".about_list_skill");
let education = document.querySelector(".about_list_education");
let experience = document.querySelector(".about_list_experience");

let skill_content = document.querySelector(".skill");
let education_content = document.querySelector(".education");
let experience_content = document.querySelector(".experience");

function underline(a, b, c) {        // a to show and b,c to hide
  a.classList.add("active");
  b.classList.remove("active");
  c.classList.remove("active");
}

function content (a, b, c) {         // a to show and b,c to hide 
  a.classList.remove("hide");
  b.classList.add("hide");
  c.classList.add("hide");
}

skill.addEventListener("click", () => {
  underline(skill, education, experience);
  content(skill_content, education_content, experience_content);
});

education.addEventListener("click", () => {
  underline(education, skill, experience);
  content(education_content, skill_content, experience_content);
});

experience.addEventListener("click", () => {
  underline(experience, skill, education);
  content(experience_content, skill_content, education_content);
});