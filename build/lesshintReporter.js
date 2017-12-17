const fs = require('fs');
const path = require('path');
const reportPath = path.join(__dirname, '..', 'dist', 'reports');
const reportName = 'LessHint.html';

module.exports = new function(){
    let self = this;
    self.results = [];
    self.name = 'lesshintReporter';
    self.writeOut = function(){
      const date = new Date();
      let header = '<!DOCTYPE html lang="en-gb"><html><header><title>Less Lint Results</title><style type="text/css">body{font-family: sans-serif;} .warning{background: yellow;} .error{ background: red; }</style></header><body>';
      let footer = `</tbody></table><p>Created ${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}</p></body></html>`;
      
      let body = '<table><thead><tr><th>Path</th><th>Line</th><th>Position</th><th>Severity</th><th>Message</th><th>Linter</th></tr></thead><tbody>';
      self.results.forEach(function(r){
        body += (`<tr class="${r.severity == 'warning' ? 'warning' : 'error'}"><td>${r.fullPath}</td><td>${r.line}</td><td>${r.position}</td><td>${r.severity}</td><td>${r.message}</td><td>${r.linter}</td></tr>`);
      });

      if (!fs.existsSync(reportPath)){
        fs.mkdirSync(reportPath);
      }

      fs.writeFile(path.join(reportPath, reportName), header + body + footer);

      self.results.forEach(function(r){
        console.log(r);
      });

    }

    self.writeOutPointer = null;
    self.report = function(results) {
      if (results.length === 0) return;
      results.forEach(function(r){
        self.results.push(r);
      });

      if (self.writeOutPointer){
        clearInterval(self.writeOutPointer);
      }

      self.writeOutPointer = setTimeout(self.writeOut, 500);
    }
}
