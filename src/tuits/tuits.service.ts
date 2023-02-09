import { Injectable } from '@nestjs/common';
import { Tuit } from './tuit.entity';

@Injectable()
export class TuitsService {
  private tuits: Tuit[] = [
    {
      id: '1',
      message: 'Hello world from nest.js',
    },
  ];

  getTuits(): Tuit[] {
    return this.tuits;
  }

  getTuit(id: string): Tuit {
    return this.tuits.find((item) => item.id === id);
  }

  createTuit(message: string) {
    this.tuits.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      message,
    });
  }

  updateTuit(id: string, message: string) {
    console.log(message);
    if (message === undefined) return { error: 'sin mensaje' };
    const tuit: Tuit = this.getTuit(id);
    tuit.message = message;

    return tuit;
  }

  removeTuit(id: string) {
    const index = this.tuits.findIndex((tuit) => tuit.id === id);
    if (index >= 0) {
      this.tuits.splice(index, 1);
    }
  }
}
