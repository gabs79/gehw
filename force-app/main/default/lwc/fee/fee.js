import { LightningElement, track } from 'lwc';

export default class Fee extends LightningElement {
    @track items = [];
    plusNumber= undefined;
    minusNumber= undefined;

    get plusNumberLabel() {
        return this.plusNumber ? `Plus ${this.plusNumber}` : 'Plus';
    }

    get minusNumberLabel() {
        return this.minusNumber ? `Minus ${this.minusNumber}` : 'Minus';
    }

    handleChange(event) {
        this[event.target.name] = event.target.value;
    }

    handleClick(event) {
        this.items.push({
            type: 'icon',
            label: event.target.label,
        });
        console.log('ouch: ' + event.target.label);
    }

    handleItemRemove(event) {
        const index = event.detail.index;
        console.log("; i:" + index);
        this.items.splice(index, 1);
    }
}