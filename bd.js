var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c11cf9f14d3041d5b5482e6ff6ca6975');

var app = express();
// app.use(express.urlencoded());
app.use(cors());


app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 100000000 }));


app.use(bodyParser.json());
// app.use(express.urlencoded({
//   extended: true
// }));

var connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // port: "8085",
  database: "trabalho2"
});


app.listen(4000, function () {
  console.log('A correr na porta 4000!');
});



app.post('/registo', function (req, res) {

  connect.connect(function (err) {

    var query = "INSERT INTO user(nome, username, email, password, nacionalidade, morada) VALUES ('" + req.body.nome + "','" + req.body.username + "','" + req.body.email + "','" + req.body.password + "','" + req.body.nacionalidade + "','" + req.body.morada + "') ";
    // connect.connect(function () {
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
      // console.log(query)
    });;
    // });
  });
});

app.post('/registoAdmin', function (req, res) {

  connect.connect(function (err) {

    var query = "INSERT INTO admin(nome, username, email, password, idade, morada) VALUES ('" + req.body.nome + "','" + req.body.username + "','" + req.body.email + "','" + req.body.password + "','" + req.body.idade + "','" + req.body.morada + "') ";
    // connect.connect(function () {
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
      // console.log(query)
    });;
    // });
  });
});

app.post('/login', function (req, res) {
  connect.connect(function (err) {
    var query = "SELECT * FROM user WHERE email = '" + req.body.email + "' ";
    connect.query(query, function (err, result, fields) {
      // console.log(result);
      res.send(result);
    });
  });
});


app.get('/artista', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    connect.query("SELECT * FROM artista", function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});

app.post('/eliminaArtista', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    var query = "DELETE FROM artista WHERE idArtista =" + req.body.id;
    console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });;
  });
});


const upload = multer();
app.post('/criaArtista', function (req, res) {
  connect.connect(function (err) {

    // console.log(req);
    var query = "INSERT INTO artista(nome,idade,nacionalidade,foto) VALUES ('" + req.body.nomeArtista + "', '" + req.body.idadeArtista + "', '" + req.body.nacionalidadeArtista + "', '" + req.body.file + "')";
    // console.log(query)
    connect.query(query, function (err, result, fields) {

      // console.log(query);
      // if (err) throw err;
      res.send(result);
      // console.log(result);
      // console.log(err);
    });;
  });
});

app.post('/criaFilme', function (req, res) {
  connect.connect(function (err) {
    // console.log(req.file)
    if (err) console.log("erro connection " + err);
    var query = "INSERT INTO filmeserie(nome,duracao,anoProducao,realizador,elenco,linguagem,descricao,imdb,preco,foto,idCategoria,idTipoProduto) SELECT '" + req.body.nomeFilme + "', '" + req.body.duracaoFilme + "', '" + req.body.anoFilme + "', '" + req.body.realizadorFilme + "', '" + req.body.elencoFilme + "','" + req.body.linguagemFilme + "', '" + req.body.descricaoFilme + "','" + req.body.imdbFilme + "','" + req.body.precoFilme + "', '" + req.body.file + "', idCategoria , '1' FROM categoria WHERE nome = '" + req.body.categoriaFilme + "';";
    // console.log(query)
    connect.query(query, function (err, result, fields) {
      if (err) console.log("erro query" + err.code);
      else if (result) res.send(result);
      // console.log(result);

    });
  });
});

app.post('/eliminaFilme', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    var query = "DELETE FROM filmeserie WHERE idFilmeSerie =" + req.body.id;
    console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });;
  });
});


app.get('/filme', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;

    connect.query("SELECT f.* , c.nome as nomeCategoria FROM filmeserie f, categoria c Where f.idCategoria = c.idCategoria AND idTipoProduto = 1", function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});

app.get('/infoFilme', function (req, res) {
  connect.connect(function (err) {
    // console.log(req.body.id)
    // if (err) throw err;
    var query = "Select * FROM filmeserie WHERE idFilmeSerie =  '" + req.query.id + "' ";
    // console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});

app.get('/infoFilmeComprar', function (req, res) {
  connect.connect(function (err) {
    // console.log(req.body.id)
    // if (err) throw err;
    var query = "Select f.* , c.nome as nomeCategoria FROM filmeserie f, categoria c WHERE idFilmeSerie =  '" + req.query.id + "' AND f.idCategoria = c.idCategoria";
    //console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});


app.get('/infoFilmeComprarNome', function (req, res) {
  connect.connect(function (err) {
    // console.log(req.body.id)
    // if (err) throw err;
    var query = "Select f.* , c.nome as nomeCategoria FROM filmeserie f, categoria c WHERE f.nome =  '" + req.query.nome + "' AND f.idCategoria = c.idCategoria AND idTipoProduto = 1";
    //console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});

app.get('/infoSerieComprarNome', function (req, res) {
  connect.connect(function (err) {
    // console.log(req.body.id)
    // if (err) throw err;
    var query = "Select f.* , c.nome as nomeCategoria FROM filmeserie f, categoria c WHERE f.nome =  '" + req.query.nome + "' AND f.idCategoria = c.idCategoria AND idTipoProduto = 2";
    //console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});

app.get('/filmeHome', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;

    connect.query("SELECT f.* , c.nome as nomeCategoria FROM filmeserie f, categoria c Where f.idCategoria = c.idCategoria AND idTipoProduto = 1 LIMIT 10", function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});

app.get('/filmeHomeImdb', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;

    connect.query("SELECT f.* , c.nome as nomeCategoria FROM filmeserie f, categoria c Where f.idCategoria = c.idCategoria AND idTipoProduto = 1 ORDER BY imdb DESC LIMIT 10", function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});



app.post('/criaSerie', function (req, res) {
  connect.connect(function (err) {

    // if (err) throw err;
    var query = "INSERT INTO filmeserie(nome,duracao,anoProducao,realizador,elenco,linguagem,descricao,imdb,preco,foto,idCategoria,idTipoProduto) SELECT '" + req.body.nomeSerie + "', '" + req.body.temporadaSerie + "', '" + req.body.anoSerie + "', '" + req.body.realizadorSerie + "', '" + req.body.elencoSerie + "','" + req.body.linguagemSerie + "', '" + req.body.descricaoSerie + "','" + req.body.imdbSerie + "','" + req.body.precoSerie + "', '" + req.body.file + "', idCategoria , '2' FROM categoria WHERE nome = '" + req.body.categoriaSerie + "';";
    //  console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(err);

    });;
  });
});

app.get('/infoSerie', function (req, res) {
  connect.connect(function (err) {
    // console.log(req.body.id)
    // if (err) throw err;
    var query = "Select * FROM filmeserie WHERE idFilmeSerie =  '" + req.query.id + "' ";
    console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});


app.post('/EditarFilme', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    if (!req.body.file) {
      var query = "UPDATE filmeSerie set nome ='" + req.body.nomeFilme + "', duracao ='" + req.body.duracaoFilme + "', anoProducao='" + req.body.anoFilme + "', realizador='" + req.body.realizadorFilme + "', elenco='" + req.body.elencoFilme + "', linguagem='" + req.body.linguagemFilme + "', descricao='" + req.body.descricaoFilme + "', imdb='" + req.body.imdbFilme + "', preco='" + req.body.precoFilme + "', idTipoProduto = '1', idCategoria= (SELECT idCategoria FROM categoria WHERE nome='" +req.body.categoriaFilme +"') WHERE idFilmeSerie = '" +req.body.id +"' ";
      connect.query(query, function (err, result, fields) {
        // console.log(query);
        // if (err) throw err;
        res.send(result);
        // console.log(err);
  
      });
    }
    else {
      var query = "UPDATE filmeSerie set nome ='" + req.body.nomeFilme + "', duracao ='" + req.body.duracaoFilme + "', anoProducao='" + req.body.anoFilme + "' , foto='" + req.body.file + "' , realizador='" + req.body.realizadorFilme + "', elenco='" + req.body.elencoFilme + "', linguagem='" + req.body.linguagemFilme + "', descricao='" + req.body.descricaoFilme + "', imdb='" + req.body.imdbFilme + "', preco='" + req.body.precoFilme + "', idTipoProduto = '1', idCategoria= (SELECT idCategoria FROM categoria WHERE nome='" +req.body.categoriaFilme +"') WHERE idFilmeSerie = '" +req.body.id +"' ";

      connect.query(query, function (err, result, fields) {
        // console.log(query);
        // if (err) throw err;
        res.send(result);
        // console.log(err);
  
      });
    }
  });
});

app.get('/serie', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;

    connect.query("SELECT s.* , c.nome as nomeCategoria FROM filmeserie s, categoria c Where s.idCategoria = c.idCategoria AND idTipoProduto = 2", function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});

app.get('/serieHome', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;

    connect.query("SELECT s.* ,c.nome as nomeCategoria FROM filmeserie s, categoria c Where s.idCategoria = c.idCategoria AND idTipoProduto = 2 LIMIT 10", function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});

app.get('/serieHomeImdb', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;

    connect.query("SELECT f.* , c.nome as nomeCategoria FROM filmeserie f, categoria c Where f.idCategoria = c.idCategoria AND idTipoProduto = 2 ORDER BY imdb DESC LIMIT 10", function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});

app.post('/eliminaSerie', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    var query = "DELETE FROM filmeserie WHERE idFilmeSerie =" + req.body.id;
    // console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });;
  });
});



app.post('/EditarSerie', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    if (!req.body.file) {
      var query = "UPDATE filmeSerie set nome ='" + req.body.nomeSerie + "', duracao ='" + req.body.temporadasSerie + "', anoProducao='" + req.body.anoSerie + "', realizador='" + req.body.realizadorSerie + "', elenco='" + req.body.elencoSerie + "', linguagem='" + req.body.linguagemSerie + "', descricao='" + req.body.descricaoSerie + "', imdb='" + req.body.imdbSerie + "', preco='" + req.body.precoSerie + "', idTipoProduto = '2', idCategoria= (SELECT idCategoria FROM categoria WHERE nome='" +req.body.categoriaSerie +"') WHERE idFilmeSerie = '" +req.body.id +"' ";
      connect.query(query, function (err, result, fields) {
        // console.log(query);
        // if (err) throw err;
        res.send(result);
        // console.log(err);
  
      });
    }
    else {
      var query = "UPDATE filmeSerie set nome ='" + req.body.nomeSerie + "', duracao ='" + req.body.temporadasSerie + "', anoProducao='" + req.body.anoSerie + "' , foto='" + req.body.file + "' , realizador='" + req.body.realizadorSerie + "', elenco='" + req.body.elencoSerie + "', linguagem='" + req.body.linguagemSerie + "', descricao='" + req.body.descricaoSerie + "', imdb='" + req.body.imdbSerie + "', preco='" + req.body.precoSerie + "', idTipoProduto = '2', idCategoria= (SELECT idCategoria FROM categoria WHERE nome='" +req.body.categoriaSerie +"') WHERE idFilmeSerie = '" +req.body.id +"' ";

      connect.query(query, function (err, result, fields) {
        // console.log(query);
        // if (err) throw err;
        res.send(result);
        // console.log(err);
  
      });
    }
  });
});


app.post('/eliminaCategoria', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    var query = "DELETE FROM categoria WHERE idCategoria =" + req.body.id;
    // console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });;
  });
});

app.post('/criaCategoria', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    var query = "INSERT INTO categoria(nome) VALUES ('" + req.body.nomeCategoria + "')";
    // console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });;
  });
});

app.post('/loginAdmin', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    var query = "SELECT * FROM admin WHERE email='" + req.body.email + "' ";
    // console.log(query)
    connect.query(query, function (err, result, fields) {
      // console.log(result);
      res.send(result);
    });
  });
});


app.get('/categoria', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    connect.query("SELECT * FROM categoria", function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});


app.post('/infoAdmin', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    connect.query("SELECT * FROM admin where username='" + req.body.username + "' ", function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  });
});

app.post('/EditarInfoAdmin', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    if (req.body.password) {
      connect.query("UPDATE `admin` SET `nome` = '" + req.body.nome + "', `email` = '" + req.body.email + "', `telemovel` = '" + req.body.telemovel + "',  `password` = '" + req.body.password + "' where username='" + req.body.username + "' ", function (err, result, fields) {
        // if (err) throw err;
        res.send(result);
        // console.log(result);
      });
    }
    else {
      connect.query("UPDATE `admin` SET `nome` = '" + req.body.nome + "', `email` = '" + req.body.email + "', `telemovel` = '" + req.body.telemovel + "' where username='" + req.body.username + "' ", function (err, result, fields) {
        // if (err) throw err;
        res.send(result);
        // console.log(result);
      });
    }
  });
});

app.get('/compras', function (req, res) {
  comprasFilmes = [];
  connect.connect(function (err) {
    if (err) console.log(err);
    connect.query("SELECT * FROM compra", function (err, result) {
      if (err) console.log(err);
      if (result){
        comprasFilmes.push(result);
        //console.log(result);
      }
      
    });
    var query = "SELECT idFilmeSerie, nome, idTipoProduto FROM filmeserie;";
    connect.query(query, function (err, result, fields) {
      if (err) console.log(err);
      if (result){
        comprasFilmes.push(result);
        //console.log(result);
        res.send(comprasFilmes);
      }
    });;
  });
});

app.get('/noticias', function (req, res) {
  newsapi.v2.everything({
    q: [
      'filme',
      'serie'
    ],
    language: 'pt',
    sortBy: 'relevancy'
  }).then(response => {
    //console.log(response.status);
    res.send(response.articles);
  });
});

// SELECT '" + req.body.nomeSerie + "', '" + req.body.temporadaSerie + "', '" + req.body.anoSerie + "', '" + req.body.realizadorSerie + "', '" + req.body.elencoSerie + "','" + req.body.linguagemSerie + "', '" + req.body.descricaoSerie + "','" + req.body.imdbSerie + "','" + req.body.precoSerie + "', '" + req.body.file + "', idCategoria , '2' FROM categoria WHERE nome = '" + req.body.categoriaSerie + "';";

app.post('/criaCompra', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    var query = "INSERT INTO compra(precoTotal,data,idProduto,quantidade,idUser) SELECT '" + req.body.precoTotal + "', '" + req.body.data + "', '" + req.body.idProduto + "', '" + req.body.quantidade + "',   idUser  FROM user WHERE username = '" + req.body.idUser + "';";
    // console.log(query)
    connect.query(query, function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      // console.log(result);
    });;
  });
});


app.post('/infoCliente', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    connect.query("SELECT * FROM user where username='" + req.body.username + "' ", function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
      console.log(result);
    });
  });
});

app.post('/EditarInfoCliente', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    if (req.body.password) {
      connect.query("UPDATE `user` SET `nome` = '" + req.body.nome + "', `email` = '" + req.body.email + "', `morada` = '" + req.body.morada + "',  `password` = '" + req.body.password + "' where username='" + req.body.username + "' ", function (err, result, fields) {
        // if (err) throw err;
        res.send(result);
        // console.log(result);
      });
    }
    else {
      connect.query("UPDATE `user` SET `nome` = '" + req.body.nome + "', `email` = '" + req.body.email + "', `morada` = '" + req.body.morada + "' where username='" + req.body.username + "' ", function (err, result, fields) {
        // if (err) throw err;
        res.send(result);
        // console.log(result);
      });
    }
  });
});

app.post('/comprasCliente', function (req, res) {
  comprasFilmes = [];
  connect.connect(function (err) {
    if (err) console.log(err);
    connect.query("SELECT * FROM compra WHERE idUser = '" + req.body.username + "' ", function (err, result) {
      if (err) console.log(err);
      if (result){
        comprasFilmes.push(result);
        //console.log(result);
      }
      
    });
    var query = "SELECT idFilmeSerie, nome, idTipoProduto FROM filmeserie;";
    connect.query(query, function (err, result, fields) {
      if (err) console.log(err);
      if (result){
        comprasFilmes.push(result);
        //console.log(result);
        res.send(comprasFilmes);
      }
    });
  });
});

app.post('/EditarArtista', function (req, res) {
  connect.connect(function (err) {
    // if (err) throw err;
    if (!req.body.file) {
      var query = "UPDATE artista set nome ='" + req.body.nomeArtista + "', nacionalidade ='" + req.body.nacionalidade + "', idade='" + req.body.idade + "' WHERE idArtista = '" +req.body.id +"' ";
      connect.query(query, function (err, result, fields) {
        // console.log(query);
        // if (err) throw err;
        res.send(result);
        // console.log(err);
  
      });
    }
    else {
      var query = "UPDATE artista set nome ='" + req.body.nomeArtista + "', nacionalidade ='" + req.body.nacionalidade + "', idade='" + req.body.idade + "' , foto='" + req.body.file + "' WHERE idFilmeSerie = '" +req.body.id +"' ";

      connect.query(query, function (err, result, fields) {
        // console.log(query);
        // if (err) throw err;
        res.send(result);
        // console.log(err);
  
      });
    }
  });
});