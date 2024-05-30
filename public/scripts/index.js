
const allElementsReplace = (e, txt) => {
    let es = document.querySelectorAll(`.${e}`);
    es.forEach(ess => {
        ess.innerHTML = txt;
    });
};


getPackageInfo("i18n4e").then((data) => {
    packageInfo = data;
    console.log(packageInfo);
    allElementsReplace("version", packageInfo.version);
    allElementsReplace("description", packageInfo.description);

});