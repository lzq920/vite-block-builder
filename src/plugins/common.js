import directives from "../directives";
import mixin from "../mixins";
export default {
    install: (app, options) => {
        Object.keys(directives).forEach((key) => {
            app.directive(key, directives[key]);
        });
        app.mixin(mixin);
    },
};
