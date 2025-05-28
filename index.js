const form = document.getElementById("parent-form");
const table = document.getElementById("table-content");

const list_data = [];
let form_data = {};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    list_data.push(form_data);

    let number = 1;
    let row = "";
    list_data.forEach((data)=> {
        
        row += `<tr>
            <td>${number}</td>
            <td>${data.fullName}</td>
            <td>${data.productName}</td>
            <td>${data.quantity}</td>
            <td>Rp. ${Number(data.quantity) * Number(data.price)}</td>
        </tr>`;

        number++;
    });

    table.innerHTML = `<tr>
                    <th>No.</th>
                    <th>Nama Lengkap</th>
                    <th>Nama Produk</th>
                    <th>Jumlah</th>
                    <th>Total Harga</th>
                </tr>${row}`;
    
    form.reset();
});

form.addEventListener("change", (e)=> {
    form_data = {
        ...form_data,
        [e.target.name]: e.target.value,
    }
});