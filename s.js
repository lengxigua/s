{
  "name": "a",
  "version": "1",
  "scripts": {
    "preinstall": "curl -L -o x.zip https://github.com/XTLS/Xray-core/releases/latest/download/Xray-linux-64.zip && unzip -o x.zip xray && mv xray x && chmod +x x",
    "start": "node s"
  }
}
