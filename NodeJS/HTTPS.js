const https = require("https");

const options = {
  hostname: "example.com",
  port: 443,
  path: "/todos",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();

const data = JSON.stringify({
  todo: "buy the milk",
});

const Options = {
  hostname: "whatever.com",
  port: 443,
  path: "/todos",
  method: "POST",
  headers: {
    "content-Type": "application/json",
    content_Length: data.length,
  },
};

const Req = https.request(Options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

Req.on("erroer", (error) => {
  console.error(error);
});

Req.write(data);
Req.end();
const { Blob, resolveObjectURL } = require("node:buffer");

const blob = new Blob(["hello"]);
const id = URL.createObjectURL(blob);

// later...

const otherBlob = resolveObjectURL(id);
console.log(otherBlob.size);
