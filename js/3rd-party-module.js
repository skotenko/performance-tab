window.NameSpace = window.NameSpace || {};

(() => {
    NameSpace.ThirdPartyModule = {
        config: {
            buttonSelector: '.choice button',
        },
        button: null,

        init() {
            this.button = document.querySelectorAll(this.config.buttonSelector)[0];
            this.events();
        },

        events() {
            if (!this.button) {
                console.error('No button');
                return;
            }

            this.button.addEventListener('click', this.runDifficultTask.bind(this), false);
        },

        runDifficultTask() {
            console.time("ThirdPartyModule -> runDifficultTask took");

            let result = 0;

            for (let i = 0; i <= 5000000000; i++) {
                result = i;
            }

            console.timeEnd("ThirdPartyModule -> runDifficultTask took");
        },
    };

    /**
     * Run SomeModule after the page is ready
     */
    document.addEventListener("DOMContentLoaded", function () {
        NameSpace.ThirdPartyModule.init();
    });
})();
