import { v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  username: string;
  name: string;
  surname: string;
}

const INITIAL_DATA: User[] = [
  { id: uuid(), username: 'rockets', name: 'Elon', surname: 'Musk' },
  { id: uuid(), username: 'investing', name: 'Nassim', surname: 'Taleb' },
  { id: uuid(), username: 'philosophy', name: 'Yuval', surname: 'Harari' }
];

@Injectable()
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([...INITIAL_DATA]);
  users$: Observable<User[]> = this.usersSubject.asObservable();

  addUser(user: Partial<User>) {
    const users = this.usersSubject.getValue();
    const newUser = { ...user, id: uuid() } as User;

    this.usersSubject.next([...users, newUser]);
  }

  updateUser(user: User) {
    const users = this.usersSubject.getValue();
    const updatedUsers = users.map(u => u.id === user.id ? user : u);

    this.usersSubject.next(updatedUsers);
  }

  removeUser(id: string) {
    const users = this.usersSubject.getValue();
    const filteredUsers = users.filter(user => user.id !== id);

    this.usersSubject.next(filteredUsers);
  }

  // Optional: Get current value without subscribing
  getCurrentUsers(): User[] {
    return this.usersSubject.getValue();
  }
}
