function goToNextPage() {
  const name = document.getElementById("username").value.trim();
  const number = document.getElementById("number").value.trim();
  

 
  if (name !== "" && !isNaN(number) && number.length === 4) {
    window.location.href = `index.html?username=${encodeURIComponent(name)}&number=${encodeURIComponent(number)}`;
  } else {
    alert("--- Enter a valid name and 4-digit number, please! ---");
  }
  
}
