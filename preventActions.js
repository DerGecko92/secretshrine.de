(() => {
    const blockEvent = e => {
        if (e.type === 'contextmenu' ||
            e.keyCode === 123 || // F12
            (e.ctrlKey && (e.shiftKey && (e.keyCode === 73 || // Ctrl+Shift+I
                                          e.keyCode === 74 || // Ctrl+Shift+J
                                          e.keyCode === 67) || // Ctrl+Shift+C
                          e.keyCode === 85 || // Ctrl+U
                          e.keyCode === 83)) || // Ctrl+S
            (e.metaKey && e.altKey && e.keyCode === 73)) { // Cmd+Opt+I on Mac
            e.preventDefault();
            return false;
        }
    };
    document.addEventListener('contextmenu', blockEvent);
    document.addEventListener('keydown', blockEvent);
    document.onkeydown = blockEvent;
})();
