packageInfo = undefined;

const getPackageInfo = async (packageName) => {
    const response = await fetch(`https://registry.npmjs.org/${packageName}/latest`);
    const data = await response.json();
    packageInfo = data;
    return data;
    }
