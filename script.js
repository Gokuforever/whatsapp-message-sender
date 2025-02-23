function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const passcode = document.getElementById("passcode").value.trim();

  // Your predefined passcode for verification
  const correctPasscode = "1234"; // Change this as needed

  if (passcode !== correctPasscode) {
    alert("Incorrect Passcode! Please try again.");
    return;
  }

  // Get selected language
  const language = document.querySelector(
    'input[name="language"]:checked'
  ).value;

  // Check if inputs are valid
  if (!name || !amount || !phone) {
    alert("Please fill in all the details.");
    return;
  }

  // Marathi and Hindi messages
  const messages = {
    marathi: `${name} जी, आपला पाणी बिल ${amount} /- बाकी आहे! कृपया दोन दिवसांत जमा करा, अन्यथा तुमचे कनेक्शन कट होईल. संपूर्ण बिल भरल्यास १००% सूट मिळेल! BY TMC`,
    hindi: `${name} जी, आपका पानी बिल ${amount} /- बकाया है! कृपया 2 दिनों के अंदर जमा करें, अन्यथा आपका कनेक्शन कट जाएगा। पूरा बिल भरने पर 100% छूट मिलेगी! BY TMC`,
  };

  // Encode message for WhatsApp
  const message = encodeURIComponent(messages[language]);

  // Create WhatsApp URL
  const whatsappURL = `https://wa.me/${phone}?text=${message}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");
}
