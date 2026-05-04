import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})

export class Products {
  private products : Product[] = [
    { id: 1, name: 'Kawasaki Ninja ZX-10R', price: 15000, description: 'A high-performance sport motorcycle with a powerful engine and advanced features.', image: 'https://tse2.mm.bing.net/th/id/OIP.TJ4HNJE7KmCyeMkDMX8uzAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 2, name: 'Yamaha YZF-R1', price: 17000, description: 'A cutting-edge sport bike known for its aggressive styling and exceptional performance.', image: 'https://tse3.mm.bing.net/th/id/OIP.Z19DZ8d76-V43klrdjUg3wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 3, name: 'Honda CBR1000RR', price: 16000, description: 'A versatile sport motorcycle that combines power and agility for an exhilarating riding experience.', image: 'https://www.honda.es/content/dam/central/motorcycles/supersports/cbr1000rr-r-fireblade-2022/Overview/Overlap-module/Honda-CBR1000RR-R-Fireblade-21-1728x972.jpg/_jcr_content/renditions/fb_r.jpg'},
    { id: 4, name: 'Suzuki GSX-R1000', price: 15500, description: 'A legendary sport bike with a rich racing heritage and impressive performance on the track.', image: 'https://th.bing.com/th/id/R.d6d1b48d8afdfc5d12ec0e8e99432709?rik=OKl2GJf444xT8A&pid=ImgRaw&r=0'},
    { id: 5, name: 'Ducati Panigale V4', price: 22000, description: 'A premium sport motorcycle that offers a blend of Italian design and high-performance engineering.', image: 'https://wallpaperaccess.com/full/1207536.jpg'},
    { id: 6, name: 'Kawasaki Ninja H2R', price: 19000, description: 'A technologically advanced sport bike that delivers exceptional performance and handling.', image: 'https://mikeshouts.com/wp-content/uploads/2014/09/Kawasaki-Ninja-H2R-Racing-Bike-image-3.jpg' },
  ]

  getProducts(): Product[] {
    return this.products;
  }
}
