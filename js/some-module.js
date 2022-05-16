window.NameSpace = window.NameSpace || {};

(() => {
    NameSpace.SomeModule = {
        config: {
            buttonSelector: '.js-btn-run-simple-task',
        },
        buttons: null,

        init() {
            this.buttons = document.querySelectorAll(this.config.buttonSelector);
            this.events();
        },

        events() {
            if (!this.buttons) {
                console.error('No buttons');
                return;
            }

            this.buttons.forEach((button) => {
                button.addEventListener('click', this.runSimpleTask.bind(this), false);
            });
        },

        runSimpleTask() {
            console.time("SomeModule -> runSimpleTask took");

            let result = 0;

            for (let i = 0; i <= 2000000; i++) {
                result = i;
            }

            console.timeEnd("SomeModule -> runSimpleTask took");
        },
    };

    /**
     * Run SomeModule after the page is ready
     */
    document.addEventListener("DOMContentLoaded", function () {
        NameSpace.SomeModule.init();
    });
})();
