let cartCount = 0;

// Дані про зброю
const weapons = {
  pistols: [
    {
      id: 'pistol1',
      name: 'Glock 19',
      description: 'Популярний 9мм пістолет, відомий своєю надійністю.',
      price: 550,
      img: 'images/glock19.jpg'
    },
    {
      id: 'pistol2',
      name: 'Smith & Wesson M&P 9',
      description: 'Пістолет для самооборони та спортивної стрільби.',
      price: 600,
      img: 'images/smith_wesson.jpg'
    },
    {
      id: 'pistol3',
      name: 'Sig Sauer P320',
      description: 'Модульний пістолет, що легко налаштовується.',
      price: 650,
      img: 'images/sig_sauer.jpg'
    }
  ],
  submachineGuns: [
    {
      id: 'submachineGun1',
      name: 'Heckler & Koch MP5',
      description: 'Впізнаваний пістолет-пулемет, який використовують спецпідрозділи.',
      price: 2500,
      img: 'images/mp5.jpg'
    },
        
  ],
  rifles: [
    {
      id: 'rifle1',
      name: 'AR-15',
      description: 'Популярний автомат для спорту та самооборони.',
      price: 900,
      img: 'images/ar15.jpg'
    },
    // Інші елементи категорії...
  ],
  shotguns: [
    {
      id: 'shotgun1',
      name: 'Remington 870',
      description: 'Надійний дробовик для полювання та самооборони.',
      price: 450,
      img: 'images/remington870.jpg'
    },
    // Інші елементи категорії...
  ]
};

// Відкрити модальне вікно
function openModal(weaponId) {
  let selectedWeapon = null;

  // Шукаємо зброю за ID у всіх категоріях
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
      cartCount++;
      document.getElementById('cart-count').innerText = cartCount;
      closeModal();
    };
  } else {
    console.error(`Weapon with ID ${weaponId} not found.`);
  }
}

// Закрити модальне вікно
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Відобразити категорію
function showCategory(category) {
  const allCategories = document.querySelectorAll('.weapon-category');
  allCategories.forEach(cat => cat.style.display = 'none');

  const categoryElement = document.getElementById(category);
  if (categoryElement) {
    categoryElement.style.display = 'flex';
  } else {
    console.error(`Category ${category} not found.`);
  }
}

// Додаємо картки зброї до категорій
window.onload = () => {
  for (const [categoryName, weaponsList] of Object.entries(weapons)) {
    const categorySection = document.getElementById(categoryName);

    if (categorySection) {
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
    } else {
      console.error(`Category section with ID ${categoryName} not found.`);
    }
  }
};