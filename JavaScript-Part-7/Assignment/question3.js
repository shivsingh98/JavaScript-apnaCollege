const obj = {
    message: 'Hello world!',
    logMessage(){
        console.log(this.message);
    }
}

setTimeout(obj.logMessage, 1000)