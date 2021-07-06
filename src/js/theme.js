const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const Storage = {
  STORAGE_KEY: 'color-theme',
  FALSE: 'false',
  TRUE: 'true',
};

const refs = {
  body: document.querySelector('body'),
  themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
  colorTheme: localStorage.getItem(Storage.STORAGE_KEY),
};

refs.body.classList.add(Theme.LIGHT);
refs.themeSwitchToggle.addEventListener('change', onChange);

if (refs.colorTheme === Storage.TRUE) {
  refs.body.classList.add(Theme.LIGHT);
}

if (refs.colorTheme === Storage.FALSE) {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  refs.themeSwitchToggle.checked = Storage.TRUE;
}

function checkedTheme() {
  const light = refs.body.classList.contains(Theme.LIGHT);
  localStorage.setItem(Storage.STORAGE_KEY, light);
}
function onChange() {
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);

  checkedTheme();
}
