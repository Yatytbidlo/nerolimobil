const filterBox = document.querySelectorAll(".box ");
const filterCategories = document.querySelectorAll(".filter-category");
const selectedCategoryElement = document.querySelector(".selected-category");

document.addEventListener("DOMContentLoaded", function () {
  filterCategories.forEach((category) => {
    category.addEventListener("click", (event) => {
      if (event.target.tagName !== "LI") return;

      let filterClasses = event.target.dataset["f"];

      filterBox.forEach((elem) => {
        elem.classList.remove("hide");
      });

      if (filterClasses) {
        let classesArray = filterClasses.split(" ");

        filterBox.forEach((elem) => {
          if (
            !classesArray.some((className) =>
              elem.classList.contains(className)
            )
          ) {
            elem.classList.add("hide");
          }
        });
      }

      if (filterClasses === undefined || filterClasses.length === 0) {
        const nothing = document.querySelector(".nothing");
        nothing.classList.add("show");
      } else {
        const nothing = document.querySelector(".nothing");
        nothing.classList.remove("show");
      }

      selectedCategoryElement.textContent = `${event.target.textContent}`;
    });
  });
});

// Получаем все чекбоксы
const checkboxes = document.querySelectorAll(
  '.filter-category input[type="checkbox"]'
);
const resetNotes = document.querySelector(".reset-notes"); // Изменил на класс

// Функция для обновления фильтрации товаров
function updateFilters() {
  // Собираем выбранные значения чекбоксов в массив
  const selectedValues = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value.split(" ")) // Разделяем на отдельные классы
    .flat(); // Преобразуем массив массивов в одномерный массив

  // Проходимся по каждому товару и проверяем, содержит ли хотя бы один класс из выбранных значений
  filterBox.forEach((product) => {
    if (
      selectedValues.length === 0 ||
      selectedValues.some((value) => product.classList.contains(value))
    ) {
      product.classList.remove("hide");
    } else {
      product.classList.add("hide");
    }
  });
}

// Прослушиваем изменения состояния чекбоксов
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateFilters);
});

// Обработчик клика на кнопку сброса фильтров
resetNotes.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateFilters();
  updateSelectedCategory(""); // Вызываем функцию обновления фильтров
});

const labels = document.querySelectorAll(".filter-category label");

// Функция для обновления выбранной категории
function updateSelectedCategory(selectedText) {
  selectedCategoryElement.textContent = `${selectedText}`;
}

// Обработчик клика на checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const selectedText = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.parentNode.textContent.trim())
      .join(" -> ");

    updateSelectedCategory(selectedText);
  });
});

// Обработчик клика на label
labels.forEach((label) => {
  label.addEventListener("click", (event) => {
    const selectedText = event.currentTarget.textContent.trim();
    updateSelectedCategory(selectedText);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const expandableList = document.querySelector(".expandable");
  const showMoreButton = document.querySelector(".show-more");
  const showHideButton = document.querySelector(".show-hide");

  let expanded = false;

  showMoreButton.addEventListener("click", () => {
    expandableList.style.maxHeight = "none";
    showMoreButton.style.opacity = 0;
    showHideButton.style.display = "block";
    showHideButton.style.opacity = 1; // Добавляем эту строку, чтобы показать кнопку Скрыть

    expanded = true;
  });

  showHideButton.addEventListener("click", () => {
    if (expanded) {
      expandableList.style.maxHeight = "150px";
      showMoreButton.style.opacity = 1;
      showHideButton.style.opacity = 0; // Добавляем эту строку, чтобы скрыть кнопку Скрыть после клика
      showHideButton.style.display = "none";

      expanded = false;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const expandableList = document.querySelector(".expandable-accords");
  const showMoreButton = document.querySelector(".show-more-accords");
  const showHideButton = document.querySelector(".show-hide-accords");

  let expanded = false;

  showMoreButton.addEventListener("click", () => {
    expandableList.style.maxHeight = "none";
    showMoreButton.style.opacity = 0;
    showHideButton.style.display = "block";
    showHideButton.style.opacity = 1; // Добавляем эту строку, чтобы показать кнопку Скрыть

    expanded = true;
  });

  showHideButton.addEventListener("click", () => {
    if (expanded) {
      expandableList.style.maxHeight = "155px";
      showMoreButton.style.opacity = 1;
      showHideButton.style.opacity = 0; // Добавляем эту строку, чтобы скрыть кнопку Скрыть после клика
      showHideButton.style.display = "none";

      expanded = false;
    }
  });
});

let toggleButton = document.getElementById("toggleFilters");
let filterPanel = document.querySelector(".filter-panel");

toggleButton.addEventListener("click", function () {
  filterPanel.classList.toggle("active");
});

let searchButton = document.getElementById("searchFormToggle");
let searchContainer = document.querySelector(".search-container");

searchFormToggle.addEventListener("click", function () {
  searchContainer.classList.toggle("unhidden");
});

//Pop-up

const productsData = [
  {
    imageSrc: "images/neroli.jpg",
    title: "Neroli",
    description:
      "Neroli — это аромат для мужчин, он принадлежит к группе фруктовые. Верхние ноты: Ананас, Бергамот, Черная смородина и Яблоко; средние ноты: Береза, Пачули, Марокканский жасмин и Роза; базовые ноты: Мускус, Дубовый мох, Серая амбра и Ваниль.",
    prices: {
      "1ml": 1500,
      "30ml": 35000,
      "50ml": 75000,
    },
  },
  {
    imageSrc: "images/neroligrape.jpg",
    title: "Neroli Grape",
    description:
      "Neroli Grape — это аромат для мужчин, он принадлежит к группе цитрусовые фужерные. Ноты аромата: Грейпфрукт, Аmbroxan, Древесные ноты.",
    prices: {
      "1ml": 1500,
      "30ml": 35000,
      "50ml": 75000,
    },
  },
  {
    imageSrc: "images/lalique.jpg",
    title: "Encre Noire Lalique",
    description:
      "Encre Noire Lalique — это аромат для мужчин, он принадлежит к группе древесные фужерные. Верхняя нота: Кипарис; средняя нота: Ветивер; базовые ноты: Кашемировое дерево и Мускус.",
    prices: {
      "1ml": 750,
      "100ml": 33000,
    },
  },
  {
    imageSrc: "images/jimmychoo.jpg",
    title: "Jimmy Choo Man",
    description:
      "Jimmy Choo Man — это аромат для мужчин, он принадлежит к группе фужерные фруктовые. Jimmy Choo Man выпущен в 2014 году. Парфюмер: Anne Flipo.",
    prices: {
      "1ml": 750,
      "100ml": 33000,
    },
  },
  {
    imageSrc: "images/jimmychoointense.jpg",
    title: "Jimmy Choo Man Intense",
    description:
      "Jimmy Choo Man Intense — это аромат для мужчин, он принадлежит к группе . Jimmy Choo Man Intense выпущен в 2016 году. Верхние ноты: Дыня, Лаванда и Мандарин; средние ноты: Герань, Черный перец и Артемизия; базовые ноты: Бобы тонка, Пачули и Лабданум.",
    prices: {
      "1ml": 750,
      "100ml": 33000,
    },
  },
];

const popupContainer = document.getElementById("popupContainer");
const closePopup = document.getElementById("closePopup");
const volumeSelect = document.getElementById("volumeSelect");
const addToCart = document.getElementById("addToCart");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const popupPrice = document.getElementById("popupPrice");
const viewDetailsButtons = document.querySelectorAll(".view-details");

// Функция для открытия pop-up с информацией о товаре
function openPopup(product) {
  popupImage.src = product.imageSrc;
  popupTitle.textContent = product.title;
  popupDescription.textContent = product.description;

  // Обработчик события для изменения цены при выборе объема
  volumeSelect.addEventListener("change", () => {
    const selectedVolume = volumeSelect.value;
    const price = product.prices[selectedVolume];

    if (price !== undefined) {
      popupPrice.textContent = `Цена: ${price}₸`;
    } else {
      popupPrice.textContent = "Нет в наличии"; // Или любое другое сообщение
    }
  });

  // Устанавливаем начальное значение цены и выбранного объема
  const initialVolume = volumeSelect.value;
  const initialPrice = product.prices[initialVolume];
  popupPrice.textContent = `Цена: ${initialPrice}₸`;

  // Открываем pop-up
  popupContainer.style.display = "block";
}

// Функция для закрытия pop-up
function closePopupHandler() {
  popupContainer.style.display = "none";
  volumeSelect.removeEventListener("change");
}

// Обработчик события для кнопок "Подробнее"
viewDetailsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productKey = button.getAttribute("data-product");
    console.log("productKey:", productKey); // Добавьте эту строку для отладки
    const product = productsData.find((p) => p.title === productKey);
    console.log("product:", product); // Добавьте эту строку для отладки
    if (product) {
      openPopup(product);
    }
  });
});

// Обработчик события для кнопки закрытия pop-up
closePopup.addEventListener("click", closePopupHandler);

// Обработчик события для кнопки "Добавить в корзину"
addToCart.addEventListener("click", () => {
  // Ваш код для добавления товара в корзину
  // Можно отправить данные о выбранном товаре (product) и объеме (volumeSelect.value) на сервер или выполнить другие необходимые действия.
  // Например, можно использовать AJAX для отправки данных на сервер.
  closePopupHandler(); // Закрываем pop-up после добавления товара
});

Splitting();

setTimeout(() => {
  document.querySelector(".card").focus();
}, 1500);
