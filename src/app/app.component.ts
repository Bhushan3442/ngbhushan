import { Component } from "@angular/core";
@Component({
  selector: "app-sig",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class SigComponent {
  title = "Sigma Store";
  store = [
    { id: 1, music: "new", genre: "pop" },
    { id: 2, music: "old", genre: "rock" },
    { id: 3, music: "crop", genre: "punk" }
  ];
  books = [
    { id: 2, book: "old", genre: "rock" },
    { id: 1, book: "new", genre: "pop" },
    { id: 3, book: "crop", genre: "punk" }
  ];
}
