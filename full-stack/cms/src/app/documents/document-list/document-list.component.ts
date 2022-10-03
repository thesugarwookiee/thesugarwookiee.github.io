import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    new Document(1, 'The Sparrow', 'Best Book Ever, if you have not read it yet, why are you still here? go read it!', 'https://www.amazon.com/Sparrow-Novel-Book-ebook/dp/B000SEIFGO', null),
    new Document(2, 'Children of God', 'Also best book ever', '#', null),
    new Document(3, 'Tester', 'Best Test Ever', '#', null),
    new Document(4, 'Filler Space', 'This text belongs here!', '#', null),
    new Document(5, 'Lizard Boy', 'Not a document, a rooster', '#', null)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
