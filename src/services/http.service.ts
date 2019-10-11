import axios from 'axios';

export class HttpService {
  private store: any;
  constructor(store: any) {
    this.store = store;
  }
  public async get(url: string, hasSpinner: boolean = true) {
    if (hasSpinner) {
      this.store.commit('spinnerIncrease');
    }
    const result = await axios.get(url).finally(() => {
      if (hasSpinner) {
        this.store.commit('spinnerDecrease');
      }
    });
    return result;
  }

  public async post(url: string, body: any, hasSpinner: boolean = true) {
    if (hasSpinner) {
      this.store.commit('spinnerIncrease');
    }
    const result = await axios.post(url, body).finally(() => {
      if (hasSpinner) {
        this.store.commit('spinnerDecrease');
      }
    });
    return result;
  }

  public async delete(url: string, hasSpinner: boolean = true) {
    if (hasSpinner) {
      this.store.commit('spinnerIncrease');
    }
    const result = await axios.delete(url).finally(() => {
      if (hasSpinner) {
        this.store.commit('spinnerDecrease');
      }
    });
    return result;
  }

  public async put(url: string, body: any, hasSpinner: boolean = true) {
    if (hasSpinner) {
      this.store.commit('spinnerIncrease');
    }
    const result = await axios.put(url, body).finally(() => {
      if (hasSpinner) {
        this.store.commit('spinnerDecrease');
      }
    });
    return result;
  }
}
