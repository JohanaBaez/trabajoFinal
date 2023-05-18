// Variables de almacenamiento temporal
let products = [] ;
let users = [];
let invoices = [];

// Función para agregar un producto
function addProduct() {
    const productName = document.getElementById('product-name').value;
    const productMarca = document.getElementById('product-marca').value;
    const productColor = document.getElementById('product-color').value;
    const productTamaño = document.getElementById('product-tamaño').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').files[0];
    
    if (productName && productPrice && productMarca && productColor && productTamaño && productImage) {
        const reader = new FileReader();
        reader.onload = function(event) {
        const product = { name: productName, marca: productMarca, colo: productColor, tamaño: productTamaño, price: productPrice, image: productImage };
        products.push(product);
        displayProducts();
        };

         reader.readAsDataURL(productImage);

        document.getElementById('product-name').value = '';
        document.getElementById('product-marca').value = '';
        document.getElementById('product-color').value = '';
        document.getElementById('product-tamaño').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-image').value = null;
    } else {
        alert('Por favor, ingresa los datos del producto y selecciona una imagen.');
    }
}

// Función para mostrar los productos
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div>
                <span class="product-name">${product.name}</span>
                <span class="product-price">$${product.price}</span>
                <span class="product-maraca">$${product.marca}</span>
                <span class="product-maraca">$${product.color}</span>
                <span class="product-maraca">$${product.tamaño}</span>

            </div>
        `;
       
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteProduct(index);
        
        li.appendChild(deleteButton);
        productList.appendChild(li);
    });

   
}

// Función para eliminar un producto
function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

// Función para agregar un usuario
function addUser() {
    const userName = document.getElementById('user-name').value;
    const userApellido = document.getElementById('user-apellido').value;
    const userEdad = document.getElementById('user-edad').value;
    const userNacionalidad = document.getElementById('user-nacionalidad').value;
    const userEmail = document.getElementById('user-email').value;
    
    if (userName && userEmail) {
        const user = { name: userName, apellido: userApellido, edad: userEdad, nacionalidad: userNacionalidad, email: userEmail };
        users.push(user);
        displayUsers();
        document.getElementById('user-name').value = '';
        document.getElementById('user-apellido').value = '';
        document.getElementById('user-edad').value = '';
        document.getElementById('user-nacionalidad').value = '';
        document.getElementById('user-email').value = '';
    } else {
        alert('Por favor, ingresa los datos del usuario.');
    }
}

// Función para mostrar los usuarios
function displayUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.textContent = `${user.name} -  ${user.apellido} - ${user.edad} - ${user.nacionalidad}- ${user.email}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteUser(index);
        
        li.appendChild(deleteButton);
        userList.appendChild(li);
    });
}

// Función para eliminar un usuario
function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}

// Función para agregar una factura
function addInvoice() {
    const invoiceNumber = document.getElementById('invoice-number').value;
    const invoiceDate = document.getElementById('invoice-date').value;
    const invoiceTienda = document.getElementById('invoice-tienda').value;
    const invoiceUsuario = document.getElementById('invoice-usuario').value;
    const invoiceProducto = document.getElementById('invoice-producto').value;
    const invoicePrecio = document.getElementById('invoice-precio').value;
    
    if (invoiceNumber && invoiceDate) {
        const invoice = { number: invoiceNumber, date: invoiceDate, tienda: invoiceTienda, usuario: invoiceUsuario, producto: invoiceProducto, precio: invoicePrecio  };
        invoices.push(invoice);
        displayInvoices();
        document.getElementById('invoice-number').value = '';
        document.getElementById('invoice-date').value = '';
        document.getElementById('invoice-tienda').value = '';
        document.getElementById('invoice-usuario').value = '';
        document.getElementById('invoice-producto').value = '';
        document.getElementById('invoice-precio').value = '';
    } else {
        alert('Por favor, ingresa el número y la fecha de la factura.');
    }
}

// Función para mostrar las facturas
function displayInvoices() {
    const invoiceList = document.getElementById('invoice-list');
    invoiceList.innerHTML = '';

    invoices.forEach((invoice, index) => {
        const li = document.createElement('li');
        li.textContent = `Factura #${invoice.number} - ${invoice.date}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteInvoice(index);
        
        li.appendChild(deleteButton);
        invoiceList.appendChild(li);
    });
}

// Función para eliminar una factura
function deleteInvoice(index) {
    invoices.splice(index, 1);
    displayInvoices();
}

// Mostrar los elementos iniciales
displayProducts();
displayUsers();
displayInvoices();
