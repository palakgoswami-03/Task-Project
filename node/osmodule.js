const os = require("os");
console.log("Platform:",os.platform());
console.log("User:",os.userInfo())
console.log("CPU Architecture:",os.arch());
console.log("Free memory:",os.freemem(),"bytes");
console.log("Total Memory:",os.totalmem(),"bytes");
console.log("System Uptime:",os.uptime(),"seconds");
console.log("home directory",os.homedir());
console.log("Host Name:",os.hostname());
console.log("network interfaces",os.networkInterfaces());
console.log("CPU iNFO:",os.cpus());
console.log("Temporary Directory:",os.tmpdir());
console.log("Operating system:",os.type())
