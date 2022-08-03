const svg = `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
<style>
  .small { font: italic 13px sans-serif; }
  .heavy { font: bold 30px sans-serif; }

  /* Note that the color of the text is set with the    *
   * fill property, the color property is for HTML only */
  .Rrrrr { font: italic 40px serif; fill: red; }
</style>

<text x="20" y="35" class="small">My</text>
<text x="40" y="35" class="heavy">cat</text>
<text x="55" y="55" class="small">is</text>
<text x="65" y="55" class="Rrrrr">Grumpy!</text>
</svg>
`;

const express = require('express');
const svg2img = require('node-svg2img');

const app = express();

// var input = Buffer.from(...);
// var input = '<svg>...</svg>';
// var input = 'data:image/xml+svg;base64,...';
// var input = 'http://url.to/a.svg';
app.use(express.text())

app.post('/', (req, res) => {
    res.send('use /png with text body svg');
    
});

app.post('/png', (req, res) => {
    svg2img(req.body, { format: 'png' }, function (err, data) {
        if (err) return console.error(err);
        res.writeHead(200, {
          'Content-Type': 'image/png',
          'Content-Length': data.length
        });
        res.end(data); 
    });
    
});

app.listen(8080 || process.env.PORT, () => {
    console.log('Listening on port', 8080 || process.env.PORT);
});