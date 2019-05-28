import './cases/*';

if (module && module.hot) {
    module.hot.accept(() => {
        miui.reset();
        require(module.id);
        miui.run();
    });
}