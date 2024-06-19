chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    const responseHeaders = details.responseHeaders || [];

    const filteredHeaders = responseHeaders.filter(
      (header) =>
        ![
          "access-control-allow-origin",
          "access-control-allow-methods",
          "access-control-allow-headers",
        ].includes(header.name.toLowerCase())
    );

    filteredHeaders.push({ name: "Access-Control-Allow-Origin", value: "*" });
    filteredHeaders.push({
      name: "Access-Control-Allow-Methods",
      value: "GET, POST, PUT, DELETE, OPTIONS",
    });
    filteredHeaders.push({
      name: "Access-Control-Allow-Headers",
      value: "Content-Type, Authorization",
    });

    return { responseHeaders: filteredHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders"]
);
