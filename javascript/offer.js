// URL til database
const supabaseUrl = "https://iassvoylesrurfkrboat.supabase.co";
// API nøgle
const supabaseKey = "sb_publishable_bMp1kch4RmXiHdn8n5JE5A_EUfdaCql";

// opretter forbindels til Supabase
const client = supabase.createClient(supabaseUrl, supabaseKey);

// henter id fra URL'en og læser URL parametrene
const params = new URLSearchParams(window.location.search);

// her henter selve id'et fra URL'en
const id = params.get("id");

// henter specifikke data fra Supabase
async function getOffer() {
  //  hvor id'et i databasen matcher id'et i URL'en, så den henter den rigtige række fra databasen
  const { data, error } = await client
    .from("dankort_extra")
    .select("*")
    .eq("id", id)
    .single();

  // hvis der er fejl
  if (error) {
    // viser fejl
    console.error(error);
    return;
  }

  // sætter billeder ind fra data
  document.getElementById("img1").src = data.img1;
  //til mobil layout
  document.getElementById("img2-mobile").src = data.img2;
  //til desktop layout
  document.getElementById("img2-desktop").src = data.img2;

  // Indsætter alt dataen fra databasen i de rigtige elementer på siden
  document.getElementById("name").textContent = data.name;
  document.getElementById("header").textContent = data.header;
  document.getElementById("info").textContent = data.info;
  document.getElementById("fordel").textContent = data.fordel;
  document.getElementById("praktisk").textContent = data.praktisk;
  document.getElementById("point").textContent = data.point + " point";
  document.getElementById("tilbud").textContent = data.tilbud;
}

// får funktionen til at køre når siden indlæses
getOffer();
