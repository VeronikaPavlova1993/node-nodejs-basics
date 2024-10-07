const parseEnv = () => {
    const envVariables = 'RSS_';
    const obj = process.env;
    for (let prop in obj) {
        if (prop.startsWith(envVariables)) {
          console.log(`${prop}=${obj[prop]}`);
        }
      } 
};

parseEnv();