const clock = () => {
    let current = new Date();
    let h = current.getHours();
    let m = current.getMinutes();
    let s = current.getSeconds();
    let session = 'AM';

    if(h == 00) {
        h = 12;
    }

    if(h > 12) {
        h = h-12;
        session = 'PM';
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
    document.getElementById('session').innerHTML = session;
}

const darkmode = () => {
    let dark = document.body;
    dark.className = 'dark-mode';
    let content = document.getElementById('darklight');
}

const lightmode = () => {
    let light = document.body;
    light.className = 'light-mode';
    let content = document.getElementById('darklight');
}

setInterval(clock, 1000);