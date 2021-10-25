import { Injectable } from '@angular/core';

export interface ToastMessage {
  header: string
  body: string
  delay?: number
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: ToastMessage[] = [];
  constructor() { }

  show(toast: ToastMessage){
    this.toasts.push(toast);
  }

  remove(toast: ToastMessage) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
