const eventos = [
  "📌 1820 – Ampliación de las fronteras productivas; el interior patagónico permanece bajo control indígena.",
  "📌 1821-1824 – Avance de Martín Rodríguez aprovechando disputas intertribales.",
  "📌 1826-1836 – Llegada de grupos galeses a la Patagonia.",
  "📌 1833 – Campaña de Juan Manuel de Rosas hasta el Río Negro.",
  "📌 1845 – Chocorí fue reconocido como indio amigo.",
  "📌 1850 – Consolidación de la producción ovina; auge de la lana como bien exportable.",
  "📌 1865 – Arribo del velero Mimosa con colonos galeses al Chubut.",
  "📌 1870 – Sobrepastoreo en territorios pampeanos; la frontera se desplaza hacia el sur.",
  "📌 1875 – Fundación de escuelas e internados religiosos en Carmen de Patagones.",
  "📌 1876 – Ley de Inmigración y Colonización (Ley Avellaneda Nº 817).",
  "📌 1878 – Ley de Fronteras Nº 947 (Ley de Empréstito).",
  "📌 1878 – Ley de Premios Militares Nº 1628.",
  "📌 1879 – Campaña dirigida por Julio A. Roca.",
  "📌 1881 – Campaña al Nahuel Huapi.",
  "📌 1881 – Firma del tratado limítrofe con Chile.",
  "📌 1882 – Ley Nacional de Remates Públicos Nº 1265.",
  "📌 1883-1884 – Campaña a los Andes de la Patagonia.",
  "📌 1884 – Ley Nº 1532 de Organización de los Territorios Nacionales.",
  "📌 1884 – Subprefectura en Ushuaia.",
  "📌 1884 – Sanción de la Ley 1265 (“Ley del Hogar”) para la venta de tierras fiscales.",
  "📌 1884 – Primer sistema de riego: Canal de los Milicos (Río Negro).",
  "📌 1885 – Fundación de Río Gallegos.",
  "📌 1885 – Sayhueque fue el último cacique en rendirse.",
  "📌 1885 – Creación de colonias como la 16 de Octubre.",
  "📌 1885 – Presencia creciente de capitales británicos en la ganadería ovina.",
  "📌 1888 – El Ferrocarril Central del Chubut conecta el valle inferior con Puerto Madryn.",
  "📌 1891 – Ley de Poblamiento Nº 2875 (“Ley de Liquidación”).",
  "📌 1891 – Popper recibe tierras en Tierra del Fuego para explotación aurífera.",
  "📌 1894 – Código Rural sancionado.",
  "📌 1895 – Censo Nacional: gran mayoría de inmigrantes en la Patagonia son chilenos.",
  "📌 1899 – Gran inundación en el valle del Chubut.",
  "📌 1899 – Ferrocarril del Sud extiende líneas férreas en el Alto Valle.",
  "📌 1904 – Cambio de capital en Santa Cruz: de Puerto Santa Cruz a Río Gallegos.",
  "📌 1904 – Se inaugura el ramal ferroviario Viedma–Carmen de Patagones.",
  "📌 1907 – Decreto que otorga preferencia en adjudicación de tierras.",
  "📌 1908 – Ley de Fomento a los Territorios Nacionales.",
  "📌 1910 – Construcción de ramales ferroviarios; expansión del modelo agroexportador.",
  "📌 1912 – Ley Sáenz Peña de sufragio universal (no aplicable a Territorios Nacionales).",
  "📌 1912 – Obras de agua potable.",
  "📌 1918 – Exportación de carne congelada a Inglaterra.",
  "📌 1918 – Descubrimiento de los primeros yacimientos petroleros.",
  "📌 1920 – Huelga rural en estancias patagónicas.",
  "📌 1920 – Crisis de precios internacionales.",
  "📌 1922 – Creación de Yacimientos Petrolíferos Fiscales (YPF).",
  "📌 1924 – Ley Orgánica de los Territorios Nacionales: nuevos requisitos para extranjeros.",
  "📌 1924 – Reglamentación de consejos municipales subordinados a gobernadores.",
  "📌 1927 – Ley Nº 4121: regulaciones ganaderas.",
  "📌 1928-1930 – Reconversión productiva en el Alto Valle.",
  "📌 1934-1936 – Récord en exportación de frutas frescas.",
  "📌 1935 – Creación del organismo de control frutícola.",
  "📌 1940 – Aumento del turismo hacia la Patagonia.",
  "📌 1954 – Decreto Nº 21.139 sobre adjudicación de tierras.",
  "📌 1959 – Ley de Tierras: limitación de grandes latifundios.",
  "📌 1961 – Fundación de la Universidad Nacional de la Patagonia San Juan Bosco.",
  "📌 1990 – Tierra del Fuego se convierte en provincia."
];

let index = 0;
const card = document.getElementById("evento");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

function mostrarEvento() {
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = null;
  card.innerText = eventos[index];
}

anterior.addEventListener("click", () => {
  if (index > 0) index--;
  mostrarEvento();
});

siguiente.addEventListener("click", () => {
  if (index < eventos.length - 1) index++;
  mostrarEvento();
});

window.onload = mostrarEvento;
