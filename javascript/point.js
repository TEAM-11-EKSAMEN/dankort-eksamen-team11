const supabaseUrl = "https://iassvoylesrurfkrboat.supabase.co";

const supabaseKey = "sb_publishable_bMp1kch4RmXiHdn8n5JE5A_EUfdaCql";

const client = supabase.createClient(supabaseUrl, supabaseKey);

async function getOffers() {
  const { data, error } = await client.from("dankort_extra").select("*");

  if (error) {
    console.error("FEJL:", error);
    return;
  }

  console.log(data);

  const container = document.getElementById("offers-container");

  data.forEach((offer) => {
    container.innerHTML += `

      <article class="offer-card">

        <img
          class="offer-image"
          src="${offer.img1}"
          alt="${offer.name}"
        >

        <div class="offer-name">
          ${offer.name}
        </div>

        <div class="offer-content">

          <h2 class="offer-ticket">
            ${offer.billet}
          </h2>

          <p class="offer-points">
            ${offer.point} point
          </p>

          <button class="red-cta offer-btn">
            Se mere
          </button>

        </div>

      </article>

    `;
  });
}

getOffers();
