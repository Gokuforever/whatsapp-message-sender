function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const passcode = document.getElementById("passcode").value.trim();
  const language = document.querySelector(
    'input[name="language"]:checked'
  ).value;

  // Validate inputs
  if (!name || !mobile || !amount || !passcode) {
    alert("Please fill all fields.");
    return;
  }

  if (!/^\d{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (passcode !== "1234") {
    // Example passcode, change as needed
    alert("Incorrect passcode.");
    return;
  }

  // Message templates
  const messages = {
    marathi: `${name} जी, तुमचे पाणी बिल ${amount} /- बाकी आहे! कृपया दोन दिवसांत बिल भरा. अन्यथा कनेक्शन कापले जाईल.`,
    hindi: `${name} जी, आपका पानी बिल ${amount} /- बकाया है! कृपया दो दिनों के भीतर जमा करें, अन्यथा कनेक्शन काट दिया जाएगा।`,
  };

  const message = encodeURIComponent(messages[language]);
  const whatsappURL = `https://wa.me/91${mobile}?text=${message}`;

  window.open(whatsappURL, "_blank");
}
