<template>
  <header class="header position-relative">
    <div class="px-4 py-4 d-flex align-items-center justify-content-between">
      <div><p class="m-0">Rp. 50.000</p></div>
      <div
        class="position-absolute start-50 top-50 translate-middle dropdown po"
      >
        <button
          id="dropdown-menu-1"
          style="background-color: #38354b; border-color: #38354b"
          class="
            text-reset
            btn btn-secondary
            dropdown-toggle
            rounded-pill
            py-2
            px-3
          "
          type="button"
          data-bs-toggle="dropdown"
        >
          Yogyakarta
        </button>
        <ul
          style="width: 140px; min-width: 140px; background-color: #38354b"
          class="text-reset dropdown-menu text-light rounded-3"
          aria-labelledby="dropdown-menu-1"
        >
          <li>
            <a class="text-reset bg-dark-hover dropdown-item" href="#"
              >Action</a
            >
          </li>
          <li>
            <a class="text-reset bg-dark-hover dropdown-item" href="#"
              >Another action</a
            >
          </li>
          <li>
            <a class="text-reset bg-dark-hover dropdown-item" href="#"
              >Something else
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img src="/src/assets/bell.svg" alt="" />
      </div>
    </div>
  </header>
</template>
