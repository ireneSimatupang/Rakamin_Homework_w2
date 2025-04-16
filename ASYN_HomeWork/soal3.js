// 1. Import module "fs"
const fs = require('fs');

// 2. Baca file data.json 
fs.readFile('data.json', 'utf8', (err, jsonString) => {
    if(err) {
        console.log("Gagal membaca file:", err);
        return;
    }
    try {

        
        // 3. Ubah string JSON menjadi Object dengan .parse
        const data = JSON.parse(jsonString);

        // 4. Ubah isi datanya 
        data[0].first_name = "Dibyo";

        // 5. Ubah kembali ke string JSON
        const newJsonString = JSON.stringify(data, null, 2);

        // 6. Simpan kembali ke file data.json
        fs.writeFile('data.json', newJsonString, (err) => {
        if (err) {
            console.log("Gagal menyimpan file:", err);
        } else {
            console.log("Berhasil update data.json");
        }
        });

    } catch (err) {
        console.log("Gagal parse JSON:", err);
    }
});
