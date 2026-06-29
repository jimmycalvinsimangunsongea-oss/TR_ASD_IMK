/* === DATA MENU === */

const menuData = [
  {
    name: "Espresso Gayo",
    desc: "Single origin Aceh Tengah. Bold, asam bersih, sedikit karamel.",
    price: 28000,
    emoji: "🔥",
    badge: "hot",
    cat: "kopi",
  },

  {
    name: "Pour Over Flores",
    desc: "Floral, fruity, aftertaste coklat gelap. Racikan V60 15 menit.",
    price: 35000,
    emoji: "☕",
    badge: "fav",
    cat: "kopi",
  },

  {
    name: "Cold Brew Toraja",
    desc: "Direndam 18 jam, body tebal, manis alami tanpa gula.",
    price: 32000,
    emoji: "🧊",
    badge: null,
    cat: "kopi",
  },

  {
    name: "Kopi Susu Aren",
    desc: "Espresso + susu segar + gula aren lokal. Best seller kami.",
    price: 30000,
    emoji: "🥛",
    badge: "fav",
    cat: "kopi",
  },

  {
    name: "Matcha Latte",
    desc: "Matcha grade ceremonial Jepang, susu oat creamy.",
    price: 33000,
    emoji: "🍵",
    badge: "new",
    cat: "non-kopi",
  },

  {
    name: "Coklat Flores",
    desc: "Dark chocolate 72% dari Flores, hangat & kaya rasa.",
    price: 30000,
    emoji: "🍫",
    badge: null,
    cat: "non-kopi",
  },

  {
    name: "Teh Pandan Latte",
    desc: "Teh hijau lokal + pandan segar + susu. Unik & menyegarkan.",
    price: 28000,
    emoji: "🌿",
    badge: "new",
    cat: "non-kopi",
  },

  {
    name: "Croissant Butter",
    desc: "Dipanggang tiap pagi, renyah di luar lembut di dalam.",
    price: 22000,
    emoji: "🥐",
    badge: null,
    cat: "makanan",
  },

  {
    name: "Avocado Toast",
    desc: "Sourdough lokal + alpukat + telur poach + bumbu rempah.",
    price: 42000,
    emoji: "🥑",
    badge: "hot",
    cat: "makanan",
  },

  {
    name: "Banana Cake",
    desc: "Pisang cavendish lokal, panggang lambat, lembut sempurna.",
    price: 25000,
    emoji: "🍰",
    badge: null,
    cat: "makanan",
  },
];

/* === RENDER MENU === */

function renderMenu(filter = "all") {
  const grid = document.getElementById("menuGrid");

  const filtered =
    filter === "all" ? menuData : menuData.filter((m) => m.cat === filter);

  grid.innerHTML = filtered
    .map(
      (m) => `


<div class="menu-card" data-cat="${m.cat}">


<div class="menu-card-img">


${m.emoji}


${
  m.badge
    ? `
<span class="menu-badge badge-${m.badge}">
${
  m.badge === "hot"
    ? "🔥 Terlaris"
    : m.badge === "new"
      ? "✨ Baru"
      : "⭐ Favorit"
}
</span>
`
    : ""
}


</div>



<div class="menu-card-body">


<div class="menu-card-name">
${m.name}
</div>


<div class="menu-card-desc">
${m.desc}
</div>



<div class="menu-card-footer">


<span class="menu-price">
Rp ${m.price.toLocaleString("id-ID")}
</span>



<button 
class="btn-add"
onclick="addToCart('${m.name}')">
+
</button>



</div>


</div>


</div>



`,
    )
    .join("");
}

renderMenu();

/* === FILTER MENU === */

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    renderMenu(btn.dataset.filter);
  });
});

/* === CART === */

function addToCart(name) {
  const toast = document.getElementById("cart-toast");

  toast.textContent = `✓ ${name} ditambahkan`;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

/* === RESERVASI === */

function submitReservasi() {
  const nama = document.getElementById("nama").value.trim();

  const telp = document.getElementById("telp").value.trim();

  const tgl = document.getElementById("tgl").value;

  const jam = document.getElementById("jam").value;

  if (!nama || !telp || !tgl || !jam) {
    alert("Mohon lengkapi semua field yang diperlukan.");

    return;
  }

  const msg = document.getElementById("form-msg");

  msg.style.display = "block";

  msg.scrollIntoView({
    behavior: "smooth",

    block: "nearest",
  });
}

/* === NAV SCROLL === */

window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 60);
});

/* === HAMBURGER === */

document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}

/* === FADE IN === */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

/* === SET MIN DATE === */

document.getElementById("tgl").min = new Date().toISOString().split("T")[0];
