import axios from 'axios';

export class HttpService {
  private store: any;
  constructor(store: any) {
    this.store = store;
  }
  public async get(url: string, state: any) {
    this.store.commit('spinnerIncrease');
    const result = await axios.get(url).finally(() => { this.store.commit('spinnerDecrease'); });
    return result;
  }

  public async post(url: string, body: any) {
    this.store.commit('spinnerIncrease');
    const result = await axios.post(url, body).finally(() => { this.store.commit('spinnerDecrease'); });
    return result;
  }

  public async delete(url: string) {
    this.store.commit('spinnerIncrease');
    const result = await axios.delete(url).finally(() => { this.store.commit('spinnerDecrease'); });
    return result;
  }

  public async put(url: string, body: any ) {
    this.store.commit('spinnerIncrease');
    const result = await axios.put(url, body).finally(() => { this.store.commit('spinnerDecrease'); });
    return result;
  }
}
