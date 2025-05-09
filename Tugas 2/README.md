MakingGit Repository

Deskripsi

Repository MakingGit dibuat untuk mendemonstrasikan cara kerja Git dan GitHub, termasuk pembuatan branch, commit, dan pull request.

Langkah-langkah

Berikut adalah langkah-langkah yang dilakukan dalam repository ini:

1. Membuat Repository

Saya membuat repository bernama MakingGit di GitHub dengan perintah berikut:

Inisialisasi repository baru di lokal

mkdir MakingGit
cd MakingGit
git init

git remote add origin https://github.com/username/MakingGit.git

2. Membuat dan Berpindah ke Branch "Made in Heaven"

Saya membuat branch baru bernama Made in Heaven dan berpindah ke branch tersebut:

git checkout -b "Made in Heaven"

3. Melakukan Perubahan dan Commit

Saya menambahkan beberapa file atau mengedit file dalam branch ini, lalu melakukan commit:

echo "# Project MakingGit" > README.md
git add README.md
git commit -m "Menambahkan README.md di branch Made in Heaven"

4. Mendorong Branch ke Repository Remote

Saya mengunggah branch Made in Heaven ke repository di GitHub:

git push origin Made in Heaven

5. Membuat Pull Request

Setelah branch Made in Heaven berhasil di-push, saya membuat pull request (PR) melalui GitHub dengan langkah berikut:

Buka repository MakingGit di GitHub.

Pilih tab Pull requests.

Klik tombol New Pull Request.

Pilih branch Made in Heaven sebagai source branch dan main sebagai target branch.

Klik Create Pull Request.

Tambahkan deskripsi dan klik Submit.

6. Menggabungkan Pull Request ke Branch Main

Setelah pull request dibuat dan ditinjau, saya melakukan merge PR ke branch main dengan langkah berikut:

git checkout main
git merge Made in Heaven
git push origin main

Atau bisa dilakukan langsung di GitHub dengan menekan tombol Merge Pull Request.

Kesimpulan

Dengan mengikuti langkah-langkah di atas, saya berhasil membuat repository MakingGit, membuat branch Made in Heaven, melakukan perubahan, membuat pull request, dan menggabungkannya ke branch main. Ini adalah dasar dari kolaborasi dalam pengembangan perangkat lunak menggunakan Git dan GitHub.
