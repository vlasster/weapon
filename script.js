

let cartItems = [];
let cartCount = 0;

const weapons = {
  pistols: [
    { id: 'pistol1', name: 'Glock 19', description: 'Надійний пістолет з відмінною точністю та 15-зарядним магазином.', price: 550, img: 'images/glock19.jpg' },
    { id: 'pistol2', name: 'Beretta 92FS', description: 'Легендарний італійський пістолет з міцною конструкцією.', price: 580, img: 'images/beretta92.jpg' },
    { id: 'pistol3', name: 'Desert Eagle', description: 'Потужний пістолет калібру .50 AE, який забезпечує величезну вогневу міць.', price: 1200, img: 'images/desert_eagle.jpg' },
    { id: 'pistol4', name: 'Sig Sauer P226', description: 'Високоточний пістолет з відмінною ергономікою.', price: 700, img: 'images/sig_p226.jpg' },
    { id: 'pistol5', name: 'Walther P99', description: 'Сучасний пістолет з полімерною рамкою.', price: 650, img: 'images/walther_p99.jpg' },
    { id: 'pistol6', name: 'Colt 1911', description: 'Класичний американський пістолет з великою історією.', price: 800, img: 'images/colt_1911.jpg' },
    { id: 'pistol7', name: 'CZ 75', description: 'Чеський пістолет з відмінною точністю та надійністю.', price: 600, img: 'images/cz_75.jpg' }
  ],
  submachineGuns: [
    { id: 'submachineGun1', name: 'Heckler & Koch MP5', description: 'Класичний пістолет-пулемет з високою точністю.', price: 2500, img: 'images/mp5.jpg' },
    { id: 'submachineGun2', name: 'Uzi Pro', description: 'Компактний та ефективний ізраїльський пістолет-пулемет.', price: 2200, img: 'images/uzi.jpg' },
    { id: 'submachineGun3', name: 'FN P90', description: 'Футуристичний пістолет-пулемет з високою скорострільністю.', price: 3000, img: 'images/fn_p90.jpg' },
    { id: 'submachineGun4', name: 'CZ Scorpion EVO 3', description: 'Сучасний пістолет-пулемет з відмінною ергономікою.', price: 2700, img: 'images/cz_scorpion.jpg' },
    { id: 'submachineGun5', name: 'MP7', description: 'Компактний пістолет-пулемет з високою скорострільністю.', price: 2800, img: 'images/mp7.jpg' },
    { id: 'submachineGun6', name: 'PP-19 Bizon', description: 'Російський пістолет-пулемет з великою ємністю магазину.', price: 2600, img: 'images/pp19_bizon.jpg' }
  ],
  rifles: [
    { id: 'rifle1', name: 'AK-47', description: 'Легендарна штурмова гвинтівка з відмінною надійністю.', price: 950, img: 'images/ak47.jpg' },
    { id: 'rifle2', name: 'M16A4', description: 'Сучасна гвинтівка з оптикою для точної стрільби.', price: 1100, img: 'images/m16.jpg' },
    { id: 'rifle3', name: 'SCAR-H', description: 'Високотехнологічна гвинтівка з покращеною точністю.', price: 1800, img: 'images/scar_h.jpg' },
    { id: 'rifle4', name: 'FN FAL', description: 'Класична штурмова гвинтівка з великою потужністю.', price: 1300, img: 'images/fn_fal.jpg' },
    { id: 'rifle5', name: 'HK G36', description: 'Сучасна гвинтівка з полімерною конструкцією.', price: 1600, img: 'images/hk_g36.jpg' },
    { id: 'rifle6', name: 'Steyr AUG', description: 'Австрійська штурмова гвинтівка з інтегрованою оптикою.', price: 1700, img: 'images/steyr_aug.jpg' },
    { id: 'rifle7', name: 'Tavor TAR-21', description: 'Ізраїльська штурмова гвинтівка з сучасним дизайном.', price: 1500, img: 'images/tavor_tar21.jpg' }
  ],
  shotguns: [
    { id: 'shotgun1', name: 'Remington 870', description: 'Надійний і потужний дробовик для полювання.', price: 450, img: 'images/remington870.jpg' },
    { id: 'shotgun2', name: 'Mossberg 500', description: 'Дробовик для самозахисту з плавним перезарядженням.', price: 500, img: 'images/mossberg500.jpg' },
    { id: 'shotgun3', name: 'Benelli M4', description: 'Напівавтоматичний дробовик з високою надійністю.', price: 1500, img: 'images/benelli_m4.jpg' },
    { id: 'shotgun4', name: 'Winchester SXP', description: 'Дробовик з високою швидкістю перезарядження.', price: 600, img: 'images/winchester_sxp.jpg' },
    { id: 'shotgun5', name: 'Kel-Tec KSG', description: 'Компактний дробовик з двома трубчастими магазинами.', price: 1400, img: 'images/keltec_ksg.jpg' },
    { id: 'shotgun6', name: 'Saiga-12', description: 'Російський напівавтоматичний дробовик на базі АК.', price: 1300, img: 'images/saiga_12.jpg' }
  ],
  coldWeapons: [
    { id: 'coldWeapon1', name: 'Катана', description: 'Японський меч з довгою історією та відмінною гостротою.', price: 900, img: 'images/katana.jpg' },
    { id: 'coldWeapon2', name: 'Бойовий топірець', description: 'Потужний інструмент для ближнього бою.', price: 300, img: 'images/axe.jpg' },
    { id: 'coldWeapon3', name: 'Меч', description: 'Класичний європейський меч для двобою.', price: 500, img: 'images/sword.jpg' },
    { id: 'coldWeapon4', name: 'Кинджал', description: 'Гострий ніж для швидких атак.', price: 150, img: 'images/dagger.jpg' },
    { id: 'coldWeapon5', name: 'Алебарда', description: 'Середньовічна зброя з лезом для різання.', price: 700, img: 'images/halberd.jpg' },
    { id: 'coldWeapon6', name: 'Бойова коса', description: 'Інструмент, перетворений у зброю.', price: 400, img: 'images/scythe.jpg' },
    { id: 'coldWeapon7', name: 'Шпага', description: 'Тонкий та легкий меч для дуелей.', price: 350, img: 'images/rapier.png' }
  ]
};







// Функція додавання до кошика
function addToCart(weapon) {
  cartItems.push(weapon);
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`${weapon.name} додано до кошика!`);
}

// Функція відкриття модального вікна товару
function openModal(weaponId) {
  let selectedWeapon = null;
  for (const category of Object.values(weapons)) {
    selectedWeapon = category.find(item => item.id === weaponId);
    if (selectedWeapon) break;
  }

  if (selectedWeapon) {
    const modalContainer = document.querySelector('.modal-container') || createModalContainer();
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'flex';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal(this)">&times;</span>
        <img src="${selectedWeapon.img}" alt="Weapon Image" />
        <h2>${selectedWeapon.name}</h2>
        <p>${selectedWeapon.description}</p>
        <p>Ціна: $${selectedWeapon.price}</p>
        <button onclick="addToCartAndCloseModal('${selectedWeapon.id}', this)">Додати в кошик</button>
      </div>
    `;
    modalContainer.appendChild(modal);
  }
}

// Функція створення контейнера для модальних вікон
function createModalContainer() {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');
  document.body.appendChild(modalContainer);
  return modalContainer;
}

// Функція додавання товару до кошика та закриття модального вікна
function addToCartAndCloseModal(weaponId, button) {
  let selectedWeapon = null;
  for (const category of Object.values(weapons)) {
    selectedWeapon = category.find(item => item.id === weaponId);
    if (selectedWeapon) break;
  }
  addToCart(selectedWeapon);
  closeModal(button);
}

// Функція закриття модального вікна товару
function closeModal(closeButton) {
  const modal = closeButton.closest('.modal');
  modal.remove();
}

// Функція відображення категорії
function showCategory(category) {
  document.querySelectorAll('.weapon-category, .blog-category').forEach(cat => cat.style.display = 'none');
  document.getElementById(category).style.display = 'flex';
}

// Функція відкриття модального вікна кошика
function openCartModal() {
  const cartModal = document.createElement('div');
  cartModal.classList.add('modal');
  cartModal.style.display = 'flex';
  let totalPrice = 0;
  let cartItemsHTML = cartItems.map((item, index) => {
    totalPrice += item.price;
    return `
      <div class="cart-item">
        <div class="cart-item-details">
          <img src="${item.img}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <p>Ціна: $${item.price}</p>
          </div>
        </div>
        <button onclick="removeFromCart(${index}, this)" class="remove-item">Видалити</button>
      </div>
    `;
  }).join('');

  cartModal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal(this)">&times;</span>
      <h2>Ваш кошик</h2>
      <div id="cart-items">${cartItemsHTML}</div>
      <p id="total-price">Загальна сума: $${totalPrice}</p>
      <button onclick="checkout()">Оплатити</button>
    </div>
  `;
  document.body.appendChild(cartModal);
}

// Функція видалення товару з кошика
function removeFromCart(index, button) {
  cartItems.splice(index, 1);
  cartCount--;
  document.getElementById('cart-count').innerText = cartCount;
  button.closest('.cart-item').remove();
  updateCartTotal();
}

// Функція оновлення загальної суми в кошику
function updateCartTotal() {
  let totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('total-price').innerText = `Загальна сума: $${totalPrice}`;
}

// Функція закриття модального вікна кошика
function closeCartModal() {
  const cartModal = document.querySelector('.modal');
  cartModal.remove();
}

// Функція оплати
function checkout() {
  if (cartItems.length === 0) {
    alert('Ваш кошик порожній!');
    return;
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Створюємо форму оплати
  const paymentForm = document.createElement('div');
  paymentForm.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closePaymentModal()">&times;</span>
      <h3>Оформлення замовлення</h3>
      <form id="payment-form" class="payment-form">
        <input type="text" placeholder="Ім'я" required>
        <input type="email" placeholder="Email" required>
        <input type="text" placeholder="Номер картки" required pattern="[0-9]{16}">
        <div class="card-details">
          <input type="text" placeholder="MM/YY" required pattern="(0[1-9]|1[0-2])\/([0-9]{2})">
          <input type="text" placeholder="CVV" required pattern="[0-9]{3}">
        </div>
        <button type="submit">Оплатити $${totalPrice}</button>
      </form>
    </div>
  `;

  // Замінюємо вміст модального вікна кошика на форму оплати
  const cartModalContent = document.querySelector('.modal .modal-content');
  cartModalContent.innerHTML = '';
  cartModalContent.appendChild(paymentForm);

  // Обробник відправки форми
  document.getElementById('payment-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Оплата пройшла успішно! Дякуємо за покупку!');
    cartItems = [];
    cartCount = 0;
    document.getElementById('cart-count').innerText = '0';
    closeCartModal();
  };
}

function closePaymentModal() {
  const paymentModal = document.querySelector('.modal .modal-content');
  paymentModal.remove();
}


// Ініціалізація при завантаженні сторінки
window.onload = () => {
  for (const [categoryName, weaponsList] of Object.entries(weapons)) {
    const categorySection = document.getElementById(categoryName);
    weaponsList.forEach(weapon => {
      const weaponCard = document.createElement('div');
      weaponCard.classList.add('weapon-card');
      weaponCard.setAttribute('onclick', `openModal('${weapon.id}')`);
      weaponCard.innerHTML = `
        <img src="${weapon.img}" alt="${weapon.name}" />
        <h3>${weapon.name}</h3>
        <p>Ціна: $${weapon.price}</p>
      `;
      categorySection.appendChild(weaponCard);
    });
  }


  // Додаємо обробники подій для кошика
  document.getElementById('cart').onclick = openCartModal;
  document.getElementById('checkout').onclick = checkout;
};
