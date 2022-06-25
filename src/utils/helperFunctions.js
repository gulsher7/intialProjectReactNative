
import { showMessage } from 'react-native-flash-message'

const showError = (message) => {
    showMessage({
        type: "danger",
        icon: 'danger',
        message
    })
}

const showSuccess = (message) => {
    showMessage({
        type: "success",
        icon: 'success',
        message
    })
}


export function otpTimerCounter(seconds){
    // alert(seconds)
    let m=Math.floor(seconds/60);
    let s=seconds%60;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    return (`${m}:${s}`)
}

export {
    showError,
    showSuccess
};
