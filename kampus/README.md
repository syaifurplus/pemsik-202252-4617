1. Buka vscode
2. Buka terminal vscode
3. Pilih yang git bash

4. Install React dengan nama projek "kampus" dengan ketik:

- npm create vite@latest kampus -- --template react

5. hapus yang tidak terpakai

- Hapus file:
  - `App.css`
  - `App.jsx`
  - `index.css`
- Hapus folder `assets/` jika ada.

6. Buat default file App.jsx dengan code
   function App(){
   return <h1>Halo dek</h1>
   }

export default App;

7. Latihan 1

- tampilkan 3 artikel

8. Latihan 2

- tampilkan 3 data mahasiswa,
  gunakan array of object

Install Tailwind

1. npm install tailwindcss @tailwindcss/vite
2. masukkan ke vite.config.js
   ``
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
   plugins: [
   tailwindcss(),
   ],
   })
   ``

3. Buat file App.cs, masukkan
   `  @import "tailwindcss";`
4. Masukkan ke main.jsx
   `  import './App.css'`
5. Coba dengan masukkan ke App.jsx
   ``
   <h1 class="text-3xl font-bold underline">
     Hello world!
   </h1>

   ``

Atomic Design = membagi komponen agar reusable

Silahkan Buat semua file / folder ini dan isi dari notion

src/
├── Pages/
│ ├── Admin/
│ └── Auth/
│ ├── Login/
│ │ └── Login.jsx
│ ├── Components/
│ │ ├── Button.jsx
│ │ ├── Card.jsx
│ │ ├── Form.jsx
│ │ ├── Heading.jsx
│ │ ├── Input.jsx
│ │ ├── Label.jsx
│ │ └── Link.jsx
│ └── AuthLayout.jsx
├── App.css
├── App.jsx
└── main.jsx

Lanjutkan Halaman Admin, buat file folder dan isi dari
notion

src/
├── Pages/
│ └── Admin/
│ ├──Mahasiswa/
│ │ └── Mahasiswa.jsx
│ ├── Components/
│ │ ├── Sidebar.jsx
│ │ ├── Header.jsx
│ │ └── Footer.jsx
│ │ └── Card.jsx (Samakan dengan Auth)
│ │ └── Heading.jsx (Samakan dengan Auth)
│ │ └── Button.jsx (Samakan dengan Auth)
│ └── AdminLayout.jsx

===== Perkuliahan 7

1. Install react router dom, untuk memberi navigasi website pakai url
   npm install react-router-dom
2. Masukkan main.jsx yang baru dengan penerapan router dom
3. Sesuaikan AuthLayout.jsx agar pake outlet
4. Sesuaikan AdminLayout.jsx agar pake outlet
5. Buat ProtectedRoute.jsx di components milik admin
6. Buat file dan isi di src/Data/Dummy.js
7. Sesuaikan isian baru di file Login.jsx
8. Sesuaikan isian baru di file Header.jsx
9. Sesuaikan isian baru di file Sidebar.jsx
10. Buat file baru dan isi di Admin/Dashboard/Dashboard.jsx
11. Sesuaikan isian baru di file Mahasiswa.jsx
12. Buat file baru dan isi di Pages/Error/PageNotFound.jsx
13. Buat file baru dan isi di Admin/MahasiswaDetail/MahasiswaDetail.jsx

==== Perkuliahan 8

1. Gunakan hooks useNavigate untuk Login
   import { useNavigate } from "react-router-dom";
   const navigate = useNavigate();
   navigate("/admin");
2. Gunakan hooks useNavigate untuk Button Mahasiswa ke detial
   import { useNavigate } from "react-router-dom";
   const navigate = useNavigate();
   <Button
   onClick={() => navigate(`/admin/mahasiswa/${mhs.nim}`)}
   > Detail
   > </Button>
3. Gunakan hooks useParams untuk ambil paramater di url
   import { useParams } from "react-router-dom";
   const { nim } = useParams();
4. Gunakan hooks useState di halaman mahasiswa untuk data manipulasi
   import { useState } from "react";

   // masukkan diluar return
   const [mahasiswa, setMahasiswa] = useState([
   mahasiswaList
   ]);

const [form, setForm] = useState({ nim: "", nama: "" });

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const addMahasiswa = (newData) => {
setMahasiswa([...mahasiswa, newData]);
};

const updateMahasiswa = (nim, newData) => {
const updated = mahasiswa.map((mhs) =>
mhs.nim === nim ? {...mhs, ...newData} : mhs
);
setMahasiswa(updated);
};

const deleteMahasiswa = (nim) => {
const filtered = mahasiswa.filter((mhs) => mhs.nim !== nim);
setMahasiswa(filtered);
}

// rubah table agar panggil state

  <tbody>
            {mahasiswa.map((mhs, index) => (
5. Tambahkan setelah komponen UI card untuk komponen UI modal
6. Tambahkan function handleSubmit, state isModalOpen, state isEdit dan function openAddModal
7. Sesuaikan komponen Input.jsx dan Label.jsx yang ada di Admin dan Auth
8. Tambahkan / perbarui yang baru untuk function handleEdit, handleSubmbit, handleDelete
9. Sesuaikan Button edit dan hapus agar pakai handle yang sesuai
10. Lanjutkan dengan sesuaikan Login.jsx
11. Terapkan hooks useEffect di Mahasiswa.jsx untuk load data langsung

=== Perkuliahan 9

1. Buat file file yang dibutuhkan sehingga menjadi:
   Pages/Admin/Mahasiswa/
   ├── Mahasiswa.jsx // Komponen utama: pusat state
   ├── MahasiswaTable.jsx // Komponen tabel
   └── MahasiswaModal.jsx // Komponen modal form tambah/edit

2. Isi dengan ambil dari Mahasiswa.jsx untuk MahasiswaTable.jsx dan MahasiswaModal.jsx, atau bisa mengikuti dari kulino

3. Sesuaikan (hapus dan tambahkan code) Mahasiswa.jsx agar menggunakan MahasiswaTable.jsx dan MahasiswaModal.jsx

== Perkuliahan 10

1. Install di projek kalian
   npm install sweetalert2 react-hot-toast
2. Konfigurasi react-hot-toast di main.jsx
3. Buat folder Helpers di
   Utils/Helpers/
4. Buat file dan isi untuk
   SwalHelpers.jsx
   ToastHelpers.jsx
5. Implementasi di Login.jsx untuk handleSubmit
6. Implementasi di Mahasiswa.jsx untuk handleDelete dan handleSubmit
7. Implementasi Logout di Header.jsx untuk handleLogout

=== Perkuliahan 11

1. Install
   npm install json-server
2. buat 3 file dan isi setiap filenya
   db/mahasiswa.json
   db.json
   merge-json.cjs
3. Masukkan di package.json untuk key scripts
   "serve": "node merge-json.cjs && json-server --watch db.json --port 3001"
4. jalankan untuk memulai backend json
   npm run serve
