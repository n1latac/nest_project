import {makeAutoObservable} from "mobx";

export default class SneakerStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._sneakers = [];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setSneakers(devices) {
        this._sneakers = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types(){
        return this._types;
    }

    get brands(){
        return this._brands;
    }

    get sneakers(){
        return this._sneakers;
    }

    get selectedType(){
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}