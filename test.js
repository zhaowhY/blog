console.log('/api/:id12/:name123'.match(/(?=:)\w+/g));

console.log((/(?=:)\w+/g).test('/api/:id12/:name123'));
