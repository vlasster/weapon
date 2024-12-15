let cartCount = 0;
let cartItems = [];

const weapons = {
  pistols: [
    { id: 'pistol1', name: 'Glock 19', description: 'Надійний пістолет з відмінною точністю та 15-зарядним магазином.', price: 550, img: 'images/glock19.jpg' },
    { id: 'pistol2', name: 'Beretta 92FS', description: 'Легендарний італійський пістолет з міцною конструкцією.', price: 580, img: 'images/beretta92.jpg' },
    { id: 'pistol3', name: 'Desert Eagle', description: 'Потужний пістолет калібру .50 AE, який забезпечує величезну вогневу міць.', price: 1200, img: 'images/desert_eagle.jpg' }
  ],
  submachineGuns: [
    { id: 'submachineGun1', name: 'Heckler & Koch MP5', description: 'Класичний пістолет-пулемет з високою точністю.', price: 2500, img: 'images/mp5.jpg' },
    { id: 'submachineGun2', name: 'Uzi Pro', description: 'Компактний та ефективний ізраїльський пістолет-пулемет.', price: 2200, img: 'images/uzi.jpg' }
  ],
  rifles: [
    { id: 'rifle1', name: 'AK-47', description: 'Легендарна штурмова гвинтівка з відмінною надійністю.', price: 950, img: 'images/ak47.jpg' },
    { id: 'rifle2', name: 'M16A4', description: 'Сучасна гвинтівка з оптикою для точної стрільби.', price: 1100, img: 'images/m16.jpg' },
    { id: 'rifle3', name: 'SCAR-H', description: 'Високотехнологічна гвинтівка з покращеною точністю.', price: 1800, img: 'images/scar_h.jpg' }
  ],
  shotguns: [
    { id: 'shotgun1', name: 'Remington 870', description: 'Надійний і потужний дробовик для полювання.', price: 450, img: 'images/remington870.jpg' },
    { id: 'shotgun2', name: 'Mossberg 500', description: 'Дробовик для самозахисту з плавним перезарядженням.', price: 500, img: 'images/mossberg500.jpg' }
  ]
};

function addToCart(weapon) {
  cartItems.push(weapon);
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`${weapon.name} додано до кошика!`);
}

function openModal(weaponId) {
  let selectedWeapon = null;
  for (const category of Object.values(weapons)) {
    selectedWeapon = category.find(item => item.id === weaponId);
    if (selectedWeapon) break;
  }

  if (selectedWeapon) {
    document.getElementById('modal-img').src = selectedWeapon.img;
    document.getElementById('modal-name').innerText = selectedWeapon.name;
    document.getElementById('modal-description').innerText = selectedWeapon.description;
    document.getElementById('modal-price').innerText = `Ціна: $${selectedWeapon.price}`;
    document.getElementById('modal').style.display = 'flex';

    document.getElementById('add-to-cart').onclick = function () {
      addToCart(selectedWeapon);
      closeModal();
    };
  }
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function showCategory(category) {
  document.querySelectorAll('.weapon-category').forEach(cat => cat.style.display = 'none');
  document.getElementById(category).style.display = 'flex';
}

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
};
