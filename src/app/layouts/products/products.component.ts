import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  template: `
    <div>
      <div class="container">
        <!--   Icon Section   -->
        <div class="row">
          <!-- Start : row -->
          <h1>{{ title }}</h1>
          <ul>
            <div class="row">
              <li *ngFor="let book of store">
                <div class="col s12 m4">
                  <div class="card-panel teal">
                    <span class="white-text">
                      <h6>Id: {{ book.id }}</h6>
                      <h6>Music: {{ book.music }}</h6>
                      <h6>Genre: {{ book.genre }}</h6>
                    </span>
                  </div>
                </div>
              </li>
            </div>
          </ul>

          <ul>
            <div class="row">
              <li *ngFor="let item of books">
                <div class="col s12 m4">
                  <div class="card">
                    <div class="card-image">
                      <img src="../assets/img/2.jpeg" />
                      <span class="card-title"
                        >Books
                        <h6>Id: {{ item.id }}</h6>
                        <h6>Music: {{ item.music }}</h6>
                        <h6>Genre: {{ item.genre }}</h6>
                      </span>
                    </div>
                    <div class="card-content"></div>
                    <div class="card-action"></div>
                  </div>
                </div>
              </li>
            </div>
          </ul>

          <!-- End : row -->
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
