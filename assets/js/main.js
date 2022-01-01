function createCalculator() {

    return {
        display: document.querySelector('.display'),

        begin() {
            this.buttonClick();
            this.pressEnter();
        },

        buttonClick() {
            document.addEventListener('click', (event) => {
                const element = event.target;
                if (element.classList.contains('number')) {
                    this.buttonForDisplay(element.innerText);
                } else if (element.classList.contains('clear')) {
                    this.clear();
                } else if (element.classList.contains('delete')) {
                    this.deleteOne();
                } else if (element.classList.contains('equal')) {
                    this.calculate();
                }
            });
        },

        buttonForDisplay(value) {
            this.display.value += value;
        },

        clear() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        pressEnter() {
            this.display.addEventListener("keyup", (event) => {
                if (event.key === 'Enter') {
                    this.calculate();
                }
            });
        },

        calculate() {
            let count = this.display.value;

            try {
                count = eval(count);

                if (!count) {
                    alert('[ERRO] Conta inválida!!!');
                    this.clear();
                    return;
                }

                this.display.value = String(count);

            } catch (error) {
                alert('[ERRO] Conta inválida!!!');
                this.clear();
                return;
            }
        }
    };
}

const calculator = createCalculator();

calculator.begin();