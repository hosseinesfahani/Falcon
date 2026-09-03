const data = [
    { id: 1, n: "شامپو نانو حرفه‌ای", c: "detailing", p: 680000, o: 790000, e: "🧴", t: "پرفروش" },
    { id: 2, n: "دستمال مایکروفایبر Premium", c: "detailing", p: 245000, o: null, e: "🧽", t: "جدید" },
    { id: 3, n: "شارژر فندکی فست شارژ", c: "accessory", p: 520000, o: 620000, e: "🔌", t: "تخفیف" },
    { id: 4, n: "خوشبوکننده خودرو", c: "accessory", p: 290000, o: null, e: "🌲", t: null },
    { id: 5, n: "واکس داشبورد", c: "interior", p: 390000, o: 450000, e: "✨", t: "ویژه" },
    { id: 6, n: "جارو شارژی خودرو", c: "tools", p: 1850000, o: 2100000, e: "🧹", t: "محبوب" },
    { id: 7, n: "پولیش بدنه حرفه‌ای", c: "detailing", p: 890000, o: null, e: "🫧", t: null },
    { id: 8, n: "نظم‌دهنده صندوق", c: "accessory", p: 760000, o: 850000, e: "📦", t: "تخفیف" }
]; let cart = []; const money = n => new Intl.NumberFormat("fa-IR").format(n) + " تومان";
function render(list = data) { products.innerHTML = list.map(x => `<article class="product"><div class="pimg">${x.t ? `<span class="tag">${x.t}</span>` : ""}${x.e}</div><div class="pinfo"><small>FALCONE</small><h3>${x.n}</h3><div class="price"><div><b>${money(x.p)}</b>${x.o ? `<del>${money(x.o)}</del>` : ""}</div><button onclick="add(${x.id})">+</button></div></div></article>`).join("") }
function add(id) { let x = data.find(a => a.id === id), q = cart.find(a => a.id === id); q ? q.q++ : cart.push({ ...x, q: 1 }); update(); cartOpen(true) }
function update() { count.textContent = cart.reduce((a, x) => a + x.q, 0); items.innerHTML = cart.length ? cart.map(x => `<div class="item"><span class="emo">${x.e}</span><div><b>${x.n}</b><small>${x.q} عدد · ${money(x.p * x.q)}</small></div><button onclick="removeItem(${x.id})">×</button></div>`).join("") : "<p>سبد خرید خالی است.</p>"; total.textContent = money(cart.reduce((a, x) => a + x.p * x.q, 0)) }
function removeItem(id) { cart = cart.filter(x => x.id !== id); update() }
function cartOpen(force) { drawer.classList.toggle("open", force === true ? !0 : !drawer.classList.contains("open")); shade.classList.toggle("open", drawer.classList.contains("open")) }
function filter(c, b) { if (b) { document.querySelectorAll(".filters button").forEach(x => x.classList.remove("sel")); b.classList.add("sel") } render(c === "all" ? data : data.filter(x => x.c === c)); document.querySelector("#shop").scrollIntoView({ behavior: "smooth" }) }
function bundle() { [1, 2, 7].forEach(x => add(x)) }
function search() { alert("جستجوی زنده محصولات را می‌توان در نسخه بعدی اضافه کرد.") }
function menu() { alert("منوی موبایل آماده توسعه است.") }
render();