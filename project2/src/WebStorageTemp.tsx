import { LocalStorage} from 'typescript-web-storage';

function listenerFunction(this: HTMLElement, ev: Event) {
    const webStorage: WebStorageTemp = new WebStorageTemp();
    ev.preventDefault();
    webStorage.setPropValue(this.id, this.nodeValue || "")
  }

class WebStorageTemp {
    protected readonly storage: Storage = new LocalStorage();

    //template methods:
    public initListeners(props:Array<HTMLObjectElement>) {
        for (let i = 0; i < props.length; i++) {
            props[i].addEventListener("input", listenerFunction);
        }
    }

    public setPropValue(prop: string, value: string) {
        this.storage?.setItem(prop, value);
    }

    public getPropValue(prop: string) {
        let value = this.storage.getItem(prop);
        return (value == "")?(()=>{return null;})():(()=>{return value;})();
    }

    public clearProps() {
        this.storage?.clear();
    }
}

export {WebStorageTemp}