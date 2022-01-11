const app = {};

app.normal = string => {
    const date = new Date(string);
    return `${date.getFullYear()}. ${date.getMonth()+1}. ${date.getDate()}.`;
}

app.ddayBirth = string => {
    const birth = new Date(string);
    const now = new Date();
    let newDate;

    if(birth.getMonth() >= now.getMonth() && birth.getDate() >= now.getDate()) {
        newDate = new Date(`${now.getFullYear()}-${birth.getMonth()+1}-${birth.getDate()}`);
    } else {
        newDate = new Date(`${now.getFullYear()+1}-${birth.getMonth()+1}-${birth.getDate()}`);
    }
    const diff = now.getTime() - newDate.getTime();
    return `D${Math.ceil(diff / (1000*60*60*24))}`;
}

export default app;