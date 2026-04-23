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
