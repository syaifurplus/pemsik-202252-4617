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
