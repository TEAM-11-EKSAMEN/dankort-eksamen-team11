// URL til supabase database
const supabaseUrl = "https://iassvoylesrurfkrboat.supabase.co";

// API nøgle som giver adgang til databasen
const supabaseKey = "sb_publishable_bMp1kch4RmXiHdn8n5JE5A_EUfdaCql";

// opretter forbindelse til supabase
const client = supabase.createClient(supabaseUrl, supabaseKey);

// henter data fra databasen
async function getOffers() {
  // henter alt data fra vores tabell "dankort_extra"
  const { data, error } = await client.from("dankort_extra").select("*");

  // hvis der sker en fejl
  if (error) {
    // vises fejl i console
    console.error("FEJL:", error);

    return;
  }

  // vises data i console
  console.log(data);

  // finder den container i HTML hvor cards skal sættes ind
  const container = document.querySelector(".cards-container");

  // går igennem hvert tilbud fra databasen
  data.forEach((offer) => {
    // tilføjer card ind i HTML'en med html
    container.innerHTML += `

      <!-- link til offer side -->
      <a
        href="offer.html?id=${offer.id}"
        class="link-to-offer"
      >

        <!-- selve cardet -->
        <article class="card">
        <!-- data fra databasen -->

          <!-- billede -->

          <img
            class="img-offer"
            src="${offer.img1}"
            alt="${offer.name}"
          >

          <!-- navn øverst i højre hjørne -->

          <div class="name-text">
            ${offer.name}
          </div>

          <!-- nederste del af sorte boks -->

          <div class="lower-part-box">

            <!-- øverste del af boks med billet og point -->

            <div class="upper-part-box">
              <h2 class="billet-text">
                ${offer.billet}
              </h2>
              <p class="points-text">
                ${offer.point} point
              </p>
            </div>

            <!-- Knap -->

            <button class="red-cta offer-btn">
              Se mere
            </button>

          </div>

        </article>

      </a>

    `;
  });
}

// kører funktionen når siden loader
getOffers();
