$ = document;

// Attendre chargement de la page HTML
$.addEventListener("DOMContentLoaded", () => {
  // console.log("document loaded");
  // attendre clic sur bouton submit
  $.querySelector("#contactForm").addEventListener("submit", async (e) => {
    // Ne pas effacer les saisies lors du clique sur envoyer
    e.preventDefault();
    // TODO =====> Vérifier les saisies

    // Sauvegarder les saisies dans un objet
    const data = {
      firstName: $.querySelector("#firstname").value,
      lastName: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };
    // Envoyer au serveur
    const response = await axios.post(
      "https://frmi-form-backend.herokuapp.com/user/form",
      data
    );
    res.json(response);
    alert("Merci pour votre formulaire");
  });
});
