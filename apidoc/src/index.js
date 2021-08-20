import Express from 'express';
import modules from './modules';



let app = Express()

app.use('/doc',Express.static('dist_doc'));

Object.keys(modules).forEach(key => {
  Object.keys(modules[key]).forEach(subkey => {
    console.log(`/api/${key}/${subkey}`)
    app.get(`/api/${key}/${subkey}`, function (req, res) {
      res.send(modules[key][subkey]());
    })
  })
})

app.listen(8080, () => console.log('server is running at http://localhost:8080'))