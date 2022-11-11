import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from './contact.model';
// import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    contactSelectedEvent = new EventEmitter<Contact>();
    contactListChangedEvent = new Subject<Contact[]>();
    maxContactId: number;
    contacts: Contact[] = [];

    constructor(private http: HttpClient) {
        // this.contacts = MOCKCONTACTS;
        // this.maxContactId = this.getMaxId();
    }

    getContacts(): Contact[] {
        this.http.get('https://toast-8e0b2-default-rtdb.firebaseio.com/contacts.json').subscribe(
            (contacts: Contact[]) => {
                this.contacts = contacts
                this.maxContactId = this.getMaxId();
                this.contacts.sort();
                this.contactListChangedEvent.next(this.contacts.slice());
            },
            (error: any) => {
                console.log(error.message);
            }
        )
        return this.contacts.slice();
    }

    storeContacts() {
        const json = JSON.stringify(this.contacts);
        this.http.put('https://toast-8e0b2-default-rtdb.firebaseio.com/contacts.json', json,
            {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            }
        ).subscribe(() => {
            this.contactListChangedEvent.next(this.contacts.slice());
        })
    }

    getContact(id: string): Contact {
        for (let contact of this.contacts) {
            if (contact.id == id) {
                return contact;
            }
        }
        return null;
    }

    deleteContact(contact: Contact) {
        if (!contact) {
            return;
        }
        const pos = this.contacts.indexOf(contact);
        if (pos < 0) {
            return;
        }
        this.contacts.splice(pos, 1);
        this.storeContacts();
    }

    getMaxId(): number {
        let maxId: number = 0;

        for (let contact of this.contacts) {
            let currentId = +contact.id;
            if (currentId > maxId) {
                maxId = currentId;
            }
        }
        return maxId;
    }

    addContact(newContact: Contact) {
        if (!newContact) {
            return;
        }
        this.maxContactId++;
        newContact.id = this.maxContactId + "";
        this.contacts.push(newContact);
        this.storeContacts();
    }

    updateContact(originalContact: Contact, newContact: Contact) {
        if (!originalContact || !newContact) {
            return;
        }
        const pos = this.contacts.indexOf(originalContact)
        if (pos < 0) {
            return;
        }
        newContact.id = originalContact.id;
        this.contacts[pos] = newContact;
        this.storeContacts();
    }
}