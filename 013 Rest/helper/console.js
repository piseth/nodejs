exports.colorLog = (message, color='black') => {
    switch (color) {
        case 'success':  
             color = '\x1b[42m\x1b[30m%s\x1b[0m'
             break
        case 'info':     
                color = '\x1b[36m%s\x1b[0m'  
             break;
        case 'error':   
             color = '\x1b[31m%s\x1b[0m'   
             break;
        case 'warning':  
             color = '\x1b[33m%s\x1b[0m' 
             break;
        default: 
             color = color
    }
    console.log(color, message);
}