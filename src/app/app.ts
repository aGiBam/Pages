import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentPage = 0;
  images = [
    {
      title: 'Beach',
      url: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Mountains',
      url: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Woman',
      url: 'https://images.unsplash.com/photo-1781608684437-1f6cc9e2bfe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'
    },
    {
      title: 'flower',
      url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww'
    },
    {
      title: 'Beach',
      url: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Mountains',
      url: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Woman',
      url: 'https://images.unsplash.com/photo-1781608684437-1f6cc9e2bfe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'
    },
    {
      title: 'flower',
      url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww'
    },
    {
      title: 'Beach',
      url: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Mountains',
      url: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Woman',
      url: 'https://images.unsplash.com/photo-1781608684437-1f6cc9e2bfe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'
    },
    {
      title: 'flower',
      url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww'
    },
    {
      title: 'Beach',
      url: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Mountains',
      url: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Woman',
      url: 'https://images.unsplash.com/photo-1781608684437-1f6cc9e2bfe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'
    },
    {
      title: 'flower',
      url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww'
    },
    {
      title: 'Beach',
      url: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Mountains',
      url: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Woman',
      url: 'https://images.unsplash.com/photo-1781608684437-1f6cc9e2bfe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'
    },
    {
      title: 'flower',
      url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww'
    },
    {
      title: 'Beach',
      url: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Mountains',
      url: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Woman',
      url: 'https://images.unsplash.com/photo-1781608684437-1f6cc9e2bfe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'
    },
    {
      title: 'flower',
      url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww'
    }
  ]

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }
}
