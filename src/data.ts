export interface FFAccount {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  tier: "Grandmaster" | "Heroic" | "Diamond" | "Platinum" | "Gold";
  evoGuns: string[];
  vaultHighlights: string[];
  loginMethod: "Facebook" | "Google" | "VK" | "Huawei";
  status: "Tersedia" | "Terjual";
  badgeCount: number;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  review: string;
  accountBought: string;
  status: "Verified Buyer" | "Fast Response" | "Recommended";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const accountsData: FFAccount[] = [
  {
    id: "FF-001",
    title: "Akun Sultan Evo Gun Cobra Max",
    price: 450000,
    originalPrice: 650000,
    tier: "Heroic",
    evoGuns: ["MP40 Predatory Cobra (Lv.7)", "M1014 Green Flame Draco (Lv.5)", "AK47 Blue Flame Draco (Lv.4)"],
    vaultHighlights: ["Bundle Cobra Male Full Set", "Sepatu Jordan Red", "Tas Kelinci Legend", "Emote Booyah + Cobra"],
    loginMethod: "Google",
    status: "Tersedia",
    badgeCount: 280,
    description: "Akun rawatan pribadi sejak Season 12. Vault melimpah ruah, koleksi bundle kolaborasi lengkap. Spesifikasi Evo Gun sangat tinggi, siap buat pamer lobi!",
    image: "https://picsum.photos/seed/ff001/600/400"
  },
  {
    id: "FF-002",
    title: "Akun Old Season 8 Tas Kelinci",
    price: 320000,
    tier: "Diamond",
    evoGuns: ["SCAR Megalodon Alpha (Lv.4)"],
    vaultHighlights: ["Tas Kelinci Kuning Old", "Bundle Alok Street", "Skins Senjata Legend", "Emote Duduk Takhta"],
    loginMethod: "Facebook",
    status: "Tersedia",
    badgeCount: 150,
    description: "Akun old bernostalgia tinggi dengan aksesoris legendaris Tas Kelinci. Cocok banget buat yang pengen keliatan senior di medan pertempuran.",
    image: "https://picsum.photos/seed/ff002/600/400"
  },
  {
    id: "FF-003",
    title: "Akun Semi-Sultan Budget Pelajar",
    price: 150000,
    originalPrice: 220000,
    tier: "Heroic",
    evoGuns: ["XM8 Destiny Guardian (Lv.3)"],
    vaultHighlights: ["Bundle Letda Hyper", "Skin Kendaraan Lamborghini", "Parasut Elite Pass S30"],
    loginMethod: "Google",
    status: "Tersedia",
    badgeCount: 190,
    description: "Edisi hemat namun gahar. Sudah open beberapa Evo Gun dasar, rank lancar di Heroic, win rate memukau. Sangat direkomendasikan untuk player baru.",
    image: "https://picsum.photos/seed/ff003/600/400"
  },
  {
    id: "FF-004",
    title: "Akun Grandmaster Tier Elite Season Baru",
    price: 750000,
    originalPrice: 950000,
    tier: "Grandmaster",
    evoGuns: ["MP40 Predatory Cobra (Lv.7)", "M1887 Rapper Underworld (Full)"],
    vaultHighlights: ["Full Set Bundle Hip Hop", "Masker Letda", "Emote Taunting VIP"],
    loginMethod: "Google",
    status: "Terjual",
    badgeCount: 420,
    description: "Akun tier tertinggi saat ini. MMR tinggi, matchmaking cepat ketemu pro player. Koleksi item lengkap, status akun sangat bersih dari cheat/banned.",
    image: "https://picsum.photos/seed/ff004/600/400"
  },
  {
    id: "FF-005",
    title: "Akun Vault Rapi & Elite Pass Season 15-20",
    price: 280000,
    tier: "Diamond",
    evoGuns: ["M1014 Green Flame Draco (Lv.4)"],
    vaultHighlights: ["Elite Pass S15 Full", "Elite Pass S16 Full", "Emote Salto", "Gloowall Keren"],
    loginMethod: "Facebook",
    status: "Terjual",
    badgeCount: 310,
    description: "Koleksi Elite Pass berurutan yang sangat rapi. Akun amanah dari pemilik tangan pertama. Sangat terawat tanpa minus data.",
    image: "https://picsum.photos/seed/ff005/600/400"
  },
  {
    id: "FF-006",
    title: "Akun Sultan Murah MP40 Cobra Max + AK Naga",
    price: 520000,
    tier: "Heroic",
    evoGuns: ["MP40 Predatory Cobra (Lv.7)", "AK47 Blue Flame Draco (Lv.6)"],
    vaultHighlights: ["Bundle Criminal Merah", "Sepatu Jordan Biru", "Emote Tepuk Tangan"],
    loginMethod: "Facebook",
    status: "Tersedia",
    description: "Kombinasi dua Evo Gun terfavorit (MP40 Cobra & AK Naga). Vault dipenuhi skin kolaborasi kece. Harga bersahabat dengan spek dewa.",
    badgeCount: 220,
    image: "https://picsum.photos/seed/ff006/600/400"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "T-001",
    name: "Rian Hidayat",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rian",
    rating: 5,
    date: "1 minggu yang lalu",
    review: "Awalnya sempet ragu karena harganya murah, pas transaksi dipandu sama Mas Elvin ramah banget. Gak sampe 5 menit akun langsung diamankan ke email baru saya. 100% amanah!",
    accountBought: "Akun Old Season 8 Tas Kelinci",
    status: "Verified Buyer"
  },
  {
    id: "T-002",
    name: "Fadhil Pratama",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fadhil",
    rating: 5,
    date: "3 hari yang lalu",
    review: "Pelayanannya jos gandos. Mas Elvin biarpun masih anak SMK tapi profesionalnya ngalahin admin-admin store besar. Proses ganti data dibantu tuntas tas tas. Recomended seller!",
    accountBought: "Akun Semi-Sultan Budget Pelajar",
    status: "Fast Response"
  },
  {
    id: "T-003",
    name: "Yanto FF",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yanto",
    rating: 5,
    date: "2 minggu yang lalu",
    review: "Baru pertama kali beli akun di internet gak kena tipu. Di Elvin Store bener-bener diproses secepat kilat. Nyaman banget transaksinya. Sukses terus bisnisnya dek!",
    accountBought: "Akun Sultan Evo Gun Cobra Max",
    status: "Recommended"
  },
  {
    id: "T-004",
    name: "Aditya",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
    rating: 5,
    date: "1 bulan yang lalu",
    review: "Akun Grandmaster-nya mantap bener. Sesuai deskripsi no minus, dapet bonus tips mengamankan akun dari hackback juga. Mantap jiwa!",
    accountBought: "Akun Grandmaster Tier Elite Season Baru",
    status: "Verified Buyer"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "Q-1",
    question: "Apakah transaksi di Elvin Store 100% aman?",
    answer: "Tentu saja! Kami menjamin 100% keamanan setiap transaksi. Seluruh akun yang dijual telah melalui proses verifikasi kepemilikan dan dibersihkan dari ikatan pihak ketiga yang berisiko. Kami juga memandu proses pemindahan data hingga selesai demi kenyamanan bersama."
  },
  {
    id: "Q-2",
    question: "Kenapa harganya bisa lebih murah dibandingkan toko lain?",
    answer: "Sebagai pelajar SMK yang berfokus di dunia gamingpreneur, kami mengambil margin keuntungan sewajarnya untuk membantu sesama pemain Free Fire mendapatkan akun impian. Kami juga mendapatkan stok akun langsung dari tangan pertama dengan harga miring."
  },
  {
    id: "Q-3",
    question: "Bagaimana proses setelah saya melakukan pembayaran?",
    answer: "Setelah pembayaran berhasil dikonfirmasi, kami akan menghubungi Anda melalui WhatsApp atau Instagram untuk melakukan proses serah terima akun. Anda akan diberikan detail akun dan dipandu mengganti email, password, nomor telepon, dan mengaktifkan Verifikasi 2 Langkah (2FA) agar akun aman sepenuhnya."
  },
  {
    id: "Q-4",
    question: "Metode pembayaran apa saja yang diterima?",
    answer: "Kami menerima berbagai metode pembayaran digital yang mudah bagi pelajar maupun umum, termasuk E-Wallet (DANA, OVO, GoPay, ShopeePay), Transfer Bank (BRI, BCA, Mandiri), dan pembayaran Alfamart/Indomaret melalui QRIS."
  }
];
